function drawdetail()
{
    var out = "";
    for (z in data)
    {
        out += "<h3>"+data[z].name+"</h3>";
        out += "<p><b>Occupancy:</b> "+data[z].occupancy+", <b>Floor area:</b> "+data[z].floorarea+"m2</p><br>";
        
        out += "<p><b>Total kWh/d:</b> "+Math.round(data[z].totalkwhd)+", <b>Total CO2:</b> "+Math.round(data[z].totalco2)+" kgCO2</p>";
        out += "<p><b>Total kWh/d/pp:</b> "+Math.round(data[z].totalkwhd/data[z].occupancy)+", <b>Total CO2:</b> "+Math.round(data[z].totalco2/data[z].occupancy)+" kgCO2 per person</p>";
        out += "<p><b>Non transport primary energy:</b> "+Math.round(data[z].primaryenergyhouse*365/data[z].floorarea)+" kWh/m2 (Passivhaus & Carbon Coop retrofit target: 120 kWh/m2)</p>";
        out += "<p><b>Non transport emissions rate:</b> "+Math.round(data[z].house_co2/data[z].floorarea)+" kgCO2e/m2  (Carbon Coop: 17 kgCO2e/m2)</p>";
        out += "<p><b>Space heating demand:</b> "+Math.round(data[z].spaceheating*365/data[z].floorarea)+" kWh/m2  (Passivhaus: 15 kWh/m2)</p><br>";
        
        
        out += "<p>"+data[z].description+"</p>";
        
        out += "<table class='table'>";
        for (i in data[z].energydata)
        {
            var item = data[z].energydata[i];
            
            // Name
            out += "<tr><td>"+i+"</td><td>";
            // Output energy fuel quantity
            if (item.kwh!=undefined) out += Math.round(item.kwh)+" kWh";
            if (item.m3!=undefined) out += item.m3.toFixed(1)+" m3";
            if (item.l!=undefined) out += Math.round(item.l)+" L";
            if (item.kg!=undefined) out += Math.round(item.kg)+" kg";
            if (item.miles!=undefined) out += Math.round(item.miles)+" miles";
            
            // Efficiencies
            if (item.cop!=undefined) out += " (COP:"+item.cop+")";
            if (item.efficiency!=undefined) out += " ("+item.efficiency+"%)";
            if (item.mpg!=undefined) out += " ("+item.mpg+" mpg)";
            out += "</td>";
            
            // standard energy/co2/cost
            out += "<td>"+item.kwhd.toFixed(1)+" kWh/d</td><td>"+Math.round(item.co2)+" kgCO2</td><td>£"+Math.round(item.cost)+"</td></tr>";
        }
        out += "</table>";
    }
    
    return out;
}
