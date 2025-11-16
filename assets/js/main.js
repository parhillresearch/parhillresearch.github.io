// Par Hill Research - Main JavaScript

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav')) {
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // Simple search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const searchResults = document.getElementById('search-results');

            if (searchTerm.length < 2) {
                searchResults.innerHTML = '';
                return;
            }

            // Fetch and search through posts
            fetch('/search.json')
                .then(response => response.json())
                .then(data => {
                    const results = data.filter(post =>
                        post.title.toLowerCase().includes(searchTerm) ||
                        post.content.toLowerCase().includes(searchTerm) ||
                        post.categories.some(cat => cat.toLowerCase().includes(searchTerm))
                    );

                    displaySearchResults(results, searchResults);
                })
                .catch(error => console.error('Search error:', error));
        });
    }
});

function displaySearchResults(results, container) {
    if (results.length === 0) {
        container.innerHTML = '<p>No results found.</p>';
        return;
    }

    const html = results.map(post => `
        <div class="blog-card">
            <div class="blog-card-meta">
                <time>${post.date}</time>
                ${post.categories.length > 0 ? ' • ' + post.categories.join(', ') : ''}
            </div>
            <h3 class="blog-card-title">
                <a href="${post.url}">${post.title}</a>
            </h3>
            <p class="blog-card-excerpt">${post.excerpt}</p>
            <a href="${post.url}" class="read-more">Read more →</a>
        </div>
    `).join('');

    container.innerHTML = html;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
