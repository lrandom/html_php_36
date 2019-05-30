var questions = [
    {
        q: "Cau hoi 1",
        a: ["A. Dap an a",
            "B. Dap an b",
            "C. Dap an C",
            "D. Dap an D"],
        r: 0
    },
    {
        q: "Cau hoi 2",
        a: ["A. Dap an a",
            "B. Dap an b",
            "C. Dap an C",
            "D. Dap an D"],
        r: 2
    },
    {
        q: "Cau hoi 3",
        a: ["A. Dap an a",
            "B. Dap an b",
            "C. Dap an C",
            "D. Dap an D"],
        r: 3
    },
    {
        q: "Cau hoi 4",
        a: ["A. Dap an a",
            "B. Dap an b",
            "C. Dap an C",
            "D. Dap an D"],
        r: 2
    },
    {
        q: "Cau hoi 5",
        a: ["A. Dap an a",
            "B. Dap an b",
            "C. Dap an C",
            "D. Dap an D"],
        r: 3
    },
    {
        q: "Cau hoi 6",
        a: ["A. Dap an a",
            "B. Dap an b",
            "C. Dap an C",
            "D. Dap an D"],
        r: 2
    },
    {
        q: "Cau hoi 7",
        a: ["A. Dap an a",
            "B. Dap an b",
            "C. Dap an C",
            "D. Dap an D"],
        r: 0
    },
    {
        q: "Cau hoi 8",
        a: ["A. Dap an a",
            "B. Dap an b",
            "C. Dap an C",
            "D. Dap an D"],
        r: 2
    },
    {
        q: "Cau hoi 9",
        a: ["A. Dap an a",
            "B. Dap an b",
            "C. Dap an C",
            "D. Dap an D"],
        r: 3
    },
    {
        q: "Cau hoi 10",
        a: ["A. Dap an a",
            "B. Dap an b",
            "C. Dap an C",
            "D. Dap an D"],
        r: 0
    },
];

var count = 0;
var score = 0;
var obj = questions[count];

function load() {
    //load cau hoi vao the co class la question
    $('.question').html(obj.q);
    //lam rong the co class la answer truoc khi hien thi dap an
    $('.answer').empty();
    //dat thuoc tinh (attribute) cho the co class .answer muc dich chua index
    //dap an dung
    $('.answer').attr('r', obj.r);
    //duyet qua mang cac dap an va them vao the class .answer
    for (let index = 0; index < obj.a.length; index++) {
        $('.answer').append('<div data-index=' + index + '>' + obj.a[index] + '</div>');
    }

    //xu li su kien khi user click vao mot dap an 
    $('.answer div').on('click', function () {
        let index = $(this).attr('data-index');
        let r = $(this).parent().attr('r');
        if (parseInt(index) == parseInt(r)) {
            console.log("Dung roi em oi");
            //cong diem
            score += 10;
            //show diem ra
            $('.score span').html(score);
            //tang bien count de load cau tiep theo
            count++;
            //load cau tiep theo
            obj = questions[count];
            load();
        } else {
            console.log("Sai roi !!!");
            alert("Ban sai roi !!! thu lai");
            //reset diem
            score = 0;
            //reset bien dem cau hoi
            count = 0;
            //load cau hoi 1
            obj = questions[count];
            $('.score span').html(score);
            load();
        }
    })
}

$(document).ready(function () {
    load();

});

