import { useState } from 'react'
import './App.css'

function App() {
  const salaries =useState( [
    {
    "employeeName": "Jean Dupont",
    "employeeId": "EMP123456",
    "period": {
      "month": "mai",
      "year": 2025
    },
    "contractType": "CDI",
    "grossSalary": 3200.00,
    "netSalary": 1950.00,
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
 console.log(salaries)
  return (
    <>
    
     <div className='App'>
        <h2>{salaries[0][0].employeeName}</h2>
        <p>Période: {salaries[0][0].period.month} / {salaries[0][0].period.year}</p>
        <p>Type de contrat: {salaries[0][0].contractType}</p>
        <p>Salaire brut: {salaries[0][0].grossSalary} €</p>
        <p>Salaire net: {salaries[0][0].netSalary} €</p>
       
      </div>
      
   
     
    </>
  )
}

export default App
