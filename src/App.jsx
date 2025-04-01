import { useState } from "react";
import { Helmet } from "react-helmet-async";

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function App({ defaultCategory = "number" }) {
  const [category, setCategory] = useState(defaultCategory);
  const [result, setResult] = useState("");
  const [resultValue, setResultValue] = useState("");


  /* Random Number */
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  /* Random Password */
  const [pwLength, setPwLength] = useState(12);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);

  /* Random Word */
  const [minWordLength, setMinWordLength] = useState(1);
  const [maxWordLength, setMaxWordLength] = useState(12);
  const wordList = [
    "apple", "banana", "tree", "mountain", "code", "cloud", "random", "generator",
    "zebra", "lamp", "velocity", "soda", "engineer", "laugh", "brilliant", "idea"
  ];
  
  /* Random Name */
  const firstNames = [
    "Emma", "Liam", "Olivia", "Noah", "Ava", "Elijah", "Sophia", "James", "Isabella", "Lucas"
  ];
    const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"
  ];

  /* Random Color */
  const [colorResult, setColorResult] = useState("");
  const colorList = [
    "red", "orange", "yellow", "green", "blue", "indigo", "violet",
    "pink", "purple", "cyan", "teal", "lime", "magenta", "gold",
    "orchid", "salmon", "plum", "coral", "skyblue", "chocolate"
  ];
  
  /* Random Animal */
  const animalList = [
    "Cat", "Dog", "Elephant", "Giraffe", "Lion", "Tiger", "Zebra", "Kangaroo",
    "Panda", "Penguin", "Koala", "Fox", "Bear", "Monkey", "Otter", "Rabbit",
    "Whale", "Dolphin", "Moose", "Flamingo"
  ];
  
  /* Bible Verse */
  const bibleVerses = [
    "John 3:16 - For God so loved the world...",
    "Philippians 4:13 - I can do all things through Christ who strengthens me.",
    "Jeremiah 29:11 - For I know the plans I have for you...",
    "Psalm 23:1 - The Lord is my shepherd; I shall not want.",
    "Romans 8:28 - And we know that all things work together for good...",
    "Proverbs 3:5 - Trust in the Lord with all your heart...",
    "Matthew 6:33 - Seek first the kingdom of God...",
    "Isaiah 41:10 - Fear not, for I am with you...",
    "2 Timothy 1:7 - For God has not given us a spirit of fear...",
    "Genesis 1:1 - In the beginning God created the heavens and the earth."
  ];

  /* Fun Fact */
  const funFacts = [
    "Honey never spoils — archaeologists have found pots of it in ancient tombs.",
    "Octopuses have three hearts and blue blood.",
    "Bananas are berries, but strawberries aren’t.",
    "Sharks existed before trees.",
    "There are more stars in the universe than grains of sand on Earth.",
    "A bolt of lightning is five times hotter than the surface of the sun.",
    "Wombat poop is cube-shaped.",
    "The Eiffel Tower can grow over 6 inches in summer heat.",
    "The moon has moonquakes.",
    "Sloths can hold their breath longer than dolphins."
  ];

  /* Dinner */
  const dinners = [
    "Spaghetti Bolognese", "Chicken Stir Fry", "Tacos", "Sushi", "Burgers", "Grilled Salmon",
    "Pizza", "Lentil Soup", "Steak and Potatoes", "Curry", "Roast Chicken", "Chili"
  ];
  
  /* Destination */
  const destinations = [
    "Paris", "New York", "Tokyo", "Sydney", "Cape Town", "Rome", "Dubai", "Bangkok", "Toronto", "Rio de Janeiro"
  ];
  
  /* US State */
  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
    "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ];
  
  /* US President */
  const presidents = [
    "George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe",
    "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison",
    "John Tyler", "James K. Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce",
    "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Rutherford B. Hayes",
    "James A. Garfield", "Chester A. Arthur", "Grover Cleveland", "Benjamin Harrison",
    "William McKinley", "Theodore Roosevelt", "William H. Taft", "Woodrow Wilson", "Warren G. Harding",
    "Calvin Coolidge", "Herbert Hoover", "Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower",
    "John F. Kennedy", "Lyndon B. Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan",
    "George H. W. Bush", "Bill Clinton", "George W. Bush", "Barack Obama", "Donald Trump", "Joe Biden"
  ];
    

  const handleGenerate = () => {
    if (category === "number") {
      const minNum = parseInt(min, 10);
      const maxNum = parseInt(max, 10);
      if (isNaN(minNum) || isNaN(maxNum) || minNum > maxNum) {
        setResult("Invalid min/max values.");
        return;
      }
      const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      setResult(`🔢 Random Number: ${randomNum}`);
      setResultValue(`${randomNum}`);
    } 
    
    else if (category === "password") {
      let charset = "abcdefghijklmnopqrstuvwxyz";
      if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (includeNumbers) charset += "0123456789";
      if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    
      if (charset.length === 0 || pwLength < 1) {
        setResult("Invalid password settings.");
        return;
      }
    
      let password = "";
      for (let i = 0; i < pwLength; i++) {
        const randIndex = Math.floor(Math.random() * charset.length);
        password += charset[randIndex];
      }
    
      setResult(`🔐 Password: ${password}`);
      setResultValue(`${password}`);
    }

    else if (category === "name") {
      const first = firstNames[Math.floor(Math.random() * firstNames.length)];
      const last = lastNames[Math.floor(Math.random() * lastNames.length)];
      const fullName = `${first} ${last}`;
      setResult(`🧍 Name: ${fullName}`);
      setResultValue(fullName);
    }

    else if (category === "word") {
      const minLen = parseInt(minWordLength, 10);
      const maxLen = parseInt(maxWordLength, 10);
      const filteredWords = wordList.filter(
        (w) => w.length >= minLen && w.length <= maxLen
      );
    
      if (filteredWords.length === 0) {
        setResult("No words match the selected length.");
      } else {
        const randWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
        setResult(`💬 Word: ${randWord}`);
        setResultValue(`${randWord}`);
      }
    }
    
    else if (category === "color") {
      const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
      setResult(`🎨 Color: ${randomColor}`);
      setResultValue(`${randomColor}`);
      setColorResult(randomColor);
    }
    
    else if (category === "animal") {
      const randomAnimal = animalList[Math.floor(Math.random() * animalList.length)];
      setResult(`🐾 Animal: ${randomAnimal}`);
      setResultValue(`${randomAnimal}`);
    }
    
    else if (category === "bible") {
      const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
      setResult(`📖 Verse: ${randomVerse}`);
      setResultValue(`${randomVerse}`);
    }

    else if (category === "fact") {
      const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      setResult(`💡 Fact: ${randomFact}`);
      setResultValue(`${randomFact}`);
    }

    else if (category === "dinner") {
      const randomDinner = dinners[Math.floor(Math.random() * dinners.length)];
      setResult(`🍽 Dinner: ${randomDinner}`);
      setResultValue(randomDinner);
    }
    
    else if (category === "destination") {
      const randomPlace = destinations[Math.floor(Math.random() * destinations.length)];
      setResult(`✈️ Destination: ${randomPlace}`);
      setResultValue(randomPlace);
    }
    
    else if (category === "state") {
      const randomState = usStates[Math.floor(Math.random() * usStates.length)];
      setResult(`🌎 US State: ${randomState}`);
      setResultValue(randomState);
    }
    
    else if (category === "president") {
      const randomPresident = presidents[Math.floor(Math.random() * presidents.length)];
      setResult(`🦅 US President: ${randomPresident}`);
      setResultValue(randomPresident);
    }


    else {
      setResult(`Generated: ${category}`);
    }
  };
  

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <Helmet>
        <title>{`I'm Random: ${capitalize(category)} Generator`}</title>
        <meta
          name="description"
          content={`Generate a random ${category || "value"} instantly. Fun, simple, and useful for just about anything.`}
        />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Universal Random Generator</h1>
      <p className="text-lg text-gray-600 mb-8 italic text-center">
        If you can't decide, let the Universe decide for you
      </p>

      {/* Category Select */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Select Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-4 py-2"
        >
          <option value="number">🔢 Number</option>
          <option value="word">💬 Word</option>
          <option value="name">🧍 Name</option>
          <option value="password">🔐 Password</option>
          <option value="color">🎨 Color</option>
          <option value="animal">🐾 Animal</option>
          <option value="bible">📖 Bible Verse</option>
          <option value="fact">💡 Fact</option>
          <option value="dinner">🍽 Dinner</option>
          <option value="destination">✈️ Destination</option>
          <option value="state">🌎 US State</option>
          <option value="president">🦅 US President</option>
        </select>
      </div>

      {/* Numbers */}
      {category === "number" && (
        <div className="space-y-2">
          <div>
            <label className="block font-medium">Min:</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-1"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium">Max:</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-1"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Passwords */}
      {category === "password" && (
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Password Length:</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-1"
              min={1}
              value={pwLength}
              onChange={(e) => setPwLength(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <label>Include Symbols (!@#$...)</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <label>Include Numbers (123...)</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            <label>Include Uppercase (ABC...)</label>
          </div>
        </div>
      )}

      {/* Words */}
      {category === "word" && (
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Min Word Length:</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-1"
              value={minWordLength}
              onChange={(e) => setMinWordLength(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium">Max Word Length:</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-1"
              value={maxWordLength}
              onChange={(e) => setMaxWordLength(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Names */}
      {category === "name" && (
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500">Click generate to get a random full name.</p>
        </div>
      )}

      {/* Colors */}
      {category === "color" && (
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500">No constraints yet — just a random color!</p>
        </div>
      )}

      {/* Animals */}
      {category === "animal" && (
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500">Click generate to get a random animal!</p>
        </div>
      )}

      {/* Bible Verse */}
      {category === "bible" && (
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500">Click generate to get an inspiring verse.</p>
        </div>
      )}

      {/*Fun Fact */}
      {category === "fact" && (
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500">Click generate to get a random fact!</p>
        </div>
      )}
      
      {/*Dinner */}
      {category === "dinner" && (
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500">Click generate to get a dinner idea!</p>
        </div>
      )}
      
      {/*Destination */}
      {category === "destination" && (
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500">Click generate to get a random destination!</p>
        </div>
      )}
      
      {/*US State */}
      {category === "state" && (
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500">Click generate to get a random US state!</p>
        </div>
      )}

      {/*US President */}
      {category === "president" && (
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500">Click generate to get a random US president!</p>
        </div>
      )}


      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mt-6"
      >
        Generate
      </button>

      {/* Result */}
      {result && (
        <>
          <div className="mt-6 text-lg font-medium text-green-600 text-center">
            {result}
          </div>
          <button
            className="mt-2 px-4 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => navigator.clipboard.writeText(resultValue)}
          >
            📋 Copy
          </button>
        </>
      )}

      
      {category === "color" && result && (
        <div className="mt-4 w-32 h-32 rounded shadow border" style={{ backgroundColor: colorResult }}>
        </div>
      )}

      <footer className="mt-12 text-sm text-center text-gray-500 space-y-1">
        <p className="font-semibold">Quick Links</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/random-number" className="hover:underline">Number</a>
          <a href="/random-word" className="hover:underline">Word</a>
          <a href="/random-name" className="hover:underline">Name</a>
          <a href="/random-password" className="hover:underline">Password</a>
          <a href="/random-color" className="hover:underline">Color</a>
          <a href="/random-animal" className="hover:underline">Animal</a>
          <a href="/random-bible" className="hover:underline">Bible Verse</a>
          <a href="/random-fact" className="hover:underline">Fact</a>
          <a href="/random-dinner" className="hover:underline">Dinner</a>
          <a href="/random-destination" className="hover:underline">Destination</a>
          <a href="/random-state" className="hover:underline">US State</a>
          <a href="/random-president" className="hover:underline">President</a>
        </div>
      </footer>
    </div>
  );
}

export default App;