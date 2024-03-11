export default function MyComponent() {
  return (
    <>
<div id="table-of-contents" role="doc-toc">
<h2>Table of Contents</h2>
<div id="text-table-of-contents" role="doc-toc">
<ul>
<li><a href="#org1d4cb0a">1. Welcome to Org mode</a></li>
<li><a href="#orgfeea2d5">2. This is a headline, it starts with one or more stars</a></li>
<li><a href="#org59f540f">3. Working with lists</a>
<ul>
<li><a href="#orga2b9971">3.1. Moving around in our outline</a></li>
<li><a href="#orgc52d5c0">3.2. Moving around headlines</a></li>
<li><a href="#org93cf0b9">3.3. Lord of the Rings</a></li>
</ul>
</li>
</ul>
</div>
</div>
<div id="outline-container-org1d4cb0a" class="outline-2">
<h2 id="org1d4cb0a"><span class="section-number-2">1.</span> Welcome to Org mode</h2>
<div class="outline-text-2" id="text-1">
<p>
Binary digits (1s and 0s) are the atoms of the computer science universe because every piece of code ultimately translates into a sequence of 1s and 0s which we feed into the computer. This sequence tells the computer exactly what to do to make our program work. We refer to these binary digits as “bits”
</p>

<p>
Welcome, and thanks for trying out Org mode. Making outlines in
Org is very simple. It is just text! Just start typing.
</p>
</div>
</div>
<div id="outline-container-orgfeea2d5" class="outline-2">
<h2 id="orgfeea2d5"><span class="section-number-2">2.</span> This is a headline, it starts with one or more stars</h2>
<div class="outline-text-2" id="text-2">
<p>
A heading has one star, a sub-heading two, etc.
</p>
</div>
</div>
<div id="outline-container-org59f540f" class="outline-2">
<h2 id="org59f540f"><span class="section-number-2">3.</span> Working with lists</h2>
<div class="outline-text-2" id="text-3">
</div>
<div id="outline-container-orga2b9971" class="outline-3">
<h3 id="orga2b9971"><span class="section-number-3">3.1.</span> Moving around in our outline</h3>
</div>
<div id="outline-container-orgc52d5c0" class="outline-3">
<h3 id="orgc52d5c0"><span class="section-number-3">3.2.</span> Moving around headlines</h3>
</div>

<div id="outline-container-org93cf0b9" class="outline-3">
<h3 id="org93cf0b9"><span class="section-number-3">3.3.</span> Lord of the Rings</h3>
<div class="outline-text-3" id="text-3-3">
<p>
My favorite scenes are (in this order) \[x^2+2x-1\]
</p>
<ol class="org-ol">
<li>The attack of the Rohirrim</li>
<li>Eowyn's fight with the witch king
<ul class="org-ul">
<li>this was already my favorite scene in the book</li>
<li>I really like Miranda Otto.</li>
</ul></li>
<li><p>
Peter Jackson being shot by Legolas
</p>
<ul class="org-ul">
<li>on DVD only</li>
</ul>
<p>
He makes a really funny face when it happens.
</p></li>
</ol>
<p>
But in the end, no individual scenes matter but the film as a whole.
Important actors in this film are:
</p>
<dl class="org-dl">
<dt>Elijah Wood</dt><dd>He plays Frodo</dd>
<dt>Sean Austin</dt><dd><p>
He plays Sam, Frodo's friend.  I still remember
him very well from his role as Mikey Walsh in The Goonies.
</p>

<p>
You can make words <b>bold</b>, <i>italic</i>, <span class="underline">underlined</span>, <code>code</code> and <code>verbatim</code>, and, if you must, <del>strike-through</del>.
** TODO buy airplane
</p></dd>
</dl>

<div id="container"></div>
<script type="module">

import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// Declare the chart dimensions and margins.
const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

// Declare the x (horizontal position) scale.
const x = d3.scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")])
    .range([marginLeft, width - marginRight]);

// Declare the y (vertical position) scale.
const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

// Create the SVG container.
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height);

// Add the x-axis.
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

// Add the y-axis.
svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

// Append the SVG element.
container.append(svg.node());

</script>
</div>
</div>
</div>
    </>
  );
}
