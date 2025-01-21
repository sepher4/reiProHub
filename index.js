/*Number Formatter*/
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    trailingZeroDisplay: 'stripIfInteger'
});



/*Change Hero Image*/
function changeImage(e) {
    const heroImage = document.getElementById("mainHero");
    let heroImageURL = "url('img/hero" + e + ".jpg')"
    if (heroImage) {
        heroImage.style.backgroundImage = heroImageURL;
    }
}

/*Listen for Inputs*/
document.getElementById("demo").addEventListener("input", calculateTotals);
document.getElementById("demo").addEventListener("blur", calculateTotals);
document.getElementById("foundation").addEventListener("input", calculateTotals);
document.getElementById("foundation").addEventListener("blur", calculateTotals);
document.getElementById("ext").addEventListener("input", calculateTotals);
document.getElementById("ext").addEventListener("blur", calculateTotals);
document.getElementById("frame").addEventListener("input", calculateTotals);
document.getElementById("frame").addEventListener("blur", calculateTotals);
document.getElementById("elec").addEventListener("input", calculateTotals);
document.getElementById("elec").addEventListener("blur", calculateTotals);
document.getElementById("window").addEventListener("input", calculateTotals);
document.getElementById("window").addEventListener("blur", calculateTotals);
document.getElementById("plumbing").addEventListener("input", calculateTotals);
document.getElementById("plumbing").addEventListener("blur", calculateTotals);
document.getElementById("hvac").addEventListener("input", calculateTotals);
document.getElementById("hvac").addEventListener("blur", calculateTotals);
document.getElementById("drywall").addEventListener("input", calculateTotals);
document.getElementById("drywall").addEventListener("blur", calculateTotals);
document.getElementById("door").addEventListener("input", calculateTotals);
document.getElementById("door").addEventListener("blur", calculateTotals);
document.getElementById("paint").addEventListener("input", calculateTotals);
document.getElementById("paint").addEventListener("blur", calculateTotals);
document.getElementById("bathroom").addEventListener("input", calculateTotals);
document.getElementById("bathroom").addEventListener("blur", calculateTotals);
document.getElementById("kitchen").addEventListener("input", calculateTotals);
document.getElementById("kitchen").addEventListener("blur", calculateTotals);
document.getElementById("floor").addEventListener("input", calculateTotals);
document.getElementById("floor").addEventListener("blur", calculateTotals);
document.getElementById("appliance").addEventListener("input", calculateTotals);
document.getElementById("appliance").addEventListener("blur", calculateTotals);
document.getElementById("gar").addEventListener("input", calculateTotals);
document.getElementById("gar").addEventListener("blur", calculateTotals);
document.getElementById("concrete").addEventListener("input", calculateTotals);
document.getElementById("concrete").addEventListener("blur", calculateTotals);
document.getElementById("land").addEventListener("input", calculateTotals);
document.getElementById("land").addEventListener("blur", calculateTotals);
document.getElementById("misc1").addEventListener("input", calculateTotals);
document.getElementById("misc1").addEventListener("blur", calculateTotals);
document.getElementById("misc2").addEventListener("input", calculateTotals);
document.getElementById("misc2").addEventListener("blur", calculateTotals);
document.getElementById("sPrice").addEventListener("input", calculateTotals);
document.getElementById("sPrice").addEventListener("blur", calculateTotals);
document.getElementById("purchase").addEventListener("input", calculateTotals);
document.getElementById("purchase").addEventListener("blur", calculateTotals);
document.getElementById("net").addEventListener("input", calculateTotals);
document.getElementById("net").addEventListener("blur", calculateTotals);
document.getElementById("yInsurance").addEventListener("input", calculateTotals);
document.getElementById("yInsurance").addEventListener("blur", calculateTotals);
document.getElementById("yTaxes").addEventListener("input", calculateTotals);
document.getElementById("yTaxes").addEventListener("blur", calculateTotals);
document.getElementById("hoa").addEventListener("input", calculateTotals);
document.getElementById("hoa").addEventListener("blur", calculateTotals);
document.getElementById("hold").addEventListener("input", calculateTotals);
document.getElementById("hold").addEventListener("blur", calculateTotals);
document.getElementById("waterHold").addEventListener("input", calculateTotals);
document.getElementById("waterHold").addEventListener("blur", calculateTotals);
document.getElementById("securityHold").addEventListener("input", calculateTotals);
document.getElementById("securityHold").addEventListener("blur", calculateTotals);
document.getElementById("elecHold").addEventListener("input", calculateTotals);
document.getElementById("elecHold").addEventListener("blur", calculateTotals);
document.getElementById("down").addEventListener("input", calculateTotals);
document.getElementById("down").addEventListener("blur", calculateTotals);
document.getElementById("appr").addEventListener("blur", calculateTotals);
document.getElementById("appr").addEventListener("blur", calculateTotals);
document.getElementById("doc").addEventListener("input", calculateTotals);
document.getElementById("doc").addEventListener("input", calculateTotals);
document.getElementById("interestHard").addEventListener("input", calculateTotals);
document.getElementById("interestHard").addEventListener("input", calculateTotals);
document.getElementById("ltv").addEventListener("input", calculateTotals);
document.getElementById("ltv").addEventListener("input", calculateTotals);
document.getElementById("interestDSCR").addEventListener("input", calculateTotals);
document.getElementById("interestDSCR").addEventListener("input", calculateTotals);
document.getElementById("years").addEventListener("input", calculateTotals);
document.getElementById("years").addEventListener("input", calculateTotals);
document.getElementById("arv").addEventListener("input", calculateTotals);
document.getElementById("arv").addEventListener("input", calculateTotals);
document.getElementById("rent").addEventListener("input", calculateTotals);
document.getElementById("rent").addEventListener("input", calculateTotals);
document.getElementById("margin").addEventListener("input", calculateTotals);
document.getElementById("margin").addEventListener("input", calculateTotals);

function calculateTotals() {
    const demoValue = parseFloat(document.getElementById("demo").value) || 0;
    const foundationValue = parseFloat(document.getElementById("foundation").value) || 0;
    const extValue = parseFloat(document.getElementById("ext").value) || 0;
    const frameValue = parseFloat(document.getElementById("frame").value) || 0;
    const elecValue = parseFloat(document.getElementById("elec").value) || 0;
    const windowValue = parseFloat(document.getElementById("window").value) || 0;
    const plumbingValue = parseFloat(document.getElementById("plumbing").value) || 0;
    const hvacValue = parseFloat(document.getElementById("hvac").value) || 0;
    const drywallValue = parseFloat(document.getElementById("drywall").value) || 0;
    const doorValue = parseFloat(document.getElementById("door").value) || 0;
    const paintValue = parseFloat(document.getElementById("paint").value) || 0;
    const bathroomValue = parseFloat(document.getElementById("bathroom").value) || 0;
    const kitchenValue = parseFloat(document.getElementById("kitchen").value) || 0;
    const floorValue = parseFloat(document.getElementById("floor").value) || 0;
    const applianceValue = parseFloat(document.getElementById("appliance").value) || 0;
    const garValue = parseFloat(document.getElementById("gar").value) || 0;
    const concreteValue = parseFloat(document.getElementById("concrete").value) || 0;
    const landValue = parseFloat(document.getElementById("land").value) || 0;
    const misc1Value = parseFloat(document.getElementById("misc1").value) || 0;
    const misc2Value = parseFloat(document.getElementById("misc2").value) || 0;
    const sPriceValue = parseFloat(document.getElementById("sPrice").value) || 0;
    const purchaseValue = parseFloat(document.getElementById("purchase").value) || 0;
    const yInsuranceValue = parseFloat(document.getElementById("yInsurance").value) || 0;
    const yTaxesValue = parseFloat(document.getElementById("yTaxes").value) || 0;
    const hoaValue = parseFloat(document.getElementById("hoa").value) || 0;
    const holdValue = parseFloat(document.getElementById("hold").value) || 0;
    const waterHoldValue = parseFloat(document.getElementById("waterHold").value) || 0;
    const elecHoldValue = parseFloat(document.getElementById("elecHold").value) || 0;
    const securityHoldValue = parseFloat(document.getElementById("securityHold").value) || 0;
    const downValue = parseFloat(document.getElementById("down").value) || 0;
    const apprValue = parseFloat(document.getElementById("appr").value) || 0;
    const docValue = parseFloat(document.getElementById("doc").value) || 0;
    const interestHardValue = parseFloat(document.getElementById("interestHard").value) || 0;
    const ltvValue = parseFloat(document.getElementById("ltv").value) || 0;
    const interestDSCRValue = parseFloat(document.getElementById("interestDSCR").value) || 0;
    const yearsValue = parseFloat(document.getElementById("years").value) || 0;
    const arvValue = parseFloat(document.getElementById("arv").value) || 0;
    const rentValue = parseFloat(document.getElementById("rent").value) || 0;
    const marginValue = parseFloat(document.getElementById("margin").value) || 0;
    
    const renoCalcTotal = demoValue + foundationValue + extValue + frameValue + elecValue + windowValue + plumbingValue + hvacValue + drywallValue + doorValue + paintValue + bathroomValue + kitchenValue + floorValue + applianceValue + garValue + concreteValue + landValue + misc1Value + misc2Value;
    const apxCCTotal = (sPriceValue * 0.066);
    const renoHouseTotal = renoCalcTotal + purchaseValue;
    const holdCostTotal = ((yInsuranceValue + yTaxesValue + hoaValue) / 365 * holdValue) + waterHoldValue + elecHoldValue + securityHoldValue;
    const netTotal = sPriceValue - apxCCTotal - renoHouseTotal - holdCostTotal;
    const downPayTotal = renoHouseTotal * downValue * 0.01;
    const totalCloseTotal = downPayTotal + apprValue + docValue;
    const loanAmountHMTotal = renoHouseTotal - downPayTotal;
    const monthPayTotal = interestHardValue * 0.01 * loanAmountHMTotal / 12;
    const hardMoneyTotal = (monthPayTotal / 30 ) *  holdValue + apprValue + docValue;
    const netHardTotal = netTotal - hardMoneyTotal;
    const loanAmountDSCRTotal = arvValue * ltvValue * 0.01;
    const ratePeriod = interestDSCRValue / 12 * 0.01;
    const numPayments = yearsValue * 12;
    const paymentDSCRTotal = (loanAmountDSCRTotal * ratePeriod) / (1 - Math.pow(1 + ratePeriod, -numPayments));
    const monthInsureDSCRTotal =  yInsuranceValue / 12;
    const monthTaxesDSCRTotal = yTaxesValue / 12;
    const monthHOATotal = hoaValue / 12;
    const monthDSCRTotal = paymentDSCRTotal + monthInsureDSCRTotal + monthTaxesDSCRTotal + monthHOATotal;
    const dscrTotal = rentValue / monthDSCRTotal;
    const monthCashFlowTotal = rentValue - monthDSCRTotal;
    const holdMAOTotal = arvValue * (1 - (marginValue * 0.01)) - renoCalcTotal;
    const flipMAOTotal = holdMAOTotal - apxCCTotal;
    

    document.getElementById("renoTotal").innerText = `${formatter.format(renoCalcTotal)}`;
    document.getElementById("apxCC").innerText = `${formatter.format(apxCCTotal)}`;
    document.getElementById("renoHouse").innerText = `${formatter.format(renoHouseTotal)}`;
    document.getElementById("net").innerText = `${formatter.format(netTotal)}`;
    document.getElementById("holdCost").innerText = `${formatter.format(holdCostTotal)}`;
    document.getElementById("hardMoney").innerText = `${formatter.format(hardMoneyTotal)}`;
    document.getElementById("downPay").innerText = `${formatter.format(downPayTotal)}`;
    document.getElementById("totalClose").innerText = `${formatter.format(totalCloseTotal)}`;
    document.getElementById("loanAmountHM").innerText = `${formatter.format(loanAmountHMTotal)}`;
    document.getElementById("monthPay").innerText = `${formatter.format(monthPayTotal)}`;
    document.getElementById("loanAmountDSCR").innerText = `${formatter.format(loanAmountDSCRTotal)}`;
    document.getElementById("paymentDSCR").innerText = `${formatter.format(paymentDSCRTotal)}`;
    document.getElementById("monthInsureDSCR").innerText = `${formatter.format(monthInsureDSCRTotal)}`;
    document.getElementById("monthTaxDSCR").innerText = `${formatter.format(monthTaxesDSCRTotal)}`;
    document.getElementById("monthHOA").innerText = `${formatter.format(monthHOATotal)}`;
    document.getElementById("monthTotal").innerText = `${formatter.format(monthDSCRTotal)}`;
    document.getElementById("dscr").innerText = `${dscrTotal.toFixed(2)}`;
    document.getElementById("monthCashFlow").innerText = `${formatter.format(monthCashFlowTotal)}`;
    document.getElementById("netHard").innerText = `${formatter.format(netHardTotal)}`;
    document.getElementById("flipMAO").innerText = `${formatter.format(flipMAOTotal)}`;
    document.getElementById("holdMAO").innerText = `${formatter.format(holdMAOTotal)}`;
}

