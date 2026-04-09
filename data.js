const ROADMAP = [
  {
    phase: "Phase 1 — Foundations",
    phaseColor: "#5b9cf6",
    days: [
      {
        n: 1, topic: "Python Basics + Env Setup", tags: ["python"], hrs: "2.5",
        tasks: [
          "Install Python 3.11+, VS Code, and create your first virtual environment with venv",
          "Learn variables, data types, loops, and conditionals — write a number-guessing game",
          "Master list comprehensions and basic functions — refactor your game using them"
        ],
        links: [
          { t: "freeCodeCamp Python (4.5h)", u: "https://youtu.be/rfscVS0vtbw" },
          { t: "Python Official Tutorial", u: "https://docs.python.org/3/tutorial/" }
        ]
      },
      {
        n: 2, topic: "Neural Networks Intuition", tags: ["dl"], hrs: "2",
        tasks: [
          "Watch 3Blue1Brown Neural Nets episodes 1–2 with pen & paper — draw your own neuron",
          "Understand weights, biases, and activation functions at a conceptual level",
          "Sketch a 3-layer network and trace how a single input flows through it"
        ],
        links: [
          { t: "3Blue1Brown: Neural Networks ep1", u: "https://youtu.be/aircAruvnKk" },
          { t: "3Blue1Brown: Gradient Descent ep2", u: "https://youtu.be/IHZwWFHWa-w" }
        ]
      },
      {
        n: 3, topic: "ML Fundamentals (5 Paradigms)", tags: ["ml"], hrs: "2",
        tasks: [
          "Understand the 5 primary ML aspects: supervised, unsupervised, reinforcement learning, generative AI, and agentic AI — write 1 example for each in your own words",
          "Watch 'Machine Learning for Everybody' and capture: (1) what labels are, (2) train/val/test split, (3) overfitting intuition",
          "Write a 10-line cheat sheet: when you'd use supervised vs unsupervised vs RL"
        ],
        links: [
          { t: "Machine Learning for Everybody — Full Course", u: "https://www.youtube.com/watch?v=i_LwzRVP7bg" }
        ]
      },
      {
        n: 4, topic: "Python: OOP + File I/O", tags: ["python"], hrs: "2.5",
        tasks: [
          "Study classes, __init__, methods, and inheritance with a real example",
          "Read and write CSV and JSON files using Python's built-in modules",
          "Build a DataLogger class that tracks and saves entries to a CSV file"
        ],
        links: [
          { t: "Corey Schafer: OOP Tutorial", u: "https://youtu.be/ZDa-Z5JzLYM" },
          { t: "Real Python: File I/O", u: "https://realpython.com/read-write-files-python/" }
        ]
      },
      {
        n: 5, topic: "Math for ML: Linear Algebra", tags: ["dl"], hrs: "2.5",
        tasks: [
          "Watch 3Blue1Brown Essence of Linear Algebra chapters 1–4 (vectors, matrices)",
          "Understand dot products and matrix multiplication — work through examples by hand",
          "Implement matrix multiply in NumPy and verify against your hand calculations"
        ],
        links: [
          { t: "3Blue1Brown: Essence of Linear Algebra", u: "https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
          { t: "NumPy Quickstart", u: "https://numpy.org/doc/stable/user/quickstart.html" }
        ]
      },
      {
        n: 6, topic: "Python Data Stack: NumPy + Pandas", tags: ["python"], hrs: "3",
        tasks: [
          "Learn NumPy array creation, slicing, broadcasting, and vectorized operations",
          "Master Pandas DataFrames: read CSV, filter rows, groupby, handle missing values",
          "Download the Kaggle Titanic dataset and answer 5 questions about it using Pandas"
        ],
        links: [
          { t: "Corey Schafer: Pandas Tutorial", u: "https://youtu.be/ZyhVh-qRZPA" },
          { t: "Kaggle Titanic Dataset", u: "https://www.kaggle.com/c/titanic/data" }
        ]
      },
      {
        n: 7, topic: "Week 1 Project + Revision", tags: ["python", "project", "revision"], hrs: "3",
        tasks: [
          "Pick any public dataset (movies, weather, sports) and clean it fully with Pandas",
          "Create 5 meaningful visualizations using Matplotlib or Seaborn with proper titles",
          "Review days 1–5 notes, fill gaps, and push your EDA project to a new GitHub repo"
        ],
        links: [
          { t: "Matplotlib Tutorial", u: "https://matplotlib.org/stable/tutorials/introductory/pyplot.html" },
          { t: "Seaborn Gallery", u: "https://seaborn.pydata.org/examples/" }
        ]
      },
      {
        n: 8, topic: "Rest Day — Light Reading", tags: ["revision"], hrs: "1",
        tasks: [
          "Browse 5 AI Engineer job postings on LinkedIn and note required skills",
          "Watch Andrej Karpathy's 'State of GPT' talk (no coding required)",
          "Write a short journal entry: what excited you most in week 1?"
        ],
        links: [
          { t: "State of GPT — Karpathy", u: "https://youtu.be/bZQun8Y4L2A" }
        ]
      },
      {
        n: 9, topic: "Python: Decorators + Generators", tags: ["python"], hrs: "2.5",
        tasks: [
          "Learn the @decorator pattern — build a @timer decorator that logs function runtime",
          "Understand generators and yield — build a streaming file reader with a generator",
          "Explore context managers (with statement) — create a safe database connection manager"
        ],
        links: [
          { t: "Tech With Tim: Decorators", u: "https://youtu.be/r7Dtus7N4pI" },
          { t: "Real Python: Generators", u: "https://realpython.com/introduction-to-python-generators/" }
        ]
      },
      {
        n: 10, topic: "Backpropagation + Calculus Intuition", tags: ["dl"], hrs: "2.5",
        tasks: [
          "Watch 3Blue1Brown backprop episodes 3–4 — understand the chain rule visually",
          "Implement a Value class that tracks gradients manually (micrograd-style)",
          "Run Karpathy's micrograd notebook and add inline comments explaining each step"
        ],
        links: [
          { t: "3Blue1Brown: Backpropagation", u: "https://youtu.be/tIeHLnjs5U8" },
          { t: "Karpathy: micrograd walkthrough", u: "https://youtu.be/VMj-3S1tku0" }
        ]
      },
      {
        n: 11, topic: "Python: APIs + Web Scraping", tags: ["python"], hrs: "2.5",
        tasks: [
          "Use the requests library to call a public REST API (e.g. OpenWeather or NewsAPI)",
          "Parse JSON responses and store results in a Pandas DataFrame",
          "Scrape a simple webpage using BeautifulSoup — extract table data cleanly"
        ],
        links: [
          { t: "Requests Library Docs", u: "https://requests.readthedocs.io/" },
          { t: "BeautifulSoup Tutorial", u: "https://realpython.com/beautiful-soup-web-scraper-python/" }
        ]
      },
      {
        n: 12, topic: "Intro to PyTorch", tags: ["dl"], hrs: "3",
        tasks: [
          "Install PyTorch, create tensors, perform basic ops, and check GPU availability",
          "Understand autograd — run a simple backward pass and inspect .grad values",
          "Build a tiny linear model manually (no nn.Module yet) and optimize with SGD"
        ],
        links: [
          { t: "PyTorch 60-Minute Blitz", u: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html" },
          { t: "Daniel Bourke: PyTorch intro", u: "https://youtu.be/Z_ikDlimN6A" }
        ]
      },
      {
        n: 13, topic: "System Design Fundamentals", tags: ["sysdesign"], hrs: "2",
        tasks: [
          "Learn what APIs, CDNs, load balancers, and databases do at a high level",
          "Read the System Design Primer intro — understand horizontal vs vertical scaling",
          "Watch ByteByteGo's intro video and take notes on the 3 topics you found new"
        ],
        links: [
          { t: "System Design Primer (GitHub)", u: "https://github.com/donnemartin/system-design-primer" },
          { t: "ByteByteGo YouTube", u: "https://youtube.com/@ByteByteGo" }
        ]
      },
      {
        n: 14, topic: "Build: Micrograd Clone", tags: ["dl", "project"], hrs: "3",
        tasks: [
          "Implement the full Value class with add, mul, pow, relu operations from scratch",
          "Add backward() with correct chain rule for each operation",
          "Build a tiny 2-layer MLP using your Value class and train it on a toy dataset"
        ],
        links: [
          { t: "Karpathy micrograd repo", u: "https://github.com/karpathy/micrograd" },
          { t: "micrograd video walkthrough", u: "https://youtu.be/VMj-3S1tku0" }
        ]
      },
      {
        n: 15, topic: "Week 2 Revision + Quiz", tags: ["revision"], hrs: "2",
        tasks: [
          "Create Anki flashcards for: Python decorators, gradient descent, PyTorch autograd",
          "Re-explain backpropagation in writing without looking at notes — check your gaps",
          "Clean up your GitHub — add a README to each repo you've created so far"
        ],
        links: [
          { t: "Anki Flashcards App", u: "https://apps.ankiweb.net/" },
          { t: "ML Cheatsheets", u: "https://ml-cheatsheet.readthedocs.io/" }
        ]
      },
    ]
  },
  {
    phase: "Phase 2 — Deep Learning + LLM Intro",
    phaseColor: "#a78bfa",
    days: [
      {
        n: 16, topic: "Neural Net in PyTorch (MNIST)", tags: ["dl"], hrs: "3",
        tasks: [
          "Build a fully-connected neural net with nn.Module on the MNIST dataset",
          "Add a training loop with loss tracking — plot train vs validation accuracy",
          "Experiment with 3 different activation functions and compare results in a table"
        ],
        links: [
          { t: "PyTorch: Build Model Tutorial", u: "https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html" },
          { t: "Daniel Bourke: PyTorch full", u: "https://youtu.be/Z_ikDlimN6A" }
        ]
      },
      {
        n: 17, topic: "GenAI Basics: LLMs + Tokens", tags: ["llm"], hrs: "2.5",
        tasks: [
          "Understand what an LLM is: next-token prediction (tokens ≠ words) — estimate token counts for 5 example prompts you might send to an API",
          "Learn tokenization basics and why tokens affect cost + context window (resource overlaps with other LLM intros; pick one and move on)",
          "Map 4 ways to improve LLM performance: prompting, RAG, fine-tuning, pre-training — write 1 sentence on when you'd choose each"
        ],
        links: [
          { t: "Deep Dive into LLMs like ChatGPT — Karpathy (tokenization + training)", u: "https://www.youtube.com/watch?v=7xTGNNLPyMI" },
          { t: "Tokens explained (short)", u: "https://www.youtube.com/watch?v=nKSk_TiR8YA" }
        ]
      },
      {
        n: 18, topic: "Transformer Architecture", tags: ["llm"], hrs: "2.5",
        tasks: [
          "Read 'The Illustrated Transformer' end-to-end with a notebook open to test ideas",
          "Understand self-attention: Q, K, V matrices — compute attention scores manually for 3 tokens",
          "Read the 'Attention Is All You Need' abstract + architecture figure and annotate it"
        ],
        links: [
          { t: "The Illustrated Transformer", u: "https://jalammar.github.io/illustrated-transformer/" },
          { t: "Attention Is All You Need paper", u: "https://arxiv.org/abs/1706.03762" }
        ]
      },
      {
        n: 19, topic: "Python: Async + Multithreading", tags: ["python"], hrs: "2",
        tasks: [
          "Learn asyncio basics: async/await, event loop, coroutines",
          "Build an async API fetcher that hits 10 URLs concurrently",
          "Compare threading vs multiprocessing vs asyncio — write a short summary"
        ],
        links: [
          { t: "Real Python: Async IO", u: "https://realpython.com/async-io-python/" },
          { t: "Tech With Tim: asyncio", u: "https://youtu.be/t5Bo1Je9EmE" }
        ]
      },
      {
        n: 20, topic: "CNNs + Computer Vision Basics", tags: ["cv", "dl"], hrs: "3",
        tasks: [
          "Understand convolution, filters, padding, stride, and pooling layers conceptually",
          "Build a CNN from scratch with PyTorch and train on CIFAR-10",
          "Visualize the learned filters of your first conv layer using matplotlib"
        ],
        links: [
          { t: "Stanford CS231n: CNN Notes", u: "https://cs231n.github.io/convolutional-networks/" },
          { t: "PyTorch CIFAR-10 Tutorial", u: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html" }
        ]
      },
      {
        n: 21, topic: "HuggingFace Transformers Intro", tags: ["llm"], hrs: "2.5",
        tasks: [
          "Install transformers library, load a BERT model, and run sentiment analysis in <10 lines",
          "Explore the HuggingFace Hub — find 5 models for different tasks and note their architectures",
          "Complete HuggingFace NLP Course Chapter 1 — understand the pipeline abstraction"
        ],
        links: [
          { t: "HuggingFace NLP Course Ch1", u: "https://huggingface.co/learn/nlp-course/chapter1/1" },
          { t: "HuggingFace Model Hub", u: "https://huggingface.co/models" }
        ]
      },
      {
        n: 22, topic: "Project: Text Summarizer", tags: ["llm", "project"], hrs: "3",
        tasks: [
          "Build a text summarizer using a pretrained summarization model — test on 3 long articles and compare outputs",
          "Add controls for summary length (min/max) and measure latency for short vs long inputs",
          "Write a short README section: limitations (hallucinations, long-context truncation) and how you’d mitigate them with better prompting or RAG"
        ],
        links: [
          { t: "Repo: Text Summarizer Project (reference implementation)", u: "https://github.com/praj2408/Text-Summarizer-Project" }
        ]
      },
      {
        n: 23, topic: "System Design: Databases + Caching", tags: ["sysdesign"], hrs: "2",
        tasks: [
          "Learn SQL vs NoSQL trade-offs, indexing, and when to use each",
          "Understand Redis: key-value store, TTL, caching patterns",
          "Design a caching layer for an ML prediction API on paper — diagram it"
        ],
        links: [
          { t: "Gaurav Sen: Database Design", u: "https://youtu.be/lMTwSHL3F7M" },
          { t: "Redis Getting Started", u: "https://redis.io/docs/get-started/" }
        ]
      },
      {
        n: 24, topic: "Rest Day — Video Learning", tags: ["revision"], hrs: "1.5",
        tasks: [
          "Watch Andrew Ng's Week 1 Deep Learning lecture from Coursera (free to audit)",
          "Take structured notes using the Cornell method",
          "Identify the 2 concepts from this week you're least confident about"
        ],
        links: [
          { t: "DeepLearning.AI Coursera", u: "https://www.coursera.org/specializations/deep-learning" }
        ]
      },
      {
        n: 25, topic: "Training Dynamics + Hyperparameters", tags: ["dl", "mlops"], hrs: "2.5",
        tasks: [
          "Experiment with learning rate schedules on your MNIST model — log results",
          "Set up Weights & Biases for experiment tracking on any existing project",
          "Understand overfitting — add dropout and L2 regularization and compare results"
        ],
        links: [
          { t: "W&B Quickstart", u: "https://docs.wandb.ai/quickstart" },
          { t: "FastAI Practical Tips", u: "https://www.fast.ai/" }
        ]
      },
      {
        n: 26, topic: "OpenAI / Anthropic API — First Calls", tags: ["llm", "python"], hrs: "2.5",
        tasks: [
          "Get an Anthropic API key and make your first claude-3 chat completion call",
          "Implement a system prompt and experiment with temperature + max_tokens",
          "Build a CLI Q&A bot with conversation history stored in a Python list"
        ],
        links: [
          { t: "Anthropic API Quickstart", u: "https://docs.anthropic.com/en/api/getting-started" },
          { t: "OpenAI API Docs", u: "https://platform.openai.com/docs/quickstart" }
        ]
      },
      {
        n: 27, topic: "Docker Basics", tags: ["mlops"], hrs: "3",
        tasks: [
          "Understand Docker: images, containers, volumes, and the Dockerfile syntax",
          "Build a FastAPI hello-world app and write a Dockerfile to containerize it",
          "Push your image to Docker Hub and run it from the remote image"
        ],
        links: [
          { t: "Docker Getting Started", u: "https://docs.docker.com/get-started/" },
          { t: "FastAPI Docs", u: "https://fastapi.tiangolo.com/" }
        ]
      },
      {
        n: 28, topic: "Transfer Learning", tags: ["dl", "cv"], hrs: "3",
        tasks: [
          "Understand why pretrained weights accelerate training — study ImageNet features",
          "Fine-tune ResNet-18 on a 5-class custom dataset (use Kaggle or your own photos)",
          "Compare frozen vs unfrozen layers — record accuracy, training time, and loss curves"
        ],
        links: [
          { t: "PyTorch Transfer Learning Tutorial", u: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html" },
          { t: "Stanford CS231n: Transfer Learning", u: "https://cs231n.github.io/transfer-learning/" }
        ]
      },
      {
        n: 29, topic: "LangChain / LlamaIndex Basics", tags: ["llm"], hrs: "3",
        tasks: [
          "Install LangChain and build your first chain: prompt template → LLM → output parser",
          "Add memory to a conversational chain so it remembers previous turns",
          "Build a document Q&A bot over a single PDF using LangChain's RetrievalQA"
        ],
        links: [
          { t: "LangChain Quickstart", u: "https://python.langchain.com/docs/get_started/quickstart" },
          { t: "LlamaIndex Docs", u: "https://docs.llamaindex.ai/" }
        ]
      },
      {
        n: 30, topic: "Mini-Project: Sentiment Analyzer API", tags: ["llm", "mlops", "project"], hrs: "3",
        tasks: [
          "Fine-tune a DistilBERT model on an Amazon reviews dataset for sentiment classification",
          "Wrap the model in a FastAPI endpoint with proper request/response schemas",
          "Dockerize the API and push the repo to GitHub with a detailed README (overlaps with Day 43 fine-tuning; this one is a smaller, practical classifier-first project)"
        ],
        links: [
          { t: "HuggingFace Fine-Tuning Guide", u: "https://huggingface.co/learn/nlp-course/chapter3/1" },
          { t: "FastAPI Tutorial", u: "https://fastapi.tiangolo.com/tutorial/" }
        ]
      },
      {
        n: 31, topic: "Week 4 Revision", tags: ["revision"], hrs: "2",
        tasks: [
          "Review transformers, CNNs, Docker, and the HuggingFace pipeline abstraction",
          "Write a 1-page cheat sheet on: self-attention in your own words",
          "Browse Papers With Code and bookmark 3 papers relevant to your interests"
        ],
        links: [
          { t: "ML Cheatsheets", u: "https://ml-cheatsheet.readthedocs.io/" },
          { t: "Papers With Code", u: "https://paperswithcode.com/" }
        ]
      },
    ]
  },
  {
    phase: "Phase 3 — Intermediate Skills",
    phaseColor: "#2dd4bf",
    days: [
      {
        n: 32, topic: "Advanced RAG", tags: ["llm"], hrs: "3",
        tasks: [
          "Learn chunking strategies: fixed-size, sentence-based, semantic — compare retrieval quality",
          "Set up a FAISS or ChromaDB vector store and embed your documents",
          "Build a multi-document RAG system with source attribution in every answer (overlaps with Day 43 RAG app — this day focuses on retrieval quality + chunking experiments)"
        ],
        links: [
          { t: "LangChain RAG Tutorial", u: "https://python.langchain.com/docs/use_cases/question_answering/" },
          { t: "FAISS Docs", u: "https://faiss.ai/" },
          { t: "RAG explained (video)", u: "https://www.youtube.com/watch?v=qSvlGGDJ2WM" }
        ]
      },
      {
        n: 33, topic: "MLflow Experiment Tracking", tags: ["mlops"], hrs: "2.5",
        tasks: [
          "Install MLflow and log params, metrics, and model artifacts in a training run",
          "Set up a local MLflow tracking server and explore the UI",
          "Compare 3 different model runs side-by-side in the MLflow dashboard"
        ],
        links: [
          { t: "MLflow Quickstart", u: "https://mlflow.org/docs/latest/quickstart.html" },
          { t: "Made With ML: MLOps", u: "https://madewithml.com/" }
        ]
      },
      {
        n: 34, topic: "Object Detection (YOLO)", tags: ["cv"], hrs: "3",
        tasks: [
          "Understand the YOLO architecture: grid cells, anchor boxes, IoU, NMS",
          "Run YOLOv8 on a sample image and then on a webcam stream",
          "Fine-tune YOLOv8 on a custom class (e.g. detect your coffee mug) using Roboflow"
        ],
        links: [
          { t: "Ultralytics YOLOv8 Docs", u: "https://docs.ultralytics.com/" },
          { t: "Roboflow Datasets", u: "https://roboflow.com/" }
        ]
      },
      {
        n: 35, topic: "System Design: Message Queues", tags: ["sysdesign"], hrs: "2",
        tasks: [
          "Understand Kafka concepts: topics, partitions, producers, consumers, consumer groups",
          "Learn pub/sub vs queue patterns and when each is appropriate",
          "Design an event-driven ML pipeline for real-time Reels recommendations on paper"
        ],
        links: [
          { t: "Gaurav Sen: Kafka Explained", u: "https://youtu.be/Ch5VhJzaoaI" },
          { t: "ByteByteGo: Kafka Deep Dive", u: "https://youtu.be/HZklgPkboro" }
        ]
      },
      {
        n: 36, topic: "Prompt Engineering Deep Dive", tags: ["llm"], hrs: "2.5",
        tasks: [
          "Study and implement: zero-shot, few-shot, and chain-of-thought prompting techniques",
          "Experiment with XML-structured prompts in Claude and observe output quality differences",
          "Build a prompt testing harness that runs 5 variants and scores outputs automatically (if you already covered prompting basics on Day 16, skip straight to the harness)"
        ],
        links: [
          { t: "Anthropic Prompt Engineering Guide", u: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
          { t: "OpenAI Prompt Engineering", u: "https://platform.openai.com/docs/guides/prompt-engineering" },
          { t: "Prompt Engineering Tutorial (YouTube)", u: "https://www.youtube.com/watch?v=_ZvnD73m40o" }
        ]
      },
      {
        n: 37, topic: "Python: Testing + Code Quality", tags: ["python", "mlops"], hrs: "2.5",
        tasks: [
          "Write pytest unit tests for your sentiment API — cover happy path and edge cases",
          "Add mypy type checking to a Python file and fix all type errors",
          "Set up black and flake8 in your project as pre-commit hooks"
        ],
        links: [
          { t: "pytest Docs", u: "https://docs.pytest.org/" },
          { t: "Real Python: Python Testing", u: "https://realpython.com/python-testing/" }
        ]
      },
      {
        n: 38, topic: "Rest Day", tags: ["revision"], hrs: "1",
        tasks: [
          "Read one paper abstract from Papers With Code trending — summarize it in 5 bullets",
          "Journal: what projects are you most proud of? What's the biggest gap?",
          "No coding today — rest is part of the process"
        ],
        links: [
          { t: "Papers With Code: Trending", u: "https://paperswithcode.com/sota" }
        ]
      },
      {
        n: 39, topic: "Kubernetes Basics", tags: ["mlops"], hrs: "3",
        tasks: [
          "Install minikube and kubectl — understand Pods, Deployments, and Services",
          "Write a Kubernetes Deployment YAML for your FastAPI sentiment API",
          "Expose it with a Service and test it — then scale it to 3 replicas and observe"
        ],
        links: [
          { t: "Kubernetes Hello Minikube", u: "https://kubernetes.io/docs/tutorials/hello-minikube/" },
          { t: "Full Stack Deep Learning", u: "https://fullstackdeeplearning.com/" }
        ]
      },
      {
        n: 40, topic: "Multimodal AI: CLIP", tags: ["cv", "llm"], hrs: "2.5",
        tasks: [
          "Understand how CLIP jointly trains vision and language encoders with contrastive loss",
          "Run CLIP zero-shot image classification on 10 images from your own phone",
          "Use CLIP embeddings to build a simple reverse image search over 50 images"
        ],
        links: [
          { t: "OpenAI CLIP Paper", u: "https://arxiv.org/abs/2103.00020" },
          { t: "HuggingFace CLIP Demo", u: "https://huggingface.co/openai/clip-vit-base-patch32" }
        ]
      },
      {
        n: 41, topic: "A/B Testing for ML Models", tags: ["mlops", "sysdesign"], hrs: "2",
        tasks: [
          "Learn statistical significance, p-values, and power in the context of ML metrics",
          "Study canary releases, shadow mode, and traffic splitting patterns",
          "Design an A/B test plan for deploying your sentiment model to 10% of users"
        ],
        links: [
          { t: "Made With ML: Testing", u: "https://madewithml.com/courses/mlops/testing/" },
          { t: "Netflix A/B Testing Blog", u: "https://netflixtechblog.com/selecting-the-best-artwork-for-videos-through-a-b-testing-f6155c4595f6" }
        ]
      },
      {
        n: 42, topic: "Image Segmentation", tags: ["cv"], hrs: "2.5",
        tasks: [
          "Understand semantic vs instance vs panoptic segmentation and when to use each",
          "Run Meta's Segment Anything Model (SAM) on a custom image with point prompts",
          "Overlay the segmentation mask on the original image and save it"
        ],
        links: [
          { t: "Segment Anything (Meta)", u: "https://segment-anything.com/" },
          { t: "PyImageSearch: Segmentation", u: "https://pyimagesearch.com/2022/02/28/image-segmentation-with-deep-learning/" }
        ]
      },
      {
        n: 43, topic: "Project: RAG Chatbot App", tags: ["llm", "project"], hrs: "3",
        tasks: [
          "Build a RAG pipeline over 5+ PDFs with FAISS and LangChain",
          "Add a Streamlit UI with a chat interface, source display, and clear button",
          "Test with adversarial questions and add a fallback for out-of-context queries (this overlaps with other 'local RAG' builds — pick one repo as your base and use the other as a reference)"
        ],
        links: [
          { t: "Streamlit Docs", u: "https://docs.streamlit.io/" },
          { t: "Gradio Quickstart", u: "https://www.gradio.app/guides/quickstart" },
          { t: "Repo: simple-local-rag (reference)", u: "https://github.com/mrdbourke/simple-local-rag" }
        ]
      },
      {
        n: 44, topic: "Cloud ML: AWS SageMaker Intro", tags: ["mlops"], hrs: "3",
        tasks: [
          "Set up an AWS free-tier account and explore SageMaker Studio",
          "Run a SageMaker training job for your sentiment model with an S3 data source",
          "Deploy the trained model to a SageMaker endpoint and call it via Python SDK"
        ],
        links: [
          { t: "SageMaker Getting Started", u: "https://docs.aws.amazon.com/sagemaker/latest/dg/gs.html" },
          { t: "AWS ML Learning Path", u: "https://aws.amazon.com/training/learn-about/machine-learning/" }
        ]
      },
      {
        n: 45, topic: "Week 6 Revision + Portfolio Update", tags: ["revision", "project"], hrs: "2.5",
        tasks: [
          "Draw architecture diagrams for all projects and add them to GitHub READMEs",
          "Write a 300-word blog post about your RAG chatbot on Dev.to or Hashnode",
          "Update LinkedIn with new skills and link to your two deployed projects"
        ],
        links: [
          { t: "README Templates", u: "https://github.com/othneildrew/Best-README-Template" },
          { t: "Dev.to Blogging Platform", u: "https://dev.to/" }
        ]
      },
    ]
  },
  {
    phase: "Phase 4 — Advanced Concepts",
    phaseColor: "#fb923c",
    days: [
      {
        n: 46, topic: "Fine-Tuning LLMs (LoRA / QLoRA)", tags: ["llm"], hrs: "3",
        tasks: [
          "Understand LoRA: low-rank decomposition, rank parameter, and why it's memory-efficient",
          "Fine-tune Mistral-7B or LLaMA-3 on a custom Q&A dataset using QLoRA + PEFT library",
          "Evaluate the fine-tuned model on a held-out test set and compare to the base model (contrast with RAG + prompting; pre-training is typically out of scope for individuals)"
        ],
        links: [
          { t: "HuggingFace PEFT Library", u: "https://huggingface.co/docs/peft" },
          { t: "QLoRA Paper Explained", u: "https://arxiv.org/abs/2305.14314" },
          { t: "QLoRA paper explained (video)", u: "https://www.youtube.com/watch?v=6l8GZDPbFn8" }
        ]
      },
      {
        n: 47, topic: "ML Monitoring in Production", tags: ["mlops"], hrs: "2.5",
        tasks: [
          "Learn about data drift, concept drift, and model degradation patterns",
          "Set up Evidently AI to generate a data drift report on your sentiment model",
          "Define alerting thresholds and design a retraining trigger for your pipeline"
        ],
        links: [
          { t: "Evidently AI Docs", u: "https://docs.evidentlyai.com/" },
          { t: "WhyLabs Monitoring", u: "https://whylabs.ai/" }
        ]
      },
      {
        n: 48, topic: "Advanced CV: Face Detection + AR", tags: ["cv"], hrs: "2.5",
        tasks: [
          "Use MediaPipe Face Mesh to detect 468 facial landmarks in real-time",
          "Apply a simple AR filter: draw glasses or a hat aligned to the detected face",
          "Handle edge cases: multiple faces, profile angles, low-light conditions"
        ],
        links: [
          { t: "MediaPipe Face Landmarker", u: "https://developers.google.com/mediapipe/solutions/vision/face_landmarker" },
          { t: "PyImageSearch: Face Detection", u: "https://pyimagesearch.com/" }
        ]
      },
      {
        n: 49, topic: "System Design: ML at Scale", tags: ["sysdesign"], hrs: "2",
        tasks: [
          "Design the multi-stage recommendation funnel: 1M → 10K → 500 → 50 results",
          "Understand candidate generation, ranking, and filtering stages with real examples",
          "Estimate compute cost for serving 2 billion users daily — back-of-envelope math"
        ],
        links: [
          { t: "Gaurav Sen: ML System Design", u: "https://youtu.be/qQ7r3JKELiE" },
          { t: "Meta Engineering Blog", u: "https://engineering.fb.com/" }
        ]
      },
      {
        n: 50, topic: "Vector Databases Deep Dive", tags: ["llm", "sysdesign"], hrs: "3",
        tasks: [
          "Understand HNSW indexing, ANN search, and filtering in vector databases",
          "Compare Pinecone vs Qdrant vs Weaviate on latency, cost, and filtering support",
          "Swap your FAISS store in the RAG chatbot for Pinecone and benchmark query time"
        ],
        links: [
          { t: "Pinecone Docs", u: "https://docs.pinecone.io/" },
          { t: "Qdrant Docs", u: "https://qdrant.tech/documentation/" }
        ]
      },
      {
        n: 51, topic: "Python Performance: Profiling", tags: ["python"], hrs: "2.5",
        tasks: [
          "Profile your RAG pipeline using cProfile and line_profiler — find the bottlenecks",
          "Optimize the top 2 slowest functions using vectorization or algorithmic changes",
          "Measure before/after latency with a benchmark script and document the improvements"
        ],
        links: [
          { t: "Real Python: Profiling Guide", u: "https://realpython.com/python-profiling/" },
          { t: "Cython Tutorial", u: "https://cython.readthedocs.io/en/latest/src/tutorial/cython_tutorial.html" }
        ]
      },
      {
        n: 52, topic: "Rest + Portfolio Review", tags: ["revision"], hrs: "1",
        tasks: [
          "Post your best project in r/MachineLearning or Twitter/X and ask for feedback",
          "Review 3 open-source ML repos on GitHub — note what good READMEs look like",
          "Identify your top 3 weakest areas from the past 7 weeks"
        ],
        links: [
          { t: "r/MachineLearning", u: "https://www.reddit.com/r/MachineLearning/" },
          { t: "HuggingFace Forums", u: "https://discuss.huggingface.co/" }
        ]
      },
      {
        n: 53, topic: "LLM Agents + Tool Use", tags: ["llm"], hrs: "3",
        tasks: [
          "Understand the ReAct framework: Reason → Act → Observe loop for agents",
          "Build a tool-using agent with Anthropic's tool_use API that can search and calculate",
          "Add error handling and a max_steps limit to prevent infinite agent loops"
        ],
        links: [
          { t: "LangChain Agents Docs", u: "https://python.langchain.com/docs/modules/agents/" },
          { t: "Anthropic Tool Use Docs", u: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" }
        ]
      },
      {
        n: 54, topic: "Data Versioning (DVC)", tags: ["mlops"], hrs: "2",
        tasks: [
          "Initialize DVC in a project repo and track a dataset stored in S3 or Google Drive",
          "Create a DVC pipeline with stages: raw → processed → trained → evaluated",
          "Run dvc repro and verify the pipeline only reruns changed stages"
        ],
        links: [
          { t: "DVC Quickstart", u: "https://dvc.org/doc/start" },
          { t: "DVC: Data Versioning Tutorial", u: "https://dvc.org/doc/use-cases/versioning-data-and-models" }
        ]
      },
      {
        n: 55, topic: "Real-Time Inference Optimization", tags: ["dl", "mlops"], hrs: "3",
        tasks: [
          "Export your sentiment model to ONNX format and benchmark it vs PyTorch",
          "Apply dynamic quantization (INT8) and measure accuracy vs latency trade-off",
          "Set up ONNX Runtime with a FastAPI server — target <50ms p99 inference"
        ],
        links: [
          { t: "ONNX Runtime Docs", u: "https://onnxruntime.ai/" },
          { t: "PyTorch Quantization Guide", u: "https://pytorch.org/docs/stable/quantization.html" }
        ]
      },
      {
        n: 56, topic: "Multimodal Project: Image Captioning", tags: ["cv", "llm", "project"], hrs: "3",
        tasks: [
          "Load BLIP-2 from HuggingFace and generate captions for 20 test images",
          "Build a Gradio app with image upload, caption output, and confidence score",
          "Deploy to HuggingFace Spaces and share the public link in your portfolio"
        ],
        links: [
          { t: "HuggingFace BLIP Model", u: "https://huggingface.co/Salesforce/blip-image-captioning-large" },
          { t: "Gradio: Image Input Docs", u: "https://www.gradio.app/docs/image" }
        ]
      },
      {
        n: 57, topic: "MLOps: CI/CD for ML", tags: ["mlops"], hrs: "2.5",
        tasks: [
          "Set up a GitHub Actions workflow: lint → type check → unit tests on every PR",
          "Add a model evaluation gate: fail the CI if accuracy drops below threshold",
          "Automate Docker image build and push to Docker Hub on merge to main"
        ],
        links: [
          { t: "GitHub Actions Docs", u: "https://docs.github.com/en/actions" },
          { t: "Made With ML: CI/CD", u: "https://madewithml.com/courses/mlops/cicd/" }
        ]
      },
      {
        n: 58, topic: "Security in ML Systems", tags: ["llm", "sysdesign"], hrs: "2",
        tasks: [
          "Study the OWASP LLM Top 10: prompt injection, data leakage, insecure output handling",
          "Test your chatbot for prompt injection — try 5 attack patterns and document results",
          "Implement basic guardrails: input length limit, PII detection, and output filtering"
        ],
        links: [
          { t: "OWASP LLM Top 10", u: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
          { t: "Anthropic Safety Research", u: "https://www.anthropic.com/research" }
        ]
      },
      {
        n: 59, topic: "Week 8 Revision + Mock Interview", tags: ["revision", "sysdesign"], hrs: "2.5",
        tasks: [
          "Do a 45-minute mock ML system design interview on Pramp or with a friend",
          "Practice explaining fine-tuning, RAG, and model monitoring out loud",
          "List your top 5 strongest skills and 3 areas still needing work"
        ],
        links: [
          { t: "Pramp Mock Interviews", u: "https://www.pramp.com/" },
          { t: "ML Interview Questions", u: "https://github.com/khangich/machine-learning-interview" }
        ]
      },
    ]
  },
  {
    phase: "Phase 5 — Project Sprint",
    phaseColor: "#f59e0b",
    days: [
      {
        n: 60, topic: "Major Project Kickoff: Plan", tags: ["project"], hrs: "2",
        tasks: [
          "Choose a portfolio-worthy project: recommender system, NLP pipeline, or CV app",
          "Write a 1-page spec: problem, dataset, model approach, success metrics, tech stack",
          "Create the GitHub repo, draw the architecture diagram, and open the first issue"
        ],
        links: [
          { t: "Kaggle Competitions", u: "https://www.kaggle.com/competitions" },
          { t: "HuggingFace Spaces", u: "https://huggingface.co/spaces" }
        ]
      },
      {
        n: 61, topic: "Stanford CS224N: Attention Revisited", tags: ["llm"], hrs: "2.5",
        tasks: [
          "Watch the Stanford CS224N lecture on attention and BERT — take structured notes",
          "Implement scaled dot-product attention from scratch in PyTorch (no nn.MultiheadAttention)",
          "Reproduce one figure from the original Transformer paper using your implementation"
        ],
        links: [
          { t: "Stanford CS224N Lectures", u: "https://web.stanford.edu/class/cs224n/" }
        ]
      },
      {
        n: 62, topic: "Project: Data Collection + EDA", tags: ["project", "python"], hrs: "3",
        tasks: [
          "Download or collect your dataset — document its source, size, and license",
          "Run full EDA: distributions, correlations, class balance, sample inspection",
          "Document 3 data quality issues you found and how you plan to handle them"
        ],
        links: [
          { t: "HuggingFace Datasets", u: "https://huggingface.co/datasets" },
          { t: "Kaggle Datasets", u: "https://www.kaggle.com/datasets" }
        ]
      },
      {
        n: 63, topic: "GCP / Azure ML Intro", tags: ["mlops"], hrs: "2.5",
        tasks: [
          "Create a GCP or Azure free account and navigate the ML workspace",
          "Deploy a model to GCP Vertex AI Endpoints or Azure ML Endpoints",
          "Compare pricing, latency, and developer experience vs AWS SageMaker"
        ],
        links: [
          { t: "GCP Vertex AI Docs", u: "https://cloud.google.com/vertex-ai/docs" },
          { t: "Azure ML Docs", u: "https://learn.microsoft.com/en-us/azure/machine-learning/" }
        ]
      },
      {
        n: 64, topic: "Project: Feature Engineering", tags: ["project", "dl"], hrs: "3",
        tasks: [
          "Build a feature pipeline: raw data → cleaned → encoded → normalized → ready",
          "Add at least 3 engineered features (interactions, embeddings, or domain-specific)",
          "Validate features with a baseline model — check feature importance scores"
        ],
        links: [
          { t: "Kaggle: Feature Engineering Course", u: "https://www.kaggle.com/learn/feature-engineering" },
          { t: "Scikit-learn Preprocessing", u: "https://scikit-learn.org/stable/modules/preprocessing.html" }
        ]
      },
      {
        n: 65, topic: "LLM Evaluation Frameworks", tags: ["llm", "mlops"], hrs: "2.5",
        tasks: [
          "Understand BLEU, ROUGE, and perplexity — compute them on a text generation task",
          "Set up ragas to evaluate your RAG chatbot: faithfulness, answer relevancy, context recall",
          "Build a simple LLM-as-judge pipeline that scores outputs on a 1–5 scale"
        ],
        links: [
          { t: "ragas Evaluation Framework", u: "https://docs.ragas.io/en/stable/" },
          { t: "HuggingFace Evaluate Library", u: "https://huggingface.co/blog/evaluation-structured-outputs" }
        ]
      },
      {
        n: 66, topic: "Rest Day", tags: ["revision"], hrs: "1",
        tasks: [
          "Read a chapter from 'Designing Machine Learning Systems' by Chip Huyen",
          "Browse Chip Huyen's blog and find one article that changes how you think about ML",
          "No coding — walk outside and let ideas marinate"
        ],
        links: [
          { t: "Chip Huyen's Blog", u: "https://huyenchip.com/blog.html" }
        ]
      },
      {
        n: 67, topic: "Project: Model Training", tags: ["project", "dl"], hrs: "3",
        tasks: [
          "Train your project's core model — log all experiments to W&B",
          "Run at least 5 hyperparameter combinations with Optuna or manual grid search",
          "Evaluate on the held-out test set and save your best model checkpoint"
        ],
        links: [
          { t: "W&B Experiment Tracking", u: "https://docs.wandb.ai/" },
          { t: "Optuna Hyperparameter Tuning", u: "https://optuna.org/" }
        ]
      },
      {
        n: 68, topic: "Advanced Python: Pydantic + Typing", tags: ["python"], hrs: "2.5",
        tasks: [
          "Refactor your project's data models using Pydantic v2 with full type annotations",
          "Add Protocol classes and TypedDict to improve structural typing",
          "Run mypy --strict on your codebase and resolve all errors"
        ],
        links: [
          { t: "Pydantic v2 Docs", u: "https://docs.pydantic.dev/" },
          { t: "Real Python: Type Checking", u: "https://realpython.com/python-type-checking/" }
        ]
      },
      {
        n: 69, topic: "Project: API + UI Layer", tags: ["project", "mlops"], hrs: "3",
        tasks: [
          "Wrap your trained model in a FastAPI app with proper input validation",
          "Build a Streamlit or Gradio frontend with at least 3 interactive features",
          "Add API key authentication — test the full stack locally end-to-end"
        ],
        links: [
          { t: "FastAPI Security: API Keys", u: "https://fastapi.tiangolo.com/tutorial/security/" },
          { t: "Streamlit Multipage Apps", u: "https://docs.streamlit.io/library/get-started/multipage-apps" }
        ]
      },
      {
        n: 70, topic: "Recommender Systems Architecture", tags: ["dl", "sysdesign"], hrs: "2.5",
        tasks: [
          "Study collaborative filtering (matrix factorization) and content-based filtering",
          "Read Google's two-tower model paper — understand how it scales to billions of items",
          "Sketch a recommendation system architecture for a product like YouTube Shorts"
        ],
        links: [
          { t: "Netflix: Recommendation Systems", u: "https://netflixtechblog.com/system-architectures-for-personalization-and-recommendation-e081aa94b5d8" },
          { t: "Google Two-Tower Paper", u: "https://research.google/pubs/pub46488/" }
        ]
      },
      {
        n: 71, topic: "Project: Testing + Monitoring", tags: ["project", "mlops"], hrs: "2.5",
        tasks: [
          "Write integration tests for your API endpoints using pytest and httpx",
          "Add structured logging with request IDs and response times to every endpoint",
          "Set up Evidently AI drift monitoring on your project's incoming data"
        ],
        links: [
          { t: "Evidently AI", u: "https://docs.evidentlyai.com/" },
          { t: "pytest-asyncio", u: "https://pytest-asyncio.readthedocs.io/" }
        ]
      },
      {
        n: 72, topic: "Project: Deploy to Cloud", tags: ["project", "mlops"], hrs: "3",
        tasks: [
          "Deploy your full project to Render, Railway, or HuggingFace Spaces (free tier)",
          "Set up a GitHub Actions CI/CD pipeline that auto-deploys on push to main",
          "Verify the public URL works end-to-end and get 3 people to test it"
        ],
        links: [
          { t: "Render.com Free Tier", u: "https://render.com/" },
          { t: "HuggingFace Spaces Deploy", u: "https://huggingface.co/docs/hub/spaces" }
        ]
      },
      {
        n: 73, topic: "Week 10 Revision + README Polish", tags: ["revision", "project"], hrs: "2",
        tasks: [
          "Record a 2-min Loom demo video walking through your project's key features",
          "Write a comprehensive README with: problem, solution, architecture, demo, local setup",
          "Peer review another person's GitHub project and give specific written feedback"
        ],
        links: [
          { t: "Loom Screen Recorder", u: "https://www.loom.com/" },
          { t: "Awesome README Templates", u: "https://github.com/othneildrew/Best-README-Template" }
        ]
      },
    ]
  },
  {
    phase: "Phase 6 — Polish + Interview Prep",
    phaseColor: "#34d399",
    days: [
      {
        n: 74, topic: "ML System Design Interview Practice", tags: ["sysdesign", "revision"], hrs: "2.5",
        tasks: [
          "Practice designing a fraud detection system: data, features, model, serving, monitoring",
          "Practice designing a content moderation system for user-uploaded images",
          "Time yourself: 45 minutes per design, then self-critique your weak points"
        ],
        links: [
          { t: "ML System Design Interview Guide", u: "https://github.com/khangich/machine-learning-interview" },
          { t: "Exponent: ML Engineer Interviews", u: "https://www.tryexponent.com/courses/ml-engineer" }
        ]
      },
      {
        n: 75, topic: "Second Portfolio Project: Start", tags: ["project"], hrs: "2.5",
        tasks: [
          "Pick a smaller second project in a different domain from your first",
          "Scope it to be completable in 3–4 days — create the repo and write the spec",
          "Start data collection or find a pre-existing clean dataset"
        ],
        links: [
          { t: "500+ AI Project Ideas", u: "https://github.com/ashishpatel26/500-AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-with-code" }
        ]
      },
      {
        n: 76, topic: "Coding Interview: Python Patterns", tags: ["python", "revision"], hrs: "2.5",
        tasks: [
          "Solve 5 Neetcode 150 problems: 2 arrays, 2 hashmaps, 1 two-pointer",
          "Focus on time/space complexity analysis — write it in comments for each solution",
          "Review common Python interview tricks: defaultdict, Counter, heapq, bisect"
        ],
        links: [
          { t: "LeetCode", u: "https://leetcode.com/" },
          { t: "Neetcode 150 Practice", u: "https://neetcode.io/practice" }
        ]
      },
      {
        n: 77, topic: "Networking + Community Building", tags: ["revision"], hrs: "1.5",
        tasks: [
          "Post your best project on LinkedIn with a technical writeup — use 3 relevant hashtags",
          "Join the HuggingFace Discord and introduce yourself in #introductions",
          "Find and message 3 AI engineers on LinkedIn with a genuine, specific compliment about their work"
        ],
        links: [
          { t: "HuggingFace Discord", u: "https://discord.gg/hugging-face-879548962464493619" },
          { t: "AI LinkedIn Community", u: "https://www.linkedin.com/jobs/ai-engineer-jobs/" }
        ]
      },
      {
        n: 78, topic: "Second Project: Core Build", tags: ["project"], hrs: "3",
        tasks: [
          "Implement the model training pipeline for your second project",
          "Keep scope tight: one model, one dataset, one clear output metric",
          "Document your design choices in a DECISIONS.md file in the repo"
        ],
        links: [
          { t: "Fast.ai Practical Deep Learning", u: "https://course.fast.ai/" },
          { t: "Kaggle Notebooks for Inspiration", u: "https://www.kaggle.com/code" }
        ]
      },
      {
        n: 79, topic: "Key LLM Papers Deep Dive", tags: ["llm", "revision"], hrs: "2",
        tasks: [
          "Read the InstructGPT paper summary — understand RLHF and why it matters",
          "Read Anthropic's Constitutional AI paper — understand the RLAIF approach",
          "Write a 200-word comparison: how do InstructGPT and Constitutional AI differ?"
        ],
        links: [
          { t: "InstructGPT Paper", u: "https://arxiv.org/abs/2203.02155" },
          { t: "Constitutional AI — Anthropic", u: "https://arxiv.org/abs/2212.08073" }
        ]
      },
      {
        n: 80, topic: "Full Rest Day", tags: ["revision"], hrs: "0",
        tasks: [
          "Complete rest — no coding, no papers, no videos",
          "Reflect on your 11-week journey and what surprised you most",
          "Sleep 8 hours. Your brain is consolidating everything you've learned."
        ],
        links: []
      },
      {
        n: 81, topic: "Second Project: Deploy + Polish", tags: ["project", "mlops"], hrs: "3",
        tasks: [
          "Deploy your second project publicly (HuggingFace Spaces or Render)",
          "Write a clean README with a live demo link, architecture section, and results",
          "Add a 90-second video demo to the README using Loom"
        ],
        links: [
          { t: "HuggingFace Spaces", u: "https://huggingface.co/docs/hub/spaces" },
          { t: "Vercel for Web UIs", u: "https://vercel.com/" }
        ]
      },
      {
        n: 82, topic: "Behavioral Interview Prep", tags: ["revision"], hrs: "2",
        tasks: [
          "Write out 8 STAR stories covering: a tough technical decision, a failure, a collaboration",
          "Practice 3 stories out loud in front of a mirror or record yourself",
          "Prepare your answer to 'Why AI engineering?' and 'Walk me through your best project'"
        ],
        links: [
          { t: "STAR Method Interview Guide", u: "https://www.themuse.com/advice/star-interview-method" },
          { t: "AI Eng Behavioral Questions", u: "https://github.com/microsoft/AI-For-Beginners" }
        ]
      },
      {
        n: 83, topic: "Mock Technical Interview", tags: ["revision", "sysdesign"], hrs: "2.5",
        tasks: [
          "Do a 45-min mock ML coding interview on Pramp — implement a feature from scratch",
          "Do a 45-min mock ML system design with a friend or on interviewing.io",
          "Write a debrief: 3 things that went well, 3 things to improve before real interviews"
        ],
        links: [
          { t: "Pramp Mock Interviews", u: "https://www.pramp.com/" },
          { t: "Interviewing.io", u: "https://interviewing.io/" }
        ]
      },
      {
        n: 84, topic: "Apply + Cold Outreach", tags: ["revision"], hrs: "2",
        tasks: [
          "Apply to 10 AI/ML Engineer roles on LinkedIn, Wellfound, and company career pages",
          "Write 3 personalized cold emails to AI engineers at companies you admire",
          "Set up a job tracker spreadsheet: company, role, date applied, status, next step"
        ],
        links: [
          { t: "LinkedIn AI Engineer Jobs", u: "https://www.linkedin.com/jobs/ai-engineer-jobs/" },
          { t: "Wellfound AI Startup Jobs", u: "https://wellfound.com/jobs" }
        ]
      },
      {
        n: 85, topic: "Deep Dive: Weakest Area", tags: ["revision"], hrs: "3",
        tasks: [
          "Identify your single weakest topic from your self-assessment and go deep for the full session",
          "Find 3 resources (1 video, 1 article, 1 hands-on tutorial) and work through all 3",
          "Build a tiny working example that demonstrates the concept you were weakest at"
        ],
        links: [
          { t: "Full Stack Deep Learning", u: "https://fullstackdeeplearning.com/" },
          { t: "Made With ML Complete Guide", u: "https://madewithml.com/" }
        ]
      },
      {
        n: 86, topic: "Portfolio Final Polish", tags: ["revision", "project"], hrs: "2.5",
        tasks: [
          "Record walkthroughs for ALL projects and upload to YouTube (unlisted) or Loom",
          "Update your LinkedIn headline, about section, and add all projects under Featured",
          "Cross-link everything: GitHub bio → LinkedIn → projects → live demos"
        ],
        links: [
          { t: "Loom Screen Recorder", u: "https://www.loom.com/" },
          { t: "Awesome GitHub Profile READMEs", u: "https://github.com/abhisheknaiidu/awesome-github-profile-readme" }
        ]
      },
      {
        n: 87, topic: "Day 87: Celebrate + Plan Next", tags: ["revision"], hrs: "1",
        tasks: [
          "Review everything you've built: list every project, skill, and concept from all 87 days",
          "Write your 3-month plan: specialization track, open source contributions, target companies",
          "Share your completed roadmap journey publicly — you earned it. 🎉"
        ],
        links: [
          { t: "Papers With Code: Stay Current", u: "https://paperswithcode.com/" },
          { t: "Open Source ML Projects", u: "https://github.com/topics/machine-learning" }
        ]
      },
    ]
  }
];
