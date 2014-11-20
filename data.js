var data = [

    {
        name: "House 1",
        occupancy: 3,
        floorarea: 70,
        description: "Semi-detached, 1991-1995, uninsulated cavity, 250mm loft insulation, double glazing. Storage heaters",
        
        energydata: {
            "Non Green Electric": {kwh:2500},
            "Non Green Electric Storage Heaters": {kwh:6863},
            "Car 1": {miles:15000, mpg:46},
            "Car 2": {miles:4500, mpg:40},
            "Bus": {miles:650},
            "Train": {miles:600}
        }
    },
    
    {
        name: "House 2",
        occupancy: 2,
        floorarea: 80,
        description: "Detached, pre 1900, stone construction with 250mm insulation in the loft and double glazing",
        
        energydata: {
            "100% Green Electric": {kwh:4574},
            "Wood Logs": {m3:8.5, efficiency:70},
            "Bottled Gas Cooking": {kg:188, efficiency:80},
            "Car 1": {miles:10000, mpg:40},
            "Bus": {miles: 100},
            "Train": {miles:6000},
            "Boat": {miles: 40},
            "Plane": {miles: 21000}
        }
    },
    
    {
        name: "House 3",
        occupancy: 2,
        floorarea: 140,
        description: "Detached, pre 1900, stone construction, 75mm loft insulation EPS, 50mm floor insulation EPS, secondary glazing",
        
        energydata: {
            "100% Green Electric": {kwh:3789},
            "Wood Logs": {m3:4.0, efficiency:70},
            "Bottled Gas Heating": {kg:1545, efficiency:95},
            "Bottled Gas Cooking": {kg:100, efficiency:80},
            "Car 1": {miles:15000, mpg:40},
            "Train": {miles: 5100},
            "Plane": {miles: 1000}
        }
    },
    
    {
        name: "House 4",
        occupancy: 2,
        floorarea: 100,
        description: "Detached, pre 1900, stone construction, 250mm loft insulation, double glazing",
        
        energydata: {
            "100% Green Electric": {kwh:2250},
            "Wood Pellets": {m3:5.0, efficiency:95},
            "Car 1": {miles:10000, mpg:48},
            "Bus": {miles:30},
            "Train": {miles: 20000},
            "Plane": {miles: 9000}
        }
    },
    
    {
        name: "House 5",
        occupancy: 1,
        floorarea: 123,
        description: "Detached, 1996 or later, timber frame, 200mm warmcell wall insulation, 300mm warmcell loft insulation, 50mm jablite floor insulation, double glazing, solar gain design.",
        
        energydata: {
            "100% Green Electric": {kwh:803},
            "100% Green Electric Heatpump": {kwh:2574, cop:4.4},
            "Car 1": {miles:3500, mpg:45}
        }
    },
    
    {
        name: "House 6",
        occupancy: 2,
        floorarea: 154,
        description: "Detached, 1982-1990, timber frame, 250mm loft insulation, double glazing",
        
        energydata: {
            "100% Green Electric": {kwh:2568},
            "Wood Logs": {m3:3.5, efficiency:70},
            "Bottled Gas Heating": {kg:370, efficiency:80},
            "Bottled Gas Cooking": {kg:100, efficiency:80},
            "Car 1":{miles:9000, mpg:40},
            "Bus": {miles:100},
            "Train": {miles:2500},
            "Boat": {miles:1000},
            "Plane": {miles:10000}
        }
    },
    
    {
        name: "House 7",
        occupancy: 1,
        floorarea: 150,
        description: "Detached, pre 1900, 13 brick, 23 stone construction,  New walls insulated to 150mm. No insulation in stone walls. Secondary glazing",
        
        energydata: {
            "100% Green Electric": {kwh:1540},
            "Wood Logs": {m3:4.0, efficiency:70},
            "LPG": {l:1030, efficiency:85},
            "Car 1":{miles:7000, mpg:40}
        }
    },
    
    {
        name: "House 8",
        occupancy: 2,
        floorarea: 66,
        description: "Detached, pre 1900, stone construction with 250mm of loft insulation, double glazing",
        
        energydata: {
            "100% Green Electric": {kwh:2541},
            "Wood Logs": {m3:7.84, efficiency:95},
            "Bottled Gas Cooking": {kg:70, efficiency:80},
            "Car 1":{miles:10200, mpg:38},
            "Bus": {miles:160},
            "Train": {miles:646}
        }
    },
    
    {
        name: "House 9",
        occupancy: 1,
        floorarea: 100,
        description: "Detached, stone construction",
        
        energydata: {
            "Non Green Electric": {kwh:2528},
            "Wood Logs": {m3:6.4, efficiency:70},
            "Oil": {l:1700, efficiency:85},
            "Car 1":{miles:7000, mpg:40},
            "Bus": {miles:350},
            "Train": {miles:5000}
        }
    },
    
    {
        name: "House 10",
        occupancy: 2,
        floorarea: 65,
        description: "Semi detached, 1900 - 1929, Stone construction, 250mm loft insulation, double glazing",
        
        energydata: {
            "100% Green Electric": {kwh:3187},
            "Wood Logs": {m3:5.0, efficiency:70},
            "Oil": {l:1333, efficiency:80},
            "Bottled Gas Cooking": {kg:47, efficiency:80},
            "Car 1":{miles:4500, mpg:37},
            "Car 2":{miles:20000, mpg:35},
            "Car 3":{miles:3000, mpg:28},
            "Motorbike":{miles:500, mpg:40},
            "Plane": {miles:1200}
        }
    },
    
    {
        name: "House 11",
        occupancy: 3,
        floorarea: 95,
        description: "Detached, pre 1900, stone construction, 200mm loft insulation, double glazing",
        
        energydata: {
            "100% Green Electric": {kwh:2000},
            "Wood Logs": {m3:4.0, efficiency:70},
            "Car 1":{miles:10000, mpg:40}
        }
    },
    
    {
        name: "House 12",
        occupancy: 2,
        floorarea: 200,
        description: "Detached, 1900-1929, stone construction, 120mm of loft insulation, double glazing",
        
        energydata: {
            "100% Green Electric": {kwh:3365},
            "Wood Logs": {m3:2.0, efficiency:70},
            "Oil": {l:3000, efficiency:80},
            "Coal": {kg:250, efficiency:70},
            "Car 1":{miles:10000, mpg:40},
            "Car 2":{miles:6000, mpg:40},
            "Bus": {miles:200},
            "Train": {miles:2000}
        }
    },
    
    {
        name: "House 13",
        occupancy: 3,
        floorarea: 57.6,
        description: "End terrace, pre 1900, stone construction, 25mm kingspan wall insulation, 75mm roof insulation, 75mm floor insulation. Single glazing",
        
        energydata: {
            "Non Green Electric": {kwh:4000},
            "Wood Logs": {m3:7.0, efficiency:70},
            "Bottled Gas Cooking": {kg:30.0, efficiency:80},
            "Car 1":{miles:10000, mpg:45.6},
            "Car 2":{miles:5000, mpg:36.0},
            "Train": {miles:600},
            "Boat": {miles:10},
            "Plane": {miles:40}
        }
    },
    
    {
        name: "House 14",
        occupancy: 1,
        floorarea: 45.0,
        description: "Detached, stone construction, 100mm roof insulation, single glazing",
        
        energydata: {
            "100% Green Electric": {kwh:2555},
            "100% Green Electric Car": {kwh:2500},
            "Bottled Gas Cooking": {kg:15.0, efficiency:80},
            "Wood Logs": {m3:1.0, efficiency:70},
            "Train": {miles:3000},
            "Plane": {miles:1200}
        }
    },
    
    {
        name: "House 15",
        occupancy: 4,
        floorarea: 113,
        description: "Bungalow, 1982-1990, insulated cavity, 100mm loft insulation, double glazing, south facing windows and not very draughty",
        
        energydata: {
            "Non Green Electric": {kwh:4630},
            "Non Green Electric Storage Heaters": {kwh:8620},
            "Wood Logs": {m3:5.4, efficiency:70},
            "Car 1":{miles:10000, mpg:35.0},
            "Car 2":{miles:9000, mpg:63.0},
            "Car 3":{miles:5000, mpg:30.0}
        }
    },
    
    {
        name: "House 16",
        occupancy: 1,
        floorarea: 100,
        description: "Detached, 1900-1929, Stone construction with 30mm insulation in the walls and 240mm in the roof, secondary glazing.",
        
        energydata: {
            "100% Green Electric": {kwh:2215},      // 22.15 kWh/m2
            "Wood Logs": {m3:4.0, efficiency:25},   // 13.8 kWh/m2
            "Oil": {l:2488, efficiency:55},         // 140.5 kWh/m2
            "Car 1":{miles:10300, mpg:40.0},        
            "Train": {miles:3000},
            "Plane": {miles:1200}
        }
    },
    
    {
        name: "House 17",
        occupancy: 2,
        floorarea: 360,
        description: "Single storey, timber frame, 200mm wall insulation plus full fill cavity, rock-wool, 200mm roof insulation. Double glazing",
        
        energydata: {
            "Non Green Electric": {kwh:5603},
            "Wood Logs": {m3:8.5, efficiency:70},
            "Oil": {l:2400, efficiency:80},
            "Car 1":{miles:10000, mpg:40.0},
            "Car 1":{miles:1100, mpg:40.0},
            "Train": {miles:3200},
            "Plane": {miles:20000}
        }
    }

];
