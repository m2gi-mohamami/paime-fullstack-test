import { useState } from 'react';
import './App.css';
function verifierSalaireNetFaible(netSalary, grossSalary) {
  //Salaire net faible : si netSalary est inférieur à 50 % de grossSalary
  if (netSalary < 0.5 * grossSalary) {
    console.warn("Alerte: Salaire net faible : si netSalary est inférieur à 50 % de grossSalary.");
    return false;
  }
  //console.log("Salaire net valide.");
  return true;
}
function verifierDeductions(deductions,grossSalary) {
  //Prélèvements élevés : si le total des deductions.amount dépasse 40 % de grossSalary
  const totalDeductions = deductions.reduce((total, deduction) => total + deduction.amount, 0);
  if (totalDeductions > 0.4 * grossSalary) {
    console.warn("Alerte: Prélèvements élevés : si le total des deductions.amount dépasse 40 % de grossSalary.");
    return false;
  }
  //console.log("Deductions valides.");
  return true;
}
function App() {
  const [salaries]  =useState( [
    {
    "employeeName": "Jean Dupont",
    "employeeId": "EMP123456",
    "period": {
      "month": "mai",
      "year": 2025
    },
    "contractType": "CDI",
    "grossSalary": 3200.00,//2290
    "netSalary": 1950.00,//1250 pour tester
    "deductions": [
      {
        "label": "Sécurité sociale",
        "amount": 250.00
      },
      {
        "label": "Assurance chômage",
        "amount": 90.00
      },
      {
        "label": "Retraite complémentaire",
        "amount": 310.00
      },
      {
        "label": "CSG/CRDS",
        "amount": 280.00
      },
      {
        "label": "Mutuelle",
        "amount": 60.00
      }
    ],
    "employerContributions": [
      {
        "label": "Cotisation patronale retraite",
        "amount": 420.00
      },
      {
        "label": "Assurance chômage employeur",
        "amount": 160.00
      },
      {
        "label": "Formation professionnelle",
        "amount": 75.00
      },
      {
        "label": "Accidents du travail",
        "amount": 85.00
      }
    ],
    "paymentDate": "2025-06-01",
    "bankAccount": {
      "iban": "FR76 3000 6000 0112 3456 7890 189",
      "bic": "AGRIFRPPXXX"
    }
}])
  const salary = salaries[0]
  // Calcul des avertissements 
  const isNetSalaryValid = verifierSalaireNetFaible(salary.netSalary, salary.grossSalary);
  const areDeductionsValid = verifierDeductions(salary.deductions, salary.grossSalary);
  
  return (
    <>

     <div className='App' style={{textAlign: "center" ,backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px"}}>

        <h2>{salary.employeeName}</h2>
        <p>Période: {salary.period.month}  {salary.period.year}</p>
        <p>Type de contrat: {salary.contractType}</p>
        <p>Salaire brut: {salary.grossSalary} €</p>
        <p>Salaire net: {salary.netSalary} €</p>
        <h2>Vérification</h2>
        <p style={{color :isNetSalaryValid ? "green" : "red"}}>
          Vérification du salaire net faible: {isNetSalaryValid ? "Valid" : "Alerte"}
        </p>
        <p style={{color :areDeductionsValid ? "green" : "red"}}>
          Vérification des prélèvements élevés:{ areDeductionsValid ? "Valid" : "Alerte"}
        </p>

      </div>
      
   
     
    </>
  )
}

export default App
