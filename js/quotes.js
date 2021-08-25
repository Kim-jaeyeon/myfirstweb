const quotes=[
    {
        quote:"\"행동 계획에는 위험과 대가가 따른다. 하지만 이는 나태하게 아무 행동도 취하지 않는데 따르는 장기간의 위험과 대가에 비하면 훨씬 작다.\"",
        author:"John F. Kennedy"
    },
    {
        quote:"\"계산된 위험은 감수하라. 이는 단순히 무모한 것과는 완전히 다른 것이다.\"",
        author:"George S. Patton"
    },
    {
        quote:"\"난관은 낙담이 아닌 분발을 위한 것이다. 인간의 정신은 투쟁을 통해 강해진다.\"",
        author:"William Ellery Channing"
    },
    {
        quote:"\"차분함이 몸에 밴 사람이 하루아침에 열정에 빠지면 그 감정의 폭발은 가장 폭력적인 사람이 갑자기 폭발할 때보다도 더 인상깊다.\"",
        author:"Margery Allingham"
    },
    {
        quote:"\"배우는 거부 당하기 위해 헤맨다. 거부 당하지 않으면 스스로를 거부한다.\"",
        author:"Charlie Chaplin"
    },
    {
        quote:"\"장애물을 만났다고 반드시 멈춰야 하는 것은 아니다. 벽에 부딪힌다면 돌아서서 포기하지 말라. 어떻게 벽에 오를지, 벽을 뚫고 나갈 수 있을지, 또는 돌아갈 방법은 없는지 생각하라.\"",
        author:"Michael Jordan"
    },
    {
        quote:"\"만약 당신이 한번도 두렵거나 굴욕적이거나 상처입은 적이 없다면, 그렇다면 당신은 아무런 위험도 감수하지 않은 것이다.\"",
        author:"Julia Sorel"
    },
    {
        quote:"\"난 위험에 대해 그리 많이 생각지 않는다. 난 그저 내가 하고 싶은 것을 할 뿐이다. 앞으로 나아가야한다면, 나아가면 된다.\"",
        author:"Lillian Carter"
    },
    {
        quote:"\"열정은 사람을 현재에 완전히 가둬서 그에게 시간은 매 순간 이 단절된 '현재'의 연속이 된다.\"",
        author:"Sue Halpern"
    },
    {
        quote:"\"가장 현명한 사람은 자신만의 방향을 따른다.\"",
        author:"Euripides"
    }
];

const quote= document.querySelector("#quote span:first-child");
const author= document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;