---
layout: project
urltitle: "MINERVAS System"
title: "MINERVAS"
categories: computer vision, computer graphics, robotics, machine learning, system
permalink: /
---
<style> 
.center{text-align:center} 
/* .mySlides{display:none;} */
</style> 

<br>
<div class="row">
  <div class="col-xs-12">
    <center>
      <h2>MINERVAS: Massive INterior EnviRonments VirtuAl Synthesis</h2>
    </center>
    <br>
    <center>
      Haocheng Ren<sup>1,*</sup>,
      Hao Zhang<sup>1,*</sup>,
      <a href="https://bertjiazheng.github.io/">Jia Zheng</a><sup>2</sup>,
      Jiaxiang Zheng<sup>2</sup>,
      <a href="http://scholar.google.com/citations?user=dwvfKSkAAAAJ&hl=en">Rui Tang</a><sup>2</sup>,
      <a href="http://www.cad.zju.edu.cn/home/rwang/">Rui Wang</a><sup>1</sup>,
      <a href="http://www.cad.zju.edu.cn/home/bao/">Hujun Bao</a><sup>1</sup>
    </center>
    <br>
    <center>
      <sup>1</sup>State Key Laboratory of CAD &amp; CG, Zhejiang University,
      <sup>2</sup>Manycore (Kujiale)
    </center>
    <br>
    <center>
      (*: Equal Contribution)
    </center>
    <br>
    <center>
      <a href='https://arxiv.org/abs/'>arXiv</a> | <a href='TODO'>Documentation</a> | <a href='https://www.kujiale.com/coohomcloud/minervas'>Online System</a>
    </center>
  </div>
</div><br>

<div class="row">
  <div class="col-md-12">
    <img src="{{ "/static/img/teaser.png" | prepend:site.baseurl }}">
  </div>
</div><br>

<div class="row" id="news">
  <div class="col-xs-12">
    <h2>News</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <ul>
      <li>2021-07: The MINERVAS System is available online!</li>
    </ul>
  </div>
</div><br>


<div class="row" id="abstract">
  <div class="col-xs-12">
    <h2>Abstract</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <p>
With the rapid development of data-driven techniques, data has played an important role in various computer vision tasks. Many realistic or synthetic datasets have been proposed to solve different problems. Notwithstanding this progress, challenges remain: (1) the creation of dataset is usually a tedious process with manual annotations, (2) most datasets are only designed for a single specific task, (3) the modification or randomization of 3D scenes is difficult, and (4) the release of commercial 3D datasets may encounter copyright issues.

In this paper, we present MINERVAS, a Massive INterior EnviRonments VirtuAl Synthesis system, to facilitate the modification of 3D scenes and the generation of synthetic 2D images for various vision tasks. In particular, we design a programmable pipeline with Domain-Specific Language, allow users to (1) select interior scenes from the commercial scene database, (2) synthesize customized indoor scenes for different tasks, and (3) render various imagery data, such as visual color, geometric structures, semantic labels. Our system eases the difficulty of customizing massive numbers of scenes for different tasks and relieves users from manipulating fine-grained scene configurations by providing user-controllable randomness using multi-level samplers. Most importantly, it empowers users to access commercial scene databases with millions of indoor scenes, as well as protects the copyright of core data assets, e.g., 3D CAD models. We demonstrate the validity and flexibility of our system by using our generated data to improve the performance on different kinds of computer vision tasks.
    </p>
  </div>
</div><br>


<div class="row">
  <div class="col-xs-12">
    <h2>Samples</h2>
  </div>
</div>

<div class="center">
  <div class="col-xs-12">
    <h3>Furniture rearrangment</h3>
  </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/atom-one-light.min.css">
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/default.min.css"> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<pre><code class="python">class FurnitureLayoutSampler(SceneProcessor):
  def process(self):
      for room in self.shader.world.rooms:
          room.randomize_layout(self.shader.world)
</code></pre>

<link rel="stylesheet" href="{{ '/static/css/w3.css' | prepend:site.baseurl }}">
<div class="w3-center w3-content w3-section" style="max-width:600px">
  <img class="mySlides" src="{{ '/static/img/samples/Layout_0.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides" src="{{ '/static/img/samples/Layout_1.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides" src="{{ '/static/img/samples/Layout_2.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides" src="{{ '/static/img/samples/Layout_3.jpg' | prepend:site.baseurl }}" style="width:100%">
</div>

<script type="text/javascript" src="{{ '/static/js/slideshow.js' | prepend:site.baseurl }}"></script>
<script>
carousel("mySlides", 0);
</script>

<div class="center">
  <div class="col-xs-12">
    <h3>Material sampler</h3>
  </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/atom-one-light.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<pre><code class="python">class MaterialSampler(EntityProcessor):
    def process(self):
        for instance in self.shader.world.instances:
            if instance.label_name in ['sofa', 'table']:
                self.shader.world.replace_material(id=instance.id)
</code></pre>

<link rel="stylesheet" href="{{ '/static/css/w3.css' | prepend:site.baseurl }}">
<div class="w3-center w3-content w3-section" style="max-width:600px">
  <img class="mySlides2" src="{{ '/static/img/samples/Material_4.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides2" src="{{ '/static/img/samples/Material_6.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides2" src="{{ '/static/img/samples/Material_7.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides2" src="{{ '/static/img/samples/Material_8.jpg' | prepend:site.baseurl }}" style="width:100%">
</div>

<script>
carousel("mySlides2", 0);
</script>

<br>
<div class="row">
  <div class="col-xs-12">
    <h2>Video</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <p>
    Comming soon.
    </p>
  </div>
</div><br>

<div class="row">
  <div class="col-xs-12">
    <h2>Acknowledgements</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <p>
      We would like to thank Manycore (Kujiale) for providing the 3D indoor scene database and the high-performance rendering platform, especially Coohom Cloud Team for technical support.
    </p>
  </div>
</div><br>

<hr>
