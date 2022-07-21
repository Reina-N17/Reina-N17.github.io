function omikuji(omikujiResult){

    let omikujiArray = ['大吉', '中吉', '吉', '小吉', '凶'];

    let rand = Math.random() * 100 ;

    let dai,chu,shou,kichi,kyo,result;

    console.log(rand);

    if ( omikujiResult === 0) {
        dai = 5;
        chu = 5;
        kichi = 10;
        shou = 40;
        kyo = 40;
    } else if ( omikujiResult === 1) {
        dai = 20;
        chu = 30;
        kichi = 30;
        shou = 15;
        kyo = 5;
    } else if (omikujiResult === 2) {
        dai = 40;
        chu = 40;
        kichi = 10;
        shou = 5;
        kyo = 5;
    } else {
        message = '想定されていない引数です';
        exit();
    }

    if(0<=rand&&rand<dai){
        result = 'おみくじの結果は' + omikujiArray[0];
    } else if (dai<=rand&&rand<dai+chu){
        result = 'おみくじの結果は' + omikujiArray[1];
    } else if (dai+chu<=rand&&rand<dai+chu+kichi){
        result = 'おみくじの結果は' + omikujiArray[2];
    } else if (dai+chu+kichi<=rand&&rand<dai+chu+kichi+shou){
        result = 'おみくじの結果は' + omikujiArray[3];
    } else {
        result = 'プレイヤーの結果は' + omikujiArray[4];
    }
    
    console.log(result);

    const p_result = document.querySelector('#omikuji-result');
    
    p_result.textContent = result;


    return result
}