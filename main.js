const searchInput = document.getElementById('search-input');
const searchResultsContainer = document.getElementById('search-results-container');
const searchResultsList = document.getElementById('search-results');

const formulas = [
  {
    category: "Precalculus - Algebra",
    title: "Quadratic Formula",
    formula: "\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    sectionId: "quadratic"
  },
  {
    category: "Precalculus - Algebra",
    title: "Special Factoring Properties",
    formula: [
      "x^2-y^2=(x+y)(x-y)",
      "x^2-y^2=(x+y)(x-y)",
      "x^2-2xy+y^2=(x-y)^2",
      "x^3-y^3=(x-y)(x^2+xy+y^2)",
      "x^3+y^3=(x+y)(x^2-xy+y^2)",
    ],
    sectionId: "special-factoring"
  },
  {
    category: "Precalculus - Algebra",
    title: "Logarithm Properties",
    formula: [
      "y=\log_a(x) => a^y = x",
      "\log_a(xy) = \log_a(x) + \log_a(y)",
      "\log_a(\\frac{x}{y}) = \log_a(x) - \log_a(y)",
      "\log_a(x^r) = r \log_a(x)",
      "a^{\log_a(x)}  = x",
      "\log_a(a^x) = x",
      "\log_a(1) = 0",
      "\log_a(a) = 1",
      "\log(x) = \log_{10}(x)",
      "\ln(x) = \log_e(x)",
      "\log_b(u) = \\frac{\log_a(u)}{\log_a(b)} ",
    ],
    sectionId: "logarithm"
  },
  {
    category: "Precalculus - Algebra",
    title: "Radical Properties:",
    formula: [
      "a^ma^n=a^{m+n} ",
      "(a^m)^n=a^{mn}",
      "(ab)^n=a^{n}b^n",
      "(\\frac{a}{b})^n=\\frac{a^n}{b^n}",
      "\\frac{a^m}{a^n}=a^{m-n}",
      "a^{-n}=\\frac{1}{a^n}",
      "a^{\\frac{1}{n}}=\\sqrt[n]{a}",
      "a^{\\frac{m}{n}}=\\sqrt[n]{a^m}",
      "a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m",
      "\\sqrt[n]{ab}=\\sqrt[n]a\\sqrt[n]b",
      "\\sqrt[n]{\\frac{a}{b}}=\\frac{\\sqrt[n]a}{\\sqrt[n]b}",
      "\\sqrt[m]{\\sqrt[n]{a}}=\\sqrt[mn]a",
    ],
    sectionId: "radical"
  },
  {
    category: "Precalculus - Trigonometry",
    title: "Right Triangles",
    formula: [
      "\\sin (\\theta) = \\frac{opp}{hyp}, \\csc (\\theta) = \\frac{hyp}{opp}",
      "\\cos (\\theta) = \\frac{adj}{hyp}, \\sec (\\theta) = \\frac{hyp}{adj}",
      "\\tan (\\theta) = \\frac{opp}{adj}, \\cot (\\theta) = \\frac{adj}{opp}",
    ],
    sectionId: "right"
  },
  {
    category: "Precalculus - Trigonometry",
    title: "The Law of Sines",
    formula: "\\frac{a}{\sin A}=\\frac{b}{\sin B}=\\frac{c}{\sin C}",
    sectionId: "lawsine"
  },
  {
    category: "Precalculus - Trigonometry",
    title: "The Law of Cosines",
    formula: [
      "a^2=b^2+c^2-2bc \cos A",
      "b^2=a^2+c^2-2ac \cos B",
      "c^2=a^2+b^2-2ab \cos C",
    ],
    sectionId: "lawcosine"
  },
  {
    category: "Precalculus - Trigonometry",
    title: "Pythagorean Identity",
    formula: [
      "\sin^2(x) + \cos^2(x) = 1",
      "1+\\tan^2(x) = \sec^2(x)",
      "1+\\cot^2(x) + \csc^2(x)",
    ],
    sectionId: "pythagorean"
  },
  {
    category: "Precalculus - Trigonometry",
    title: "Sum and Difference Formulas",
    formula: [
      "\\sin(a \\pm b) = \\sin(a)\\cos(b) \\pm \\cos(a)\\sin(b)",
      "\\cos(a \\pm b) = \\cos(a)\\cos(b) \\mp \\sin(a)\\sin(b)",
    ],
    sectionId: "diff"
  },
  {
    category: "Precalculus - Trigonometry",
    title: "Double Angle Formulas",
    formula: [
      "\\sin(2x) = 2\\sin(x)\\cos(x)",
      "\\cos(2x) = \\cos^2(x) - \\sin^2(x)",
    ],
    sectionId: "double"
  },
  {
    category: "Precalculus - Trigonometry",
    title: "Trigonometric Identities",
    formula: [
      "\\sin(x)\csc(x)=1",
      "\\cos(x)\sec(x)=1",
      "\\tan(x)\cot(x)=1",
      "\\tan(x)=\\frac{\sin(x)}{\cos(x)}, \\cot(x)=\\frac{\cos(x)}{\sin(x)}",
    ],
    sectionId: "iden"
  },
  {
    category: "Precalculus - Trigonometry",
    title: "Interactive Unit Circle",
    formula: [
      "\\sin(\\theta), \\cos(\\theta), \\tan(\\theta)",
    ],
    sectionId: "interactive"
  },
  {
    category: "Precalculus - Geometry",
    title: "Pythagorean Theorem:",
    formula: "c^2 = a^2 + b^2",
    sectionId: "pytheorem"
  },
  {
    category: "Precalculus - Geometry",
    title: "Square",
    formula: [
      "A = s^2",
      "C=4s",
    ],
    sectionId: "square"
  },
  {
    category: "Precalculus - Geometry",
    title: "Rectangle",
    formula: [
      "A = lw",
      "C=2l+2w",
    ],
    sectionId: "rect"
  },
  {
    category: "Precalculus - Geometry",
    title: "Triangle",
    formula: [
      "A = \\frac{1}{2}bh",
      "C=a+b+c",
    ],
    sectionId: "triangle"
  },
  {
    category: "Precalculus - Geometry",
    title: "Circle",
    formula: [
      "A = \\pi r^2",
      "C=2\\pi r",
    ],
    sectionId: "circle"
  },
  {
    category: "Precalculus - Geometry",
    title: "Cube",
    formula: [
      "V = s^3",
      "S=6s^2",
    ],
    sectionId: "cube"
  },
  {
    category: "Precalculus - Geometry",
    title: "Rectangle Prism",
    formula: [
      "V = lwh",
      "S=2(lw+wh+hl)",
    ],
    sectionId: "prism"
  },
  {
    category: "Precalculus - Geometry",
    title: "Cone",
    formula: [
      "V = \\frac{1}{3}\\pi r^2 h",
      "S=\\pi r(r+\\sqrt{h^2+ r^2})",
    ],
    sectionId: "cone"
  },
  {
    category: "Precalculus - Geometry",
    title: "Sphere",
    formula: [
      "V = \\frac{4}{3}\\pi r^3",
      "S=4\\pi r^2",
    ],
    sectionId: "sphere"
  },
  {
    category: "Precalculus - Geometry",
    title: "Distance Formula",
    formula: "\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
    sectionId: "distancef"
  },
  {
    category: "Precalculus - Geometry",
    title: "Equation of a Circle",
    formula: "(x - h)^2 + (y - k)^2 = r^2",
    sectionId: "eqcir"
  },
  {
    category: "Precalculus - Geometry",
    title: "Slope-intercept form of a Line",
    formula: "y = mx + b",
    sectionId: "slopein"
  },
  {
    category: "Precalculus - Geometry",
    title: "Point-slope form of a Line",
    formula: "y - y_1 = m(x - x_1)",
    sectionId: "pslope"
  },
  {
    category: "Calculus - Limit",
    title: "Limit Definition",
    formula: [
      "\\begin{gather*}lim_{x\\to a^-}{f(x)}= lim_{x\\to a^+}{f(x)}=L\\\\ lim_{x\\to a}{f(x)}=L\\end{gather*}",
      "\\begin{gather*}if\\hspace{0.3cm}lim_{x\\to a^-}{f(x)}\\neq lim_{x\\to a^+}{f(x)}\\\\lim_{x\\to a}{f(x)}=undefined\\end{gather*}",
    ],
    sectionId: "limitdif"
  },
  {
    category: "Calculus - Limit",
    title: "Sum Rule",
    formula: "\\begin{equation}{\\small lim_{x\\to a}{f(x)+g(x)}=lim_{x\\to a}f(x)+lim_{x\\to a}g(x)}\\end{equation}",
    sectionId: "limsum"
  },
  {
    category: "Calculus - Limit",
    title: "Difference Rule",
    formula: "\\begin{equation}{\\small lim_{x\\to a}{f(x)-g(x)}=lim_{x\\to a}f(x)-lim_{x\\to a}g(x)}\\end{equation}",
    sectionId: "limdiff"
  },
  {
    category: "Calculus - Limit",
    title: "Product Rule",
    formula: "\\begin{equation}{\\small lim_{x\\to a}{f(x).g(x)}=lim_{x\\to a}f(x).lim_{x\\to a}g(x)}\\end{equation}",
    sectionId: "limpro"
  },
  {
    category: "Calculus - Limit",
    title: "Quotient Rule",
    formula: "lim_{x\\to a}{\\frac{f(x)}{g(x)}}=\\frac{lim_{x\\to a}f(x)}{lim_{x\\to a}g(x)}",
    sectionId: "limquo"
  },
  {
    category: "Calculus - Limit",
    title: "Ways to Solve Limit",
    formula: [
      "1.\\text{ Direct Substitution}",
      "2.\\text{ Factoring}",
      "3.\\text{ Rationalizing}",
      "4.\\text{ L'Hopital's Rule}",
      "5.\\text{ Squeeze Theorem}",
      "6.\\text{ Dominant Term for Infinity Limits}",
      "7.\\text{ Trigonometric Limits}",
      "8.\\text{ Logarithmic and Exponential Limits}",
      "9.\\text{ Change of Variables}",
      "10.\\text{ Limits at Infinity: Horizontal Asymptotes}",
      "11.\\text{ Limits with Piecewise Functions}",
    ],
    sectionId: "limway"
  },
  {
    category: "Calculus - Derivatives",
    title: "Basic Rule",
    formula: [
      "\\frac{d}{dx}(c) = 0",
      "\\frac{d}{dx}(x) = 1",
      "\\frac{d}{dx}(cf(x)) = c\\frac{d}{dx}(f(x))",
      "\\begin{gather}\\frac{d}{dx}(f(x)+g(x)) \\\\= f'(x)+g'(x)\\end{gather}",
      "\\begin{gather}\\frac{d}{dx}(f(x)-g(x)) \\\\= f'(x)-g'(x)\\end{gather}",
    ],
    sectionId: "basicdev"
  },
  {
    category: "Calculus - Derivatives",
    title: "Power Rule",
    formula: "\\frac{d}{dx}(x^n) = nx^{n-1}",
    sectionId: "powdev"
  },
  {
    category: "Calculus - Derivatives",
    title: "Product Rule",
    formula: "\\begin{gather}\\frac{d}{dx}(f(x).g(x)) \\\\= f'(x)g(x)+f(x)g'(x)\\end{gather}",
    sectionId: "prodev"
  },
  {
    category: "Calculus - Derivatives",
    title: "Quotient Rule",
    formula: "\\begin{gather}\\frac{d}{dx}(\\frac{f(x)}{g(x)}) \\\\= \\frac{f'(x)g(x)-f(x)g'(x)}{(g(x))^2}\\end{gather}",
    sectionId: "quodev"
  },
  {
    category: "Calculus - Derivatives",
    title: "Chain Rule",
    formula: "\\frac{d}{dx}(f(g(x))) = f'(g(x))g'(x)",
    sectionId: "chaindev"
  },
  {
    category: "Calculus - Derivatives",
    title: "Derivatives of Trigonometric Functions",
    formula: [
      "\\frac{d}{dx}(\\sin x) = \\cos x",
      "\\frac{d}{dx}(\\cos x) = -\\sin x",
      "\\frac{d}{dx}(\\tan x) = \\sec^2 x",
      "\\frac{d}{dx}(\\cot x) = -\\csc^2 x",
      "\\frac{d}{dx}(\\sec x) = \\sec x\\tan x",
      "\\frac{d}{dx}(\\csc x) = -\\csc x\\cot x",
    ],
    sectionId: "trigdev"
  },
  {
    category: "Calculus - Derivatives",
    title: "Exponential Rule",
    formula: [
      "\\frac{d}{dx}(e^x)=e^x",
      "\\frac{d}{dx}(e^{f(x)})=e^{f(x)}.f'(x)",
    ],
    sectionId: "expdev"
  },
  {
    category: "Calculus - Derivatives",
    title: "Logarithm Rule",
    formula: [
      "\\frac{d}{dx}(\\ln(x))=\\frac{1}{x}x",
      "\\frac{d}{dx}(\\ln{f(x)})=\\frac{1}{f(x)}f'(x)",
      "\\frac{d}{dx}(\\log_a(x))=\\frac{1}{x\\ln(a)}",
      "\\frac{d}{dx}(\\log_a{f(x)})=\\frac{1}{f(x)\\ln(a)}f'(x)",
    ],
    sectionId: "logdev"
  },
  {
    category: "Calculus - Integrals",
    title: "Power Rule",
    formula: "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C",
    sectionId: "integrals"
  },
  {
    category: "Calculus - Integrals",
    title: "Sum/Difference Rule",
    formula: "\\int [f(x) \\pm g(x)] dx = \\int f(x) dx \\pm \\int g(x) dx",
    sectionId: "integrals"
  },
  {
    category: "Calculus - Integrals",
    title: "Integration by Substitution",
    formula: "\\int f(g(x))g'(x) dx = \\int f(u) du",
    sectionId: "integrals"
  },
  {
    category: "Calculus - Integrals",
    title: "Integration by Parts",
    formula: "\\int u dv = uv - \\int v du",
    sectionId: "integrals"
  },
  {
    category: "Calculus - Integrals",
    title: "Integrals of Trigonometric Functions",
    formula: [
      "\\int \\sin x dx = -\\cos x + C",
      "\\int \\cos x dx = \\sin x + C",
    ],
    sectionId: "integrals"
  },
];

const fuse = new Fuse(formulas, {
  keys: ['title', 'category', 'formula'],
  includeMatches: true,
  threshold: 0.3,
});

searchInput.addEventListener('input', function() {
  const query = this.value.trim();
  if (query === '') {
    searchResultsContainer.style.display = 'none';
    searchResultsList.innerHTML = '';
    return;
  }

  const results = fuse.search(query);
  searchResultsList.innerHTML = '';

  if (results.length === 0) {
    searchResultsList.innerHTML = '<li class="text-gray-500">No results found</li>';
    searchResultsContainer.style.display = 'block';
  } else {
    results.forEach(result => {
      const li = document.createElement('li');
      li.setAttribute('data-section-id', result.item.sectionId);

      let formulaHTML = '';

      if (Array.isArray(result.item.formula)) {
        formulaHTML = result.item.formula.map(f => `<p class="my-1 formula">\\(${f}\\)</p>`).join('');
      } else {
        formulaHTML = `<p class="formula">\\(${result.item.formula}\\)</p>`;
      }

      li.innerHTML = `
      <h4 class="font-semibold text-blue-700">${highlightMatch(result.item.title, result.matches.filter(match => match.key === 'title'))}</h4>
      <p class="text-gray-600">${highlightMatch(result.item.category, result.matches.filter(match => match.key === 'category'))}</p>
      ${formulaHTML}
      `;

      searchResultsList.appendChild(li);
    });

    // Ensure MathJax processes the newly added content
    MathJax.typesetPromise().then(() => {
      searchResultsContainer.style.display = 'block';
    }).catch(err => console.error("MathJax rendering error:", err));
  }
});

function highlightMatch(text, matches) {
  const matchedIndices = matches.flatMap(match => match.indices);
  let highlightedText = '';
  let lastIndex = 0;

  for (const [start, end] of matchedIndices) {
    highlightedText += text.slice(lastIndex, start);
    highlightedText += `<span class="bg-yellow-200">${text.slice(start, end + 1)}</span>`;
    lastIndex = end + 1;
  }
  highlightedText += text.slice(lastIndex);

  return highlightedText;
}

// Update the click handler for search results
searchResultsList.addEventListener('click', function(event) {
  const listItem = event.target.closest('li'); // Use closest to ensure we get the li element
  if (!listItem) return;

  const sectionId = listItem.getAttribute('data-section-id');
  if (sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Smooth scroll to the element
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Align the element to the top of the viewport
      });

      // Adjust the scroll position immediately after with smooth scroll
      const headerHeight = document.querySelector('.site-header').offsetHeight;
      const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Smooth scroll to the adjusted position
      });
    }

    // Clear search
    searchInput.value = '';
    searchResultsContainer.style.display = 'none';
    searchResultsList.innerHTML = '';
  }
});



// Get references to DOM elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const body = document.body;

// Only toggle menu when clicking the menu button
menuToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleSidebar();
});

// Only close menu when clicking the active overlay
overlay.addEventListener('click', function(e) {
  e.stopPropagation();
  if (sidebar.classList.contains('active')) {
    toggleSidebar();
  }
});

// Toggle sidebar function
function toggleSidebar() {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  body.classList.toggle('sidebar-open');
}

// Fix search functionality
searchInput.addEventListener('click', function(e) {
  e.stopPropagation(); // Prevent event from reaching document
});

searchResultsContainer.addEventListener('click', function(e) {
  e.stopPropagation(); // Prevent event from reaching document
});

// Fix sidebar initialization
function initializeSidebar() {
  if (window.innerWidth > 1024) {
    // Desktop view
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    overlay.style.display = 'none';
    body.classList.remove('sidebar-open');
  } else {
    // Mobile view
    if (!sidebar.classList.contains('active')) {
      overlay.style.display = 'block';
      overlay.classList.remove('active');
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeSidebar);

// Update on window resize
window.addEventListener('resize', initializeSidebar);

// FIXED: Ensure links work properly and close sidebar on mobile
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const headerOffset = 90;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    // Close sidebar on mobile
    if (window.innerWidth <= 1024 && sidebar.classList.contains('active')) {
      toggleSidebar();
    }
  });
});

// Close sidebar with escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidebar.classList.contains('active')) {
    toggleSidebar();
  }
});

// FIXED: Ensure overlay is properly hidden on larger screens
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('sidebar-open');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the visitor count element
  const visitorCountElement = document.getElementById('visitorCount');

  // If the element doesn't exist, exit early
  if (!visitorCountElement) {
    console.error('Visitor count element not found');
    return;
  }

  // Create a unique namespace specific to your site
  const namespace = 'sopheareachte.github.iomath-formula';
  const key = 'visits';

  // Check if this user has visited before
  let hasVisited = localStorage.getItem('hasVisited');

  if (!hasVisited) {
    // First visit - increment the counter
    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`CountAPI returned ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Counter updated:', data);
        visitorCountElement.textContent = data.value.toLocaleString();
        localStorage.setItem('hasVisited', 'true');
      })
      .catch(error => {
        console.error('Error updating visitor count:', error);
        visitorCountElement.textContent = 'Error';

        // Fallback to get request if hit fails
        fallbackGetCount(visitorCountElement, namespace, key);
      });
    } else {
      // Returning visitor - just get the current count
      fallbackGetCount(visitorCountElement, namespace, key);
    }

    function fallbackGetCount(element, ns, k) {
      fetch(`https://api.countapi.xyz/get/${ns}/${k}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`CountAPI returned ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Counter retrieved:', data);
          element.textContent = data.value.toLocaleString();
        })
        .catch(error => {
          console.error('Error fetching visitor count:', error);
          element.textContent = 'Error';
        });
      }
    });

    // Image overlay functionality
    const showImageBtn = document.getElementById('showImageBtn');
    const imageOverlay = document.getElementById('imageOverlay');
    const closeImageBtn = document.getElementById('closeImageBtn');

    showImageBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      imageOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when overlay is open
    });

    function closeImageOverlay() {
      imageOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }

    closeImageBtn.addEventListener('click', closeImageOverlay);

    imageOverlay.addEventListener('click', function(e) {
      if (e.target === imageOverlay) {
        closeImageOverlay();
      }
    });

    // Close overlay with escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && imageOverlay.classList.contains('active')) {
        closeImageOverlay();
      }
    });

    // Add this special angles map
    const specialAngles = {
      0: {
        sin: '0',
        cos: '1',
        tan: '0'
      },
      30: {
        sin: '\\frac{1}{2}',
        cos: '\\frac{\\sqrt{3}}{2}',
        tan: '\\frac{\\sqrt{3}}{3}'
      },
      45: {
        sin: '\\frac{\\sqrt{2}}{2}',
        cos: '\\frac{\\sqrt{2}}{2}',
        tan: '1'
      },
      60: {
        sin: '\\frac{\\sqrt{3}}{2}',
        cos: '\\frac{1}{2}',
        tan: '\\sqrt{3}'
      },
      90: {
        sin: '1',
        cos: '0',
        tan: 'undefined'
      },
      120: {
        sin: '\\frac{\\sqrt{3}}{2}',
        cos: '-\\frac{1}{2}',
        tan: '-\\sqrt{3}'
      },
      135: {
        sin: '\\frac{\\sqrt{2}}{2}',
        cos: '-\\frac{\\sqrt{2}}{2}',
        tan: '-1'
      },
      150: {
        sin: '\\frac{1}{2}',
        cos: '-\\frac{\\sqrt{3}}{2}',
        tan: '-\\frac{\\sqrt{3}}{3}'
      },
      180: {
        sin: '0',
        cos: '-1',
        tan: '0'
      },
      210: {
        sin: '-\\frac{1}{2}',
        cos: '-\\frac{\\sqrt{3}}{2}',
        tan: '\\frac{\\sqrt{3}}{3}'
      },
      225: {
        sin: '-\\frac{\\sqrt{2}}{2}',
        cos: '-\\frac{\\sqrt{2}}{2}',
        tan: '1'
      },
      240: {
        sin: '-\\frac{\\sqrt{3}}{2}',
        cos: '-\\frac{1}{2}',
        tan: '\\sqrt{3}'
      },
      270: {
        sin: '-1',
        cos: '0',
        tan: 'undefined'
      },
      300: {
        sin: '-\\frac{\\sqrt{3}}{2}',
        cos: '\\frac{1}{2}',
        tan: '-\\sqrt{3}'
      },
      315: {
        sin: '-\\frac{\\sqrt{2}}{2}',
        cos: '\\frac{\\sqrt{2}}{2}',
        tan: '-1'
      },
      330: {
        sin: '-\\frac{1}{2}',
        cos: '\\frac{\\sqrt{3}}{2}',
        tan: '-\\frac{\\sqrt{3}}{3}'
      },
      360: {
        sin: '0',
        cos: '1',
        tan: '0'
      }
    };

    // Add this function right after the specialAngles object
    function findClosestSpecialAngle(angle) {
      const specialAnglesArray = Object.keys(specialAngles).map(Number);
      return specialAnglesArray.reduce((prev, curr) => {
        return (Math.abs(curr - angle) < Math.abs(prev - angle) ? curr : prev);
      });
    }

    // Update the updateValues function to properly handle LaTeX rendering
    function updateValues(angle) {
      const radians = (angle * Math.PI) / 180;
      const sin = Math.sin(radians);
      const cos = Math.cos(radians);
      const tan = Math.tan(radians);

      // Update angle display based on selected unit
      if (angleUnit.value === 'degrees') {
        angleValue.textContent = `${angle.toFixed(1)}°`;
      } else {
        angleValue.textContent = `${radians.toFixed(3)} rad`;
      }

      sinValue.textContent = sin.toFixed(3);
      cosValue.textContent = cos.toFixed(3);
      tanValue.textContent = Math.abs(tan) > 100 ? '∞' : tan.toFixed(3);

      // Check for special angles
      const closestSpecialAngle = findClosestSpecialAngle(angle);
      if (Math.abs(closestSpecialAngle - angle) <= 2) {
        const exact = specialAngles[closestSpecialAngle];
        sinExact.innerHTML = `= \\(${exact.sin}\\)`;
        cosExact.innerHTML = `= \\(${exact.cos}\\)`;
        tanExact.innerHTML = exact.tan === 'undefined' ?
        '= undefined' :
        `= \\(${exact.tan}\\)`;

        // Render LaTeX
        MathJax.typesetPromise([sinExact, cosExact, tanExact]).catch((err) => {
          console.error('MathJax error:', err);
        });
      } else {
        sinExact.textContent = '';
        cosExact.textContent = '';
        tanExact.textContent = '';
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      const canvas = document.getElementById('unitCircle');
      const ctx = canvas.getContext('2d');
      const angleInput = document.getElementById('angleSlider');
      const angleUnit = document.getElementById('angleUnit');
      const angleValue = document.getElementById('angleValue');
      const sinValue = document.getElementById('sinValue');
      const cosValue = document.getElementById('cosValue');
      const tanValue = document.getElementById('tanValue');
      const sinExact = document.getElementById('sinExact');
      const cosExact = document.getElementById('cosExact');
      const tanExact = document.getElementById('tanExact');

      // Set canvas size
      canvas.style.width = '300px';
      canvas.style.height = '300px';
      canvas.width = 300 * window.devicePixelRatio;
      canvas.height = 300 * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      const centerX = 150;
      const centerY = 150;
      const radius = 120;

      let isDragging = false;

      function drawUnitCircle(angle) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw coordinate axes
        ctx.beginPath();
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.moveTo(0, centerY);
        ctx.lineTo(300, centerY);
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, 300);
        ctx.stroke();

        // Draw circle
        ctx.beginPath();
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2;
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();

        // Convert angle to radians
        const radians = (angle * Math.PI) / 180;

        // Calculate point on circle
        const x = centerX + radius * Math.cos(radians);
        const y = centerY - radius * Math.sin(radians);

        // Draw angle arc
        ctx.beginPath();
        ctx.strokeStyle = '#93c5fd';
        ctx.lineWidth = 2;
        ctx.arc(centerX, centerY, 30, 0, -radians, true);
        ctx.stroke();

        // Draw radius line
        ctx.beginPath();
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        // Draw point
        ctx.beginPath();
        ctx.fillStyle = '#2563eb';
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fill();

        // Draw sin line
        ctx.beginPath();
        ctx.strokeStyle = '#059669';
        ctx.setLineDash([4, 4]);
        ctx.moveTo(x, y);
        ctx.lineTo(x, centerY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw cos line
        ctx.beginPath();
        ctx.strokeStyle = '#dc2626';
        ctx.setLineDash([4, 4]);
        ctx.moveTo(x, y);
        ctx.lineTo(centerX, y);
        ctx.stroke();
        ctx.setLineDash([]);

        updateValues(angle);
      }

      // Input event handler
      angleInput.addEventListener('input', function() {
        let value = parseFloat(this.value) || 0;
        const unit = angleUnit.value;

        if (unit === 'degrees') {
          value = value % 360;
          if (value < 0) value += 360;
          drawUnitCircle(value);
        } else {
          let degrees = (value * 180 / Math.PI) % 360;
          if (degrees < 0) degrees += 360;
          drawUnitCircle(degrees);
        }
      });

      // Unit change handler
      angleUnit.addEventListener('change', function() {
        const currentValue = parseFloat(angleInput.value) || 0;

        if (this.value === 'radians') {
          angleInput.value = ((currentValue * Math.PI) / 180).toFixed(3);
          angleInput.step = '0.001';
        } else {
          angleInput.value = ((currentValue * 180) / Math.PI).toFixed(1);
          angleInput.step = '0.1';
        }

        const degrees = this.value === 'degrees' ?
        currentValue :
        (currentValue * 180 / Math.PI);
        drawUnitCircle(degrees % 360);
      });

      // Add this function right after the drawUnitCircle function
      function getAngleFromMouse(event) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;    // relationship bitmap vs. element for X
        const scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

        const x = (event.clientX - rect.left) * scaleX / window.devicePixelRatio - centerX;
        const y = centerY - (event.clientY - rect.top) * scaleY / window.devicePixelRatio;

        let angle = Math.atan2(y, x) * 180 / Math.PI;
        if (angle < 0) angle += 360;
        return angle;
      }

      // Update the mouse event handlers
      canvas.addEventListener('mousedown', function(event) {
        isDragging = true;
        const angle = getAngleFromMouse(event);
        if (angleUnit.value === 'degrees') {
          angleInput.value = angle.toFixed(1);
        } else {
          angleInput.value = ((angle * Math.PI) / 180).toFixed(3);
        }
        drawUnitCircle(angle);
      });

      canvas.addEventListener('mousemove', function(event) {
        if (!isDragging) return;
        const angle = getAngleFromMouse(event);
        if (angleUnit.value === 'degrees') {
          angleInput.value = angle.toFixed(1);
        } else {
          angleInput.value = ((angle * Math.PI) / 180).toFixed(3);
        }
        drawUnitCircle(angle);
      });

      // Add touch event handlers for mobile support
      canvas.addEventListener('touchstart', function(event) {
        event.preventDefault();
        isDragging = true;
        const touch = event.touches[0];
        const angle = getAngleFromMouse(touch);
        if (angleUnit.value === 'degrees') {
          angleInput.value = angle.toFixed(1);
        } else {
          angleInput.value = ((angle * Math.PI) / 180).toFixed(3);
        }
        drawUnitCircle(angle);
      });

      canvas.addEventListener('touchmove', function(event) {
        event.preventDefault();
        if (!isDragging) return;
        const touch = event.touches[0];
        const angle = getAngleFromMouse(touch);
        if (angleUnit.value === 'degrees') {
          angleInput.value = angle.toFixed(1);
        } else {
          angleInput.value = ((angle * Math.PI) / 180).toFixed(3);
        }
        drawUnitCircle(angle);
      });

      canvas.addEventListener('touchend', () => isDragging = false);
      canvas.addEventListener('touchcancel', () => isDragging = false);

      // Initial draw
      drawUnitCircle(0);
    });
