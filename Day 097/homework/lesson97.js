// 1)
const book = {
    title: "Your Book Title",
    author: "Author Name",
    pages: 300,
    publishYear: 2021,
    getSummary: function() {
        return `${this.title} by ${this.author}, published in ${this.publishYear}, has ${this.pages} pages.`;
    }
};

console.log(book.getSummary());
// 2)
const customer = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    updateEmail: function(newEmail) {
        this.email = newEmail;
    }
};

console.log(customer.fullName());
customer.updateEmail("john.new@example.com");
console.log(customer.email);
// 3)
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    duration: 148,
    getMovieInfo: function() {
        return `${this.title}, directed by ${this.director}, released in ${this.releaseYear}, lasts ${this.duration} minutes.`;
    }
};

console.log(movie.getMovieInfo());
// 4)
const ticket = {
    eventName: "Concert",
    eventDate: "2023-12-31",
    price: 50,
    isAvailable: true,
    purchaseTicket: function() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return `Ticket for ${this.eventName} on ${this.eventDate} purchased successfully for $${this.price}.`;
        } else {
            return `Sorry, the ticket for ${this.eventName} is no longer available.`;
        }
    }
};

console.log(ticket.purchaseTicket());
console.log(ticket.purchaseTicket());