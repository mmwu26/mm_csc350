document.addEventListener("DOMContentLoaded", () => {
  const artistInfo = [
    {
      singer: "Paul Van Haver",
      dob: "03/12/1985",
      bestSongs: "Tous Les Memes, Sommeil",
    },

    {
      singer: "Beyoncé Giselle Knowles-Carter",
      dob: "09/04/1981",
      bestSongs: "Crazy in Love, Cuff It",
    },

    {
      singer: "Brandon Boyd",
      dob: "02/15/1976",
      bestSongs: "Dig, Nice to Know You",
    },

    {
      singer: "Hayley Nichole Williams",
      dob: "12/27/1988",
      bestSongs: "Ain't It Fun, The Only Exception",
    },
  ];

  const populateTable = document.querySelector("#singers-table");

  for (const artist of artistInfo) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${artist.singer}</td>
        <td>${artist.dob}</td>
        <td>${artist.bestSongs}</td>`;

    populateTable.appendChild(row);
  }
});
