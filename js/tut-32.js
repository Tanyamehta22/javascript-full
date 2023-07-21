console.log("this is tutorial 32")
// create a class library and implement the following:
// constructor must  take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class library {
    constructor(booklist){
        this.booklist = booklist;
        this.issueBooks= {};
    }

    getBookList(){
        this.booklist.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user){

        if (this.issueBooks[bookname]== undefined){
        this.issueBooks[bookname]= user;
        }
        else{
            console.log("this book is already issued");
        }

    }

    returnBook(bookname){
        delete this.issueBooks[bookname];
    }


}