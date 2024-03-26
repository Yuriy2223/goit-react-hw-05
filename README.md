еню курсу
Пошук

Завдання очікує виконання

Дедлайн
24 берез. 2024 р., 23:45


Створіть репозиторій з назвою goit-react-hw-05
При здачі домашньої роботи надайте два посилання: одне на вихідні файли та інше на робочу сторінку завдання на Vercel.
Проект повинен бути створений за допомогою Vite.
Під час запуску коду завдання в консолі не повинно бути помилок або попереджень.
Для кожного компонента у папці src/components є окрема папка, яка містить JSX файл самого React компонента та файл його стилів. Назва папки, файла компонента (з розширенням .jsx) та файла стилів (перед .module.css) однакова і відповідає назвам, вказаним у завданнях (якщо вони були)
Для кожної сторінки у папці src/pages є окрема папка, яка містить JSX файл самого React компонента та файл його стилів. Назва папки, файла компонента (з розширенням .jsx) та файла стилів (перед .module.css) однакова і відповідає назвам, вказаним у завданнях (якщо вони були).
Для експорту компонентів використовується експорт за замовчуванням (export default).
JS-код має бути чистим і зрозумілим, використовуйте Prettier.
Стилізація повинна бути виконана за допомогою CSS-модулів.


Кінопошук

Напиши застосунок із маршрутизацією для пошуку фільмів за назвою. Подивіться демо-відео роботи застосунку.![alt text](image.png) ![alt text](image-1.png)![alt text](image-2.png)
![alt text](image-1.png)
Сервіс пошуку фільмів



В цьому завданні, за допомогою HTTP-запитів, ти будеш отримувати фільми з сервісу TMDB. Зареєструй аккаунт (можна ввести довільні дані), щоб отримати доступ до документації та ключ доступу для HTTP-запитів.

Корисні для тебе розділи документації:

Trending movies - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
Search movie - пошук фільму за ключовим словом на сторінці фільмів.
Movie details - запит повної інформації про фільм для сторінки кінофільму.
Movie credits - запит інформації про акторський склад для сторінки кінофільму.
Movie reviews - запит оглядів для сторінки кінофільму.




Токен доступу



Токен доступу повинен долучатися до кожного запиту у вигляді HTTP-заголовка Authorization, ось приклад.

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer api_read_access_token'
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));

Токен доступу отримується з розділу "API Read Access Token" на сторінці API.![alt text](image-3.png)

Шлях до зображень



Бекенд буде надсилати замість повноцінного посилання на зображення, наприклад для плаката фільму, отакі рядки, тобто просто ім'я файлу.



/1E5baAaEse26fej7uHcjOgEE2t2.jpg



Для складання повного шляху до зображення тобі необхідно ознайомитися з розділом документації, присвяченим цьому питанню.

Якщо коротко, то необхідно вручну додати шлях перед ім'ям зображення. В результаті у тебе вийде повноцінне посилання на зображення.



https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg



Навігація в додатку



У застосунку обов'язково повинні бути наступні маршрути.



'/' – компонент HomePage, домашня сторінка із списком популярних кінофільмів.
'/movies' – компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
'/movies/:movieId' – компонент MovieDetailsPage, сторінка із детальною інформацією про кінофільм.
/movies/:movieId/cast – компонент MovieCast, інформація про акторський склад. Рендериться в нижній частині на сторінці MovieDetailsPage.
/movies/:movieId/reviews – компонент MovieReviews, інформація про огляди. Рендериться в нижній частині на сторінці MovieDetailsPage.
Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент NotFoundPage, в якому є посилання Link на домашню сторінку.


Файли, папки та компоненти:



Файли компонентів сторінок, таких як HomePage, MoviesPage, MovieDetailsPage, NotFoundPage, повинні бути в папці src/pages.
Компоненти MovieCast і MovieReviews не є окремими сторінками, вони є лише частинами сторінки MovieDetailsPage, тому файли цих компонентів зберігаємо в src/components.
Меню з навігаційними посиланнями перенесіть в компонент Navigation. Він складається з двох компонентів NavLink, які вказують на маршрути / і /movies.
Для відображення списку фільмів створіть компонент MovieList. Використовуйте його на сторінках HomePage і MoviesPage.




Поділ коду



Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy та Suspense.