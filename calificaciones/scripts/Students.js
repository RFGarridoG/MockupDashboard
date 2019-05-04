var viewModel = {
    Students: ko.observableArray([
        { name: "Juan Gerardo Leal", id: 1, qualification: 60 },
        { name: "Ricardo Garrido", id: 2, qualification: 80 },
        { name: "Mario Llamas", id: 3, qualification: 30 },
    ]),
    StudentsContact: ko.observableArray([
        { id: 1, email: "gera@gmail.com", phone: "13509099", mobile: "8117873200" },
        { id: 2, email: "richard@outlook.com", phone: "12009989", mobile: "8183210990" },
        { id: 3, email: "mario.llamas@hotmail.com", phone: "23098900", mobile: "8183210990" },
    ]),
    StudentInfo: {
        name: ko.observable(),
        qualification: ko.observable(),
        email: ko.observable(),
        phone: ko.observable(),
        mobile: ko.observable()
    },
    ShowStudentDetail: function (student) {
        var studentContact = viewModel.StudentsContact().filter(r => r.id == student.id)[0];

        viewModel.StudentInfo.name(student.name);
        viewModel.StudentInfo.qualification(student.qualification);

        viewModel.StudentInfo.email(studentContact.email);
        viewModel.StudentInfo.phone(studentContact.phone);
        viewModel.StudentInfo.mobile(studentContact.mobile);

        $('#StudentsDetails').modal('show');
    },
};

