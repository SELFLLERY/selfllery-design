<div style="text-align: center; margin-top: 10%">
    <pre id="log"></pre>
    <br>
    <button id="pull" onclick="deploy('dev')" style="padding: 20px; font-size: 20px">Deploy</button>&nbsp;&nbsp;
</div>

<style>
    #log {
        margin: auto;
        width: 540px;
        height: 320px;
        border: 1px solid lightgray;
        padding: 15px;
        text-align: left;
        overflow: auto;
    }
</style>

<script>

    var logarea = document.getElementById('log');

    function deploy() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/sys/deploy.php');
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        setTimeout(log, 1000);
        logarea.innerText = '';
        disable();

        xhr.onload = function () {
            if (xhr.status !== 200) {
                alert('Request failed.  Returned status of ' + xhr.status);
            }
        };
        xhr.send();
    }

    function log() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/sys/log.php');
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        xhr.onload = function () {
            if (xhr.status === 200) {
                if (this.responseText.length) {
                    enable();
                    logarea.innerText = this.responseText;
                    logarea.scrollTop = 9999999;
                } else {
                    setTimeout(log, 1000);
                }
            }
        };
        xhr.send();
    }

    function enable() {
        document.getElementById('pull').disabled = false;
    }

    function disable() {
        document.getElementById('pull').disabled = true;
    }

</script>