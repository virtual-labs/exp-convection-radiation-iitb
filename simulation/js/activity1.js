let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Introduction to Condensation</h5>
        <p>Learning Objective: Calculate heat transfer Using Nusselt equation</p>
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

        <h5>A saturated steam is available at T<sub>sat</sub> = ${a1_t_sat}&deg; C. It is used to condense with the plate having legnth ${a1_l1}m and width ${a1_w}m, maintained at T<sub>w</sub> ${a1_t_wall}&deg; C, find the heat transfered and also find the heat transfer when instead of one plate two plate of lenght ${a1_l2}m and same width as before is used. What will be the heat transfer. Use Nusselt equation.</h5>

        <p>At mean temperature use following properties: 
        K = ${a1_k} w/m-k <br>
        h<sub>fg</sub> = ${a1_hfg} kJ/kg <br>
        &rho; = ${a1_rho} kg/m<sup>3</sup> <br>
        &mu; = 2.89 x 10<sup>-4</sup> N-s/m<sup>2</sup>
        g = ${g} m/s<sup>2</sup>
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
    let btn_text = get_collapse_btn_text("Single Plate", "tb1-st1");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st1'>


        <p> 
                Single Plate
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ h = 0.943 \\left(\\frac{\\rho^2 g k^3 h_{fg} }{\\mu L (T_{sat} - T_w)}\\right)^{\\frac{1}{4}} $$
                </span>
        </p>

        <p> 
                where L = ${a1_l1} meters
        </p>

        <p style='text-align: center;'> 
                h = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp10' /><span id='dsp-inp10'></span></span> w/m<sup>2</sup>-k
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q = hA(T_{sat} - T_w) $$
                </span>
        </p>

        <p> 
                where A = lenght of plate x width = ${a1_l1} x ${a1_w} (m<sup>2</sup>)
        </p>

        <p style='text-align: center;'> 
                Q = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp11' /><span id='dsp-inp11'></span></span> w
        </p>


        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol1();'  id='temp-btn-11' >Verify</button></div>


    </div>

    `;
    single_plate_q();
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st1'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    temp_btn.remove();
}
function verify_sol1() {
    let btn = document.getElementById('temp-btn-11');
    console.log(a1_h1, a1_q1);
    let inp1 = document.getElementById('a1-inp10');
    let sp1 = document.getElementById('dsp-inp10');
    let inp2 = document.getElementById('a1-inp11');
    let sp2 = document.getElementById('dsp-inp11');
    if (!verify_values(parseFloat(inp1.value), a1_h1)) {
        alert('h is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a1_q1)) {
        alert('Q is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1_h1).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a1_q1).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    sol2();
}
function sol2() {
    let btn_text = get_collapse_btn_text("Two plates", "tb1-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-st2'>


        <p> 
                For two plates
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ h = 0.943 \\left(\\frac{\\rho^2 g k^3 h_{fg} }{\\mu L (T_{sat} - T_w)}\\right)^{\\frac{1}{4}} $$
                </span>
        </p>

        <p> 
                where L = ${a1_l2} meters
        </p>

        <p style='text-align: center;'> 
                h = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp20' /><span id='dsp-inp20'></span></span> w/m<sup></sup>-k
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$  Q = 2 \\times hA(T_{sat} - T_w) $$
                </span>
        </p>

        <p> 
                where A = new lenght of plate x width = ${a1_l2} x ${a1_w} (m<sup>2</sup>)
        </p>


        <p style='text-align: center;'> 
                R<sub>2</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a1-inp21' /><span id='dsp-inp21'></span></span> w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_sol2();'  id='temp-btn-12' >Verify</button></div>


    </div>

    `;
    double_plate_q();
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_sol2() {
    let btn = document.getElementById('temp-btn-12');
    console.log(a1_h2, a1_q2);
    let inp1 = document.getElementById('a1-inp20');
    let sp1 = document.getElementById('dsp-inp20');
    let inp2 = document.getElementById('a1-inp21');
    let sp2 = document.getElementById('dsp-inp21');
    if (!verify_values(parseFloat(inp1.value), a1_h2)) {
        alert('h is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a1_q2)) {
        alert('Q is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1_h2).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a1_q2).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map