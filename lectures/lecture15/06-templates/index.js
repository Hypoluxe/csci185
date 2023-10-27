//The data:
const firstName = "Isabella";
const pic = "http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png"; 
const score = 600;

console.log(firstName);
console.log(pic);
console.log(score);

document.querySelector('main').innerHTML = `
    <section class="card">
        <img src="${pic}" />
        <p>Welcome, ${firstName}. Your current high score is ${score}.</p>
    </section>
`;
