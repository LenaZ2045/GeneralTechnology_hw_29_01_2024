// В рамках БД "music" напишите след/запросы:

// Task #1
// Вывести юзеров из France

db.getCollection("users").find({
    country: "France"
})

// Task #2
// Добавить несколько треков (tracks)

db.getCollection("tracks").insertMany([
{_id: 6, title: "Only you", duration_secs: 2.51 * 60},
{_id: 7, title: "I surrender", duration_secs: 5.17 * 60},
{_id: 8, title: "Friends", duration_secs: 2.24 * 60},
{_id: 9, title: "Imagine Me Without You", duration_secs: 4.15 * 60}
])

// Task #3
// Приведите десять типовых бизнес-процессов для интернет-магазина и их соответствие методам Mongodb

// file:///C:/Users/bogyp/Downloads/ONLINE-STORE-Diagram.drawio.html (my answer should be opened by copying the html link and opening it in your browser)

// Task #4
// Коротко приведите явные ошибки, допущенные при проектировании, в этой схеме БД
// https://dbdiagram.io/d/appwitherrors-65b740f2ac844320aee99837

// 1st mistake: reactions.author_id < users.id
// should be: users.id < reactions.author_id instead (meaning one users.id may have many reactions.authors_id)

// 2nd mistake: users.id < tracks.id
// should be: users.id < tracks.author_id instead (meaning one users.id may have many tracks.authors_id)

// 3rd mistake: field age is sensitive to changes (remove this field)

// 4th mistake: good to add track_id at the reactions table
// and write relation tracks.id < reactions.tracks_id (meaning one track.id may have many reactions.track_id)

// 5th mistake: redundant field reaction_id at the tracks table

// 6th mistake: password field at the users table need more clarification