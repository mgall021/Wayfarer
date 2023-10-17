interface Cities {
  id: number;
  name: string;
  country: string;
  url: string;
  posts: Array<Post>;
}
interface Post {
  // id: number,
  title: string,
  date: Date,
  img: string,
  body: string
}

export const cities: Cities[] = [
  {
    id: 1,
    name: 'London',
    country: 'England',
    url: 'https://imgs.search.brave.com/ffKKkrm_V3IFDaiF-CV031UzeCPORddTPJhcjt9oaJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU1/NDQ1MzEyL3Bob3Rv/L2xvbmRvbi1vbi10/aGUtbW92ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZzRD/bEwydGpIQTJOSm5o/M3RlMmM5ZFM5ZHVq/WGs3QkJ6WDBhYU4z/OGRVcz0',
    posts: [
      {
        title: 'Food Truck Festival',
        date: new Date('2023-10-17'),
        img: 'https://imgs.search.brave.com/y_QespkopNalyS50WamQ6dr6bDPQ976PQB7fdMqVN7Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWF0aW5nZXVyb3Bl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNy9iZWxs/LWFuZC1icmlza2V0/dC5qcGc',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Sociis natoque penatibus et magnis dis parturient montes nascetur. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Et malesuada fames ac turpis egestas sed. Lacinia at quis risus sed vulputate odio ut. Id ornare arcu odio ut sem nulla pharetra diam. Morbi tempus iaculis urna id volutpat lacus laoreet non. Arcu ac tortor dignissim convallis. Tristique nulla aliquet enim tortor. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nulla facilisi cras fermentum odio eu feugiat. Laoreet suspendisse interdum consectetur libero id faucibus. Amet est placerat in egestas erat. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nisi lacus sed viverra tellus in hac. Nulla facilisi morbi tempus iaculis urna id. Eu nisl nunc mi ipsum faucibus vitae aliquet. Feugiat in fermentum posuere urna nec tincidunt.<br>' +
          ' Volutpat sed cras ornare arcu dui vivamus. At tellus at urna condimentum mattis pellentesque. Turpis egestas maecenas pharetra convallis posuere morbi leo. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Massa sed elementum tempus egestas sed sed risus pretium quam. Tempor id eu nisl nunc mi ipsum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Nam aliquam sem et tortor consequat id porta. Nec tincidunt praesent semper feugiat nibh sed. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Feugiat in ante metus dictum at. Consequat id porta nibh venenatis cras sed felis eget velit. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
      },
      {
        title: 'Best Restuarants in London',
        date: '2023-08-14',
        img: 'https://www.insidehook.com/wp-content/uploads/2019/11/Best_New_Restaurants_SF.png?fit=1200%2C800',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Sociis natoque penatibus et magnis dis parturient montes nascetur. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Et malesuada fames ac turpis egestas sed. Lacinia at quis risus sed vulputate odio ut. Id ornare arcu odio ut sem nulla pharetra diam. Morbi tempus iaculis urna id volutpat lacus laoreet non. Arcu ac tortor dignissim convallis. Tristique nulla aliquet enim tortor. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nulla facilisi cras fermentum odio eu feugiat. Laoreet suspendisse interdum consectetur libero id faucibus. Amet est placerat in egestas erat. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nisi lacus sed viverra tellus in hac. Nulla facilisi morbi tempus iaculis urna id. Eu nisl nunc mi ipsum faucibus vitae aliquet. Feugiat in fermentum posuere urna nec tincidunt.<br>' +
          ' Volutpat sed cras ornare arcu dui vivamus. At tellus at urna condimentum mattis pellentesque. Turpis egestas maecenas pharetra convallis posuere morbi leo. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Massa sed elementum tempus egestas sed sed risus pretium quam. Tempor id eu nisl nunc mi ipsum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Nam aliquam sem et tortor consequat id porta. Nec tincidunt praesent semper feugiat nibh sed. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Feugiat in ante metus dictum at. Consequat id porta nibh venenatis cras sed felis eget velit. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
      },
    ],
  },
  {
    id: 2,
    name: 'Sydney',
    country: 'Australia',
    url: 'https://imgs.search.brave.com/QwZ4JwTs01xy2PMx-NRE9lKdalsBV5NXtKRZbmgO3tw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzI3LzUxLzU5/LzM2MF9GXzYyNzUx/NTkzM19QQ2hrQldt/VUt6SkVDcTdySmdQ/MmlCcG5NWm5YMmFP/RC5qcGc',
    posts: [
      {
        title: 'The Coolest Pumpkin Patch Of The Year',
        date: new Date('2023-07-07'),
        img: 'https://www.thespruce.com/thmb/1cjfPKkIKwHbhF8EdBt6vB5L8Jc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-grow-pumpkins-1403469_02-404daba1576c4de892a4435a6a26eb81.jpg',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Sociis natoque penatibus et magnis dis parturient montes nascetur. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Et malesuada fames ac turpis egestas sed. Lacinia at quis risus sed vulputate odio ut. Id ornare arcu odio ut sem nulla pharetra diam. Morbi tempus iaculis urna id volutpat lacus laoreet non. Arcu ac tortor dignissim convallis. Tristique nulla aliquet enim tortor. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nulla facilisi cras fermentum odio eu feugiat. Laoreet suspendisse interdum consectetur libero id faucibus. Amet est placerat in egestas erat. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nisi lacus sed viverra tellus in hac. Nulla facilisi morbi tempus iaculis urna id. Eu nisl nunc mi ipsum faucibus vitae aliquet. Feugiat in fermentum posuere urna nec tincidunt.<br>' +
          ' Volutpat sed cras ornare arcu dui vivamus. At tellus at urna condimentum mattis pellentesque. Turpis egestas maecenas pharetra convallis posuere morbi leo. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Massa sed elementum tempus egestas sed sed risus pretium quam. Tempor id eu nisl nunc mi ipsum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Nam aliquam sem et tortor consequat id porta. Nec tincidunt praesent semper feugiat nibh sed. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Feugiat in ante metus dictum at. Consequat id porta nibh venenatis cras sed felis eget velit. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
      },

      {
        title: 'A Guide To Sydney',
        date: new Date('2023-09-15'),
        img: 'https://justglobetrotting.com/wp-content/uploads/2019/05/sydney-travel-guide-itinerary-1-2-days.jpg',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Sociis natoque penatibus et magnis dis parturient montes nascetur. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Et malesuada fames ac turpis egestas sed. Lacinia at quis risus sed vulputate odio ut. Id ornare arcu odio ut sem nulla pharetra diam. Morbi tempus iaculis urna id volutpat lacus laoreet non. Arcu ac tortor dignissim convallis. Tristique nulla aliquet enim tortor. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nulla facilisi cras fermentum odio eu feugiat. Laoreet suspendisse interdum consectetur libero id faucibus. Amet est placerat in egestas erat. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nisi lacus sed viverra tellus in hac. Nulla facilisi morbi tempus iaculis urna id. Eu nisl nunc mi ipsum faucibus vitae aliquet. Feugiat in fermentum posuere urna nec tincidunt.<br>' +
          ' Volutpat sed cras ornare arcu dui vivamus. At tellus at urna condimentum mattis pellentesque. Turpis egestas maecenas pharetra convallis posuere morbi leo. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Massa sed elementum tempus egestas sed sed risus pretium quam. Tempor id eu nisl nunc mi ipsum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Nam aliquam sem et tortor consequat id porta. Nec tincidunt praesent semper feugiat nibh sed. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Feugiat in ante metus dictum at. Consequat id porta nibh venenatis cras sed felis eget velit. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
      },
    ],
  },
  {
    id: 3,
    name: 'San Francisco',
    country: 'United States',
    url: 'https://imgs.search.brave.com/jxNFo1IBQxQdyE_E2hSzSt_Hr5Gh76PdZkBxAKGhae4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/NDc2NjcwL3Bob3Rv/L3Nhbi1mcmFuY2lz/Y28tc2t5bGluZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MnFXT0F3Rkx0aG1L/X2g5eHMtelhMbWhq/ZlhoaFVNYWdSRVEx/SkpENFdNbz0',
    posts: [
      {
        title: 'Best Restaurants in the Bay Area',
        date: new Date('2023-10-17'),
        img: 'https://ww2.kqed.org/app/uploads/sites/24/2017/07/auberge-1.jpg',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Sociis natoque penatibus et magnis dis parturient montes nascetur. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Et malesuada fames ac turpis egestas sed. Lacinia at quis risus sed vulputate odio ut. Id ornare arcu odio ut sem nulla pharetra diam. Morbi tempus iaculis urna id volutpat lacus laoreet non. Arcu ac tortor dignissim convallis. Tristique nulla aliquet enim tortor. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nulla facilisi cras fermentum odio eu feugiat. Laoreet suspendisse interdum consectetur libero id faucibus. Amet est placerat in egestas erat. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nisi lacus sed viverra tellus in hac. Nulla facilisi morbi tempus iaculis urna id. Eu nisl nunc mi ipsum faucibus vitae aliquet. Feugiat in fermentum posuere urna nec tincidunt.<br>' +
          ' Volutpat sed cras ornare arcu dui vivamus. At tellus at urna condimentum mattis pellentesque. Turpis egestas maecenas pharetra convallis posuere morbi leo. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Massa sed elementum tempus egestas sed sed risus pretium quam. Tempor id eu nisl nunc mi ipsum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Nam aliquam sem et tortor consequat id porta. Nec tincidunt praesent semper feugiat nibh sed. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Feugiat in ante metus dictum at. Consequat id porta nibh venenatis cras sed felis eget velit. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
      },
    ],
  },
  {
    id: 4,
    name: 'Seattle',
    country: 'United States',
    url: 'https://imgs.search.brave.com/C-oLXxKFXDuINk6YDWFNhpooDe5ES5xemyOQ4lN-LrQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMw/ODc0Mzc5L3Bob3Rv/L3NlYXR0bGUtYXQt/c3Vuc2V0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1icFEx/U1pZdzdPQmRaSlNI/amFUTzA0cFJmUXIw/ajRtZ0JubVhJVW1V/Mm1VPQ',
    posts: [
      {
        title: 'Food & Lifestyle',
        date: new Date('2023-09-13'),
        img: 'https://images.everydayhealth.com/images/why-are-healthy-eating-habits-important-alt-badge-722x406.jpg?sfvrsn=3f8bb652_6',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Sociis natoque penatibus et magnis dis parturient montes nascetur. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Et malesuada fames ac turpis egestas sed. Lacinia at quis risus sed vulputate odio ut. Id ornare arcu odio ut sem nulla pharetra diam. Morbi tempus iaculis urna id volutpat lacus laoreet non. Arcu ac tortor dignissim convallis. Tristique nulla aliquet enim tortor. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nulla facilisi cras fermentum odio eu feugiat. Laoreet suspendisse interdum consectetur libero id faucibus. Amet est placerat in egestas erat. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nisi lacus sed viverra tellus in hac. Nulla facilisi morbi tempus iaculis urna id. Eu nisl nunc mi ipsum faucibus vitae aliquet. Feugiat in fermentum posuere urna nec tincidunt.<br>' +
          ' Volutpat sed cras ornare arcu dui vivamus. At tellus at urna condimentum mattis pellentesque. Turpis egestas maecenas pharetra convallis posuere morbi leo. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Massa sed elementum tempus egestas sed sed risus pretium quam. Tempor id eu nisl nunc mi ipsum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Nam aliquam sem et tortor consequat id porta. Nec tincidunt praesent semper feugiat nibh sed. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Feugiat in ante metus dictum at. Consequat id porta nibh venenatis cras sed felis eget velit. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
      },
    ],
  },
];
