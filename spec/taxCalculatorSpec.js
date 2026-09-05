const {
  calculateTaxableIncome,
  calculateTax,
  calculateAfterTaxIncome
} = require("../taxCalculator");

describe("Tax Calculator", function () {
  it("calculates taxable income after deductions", function () {
    expect(calculateTaxableIncome(50000, 5000)).toBe(45000);
  });

  it("does not return negative taxable income", function () {
    expect(calculateTaxableIncome(5000, 8000)).toBe(0);
  });

  it("calculates tax for the first bracket", function () {
    expect(calculateTax(5000)).toBe(500);
  });

  it("calculates tax for the second bracket", function () {
    expect(calculateTax(20000)).toBe(2500);
  });

  it("calculates tax for the third bracket", function () {
    expect(calculateTax(50000)).toBe(7500);
  });

  it("calculates tax for the highest bracket", function () {
    expect(calculateTax(100000)).toBe(18500);
  });

  it("calculates after-tax income", function () {
    expect(calculateAfterTaxIncome(50000, 7500)).toBe(42500);
  });
});
