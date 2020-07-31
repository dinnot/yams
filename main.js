const results = {
    "1s-1+": (arr) => countDigit(arr, 1) >= 1,
    "1s-2+": (arr) => countDigit(arr, 1) >= 2,
    "1s-3+": (arr) => countDigit(arr, 1) >= 3,
    "1s-4+": (arr) => countDigit(arr, 1) >= 4,
    "1s-5+": (arr) => countDigit(arr, 1) >= 5,
    "2s-1+": (arr) => countDigit(arr, 2) >= 1,
    "2s-2+": (arr) => countDigit(arr, 2) >= 2,
    "2s-3+": (arr) => countDigit(arr, 2) >= 3,
    "2s-4+": (arr) => countDigit(arr, 2) >= 4,
    "2s-5+": (arr) => countDigit(arr, 2) >= 5,
    "3s-1+": (arr) => countDigit(arr, 3) >= 1,
    "3s-2+": (arr) => countDigit(arr, 3) >= 2,
    "3s-3+": (arr) => countDigit(arr, 3) >= 3,
    "3s-4+": (arr) => countDigit(arr, 3) >= 4,
    "3s-5+": (arr) => countDigit(arr, 3) >= 5,
    "4s-1+": (arr) => countDigit(arr, 4) >= 1,
    "4s-2+": (arr) => countDigit(arr, 4) >= 2,
    "4s-3+": (arr) => countDigit(arr, 4) >= 3,
    "4s-4+": (arr) => countDigit(arr, 4) >= 4,
    "4s-5+": (arr) => countDigit(arr, 4) >= 5,
    "5s-1+": (arr) => countDigit(arr, 5) >= 1,
    "5s-2+": (arr) => countDigit(arr, 5) >= 2,
    "5s-3+": (arr) => countDigit(arr, 5) >= 3,
    "5s-4+": (arr) => countDigit(arr, 5) >= 4,
    "5s-5+": (arr) => countDigit(arr, 5) >= 5,
    "6s-1+": (arr) => countDigit(arr, 6) >= 1,
    "6s-2+": (arr) => countDigit(arr, 6) >= 2,
    "6s-3+": (arr) => countDigit(arr, 6) >= 3,
    "6s-4+": (arr) => countDigit(arr, 6) >= 4,
    "6s-5+": (arr) => countDigit(arr, 6) >= 5,
    "sum20": (arr) => sum(arr) === 20,
    "sum21": (arr) => sum(arr) === 21,
    "sum22": (arr) => sum(arr) === 22,
    "sum23": (arr) => sum(arr) === 23,
    "sum24": (arr) => sum(arr) === 24,
    "sum25": (arr) => sum(arr) === 25,
    "sum26": (arr) => sum(arr) === 26,
    "sum27": (arr) => sum(arr) === 27,
    "sum28": (arr) => sum(arr) === 28,
    "sum29": (arr) => sum(arr) === 29,
    "sum30": (arr) => sum(arr) === 30,
    "sum20+": (arr) => sum(arr) >= 20,
    "sum21+": (arr) => sum(arr) >= 21,
    "sum22+": (arr) => sum(arr) >= 22,
    "sum23+": (arr) => sum(arr) >= 23,
    "sum24+": (arr) => sum(arr) >= 24,
    "sum25+": (arr) => sum(arr) >= 25,
    "sum26+": (arr) => sum(arr) >= 26,
    "sum27+": (arr) => sum(arr) >= 27,
    "sum28+": (arr) => sum(arr) >= 28,
    "sum29+": (arr) => sum(arr) >= 29,
    "full25+": (arr) => isFullHouse(arr) && sum(arr) >= 5,
    "full27+": (arr) => isFullHouse(arr) && sum(arr) >= 7,
    "full28+": (arr) => isFullHouse(arr) && sum(arr) >= 8,
    "full29+": (arr) => isFullHouse(arr) && sum(arr) >= 9,
    "full30+": (arr) => isFullHouse(arr) && sum(arr) >= 10,
    "full31+": (arr) => isFullHouse(arr) && sum(arr) >= 11,
    "full32+": (arr) => isFullHouse(arr) && sum(arr) >= 12,
    "full33+": (arr) => isFullHouse(arr) && sum(arr) >= 13,
    "full34+": (arr) => isFullHouse(arr) && sum(arr) >= 14,
    "full35+": (arr) => isFullHouse(arr) && sum(arr) >= 15,
    "full36+": (arr) => isFullHouse(arr) && sum(arr) >= 16,
    "full37+": (arr) => isFullHouse(arr) && sum(arr) >= 17,
    "full38+": (arr) => isFullHouse(arr) && sum(arr) >= 18,
    "full39+": (arr) => isFullHouse(arr) && sum(arr) >= 19,
    "full40+": (arr) => isFullHouse(arr) && sum(arr) >= 20,
    "full41+": (arr) => isFullHouse(arr) && sum(arr) >= 21,
    "full42+": (arr) => isFullHouse(arr) && sum(arr) >= 22,
    "full43+": (arr) => isFullHouse(arr) && sum(arr) >= 23,
    "full44+": (arr) => isFullHouse(arr) && sum(arr) >= 24,
    "full45+": (arr) => isFullHouse(arr) && sum(arr) >= 25,
    "full46+": (arr) => isFullHouse(arr) && sum(arr) >= 26,
    "full47+": (arr) => isFullHouse(arr) && sum(arr) >= 27,
    "full48+": (arr) => isFullHouse(arr) && sum(arr) >= 28,
    "full50+": (arr) => isFullHouse(arr) && sum(arr) >= 30,
    "fok34+": (arr) => countDigit(arr, 1) >= 4 || countDigit(arr, 2) >= 4 || countDigit(arr, 3) >= 4 || countDigit(arr, 4) >= 4 || countDigit(arr, 5) >= 4 || countDigit(arr, 6) >= 4,
    "fok38+": (arr) => countDigit(arr, 2) >= 4 || countDigit(arr, 3) >= 4 || countDigit(arr, 4) >= 4 || countDigit(arr, 5) >= 4 || countDigit(arr, 6) >= 4,
    "fok42+": (arr) => countDigit(arr, 3) >= 4 || countDigit(arr, 4) >= 4 || countDigit(arr, 5) >= 4 || countDigit(arr, 6) >= 4,
    "fok46+": (arr) => countDigit(arr, 4) >= 4 || countDigit(arr, 5) >= 4 || countDigit(arr, 6) >= 4,
    "fok50+": (arr) => countDigit(arr, 5) >= 4 || countDigit(arr, 6) >= 4,
    "fok54+": (arr) => countDigit(arr, 6) >= 4,
    "smallStraight": (arr) => isSmallStraight(arr),
    "largeStraight": (arr) => isLargeStraight(arr),
    "u8-60+": (arr) => sum(arr) <= 8,
    "u8-65+": (arr) => sum(arr) <= 7,
    "u8-70+": (arr) => sum(arr) <= 6,
    "u8-75+": (arr) => sum(arr) <= 5,
    "y75+": (arr) => countDigit(arr, 1) === 5 || countDigit(arr, 2) === 5 || countDigit(arr, 3) === 5 || countDigit(arr, 4) === 5 || countDigit(arr, 5) === 5 || countDigit(arr, 6) === 5,
    "y80+": (arr) => countDigit(arr, 2) === 5 || countDigit(arr, 3) === 5 || countDigit(arr, 4) === 5 || countDigit(arr, 5) === 5 || countDigit(arr, 6) === 5,
    "y85+": (arr) => countDigit(arr, 3) === 5 || countDigit(arr, 4) === 5 || countDigit(arr, 5) === 5 || countDigit(arr, 6) === 5,
    "y90+": (arr) => countDigit(arr, 4) === 5 || countDigit(arr, 5) === 5 || countDigit(arr, 6) === 5,
    "y95+": (arr) => countDigit(arr, 5) === 5 || countDigit(arr, 6) === 5,
    "y100+": (arr) => countDigit(arr, 6) === 5,
};

function countDigit(arr, digit) {
    var result = 0;
    for(let i = 0; i < arr.length; i++) if(arr[i] === digit) result++;
    return result;
}

function sum(arr) {
    var result = 0;
    for(let i = 0; i < arr.length; i++) result += arr[i];
    return result;
}

function isFullHouse(arr) {
    var clone = [...arr];
    clone.sort();
    return clone[0] === clone[1] && clone[3] === clone[4] && (clone[1] === clone[2] || clone[2] === clone[3]);
}

function isStraight(arr) {
    var clone = [...arr];
    clone.sort();
    return clone[0] === clone[1]-1 && clone[1] === clone[2]-1 && clone[2] === clone[3]-1 && clone[3] === clone[4]-1;
}

function isLargeStraight(arr) {
    return isStraight(arr) && countDigit(arr, 6) === 1;
}

function isSmallStraight(arr) {
    return isStraight(arr) && countDigit(arr, 1) === 1;
}

const scoresCache = {};
function getScores(arr) {
    let score = {};
    for(var r in results) {
        score[r] = results[r](arr) ? 1 : 0;
    }
    return score;
}

function getScoresCached(key) {
    return scoresCache[key];
}

function buildScoresCache() {
    for(var a=1;a<=6;a++) 
    for(var b=1;b<=6;b++)
    for(var c=1;c<=6;c++)
    for(var d=1;d<=6;d++)
    for(var e=1;e<=6;e++) {
        scoresCache[`${a}${b}${c}${d}${e}`]=getScores([a,b,c,d,e]);
    }
}

function addScores(score1, score2) {
    var result = {};
    for(var r in score1) {
        if (!(r in result))result[r] = 0;
        result[r] += score1[r];
    }
    for(var r in score2) {
        if (!(r in result))result[r] = 0;
        result[r] += score2[r];
    }
    return result;
}

function divideScore(score, by) {
    for(var r in score) {
        score[r] /= by;
    }
    return score;
}

function maxScores(score1, score2) {
    var result = {};
    for(var r in score1) {
        result[r] = score1[r];
        if ((r in score2) && score2[r] > result[r]) result[r] = score2[r];
    }
    for (var r in score2) {
        if (!(r in result)) result[r] = score2[r];
    }
    return result;
}

const rollsCache = [];

function getRollsCached(length) {
    return rollsCache[length];
}

function buildRollsCache() {
    for(var i=0;i<=5;i++)rollsCache[i]=[];
    for(var a=1;a<=6;a++) {
        rollsCache[1].push(`${a}`);
        for(var b=1;b<=6;b++) {
            rollsCache[2].push(`${a}${b}`);
            for(var c=1;c<=6;c++) {
                rollsCache[3].push(`${a}${b}${c}`);
                for(var d=1;d<=6;d++) {
                    rollsCache[4].push(`${a}${b}${c}${d}`);
                    for(var e=1;e<=6;e++) {
                        rollsCache[5].push(`${a}${b}${c}${d}${e}`);
                    }
                }
            }
        }
    }
}

const throwCache = [];

function getThrowProbability(arr, throws) {
    if (throws === 0) return getScoresCached(arr);
    else return throwCache[throws][arr];
}

function getMaxScore(key, throwsLeft) {
    if (throwsLeft === 0) return getScoresCached(key);
    var sortedkey = key.split("").sort().join("");
    if (key > sortedkey) return getThrowProbability(sortedkey, throwsLeft+1);
    var selects = [];
    computeSelects(key, selects);
    let maxScore = {};
    for(var i = 0; i < selects.length; i++) {
        const select = selects[i];
        var score = getThrowProbability(select, throwsLeft);
        maxScore = maxScores(maxScore, score);
    }
    return maxScore;
}

function buildOneThrowCache() {
    for(var throws=1; throws <=3; throws++) {
        throwCache[throws] = {};
        let sum = {};
        for(var a=1;a<=6;a++) {
            const keyA = `${a}`;
            let sumA = {};
            for(var b=1;b<=6;b++) {
                const keyB = `${a}${b}`;
                let sumB = {};
                for(var c=1;c<=6;c++) {
                    const keyC = `${a}${b}${c}`;
                    let sumC = {}
                    for(var d=1;d<=6;d++) {
                        const keyD = `${a}${b}${c}${d}`;
                        let sumD = {};
                        for(var e=1;e<=6;e++) {
                            const keyE = `${a}${b}${c}${d}${e}`;
                            const score = getMaxScore(keyE, throws-1);
                            throwCache[throws][keyE] = score;
                            sumD = addScores(sumD, throwCache[throws][keyE]);
                        }
                        throwCache[throws][keyD] = divideScore(sumD, 6);
                        sumC = addScores(sumC, throwCache[throws][keyD]);
                    }
                    throwCache[throws][keyC] = divideScore(sumC, 6);
                    sumB = addScores(sumB, throwCache[throws][keyC]);
                }
                throwCache[throws][keyB] = divideScore(sumB, 6);
                sumA = addScores(sumA, throwCache[throws][keyB]);
            }
            throwCache[throws][keyA] = divideScore(sumA, 6);
            sum = addScores(sum, throwCache[throws][keyA]);
        }
        throwCache[throws][""] = divideScore(sum, 6);
    }
    for(var throws=1; throws <=2; throws++) {
        for(var a=1;a<=6;a++) {
            for(var b=1;b<=6;b++) {
                for(var c=1;c<=6;c++) {
                    for(var d=1;d<=6;d++) {
                        for(var e=1;e<=6;e++) {
                            const key = `${a}${b}${c}${d}${e}`;
                            throwCache[throws][key] = getMaxScore(key, throws);
                        }
                    }
                }
            }
        }
    }
}


function computeSelects(arr, results, current = "", pos = 0) {
    if (arr.length <= pos) {
        results.push(current);
        return;
    }
    computeSelects(arr, results, current, pos + 1);
    computeSelects(arr, results, current+arr[pos], pos + 1);
}

const cachedOdds = {};

function computeOddsCached(arr, throwsLeft) {
    var key = `${arr}-${throwsLeft}`;
    if (key in cachedOdds) return cachedOdds[key];
    return cachedOdds[key] = computeOdds(arr, throwsLeft);
}

function computeOdds(arr, throwsLeft) {
    if (throwsLeft === 0) {
        return getScoresCached(arr);
    }
    var selections = [];
    computeSelects(arr,selections);
    var maxScore = {};
    for(var i = 0; i < selections.length; i++) {
        var selection = selections[i];
        var selectionScore = getScoreForSelection(selection, throwsLeft);
        maxScore = maxScores(maxScore, selectionScore);
    }
    return maxScore;
}

var selectionCache = {};
function getScoreForSelection(selection, throwsLeft){
    var key = `${selection}-${throwsLeft}`;
    if (key in selectionCache) return selectionCache[key];
    var selectionScore = {};
    if (selection.length === 5) {
        selectionScore = computeOddsCached(selection, throwsLeft - 1);
    } else {
        var rolls = getRollsCached(5-selection.length);
        for(var j = 0; j < rolls.length; j++) {
            var roll = selection + rolls[j];
            var rollScore = computeOddsCached(roll, throwsLeft - 1);
            selectionScore = addScores(rollScore, selectionScore);
        }
        selectionScore = divideScore(selectionScore, rolls.length);
    }
    return selectionCache[key] = selectionScore;
}

var initDone=false;
function init() {
    if(initDone)return;
    buildScoresCache();
    buildRollsCache();
    buildOneThrowCache();
    initDone=true;
}

init();
$('body').show();
drawTable("", 3);

function compute() {
    var dices = $("#dice").val();
    var turns = $("#turns").val();
    drawTable(dices, turns);
}

function drawTable(dices, turns) {
    $('table').hide();
    const result = getThrowProbability(dices, turns);
    //upper
    for(var i=1;i<=6;i++) {
        for(var j=1;j<=5;j++) {
            setValue(`${i}s-${j}`, result[`${i}s-${j}+`]);
        }
    }
    //sums
    for(var i=20;i<30;i++) {
        setValue(`sum${i}e`, result[`sum${i}`]);
        setValue(`sum${i}al`, result[`sum${i}+`]);
    }
    setValue(`sum30e`, result[`sum30`]);
    setValue(`sum30al`, result[`sum30`]);
    //fh
    for(var i=25;i<=50;i++) {
        setValue(`f${i}`, result[`full${i}+`]);
    }
    //fok
    for(var i=34;i<=54;i+=4) {
        setValue(`fok${i}`, result[`fok${i}+`]);
    }
    //straight
    setValue(`small_straight`, result[`smallStraight`] + result[`largeStraight`]);
    setValue(`large_straight`, result[`largeStraight`]);
    //8
    for(var i=60;i<=75;i++) {
        setValue(`eight${i}`, result[`u8-${i}+`]);
    }
    //yams
    for(var i=75;i<=100;i+=5) {
        setValue(`y${i}`, result[`y${i}+`]);
    }
    $('table').show();
}

function setValue(id, value) {
    $(`#${id}`).html(prettyNumber(value));
}

function prettyNumber(number) {
    number *= 100;
    return number.toFixed(2)+"%";
}
