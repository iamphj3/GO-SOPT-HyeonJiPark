import { $, $$ } from '../utils/querySelector';

function My($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
          <main class="myPage">
            <section class="myCategory">
              <h1>MY CATEGORY</h1>
              <ul>
                <li class="category today" draggable="true">TODAY</li>
                <li class="category todo" draggable="true">TODO</li>
                <li class="category study" draggable="true">STUDY</li>
                <li class="category sopt" draggable="true">SOPT</li>
              </ul>
            </section>
          </main>
        `;

    const categories = document.querySelectorAll('.category');

    let draggedItem = null;

    categories.forEach((category) => {
      category.addEventListener('dragstart', () => {
        draggedItem = category;
        category.classList.add('dragging');
      });

      category.addEventListener('dragover', (e) => {
        e.preventDefault();
        const bounding = category.getBoundingClientRect();
        const offset = bounding.y + bounding.height / 2;
        if (e.clientY > offset) {
          category.classList.add('drop-after');
        } else {
          category.classList.remove('drop-after');
        }
      });

      category.addEventListener('dragleave', () => {
        category.classList.remove('drop-after');
      });

      category.addEventListener('drop', () => {
        const dropAfter = category.classList.contains('drop-after');
        if (draggedItem !== category) {
          if (dropAfter) {
            category.after(draggedItem);
          } else {
            category.before(draggedItem);
          }
        }
        category.classList.remove('drop-after');
      });

      category.addEventListener('dragend', () => {
        draggedItem.classList.remove('dragging');
        draggedItem = null;
      });
    });
  };
  this.render();
}

export default My;
