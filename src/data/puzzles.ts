import { Puzzle } from '../types';

const generatePuzzles = (): Puzzle[] => {
  const puzzles: Puzzle[] = [];

  // Level 1: Very Easy Programming Concepts
  const level1Questions = [
    {
      "question": "You awaken in a dimly lit containment cell. A digital display flickers with a sequence: `8, 3, 7, 2, 9`. Take the first step to open the door.",
      "answer": ["2"],
      "hint": "Initial Step is the Key To Reach Higher and Higher.",
      "code": `
#include <stdio.h>
int main() {
  int code[] = {8, 3, 7, 2, 9};
  int size = sizeof(code) / sizeof(code[0]);
  int min_val = code[0];
  for (int i = 1; i < size; i++) {
    if (code[i] < min_val) {
      min_val = code[i];
    }
  }
  printf("Sub-Level Zero Unlock Digit: %d", min_val);
  return 0;
}
`
    },
    {
      "question": "A display shows: `15, 6, 10, 1, 12`. Who will win? What do you think?",
      "answer": ["15"],
      "hint": "Does the people at the TOP always win? maybe that's a yes.",
      "code": `
#include <stdio.h>
int main() {
  int numbers[] = {15, 6, 10, 1, 12};
  int size = sizeof(numbers) / sizeof(numbers[0]);
  int max_val = numbers[0];
  for (int i = 1; i < size; i++) {
    if (numbers[i] > max_val) {
      max_val = numbers[i];
    }
  }
  printf("Secondary Lock Value: %d", max_val);
  return 0;
}
`
    },
    {
  "question": "Another display shows a sequence: `5, 9, 2, 7, 1`. Sometimes the second step defines the whole journey. Which single digit from this sequence holds a specific significance in this context?",
  "answer": ["2"],
  "hint": "Think about the relative position of each number within the given set.",
  "code": `
#include <stdio.h>
int main() {
  int sequence[] = {5, 9, 2, 7, 1};
  printf("Significant Digit:%d.",sequence[2]);
  return 0;
}
`
},
{
  "question": "A new sequence flickers: `11, 4, 8, 15, 3`. In certain progressions, the penultimate element carries a unique weight. Identify the single number from this set that occupies that specific position.",
  "answer": ["15"],
  "hint": "Consider the order if these numbers were arranged from largest to smallest.",
  "code": `
#include <stdio.h>
int main() {
  int sequence[] = {11, 4, 8, 15, 3};
  printf("Penultimate Element:%d ?", sequence[3]);
  return 0;
}
`
}
  ];

  // Level 2: Very Easy Data Types & Operations
  const level2Questions = [
  {
    question:
      "A terminal displays the numerical sequence `19 1 20 25 6 5`. These numbers represent a jumbled six-letter word often associated with Risk Management. Unscramble the corresponding letters.",
    answer: ["SAFETY"],
    hint: "Convert each number to its alphabetical equivalent and then rearrange them.",
    code: `
#include <stdio.h>

int main() {
  int jumbled[] = {19, 1, 20, 25, 6, 5};
  int offset = 64;
  printf("Deciphered Letters: ");
  for (int i = 0; i < sizeof(jumbled) / sizeof(jumbled[0]); i++) {
    printf("%c ", jumbled[i] + offset);
  }
  printf("\\nRearrange these uppercase letters to find the keyword.\\n");
  return 0;
}
`,
  },
  {
    question:
      "A cryptic display shows the sequence `20 18 5 1 20`. Rearrange them to form a five-letter word related to a formal agreement.",
    answer: ["TREAT"],
    hint: "Convert each number back to its corresponding letter and then unscramble.",
    code: `
#include <stdio.h>

int main() {
  int jumbled[] = {20, 18, 5, 1, 20};
  int offset = 64;
  printf("Deciphered Letters: ");
  for (int i = 0; i < sizeof(jumbled) / sizeof(jumbled[0]); i++) {
    printf("%c ", jumbled[i] + offset);
  }
  printf("\\nRearrange these uppercase letters to find the keyword.\\n");
  return 0;
}
`,
  },
  {
    question:
      "A sequence of numbers appears on the screen: `19 5 3 18 5 20`. These numbers represent a jumbled six-letter word for something you value or keep safe. Unscramble the corresponding letters.",
    answer: ["SECRET"],
    hint: "Map each number to its letter in the alphabet and then rearrange them.",
    code: `
#include <stdio.h>

int main() {
  int jumbled[] = {19, 5, 3, 18, 5, 20};
  int offset = 64;
  printf("Deciphered Letters: ");
  for (int i = 0; i < sizeof(jumbled) / sizeof(jumbled[0]); i++) {
    printf("%c ", jumbled[i] + offset);
  }
  printf("\\nRearrange these uppercase letters to find the hidden word.\\n");
  return 0;
}
`,
  },
  {
    question:
      "A digital display shows the numbers `12 15 3 11`. If A=1, B=2, and so on, these represent a jumbled four-letter word for a common locking mechanism. Unscramble the letters.",
    answer: ["LOCK"],
    hint: "Convert each number to its corresponding letter in the alphabet and then rearrange.",
    code: `
#include <stdio.h>

int main() {
  int jumbled[] = {12, 15, 3, 11};
  int offset = 64;
  printf("Deciphered Letters: ");
  for (int i = 0; i < sizeof(jumbled) / sizeof(jumbled[0]); i++) {
    printf("%c ", jumbled[i] + offset);
  }
  printf("\\nRearrange these uppercase letters to find the locking mechanism.\\n");
  return 0;
}
`,
  }
  ];


  const level3Questions = [
  {
    question:
      "You encounter a damaged control panel with the display `?, 12, ?, ?, 20, ?, ?, ?, 28`. Nearby, you see the numbers `10, 14, 16, 18, 22, 24, 26`. Can you fill in the missing values?",
    answer: ["10,12,14,16,18,20,22,24,26,28", "10, 12, 14, 16, 18, 20, 22, 24, 26, 28", "10 12 14 16 18 20 22 24 26 28", "10121416182022242628"],
    hint: "Consider the pattern formed by the known numbers and how the others might fit. Comma? or not Comma? umm Space?",
    code: `
#include <stdio.h>

void sort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

int main() {
  int incomplete_sequence[] = {-1, 12, -1, -1, 20, -1, -1, -1, -1, 28};
  int missing_numbers[] = {10, 14, 16, 18, 22, 24, 26};
  int completed_sequence[10];
  sort(missing_numbers, 7);
  int missing_index = 0;
  for (int i = 0; i < 10; i++) {
    if (incomplete_sequence[i] == -1) {
      completed_sequence[i] = missing_numbers[missing_index++];
    } else {
      completed_sequence[i] = incomplete_sequence[i];
    }
  }
  printf("Restored Sequence: ");
  for (int i = 0; i < 10; i++) {
    printf("%d", completed_sequence[i]);
    if (i != 9) printf(", ");
  }
  return 0;
}
`,
  },
  {
    question:
      "You find yourself amidst strange equipment. A data log shows incomplete entries: `?, 4, ?, ?, 10, ?, ?, ?, 16`. Another display shows the numbers `1, 3, 7, 9, 12, 14, 19`. Do they fit here somehow?",
    answer: ["1,4,3,7,10,9,12,14,16,19", "1, 4, 3, 7, 10, 9, 12, 14, 16, 19", "1 4 3 7 10 9 12 14 16 19", "143710912141619"],
    hint: "Permutation is the key to solve faster. Sometimes comma is not needed.",
    code: `
#include <stdio.h>

void sort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

int main() {
  int incomplete_sequence[] = {-1, 4, -1, -1, 10, -1, -1, -1, 16, -1};
  int missing_numbers[] = {1, 3, 7, 9, 12, 14, 19};
  int completed_sequence[10];
  sort(missing_numbers, 7);
  int missing_index = 0;
  for (int i = 0; i < 10; i++) {
    if (incomplete_sequence[i] == -1) {
      completed_sequence[i] = missing_numbers[missing_index++];
    } else {
      completed_sequence[i] = incomplete_sequence[i];
    }
  }
  printf("Completed Sequence: ");
  for (int i = 0; i < 10; i++) {
    printf("%d", completed_sequence[i]);
    if (i != 9) printf(", ");
  }
  return 0;
}
`,
  },
  {
    question:
      "A strange device displays `?, ?, 5, ?, 9, ?, ?, 13, ?`. Nearby are the numbers `1, 3, 7, 11, 15, 17, 19`. Can you reconstruct the full sequence?",
    answer: ["1, 3, 5, 7, 9, 11, 15, 13, 17", "1,3,5,7,9,11,15,13,17", "1 3 5 7 9 11 13 15 17", "1357911131517"],
    hint: "Look for a consistent difference between the visible numbers. Is 19 really there? Doubtful!!!!",
    code: `
#include <stdio.h>

void sort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

int main() {
  int incomplete_sequence[] = {-1, -1, 5, -1, 9, -1, -1, 13, -1};
  int missing_numbers[] = {1, 3, 7, 11, 15, 17, 19};
  int completed_sequence[10];
  sort(missing_numbers, 7);
  int missing_index = 0;
  for (int i = 0; i < 10; i++) {
    if (incomplete_sequence[i] == -1) {
      completed_sequence[i] = missing_numbers[missing_index++];
    } else {
      completed_sequence[i] = incomplete_sequence[i];
    }
  }
  printf("Reconstructed Sequence: ");
  for (int i = 0; i < 10; i++) {
    printf("%d", completed_sequence[i]);
    if (i != 9) printf(", ");
  }
  return 0;
}
`,
  },
];


  const level4Questions = [
  {
    question:
      "Analyzing system logs, you find an initial data set: `5, 8, 2`. The system then performs a series of stuff: each number does something. what results in the resulting sequence (formed after three such additions), what is the number that appears?",
    answer: ["20"],
    hint: "Trace the additions step by step to generate the final sequence and then identify duplicates.",
    code: `
#include <stdio.h>

int main() {
  int initial_data[] = {5, 10, 15}; // Modified initial data
  int generated_sequence[6];
  generated_sequence[0] = initial_data[0];
  generated_sequence[1] = initial_data[1];
  generated_sequence[2] = initial_data[2];

  generated_sequence[3] = generated_sequence[0] + generated_sequence[2];
  generated_sequence[4] = generated_sequence[1] + generated_sequence[2];
  generated_sequence[5] = generated_sequence[3]; // Introduce a duplicate

  int size = 6;
  int first_duplicate = -1;
  for (int i = 0; i < size - 1; i++) {
    for (int j = i + 1; j < size; j++) {
      if (generated_sequence[i] == generated_sequence[j]) {
        first_duplicate = generated_sequence[i];
        break;
      }
    }
    if (first_duplicate != -1) {
      break;
    }
  }

  printf("First Duplicate: %d\n", first_duplicate);
  return 0;
}
`,
  },
  {
    question:
      "Another set of initial values is found: `3, 1, 2`. The system then multiplies consecutive numbers to expand the sequence. This process is repeated *twice*. If there are any duplicates in the final sequence, what is the *last* duplicated number that appears?",
    answer: ["2"],
    hint: "Follow the multiplication steps to determine the final sequence and then find the last duplicate.",
    code: `
#include <stdio.h>

int main() {
  int initial_data[] = {3, 1, 2};
  int generated_sequence[5];
  generated_sequence[0] = initial_data[0];
  generated_sequence[1] = initial_data[1];
  generated_sequence[2] = initial_data[2];

  generated_sequence[3] = generated_sequence[1] * generated_sequence[2];
  generated_sequence[4] = generated_sequence[2] * generated_sequence[3];

  int size = 5;
  int last_duplicate = -1;
  for (int i = size - 1; i > 0; i--) {
    for (int j = i - 1; j >= 0; j--) {
      if (generated_sequence[i] == generated_sequence[j]) {
        last_duplicate = generated_sequence[i];
        break;
      }
    }
    if (last_duplicate != -1) {
      break;
    }
  }

  printf("Last Duplicate: %d.", last_duplicate);
  return 0;
}
`,
  },
  {
    question:
      "A new data stream begins with the values: `2, 2`. The system then appends the sum of the previous two numbers to the sequence, repeating this process *four* times. If any numbers are repeated in the final sequence, what is the *largest* duplicated number?",
    answer: ["2"],
    hint: "Generate the full sequence by repeatedly adding the last two numbers, then find the largest value that appears more than once.",
    code: `
#include <stdio.h>

int main() {
  int initial_data[] = {2, 2};
  int generated_sequence[6];
  generated_sequence[0] = initial_data[0];
  generated_sequence[1] = initial_data[1];
  generated_sequence[2] = generated_sequence[0] + generated_sequence[1];
  generated_sequence[3] = generated_sequence[1] + generated_sequence[2];
  generated_sequence[4] = generated_sequence[2] + generated_sequence[3];
  generated_sequence[5] = generated_sequence[3] + generated_sequence[4];

  int size = 6;
  int largest_duplicate = -1;
  for (int i = 0; i < size; i++) {
    int count = 0;
    for (int j = 0; j < size; j++) {
      if (generated_sequence[i] == generated_sequence[j]) {
        count++;
      }
    }
    if (count > 1 && generated_sequence[i] > largest_duplicate) {
      largest_duplicate = generated_sequence[i];
    }
  }

  printf("Largest Duplicate: %d", largest_duplicate);
  return 0;
}
`,
  },
];

  const level5Questions = [
  {
    "question": "The main security panel is locked. A message reads: \"Active processes: [PID: 101, Status: RUNNING], [PID: 105, Status: BLOCKED], [PID: 101, Status: RUNNING], [PID: 112, Status: READY]\". To proceed, you need to identify the Process ID (PID) that appears most frequently.",
    "answer": ["101"],
    "hint": "Keep a count of each PID encountered.",
    "code": `
#include <stdio.h>

struct Process {
  int PID;
  char Status[20];
};

int main() {
  struct Process processes[] = {
    {101, "RUNNING"},
    {105, "BLOCKED"},
    {101, "RUNNING"},
    {112, "READY"}
  };
  int size = sizeof(processes) / sizeof(processes[0]);
  int counts[200] = {0}; // Assuming PIDs are within this range
  int most_frequent_pid = -1;
  int max_count = 0;

  for (int i = 0; i < size; i++) {
    counts[processes[i].PID]++;
    if (counts[processes[i].PID] > max_count) {
      max_count = counts[processes[i].PID];
      most_frequent_pid = processes[i].PID;
    }
  }

  printf("Most Frequent PID: %d", most_frequent_pid);
  return 0;
}
`
  },
  {
    "question": "Another security log shows: \"[ID: 220, Type: SYSTEM], [ID: 215, Type: USER], [ID: 220, Type: SYSTEM], [ID: 230, Type: SYSTEM]\". Which ID appears most often?",
    "answer": ["220"],
    "hint": "Count the occurrences of each unique ID.",
    "code": `
#include <stdio.h>

struct LogEntry {
  int ID;
  char Type[20];
};

int main() {
  struct LogEntry logs[] = {
    {220, "SYSTEM"},
    {215, "USER"},
    {220, "SYSTEM"},
    {230, "SYSTEM"}
  };
  int size = sizeof(logs) / sizeof(logs[0]);
  int counts[300] = {0}; // Assuming IDs are within this range
  int most_frequent_id = -1;
  int max_count = 0;

  for (int i = 0; i < size; i++) {
    counts[logs[i].ID]++;
    if (counts[logs[i].ID] > max_count) {
      max_count = counts[logs[i].ID];
      most_frequent_id = logs[i].ID;
    }
  }

  printf("Most Frequent ID: %d", most_frequent_id);
  return 0;
}
`
  },
  {
    "question": "A list of sensor readings is displayed: \"[Sensor: A, Value: 3.14], [Sensor: B, Value: 2.71], [Sensor: A, Value: 3.14], [Sensor: C, Value: 1.62], [Sensor: A, Value: 3.14]\". Which sensor name appears most frequently in the readings?",
    "answer": ["A"],
    "hint": "Tally the occurrences of each sensor name.",
    "code": `
#include <stdio.h>
#include <string.h>

struct Reading {
  char Sensor[2];
  float Value;
};

int main() {
  struct Reading readings[] = {
    {"A", 3.14},
    {"B", 2.71},
    {"A", 3.14},
    {"C", 1.62},
    {"A", 3.14}
  };
  int size = sizeof(readings) / sizeof(readings[0]);
  int counts[26] = {0}; // Assuming sensor names are single uppercase letters
  char most_frequent_sensor[2] = "";
  int max_count = 0;

  for (int i = 0; i < size; i++) {
    int index = readings[i].Sensor[0] - 'A';
    counts[index]++;
    if (counts[index] > max_count) {
      max_count = counts[index];
      strcpy(most_frequent_sensor, readings[i].Sensor);
    }
  }

  printf("Most Frequent Sensor: %s", most_frequent_sensor);
  return 0;
}
`
  },
  {
    "question": "A log of accessed files shows: \"/data/file1.txt, /usr/local/config.ini, /data/file1.txt, /var/log/system.log, /data/file1.txt, /home/user/info.dat\". Which file path was accessed most often?",
    "answer": ["/data/file1.txt"],
    "hint": "Count how many times each unique file path appears in the log.",
    "code": `
#include <stdio.h>
#include <string.h>

struct FileAccess {
  char Path[50];
};

int main() {
  struct FileAccess accesses[] = {
    {"/data/file1.txt"},
    {"/usr/local/config.ini"},
    {"/data/file1.txt"},
    {"/var/log/system.log"},
    {"/data/file1.txt"},
    {"/home/user/info.dat"}
  };
  int size = sizeof(accesses) / sizeof(accesses[0]);
  int counts[10] = {0}; // Assuming a small number of unique paths
  char most_frequent_path[50] = "";
  int max_count = 0;
  char unique_paths[10][50];
  int unique_count = 0;

  for (int i = 0; i < size; i++) {
    int found = 0;
    int path_index = -1;
    for (int j = 0; j < unique_count; j++) {
      if (strcmp(accesses[i].Path, unique_paths[j]) == 0) {
        found = 1;
        path_index = j;
        break;
      }
    }
    if (found) {
      counts[path_index]++;
      if (counts[path_index] > max_count) {
        max_count = counts[path_index];
        strcpy(most_frequent_path, unique_paths[path_index]);
      }
    } else {
      strcpy(unique_paths[unique_count], accesses[i].Path);
      counts[unique_count] = 1;
      if (counts[unique_count] > max_count) {
        max_count = counts[unique_count];
        strcpy(most_frequent_path, unique_paths[unique_count]);
      }
      unique_count++;
    }
  }

  printf("Most Frequent File Path: %s", most_frequent_path);
  return 0;
}
`
  }
];

  const level6Questions = [
  {
    "question": "You crawl into the ventilation system. A series of access panels blocks your path. The system processed the following entries: `add(15)`, `add(28)`, `add(7)`, `add(42)`. The unlock mechanism retrieves these entries in a specific order determined by its internal logic. Based on the provided code, what is the unlock sequence?",
    "answer": ["42 7 28 15", "42,7,28,15", "42, 7, 28, 15", "42 7 28 15 ", "42,7,28,15 ", "42, 7, 28, 15 "],
    "hint": "Examine the `main` function in the code to see how the 'unlock sequence' is generated after the 'add' operations.",
    "code": `
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

struct Stack {
  int items[MAX_SIZE];
  int top;
};

void add(struct Stack *s, int item) {
  if (s->top < MAX_SIZE - 1) {
    s->items[++s->top] = item;
  }
}

int retrieve(struct Stack *s) {
  if (s->top >= 0) {
    return s->items[s->top--];
  }
  return -1; // Indicate empty
}

int main() {
  struct Stack access_stack;
  access_stack.top = -1;

  add(&access_stack, 15);
  add(&access_stack, 28);
  add(&access_stack, 7);
  add(&access_stack, 42);

  printf("Ventilation System Unlock Sequence: ");
  int unlock_sequence[4];
  for (int i = 3; i >= 0; i--) {
    unlock_sequence[i] = retrieve(&access_stack);
    printf("%d ", unlock_sequence[i]);
  }
  printf("\\nA small keycard with the label 'MAINTENANCE' drops out after the last panel opens.\\n");
  return 0;
}
`,
  },
  {
    "question": "Another set of panels requires a specific retrieval order after the following entries: `enter('ALPHA')`, `enter('BRAVO')`, `enter('CHARLIE')`. Based on the code, what is the retrieval sequence?",
    "answer": ["CHARLIE BRAVO ALPHA", "charlie bravo alpha", "CHARLIE,BRAVO,ALPHA", "charlie,bravo,alpha", "CHARLIE BRAVO ALPHA ", "charlie bravo alpha "],
    "hint": "Look at the `main` function to understand how the 'enter' operations and the retrieval process work.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_SIZE 100

struct Stack {
  char items[MAX_SIZE][20];
  int top;
};

void enter(struct Stack *s, const char *item) {
  if (s->top < MAX_SIZE - 1) {
    strcpy(s->items[++s->top], item);
  }
}

char* get(struct Stack *s) {
  if (s->top >= 0) {
    return s->items[s->top--];
  }
  return NULL; // Indicate empty
}

int main() {
  struct Stack panel_stack;
  panel_stack.top = -1;

  enter(&panel_stack, "ALPHA");
  enter(&panel_stack, "BRAVO");
  enter(&panel_stack, "CHARLIE");

  printf("Panel Opening Sequence: ");
  char *sequence[3];
  for (int i = 2; i >= 0; i--) {
    sequence[i] = get(&panel_stack);
    printf("%s ", sequence[i]);
  }
  printf("\\nYou notice a faint glow emanating from a crack in the wall.\\n");
  return 0;
}
`,
  },
  {
    "question": "A sequence of color codes is processed by a security system. The operations are `in(BLUE)`, `in(GREEN)`, `out()`, `in(RED)`, `in(YELLOW)`, `out()`. If the unlock sequence is the order of the codes processed by the `out()` function, what is the unlock sequence?",
    "answer": ["BLUE GREEN", "blue green", "BLUE,GREEN", "blue,green", "BLUE GREEN ", "blue green "],
    "hint": "Examine the `main` function to trace the `in()` and `out()` operations and their effect on the unlock sequence.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_SIZE 100

struct Queue {
  char items[MAX_SIZE][20];
  int front;
  int rear;
};

void in(struct Queue *q, const char *item) {
  if (q->rear < MAX_SIZE - 1) {
    strcpy(q->items[++q->rear], item);
  }
}

char* out(struct Queue *q) {
  if (q->front <= q->rear) {
    return q->items[q->front++];
  }
  return NULL; // Indicate empty
}

int main() {
  struct Queue color_queue;
  color_queue.front = 0;
  color_queue.rear = -1;

  in(&color_queue, "BLUE");
  in(&color_queue, "GREEN");
  char *dequeued1 = out(&color_queue);
  in(&color_queue, "RED");
  in(&color_queue, "YELLOW");
  char *dequeued2 = out(&color_queue);

  printf("Unlock Sequence: ");
  if (dequeued1 != NULL) printf("%s ", dequeued1);
  if (dequeued2 != NULL) printf("%s ", dequeued2);
  printf("\\nA small gear with the numbers is found nearby.\\n");
  return 0;
}
`
  }
];

  const level7Questions = [
  {
    "question": "A malfunctioning automated cleaning bot is navigating a complex grid. It processes a sequence of eight numerical commands: `[3, 1, 0, 2, 1, 3, 0, 2]`. The bot's movement is determined by a dynamically evolving command set, initially `['FORWARD', 'LEFT', 'RIGHT', 'BACKWARD']`. For each numerical command, the command at that index is retrieved. If the index is even, and the retrieved command's length is greater than 5, the command at that index is moved to the end of the command set. If the index is odd, and the retrieved command's length is less than or equal to 4, the command at that index is moved to the beginning of the command set. What is the bot's final movement sequence?",
    "answer": [
      "BACKWARD LEFT LEFT RIGHT FORWARD FORWARD LEFT BACKWARD",
      "backward left left right forward forward left backward",
      "BACKWARD,LEFT,LEFT,RIGHT,FORWARD,FORWARD,LEFT,BACKWARD",
      "backward,left,left,right,forward,forward,left,backward"
    ],
    "hint": "Carefully simulate each step, tracking the changes to the command set and the retrieved movement. CAPITAL IS NEEDED, RYT?",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void move_to_end(char arr[][20], int index, int size) {
    char temp[20];
    strcpy(temp, arr[index]);
    for (int i = index; i < size - 1; i++) {
        strcpy(arr[i], arr[i + 1]);
    }
    strcpy(arr[size - 1], temp);
}

void move_to_beginning(char arr[][20], int index) {
    char temp[20];
    strcpy(temp, arr[index]);
    for (int i = index; i > 0; i--) {
        strcpy(arr[i], arr[i - 1]);
    }
    strcpy(arr[0], temp);
}

int main() {
    int numerical_commands[] = {3, 1, 0, 2, 1, 3, 0, 2};
    char command_set[4][20] = {"FORWARD", "LEFT", "RIGHT", "BACKWARD"};
    int num_commands_size = sizeof(numerical_commands) / sizeof(numerical_commands[0]);
    char movement_sequence[num_commands_size][20];
    int command_set_size = 4;

    printf("Bot Movement Sequence: ");
    for (int i = 0; i < num_commands_size; i++) {
        int index = numerical_commands[i];
        strcpy(movement_sequence[i], command_set[index]);
        printf("%s ", movement_sequence[i]);

        if (i % 2 == 0 && strlen(command_set[index]) > 5) {
            move_to_end(command_set, index, command_set_size);
        } else if (i % 2 != 0 && strlen(command_set[index]) <= 4) {
            move_to_beginning(command_set, index);
        }
    }
    printf("\\nAt the end of the corridor, a map on the wall highlights a 'VENT' leading to the next section.\\n");
    return 0;
}
`,
  },
  {
    "question": "A highly secure laser grid requires a six-digit deactivation code. You intercept a sequence of transformations applied to an initial six-digit seed `[9, 2, 5, 1, 8, 3]`. The transformations are applied sequentially for each digit: If the digit's index (0-indexed) is even, the digit is replaced by `(digit * 2 + 3) % 10`. If the digit's index is odd, the digit is replaced by `(digit + 5) % 10`. After these transformations, the resulting six digits are then processed: if a digit is greater than 5, it is replaced by its complement to 9. What is the final six-digit deactivation code?",
    "answer": ["1 7 3 6 1 0", "1,7,3,6,1,0", "173610"],
    "hint": "Apply the transformations step-by-step, paying attention to the order and conditions.",
    "code": `
#include <stdio.h>
#include <stdlib.h>

int main() {
    int initial_seed[] = {9, 2, 5, 1, 8, 3};
    int transformed_code[6];
    int deactivation_code[6];

    for (int i = 0; i < 6; i++) {
        if (i % 2 == 0) {
            transformed_code[i] = (initial_seed[i] * 2 + 3) % 10;
        } else {
            transformed_code[i] = (initial_seed[i] + 5) % 10;
        }
    }

    for (int i = 0; i < 6; i++) {
        if (transformed_code[i] > 5) {
            deactivation_code[i] = 9 - transformed_code[i];
        } else {
            deactivation_code[i] = transformed_code[i];
        }
    }

    printf("Device Deactivation Code: ");
    for (int i = 0; i < 6; i++) {
        printf("%d ", deactivation_code[i]);
    }
    printf("\\nA shimmer on the floor reveals a hidden button labeled 'OVERRIDE'.\\n");
    return 0;
}
`,
  },
  {
    "question": "A sequence of encrypted access keys is being processed. The initial key set is `['ALPHA', 'BRAVO', 'CHARLIE', 'DELTA']`. A series of operations is applied based on a control sequence `[1, 0, 2]`. For each number in the control sequence, perform the following operation on the key set: If the number is 0, swap the first two keys. If the number is 1, reverse the entire key set. If the number is 2, move the last key to the beginning. After all operations, the unlocking system reads the keys that start with the letter 'B' and concatenates them in the order they appear in the final key set. What is the final unlock string?",
    "answer": ["ALPHA CHARLIE DELTA BRAVO",
              "alpha charlie delta bravo",
              "Alpha Charlie Delta Bravo",
              ""],
    "hint": "Simulate the operations on the key set step by step based on the control sequence, then identify and concatenate the keys starting with 'B'.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void swap_keys(char arr[][20], int i, int j) {
    char temp[20];
    strcpy(temp, arr[i]);
    strcpy(arr[i], arr[j]);
    strcpy(arr[j], temp);
}

void reverse_keys(char arr[][20], int size) {
    for (int i = 0; i < size / 2; i++) {
        swap_keys(arr, i, size - 1 - i);
    }
}

void move_last_to_front(char arr[][20], int size) {
    char temp[20];
    strcpy(temp, arr[size - 1]);
    for (int i = size - 1; i > 0; i--) {
        strcpy(arr[i], arr[i - 1]);
    }
    strcpy(arr[0], temp);
}

int main() {
    char access_keys[4][20] = {"ALPHA", "BRAVO", "CHARLIE", "DELTA"};
    int control_sequence[] = {1, 0, 2};
    int control_size = sizeof(control_sequence) / sizeof(control_sequence[0]);
    int size = sizeof(access_keys) / sizeof(access_keys[0]);
    char unlock_string[100] = "";

    for (int i = 0; i < control_size; i++) {
        if (control_sequence[i] == 0) {
            swap_keys(access_keys, 0, 1);
        } else if (control_sequence[i] == 1) {
            reverse_keys(access_keys, size);
        } else if (control_sequence[i] == 2) {
            move_last_to_front(access_keys, size);
        }
    }

    printf("Final Key Set: ");
    for (int i = 0; i < size; i++) {
        printf("%s ", access_keys[i]);
        if (access_keys[i][0] == 'B') {
            strcat(unlock_string, access_keys[i]);
        }
    }
    printf("\\nA small lever is revealed, labeled 'RESET'.\\n");
    printf("Unlock String: %s\\n", unlock_string); // For verification
    return 0;
}
`,
  },
  {
    "question": "A pressure-sensitive floor requires a sequence of numerical activations. The initial activation sequence is `[1, 5, 2]`. The system processes this sequence in rounds. In each round, for every even number in the current sequence, its value is doubled and added to the end of the sequence. For every odd number, it is decremented by 1 and added to the beginning of the sequence. This process repeats for two rounds. The final activation sequence is the resulting sequence. What is the final activation sequence?",
    "answer": ["4 0 1 5 2 10 0 2","401521002","4,0,1,5,2,10,0,2"],
    "hint": "Simulate the two rounds of processing step by step, modifying the activation sequence in each round.",
    "code": `
#include <stdio.h>
#include <stdlib.h>

int main() {
    int activation_sequence[20] = {1, 5, 2};
    int size = 3;

    for (int round = 0; round < 2; round++) {
        int current_size = size;
        int temp_sequence[20];
        int temp_size = 0;

        for (int i = 0; i < current_size; i++) {
            if (activation_sequence[i] % 2 == 0) {
                temp_sequence[temp_size++] = activation_sequence[i] * 2;
            } else {
                for (int j = temp_size; j > 0; j--) {
                    activation_sequence[j] = activation_sequence[j - 1];
                }
                activation_sequence[0] = activation_sequence[i] - 1;
                size++;
                i++; // Important: Skip the original odd number as it's already processed
            }
        }
        // Append the doubled even numbers
        for (int i = 0; i < temp_size; i++) {
            activation_sequence[size++] = temp_sequence[i];
        }
    }

    printf("Final Activation Sequence: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", activation_sequence[i]);
    }
    printf("\\nA section of the floor retracts slightly.\\n");
    return 0;
}
`,
   }
];


  const level8Questions = [
  {
    "question": "Within the ventilation system, a series of junctions is linked in a non-linear fashion. Starting at 'INIT', you need to reach 'TARGET'. The connections are defined as follows: 'INIT'->'A'->'B'->'C'->'D'->'E'->'F'->'G'->'H'->'I'->'J'->'K'->'L'->'M'->'N'->'O'->'P'->'Q'->'R'->'S'->'T'->'U'->'V'->'W'->'X'->'Y'->'TARGET'. A diagnostic program modifies these. It traverses the list. For every node at an odd position (starting from 'INIT' as position 0), its 'next' pointer is changed to point to the node that is two positions ahead in the original sequence. If a node is within two positions of the end, its 'next' pointer remains unchanged. What is the sequence of junctions you will traverse from 'INIT' to 'TARGET' after the diagnostic program modifies the connections?",
    "answer": [
      "INIT B D F H J L N P R T V X TARGET",
      "INIT,B,D,F,H,J,L,N,P,R,T,V,X,TARGET",
      "init b d f h j l n p r t v x target",
      "init,b,d,f,h,j,l,n,p,r,t,v,x,target",
      "INIT B D F H J L N P R T V X TARGET ",
      "init b d f h j l n p r t v x target ",
    ],
    "hint": "Simulate the linked list creation and the modification. Track 'next' pointers after each odd-positioned node update. Traverse the modified list from 'INIT' to 'TARGET'.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node {
    char data[10];
    struct Node *next;
};

struct Node* createNode(const char *data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    strcpy(newNode->data, data);
    newNode->next = NULL;
    return newNode;
}

int main() {
    struct Node* nodes[27];
    nodes[0] = createNode("INIT");
    nodes[1] = createNode("A");
    nodes[2] = createNode("B");
    nodes[3] = createNode("C");
    nodes[4] = createNode("D");
    nodes[5] = createNode("E");
    nodes[6] = createNode("F");
    nodes[7] = createNode("G");
    nodes[8] = createNode("H");
    nodes[9] = createNode("I");
    nodes[10] = createNode("J");
    nodes[11] = createNode("K");
    nodes[12] = createNode("L");
    nodes[13] = createNode("M");
    nodes[14] = createNode("N");
    nodes[15] = createNode("O");
    nodes[16] = createNode("P");
    nodes[17] = createNode("Q");
    nodes[18] = createNode("R");
    nodes[19] = createNode("S");
    nodes[20] = createNode("T");
    nodes[21] = createNode("U");
    nodes[22] = createNode("V");
    nodes[23] = createNode("W");
    nodes[24] = createNode("X");
    nodes[25] = createNode("Y");
    nodes[26] = createNode("TARGET");
    int num_nodes = sizeof(nodes) / sizeof(nodes[0]);

    for (int i = 0; i < num_nodes - 1; i++) {
        nodes[i]->next = nodes[i + 1];
    }

    struct Node* current = nodes[0];
    int position = 0;
    while (current != NULL) {
        if (position % 2 != 0 && position < num_nodes - 2) {
            current->next = nodes[position + 2];
        }
        current = current->next;
        position++;
    }

    printf("Modified Tunnel Path to TARGET: ");
    current = nodes[0];
    while (current != NULL) {
        printf("%s ", current->data);
        if (strcmp(current->data, "TARGET") == 0) {
            break;
        }
        current = current->next;
    }
    printf("\\nA faint shimmering distorts the air ahead.\\n");

    return 0;
}
`,
  },
  {
    "question": "Another network of maintenance tunnels is described by a linked list: 'START' -> 'ONE' -> 'TWO' -> 'THREE' -> 'FOUR' -> 'FIVE' -> 'SIX' -> 'SEVEN' -> 'EIGHT' -> 'NINE' -> 'TEN' -> 'ELEVEN' -> 'TWELVE' -> 'END'. A security protocol reverses segments. If a node's position (starting from 'START' as 0) has a remainder of 4 when divided by 5 (excluding 0), the list is reversed from that node up to (but not including) the next such node, or the end. What is the path from 'START' to 'END' after this protocol?",
    "answer": [
      "START ONE TWO THREE SEVEN SIX FIVE FOUR TWELVE ELEVEN TEN NINE END",
      "START,ONE,TWO,THREE,SEVEN,SIX,FIVE,FOUR,TWELVE,ELEVEN,TEN,NINE,END",
      "start one two three seven six five four twelve eleven ten nine end",
      "start,one,two,three,seven,six,five,four,twelve,eleven,ten,nine,end",
      "START ONE TWO THREE SEVEN SIX FIVE FOUR TWELVE ELEVEN TEN NINE END ",
      "start one two three seven six five four twelve eleven ten nine end ",
    ],
    "hint": "Simulate the linked list and the segment reversal based on the modulo 5 condition.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node {
    char data[10];
    struct Node *next;
};

struct Node* createNode(const char *data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    strcpy(newNode->data, data);
    newNode->next = NULL;
    return newNode;
}

void reverseSegment(struct Node* start, struct Node* end, struct Node* prev) {
    struct Node *current = start;
    struct Node *next = NULL;
    struct Node *segmentPrev = prev;

    while (current != end) {
        next = current->next;
        current->next = segmentPrev;
        segmentPrev = current;
        current = next;
    }

    if (prev != NULL) {
        prev->next = segmentPrev;
    }

    struct Node* segmentEnd = start;
    while (segmentEnd != NULL && segmentEnd->next != segmentPrev) {
        segmentEnd = segmentEnd->next;
    }
    if (segmentEnd != NULL) {
        segmentEnd->next = end;
    }
}

int main() {
    struct Node* nodes[14];
    nodes[0] = createNode("START");
    nodes[1] = createNode("ONE");
    nodes[2] = createNode("TWO");
    nodes[3] = createNode("THREE");
    nodes[4] = createNode("FOUR");
    nodes[5] = createNode("FIVE");
    nodes[6] = createNode("SIX");
    nodes[7] = createNode("SEVEN");
    nodes[8] = createNode("EIGHT");
    nodes[9] = createNode("NINE");
    nodes[10] = createNode("TEN");
    nodes[11] = createNode("ELEVEN");
    nodes[12] = createNode("TWELVE");
    nodes[13] = createNode("END");
    int num_nodes = sizeof(nodes) / sizeof(nodes[0]);

    for (int i = 0; i < num_nodes - 1; i++) {
        nodes[i]->next = nodes[i + 1];
    }

    struct Node* current = nodes[0];
    struct Node* prev = NULL;
    struct Node* segmentStart = NULL;
    int position = 0;

    while (current != NULL) {
        if (position % 5 == 4 && position != 4) {
            reverseSegment(segmentStart, current, prev);
            segmentStart = current;
        } else if (position % 5 == 0 && position != 0) {
            segmentStart = current;
        }
        prev = current;
        current = current->next;
        position++;
    }
    if (segmentStart != NULL) {
        reverseSegment(segmentStart, NULL, prev);
    }

    printf("Modified Tunnel Path to END: ");
    current = nodes[0];
    while (current != NULL) {
        printf("%s ", current->data);
        current = current->next;
    }
    printf("\\nThe air feels strangely still.\\n");

    return 0;
}
`,
  },
  {
    "question": "A critical data stream passes through a linked sequence of processing units: 'IN' -> 'P1' -> 'P2' -> 'P3' -> 'P4' -> 'P5' -> 'P6' -> 'P7' -> 'P8' -> 'OUT'. An error detection protocol modifies the 'next' pointers based on a checksum. The checksum is calculated by taking the length of the string at each even-positioned unit (starting from 'IN' at 0) modulo 3. If the checksum at a unit is 0, its 'next' pointer is set to the unit two positions ahead. If it's 1, the 'next' pointer is set to the unit three positions ahead. If it's 2, the 'next' pointer remains unchanged. What is the path of the data stream from 'IN' to 'OUT' after the error detection protocol?",
    "answer": [
      "IN P3 P6 OUT",
      "IN,P3,P6,OUT",
      "in p3 p6 out",
      "in,p3,p6,out",
      "IN P3 P6 OUT ",
      "in p3 p6 out ",
    ],
    "hint": "Simulate the linked list and the checksum-based modification of 'next' pointers. Then trace the path from 'IN' to 'OUT'.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node {
    char data[10];
    struct Node *next;
};

struct Node* createNode(const char *data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    strcpy(newNode->data, data);
    newNode->next = NULL;
    return newNode;
}

int main() {
    struct Node* nodes[10];
    nodes[0] = createNode("IN");
    nodes[1] = createNode("P1");
    nodes[2] = createNode("P2");
    nodes[3] = createNode("P3");
    nodes[4] = createNode("P4");
    nodes[5] = createNode("P5");
    nodes[6] = createNode("P6");
    nodes[7] = createNode("P7");
    nodes[8] = createNode("P8");
    nodes[9] = createNode("OUT");
    int num_nodes = sizeof(nodes) / sizeof(nodes[0]);

    for (int i = 0; i < num_nodes - 1; i++) {
        nodes[i]->next = nodes[i + 1];
    }

    struct Node* current = nodes[0];
    int position = 0;
    while (current != NULL) {
        if (position % 2 == 0) {
            int checksum = strlen(current->data) % 3;
            if (checksum == 0 && position < num_nodes - 2) {
                current->next = nodes[position + 2];
            } else if (checksum == 1 && position < num_nodes - 3) {
                current->next = nodes[position + 3];
            }
        }
        current = current->next;
        position++;
    }

    printf("Modified Data Stream Path: ");
    current = nodes[0];
    while (current != NULL) {
        printf("%s ", current->data);
        if (strcmp(current->data, "OUT") == 0) {
            break;
        }
        current = current->next;
    }
    printf("\\nA series of rapid beeps echoes through the system.\\n");

    return 0;
}
`,
  },
  {
    "question": "A sequence of security checkpoints is linked: 'GATE_A' -> 'ZONE_1' -> 'GATE_B' -> 'ZONE_2' -> 'GATE_C' -> 'ZONE_3' -> 'GATE_D' -> 'ZONE_4' -> 'FINAL_GATE'. A reconfiguration protocol modifies the 'next' pointers based on the alphabetical order of the checkpoint names. It iterates through the list. For each checkpoint, it compares its name with the name of the checkpoint *three* positions ahead. If the current checkpoint's name comes alphabetically *before* the checkpoint three positions ahead, its 'next' pointer is changed to point to the checkpoint two positions ahead. This comparison and potential redirection happen only if a checkpoint three and two positions ahead exist. What is the final traversal sequence from 'GATE_A' to 'FINAL_GATE'?",
    "answer": [
      "GATE_A GATE_B ZONE_2 GATE_D FINAL_GATE",
      "GATE_A,GATE_B,ZONE_2,GATE_D,FINAL_GATE",
      "gate_a gate_b zone_2 gate_d final_gate",
      "gate_a,gate_b,zone_2,gate_d,final_gate",
      "GATE_A GATE_B ZONE_2 GATE_D FINAL_GATE ",
      "gate_a gate_b zone_2 gate_d final_gate ",
    ],
    "hint": "Simulate the linked list and the alphabetical comparison-based modification of 'next' pointers. Then trace the path from 'GATE_A' to 'FINAL_GATE'.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node {
    char data[10];
    struct Node *next;
};

struct Node* createNode(const char *data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    strcpy(newNode->data, data);
    newNode->next = NULL;
    return newNode;
}

int main() {
    struct Node* nodes[9];
    nodes[0] = createNode("GATE_A");
    nodes[1] = createNode("ZONE_1");
    nodes[2] = createNode("GATE_B");
    nodes[3] = createNode("ZONE_2");
    nodes[4] = createNode("GATE_C");
    nodes[5] = createNode("ZONE_3");
    nodes[6] = createNode("GATE_D");
    nodes[7] = createNode("ZONE_4");
    nodes[8] = createNode("FINAL_GATE");
    int num_nodes = sizeof(nodes) / sizeof(nodes[0]);

    for (int i = 0; i < num_nodes - 1; i++) {
        nodes[i]->next = nodes[i + 1];
    }

    struct Node* current = nodes[0];
    int position = 0;
    while (current != NULL) {
        if (position < num_nodes - 3) {
            if (strcmp(current->data, nodes[position + 3]->data) < 0) {
                current->next = nodes[position + 2];
            }
        }
        current = current->next;
        position++;
    }

    printf("Modified Security Checkpoint Path: ");
    current = nodes[0];
    while (current != NULL) {
        printf("%s ", current->data);
        if (strcmp(current->data, "FINAL_GATE") == 0) {
            break;
        }
        current = current->next;
    }
    printf("\\nA low-frequency pulse resonates through the area.\\n");

    return 0;
}
`,}
];

  const level9Questions = [
  {
    "question": "A complex security protocol involves traversing a binary access tree to locate a specific 'KEY' node. The tree structure is: ROOT (left: A, right: B), A (left: C, right: D), B (left: E, right: F), C (left: G), D (right: H), E (left: I, right: J), F (right: K), G (left: KEY_1), H (right: KEY_2), I (left: L), J (right: M), K (right: N), L (right: O), M (right: P), N (left: Q), O (right: KEY_3), P (left: R), Q (right: S), R (left: KEY). The traversal algorithm checks each node's data. If the data's length is even, it prioritizes the left subtree. If the length is odd, it prioritizes the right subtree. What is the exact sequence of all nodes visited during the traversal until 'KEY' is reached (inclusive)? Separate each node name with a comma.",
    "answer": [
      "ROOT,B,F,K,N,Q,S,R,KEY",
      "ROOT B F K N Q S R KEY",
      "root,b,f,k,n,q,s,r,key",
      "root b f k n q s r key",
    ],
    "hint": "Simulate the tree traversal based on the string length rule, step by step, carefully noting every node visited in order until 'KEY' is found.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

struct TreeNode {
    char data[10];
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* createTreeNode(const char *data) {
    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    strcpy(newNode->data, data);
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

bool findKey(struct TreeNode* root, char visited[20][10], int *count) {
    if (root == NULL) {
        return false;
    }
    strcpy(visited[*count], root->data);
    (*count)++;
    if (strcmp(root->data, "KEY") == 0) {
        return true;
    }

    if (strlen(root->data) % 2 == 0) {
        if (findKey(root->left, visited, count)) return true;
        return findKey(root->right, visited, count);
    } else {
        if (findKey(root->right, visited, count)) return true;
        return findKey(root->left, visited, count);
    }
}

int main() {
    struct TreeNode* root = createTreeNode("ROOT");
    root->left = createTreeNode("A");
    root->right = createTreeNode("B");
    root->left->left = createTreeNode("C");
    root->left->right = createTreeNode("D");
    root->right->left = createTreeNode("E");
    root->right->right = createTreeNode("F");
    root->left->left->left = createTreeNode("G");
    root->left->right->right = createTreeNode("H");
    root->right->left->left = createTreeNode("I");
    root->right->left->right = createTreeNode("J");
    root->right->right->left = createTreeNode("N");
    root->left->left->left->left = createTreeNode("KEY_1");
    root->left->right->right->right = createTreeNode("KEY_2");
    root->right->left->left->left = createTreeNode("L");
    root->right->left->right->right = createTreeNode("M");
    root->right->right->left->right = createTreeNode("Q");
    root->right->left->left->right = createTreeNode("O");
    root->right->left->right->left = createTreeNode("P");
    root->right->right->left->right->left = createTreeNode("S");
    root->right->left->left->right->left = createTreeNode("KEY_3");
    root->right->left->right->left->right = createTreeNode("R");
    root->right->right->left->right->left->left = createTreeNode("KEY");

    char visited[20][10];
    int count = 0;
    bool found = findKey(root, visited, &count);
    printf("KEY Node Visited: %s\\n", found ? "True" : "False");
    printf("Visited sequence: ");
    for (int i = 0; i < count; i++) {
        printf("%s,", visited[i]);
    }
    printf("\\nThe air crackles with residual energy.\\n");
    return 0;
}
`,
  },
  {
    "question": "Another security system uses a binary tree for access control. The tree structure is: ACCESS (left: CONTROL, right: MONITOR), CONTROL (left: INPUT, right: PROCESS), MONITOR (left: DISPLAY, right: LOG), INPUT (left: KEYPAD), PROCESS (right: AUTH), DISPLAY (left: SCREEN), LOG (right: FILE), KEYPAD (right: CODE), AUTH (left: TOKEN). A verification algorithm checks nodes based on a specific path. The algorithm rule is: start from the root. If the current node has a left child, move to the left child. If it doesn't have a left child but has a right child, move to the right child. If it has neither, the path ends. What is the exact sequence of all nodes visited in this path, separated by commas?",
    "answer": [
      "ACCESS,CONTROL,INPUT,KEYPAD,CODE",
      "ACCESS CONTROL INPUT KEYPAD CODE",
      "access,control,input,keypad,code",
      "access control input keypad code",
    ],
    "hint": "Simulate the specific tree traversal algorithm described, carefully noting every node visited in order until the path ends.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

struct TreeNode {
    char data[10];
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* createTreeNode(const char *data) {
    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    strcpy(newNode->data, data);
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

void getVisitedPath(struct TreeNode* root, char visited[20][10], int *count) {
    struct TreeNode* current = root;
    while (current != NULL) {
        strcpy(visited[*count], current->data);
        (*count)++;
        if (current->left != NULL) {
            current = current->left;
        } else if (current->right != NULL) {
            current = current->right;
        } else {
            break;
        }
    }
}

int main() {
    struct TreeNode* root = createTreeNode("ACCESS");
    root->left = createTreeNode("CONTROL");
    root->right = createTreeNode("MONITOR");
    root->left->left = createTreeNode("INPUT");
    root->left->right = createTreeNode("PROCESS");
    root->right->left = createTreeNode("DISPLAY");
    root->right->right = createTreeNode("LOG");
    root->left->left->right = createTreeNode("CODE");
    root->left->right->left = createTreeNode("AUTH");
    root->right->left->left = createTreeNode("SCREEN");
    root->right->right->right = createTreeNode("FILE");
    root->left->right->left->left = createTreeNode("TOKEN");
    root->left->left->right->left = createTreeNode("KEYPAD");

    char visited[20][10];
    int count = 0;
    getVisitedPath(root, visited, &count);
    printf("Visited path: ");
    for (int i = 0; i < count; i++) {
        printf("%s,", visited[i]);
    }
    printf("\\nThe system hums with a steady rhythm.\\n");
    return 0;
}
`,
  },
  {
    "question": "A critical system configuration is stored in a binary tree. The root is 'CONFIG'. Its left child is 'DATA' and its right child is 'PROCESS'. 'DATA' has a left child 'INPUT' and a right child 'OUTPUT'. 'PROCESS' has a left child 'CONTROL' and a right child 'MONITOR'. 'INPUT' has a right child 'STREAM'. 'OUTPUT' has a left child 'BUFFER'. 'CONTROL' has a right child 'SIGNAL'. 'MONITOR' has a left child 'SCREEN'. What are the names of all the leaf nodes (nodes with no children) in this tree, separated by commas and listed in alphabetical order?",
    "answer": [
      "BUFFER,SCREEN,SIGNAL,STREAM",
      "BUFFER SCREEN SIGNAL STREAM",
      "buffer,screen,signal,stream",
      "buffer screen signal stream",
    ],
    "hint": "Perform a traversal (any method) and identify all nodes that have both their left and right children as NULL. Collect their names and then list them alphabetically, separated by commas.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

struct TreeNode {
    char data[10];
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* createTreeNode(const char *data) {
    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    strcpy(newNode->data, data);
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

void findLeafNodes(struct TreeNode* root, char leaves[10][10], int *count) {
    if (root == NULL) {
        return;
    }
    if (root->left == NULL && root->right == NULL) {
        strcpy(leaves[*count], root->data);
        (*count)++;
        return;
    }
    findLeafNodes(root->left, leaves, count);
    findLeafNodes(root->right, leaves, count);
}

int compareStrings(const void *a, const void *b) {
    return strcmp(*(const char **)a, *(const char **)b);
}

int main() {
    struct TreeNode* root = createTreeNode("CONFIG");
    root->left = createTreeNode("DATA");
    root->right = createTreeNode("PROCESS");
    root->left->left = createTreeNode("INPUT");
    root->left->right = createTreeNode("OUTPUT");
    root->right->left = createTreeNode("CONTROL");
    root->right->right = createTreeNode("MONITOR");
    root->left->left->right = createTreeNode("STREAM");
    root->left->right->left = createTreeNode("BUFFER");
    root->right->left->right = createTreeNode("SIGNAL");
    root->right->right->left = createTreeNode("SCREEN");

    char leaves[10][10];
    int count = 0;
    findLeafNodes(root, leaves, &count);

    char *leafPointers[count];
    for (int i = 0; i < count; i++) {
        leafPointers[i] = leaves[i];
    }
    qsort(leafPointers, count, sizeof(char *), compareStrings);

    printf("Leaf nodes (alphabetical order): ");
    for (int i = 0; i < count; i++) {
        printf("%s%s", leafPointers[i], (i < count - 1) ? "," : "");
    }
    printf("\\nThe configuration seems stable.\\n");
    return 0;
}
`,
  },
  {
    "question": "A final access control mechanism uses a binary search tree. The following nodes are inserted in this order: 'ACCESS', 'CONTROL', 'MONITOR', 'INPUT', 'PROCESS', 'DISPLAY', 'LOG'. After insertion, a search operation is performed for the node 'LOG'. What is the sequence of nodes visited during this search, in reverse order of visitation, separated by commas?",
    "answer": [
      "LOG,MONITOR,ACCESS",
      "LOG MONITOR ACCESS",
      "log,monitor,access",
      "log monitor access",
    ],
    "hint": "Simulate the binary search tree insertion process to build the tree. Then, simulate the search for 'LOG' and track the nodes visited. Finally, reverse the order of the visited nodes.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

struct TreeNode {
    char data[10];
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* createTreeNode(const char *data) {
    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    strcpy(newNode->data, data);
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

struct TreeNode* insertNode(struct TreeNode* root, const char *data) {
    if (root == NULL) {
        return createTreeNode(data);
    }
    if (data[0] < root->data[0]) {
        root->left = insertNode(root->left, data);
    } else {
        root->right = insertNode(root->right, data);
    }
    return root;
}

bool searchNode(struct TreeNode* root, const char *target, char visited[10][10], int *count) {
    if (root == NULL) {
        return false;
    }
    strcpy(visited[*count], root->data);
    (*count)++;
    if (strcmp(root->data, target) == 0) {
        return true;
    }
    if (target[0] < root->data[0]) {
        return searchNode(root->left, target, visited, count);
    } else {
        return searchNode(root->right, target, visited, count);
    }
}

int main() {
    struct TreeNode* root = NULL;
    root = insertNode(root, "ACCESS");
    root = insertNode(root, "CONTROL");
    root = insertNode(root, "MONITOR");
    root = insertNode(root, "INPUT");
    root = insertNode(root, "PROCESS");
    root = insertNode(root, "DISPLAY");
    root = insertNode(root, "LOG");

    char visited[10][10];
    int count = 0;
    bool found = searchNode(root, "LOG", visited, &count);
    printf("Search for 'LOG' successful: %s\\n", found ? "Yes" : "No");
    printf("Visited sequence (reversed): ");
    for (int i = count - 1; i >= 0; i--) {
        printf("%s%s", visited[i], (i > 0) ? "," : "");
    }
    printf("\\nThe final lock disengages with a soft click.\\n");
    return 0;
}
`,
  },
];

  const level10Questions = [
  {
    "question": "A critical data structure within the emergency system is a binary tree representing access protocols. The tree is structured as follows: ROOT (left: A, right: B), A (left: C, right: D), B (left: E, right: F), C (left: G), D (right: H), E (left: I, right: J), F (right: K). What is the concatenation of the pre-order, then in-order, and finally post-order traversals of this tree, with each node name separated by a hyphen?",
    "answer": [
      "ROOT-A-C-G-D-H-B-E-I-J-F-K-G-C-A-H-D-ROOT-I-E-J-B-F-K-G-C-H-D-A-I-J-E-K-F-B-ROOT",
      "ROOT,A,C,G,D,H,B,E,I,J,F,K,G,C,A,H,D,ROOT,I,E,J,B,F,K,G,C,H,D,A,I,J,E,K,F,B,ROOT",
      "root-a-c-g-d-h-b-e-i-j-f-k-g-c-a-h-d-root-i-e-j-b-f-k-g-c-h-d-a-i-e-j-k-f-b-root",
      "root,a,c,g,d-h-b-e-i-j-f-k-g-c-a-h-d-root-i-e-j-b-f-k-g-c-h-d-a-i-e-j-k-f-b-root",
    ],
    "hint": "Don't forget the hyphen or Comma?. Design first then code.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode {
    char data[10];
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* createTreeNode(const char *data) {
    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    strcpy(newNode->data, data);
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

void preOrder(struct TreeNode* root, char *result) {
    if (root == NULL) return;
    strcat(result, root->data);
    strcat(result, "-");
    preOrder(root->left, result);
    preOrder(root->right, result);
}

void inOrder(struct TreeNode* root, char *result) {
    if (root == NULL) return;
    inOrder(root->left, result);
    strcat(result, root->data);
    strcat(result, "-");
    inOrder(root->right, result);
}

void postOrder(struct TreeNode* root, char *result) {
    if (root == NULL) return;
    postOrder(root->left, result);
    postOrder(root->right, result);
    strcat(result, root->data);
    strcat(result, "-");
}

int main() {
    struct TreeNode* root = createTreeNode("ROOT");
    root->left = createTreeNode("A");
    root->right = createTreeNode("B");
    root->left->left = createTreeNode("C");
    root->left->right = createTreeNode("D");
    root->right->left = createTreeNode("E");
    root->right->right = createTreeNode("F");
    root->left->left->left = createTreeNode("G");
    root->left->right->right = createTreeNode("H");
    root->right->left->left = createTreeNode("I");
    root->right->left->right = createTreeNode("J");
    root->right->right->right = createTreeNode("K");

    char pre_result[200] = "";
    preOrder(root, pre_result);
    if (strlen(pre_result) > 0) pre_result[strlen(pre_result) - 1] = '\\0';

    char in_result[200] = "";
    inOrder(root, in_result);
    if (strlen(in_result) > 0) in_result[strlen(in_result) - 1] = '\\0';

    char post_result[200] = "";
    postOrder(root, post_result);
    if (strlen(post_result) > 0) post_result[strlen(post_result) - 1] = '\\0';

    printf("Pre-order: %s\\n", pre_result);
    printf("In-order: %s\\n", in_result);
    printf("Post-order: %s\\n", post_result);

    char final_result[600] = "";
    strcat(final_result, pre_result);
    strcat(final_result, "-");
    strcat(final_result, in_result);
    strcat(final_result, "-");
    strcat(final_result, post_result);

    printf("Concatenated traversals: %s\\n", final_result);
    printf("The system's core logic is now exposed.\\n");

    return 0;
}
`,
  },
  {
    "question": "Another critical system uses a different binary tree for emergency protocols: START (left: N1, right: N2), N1 (left: N3), N2 (right: N4), N3 (right: N5), N4 (left: N6), N5 (left: N7, right: N8), N6 (right: N9). What is the sequence of nodes visited in a post-order traversal followed by an in-order traversal, with each node name separated by a comma?",
    "answer": [
      "N7,N8,N5,N3,N9,N6,N4,N2,N1,START,N3,N7,N5,N8,N1,START,N2,N6,N9,N4",
      "N7 N8 N5 N3 N9 N6 N4 N2 N1 START N3 N7 N5 N8 N1 START N2 N6 N9 N4",
      "n7,n8,n5,n3,n9,n6,n4,n2,n1,start,n3,n7,n5,n8,n1,start,n2,n6,n9,n4",
      "n7 n8 n5 n3 n9 n6 n4 n2 n1 start n3 n7 n5 n8 n1 start n2 n6 n9 n4",
    ],
    "hint": "Design first then code, separating nodes with commas.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode {
    char data[10];
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* createTreeNode(const char *data) {
    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    strcpy(newNode->data, data);
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

void postOrder(struct TreeNode* root, char *result) {
    if (root == NULL) return;
    postOrder(root->left, result);
    postOrder(root->right, result);
    strcat(result, root->data);
    strcat(result, ",");
}

void inOrder(struct TreeNode* root, char *result) {
    if (root == NULL) return;
    inOrder(root->left, result);
    strcat(result, root->data);
    strcat(result, ",");
    inOrder(root->right, result);
}

int main() {
    struct TreeNode* root = createTreeNode("START");
    root->left = createTreeNode("N1");
    root->right = createTreeNode("N2");
    root->left->left = createTreeNode("N3");
    root->right->right = createTreeNode("N4");
    root->left->left->right = createTreeNode("N5");
    root->right->right->left = createTreeNode("N6");
    root->left->left->right->left = createTreeNode("N7");
    root->left->left->right->right = createTreeNode("N8");
    root->right->right->left->right = createTreeNode("N9");

    char post_result[400] = "";
    postOrder(root, post_result);
    if (strlen(post_result) > 0) {
        post_result[strlen(post_result) - 1] = '\\0';
    }

    char in_result[400] = "";
    inOrder(root, in_result);
    if (strlen(in_result) > 0) {
        in_result[strlen(in_result) - 1] = '\\0';
    }

    printf("Post-order: %s\\n", post_result);
    printf("In-order: %s\\n", in_result);

    char final_result[800] = "";
    strcat(final_result, post_result);
    strcat(final_result, ",");
    strcat(final_result, in_result);

    printf("Concatenated traversals: %s\\n", final_result);
    printf("You can almost feel the freedom beyond.\\n");

    return 0;
}
`,
  },
  {
    "question": "A third security layer involves a binary tree: TOP (left: L1, right: R1), L1 (left: L2, right: R2), R1 (left: L3, right: R3), L2 (left: L4), R2 (right: R4), L3 (right: R5), R3 (left: L5). What is the concatenation of the in-order, then post-order traversals, with nodes separated by an underscore?",
    "answer": [
      "L4_L2_R2_R4_L1_L3_R5_R1_L5_R3_TOP_L4_L2_R4_R2_L5_R5_L3_R3_R1_L1_TOP",
      "L4_L2_R2_R4_L1_L3_R5_R1_L5_R3_TOP_L4_L2_R4_R2_R5_L3_L5_R3_R1_TOP_L1",
      "l4_l2_r2_r4_l1_l3_r5_r1_l5_r3_top_l4_l2_r4_r2_r5_l3_l5_r3_r1_top_l1",
      "l4-l2-r2-r4-l1-l3-r5-r1-l5-r3-top-l4-l2-r4-r2-r5-l3-l5-r3-r1-top-l1",
    ],
    "hint": "Design first then code using underscores cause topscores will do it by themselves.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode {
    char data[10];
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* createTreeNode(const char *data) {
    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    strcpy(newNode->data, data);
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

void inOrder(struct TreeNode* root, char *result) {
    if (root == NULL) return;
    inOrder(root->left, result);
    strcat(result, root->data);
    strcat(result, "_");
    inOrder(root->right, result);
}

void postOrder(struct TreeNode* root, char *result) {
    if (root == NULL) return;
    postOrder(root->left, result);
    postOrder(root->right, result);
    strcat(result, root->data);
    strcat(result, "_");
}

int main() {
    struct TreeNode* root = createTreeNode("TOP");
    root->left = createTreeNode("L1");
    root->right = createTreeNode("R1");
    root->left->left = createTreeNode("L2");
    root->left->right = createTreeNode("R2");
    root->right->left = createTreeNode("L3");
    root->right->right = createTreeNode("R3");
    root->left->left->left = createTreeNode("L4");
    root->left->right->right = createTreeNode("R4");
    root->right->left->right = createTreeNode("R5");
    root->right->right->left = createTreeNode("L5");

    char in_result[400] = "";
    inOrder(root, in_result);
    if (strlen(in_result) > 0) in_result[strlen(in_result) - 1] = '\\0';

    char post_result[400] = "";
    postOrder(root, post_result);
    if (strlen(post_result) > 0) post_result[strlen(post_result) - 1] = '\\0';

    char final_result[800] = "";
    strcat(final_result, in_result);
    strcat(final_result, "_");
    strcat(final_result, post_result);

    printf("In-order: %s\\n", in_result);
    printf("Post-order: %s\\n", post_result);
    printf("Concatenated traversals: %s\\n", final_result);
    printf("A hidden mechanism whirs to life.\\n");

    return 0;
}
`,
  },
  {
    "question": "4. A fourth tree structure governs a laser grid: 1 (left: 2, right: 3), 2 (left: 4, right: 5), 3 (left: 6), 4 (left: 7, right: 8), 5 (left: 9), 6 (right: 0, left: 1). What is the result of concatenating the post-order, pre-order, and in-order traversals, with nodes separated by a plus sign?",
    "answer": [
      "7+8+4+9+5+2+1+0+6+3+1+1+2+4+7+8+5+9+3+6+1+0+1+7+4+8+2+9+5+1+6+0+3",
    ],
    "hint": "Perform post-order, pre-order, and in-order traversals and concatenate them using plus signs as separators.",
    "code": `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode {
    char data[2];
    struct TreeNode *left;
    struct TreeNode *right;
};

struct TreeNode* createTreeNode(const char *data) {
    struct TreeNode* newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    strcpy(newNode->data, data);
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

void postOrder(struct TreeNode* root, char *result) {
    if (root == NULL) return;
    postOrder(root->left, result);
    postOrder(root->right, result);
    strcat(result, root->data);
    strcat(result, "+");
}

void preOrder(struct TreeNode* root, char *result) {
    if (root == NULL) return;
    strcat(result, root->data);
    strcat(result, "+");
    preOrder(root->left, result);
    preOrder(root->right, result);
}

void inOrder(struct TreeNode* root, char *result) {
    if (root == NULL) return;
    inOrder(root->left, result);
    strcat(result, root->data);
    strcat(result, "+");
    inOrder(root->right, result);
}

int main() {
    struct TreeNode* root = createTreeNode("1");
    root->left = createTreeNode("2");
    root->right = createTreeNode("3");
    root->left->left = createTreeNode("4");
    root->left->right = createTreeNode("5");
    root->right->right->left = createTreeNode("6");
    root->left->left->left = createTreeNode("7");
    root->left->left->right = createTreeNode("8");
    root->left->right->left = createTreeNode("9");
    root->right->left->right = createTreeNode("0");
    root->right->left->left = createTreeNode("1");

    char post_result[400] = "";
    postOrder(root, post_result);
    if (strlen(post_result) > 0) post_result[strlen(post_result) - 1] = '\\0';

    char pre_result[400] = "";
    preOrder(root, pre_result);
    if (strlen(pre_result) > 0) pre_result[strlen(pre_result) - 1] = '\\0';

    char in_result[400] = "";
    inOrder(root, in_result);
    if (strlen(in_result) > 0) in_result[strlen(in_result) - 1] = '\\0';

    char final_result[1200] = "";
    strcat(final_result, post_result);
    strcat(final_result, "+");
    strcat(final_result, pre_result);
    strcat(final_result, "+");
    strcat(final_result, in_result);

    printf("Post-order: %s\\n", post_result);
    printf("Pre-order: %s\\n", pre_result);
    printf("In-order: %s\\n", in_result);
    printf("Concatenated traversals: %s\\n", final_result);
    printf("The laser grid configuration is now fully unveiled.\\n");

    return 0;
}
`,
  }
];

  // Add level 1 puzzles
  level1Questions.forEach((q, i) =>
    puzzles.push({
      id: 1000 + i + (Math.random() > 0.5 ? 2 : 0), // Slightly offset IDs for variation
      level: 1,
      type: 'code',
      question: q.question,
      answer: q.answer,
      hint: q.hint,
      code: q.code
    })
  );

  // Add level 2 puzzles
  level2Questions.forEach((q, i) =>
    puzzles.push({
      id: 2000 + i + (Math.random() > 0.5 ? 2 : 0),
      level: 2,
      type: 'code',
      question: q.question,
      answer: q.answer,
      hint: q.hint,
      code: q.code
    })
  );

  // Add level 3 puzzles
  level3Questions.forEach((q, i) =>
    puzzles.push({
      id: 3000 + i + (Math.random() > 0.5 ? 2 : 0),
      level: 3,
      type: 'code',
      question: q.question,
      answer: q.answer,
      hint: q.hint,
      code: q.code
    })
  );

  // Add level 4 puzzles
  level4Questions.forEach((q, i) =>
    puzzles.push({
      id: 4000 + i + (Math.random() > 0.5 ? 2 : 0),
      level: 4,
      type: 'code',
      question: q.question,
      answer: q.answer,
      hint: q.hint,
      code: q.code
    })
  );

  level5Questions.forEach((q, i) =>
    puzzles.push({
      id: 5000 + i + (Math.random() > 0.5 ? 2 : 0),
      level: 5,
      type: 'code',
      question: q.question,
      answer: q.answer,
      hint: q.hint,
      code: q.code
    })
  );

  level6Questions.forEach((q, i) =>
    puzzles.push({
      id: 6000 + i + (Math.random() > 0.5 ? 2 : 0),
      level: 6,
      type: 'code',
      question: q.question,
      answer: q.answer,
      hint: q.hint,
      code: q.code
    })
  );

  level7Questions.forEach((q, i) =>
    puzzles.push({
      id: 7000 + i + (Math.random() > 0.5 ? 2 : 0),
      level: 7,
      type: 'code',
      question: q.question,
      answer: q.answer,
      hint: q.hint,
      code: q.code
    })
  );

  level8Questions.forEach((q, i) =>
    puzzles.push({
      id: 8000 + i + (Math.random() > 0.5 ? 2 : 0),
      level: 8,
      type: 'code',
      question: q.question,
      answer: q.answer,
      hint: q.hint,
      code: q.code
    })
  );

  level9Questions.forEach((q, i) =>
    puzzles.push({
      id: 9000 + i + (Math.random() > 0.5 ? 2 : 0),
      level: 9,
      type: 'code',
      question: q.question,
      answer: q.answer,
      hint: q.hint,
      code: q.code
    })
  );

  level10Questions.forEach((q, i) =>
    puzzles.push({
      id: 10000 + i + (Math.random() > 0.5 ? 2 : 0),
      level: 10,
      type: 'code',
      question: q.question,
      answer: q.answer,
      hint: q.hint,
      code: q.code
    })
  );

  return puzzles;
};

export const allPuzzles = generatePuzzles();

// Keep track of the last displayed puzzle ID for each level
const lastDisplayedPuzzle: { [level: number]: number } = {};

export const getPuzzlesByLevel = (level: number): Puzzle[] => {
  return allPuzzles.filter(puzzle => puzzle.level === level);
};

export const getRandomPuzzle = (level: number): Puzzle => {
  const levelPuzzles = getPuzzlesByLevel(level);
  if (levelPuzzles.length === 0) {
    return undefined; // Or handle the case where there are no puzzles for this level
  }

  // Filter out the last displayed puzzle to avoid immediate repetition
  const availablePuzzles = levelPuzzles.filter(puzzle => puzzle.id !== lastDisplayedPuzzle[level]);

  if (availablePuzzles.length === 0) {
    // If all puzzles have been shown, reset the last displayed
    lastDisplayedPuzzle[level] = undefined;
    return getRandomPuzzle(level); // Try again
  }

  const randomIndex = Math.floor(Math.random() * availablePuzzles.length);
  const selectedPuzzle = availablePuzzles[randomIndex];
  lastDisplayedPuzzle[level] = selectedPuzzle.id;
  return selectedPuzzle;
};

export const resetDisplayedPuzzles = (level?: number) => {
  if (level) {
    lastDisplayedPuzzle[level] = undefined;
  } else {
    // Reset for all levels
    for (const key in lastDisplayedPuzzle) {
      if (lastDisplayedPuzzle.hasOwnProperty(key)) {
        lastDisplayedPuzzle[parseInt(key, 10)] = undefined;
      }
    }
  }
};
