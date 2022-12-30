function getLayout(data) {
    // console.log(data[0])
    // t()
    layout = `<body>
                <header style="text-align: center;">
                    <div style=max-width: 1280px; padding: 0 1.5rem; margin: auto; overflow: hidden;">
                        <h1>AMERICAN ASSOCIATION OF INSURANCE SERVICES</h1>
                        <h2>PRIVATE PASSENGER AUTOMOBILE</h2>
                        <h1>CALENDAR ACCIDENT YEAR 2010 NAIC COVERAGE REPORT</h1>
                    </div>
                </header>

                <header>
                    <h2>STATE: 01 Alabama VOLUNTARY MARKET</h2>
                </header>
<table>
    <tr>
        <th>Coverage</th>
        <th>Earned Premium</th>
        <th>Car Years</th>
        <th>Incurred Loss</th>
        <th>Incurred Count</th>
    </tr>
    <tr>
        <td>${data[0].ReportingName}</td>
        <td>${data[0].EarnedPremium}</td>
        <td>${data[0].CarYears}</td>
        <td>${data[0].IncurredLoss}</td>
        <td>${data[0].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[1].ReportingName}</td>
        <td>${data[1].EarnedPremium}</td>
        <td>${data[1].CarYears}</td>
        <td>${data[1].IncurredLoss}</td>
        <td>${data[1].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[2].ReportingName}</td>
        <td>${data[2].EarnedPremium}</td>
        <td>${data[2].CarYears}</td>
        <td>${data[2].IncurredLoss}</td>
        <td>${data[2].IncurredCount}</td>
    </tr>

    <tr>
        <td>${data[3].ReportingName}</td>
        <td>${data[3].EarnedPremium}</td>
        <td>${data[3].CarYears}</td>
        <td>${data[3].IncurredLoss}</td>
        <td>${data[3].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[4].ReportingName}</td>
        <td>${data[4].EarnedPremium}</td>
        <td>${data[4].CarYears}</td>
        <td>${data[4].IncurredLoss}</td>
        <td>${data[4].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[5].ReportingName}</td>
        <td>${data[5].EarnedPremium}</td>
        <td>${data[5].CarYears}</td>
        <td>${data[5].IncurredLoss}</td>
        <td>${data[5].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[6].ReportingName}</td>
        <td>${data[6].EarnedPremium}</td>
        <td>${data[6].CarYears}</td>
        <td>${data[6].IncurredLoss}</td>
        <td>${data[6].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[7].ReportingName}</td>
        <td>${data[7].EarnedPremium}</td>
        <td>${data[7].CarYears}</td>
        <td>${data[7].IncurredLoss}</td>
        <td>${data[7].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[8].ReportingName}</td>
        <td>${data[8].EarnedPremium}</td>
        <td>${data[8].CarYears}</td>
        <td>${data[8].IncurredLoss}</td>
        <td>${data[8].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[9].ReportingName}</td>
        <td>${data[9].EarnedPremium}</td>
        <td>${data[9].CarYears}</td>
        <td>${data[9].IncurredLoss}</td>
        <td>${data[9].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[10].ReportingName}</td>
        <td>${data[10].EarnedPremium}</td>
        <td>${data[10].CarYears}</td>
        <td>${data[10].IncurredLoss}</td>
        <td>${data[10].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[11].ReportingName}</td>
        <td>${data[11].EarnedPremium}</td>
        <td>${data[11].CarYears}</td>
        <td>${data[11].IncurredLoss}</td>
        <td>${data[11].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[12].ReportingName}</td>
        <td>${data[12].EarnedPremium}</td>
        <td>${data[12].CarYears}</td>
        <td>${data[12].IncurredLoss}</td>
        <td>${data[12].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[13].ReportingName}</td>
        <td>${data[13].EarnedPremium}</td>
        <td>${data[13].CarYears}</td>
        <td>${data[13].IncurredLoss}</td>
        <td>${data[13].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[14].ReportingName}</td>
        <td>${data[14].EarnedPremium}</td>
        <td>${data[14].CarYears}</td>
        <td>${data[14].IncurredLoss}</td>
        <td>${data[14].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[15].ReportingName}</td>
        <td>${data[15].EarnedPremium}</td>
        <td>${data[15].CarYears}</td>
        <td>${data[15].IncurredLoss}</td>
        <td>${data[15].IncurredCount}</td>
    </tr>
    <tr>
        <td>${data[16].ReportingName}</td>
        <td>${data[16].EarnedPremium}</td>
        <td>${data[16].CarYears}</td>
        <td>${data[16].IncurredLoss}</td>
        <td>${data[16].IncurredCount}</td>
    </tr>
</table>
</body>`
    return layout
}

module.exports = getLayout