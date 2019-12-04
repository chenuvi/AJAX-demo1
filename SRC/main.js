
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onload = () => {
        console.log(request.response)

        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }

    request.onerror = () => {
        console.log("失败了")
    }
    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log("失败了")
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                alert('failed onload html')
            }
        }

    }
    request.open('GET', '/3.html')
    request.send();
}

// 自己写的 xml 加载失败
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css"); // readyState = 1
    request.onreadystatechange = () => {

        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    }
    request.send();
};

// //  方方的 xml 加载
// getXML.onclick = () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "/4.xml");
//     request.onreadystatechange = () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const dom = request.responseXML;
//             const text = dom.getElementsByTagName("warning")[0].textContent;
//             console.log(text.trim());
//         }
//     };
//     request.send();
// };


getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send();
}