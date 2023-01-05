function getLayout(data){

    state = {name: "Alabama", code: '01'}
    // t()
    layout = `
    <head>
        <meta charset="UTF-8">
        <title>Homeowners DOI Report</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" media="screen" href="style.css">
    </head>
    
    <body>
        <header id="header">
            <div class="container">
                <h1>AMERICAN ASSOCIATION OF INSURANCE SERVICES</h1>
                <h2>HOMEOWNERS - REPORT FOR PERIOD OF - </h2>
                <h1>CALENDAR ACCIDENT YEAR 2010 NAIC COVERAGE REPORT</h1>
                <h2>Voluntary Market</h2>
                <h2>STATE: ${state.code} ${state.name}</h2>
            </div>
        </header>
    
    
        <section id="table-a">
            <div class="container">
                <table>
                    <tr>
                        <th>Policy Form</th>
                        <th>Written Premium</th>
                        <th>Paid Loss</th>
                        <th>Loss Ratio</th>
                        <th>Earned Premium</th>
                        <th>Incurred Loss</th>
                        <th>EP Loss Ratio</th>
                    </tr>
                    <tr>
                        <th>OWNERS POLICY FORMS</th>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[1].PolicyForm}</td>
                        <td>$${data[1].WrittenPremium}</td>
                        <td>${data[1].PaidLoss}</td>
                        <td>${data[1].LossRatio}</td>
                        <td>$${data[1].EarnedPremium}</td>
                        <td>${data[1].IncurredLoss}</td>
                        <td>${data[1].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[2].PolicyForm}</td>
                        <td>$${data[2].WrittenPremium}</td>
                        <td>${data[2].PaidLoss}</td>
                        <td>${data[2].LossRatio}</td>
                        <td>$${data[2].EarnedPremium}</td>
                        <td>${data[2].IncurredLoss}</td>
                        <td>${data[2].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[3].PolicyForm}</td>
                        <td>$${data[3].WrittenPremium}</td>
                        <td>${data[3].PaidLoss}</td>
                        <td>${data[3].LossRatio}</td>
                        <td>$${data[3].EarnedPremium}</td>
                        <td>${data[3].IncurredLoss}</td>
                        <td>${data[3].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[4].PolicyForm}</td>
                        <td>$${data[4].WrittenPremium}</td>
                        <td>${data[4].PaidLoss}</td>
                        <td>${data[4].LossRatio}</td>
                        <td>$${data[4].EarnedPremium}</td>
                        <td>${data[4].IncurredLoss}</td>
                        <td>${data[4].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>TOTAL OWNERS FORMS</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
    
        <br><br>
                    <tr>
                        <th>RENTERS AND CONDOMINIUMS</th>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[1].PolicyForm}</td>
                        <td>$${data[1].WrittenPremium}</td>
                        <td>${data[1].PaidLoss}</td>
                        <td>${data[1].LossRatio}</td>
                        <td>$${data[1].EarnedPremium}</td>
                        <td>${data[1].IncurredLoss}</td>
                        <td>${data[1].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[2].PolicyForm}</td>
                        <td>$${data[2].WrittenPremium}</td>
                        <td>${data[2].PaidLoss}</td>
                        <td>${data[2].LossRatio}</td>
                        <td>$${data[2].EarnedPremium}</td>
                        <td>${data[2].IncurredLoss}</td>
                        <td>${data[2].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[3].PolicyForm}</td>
                        <td>$${data[3].WrittenPremium}</td>
                        <td>${data[3].PaidLoss}</td>
                        <td>${data[3].LossRatio}</td>
                        <td>$${data[3].EarnedPremium}</td>
                        <td>${data[3].IncurredLoss}</td>
                        <td>${data[3].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>TOTAL RENTERS AND CONDOS</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
    
        <br><br>
    
                    <tr>
                        <td>HOME BASED BUSINESS (HBB)</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>

        <br><br>

                    <tr>
                        <th>LIABILITY ENDORSEMENTS</th>
                    </tr>
                   <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>TOTAL LIABILITY ENDORSEMENTS</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>

            <br><br>

                    <tr>
                        <th>PROPERTY ENDORSEMENTS</th>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>TOTAL PROPERTY ENDORSEMENTS</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>

            <br><br>

                    <tr>
                        <th>INDIVISIBLE PROP & LIAB END</th>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>${data[0].PolicyForm}</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                    <tr>
                        <td>TOTAL INDIVISIBLE ENDORSEMENTS</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>

            <br><br>

                    <tr>
                        <td>GRAND TOTAL</td>
                        <td>$${data[0].WrittenPremium}</td>
                        <td>${data[0].PaidLoss}</td>
                        <td>${data[0].LossRatio}</td>
                        <td>$${data[0].EarnedPremium}</td>
                        <td>${data[0].IncurredLoss}</td>
                        <td>${data[0].EPLossRatio}</td>
                    </tr>
                </table>
            </div>
        </section>
    </body>
    `
    console.log(layout)
    return layout
    }
    
    module.exports = getLayout