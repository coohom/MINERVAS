---
layout: project
urltitle: "MINERVAS System"
title: "MINERVAS"
categories: computer vision, computer graphics, robotics, machine learning, system
permalink: /
---
<style> 
.center{text-align:center} 
</style> 

<br>
<div class="row">
  <div class="col-xs-12">
    <center>
      <h2>MINERVAS: Massive INterior EnviRonments VirtuAl Synthesis</h2>
    </center>
    <br>
    <center>
      Haocheng Ren<sup>1*</sup>,
      Hao Zhang<sup>1*</sup>,
      <a href="https://bertjiazheng.github.io/">Jia Zheng</a><sup>2</sup>,
      Jiaxiang Zheng<sup>2</sup>,
      <a href="http://scholar.google.com/citations?user=dwvfKSkAAAAJ&hl=en">Rui Tang</a><sup>2</sup>,
      <a href="http://www.cad.zju.edu.cn/home/rwang/">Rui Wang</a><sup>1</sup>,
      Yuchi Huo<sup>1</sup>,
      <a href="http://www.cad.zju.edu.cn/home/bao/">Hujun Bao</a><sup>1</sup>
    </center>
    <br>
    <center>
      <sup>1</sup>State Key Laboratory of CAD &amp; CG, Zhejiang University,
      <sup>2</sup>Manycore Tech Inc. (Kujiale.com)
    </center>
    <br>
    <center>
      (*: Equal Contribution)
    </center>
    <br>
    <center>
      <a href='https://arxiv.org/abs/2107.06149'>arXiv</a> | <a href='https://drive.google.com/file/d/1avGTr44sGrWx_jWiNYEIrp3R7jbNPOgj/view?usp=sharing'>Supp</a> | <a href='https://www.kujiale.com/coohomcloud/minervas'>Online System</a> | <a href="https://coohom.github.io/cloud-docs/">Doc</a>
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
      <!-- <center><iframe width="900" height="500" src="https://www.youtube.com/embed/wUUINjbLNG0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center> -->
      <center><iframe width="900" height="500" src="https://www.youtube.com/embed/sAr4AYdpdrU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
    </p>
    <p>
      With the rapid development of data-driven techniques, data has played an essential role in various computer vision tasks. Many realistic and synthetic datasets have been proposed to address different problems. However, there are lots of unresolved challenges: (1) the creation of dataset is usually a tedious process with manual annotations, (2) most datasets are only designed for a single specific task, (3) the modification or randomization of the 3D scene is difficult, and (4) the release of commercial 3D data may encounter copyright issue. This paper presents MINERVAS, a Massive INterior EnviRonments VirtuAl Synthesis system, to facilitate the 3D scene modification and the 2D image synthesis for various vision tasks. In particular, we design a programmable pipeline with Domain-Specific Language, allowing users to (1) select scenes from the commercial indoor scene database, (2) synthesize scenes for different tasks with customized rules, and (3) render various imagery data, such as visual color, geometric structures, semantic label. Our system eases the difficulty of customizing massive numbers of scenes for different tasks and relieves users from manipulating fine-grained scene configurations by providing user-controllable randomness using multi-level samplers. Most importantly, it empowers users to access commercial scene databases with millions of indoor scenes and protects the copyright of core data assets, <em>e.g.</em>, 3D CAD models. We demonstrate the validity and flexibility of our system by using our synthesized data to improve the performance on different kinds of computer vision tasks.
    </p>
  </div>
</div><br>

<div class="row">
  <div class="col-xs-12">
    <h2>Online System</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <p>
      We provide a free trial account for each user with the limited scene and machine time, you can sign up <a href='https://www.kujiale.com/coohomcloud/minervas#/register'>here</a>. If you would like to use our system for research purposes, please send the <a href="{{ "/static/pdf/tos.pdf" | prepend:site.baseurl }}">Terms of Use</a> to <a href="mailto:minervas@qunhemail.com" class="email" data-animate-hover="shake" data-animate="fadeInUp">MINERVAS Group<i class="fa fa-envelope"></i></a>. Once receiving the agreement form, our group will contact you.
    </p>
  </div>
</div><br>

<div class="row">
  <div class="col-xs-12">
    <h2>DSL Examples</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <p>
      MINERVAS system allows users to control the data generation pipeline via Domain Specific Language (DSL). The DSL is designed with flexibility and ease of use. For flexibility, we build our DSL as an internal DSL under the Python programming language. For ease of use, we provide several common samplers for users to easily generate diverse scenes for domain randomization.
    </p>
    <p>
      Here we show some examples of our DSL and generated results. We only show the built-in samplers here. For more information about DSL, please refer to <a href='https://coohom.github.io/cloud-docs/'>Document</a>.
    </p>
  </div>
</div><br>

<!-- **** Furniture arrangement sampler *** -->
<div class="center">
  <div class="col-xs-12">
    <h3>Furniture Rearrangment</h3>
  </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/atom-one-light.min.css">
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

<!-- **** Material sampler *** -->
<div class="center">
  <div class="col-xs-12">
    <h3>Material Sampler</h3>
  </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/atom-one-light.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<pre><code class="python">class MaterialSampler(EntityProcessor):
    def process(self):
        for instance in self.shader.world.instances:
            if instance.label in [247, 894]: # 247: 'chair', 894: 'desk'
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

<!-- **** Light sampler *** -->
<div class="center">
  <div class="col-xs-12">
    <h3>Light Sampler</h3>
  </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/atom-one-light.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<pre><code class="python">class LightSampler(EntityProcessor):
    def process(self):
        for light in self.shader.world.lights:
            light._tune_temp(1) # randomize color temperature
            light.tune_intensity(1) # randomize intensity
            light.tune_random(1.2) # randomize intensity
</code></pre>

<link rel="stylesheet" href="{{ '/static/css/w3.css' | prepend:site.baseurl }}">
<div class="w3-center w3-content w3-section" style="max-width:600px">
  <img class="mySlides3" src="{{ '/static/img/samples/Light_1.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides3" src="{{ '/static/img/samples/Light_2.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides3" src="{{ '/static/img/samples/Light_3.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides3" src="{{ '/static/img/samples/Light_4.jpg' | prepend:site.baseurl }}" style="width:100%">
</div>

<script>
carousel("mySlides3", 0);
</script>


<!-- **** Model sampler *** -->
<div class="center">
  <div class="col-xs-12">
    <h3>Model Sampler</h3>
  </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/atom-one-light.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<pre><code class="python">class ModelSampler(EntityProcessor):
    def process(self):
        for instance in self.shader.world.instances:
            if instance.type == 'ASSET':
                self.shader.world.replace_model(id=instance.id)
</code></pre>

<link rel="stylesheet" href="{{ '/static/css/w3.css' | prepend:site.baseurl }}">
<div class="w3-center w3-content w3-section" style="max-width:600px">
  <img class="mySlides4" src="{{ '/static/img/samples/Model_0.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides4" src="{{ '/static/img/samples/Model_1.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides4" src="{{ '/static/img/samples/Model_16.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides4" src="{{ '/static/img/samples/Model_14.jpg' | prepend:site.baseurl }}" style="width:100%">
</div>

<script>
carousel("mySlides4", 0);
</script>

<!-- **** Depth sampler *** -->
<div class="center">
  <div class="col-xs-12">
    <h3>Depth sampler</h3>
  </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/atom-one-light.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<pre><code class="python">class DepthNoiseSample(PixelProcessor):
    def process(self):
        # 0: NoNoiseModel
        # 1: GaussianNoiseModel
        # 2: PoissonNoiseModel
        # 3: SaltAndPepperNoiseModel
        # 4: KinectNoiseModel
        self.gen_depth(noise=4)
</code></pre>

<link rel="stylesheet" href="{{ '/static/css/w3.css' | prepend:site.baseurl }}">
<div class="w3-center w3-content w3-section" style="max-width:600px">
  <img class="mySlides5" src="{{ '/static/img/samples/depth.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides5" src="{{ '/static/img/samples/depth_Kinect.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides5" src="{{ '/static/img/samples/depth_Gaussian.jpg' | prepend:site.baseurl }}" style="width:100%">
  <img class="mySlides5" src="{{ '/static/img/samples/depth_Poisson.jpg' | prepend:site.baseurl }}" style="width:100%">
</div>

<script>
carousel("mySlides5", 0);
</script>
<br>

<div class="row">
  <div class="col-xs-12">
    <h2>Acknowledgements</h2>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <p>
      We would like to thank Manycore Tech Inc. (<a href="https://coohomcloud.com/" target="_blank" rel="noopener noreferrer">Coohom Cloud</a>, <a href="https://www.kujiale.com/" target="_blank" rel="noopener noreferrer">Kujiale</a>) for providing the 3D indoor scene database and the high-performance rendering platform, especially Coohom Cloud Team for technical support.
    </p>
  </div>
</div><br>

<hr>
