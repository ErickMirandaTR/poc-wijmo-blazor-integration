console.log("wijmo-grid-component.js")
export async function initGrid(showMarquee) {
    const countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','), data = [];
    for (var i = 0; i < countries.length; i++) {
        data.push({
            id: i,
            country: countries[i],
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
    }
    const theGrid = new wjcGrid.FlexGrid('#hostElement', {
        deferResizing: true,
        showMarquee,
        autoGenerateColumns: false,
        columns: [
            { binding: 'id', header: 'ID', width: 60, allowSorting: false },
            {
                header: 'Country', binding: 'country', width: '*',
                cellTemplate: '<saf-button appearance="primary" style="margin-inline-end: 16px; margin-bottom: 8px;"> <saf-icon slot="start" icon- name="plus" appearance = "solid" presentation ></saf-icon> ${text}</saf-button>'
            },
            { binding: 'sales', header: 'Sales' },
            { binding: 'expenses', header: 'Expenses' },
            { binding: 'expenses', header: 'Checkbox', cellTemplate: '<saf-checkbox>Erick test</saf-checkbox>' }
        ],
        itemsSource: data
    })
}
