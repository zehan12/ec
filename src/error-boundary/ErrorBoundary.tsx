import React, { Fragment, useState, useEffect } from "react";
import { useRouteError } from "react-router-dom";

// Define the type for the error object
interface RouteError {
    message: string;
    // You can add more properties to the error object if needed
    // For example:
    // status: number;
    // stack: string;
}

function ErrorBoundary() {
    // Use the defined type for the error variable
    const error: RouteError | null = useRouteError();

    const textString = `
    mvn archetype:generate -DgroupId=com.example -DartifactId=book-api -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
    <dependencies>
    <!-- Spring Boot Starter Web for REST API -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- Jackson for JSON serialization/deserialization -->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
    </dependency>
</dependencies>
package com.example.model;

public class Book {
    private Long id;
    private String title;
    private String author;

    // constructors, getters, setters
}

package com.example.controller;

import com.example.model.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private List<Book> books = new ArrayList<>();

    // Sample data for testing
    {
        books.add(new Book(1L, "Book 1", "Author 1"));
        books.add(new Book(2L, "Book 2", "Author 2"));
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        Book book = findBookById(id);
        if (book != null) {
            return new ResponseEntity<>(book, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        book.setId(getNextId());
        books.add(book);
        return new ResponseEntity<>(book, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book updatedBook) {
        Book book = findBookById(id);
        if (book != null) {
            book.setTitle(updatedBook.getTitle());
            book.setAuthor(updatedBook.getAuthor());
            return new ResponseEntity<>(book, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        Book book = findBookById(id);
        if (book != null) {
            books.remove(book);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    private Book findBookById(Long id) {
        return books.stream()
                .filter(book -> book.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    private Long getNextId() {
        return books.stream()
                .mapToLong(Book::getId)
                .max()
                .orElse(0L) + 1;
    }
}
package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookApiApplication.class, args);
    }
}
    ...`;

    const [textArray, setTextArray] = useState<string[]>([]);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setTextArray(textString.split(""));
    }, [textString]);

    useEffect(() => {
        const interval = setInterval(() => {
            const textElem = document.querySelector(".hacking-animation__text");
            if (textElem) {
                if (textArray[count] === "\n") {
                    textElem.innerHTML += "<br>";
                } else {
                    textElem.innerHTML += `<span class="hacking-animation__character">${textArray[count]}</span>`;
                }
                setCount((prevCount) => (prevCount + 1) % textArray.length);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [count, textArray]);

    return (
        <Fragment>
            <section className="bg-red-800 w-full h-screen flex justify-center items-center overflow-hidden">
                <div className="hacking-animation bg-black h-screen flex justify-center items-center">
                    <pre className="hacking-animation__text font-mono text-base text-green-500"></pre>
                </div>
                <div className="w-1/3 h-max mx-auto z-10">
                    <div className="flex flex-col p-5 rounded-lg shadow bg-amber-50">
                        <div className="flex">
                            <div>
                                <svg
                                    className="w-6 h-6 fill-current text-red-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
                                </svg>
                            </div>

                            <div className="ml-3">
                                <h3 className="text-2xl text-red-800">
                                    Something went Wrong!!
                                </h3>
                                {/* Check if error exists before accessing its properties */}
                                {error && (
                                    <>
                                        <h2 className="font-semibold text-gray-800">
                                            {error.message}
                                        </h2>
                                    </>
                                )}
                                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                    In the past, JavaScript errors inside components used to
                                    corrupt React’s internal state and cause it to emit cryptic
                                    errors on next renders. These errors were always caused by an
                                    earlier error in the application code, but React did not
                                    provide a way to handle them gracefully in components, and
                                    could not recover from them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default ErrorBoundary;
