<a name="readme-top"></a>
# Memory Card Game
This is a simple memory game made with React where you are expected to match cards with the same letters on them. 
The aim is to finish the game with the least clicks possible. Game also includes a scoreboard and stores 
lowest three scores(because low is better) and usernames on Firebase Firestore Database, so you can compare your score with others.

## Demo Link
https://memory-game-7bac0.web.app/

## Features
- Background of the cards is created with using canvas and responsive to the resizing.
- Highest scores are stored on Firestore.
- Redux is used for state management.
- Tailwind framework is used for styling.
- Responsive and beautiful design for screens of any size.
- I know that eyes look a little creepy but I thought they would look nice. After spending time making them, I couldn't bear to delete them. So, here they are.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

    Clone the repository: git clone https://github.com/yusufgul/memory-game-react.git
    Add your firebase info to the FirebaseConfig.js file inside the /src/components/firebase folder
    Install the dependencies: npm install
    Run the development server: npm start
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Firestore Collection Structure Example
    
    collection-name | document-id | data-fields
    -------------------------------------------
       scores
       |
       |_____________ Ha23agf5s...
                           |
                           |________ name: "Yusuf"
                           |
                           |________ score: 30
                        

### Contributing

If you would like to contribute to the project, please fork the repository and make a pull request.</br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### License

This project is licensed under the MIT License.</br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Contact

If you have any questions or suggestions, please feel free to contact me.
<p align="right">(<a href="#readme-top">back to top</a>)</p>
