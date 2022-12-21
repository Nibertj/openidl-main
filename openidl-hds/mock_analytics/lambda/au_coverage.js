function getLayout(data){
console.log('layout')
console.log(data[0])
// t()
layout = `
${data[0]}
${data[0].ReportingName}
<head>
    <meta charset="UTF-8">
    <title>Auto Coverage Report</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css">
</head>

<body>
    <header id="header">
        <div class="container">
            <h1>AMERICAN ASSOCIATION OF INSURANCE SERVICES</h1>
            <h2>PRIVATE PASSENGER AUTOMOBILE</h2>
            <h1>CALENDAR ACCIDENT YEAR 2010 NAIC COVERAGE REPORT</h1>
        </div>
    </header>

    <header id="header-inner">
        <div class="float-1">
            <h2>STATE: 01 Alabama</h2>
        </div>
        <div class="float-2">
            <h2>VOLUNTARY MARKET</h2>
        </div>
    </header>

    <section id="table-a">
        <div class="container">
            <table>
                <tr>
                    <th>Liability</th>
                    <th>Earned Premium</th>
                    <th>Car Years</th>
                    <th>Incurred Loss</th>
                    <th>Incurred Count</th>
                </tr>
                <tr>
                    <td>${data[0].reporting_name}</td>
                    <td>${data[0].earned_premium}</td>
                    <td>${data[0].car_years}</td>
                    <td>${data[0].incurred_loss}</td>
                    <td>${data[0].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[1].reporting_name}</td>
                    <td>${data[1].earned_premium}</td>
                    <td>${data[1].car_years}</td>
                    <td>${data[1].incurred_loss}</td>
                    <td>${data[1].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[2].reporting_name}</td>
                    <td>${data[2].earned_premium}</td>
                    <td>${data[2].car_years}</td>
                    <td>${data[2].incurred_loss}</td>
                    <td>${data[2].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[3].reporting_name}</td>
                    <td>${data[3].earned_premium}</td>
                    <td>${data[3].car_years}</td>
                    <td>${data[3].incurred_loss}</td>
                    <td>${data[3].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[4].reporting_name}</td>
                    <td>${data[4].earned_premium}</td>
                    <td>${data[4].car_years}</td>
                    <td>${data[4].incurred_loss}</td>
                    <td>${data[4].incurred_count}</td>
                </tr>
                <tr>
                    <td>Liability Total</td>
                    <td>${data[16].earned_premium}</td>
                    <td>${data[16].car_years}</td>
                    <td>${data[16].incurred_loss}</td>
                    <td>${data[16].incurred_count}</td>
                </tr>
            </table>
        </div>
    </section>

    <br>

    <section id="table-b">
        <div class="container">
            <table>
                <tr>
                    <th>Comprehensive</th>
                    <th>Earned Premium</th>
                    <th>Car Years</th>
                    <th>Incurred Loss</th>
                    <th>Incurred Count</th>
                </tr>
                <tr>
                    <td>${data[5].reporting_name}</td>
                    <td>${data[5].earned_premium}</td>
                    <td>${data[5].car_years}</td>
                    <td>${data[5].incurred_loss}</td>
                    <td>${data[5].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[6].reporting_name}</td>
                    <td>${data[6].earned_premium}</td>
                    <td>${data[6].car_years}</td>
                    <td>${data[6].incurred_loss}</td>
                    <td>${data[6].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[7].reporting_name}</td>
                    <td>${data[7].earned_premium}</td>
                    <td>${data[7].car_years}</td>
                    <td>${data[7].incurred_loss}</td>
                    <td>${data[7].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[8].reporting_name}</td>
                    <td>${data[8].earned_premium}</td>
                    <td>${data[8].car_years}</td>
                    <td>${data[8].incurred_loss}</td>
                    <td>${data[8].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[9].reporting_name}</td>
                    <td>${data[9].earned_premium}</td>
                    <td>${data[9].car_years}</td>
                    <td>${data[9].incurred_loss}</td>
                    <td>${data[9].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[10].reporting_name}</td>
                    <td>${data[10].earned_premium}</td>
                    <td>${data[10].car_years}</td>
                    <td>${data[10].incurred_loss}</td>
                    <td>${data[10].incurred_count}</td>
                </tr>
                <tr>
                    <td>Comprehensive Total</td>
                    <td>${data[16].earned_premium}</td>
                    <td>${data[16].car_years}</td>
                    <td>${data[16].incurred_loss}</td>
                    <td>${data[16].incurred_count}</td>
                </tr>
            </table>
        </div>
    </section>

    <br>

    <section id="table-c">
        <div class="container">
            <table>
                <tr>
                    <th>Collision</th>
                    <th>Earned Premium</th>
                    <th>Car Years</th>
                    <th>Incurred Loss</th>
                    <th>Incurred Count</th>
                </tr>
                <tr>
                    <td>${data[11].reporting_name}</td>
                    <td>${data[11].earned_premium}</td>
                    <td>${data[11].car_years}</td>
                    <td>${data[11].incurred_loss}</td>
                    <td>${data[11].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[12].reporting_name}</td>
                    <td>${data[12].earned_premium}</td>
                    <td>${data[12].car_years}</td>
                    <td>${data[12].incurred_loss}</td>
                    <td>${data[12].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[13].reporting_name}</td>
                    <td>${data[13].earned_premium}</td>
                    <td>${data[13].car_years}</td>
                    <td>${data[13].incurred_loss}</td>
                    <td>${data[13].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[14].reporting_name}</td>
                    <td>${data[14].earned_premium}</td>
                    <td>${data[14].car_years}</td>
                    <td>${data[14].incurred_loss}</td>
                    <td>${data[14].incurred_count}</td>
                </tr>
                <tr>
                    <td>${data[15].reporting_name}</td>
                    <td>${data[15].earned_premium}</td>
                    <td>${data[15].car_years}</td>
                    <td>${data[15].incurred_loss}</td>
                    <td>${data[15].incurred_count}</td>
                </tr>
                <tr>
                    <td>Collision Total</td>
                    <td>${data[16].earned_premium}</td>
                    <td>${data[16].car_years}</td>
                    <td>${data[16].incurred_loss}</td>
                    <td>${data[16].incurred_count}</td>
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