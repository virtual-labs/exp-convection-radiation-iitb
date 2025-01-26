let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Natural Convection and unsteady, natural convection and radiation</h5>
        <p></p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Question", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>A hot plate (${a1_l} x ${a1_w}) at ${a1_temp} C is kept in still air at ${a1_air_temp} C</h5>

        <p>
        Mass of plate is ${a1_mass_of_plate} <br>
        C<sub>p</sub> = ${a1_cp} <br>
        &epsilon; = ${a1_epsilon} <br>
        &mu; = ${a1_mu / 1e-6} x 10<sup>-6</sup> m<sup>2</sup>/s
        Pr = ${a1_pr} m/s<sup>2</sup> <br>
        K = ${a1_k} <br>
        T<sub>s</sub> = ${a1_temp} C and T<sub>j</sub> = ${a1_air_temp} <br>
        g = 9.81 m/s<sup>2</sup> <br>
        Boltzmann Constant (&sigma;) = 1.380649 x 10<sup>-23</sup> m<sup>2</sup> kg s<sup>-2</sup> K<sup>-2</sup>


        <h5>Find the following</h5>
        <ol type='1'>
            <li>Heat Transfer Coefficient</li>
            <li>Initial reate of cooling (only convection)</li>
            <li>Time required to reach 80 &80C (only convection)</li>
            <li>Initial rate of cooling (convection & radiation)</li>
        </ol>


        </p>

        <br>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='sol1();'  id='temp-btn-0' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function sol1() {
    let temp_btn = document.getElementById('temp-btn-0');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculation", "tb1-st1");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st1'>


        <p> 
                Mean temperature
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ T_m = \\frac{T_s + T_j}{2} = $$
                </span>
        </p>

         <p style='text-align: center;'> 
                T<sub>m</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp10' /><span id='dsp-inp10'></span></span> C
        </p>

        <p> 
                Coefficient of Thermal Expansion
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\beta = \\frac{1}{T_m + 273} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                &beta; = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp11' /><span id='dsp-inp11'></span></span> k<sup>-1</sup>
        </p>

        <p> 
            Characteristic Length L = ${a1_w} m
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Gr \\times Pr = \\frac{g \\beta \\Delta T L^3}{\\mu^2} \\times Pr \\ \\\ \\ \\ \\ \\ \\ \\ \\   \\text{where &Delta;T = Ts - Tj } $$
                </span>
        </p>


        <p style='text-align: center;'> 
                Gr x Pr = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp12' /><span id='dsp-inp12'></span></span>
        </p>


        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol1();'  id='temp-btn-11' >Verify</button></div>


    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st1'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    a1_calculate_first_section();
    temp_btn.remove();
}
function a1_calculate_first_section() {
    a1_tmean = (a1_temp + a1_air_temp) / 2;
    a1_beta = 1 / (a1_tmean + 273);
    a1_grpr = g * a1_beta * (a1_temp - a1_air_temp) * (Math.pow(a1_w, 3)) * a1_pr / (Math.pow(a1_mu, 2));
}
function verify_sol1() {
    let btn = document.getElementById('temp-btn-11');
    console.log(a1_tmean, a1_beta, a1_grpr);
    let inp1 = document.getElementById('a1-inp10');
    let sp1 = document.getElementById('dsp-inp10');
    let inp2 = document.getElementById('a1-inp11');
    let sp2 = document.getElementById('dsp-inp11');
    let inp3 = document.getElementById('a1-inp12');
    let sp3 = document.getElementById('dsp-inp12');
    if (!verify_values(parseFloat(inp1.value), parseFloat(a1_tmean.toFixed(3)))) {
        alert('T mean is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), parseFloat((a1_beta).toFixed(5)))) {
        alert('Beta is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), parseFloat((a1_grpr).toFixed(0)))) {
        alert('GrPr is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1_tmean).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a1_beta).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(a1_grpr).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    sol2();
}
function sol2() {
    let btn_text = get_collapse_btn_text("Find Nu and h", "tb1-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st2'>
        
         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Nu = 0.13 \\times (Gr \\times Pr)^{\\frac{1}{3}} $$
                </span>
        </p>

         <p style='text-align: center;'> 
                Nu = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp20' /><span id='dsp-inp20'></span></span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Nu = \\frac{hL}{K} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ h = \\frac{Nu \\times K}{L} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                h = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp21' /><span id='dsp-inp21'></span></span> w/m<sup>2</sup>-k
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol2();'  id='temp-btn-12' >Verify</button></div>


    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    a1_calculate_second_section();
}
function a1_calculate_second_section() {
    a1_nu = 0.13 * Math.pow((a1_grpr), (1 / 3));
    a1_h = a1_nu * a1_k / a1_w;
}
function verify_sol2() {
    let btn = document.getElementById('temp-btn-12');
    console.log(a1_nu, a1_h);
    let inp1 = document.getElementById('a1-inp20');
    let sp1 = document.getElementById('dsp-inp20');
    let inp2 = document.getElementById('a1-inp21');
    let sp2 = document.getElementById('dsp-inp21');
    if (!verify_values(parseFloat(inp1.value), a1_nu)) {
        alert('Nu is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a1_h)) {
        alert('h is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1_nu).toFixed(5)}`;
    inp2.remove();
    sp2.innerText = `${(a1_h).toFixed(5)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    sol3();
}
function sol3() {
    let btn_text = get_collapse_btn_text("Initial Rate of Cooling (convection)", "tb1-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st3'>
        
         <p style='text-align: center;'> 
                Initial rate of cooling (convection only)
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ m \\times C_p \\frac{dT}{dt} = hA \\Delta T $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{dT}{dt} = \\frac{hA}{mC_p}(T_s - T_j) \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\text{where A = 1 x 0.5} $$
                </span>
        </p>

         <p style='text-align: center;'> 
                here take T<sub>s</sub> = 80 &deg; C;
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' style='30vw'><input class='form-control' type='text' id='a1-inp30' /><span id='dsp-inp30'></span></span> &deg; C/sec
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol3();'  id='temp-btn-13' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    calculate_first_sol();
}
function calculate_first_sol() {
    first_sol = a1_h * 1.5 * (80 - a1_air_temp) / (a1_mass_of_plate * a1_cp);
}
function verify_sol3() {
    let btn = document.getElementById('temp-btn-13');
    console.log(first_sol);
    let inp1 = document.getElementById('a1-inp30');
    let sp1 = document.getElementById('dsp-inp30');
    if (!verify_values(parseFloat(inp1.value), first_sol)) {
        alert('Solution is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(first_sol).toFixed(5)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    sol4();
}
function sol4() {
    let btn_text = get_collapse_btn_text("Time required for cooling to 80 C", "tb1-st4");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st4'>
        
        <p style='text-align: center;'> 
            Time required for cooling the plate to 80 &deg; C
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q = 80 - 20 \\ \\ \\ and \\ \\ \\ Q_o = T_s - T_j $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{Q}{Q_o} = e^{\\frac{-hAt}{mC_p}} $$
                </span>
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ t = \\frac{mC_p}{hA} ln\\left( \\frac{Q}{Q_o} \\right) $$
                </span>
        </p>


         <p style='text-align: center;'> 
                t = <span style='display: inline-block;' style='30vw'><input class='form-control' type='text' id='a1-inp40' /><span id='dsp-inp40'></span></span> seconds
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol4();'  id='temp-btn-14' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st4'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    second_sol = -a1_mass_of_plate * a1_cp * Math.log((80 - a1_air_temp) / (a1_temp - a1_air_temp)) / (a1_h * 1.5);
}
function verify_sol4() {
    let btn = document.getElementById('temp-btn-14');
    console.log(second_sol);
    let inp1 = document.getElementById('a1-inp40');
    let sp1 = document.getElementById('dsp-inp40');
    if (!verify_values(parseFloat(inp1.value), second_sol)) {
        alert('Solution is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(second_sol).toFixed(5)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    sol5();
}
function sol5() {
    let btn_text = get_collapse_btn_text("Initial rate of cooling (Radiation and Convection)", "tb1-st5");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st5'>
        
        <p style='text-align: center;'> 
            Initial rate of cooling Convection & Radiation
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ mC_p \\frac{dT}{dt} = hA(T_s - T_j) + \\sigma A \\epsilon (T_s^4 - T_j^4) $$
                </span>
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ \\frac{dT}{dt} = \\frac{hA(T_s - T_j)}{mC_p} + \\frac{\\sigma A \\epsilon (T_s^4 - T_j^4)}{mC_p} $$
                </span>
        </p>


         <p style='text-align: center;'> 
             <span style='display: inline-block;' style='30vw'><input class='form-control' type='text' id='a1-inp50' /><span id='dsp-inp50'></span></span> &deg; C/sec
        </p>

        <br>
         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol5();'  id='temp-btn-15' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st5'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    forth_sol = (a1_h * 1.5 * (a1_temp - a1_air_temp) / (a1_mass_of_plate * a1_cp)) + (boltzmann_contant * 1.5 * a1_epsilon * ((Math.pow(a1_temp, 4)) - (Math.pow(a1_air_temp, 4))) / (a1_mass_of_plate * a1_cp));
}
function verify_sol5() {
    let btn = document.getElementById('temp-btn-15');
    console.log(forth_sol);
    let inp1 = document.getElementById('a1-inp50');
    let sp1 = document.getElementById('dsp-inp50');
    if (!verify_values(parseFloat(inp1.value), forth_sol)) {
        alert('Solution is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(forth_sol).toFixed(5)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    sol5();
}
activity1();
//# sourceMappingURL=activity1.js.map