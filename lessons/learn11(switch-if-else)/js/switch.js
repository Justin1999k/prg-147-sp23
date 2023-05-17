function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = document.getElementById("month").value;
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);

    // Determine Chinese zodiac year.
    switch (year) {
        case 1924:
        case 1936:
        case 1948:
        case 1960:
        case 1972:
        case 1984:
        case 1996:
        case 2008:
        case 2020:
        case 2032:
            chi = "Rat";
            break;
        case 1925:
        case 1937:
        case 1949:
        case 1961:
        case 1973:
        case 1985:
        case 1997:
        case 2009:
        case 2021:
        case 2033:
            chi = "Ox";
            break;
        case 1926:
        case 1938:
        case 1950:
        case 1962:
        case 1974:
        case 1986:
        case 1998:
        case 2010:
        case 2022:
        case 2034:
            chi = "Tiger";
            break;
        case 1927:
        case 1939:
        case 1951:
        case 1963:
        case 1975:
        case 1987:
        case 1999:
        case 2011:
        case 2023:
            chi = "Rabbit";
            break;
        case 1928:
        case 1940:
        case 1952:
        case 1964:
        case 1976:
        case 1988:
        case 2000:
        case 2012:
        case 2024:
            chi = "Dragon";
            break;
        case 1929:
        case 1941:
        case 1953:
        case 1965:
        case 1977:
        case 1989:
        case 2001:
        case 2013:
        case 2025:
            chi = "Snake";
            break;
        case 1930:
        case 1942:
        case 1954:
        case 1966:
        case 1978:
        case 1990:
        case 2002:
        case 2014:
        case 2026:
            chi = "Horse";
            break;
        case 1931:
        case 1943:
        case 1955:
        case 1967:
        case 1979:
        case 1991:
        case 2003:
        case 2015:
        case 2027:
            chi = "Goat";
            break;
        case 1932:
        case 1944:
        case 1956:
        case 1968:
        case 1980:
        case 1992:
        case 2004:
        case 2016:
        case 2028:
            chi = "Monkey";
            break;
        case 1933:
        case 1945:
        case 1957:
        case 1969:
        case 1981:
        case 1993:
        case 2005:
        case 2017:
        case 2029:
            chi = "Rooster";
            break;
        case 1934:
        case 1946:
        case 1958:
        case 1970:
        case 1982:
        case 1994:
        case 2006:
        case 2018:
        case 2030:
            chi = "Dog";
            break;
        case 1935:
        case 1947:
        case 1959:
        case 1971:
        case 1983:
        case 1995:
        case 2007:
        case 2019:
        case 2031:
            chi = "Pig";
            break;
    }

    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;

    // Determine zodiac sign.
    switch(month.toUpperCase()) {
        case "MARCH":
            if (date >= 21) {
                document.getElementById("zodiac").innerHTML = "Aries";
            }
            else {
                document.getElementById("zodiac").innerHTML = "Pisces";
            }
            break;
        case "APRIL":
            if (date >= 20) {
                document.getElementById("zodiac").innerHTML = "Taurus";                
            }
            else {
                document.getElementById("zodiac").innerHTML = "Aries";
            }
            break;
        case "MAY":
            if (date >= 21) {
                document.getElementById("zodiac").innerHTML = "Gemini";
            }
            else {
                document.getElementById("zodiac").innerHTML = "Taurus";
            }
            break;
        case "JUNE":
            if (date >= 21) {
                document.getElementById("zodiac").innerHTML = "Cancer";
            }
            else {
                document.getElementById("zodiac").innerHTML = "Gemini";
            }
            break;
        case "JULY":
            if (date >= 23) {
                document.getElementById("zodiac").innerHTML = "Leo";
            }
            else {
                document.getElementById("zodiac").innerHTML = "Cancer";
            }
            break;
        case "AUGUST":
            if (date >= 23) {
                document.getElementById("zodiac").innerHTML = "Virgo";
            }
            else {
                document.getElementById("zodiac").innerHTML = "Leo";
            }
            break;
        case "SEPTEMBER":
            if (date >= 23) {
                document.getElementById("zodiac").innerHTML = "Libra";
            }
            else {
                document.getElementById("zodiac").innerHTML = "Virgo";
            }
            break;
        case "OCTOBER":
            if ( date >= 23) {
                document.getElementById("zodiac").innerHTML = "Scorpio";
            }
            else {
                document.getElementById("zodiac").innerHTML = "Libra";
            }
            break;
        case "NOVEMBER":
            if (date >= 22) {
                document.getElementById("zodiac").innerHTML = "Sagittarius";
            }
            else {
                document.getElementById("zodiac").innerHTML = "Scorpio";
            }
            break;
        case "DECEMBER":
            if (date >= 21) {
                document.getElementById("zodiac").innerHTML = "Capricorn";
            }
            else {
                document.getElementById("zodiac").innerHTML = "Sagittarius";
            }
            break;
        case "JANUARY":
            if (date >= 21) {
                document.getElementById("zodiac").innerHTML = "Aquarius";
            }
            else {
                document.getElementById("zodiac").innerHTML = "Capricorn";
            }
            break;
        case "FEBRUARY":
            if (date >= 19) {
                document.getElementById("zodiac").innerHTML = "Pisces";
            }
            else {
                document.getElementById("zodiac").innerHTML = "Aquarius";
            }
    }
}