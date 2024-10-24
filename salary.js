const KRA_TAX_RATES = [
  { threshold: 12298, rate: 0.1 },
  { threshold: 23885, rate: 0.15 },
  { threshold: 35472, rate: 0.2 },
  { threshold: 47059, rate: 0.25 },
  { threshold: 58646, rate: 0.3 }
];

function calculatePAYE(grossSalary) {
  let tax = 0;
  for (let i = KRA_TAX_RATES.length - 1; i >= 0; i--) {
      if (grossSalary > KRA_TAX_RATES[i].threshold) {
          tax = (grossSalary - KRA_TAX_RATES[i].threshold) * KRA_TAX_RATES[i].rate;
          break;
      }
  }
  return tax;
}

const NHIF_RATES = [
  { range: [0, 5999], rate: 150 },
  { range: [6000, 7999], rate: 300 },
  { range: [8000, 11999], rate: 400 },
  { range: [12000, 14999], rate: 500 },
  { range: [15000, 19999], rate: 600 }
];

function calculateNHIF(grossSalary) {
  let nhif = 0;
  for (let i = 0; i < NHIF_RATES.length; i++) {
      if (grossSalary >= NHIF_RATES[i].range[0] && grossSalary <= NHIF_RATES[i].range[1]) {
          nhif = NHIF_RATES[i].rate;
          break;
      }
  }
  return nhif;
}

function calculateNSSF(grossSalary) {
  return 2000;
}

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  const paye = calculatePAYE(grossSalary);
  const nhif = calculateNHIF(grossSalary);
  const nssf = calculateNSSF(grossSalary);

  const netSalary = grossSalary - paye - nhif - nssf;

  return {
      grossSalary,
      paye,
      nhif,
      nssf,
      netSalary
  };
}
