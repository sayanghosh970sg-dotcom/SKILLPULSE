// Company & Role-Aligned Practice Data Registry
// Based on publicly available role requirements and common industry interview patterns.
// These are aligned practice simulations, not actual proprietary interview questions.

export const PRACTICE_COMPANIES = [
  {
    id: 'google',
    name: 'Google',
    tier: 'Tier 1 Product',
    category: 'Product & Cloud',
    focus: 'Algorithms, Data Structures, System Efficiency & Distributed Logic',
    color: 'from-blue-500 to-emerald-500',
    initials: 'G',
    commonTopics: ['Hash Tables', 'Graphs & Trees', 'Two Pointers', 'Dynamic Programming']
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    tier: 'Tier 1 Product',
    category: 'Enterprise & Cloud',
    focus: 'Data Structures, Scalable Architecture, Azure Integration, Clean OOP',
    color: 'from-cyan-500 to-blue-600',
    initials: 'MS',
    commonTopics: ['Binary Trees', 'System Design', 'SQL & Relational DBs', 'Strings']
  },
  {
    id: 'amazon',
    name: 'Amazon',
    tier: 'Tier 1 Product',
    category: 'E-commerce & AWS',
    focus: 'Scalable Systems, Hash Tables, Object-Oriented Design, High Concurrency',
    color: 'from-amber-500 to-orange-600',
    initials: 'A',
    commonTopics: ['Heaps & Priority Queues', 'SQL Analytics', 'Sliding Window', 'LRU Cache']
  },
  {
    id: 'tcs',
    name: 'TCS',
    tier: 'Global IT Services',
    category: 'Digital Services & Consulting',
    focus: 'Core Java/Python, SQL Fundamentals, Aptitude Logic & Database Queries',
    color: 'from-purple-500 to-indigo-600',
    initials: 'TCS',
    commonTopics: ['Array Traversal', 'SQL Joins', 'String Manipulation', 'Basic OOP']
  },
  {
    id: 'infosys',
    name: 'Infosys',
    tier: 'Global IT Services',
    category: 'Enterprise Engineering',
    focus: 'Database Queries, Full Stack JS, Algorithm Basics & API Handling',
    color: 'from-blue-600 to-indigo-700',
    initials: 'INF',
    commonTopics: ['SQL Aggregation', 'Array Operations', 'REST APIs', 'Data Cleaning']
  },
  {
    id: 'wipro',
    name: 'Wipro',
    tier: 'Global IT Services',
    category: 'Technology & Consulting',
    focus: 'Web Fundamentals, Relational DBs, Clean Coding & Logic Verification',
    color: 'from-teal-500 to-emerald-600',
    initials: 'WIP',
    commonTopics: ['SQL Filtering', 'Basic Algorithms', 'Control Flow', 'Validation']
  },
  {
    id: 'accenture',
    name: 'Accenture',
    tier: 'Global Consulting',
    category: 'Strategy & Cloud Services',
    focus: 'Business Analytics, SQL Joins, Cloud Architectures & Data Pipelines',
    color: 'from-purple-600 to-pink-600',
    initials: 'ACC',
    commonTopics: ['Business Metrics SQL', 'Data Transformation', 'API Integration', 'Analytics']
  },
  {
    id: 'other',
    name: 'Other (General Tech)',
    tier: 'Industry Standard',
    category: 'Startups & Mid-Market',
    focus: 'Standardized industry competencies matching open market requisitions',
    color: 'from-slate-600 to-slate-800',
    initials: 'GEN',
    commonTopics: ['Data Structures', 'SQL Basics', 'JavaScript/React', 'Problem Solving']
  }
];

export const PRACTICE_ROLES = [
  {
    id: 'software-engineer',
    name: 'Software Engineer',
    primarySkills: ['Data Structures & Algorithms', 'System Logic', 'Clean Code'],
    description: 'Core problem-solving, algorithms, space-time complexity, and scalable logic.'
  },
  {
    id: 'frontend-developer',
    name: 'Frontend Developer',
    primarySkills: ['JavaScript & DOM', 'React & State', 'Performance & UI'],
    description: 'Modern component architecture, reactive state, event debouncing, and UI engineering.'
  },
  {
    id: 'backend-developer',
    name: 'Backend Developer',
    primarySkills: ['SQL & Relational DBs', 'API Design', 'Caching & Queues'],
    description: 'Database optimization, server endpoints, distributed caches, and query performance.'
  },
  {
    id: 'fullstack-developer',
    name: 'Full Stack Developer',
    primarySkills: ['Full Stack JS', 'REST APIs', 'Database Modeling'],
    description: 'End-to-end features spanning client rendering, business logic, and relational persistence.'
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    primarySkills: ['SQL & Aggregation', 'Python & Pandas', 'Business Metrics'],
    description: 'Window functions, cohort aggregation, revenue trends, and metric reporting.'
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    primarySkills: ['Statistics & ML', 'Python & Pandas', 'Data Modeling'],
    description: 'Statistical validation, feature engineering, classification metrics, and data wrangling.'
  },
  {
    id: 'ml-engineer',
    name: 'ML Engineer',
    primarySkills: ['Machine Learning', 'NumPy & Vectors', 'Model Deployment'],
    description: 'Evaluation metrics (F1/Precision/Recall), matrix operations, and inference pipelines.'
  }
];

export const PRACTICE_DIFFICULTIES = [
  { id: 'all', name: 'All Difficulties' },
  { id: 'Easy', name: 'Easy', badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { id: 'Medium', name: 'Medium', badgeClass: 'bg-amber-50 text-amber-700 border-amber-200' },
  { id: 'Hard', name: 'Hard', badgeClass: 'bg-rose-50 text-rose-700 border-rose-200' }
];

export const PRACTICE_QUESTIONS = [
  {
    id: 'q1',
    title: 'Two Sum Target Pairs',
    difficulty: 'Easy',
    relatedSkill: 'Data Structures & Algorithms',
    skillCategory: 'DSA',
    companies: ['google', 'amazon', 'microsoft', 'tcs', 'other'],
    roles: ['software-engineer', 'backend-developer', 'fullstack-developer'],
    conceptsTested: ['Hash Maps', 'Array Traversal', 'Time Complexity O(N)'],
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input has exactly one solution, and you may not use the same element twice.',
    examples: [
      {
        input: 'nums = [2, 7, 11, 15], target = 9',
        output: '[0, 1]',
        explanation: 'nums[0] + nums[1] == 9, so we return [0, 1].'
      },
      {
        input: 'nums = [3, 2, 4], target = 6',
        output: '[1, 2]',
        explanation: 'nums[1] + nums[2] == 6, so we return [1, 2].'
      }
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Use a Hash Map to store complement indices in O(N) time
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
      python: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [seen[diff], i]
        seen[num] = i
    return []`,
      sql: `-- Relational pair matching
SELECT a.id AS idx1, b.id AS idx2
FROM numbers a
JOIN numbers b ON a.id < b.id
WHERE a.val + b.val = 9;`
    },
    testCases: [
      { input: '[2, 7, 11, 15], 9', expected: '[0, 1]' },
      { input: '[3, 2, 4], 6', expected: '[1, 2]' },
      { input: '[3, 3], 6', expected: '[0, 1]' }
    ],
    hint: 'A brute force O(N^2) double loop works, but an O(N) hash map storing { value: index } provides optimal linear time lookup.'
  },
  {
    id: 'q2',
    title: 'Top Revenue Generating Customers (SQL)',
    difficulty: 'Medium',
    relatedSkill: 'SQL & Relational DBs',
    skillCategory: 'SQL',
    companies: ['amazon', 'accenture', 'infosys', 'tcs', 'other'],
    roles: ['data-analyst', 'data-scientist', 'backend-developer'],
    conceptsTested: ['GROUP BY', 'SUM() & Aggregations', 'HAVING Filter', 'ORDER BY DESC'],
    description: 'Write an SQL query to retrieve the top 5 customers by total order spend in the current fiscal year. Only include customers who placed at least 3 distinct orders and spent more than ₹50,000 total. Output customer_id, customer_name, total_orders, and total_spend.',
    examples: [
      {
        input: 'Table: orders (order_id, customer_id, amount, order_date)\nTable: customers (customer_id, name)',
        output: 'customer_id | customer_name | total_orders | total_spend\n101 | Rajesh Kumar | 5 | 84,500\n204 | Priya Sharma | 4 | 67,200',
        explanation: 'Filters on COUNT(order_id) >= 3 and SUM(amount) > 50000 ordered by total_spend descending.'
      }
    ],
    starterCode: {
      sql: `SELECT 
    c.customer_id,
    c.name AS customer_name,
    COUNT(o.order_id) AS total_orders,
    SUM(o.amount) AS total_spend
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= '2026-01-01'
GROUP BY c.customer_id, c.name
HAVING COUNT(o.order_id) >= 3 AND SUM(o.amount) > 50000
ORDER BY total_spend DESC
LIMIT 5;`,
      javascript: `// Mock JS query parser
function filterTopCustomers(customers, orders) {
  // Aggregation logic simulation
  return customers.filter(c => c.totalSpend > 50000);
}`
    },
    testCases: [
      { input: 'Orders batch 2026', expected: '5 top customer records returned' },
      { input: 'Filter check: spend > 50k', expected: 'All returned records > 50,000' }
    ],
    hint: 'Remember to apply the aggregate conditions in the HAVING clause rather than the WHERE clause.'
  },
  {
    id: 'q3',
    title: 'Implement Custom Debounce Function',
    difficulty: 'Medium',
    relatedSkill: 'JavaScript & DOM',
    skillCategory: 'Frontend',
    companies: ['google', 'microsoft', 'amazon', 'other'],
    roles: ['frontend-developer', 'fullstack-developer'],
    conceptsTested: ['Closures', 'setTimeout & clearTimeout', 'Higher-Order Functions', 'Context Binding'],
    description: 'Implement a debounce function that takes a callback function fn and a delay in milliseconds t. The returned function should delay the execution of fn until t milliseconds have elapsed since the last time the debounced function was invoked.',
    examples: [
      {
        input: 'let log = debounce(console.log, 100);\nlog("Hello"); // at t=0ms\nlog("World"); // at t=50ms',
        output: 'Logs "World" at t=150ms',
        explanation: 'The call at t=0ms was cancelled because another call arrived at t=50ms before the 100ms timer elapsed.'
      }
    ],
    starterCode: {
      javascript: `function debounce(fn, t) {
  let timerId = null;
  return function(...args) {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
}`,
      python: `import time
import threading

def debounce(fn, wait_seconds):
    timer = None
    def debounced(*args, **kwargs):
        nonlocal timer
        if timer:
            timer.cancel()
        timer = threading.Timer(wait_seconds, lambda: fn(*args, **kwargs))
        timer.start()
    return debounced`
    },
    testCases: [
      { input: 'Rapid calls within 50ms (delay 100ms)', expected: 'Executes once with latest argument' },
      { input: 'Single call at t=0', expected: 'Executes at t=100ms' }
    ],
    hint: 'Use a closure to hold the active timer ID. Whenever the returned function is called, immediately clear the previous timer.'
  },
  {
    id: 'q4',
    title: 'Find the Missing Number in Consecutive Sequence',
    difficulty: 'Easy',
    relatedSkill: 'Data Structures & Algorithms',
    skillCategory: 'DSA',
    companies: ['tcs', 'infosys', 'wipro', 'accenture', 'other'],
    roles: ['software-engineer', 'fullstack-developer', 'data-analyst'],
    conceptsTested: ['Gauss Formula', 'Bitwise XOR', 'O(1) Space', 'Array Sum'],
    description: 'Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. Aim for O(N) time and O(1) auxiliary space.',
    examples: [
      {
        input: 'nums = [3, 0, 1]',
        output: '2',
        explanation: 'n = 3 since there are 3 numbers, so all numbers are in [0,3]. 2 is missing.'
      },
      {
        input: 'nums = [0, 1]',
        output: '2',
        explanation: 'n = 2. 2 is missing from [0, 2].'
      }
    ],
    starterCode: {
      javascript: `function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}`,
      python: `def missing_number(nums):
    n = len(nums)
    expected = (n * (n + 1)) // 2
    return expected - sum(nums)`
    },
    testCases: [
      { input: '[3, 0, 1]', expected: '2' },
      { input: '[0, 1]', expected: '2' },
      { input: '[9,6,4,2,3,5,7,0,1]', expected: '8' }
    ],
    hint: 'Calculate the mathematical sum from 0 to n using n*(n+1)/2 and subtract the array sum to get the missing element in O(1) space.'
  },
  {
    id: 'q5',
    title: 'Department Salary Ranking with Window Functions',
    difficulty: 'Medium',
    relatedSkill: 'SQL & Relational DBs',
    skillCategory: 'SQL',
    companies: ['microsoft', 'accenture', 'amazon', 'other'],
    roles: ['data-analyst', 'data-scientist', 'backend-developer'],
    conceptsTested: ['DENSE_RANK()', 'PARTITION BY', 'Common Table Expressions (CTE)', 'Subqueries'],
    description: 'Write an SQL query to find the top 3 highest-earning employees in each department. If employees have identical salaries, they should share the same rank without skipping rank numbers.',
    examples: [
      {
        input: 'Table: Employee (id, name, salary, department_id)\nTable: Department (id, name)',
        output: 'department_name | employee_name | salary | rank\nEngineering | Amit Verma | 185000 | 1\nEngineering | Sneha Rao | 165000 | 2',
        explanation: 'Uses DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) <= 3.'
      }
    ],
    starterCode: {
      sql: `WITH RankedSalaries AS (
    SELECT 
        d.name AS department_name,
        e.name AS employee_name,
        e.salary,
        DENSE_RANK() OVER (
            PARTITION BY e.department_id 
            ORDER BY e.salary DESC
        ) AS salary_rank
    FROM Employee e
    JOIN Department d ON e.department_id = d.id
)
SELECT department_name, employee_name, salary, salary_rank
FROM RankedSalaries
WHERE salary_rank <= 3
ORDER BY department_name, salary_rank;`
    },
    testCases: [
      { input: 'Multi-department schema', expected: 'Ranks 1 to 3 partitioned by department' },
      { input: 'Tied salaries', expected: 'Tied employees receive identical rank' }
    ],
    hint: 'Use DENSE_RANK() instead of RANK() so that tied salaries do not create gaps in the rank sequence.'
  },
  {
    id: 'q6',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    relatedSkill: 'Data Structures & Algorithms',
    skillCategory: 'DSA',
    companies: ['google', 'amazon', 'microsoft', 'other'],
    roles: ['software-engineer', 'backend-developer', 'fullstack-developer'],
    conceptsTested: ['Sliding Window', 'Hash Set / Map', 'Two Pointers', 'String Indexing'],
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
    examples: [
      {
        input: 's = "abcabcbb"',
        output: '3',
        explanation: 'The answer is "abc", with length 3.'
      },
      {
        input: 's = "bbbbb"',
        output: '1',
        explanation: 'The answer is "b", with length 1.'
      }
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  const charMap = new Map();

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (charMap.has(char) && charMap.get(char) >= left) {
      left = charMap.get(char) + 1;
    }
    charMap.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}`,
      python: `def length_of_longest_substring(s: str) -> int:
    used = {}
    max_len = left = 0
    for right, char in enumerate(s):
        if char in used and left <= used[char]:
            left = used[char] + 1
        used[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len`
    },
    testCases: [
      { input: '"abcabcbb"', expected: '3' },
      { input: '"bbbbb"', expected: '1' },
      { input: '"pwwkew"', expected: '3' }
    ],
    hint: 'Use a sliding window [left, right] and store the last seen position of each character to skip duplicate indices instantly.'
  },
  {
    id: 'q7',
    title: 'Calculate Classification Metrics: Precision, Recall & F1',
    difficulty: 'Easy',
    relatedSkill: 'Machine Learning & Python',
    skillCategory: 'ML',
    companies: ['google', 'microsoft', 'amazon', 'accenture', 'other'],
    roles: ['ml-engineer', 'data-scientist'],
    conceptsTested: ['Confusion Matrix', 'Precision = TP/(TP+FP)', 'Recall = TP/(TP+FN)', 'Harmonic Mean F1'],
    description: 'Given True Positives (tp), False Positives (fp), and False Negatives (fn), compute the model precision, recall, and F1-score rounded to 4 decimal places. Handle division by zero gracefully by returning 0.0.',
    examples: [
      {
        input: 'tp = 80, fp = 20, fn = 10',
        output: '{ precision: 0.8000, recall: 0.8889, f1: 0.8421 }',
        explanation: 'Precision = 80/100 = 0.8. Recall = 80/90 = 0.8889. F1 = 2*(P*R)/(P+R) = 0.8421.'
      }
    ],
    starterCode: {
      python: `def compute_metrics(tp, fp, fn):
    precision = tp / (tp + fp) if (tp + fp) > 0 else 0.0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0.0
    f1 = 2 * (precision * recall) / (precision + recall) if (precision + recall) > 0 else 0.0
    
    return {
        "precision": round(precision, 4),
        "recall": round(recall, 4),
        "f1": round(f1, 4)
    }`,
      javascript: `function computeMetrics(tp, fp, fn) {
  const precision = (tp + fp) > 0 ? tp / (tp + fp) : 0;
  const recall = (tp + fn) > 0 ? tp / (tp + fn) : 0;
  const f1 = (precision + recall) > 0 ? (2 * precision * recall) / (precision + recall) : 0;

  return {
    precision: Number(precision.toFixed(4)),
    recall: Number(recall.toFixed(4)),
    f1: Number(f1.toFixed(4))
  };
}`
    },
    testCases: [
      { input: '80, 20, 10', expected: '{ precision: 0.8, recall: 0.8889, f1: 0.8421 }' },
      { input: '0, 5, 5', expected: '{ precision: 0, recall: 0, f1: 0 }' }
    ],
    hint: 'F1 score is the harmonic mean of precision and recall: 2 * (precision * recall) / (precision + recall).'
  },
  {
    id: 'q8',
    title: 'Merge Overlapping Intervals',
    difficulty: 'Medium',
    relatedSkill: 'Data Structures & Algorithms',
    skillCategory: 'DSA',
    companies: ['google', 'microsoft', 'amazon', 'other'],
    roles: ['software-engineer', 'backend-developer'],
    conceptsTested: ['Sorting Arrays', 'Interval Merging', 'Greedy Pattern', 'Time O(N log N)'],
    description: 'Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
    examples: [
      {
        input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
        output: '[[1,6],[8,10],[15,18]]',
        explanation: 'Since intervals [1,3] and [2,6] overlap, merge them into [1,6].'
      }
    ],
    starterCode: {
      javascript: `function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;
  // Sort intervals by starting time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = merged[merged.length - 1];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  return merged;
}`,
      python: `def merge_intervals(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged`
    },
    testCases: [
      { input: '[[1,3],[2,6],[8,10],[15,18]]', expected: '[[1,6],[8,10],[15,18]]' },
      { input: '[[1,4],[4,5]]', expected: '[[1,5]]' }
    ],
    hint: 'Sort the intervals by their start time first. Once sorted, a consecutive interval can only overlap with the preceding merged interval.'
  },
  {
    id: 'q9',
    title: 'SQL Running Total / Cumulative Sum',
    difficulty: 'Hard',
    relatedSkill: 'SQL & Relational DBs',
    skillCategory: 'SQL',
    companies: ['amazon', 'google', 'accenture', 'other'],
    roles: ['data-analyst', 'data-scientist', 'backend-developer'],
    conceptsTested: ['Window SUM()', 'ROWS BETWEEN UNBOUNDED PRECEDING', 'Cumulative Metrics'],
    description: 'Write an SQL query to calculate the daily total transaction amount along with a cumulative running total across all days. Output transaction_date, daily_total, and running_cumulative_total.',
    examples: [
      {
        input: 'Table: Transactions (id, transaction_date, amount)',
        output: 'date | daily_total | running_total\n2026-09-01 | 15000 | 15000\n2026-09-02 | 22000 | 37000',
        explanation: 'Uses SUM(daily_total) OVER (ORDER BY transaction_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW).'
      }
    ],
    starterCode: {
      sql: `WITH DailyTotals AS (
    SELECT 
        transaction_date,
        SUM(amount) AS daily_total
    FROM Transactions
    GROUP BY transaction_date
)
SELECT 
    transaction_date,
    daily_total,
    SUM(daily_total) OVER (
        ORDER BY transaction_date 
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_cumulative_total
FROM DailyTotals
ORDER BY transaction_date;`
    },
    testCases: [
      { input: '3-day sequence', expected: 'Cumulative total accurately accumulates each day' }
    ],
    hint: 'First aggregate amounts per day using a CTE, then apply a window SUM with ORDER BY transaction_date.'
  },
  {
    id: 'q10',
    title: 'LRU Cache Eviction Architecture',
    difficulty: 'Hard',
    relatedSkill: 'Data Structures & Algorithms',
    skillCategory: 'DSA',
    companies: ['google', 'amazon', 'microsoft', 'other'],
    roles: ['software-engineer', 'backend-developer'],
    conceptsTested: ['Doubly Linked List', 'Hash Map', 'O(1) Get and Put', 'Eviction Strategy'],
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache with get(key) and put(key, value) operations executing in O(1) average time complexity.',
    examples: [
      {
        input: 'LRUCache cache = new LRUCache(2);\ncache.put(1, 1);\ncache.put(2, 2);\ncache.get(1); // returns 1\ncache.put(3, 3); // evicts key 2',
        output: 'Evicts least recently used key 2',
        explanation: 'Key 1 was accessed before put(3), making key 2 the least recently used element.'
      }
    ],
    starterCode: {
      javascript: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // JavaScript Map preserves insertion order
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    // Refresh position to most recently used
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Evict oldest (first) entry in Map
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}`
    },
    testCases: [
      { input: 'Capacity 2: put(1,1), put(2,2), get(1), put(3,3)', expected: 'Key 2 evicted, get(2) returns -1' }
    ],
    hint: 'A Doubly Linked List paired with a Hash Map offers O(1) removals and insertions at both head and tail.'
  }
];

export const INITIAL_USER_PRACTICE_STATS = {
  questionsCompleted: 14,
  totalAttempted: 18,
  accuracyRate: 78,
  currentStreakDays: 5,
  skillsPracticed: [
    { skill: 'Data Structures & Algorithms', count: 7, accuracy: 85 },
    { skill: 'SQL & Relational DBs', count: 4, accuracy: 75 },
    { skill: 'JavaScript & DOM', count: 2, accuracy: 70 },
    { skill: 'Machine Learning', count: 1, accuracy: 60 }
  ],
  weakSkillAreas: [
    { skill: 'SQL Joins & Window Functions', category: 'SQL', gapLevel: 'High Priority', gapNote: 'Detected gap in complex multi-table aggregations' },
    { skill: 'Dynamic Programming & Heaps', category: 'DSA', gapLevel: 'Medium Priority', gapNote: 'Suboptimal time complexity in recursion' }
  ],
  recommendedPractice: [
    {
      skillGap: 'SQL & Relational DBs',
      reason: 'Identified as critical gap for target Data Analyst & Backend profiles',
      questionId: 'q2',
      questionTitle: 'Top Revenue Generating Customers (SQL)',
      company: 'Amazon / Accenture'
    },
    {
      skillGap: 'Data Structures & Algorithms',
      reason: 'Recommended to elevate problem-solving efficiency to Tier 1 product standard',
      questionId: 'q1',
      questionTitle: 'Two Sum Target Pairs',
      company: 'Google / Amazon'
    }
  ]
};
