document.getElementById('ml-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get values from the inputs
    const inputs = [];
    for (let i = 1; i <= 14; i++) {
        const input = document.getElementById(`input${i}`).value;
        inputs.push(input);
    }

    // Check if any input is empty
    if (inputs.includes('') || inputs.length < 14) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    // Hide form and show result
    document.querySelector('form').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    // Get the engine id from the 14th input
    const engineId = inputs[13]; // This is the engine id (14th input)

    // Generate a prediction message based on the inputs
    const { message, imageUrl } = getEngineData(engineId);
    
    // Show the prediction message
    document.getElementById('output').innerText = message;

    // Show the respective image based on engine id
    const resultImage = document.getElementById('result-image');
    resultImage.src = imageUrl;
});

// Function to get the image and message based on the engine id
function getEngineData(engineId) {
    // Example of engine ID to image and message mapping
    const engineData = {
        '1': {
            imageUrl: 'Plots/engine1.png', // Replace with actual image path
            message: 'Predicted RUL: -2.9591654762625694'
        },
        '2': {
            imageUrl: 'Plots/engine2.png', // Replace with actual image path
            message: 'Predicted RUL: -10.666333422064781'
        },
        '3': {
            imageUrl: 'Plots/engine3.png', // Replace with actual image path
            message: 'Predicted RUL: 6.632396645843983'
        },
        '4': {
            imageUrl: 'Plots/engine4.png', // Replace with actual image path
            message: 'Predicted RUL: -0.4860502779483795'
        },
        '5': {
            imageUrl: 'Plots/engine5.png', // Replace with actual image path
            message: 'Predicted RUL: -10.76070562005043'
        },
        '6': {
            imageUrl: 'Plots/engine6.png', // Replace with actual image path
            message: 'Predicted RUL: 1.5816138945519924'
        },
        '7': {
            imageUrl: 'Plots/engine7.png', // Replace with actual image path
            message: 'Predicted RUL: -7.515416175127029'
        },
        '8': {
            imageUrl: 'Plots/engine8.png', // Replace with actual image path
            message: 'Predicted RUL: 0.5289478525519371'
        },
        '9': {
            imageUrl: 'Plots/engine9.png', // Replace with actual image path
            message: 'Predicted RUL: 12.463587522506714'
        },
        '10': {
            imageUrl: 'Plots/engine10.png', // Replace with actual image path
            message: 'Predicted RUL: -2.0565335005521774'
        },
        '11': {
            imageUrl: 'Plots/engine11.png', // Replace with actual image path
            message: 'Predicted RUL: 0.6182658225297928'
        },
        '12': {
            imageUrl: 'Plots/engine12.png', // Replace with actual image path
            message: 'Predicted RUL: 0.39623376727104187'
        },
        '13': {
            imageUrl: 'Plots/engine13.png', // Replace with actual image path
            message: 'Predicted RUL: 3.3542726933956146'
        },
        '14': {
            imageUrl: 'Plots/engine14.png', // Replace with actual image path
            message: 'Predicted RUL: -1.3756106793880463'
        },
        '15': {
            imageUrl: 'Plots/engine15.png', // Replace with actual image path
            message: 'Predicted RUL: -3.221651975224694'
        },
        '16': {
            imageUrl: 'Plots/engine16.png', // Replace with actual image path
            message: 'Predicted RUL: -4.594224691390991'
        },
        '17': {
            imageUrl: 'Plots/engine17.png', // Replace with actual image path
            message: 'Predicted RUL: 0.19862540066242218'
        },
        '18': {
            imageUrl: 'Plots/engine18.png', // Replace with actual image path
            message: 'Predicted RUL: 14.303703710436821'
        },
        '19': {
            imageUrl: 'Plots/engine19.png', // Replace with actual image path
            message: 'Predicted RUL: -1.5247540846467018'
        },
        '20': {
            imageUrl: 'Plots/engine20.png', // Replace with actual image path
            message: 'Predicted RUL: -0.1426563262939453'
        },
        '21': {
            imageUrl: 'Plots/engine21.png', // Replace with actual image path
            message: 'Predicted RUL: -1.1919826567173004'
        },
        '22': {
            imageUrl: 'Plots/engine22.png', // Replace with actual image path
            message: 'Predicted RUL: -6.903321236371994'
        },
        '23': {
            imageUrl: 'Plots/engine23.png', // Replace with actual image path
            message: 'Predicted RUL: 2.4307073578238487'
        },
        '24': {
            imageUrl: 'Plots/engine24.png', // Replace with actual image path
            message: 'Predicted RUL: -0.32119347155094147'
        },
        '25': {
            imageUrl: 'Plots/engine25.png', // Replace with actual image path
            message: 'Predicted RUL: 6.291102632880211'
        },
        '26': {
            imageUrl: 'Plots/engine26.png', // Replace with actual image path
            message: 'Predicted RUL: 8.165467478334904'
        },
        '27': {
            imageUrl: 'Plots/engine27.png', // Replace with actual image path
            message: 'Predicted RUL: 4.555215537548065'
        },
        '28': {
            imageUrl: 'Plots/engine28.png', // Replace with actual image path
            message: 'Predicted RUL: 3.314613163471222'
        },
        '29': {
            imageUrl: 'Plots/engine29.png', // Replace with actual image path
            message: 'Predicted RUL: 5.154159128665924'
        },
        '30': {
            imageUrl: 'Plots/engine30.png', // Replace with actual image path
            message: 'Predicted RUL: -3.395420975983143'
        },
        '31': {
            imageUrl: 'Plots/engine31.png', // Replace with actual image path
            message: 'Predicted RUL: -4.211580142378807'
        },
        '32': {
            imageUrl: 'Plots/engine32.png', // Replace with actual image path
            message: 'Predicted RUL: -1.5104731917381287'
        },
        '33': {
            imageUrl: 'Plots/engine33.png', // Replace with actual image path
            message: 'Predicted RUL: -1.491204209625721'
        },
        '34': {
            imageUrl: 'Plots/engine34.png', // Replace with actual image path
            message: 'Predicted RUL: -0.9058588892221451'
        },
        '35': {
            imageUrl: 'Plots/engine35.png', // Replace with actual image path
            message: 'Predicted RUL: -4.033217579126358'
        },
        '36': {
            imageUrl: 'Plots/engine36.png', // Replace with actual image path
            message: 'Predicted RUL: -2.3232252448797226'
        },
        '37': {
            imageUrl: 'Plots/engine37.png', // Replace with actual image path
            message: 'Predicted RUL: 2.101319268345833'
        },
        '38': {
            imageUrl: 'Plots/engine38.png', // Replace with actual image path
            message: 'Predicted RUL: 11.481686994433403'
        },
        '39': {
            imageUrl: 'Plots/engine39.png', // Replace with actual image path
            message: 'Predicted RUL: 8.889194801449776'
        },
        '40': {
            imageUrl: 'Plots/engine40.png', // Replace with actual image path
            message: 'Predicted RUL: 3.4620016403496265'
        },
        '41': {
            imageUrl: 'Plots/engine41.png', // Replace with actual image path
            message: 'Predicted RUL: -0.5749737471342087'
        },
        '42': {
            imageUrl: 'Plots/engine42.png', // Replace with actual image path
            message: 'Predicted RUL: -3.4677302464842796'
        },
        '43': {
            imageUrl: 'Plots/engine43.png', // Replace with actual image path
            message: 'Predicted RUL: -6.196857169270516'
        },
        '44': {
            imageUrl: 'Plots/engine44.png', // Replace with actual image path
            message: 'Predicted RUL: -4.255270838737488'
        },
        '45': {
            imageUrl: 'Plots/engine45.png', // Replace with actual image path
            message: 'Predicted RUL: -1.5203184261918068'
        },
        '46': {
            imageUrl: 'Plots/engine46.png', // Replace with actual image path
            message: 'Predicted RUL: -9.820362143218517'
        },
        '47': {
            imageUrl: 'Plots/engine47.png', // Replace with actual image path
            message: 'Predicted RUL: -3.372276194393635'
        },
        '48': {
            imageUrl: 'Plots/engine48.png', // Replace with actual image path
            message: 'Predicted RUL: 11.22241124510765'
        },
        '49': {
            imageUrl: 'Plots/engine49.png', // Replace with actual image path
            message: 'Predicted RUL: 0.8172269314527513'
        },
        '50': {
            imageUrl: 'Plots/engine50.png', // Replace with actual image path
            message: 'Predicted RUL: -2.337905004620552'
        },
        '51': {
            imageUrl: 'Plots/engine51.png', // Replace with actual image path
            message: 'Predicted RUL: 9.661783188581467'
        },
        '52': {
            imageUrl: 'Plots/engine52.png', // Replace with actual image path
            message: 'Predicted RUL: -3.626826673746109'
        },
        '53': {
            imageUrl: 'Plots/engine53.png', // Replace with actual image path
            message: 'Predicted RUL: 1.8728442788124084'
        },
        '54': {
            imageUrl: 'Plots/engine54.png', // Replace with actual image path
            message: 'Predicted RUL: -1.9448604583740234'
        },
        '55': {
            imageUrl: 'Plots/engine55.png', // Replace with actual image path
            message: 'Predicted RUL: 7.966321706771851'
        },
        '56': {
            imageUrl: 'Plots/engine56.png', // Replace with actual image path
            message: 'Predicted RUL: -3.859347775578499'
        },
        '57': {
            imageUrl: 'Plots/engine57.png', // Replace with actual image path
            message: 'Predicted RUL: 2.327533185482025'
        },
        '58': {
            imageUrl: 'Plots/engine58.png', // Replace with actual image path
            message: 'Predicted RUL: 0.1651681512594223'
        },
        '59': {
            imageUrl: 'Plots/engine59.png', // Replace with actual image path
            message: 'Predicted RUL: -7.4212344735860825'
        },
        '60': {
            imageUrl: 'Plots/engine60.png', // Replace with actual image path
            message: 'Predicted RUL: 0.05337374657392502'
        },
        '61': {
            imageUrl: 'Plots/engine61.png', // Replace with actual image path
            message: 'Predicted RUL: -5.775331616401672'
        },
        '62': {
            imageUrl: 'Plots/engine62.png', // Replace with actual image path
            message: 'Predicted RUL: -2.635972321033478'
        },
        '63': {
            imageUrl: 'Plots/engine63.png', // Replace with actual image path
            message: 'Predicted RUL: 4.316841974854469'
        },
        '64': {
            imageUrl: 'Plots/engine64.png', // Replace with actual image path
            message: 'Predicted RUL: 2.172990493476391'
        },
        '65': {
            imageUrl: 'Plots/engine65.png', // Replace with actual image path
            message: 'Predicted RUL: -0.07564002275466919'
        },
        '66': {
            imageUrl: 'Plots/engine66.png', // Replace with actual image path
            message: 'Predicted RUL: -4.473823271691799'
        },
        '67': {
            imageUrl: 'Plots/engine67.png', // Replace with actual image path
            message: 'Predicted RUL: -3.326947510242462'
        },
        '68': {
            imageUrl: 'Plots/engine68.png', // Replace with actual image path
            message: 'Predicted RUL: -1.4803059250116346'
        },
        '69': {
            imageUrl: 'Plots/engine69.png', // Replace with actual image path
            message: 'Predicted RUL: -7.256058759987354'
        },
        '70': {
            imageUrl: 'Plots/engine70.png', // Replace with actual image path
            message: 'Predicted RUL: 0.701237678527832'
        },
        '71': {
            imageUrl: 'Plots/engine71.png', // Replace with actual image path
            message: 'Predicted RUL: 5.933546774089336'
        },
        '72': {
            imageUrl: 'Plots/engine72.png', // Replace with actual image path
            message: 'Predicted RUL: -4.82495179772377'
        },
        '73': {
            imageUrl: 'Plots/engine73.png', // Replace with actual image path
            message: 'Predicted RUL: -4.1404101848602295'
        },
        '74': {
            imageUrl: 'Plots/engine74.png', // Replace with actual image path
            message: 'Predicted RUL: 0.604323036968708'
        },
        '75': {
            imageUrl: 'Plots/engine75.png', // Replace with actual image path
            message: 'Predicted RUL: -8.067032039165497'
        },
        '76': {
            imageUrl: 'Plots/engine76.png', // Replace with actual image path
            message: 'Predicted RUL: -7.283100597560406'
        },
        '77': {
            imageUrl: 'Plots/engine77.png', // Replace with actual image path
            message: 'Predicted RUL: 4.963806074112654'
        },
        '78': {
            imageUrl: 'Plots/engine78.png', // Replace with actual image path
            message: 'Predicted RUL: -1.5976034104824066'
        },
        '79': {
            imageUrl: 'Plots/engine79.png', // Replace with actual image path
            message: 'Predicted RUL: -7.190961867570876'
        },
        '80': {
            imageUrl: 'Plots/engine80.png', // Replace with actual image path
            message: 'Predicted RUL: 4.639677882194519'
        },
        '81': {
            imageUrl: 'Plots/engine81.png', // Replace with actual image path
            message: 'Predicted RUL: -4.860190540552139'
        },
        '82': {
            imageUrl: 'Plots/engine82.png', // Replace with actual image path
            message: 'Predicted RUL: -1.2716753259301186'
        },
        '83': {
            imageUrl: 'Plots/engine83.png', // Replace with actual image path
            message: 'Predicted RUL: -14.154753595590591'
        },
        '84': {
            imageUrl: 'Plots/engine84.png', // Replace with actual image path
            message: 'Predicted RUL: 7.382911175489426'
        },
        '85': {
            imageUrl: 'Plots/engine85.png', // Replace with actual image path
            message: 'Predicted RUL: 0.7565073594450951'
        },
        '86': {
            imageUrl: 'Plots/engine86.png', // Replace with actual image path
            message: 'Predicted RUL: -4.6701541766524315'
        },
        '87': {
            imageUrl: 'Plots/engine87.png', // Replace with actual image path
            message: 'Predicted RUL: -3.2253422141075134'
        },
        '88': {
            imageUrl: 'Plots/engine88.png', // Replace with actual image path
            message: 'Predicted RUL: -3.512655586004257'
        },
        '89': {
            imageUrl: 'Plots/engine89.png', // Replace with actual image path
            message: 'Predicted RUL: -4.91165953874588'
        },
        '90': {
            imageUrl: 'Plots/engine90.png', // Replace with actual image path
            message: 'Predicted RUL: 2.9182884357869625'
        },
        '91': {
            imageUrl: 'Plots/engine91.png', // Replace with actual image path
            message: 'Predicted RUL: 3.8193362057209015'
        },
        '92': {
            imageUrl: 'Plots/engine92.png', // Replace with actual image path
            message: 'Predicted RUL: -2.9670175909996033'
        },
        '93': {
            imageUrl: 'Plots/engine93.png', // Replace with actual image path
            message: 'Predicted RUL: 1.7834544852375982'
        },
        '94': {
            imageUrl: 'Plots/engine94.png', // Replace with actual image path
            message: 'Predicted RUL: 7.8280141688883305'
        },
        '95': {
            imageUrl: 'Plots/engine95.png', // Replace with actual image path
            message: 'Predicted RUL: -4.89287106692791'
        },
        '96': {
            imageUrl: 'Plots/engine96.png', // Replace with actual image path
            message: 'Predicted RUL: -17.70786762237549'
        },
        '97': {
            imageUrl: 'Plots/engine97.png', // Replace with actual image path
            message: 'Predicted RUL: 2.939838744699955'
        },
        '98': {
            imageUrl: 'Plots/engine98.png', // Replace with actual image path
            message: 'Predicted RUL: -1.0961198434233665'
        },
        '99': {
            imageUrl: 'Plots/engine99.png', // Replace with actual image path
            message: 'Predicted RUL: -1.9875324964523315'
        },
        '100': {
            imageUrl: 'Plots/engine100.png', // Replace with actual image path
            message: 'Predicted RUL: -3.1548038721084595'
        },
        // Continue for all engine IDs...
        'faulty': {
            imageUrl: 'Plots/faulty-engine.png', // Image for faulty engine
            message: 'Predicted RUL: Engine is faulty'
        },
        // Add other cases as needed for specific engine IDs
        
        // Default case if engineId is not found
        'default': {
            imageUrl: 'Plots/default-engine.png', // Default image in case no match
            message: 'Predicted RUL: N/A'
        }
    };

    // Return the corresponding engine data or the default if not found
    return engineData[engineId] || engineData['default'];
}
