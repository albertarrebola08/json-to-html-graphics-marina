const jsonDataExistence = {
    "data": [
        { "type": "text", "content": "Total rows in POs table: 29998" },
        { "type": "text", "content": "3500 null entries, corresponding to 0.83% of the values of the df" },
        { "type": "image", "content": "./Existence/plot_null_matrix_POs.png" },
        { "type": "text", "content": "Numero de filas duplicadas: 1014" },
        { "type": "text", "content": "First date in POs table: 2019-07-02" },
        { "type": "text", "content": "Last date in POs table: 2023-08-22\n" },
        { "type": "text", "content": "plot_general_evolution_POs.html" },
        { "type": "text", "content": "Total rows in stock table: 497630" },
        { "type": "text", "content": "0 null entries, corresponding to 0.00% of the values of the df" },
        { "type": "image", "content": "./Existence/plot_null_matrix_stock.png" },
        { "type": "text", "content": "Numero de filas duplicadas: 0" },
        { "type": "text", "content": "First date in stock table: 2023-04-01" },
        { "type": "text", "content": "Last date in stock table: 2023-08-22\n" },
        { "type": "text", "content": "Total rows in sales table: 467947" },
        { "type": "text", "content": "0 null entries, corresponding to 0.00% of the values of the df" },
        { "type": "image", "content": "./Existence/plot_null_matrix_sales.png" },
        { "type": "text", "content": "Numero de filas duplicadas: 0" },
        { "type": "text", "content": "First date in sales table: 2019-06-12" },
        { "type": "text", "content": "Last date in sales table: 2023-08-22\n" },
        { "type": "text", "content": "plot_general_evolution_sales.html" },
        { "type": "text", "content": "Total rows in demand table: 472404" },
        { "type": "text", "content": "0 null entries, corresponding to 0.00% of the values of the df" },
        { "type": "image", "content": "./Existence/plot_null_matrix_demand.png" },
        { "type": "text", "content": "Numero de filas duplicadas: 0" },
        { "type": "text", "content": "First date in demand table: 2019-06-12" },
        { "type": "text", "content": "Last date in demand table: 2023-08-22\n" },
        { "type": "text", "content": "plot_general_evolution_demand.html" }
],
}
const jsonDataPrices = {
"data":[
        // { "type": "text", "content": "\nStart PRICES ANALYZER...\n" },
        { "type": "text", "content": "plot_analyze_scaled_prices.html" },
        { "type": "text", "content": "plot_groupby_producto_id_precio_por_unidad_fecha_emision.html" },
        { "type": "text", "content": "plot_groupby_producto_id_catidad_recibida_fecha_emision.html" },
        { "type": "text", "content": "plot_groupby_producto_id_precio_por_unidad_catidad_recibida.html" },
        { "type": "text", "content": "plot_margin.html" },
        // { "type": "text", "content": "\nStart LEAD TIME ANALYZER...\n" },
    ],
}
const jsonDataTime = {
    "data":[ 
        { "type": "text", "content": "plot_cov_lead_time.html" },
        { "type": "text", "content": "plot_groupby_proveedor_id_lead_time_fecha_emision.html" },
        { "type": "text", "content": "Attributes with more than 20% absolute value correlation with lead_time attribute:\nalmacen_id            0.331844\nproveedor            -0.301380\nalmacen               0.331844\ncoste_adquisicion     0.295925\ncatidad_solicitada    0.234252\ncatidad_recibida      0.213932\ntmp_id               -0.258927\nlead_time             1.000000\nName: lead_time, dtype: float64" },
        { "type": "text", "content": "pairplot_line_lead_time_with_plotly.html" },
        { "type": "text", "content": "plot_lead_time_data.html" },
        { "type": "text", "content": "\nTemporal analysis by \"day\" attribute:\n" },
        { "type": "null", "content": null },
        { "type": "text", "content": "\nTemporal analysis by \"month\" attribute:\n" },
        { "type": "null", "content": null },
        { "type": "image", "content": "./Quality/plot_kde_lead_time_suppliers.png" },
        { "type": "text", "content": "\nValues of \"proveedor_id\" with highest lead time average are:\n[260, 283, 266, 285, 279] with [80, 195, 15, 3029, 4891] purchase orders done and [195.21, 165.32, 159.73, 149.21, 145.17] lead time average respectively" },
        { "type": "text", "content": "\nValues of \"proveedor_id\" with lowest lead time average are:\n[326, 295, 329, 325, 332] with [1, 1, 2530, 1, 1] purchase orders done and [5.0, 3.0, 0.62, 0.0, 0.0] lead time average respectively" },
        { "type": "text", "content": "plot_lead_time_warehouses.html" },
        { "type": "text", "content": "\nValues of \"almacen_id\" with more than 96.0 days in lead_time attribute are (in %) \nalmacen_id\n12    14.35\n13    54.62\ndtype: float64" },
        { "type": "text", "content": "plot_lead_time_product_units.html" },
        { "type": "text", "content": "\nThere are 562 products sold with more than 191.0 days of lead time average.\n" },
        { "type": "text", "content": "A summary of providers with most purchases (257 with less than 12) are:\n                          purchase_orders  lead_time_mean\nproveedor_id producto_id                                 \n279          35218                     13      203.769231\n285          30758                     12      198.833333\n279          35217                     10      212.100000\n285          30744                      9      229.555556\n279          35219                      9      233.222222" },
        { "type": "text", "content": "\nThere are 24945 products sold with less than 191.0 days of lead time average.\n" },
        { "type": "text", "content": "A summary of providers with most purchases (685 with more than 12) are:\n                          purchase_orders  lead_time_mean\nproveedor_id producto_id                                 \n285          30787                     50      151.740000\n289          35092                     46       21.500000\n254          30991                     45       45.711111\n             32716                     44       24.568182\n             31465                     44       71.090909" }
        
    ]
};

const jsonContentExistenceDiv = document.getElementById('jsonContentExistence');

for (const item of jsonDataExistence.data) {
    if (item.type === "text") {
        const paragraph = document.createElement('li');
        paragraph.textContent = item.content;
        jsonContentExistenceDiv.appendChild(paragraph);
    } else if (item.type === "image") {
        const image = document.createElement('img');
        image.src = item.content;
        image.alt = "Image";
        jsonContentExistenceDiv.appendChild(image);
    }
}

const jsonContentPricesDiv = document.getElementById('jsonContentPrices');

for (const item of jsonDataPrices.data) {
    if (item.type === "text") {
        const paragraph = document.createElement('li');
        paragraph.textContent = item.content;
        jsonContentPricesDiv.appendChild(paragraph);
    } else if (item.type === "image") {
        const image = document.createElement('img');
        image.src = item.content;
        image.alt = "Image";
        jsonContentPricesDiv.appendChild(image);
    }
}

const jsonContentTimeDiv = document.getElementById('jsonContentTime');

for (const item of jsonDataTime.data) {
    if (item.type === "text") {
        const paragraph = document.createElement('li');
        paragraph.textContent = item.content;
        jsonContentTimeDiv.appendChild(paragraph);
    } else if (item.type === "image") {
        const image = document.createElement('img');
        image.src = item.content;
        image.alt = "Image";
        jsonContentTimeDiv.appendChild(image);
    }
}
