function evaluateResults() {
    let answers = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked'),
        document.querySelector('input[name="q4"]:checked'),
        document.querySelector('input[name="q5"]:checked')
    ];

    let yesCount = answers.filter(answer => answer && answer.value === "yes").length;
    let resultText = "";

    switch (yesCount) {
        case 0:
            resultText = "あなたは独立独歩のタイプ感じます。";
            break;
        case 1:
            resultText = "あなたは慎重なタイプ感じます。";
            break;
        case 2:
            resultText = "あなたはバランスが取れたタイプ感じます。";
            break;
        case 3:
            resultText = "あなたは社交的なタイプ感じます。";
            break;
        case 4:
            resultText = "あなたはアドベンチャラスなタイプ感じます。";
            break;
        case 5:
            resultText = "あなたは非常に積極的なタイプ感じます。";
            break;
        default:
            resultText = "エラーが発生しました。もう一度お試しください。";
    }

    document.getElementById('result').innerText = resultText;
}


