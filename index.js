// Dark Mode
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check local storage for user preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.setAttribute("data-bs-theme", "dark");
        toggleButton.classList.remove("btn-dark");  // Remove 'btn-dark' when in dark mode
        toggleButton.classList.add("btn-light");   // Add 'btn-light' when in dark mode
    }

    toggleButton.addEventListener("click", function () {
        if (body.getAttribute("data-bs-theme") === "dark") {
            body.removeAttribute("data-bs-theme");
            localStorage.setItem("darkMode", "disabled");
            toggleButton.classList.remove("btn-light");  // Remove 'btn-light' when switching off dark mode
            toggleButton.classList.add("btn-dark");     // Add 'btn-dark' when not in dark mode
        } else {
            body.setAttribute("data-bs-theme", "dark");
            localStorage.setItem("darkMode", "enabled");
            toggleButton.classList.remove("btn-dark");  // Remove 'btn-dark' when switching to dark mode
            toggleButton.classList.add("btn-light");    // Add 'btn-light' when in dark mode
        }
    });
});

/*Number Formatter*/
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    trailingZeroDisplay: 'stripIfInteger'
});


//Enter acts like tab
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const currentElement = document.activeElement;
        const inputs = Array.from(document.querySelectorAll("input"));
        const currentIndex = inputs.indexOf(currentElement);
        if (currentIndex >= 0 && currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        } else if (currentIndex === inputs.length - 1) {
            currentElement.blur();
        }
    }
});

/*Listen for Inputs*/
document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", (event) => {
        sanitizeNumber(event.target);
        calculateTotals();
    });

    input.addEventListener("blur", (event) => {
        sanitizeNumber(event.target);
        calculateTotals();
    });
});

// Function to ensure only valid numbers are entered
function sanitizeNumber(input) {
    let cursorPosition = input.selectionStart; // Get cursor position before modifying value
    let value = input.value;
    
    // Remove invalid characters (anything that’s not a number or a single dot)
    let sanitizedValue = value.replace(/[^0-9.]/g, "");
    
    // Ensure there is only one decimal point
    let parts = sanitizedValue.split('.');
    if (parts.length > 2) {
        sanitizedValue = parts[0] + '.' + parts.slice(1).join('');
    }

    // Check if value actually changed
    if (input.value !== sanitizedValue) {
        input.value = sanitizedValue;

        // Restore cursor position
        let newCursorPosition = cursorPosition - (value.length - sanitizedValue.length);
        input.setSelectionRange(newCursorPosition, newCursorPosition);
    }
}



function calculateTotals() {
    // Helper function to get parsed input values
    const getValue = (id) => parseFloat(document.getElementById(id)?.value) || 0;

    // List of renovation-related IDs
    const renoFields = [
        "demo", "foundation", "ext", "frame", "elec", "window", "plumbing", "hvac",
        "drywall", "door", "paint", "bathroom", "kitchen", "floor", "appliance",
        "gar", "concrete", "land", "misc1", "misc2"
    ];

    // Calculate renovation total dynamically
    const renoCalcTotal = renoFields.reduce((sum, id) => sum + getValue(id), 0);

    // Retrieve other necessary values
    const values = {
        sPrice: getValue("sPrice"),
        purchase: getValue("purchase"),
        yInsurance: getValue("yInsurance"),
        yTaxes: getValue("yTaxes"),
        hoa: getValue("hoa"),
        hold: getValue("hold"),
        waterHold: getValue("waterHold"),
        elecHold: getValue("elecHold"),
        securityHold: getValue("securityHold"),
        down: getValue("down"),
        appr: getValue("appr"),
        lendFees: getValue("lendFees"),
        interestHard: getValue("interestHard"),
        ltv: getValue("ltv"),
        interestDSCR: getValue("interestDSCR"),
        years: getValue("years"),
        arv: getValue("arv"),
        rent: getValue("rent"),
        margin: getValue("margin"),
        monthMaintPer: getValue("monthMaintPer"),
        vacancyPer: getValue("vacancyPer"),
        monthManage: getValue("monthManage"),
        monthLeaseFee: getValue("monthLeaseFee")
    };

    // Calculations
    const apxCCTotal = values.sPrice * 0.066;
    const renoHouseTotal = renoCalcTotal + values.purchase;
    const holdCostTotal = ((values.yInsurance + values.yTaxes + values.hoa) / 365 * values.hold) + values.waterHold + values.elecHold + values.securityHold;
    const netTotal = values.sPrice - apxCCTotal - renoHouseTotal - holdCostTotal;
    const downPayTotal = renoHouseTotal * values.down * 0.01;
    const totalCloseTotal = downPayTotal + values.appr + values.lendFees;
    const loanAmountHMTotal = renoHouseTotal - downPayTotal;
    const monthPayTotal = values.interestHard * 0.01 * loanAmountHMTotal / 12;
    const hardMoneyTotal = (monthPayTotal / 30) * values.hold + values.appr + values.lendFees;
    const netHardTotal = netTotal - hardMoneyTotal;
    const loanAmountDSCRTotal = values.arv * values.ltv * 0.01;
    
    const ratePeriod = values.interestDSCR / 12 * 0.01;
    const numPayments = values.years * 12;
    const paymentDSCRTotal = (loanAmountDSCRTotal * ratePeriod) / (1 - Math.pow(1 + ratePeriod, -numPayments));

    const monthInsureDSCRTotal = values.yInsurance / 12;
    const monthTaxesDSCRTotal = values.yTaxes / 12;
    const monthHOATotal = values.hoa / 12;
    const monthDSCRTotal = paymentDSCRTotal + monthInsureDSCRTotal + monthTaxesDSCRTotal + monthHOATotal;
    const dscrTotal = values.rent / monthDSCRTotal;
    const monthCashFlowTotal = values.rent - monthDSCRTotal;
    const holdMAOTotal = values.arv * (1 - (values.margin * 0.01)) - renoCalcTotal;
    const flipMAOTotal = holdMAOTotal - apxCCTotal;
    const monthMaintTotal = values.rent * values.monthMaintPer * 0.01;
    const monthVacancyTotal = values.rent * values.vacancyPer * 0.01;
    const monthHoldCostTotal = monthMaintTotal + monthVacancyTotal + values.monthManage + values.monthLeaseFee;

    // Batch update DOM
    const updates = {
        renoTotal: renoCalcTotal,
        apxCC: apxCCTotal,
        renoHouse: renoHouseTotal,
        net: netTotal,
        holdCost: holdCostTotal,
        hardMoney: hardMoneyTotal,
        downPay: downPayTotal,
        totalClose: totalCloseTotal,
        loanAmountHM: loanAmountHMTotal,
        monthPay: monthPayTotal,
        loanAmountDSCR: loanAmountDSCRTotal,
        paymentDSCR: paymentDSCRTotal,
        monthInsureDSCR: monthInsureDSCRTotal,
        monthTaxDSCR: monthTaxesDSCRTotal,
        monthHOA: monthHOATotal,
        monthTotal: monthDSCRTotal,
        dscr: dscrTotal.toFixed(2),
        monthCashFlow: monthCashFlowTotal,
        netHard: netHardTotal,
        flipMAO: flipMAOTotal,
        holdMAO: holdMAOTotal,
        monthMaint: monthMaintTotal,
        monthVacancy: monthVacancyTotal,
        monthHoldCost: monthHoldCostTotal
    };

    Object.entries(updates).forEach(([id, value]) => {
        document.getElementById(id).innerText = formatter.format(value);
    });
}

