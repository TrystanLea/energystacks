function measures()
{
    for (z in data)
    {
        var available = (120 * data[z].floorarea);
    
        var carmiles = 0;
        for (i in data[z].energydata)
        {
            if (input['electricity-intensity-2010'] || input['electricity-intensity-2015']) {
                data[z].greenelectric = 0;
            }         
            
            if (input.action_greenelectric || input.action_nationalgreenelectric) {
                data[z].greenelectric = 1;
            }
            
            if (input.action_gascooking)
            {
                if (i=="Bottled Gas Cooking") {
                    
                    var outputrequirement = ((data[z].energydata[i].kg * 13.9) * data[z].energydata[i].efficiency/100);
                    data[z].energydata["Electric Cooking"] = {kwh:outputrequirement};
                    delete data[z].energydata[i];
                }
            }
            
            if (input.action_heating)
            {
                if (i=="Oil") {
                    var outputrequirement = ((data[z].energydata[i].l * 10.27) * data[z].energydata[i].efficiency/100);
                    var heatpumpinput = outputrequirement / 3.0;
                    data[z].energydata["Heatpump"] = {kwh:heatpumpinput, cop:3.0};
                    delete data[z].energydata[i];
                    
                    heatpumps_installed += 1;
                }
                
                if (i=="Bottled Gas Heating") {
                    
                    var outputrequirement = ((data[z].energydata[i].kg * 13.9) * data[z].energydata[i].efficiency/100);
                    var heatpumpinput = outputrequirement / 3.0;
                    data[z].energydata["Heatpump"] = {kwh:heatpumpinput, cop:3.0};  
                    heatpumps_installed += 1;
                    
                    delete data[z].energydata[i];
                }
                
                if (i=="LPG") {
                    var outputrequirement = ((data[z].energydata[i].l * 11.0) * data[z].energydata[i].efficiency/100);
                    var heatpumpinput = outputrequirement / 3.0;
                    data[z].energydata["Heatpump"] = {kwh:heatpumpinput, cop:3.0};
                    delete data[z].energydata[i];
                    
                    heatpumps_installed += 1;
                }
                
                if (i=="Coal") {
                    //var outputrequirement = ((data[z].energydata[i].kg * 8.0) * data[z].energydata[i].efficiency/100);
                    //var heatpumpinput = outputrequirement / 3.0;
                    //data[z].energydata["100% Green Heatpump"] = {kwh:heatpumpinput, cop:3.0};
                    delete data[z].energydata[i];
                }
            }
            
            if (input.action_electricvehicles)
            {
                if (i=="Car 1" || i=="Car 2" || i=="Car 3" || i=="Motorbike") {
                    carmiles += data[z].energydata[i].miles;
                    
                    // var carkwhd = (data[z].energydata[i].miles/data[z].energydata[i].mpg) * (4.54609*9.7) / 365.0;
                    // var ecarkwhd = (data[z].energydata[i].miles/4.0)/365.0;
                    // data[z].saving += carkwhd - ecarkwhd;
                    
                    delete data[z].energydata[i];
                }
            }
            
            if (i=="Plane" && input.action_planestotrains) {
                if (data[z].energydata["Train"]==undefined) data[z].energydata["Train"] = {miles:0};
                data[z].energydata["Train"].miles += data[z].energydata[i].miles;
                delete data[z].energydata[i];
            }
           
            if (i=="Bus" && input.action_greenbuses) {
                data[z].energydata["Electric Bus"] = data[z].energydata[i];
                delete data[z].energydata[i];
            }
            
            if (i=="Boat" && input.action_planestotrains) {
                if (data[z].energydata["Train"]==undefined) data[z].energydata["Train"] = {miles:0};
                data[z].energydata["Train"].miles += data[z].energydata[i].miles;
                delete data[z].energydata[i];
            }
            
        }
        
        if (input.action_retrofit)
        {
            if (data[z].energydata["Electric"]!=undefined) available -= data[z].energydata["Electric"].kwh;
            if (data[z].energydata["Electric"]!=undefined) available -= data[z].energydata["Electric"].kwh;
            if (data[z].energydata["Bottled Gas Cooking"]!=undefined) available -= data[z].energydata["Bottled Gas Cooking"].kg * 13.9;
            if (data[z].energydata["Electric Cooking"]!=undefined) available -= data[z].energydata["Electric Cooking"].kwh;
            
            if (available>0)
            {
                var total = 0;
                
                // 1) Calculate total annual heating energy
                if (data[z].energydata["Coal"]!=undefined) total += data[z].energydata["Coal"].kg * 8.0;
                if (data[z].energydata["Oil"]!=undefined) total += data[z].energydata["Oil"].l * 10.27;
                if (data[z].energydata["Bottled Gas Heating"]!=undefined) total += data[z].energydata["Bottled Gas Heating"].kg * 13.9;
                if (data[z].energydata["LPG"]!=undefined) total += data[z].energydata["LPG"].l * 11.0;
                if (data[z].energydata["Wood Logs"]!=undefined) total += data[z].energydata["Wood Logs"].m3 * 1380;
                if (data[z].energydata["Wood Pellets"]!=undefined) total += data[z].energydata["Wood Pellets"].m3 * 4800;
                if (data[z].energydata["Storage Heaters"]!=undefined) total += data[z].energydata["Storage Heaters"].kwh;
                if (data[z].energydata["Heatpump"]!=undefined) total += data[z].energydata["Heatpump"].kwh*data[z].energydata["Heatpump"].cop;
               
                
                if (total>available)
                {
                    // 2) calculate percentage of total provided by each heating source, multiply this percentage by the amount available @ 120 kWh/m2
                    if (data[z].energydata["Coal"]!=undefined) data[z].energydata["Coal"].kg = (((data[z].energydata["Coal"].kg * 8.0)/total) * available) / 8.0;
                    if (data[z].energydata["Oil"]!=undefined) data[z].energydata["Oil"].l = (((data[z].energydata["Oil"].l * 8.0)/total) * available) / 8.0;
                    if (data[z].energydata["LPG"]!=undefined) data[z].energydata["LPG"].l = (((data[z].energydata["LPG"].l * 8.0)/total) * available) / 8.0;
                    if (data[z].energydata["Bottled Gas Heating"]!=undefined) data[z].energydata["Bottled Gas Heating"].kg = (((data[z].energydata["Bottled Gas Heating"].kg * 8.0)/total) * available) / 8.0;
                    
                    if (data[z].energydata["Wood Logs"]!=undefined) data[z].energydata["Wood Logs"].m3 = (((data[z].energydata["Wood Logs"].m3 * 1380)/total) * available) / 1380;
                    if (data[z].energydata["Wood Pellets"]!=undefined) data[z].energydata["Wood Pellets"].m3 = (((data[z].energydata["Wood Pellets"].m3 * 4800)/total) * available) / 4800;
                    
                    if (data[z].energydata["Storage Heaters"]!=undefined) data[z].energydata["Storage Heaters"].kwh = ((data[z].energydata["Storage Heaters"].kwh/total) * available);
                    
                    if (data[z].energydata["Heatpump"]!=undefined) data[z].energydata["Heatpump"].kwh = (((data[z].energydata["Heatpump"].kwh*data[z].energydata["Heatpump"].cop)/total) * available)/data[z].energydata["Heatpump"].cop;
                }
            }
        }
        
        
        if (input.action_greentrains && data[z].energydata["Train"]!=undefined) {
            data[z].energydata["Electric Train"] = data[z].energydata["Train"];
            delete data[z].energydata["Train"];
        }
        
        if (carmiles>0) {
            data[z].energydata["Electric Car"] = {kwh:carmiles/3.8};
            electric_cars_bought += 1;
        }
    }
}
