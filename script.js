const container = document.getElementById('array-container');
const aboutHeader = document.getElementById('about-header');
const aboutBody = document.getElementById('about-body');
let array = [];      // المصفوفة المنطقية (القيم)
let copyArray = [];
let domElements = []; // المصفوفة المرئية (عناصر div)
let animation = false;

let currentExecutionId = 0; // متغير لتتبع التشغيل الحالي ومنع التداخل
let ANIMATION_SPEED = 400; // السرعة الافتراضية المبدئية (×1)

// قم بتغيير const إلى let
let containerWidth = container.clientWidth;
let ELEMENT_WIDTH = Math.min(40, (containerWidth - (15 - 1) * 5) / 15);
const SPACING = 0;//window.innerWidth < 600 ? 2 : 8;

async function runBubbleSort() {

    aboutHeader.innerHTML = 'الفرز الفقاعي (Bubble Sort):';

    aboutBody.innerHTML =
        'تعتمد خوارزمية الفقاعات على مقارنة كل عنصر بالعنصر المجاور له وتبديلهما إذا كانا بترتيب خاطئ.<br>' +
        'تتكرر هذه العملية عدة مرات حتى تنتقل أكبر العناصر تدريجياً إلى نهاية المصفوفة، كما ترتفع الفقاعات إلى سطح الماء.<br><br>' +

        '<h5>التعقيد الزمني:</h5><br>' +
        'أفضل حالة: O(n)<br>' +
        'متوسط الحالة: O(n<small><sup>2</sup></small>)<br>' +
        'أسوأ حالة: O(n<small><sup>2</sup></small>)<br><br>' +

        '<h5>التعقيد المكاني:</h5><br>' +
        'O(1)<br><br>'

    undisplay();
    await bubbleSort();
    document.getElementById('Reset').style.display = 'inline';

    display();
}
async function runInsertionSort() {

    aboutHeader.innerHTML = 'فرز الإدراج (Insertion Sort):';

    aboutBody.innerHTML =
        'تبني خوارزمية الإدراج الجزء المرتب من المصفوفة تدريجياً، حيث يتم أخذ عنصر جديد في كل خطوة ووضعه في مكانه الصحيح بين العناصر المرتبة مسبقاً.<br><br>' +

        '<b>التعقيد الزمني:</b><br>' +
        'أفضل حالة: O(n)<br>' +
        'متوسط الحالة: O(n<small><sup>2</sup></small>)<br>' +
        'أسوأ حالة: O(n<small><sup>2</sup></small>)<br><br>' +

        '<b>التعقيد المكاني:</b><br>' +
        'O(1)<br><br>'


    undisplay();
    insertionSort();
    document.getElementById('Reset').style.display = 'inline';

    display();
}
async function runSelectionSort() {

    aboutHeader.innerHTML = 'فرز الاختيار (Selection Sort):';

    aboutBody.innerHTML =
        'تعتمد خوارزمية الاختيار على البحث عن أصغر عنصر في الجزء غير المرتب من المصفوفة ثم وضعه في موقعه الصحيح.<br>' +
        'تتكرر هذه العملية حتى تصبح جميع العناصر مرتبة.<br><br>' +

        '<b>التعقيد الزمني:</b><br>' +
        'أفضل حالة: O(n<small><sup>2</sup></small>)<br>' +
        'متوسط الحالة: O(n<small><sup>2</sup></small>)<br>' +
        'أسوأ حالة: O(n<small><sup>2</sup></small>)<br><br>' +

        '<b>التعقيد المكاني:</b><br>' +
        'O(1)<br><br>';

    undisplay();
    await selectionSort();
    document.getElementById('Reset').style.display = 'inline';

    display();
}
async function runMergeSort() {

    aboutHeader.innerHTML = 'فرز الدمج (Merge Sort):';

    aboutBody.innerHTML =
        'تعتمد خوارزمية الدمج على مبدأ "فرق تسد"، حيث يتم تقسيم المصفوفة إلى أجزاء أصغر ثم دمجها مجدداً بعد ترتيبها.<br><br>' +

        '<b>التعقيد الزمني:</b><br>' +
        'أفضل حالة: O(n log n)<br>' +
        'متوسط الحالة: O(n log n)<br>' +
        'أسوأ حالة: O(n log n)<br><br>' +

        '<b>التعقيد المكاني:</b><br>' +
        'O(n)<br><br>';

    undisplay();
    await mergeSort();
    document.getElementById('Reset').style.display = 'inline';

    display();
}
async function runQuickSort() {

    aboutHeader.innerHTML = 'الفرز السريع (Quick Sort):';

    aboutBody.innerHTML =
        'تعتمد خوارزمية الفرز السريع على اختيار عنصر محوري (Pivot)، ثم تقسيم العناصر إلى عناصر أصغر منه وأخرى أكبر منه، ثم تطبيق العملية نفسها على كل جزء.<br><br>' +

        '<b>التعقيد الزمني:</b><br>' +
        'أفضل حالة: O(n log n)<br>' +
        'متوسط الحالة: O(n log n)<br>' +
        'أسوأ حالة: O(n²)<br><br>' +

        '<b>التعقيد المكاني:</b><br>' +
        'O(log n)<br><br>';

    undisplay();
    await quickSort();
    document.getElementById('Reset').style.display = 'inline';

    display();
}









function stopAnimation() {
    animation = false;
    currentExecutionId++; // زيادة العداد لإلغاء أي حلقة تعمل حالياً فوراً
}

function startAnimation() {
    stopAnimation(); // إيقاف أي أنيميشن يعمل حالياً أولاً
    animation = true;
    return currentExecutionId; // إرجاع المعرّف الحالي للدالة التي استدعتها
}
function undisplay() {
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn5').disabled = true;
}
function display() {
    document.getElementById('btn1').disabled = false;
    document.getElementById('btn2').disabled = false;
    document.getElementById('btn3').disabled = false;
    document.getElementById('btn4').disabled = false;
    document.getElementById('btn5').disabled = false;
}
function editSpeed() {
    const speedBtn = document.getElementById('speed');
    const currentText = speedBtn.innerHTML.trim();

    switch (currentText) {
        case 'speed (×1)':
            ANIMATION_SPEED = 200;
            speedBtn.innerHTML = 'speed (×2)';
            break;

        case 'speed (×2)':
            ANIMATION_SPEED = 100;
            speedBtn.innerHTML = 'speed (×4)';
            break;

        case 'speed (×4)':
            ANIMATION_SPEED = 800;
            speedBtn.innerHTML = 'speed (×0.5)';
            break;

        case 'speed (×0.5)':
            ANIMATION_SPEED = 400;
            speedBtn.innerHTML = 'speed (×1)';
            break;

        default:
            ANIMATION_SPEED = 400;
            speedBtn.innerHTML = 'speed (×1)';
            break;
    }
}

/**
 * دالة لتلوين نطاق محدد من الأعمدة بلون معين
 */
function colorRange(fromIndex, toIndex, color) {
    const start = Math.max(0, fromIndex);
    const end = Math.min(domElements.length - 1, toIndex);

    for (let i = start; i <= end; i++) {
        if (domElements[i]) {
            domElements[i].style.backgroundColor = color;
        }
    }
}

/**
 * دالة مساعدة لإيقاف التنفيذ مؤقتاً (Sleep)
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * دالة لتهيئة أو إعادة بناء المصفوفة بقيم عشوائية
 */
function initArray(size = 15, copy = null) {
    container.innerHTML = '';
    aboutHeader.innerHTML = 'خوارزميات الفرز (Sorting Algorithms):';
    aboutBody.innerHTML =
        'هي مجموعة من الخوارزميات المستخدمة لترتيب البيانات' +
        'وفق معيار معين، مثل الترتيب التصاعدي أو التنازلي.<br>' +
        'تختلف هذه الخوارزميات في طريقة عملها وكفاءتها من حيث عدد العمليات المطلوبة والذاكرة المستخدمة.<br>' +
        'تساعد دراسة خوارزميات الفرز على فهم مفاهيم أساسية في علم الحاسوب مثل تحليل الأداء،' +
        'التعقيد الزمني، وإدارة البيانات.';
    array = [];
    domElements = [];
    stopAnimation(); // إيقاف أي حركة عند إعادة توليد مصفوفة جديدة
    display();
    const totalWidth = size * ELEMENT_WIDTH + (size - 1) * SPACING;
    const startOffset = (container.clientWidth - totalWidth) / 2;

    for (let i = 0; i < size; i++) {
        let value = '';
        if (!copy) {
            value = Math.floor(Math.random() * 330) + 40;
        }
        else {
            value = copy[i];
        }
        array.push(value);
        const div = document.createElement('div');
        div.classList.add('array-element');
        div.style.height = `${value}px`;
        div.innerText = value;
        
        const leftPosition = startOffset + i * (ELEMENT_WIDTH + SPACING);
        div.style.left = `${leftPosition}px`;

        container.appendChild(div);
        domElements.push(div);
    }
    if (!copy)
        copyArray = array.slice();
    document.getElementById('Reset').style.display = 'none';
}
function Reset() {
    initArray(copyArray.length, copyArray)
    document.getElementById('Reset').style.display = 'none';

}
/**
 * الدالة الأساسية للتبديل (Swap) مع الانيميشن
 */
async function swap(index1, index2, currentId) {
    if (index1 === index2) return;

    const el1 = domElements[index1];
    const el2 = domElements[index2];

    el1.classList.add('active');
    el2.classList.add('active');

    await sleep(ANIMATION_SPEED / 2);

    const tempLeft = el1.style.left;
    el1.style.left = el2.style.left;
    el2.style.left = tempLeft;

    await sleep(ANIMATION_SPEED);

    // التبديل المنطقي في المصفوفات
    const tempEl = domElements[index1];
    domElements[index1] = domElements[index2];
    domElements[index2] = tempEl;

    const tempVal = array[index1];
    array[index1] = array[index2];
    array[index2] = tempVal;

    el1.classList.remove('active');
    el2.classList.remove('active');

    await sleep(ANIMATION_SPEED / 2);
}

/**
 * دالة مساعدة لتلوين عنصر معين ليدل على أنه تم ترتيبه
 */
async function markAsSorted(index) {
    if (domElements[index]) {
        domElements[index].classList.add('sorted');
    }
}

async function bubbleSort() {
    const id = startAnimation(); // حجز معرّف فريد لهذا التشغيل
    let n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (id !== currentExecutionId) return; // الخروج فوراً إذا تم تشغيل خوارزمية أخرى

            await sleep(ANIMATION_SPEED);
            if (id !== currentExecutionId) return;

            domElements[j].style.backgroundColor = '#f39c12';
            domElements[j + 1].style.backgroundColor = '#f39c12';

            await sleep(ANIMATION_SPEED);
            if (id !== currentExecutionId) return;

            if (array[j] > array[j + 1]) {
                await swap(j, j + 1, id);
            }

            if (id !== currentExecutionId) return;

            domElements[j].style.backgroundColor = '';
            domElements[j + 1].style.backgroundColor = '';
        }
        await markAsSorted(n - i - 1);
    }
    await markAsSorted(0);
    if (id === currentExecutionId) stopAnimation();
}

async function insertionSort() {
    const id = startAnimation();
    let n = array.length;

    const totalWidth = n * ELEMENT_WIDTH + (n - 1) * SPACING;
    const startOffset = (container.clientWidth - totalWidth) / 2;
    const getLeftPosition = (index) => startOffset + index * (ELEMENT_WIDTH + SPACING);

    markAsSorted(0);

    for (let i = 1; i < n; i++) {
        if (id !== currentExecutionId) return;

        let key = array[i];
        const keyElement = domElements[i];

        keyElement.style.backgroundColor = '#f39c12';
        keyElement.style.opacity = '0.4';

        let j = i - 1;

        while (j >= 0 && array[j] > key) {

            await sleep(ANIMATION_SPEED / 2);
            if (id !== currentExecutionId) return;

            domElements[j].style.left = `${getLeftPosition(j + 1)}px`;
            domElements[j + 1] = domElements[j];
            array[j + 1] = array[j];

            markAsSorted(j - 1);

            j--;
            await sleep(ANIMATION_SPEED / 2);
        }
        if (id !== currentExecutionId) return;


        if (j >= 0) {
            markAsSorted(j);
            domElements[j].style.backgroundColor = '#e74c3c';
            await sleep(ANIMATION_SPEED);
            domElements[j].style.backgroundColor = '';
            markAsSorted(j);
        }
        if (id !== currentExecutionId) return;

        array[j + 1] = key;
        domElements[j + 1] = keyElement;

        keyElement.style.left = `${getLeftPosition(j + 1)}px`;
        keyElement.style.opacity = '1';
        keyElement.style.backgroundColor = '';
        keyElement.classList.add('sorted');

        await sleep(ANIMATION_SPEED);
        if (id !== currentExecutionId) return;

    }
    if (id === currentExecutionId) stopAnimation();
}

async function selectionSort() {
    const id = startAnimation();

    async function findAndSaveMin(from = 0) {
        if (id !== currentExecutionId) return -1;

        let currentMax = array[from];
        let currentMaxDiv = domElements[from];
        currentMaxDiv.style.backgroundColor = '#e74c3c';
        let min = from;

        await sleep(ANIMATION_SPEED);

        for (let i = from + 1; i < array.length; i++) {
            if (id !== currentExecutionId) return -1;

            domElements[i].style.backgroundColor = '#f39c12';
            await sleep(ANIMATION_SPEED);
            if (id !== currentExecutionId) return -1;

            if (array[i] < currentMax) {
                currentMaxDiv.style.backgroundColor = '';
                currentMax = array[i];
                min = i;
                await sleep(ANIMATION_SPEED);
                if (id !== currentExecutionId) return -1;
            }

            domElements[i].style.backgroundColor = '';
            currentMaxDiv = domElements[min];
            currentMaxDiv.style.backgroundColor = '#e74c3c';
        }
        await sleep(ANIMATION_SPEED);
        return min;
    }

    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        if (id !== currentExecutionId) return;

        let min = await findAndSaveMin(i);
        if (min === -1 || id !== currentExecutionId) return;

        await swap(i, min, id);
        markAsSorted(i);
    }
    if (id !== currentExecutionId) return;
    markAsSorted(n - 1);
    if (id === currentExecutionId) stopAnimation();
}

async function mergeSort() {
    const id = startAnimation();

    async function merge_Sort(start = 0, end = array.length - 1) {
        if (id !== currentExecutionId) return;
        if (start >= end) return;

        const mid = Math.floor((start + end) / 2);

        await sleep(ANIMATION_SPEED);
        if (id !== currentExecutionId) return;

        colorRange(start, mid, '#f39c12');
        colorRange(mid + 1, end, '');

        await merge_Sort(start, mid);
        if (id !== currentExecutionId) return;

        await sleep(ANIMATION_SPEED);
        if (id !== currentExecutionId) return;

        colorRange(mid + 1, end, '#f39c12');
        colorRange(start, mid, '');

        await merge_Sort(mid + 1, end);
        if (id !== currentExecutionId) return;

        await sleep(ANIMATION_SPEED);
        if (id !== currentExecutionId) return;

        await merge(start, mid, end);
        if (id !== currentExecutionId) return;

        if (start === 0 && end === array.length - 1) {
            for (let i = 0; i < array.length; i++) {
                markAsSorted(i);
            }
            stopAnimation();
        }
    }

    async function merge(start, mid, end) {
        if (id !== currentExecutionId) return;

        let n = array.length;
        const totalWidth = n * ELEMENT_WIDTH + (n - 1) * SPACING;
        const startOffset = (container.clientWidth - totalWidth) / 2;
        const getLeftPosition = (index) => startOffset + index * (ELEMENT_WIDTH + SPACING);

        for (let index = start; index <= end; index++) {
            if (domElements[index]) domElements[index].style.opacity = '0.3';
        }
        await sleep(ANIMATION_SPEED);
        if (id !== currentExecutionId) return;

        let leftValues = [];
        let leftElements = [];
        let rightValues = [];
        let rightElements = [];

        for (let i = start; i <= mid; i++) {
            leftValues.push(array[i]);
            leftElements.push(domElements[i]);
        }

        for (let j = mid + 1; j <= end; j++) {
            rightValues.push(array[j]);
            rightElements.push(domElements[j]);
        }

        let i = 0;
        let j = 0;
        let k = start;
        if (id !== currentExecutionId) return;

        while (i < leftValues.length && j < rightValues.length) {
            if (id !== currentExecutionId) return;

            leftElements[i].style.backgroundColor = '#f39c12';
            rightElements[j].style.backgroundColor = '#f39c12';
            await sleep(ANIMATION_SPEED / 2);

            if (leftValues[i] <= rightValues[j]) {
                if (id !== currentExecutionId) return;

                rightElements[j].style.backgroundColor = '';
                leftElements[i].style.left = `${getLeftPosition(k)}px`;
                leftElements[i].style.opacity = '1';
                leftElements[i].style.backgroundColor = '#2ecc71';

                array[k] = leftValues[i];
                domElements[k] = leftElements[i];
                i++;
            } else {
                if (id !== currentExecutionId) return;

                leftElements[i].style.backgroundColor = '';
                rightElements[j].style.left = `${getLeftPosition(k)}px`;
                rightElements[j].style.opacity = '1';
                rightElements[j].style.backgroundColor = '#2ecc71';

                array[k] = rightValues[j];
                domElements[k] = rightElements[j];
                j++;
            }

            k++;
            await sleep(ANIMATION_SPEED);
            if (id !== currentExecutionId) return;

        }

        while (i < leftValues.length) {
            if (id !== currentExecutionId) return;

            leftElements[i].style.left = `${getLeftPosition(k)}px`;
            leftElements[i].style.opacity = '1';
            leftElements[i].style.backgroundColor = '#2ecc71';

            array[k] = leftValues[i];
            domElements[k] = leftElements[i];
            i++;
            k++;
            await sleep(ANIMATION_SPEED);
        }

        while (j < rightValues.length) {
            if (id !== currentExecutionId) return;

            rightElements[j].style.left = `${getLeftPosition(k)}px`;
            rightElements[j].style.opacity = '1';
            rightElements[j].style.backgroundColor = '#2ecc71';

            array[k] = rightValues[j];
            domElements[k] = rightElements[j];
            j++;
            k++;
            await sleep(ANIMATION_SPEED);
        }

        for (let index = start; index <= end; index++) {
            if (domElements[index]) {
                domElements[index].style.backgroundColor = '';
            }
        }
    }

    await merge_Sort();
}

async function quickSort() {
    const id = startAnimation(); // بدء الأنيميشن وأخذ المعرف الفريد لضمان عدم تداخل الخوارزميات

    // دالة التقسيم (Partition)
    async function partition(low, high) {
        if (id !== currentExecutionId) return -1;

        let pivot = array[high];
        let pivotElement = domElements[high];

        // 1. تلوين المحور (Pivot) باللون الأحمر
        pivotElement.style.backgroundColor = '#310c08';

        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (id !== currentExecutionId) return -1;

            // 2. تلوين المؤشر j باللون الأزرق (العنصر الجاري فحصه)
            domElements[j].style.backgroundColor = '#eeff00';

            // 3. المحافظة على لون المؤشر i بالبنفسجي (الحد الفاصل للعناصر الأصغر)
            if (i >= low) {
                domElements[i].style.backgroundColor = '#9b59b6';
            }

            // إيقاف مؤقت لرؤية المؤشرات (i و j) قبل اتخاذ القرار
            await sleep(ANIMATION_SPEED);
            if (id !== currentExecutionId) return -1;

            if (array[j] < pivot) {
                // إزالة اللون عن i القديم قبل تحريكه خطوة للأمام
                if (i >= low) domElements[i].style.backgroundColor = '';

                i++;

                // إذا كان i الجديد مختلفاً عن j، نلونه بالبرتقالي للفت الانتباه لعملية التبديل القادمة
                if (i !== j) {
                    domElements[i].style.backgroundColor = '#e67e22';
                    await sleep(ANIMATION_SPEED / 2);
                }
                if (id !== currentExecutionId) return;

                // تنفيذ التبديل
                await swap(i, j, id);
                if (id !== currentExecutionId) return -1;

                // بعد التبديل: i أصبح يحتوي على العنصر الأصغر، لذا يصبح لونه بنفسجي
                domElements[i].style.backgroundColor = '#9b59b6';

                // و j أصبح يحتوي على العنصر الأكبر، لذا نعيده للونه الطبيعي
                if (i !== j) {
                    domElements[j].style.backgroundColor = '';
                }
            } else {
                // إذا كان العنصر j أكبر من المحور، لا يحدث تبديل، فقط نطفئ اللون الأزرق
                domElements[j].style.backgroundColor = '';
            }
        }

        if (id !== currentExecutionId) return -1;

        // انتهت الحلقة، نقوم بإزالة اللون البنفسجي عن i الأخير
        if (i >= low) domElements[i].style.backgroundColor = '';

        // تبديل المحور (high) ليأخذ مكانه الصحيح (بين الأصغر والأكبر) وهو i + 1
        await swap(i + 1, high, id);
        if (id !== currentExecutionId) return -1;

        // إزالة اللون الأحمر عن المحور لأنه انتهى دوره
        domElements[i + 1].style.backgroundColor = '';

        return i + 1; // إرجاع موقع المحور الجديد
    }

    // الدالة العودية الأساسية
    async function quickSortHelper(low, high) {
        if (id !== currentExecutionId) return;

        if (low < high) {
            let pi = await partition(low, high);

            // التوقف فوراً إذا تم إيقاف الأنيميشن
            if (pi === -1 || id !== currentExecutionId) return;

            // تلوين العنصر المحوري بالأخضر (مكانه النهائي الصحيح)
            markAsSorted(pi);

            // ترتيب النصف الأيسر
            await quickSortHelper(low, pi - 1);
            if (id !== currentExecutionId) return;

            // ترتيب النصف الأيمن
            await quickSortHelper(pi + 1, high);
        } else if (low === high) {
            // تلوين العنصر الوحيد بالأخضر
            markAsSorted(low);
        }
    }

    // استدعاء التشغيل
    await quickSortHelper(0, array.length - 1);

    // إيقاف حالة الأنيميشن بأمان عند انتهاء الترتيب
    if (id === currentExecutionId) stopAnimation();
}

window.onload = () => {
    initArray();
}
let currentWindowWidth = window.innerWidth;

window.addEventListener('resize', () => {
    // التحقق مما إذا كان "العرض" فقط هو الذي تغير
    if (window.innerWidth !== currentWindowWidth){
        containerWidth = container.clientWidth;
        ELEMENT_WIDTH = Math.min(40, (containerWidth - (array.length - 1) * 5) / array.length);
    
        // إذا لم تكن هناك خوارزمية تعمل، قم بإعادة رسم الأعمدة في أماكنها الصحيحة
        if (!animation && array.length > 0) {
            initArray(array.length, array);
        }
    }
});
