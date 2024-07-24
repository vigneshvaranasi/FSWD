let usernames = [
    { username: 'Paidimukkula_Lavanya' },
    { username: 'siddhuparsa99' },
    { username: 'parvataneniamulya' },
    { username: 'harshabambu27' },
    { username: 'pavankc' },
    { username: 'mahesh07' },
    { username: 'harshitha.17' },
    { username: 'nikhilpolimetla8' },
    { username: 'thrinath123' },
    { username: 'nikitha_1710' },
    { username: '22501a05f2' },
    { username: 'akshitha1503' },
    { username: 'sairoshini' },
    { username: 'suryaharshasambhana5' },
    { username: 'yaswanthsaisanapala' },
    { username: 'shaikfakruddin2145' },
    { username: '22501a05g2' },
    { username: '22501a05g7' },
    { username: 's.udaybhaskar2005' },
    { username: 'syamprasadreddysomula' },
    { username: 'sarath7893' },
    { username: 'Latheef8' },
    { username: 'muhammadafzal' },
    { username: 'samanvitha18' },
    { username: 'tej_mahendra' },
    { username: 'yogitha543' },
    { username: 'tungala_revanth' },
    { username: 'vvsvignesh' },
    { username: 'veerankisirisha' },
    { username: 'eswar1357' }
];

let requestCount = 0;

async function fetchSam(username, retries = 5, delayTime = 500) {
    try {
        let response = await fetch(`https://codeforces.com/api/user.rating?handle=${username}`);
        requestCount++;
        if (response.status === 429 || response.status === 503) {
            if (retries > 0) {
                console.log(`Rate limit or service unavailable after ${requestCount} requests. Retrying in ${delayTime / 1000} seconds...`);
                await delay(delayTime);
                return fetchSam(username, retries - 1, delayTime * 2); // Exponential backoff
            } else {
                throw new Error('Maximum retries reached');
            }
        }
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            let res = await response.json();
            let allContests = res.result;
            let attendedContests = allContests.reverse();
            return { username, attendedContests };
        } else {
            throw new Error('Received non-JSON response');
        }
    } catch (error) {
        console.error(`Failed to fetch data for ${username}:`, error);
        return { username, error: error.message };
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchAllUsersData(usernames) {
    let promises = usernames.map(user => fetchSam(user.username));
    let results = await Promise.all(promises);
    return results;
}

fetchAllUsersData(usernames).then(res => {
    console.log('res: ', res);
});
