import { calculateAspectRatio, fixRoundingErrors } from "./aspect-ratio.js";
import { modulo, percentage, percentageOf, difference } from "./percentage.js";

document.addEventListener('input', (e) => {
    console.log(e.target.id);
    if (e.target.id.startsWith('modulo')) {
        document.getElementById('modulo_result').value = modulo(document.getElementById('modulo_1').value, document.getElementById('modulo_2').value);
    }
    if (e.target.id.startsWith('percentage')) {
        document.getElementById('percentage_result').value = percentage(document.getElementById('percentage_1').value, document.getElementById('percentage_2').value);
    }
    if (e.target.id.startsWith('percentageOf')) {
        document.getElementById('percentageOf_result').value = percentageOf(document.getElementById('percentageOf_1').value, document.getElementById('percentageOf_2').value);
    }
    if (e.target.id.startsWith('difference')) {
        document.getElementById('difference_result').value = difference(document.getElementById('difference_1').value, document.getElementById('difference_2').value);
    }
    if (e.target.id.startsWith('ratio_result-w')) {
        document.getElementById('ratio_result-height').value = calculateAspectRatio(document.getElementById('ratio_1').value, document.getElementById('ratio_2').value, document.getElementById('ratio_result-width').value, 'w');
    }
    if (e.target.id.startsWith('ratio_result-h')) {
        document.getElementById('ratio_result-width').value = calculateAspectRatio(document.getElementById('ratio_1').value, document.getElementById('ratio_2').value, document.getElementById('ratio_result-height').value, 'h');
    }
});
