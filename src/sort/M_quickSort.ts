// Change the position of two elements of an Array.
function _change(arr:number[] ,a ,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// 快速排序: 双指针法
// 首先是查找中间值（枢纽）并移动的函数：
// 1. 查找left到right的中点，然后对三者进行排序移动；
// 2. 把找到的中间点移动到倒数第二位置（right-1），因为已知最后的一个元素肯定大于它。这样方便后续的操作。
function findMedian(arr, left, right){
    let mid = Math.floor( (left + right) / 2 );
    if (right > arr.length - 1){
        throw Error('The right point is too large to use in this array.');
    }
    if ( arr[left] > arr[right] ){
        _change(arr, left, right);
    }
    if ( arr[left] > arr[mid] ){
        _change(arr, left, mid);
    }
    if ( arr[mid] > arr[right] ){
        _change(arr, mid, right);
    }
    _change(arr, mid, right-1);

    return arr[right-1];
}

// 快速排序核心算法：
// 1. 对一个数组取中心点（枢纽），并使用findMedian函数排序并移动（移动后，最小值在left位置，最大值在right位置，枢纽也就是中值在right-1位置）；
// 2. 另设置两个指针，i从left向右，j从right-1位置向左依次查找。一旦发现i指向的元素大于枢纽值mid就停下来，j指向的元素小于枢纽值mid也停下来。
// 3. 交换i和j的值，然后继续2步骤；
// 4. 直到i<j，也就是二者交叉，停止搜索；
// 5. 把枢纽值(此时在right-1位置存放)与i元素进行对换，就实现了两侧分别小于和大于中间值的排序。
// 6. 此后，i-1作为左序列的right值，i+1作为右序列的left值，继续递归运算，left和right相交时，终止迭代，完成排序。
function quick(arr, left = 0, right = arr.length - 1){

    // 判断递归终止的判据：当left、right左右边界指针合并或相交，就说明全部排序完成。
    if (left >= right) return;

    let mid = findMedian(arr, left, right);
    let i = left;
    let j = right - 1;
    while(1){
        while (arr[i]<mid) {i++};
        while (arr[j]>=mid && j>=left) {j--};
        if (i > j){
            break;
        }
        _change(arr, i, j);
    }
    _change(arr, i, right-1);

    // 这里每排序一次，输出一下当前结果。
    console.log(arr);

    // 递归：将当前中间点（枢纽）作为分隔点，两侧数组分别再进行排序运算。
    quick(arr, left, i-1);
    quick(arr, i+1, right);
}

export function M_quickSort(arr){
    quick(arr, 0, arr.length-1);
    return arr;
}
