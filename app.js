// ========== AWS SERVICES DATA ==========
const services = [
  {
    id: 's3',
    icon: '🪣',
    title: 'Amazon S3',
    subtitle: 'Simple Storage Service',
    color: '#7c5cfc',
    desc: 'Think of S3 as an "Infinite Hard Drive" in the sky. Unlike a normal hard drive that can fail or run out of space, S3 is designed to be virtually indestructible and can store exabytes of data without you ever needing to "upgrade" anything. It is the go-to place for anything that needs to be stored permanently.',
    tags: ['File Storage', 'Backup', 'Static Hosting', 'Data Lake'],
    howItWorks: [
      'Create a "Bucket" (a unique folder in the AWS universe).',
      'Upload your file (called an "Object") to that bucket.',
      'AWS makes 3 copies of your file across different buildings automatically.',
      'Access your file via a secure URL link from anywhere in the world.'
    ],
    fresherTip: 'Always name your buckets in lowercase and avoid using sensitive info in the name, as bucket names must be unique across the entire world!',
    comparison: { simple: 'A giant, shared Google Drive folder', tech: 'Distributed Object Store' },
    concepts: [
      { title: 'Buckets & Objects', body: 'A "Bucket" is like a root folder. Everything you upload is an "Object". Every object gets its own unique web address (URL).' },
      { title: 'Storage Classes', body: 'Choose how much you pay. Use "Standard" for files you need now, and "Glacier" for files you only need once a year.' },
      { title: 'Versioning', body: 'Like a "History" tab. If you accidentally delete a file, you can go back in time and restore the previous version.' },
      { title: 'Bucket Policies', body: 'Rules that say who can enter. You can make a bucket "Public" to host a website, or "Private" for your secret files.' },
    ],
    useCases: [
      { icon: '🌐', text: 'Host a simple website (HTML/CSS) without needing a server' },
      { icon: '💾', text: 'Safe place for company backups and database snapshots' },
      { icon: '🎥', text: 'Store professional videos for streaming apps like Netflix' },
      { icon: '📦', text: 'A "Data Lake" where you dump raw data for later analysis' },
    ],
    pricing: 'You only pay for what you use (GB per month). The first 5GB is usually free for new accounts! It is incredibly cheap for small projects.',
    code: `<span class="comment"># Upload "photo.jpg" to your bucket</span>
aws s3 cp photo.jpg s3://my-vacation-pics/photo.jpg

<span class="comment"># List all files in a bucket</span>
aws s3 ls s3://my-vacation-pics/`,
  },
  {
    id: 'ec2',
    icon: '🖥️',
    title: 'Amazon EC2',
    subtitle: 'Elastic Compute Cloud',
    color: '#4f8ef7',
    desc: 'EC2 is like renting a powerful computer from Amazon. Instead of buying hardware that gets old, you rent a "Virtual Instance". It gives you total freedom: you choose the RAM, the CPU, and the Operating System (Windows or Linux). It is the backbone of almost every app on AWS.',
    tags: ['Virtual Servers', 'Compute', 'Linux/Windows', 'Scalable'],
    howItWorks: [
      'Pick an "AMI" (The template/OS you want to use).',
      'Choose an "Instance Type" (How much RAM and CPU you need).',
      'Launch the server and connect to it over the internet.',
      'Install your software and run your application 24/7.'
    ],
    fresherTip: 'Always remember to STOP your EC2 instances when you are not using them to avoid unexpected charges!',
    comparison: { simple: 'Renting a laptop from a store', tech: 'Virtual Machine (VM)' },
    concepts: [
      { title: 'Instance Types', body: 'Like picking a phone model. "t3.micro" is small and cheap, while "c6" is a high-speed racing car for compute tasks.' },
      { title: 'AMI (Images)', body: 'A "Template" of a computer. Includes the OS and pre-installed apps so you can launch 100 identical servers in one click.' },
      { title: 'Security Groups', body: 'A "Digital Bouncer". It sits in front of your server and only lets people in on specific ports (like Port 80 for Web).' },
      { title: 'EBS Volumes', body: 'The "USB Stick" or Hard Drive for your EC2. You can unplug it from one server and plug it into another without losing data.' },
    ],
    useCases: [
      { icon: '🚀', text: 'Run your own web server (like Nginx or Apache)' },
      { icon: '🧮', text: 'Do heavy math calculations or data processing' },
      { icon: '🗄️', text: 'Host your own database manually if you want total control' },
      { icon: '🏗️', text: 'Create temporary environments for testing new code' },
    ],
    pricing: 'Billed per second. Use "Free Tier" eligible instances (like t2.micro) to learn for free for up to 750 hours every month!',
    code: `<span class="comment"># Launch a new Linux server</span>
aws ec2 run-instances --image-id ami-12345 --count 1 --instance-type t2.micro

<span class="comment"># Stop your server</span>
aws ec2 stop-instances --instance-ids i-0abcdef12345`,
  },
  {
    id: 'ecs',
    icon: '🐳',
    title: 'Amazon ECS',
    subtitle: 'Elastic Container Service',
    color: '#00d4aa',
    desc: 'If you have many small apps running in "Docker Containers", ECS is the manager. Imagine a shipping port: your apps are the cargo containers, and ECS is the crane and computer system that makes sure every container goes to the right ship (server) and stays safe.',
    tags: ['Docker', 'Microservices', 'Fargate', 'Containers'],
    howItWorks: [
      'Package your code into a "Docker Image".',
      'Create a "Task Definition" (The instructions on how to run it).',
      'Tell ECS how many copies you want running.',
      'ECS places them on servers and restarts them if they crash.'
    ],
    fresherTip: 'Start with Fargate! It is much easier for beginners because you dont have to manage the underlying Linux servers.',
    comparison: { simple: 'A manager of a shipping port', tech: 'Container Orchestrator' },
    concepts: [
      { title: 'Clusters & Services', body: 'A "Cluster" is the playground. A "Service" is the logic that ensures your app is always "up" and running.' },
      { title: 'Fargate (Serverless)', body: 'The "Easy Mode". You give ECS your image, and AWS handles the hardware. You never see a server.' },
      { title: 'Task Definition', body: 'The "Blueprint". It tells AWS: "Use this much CPU, this much RAM, and run this specific Docker image."' },
      { title: 'EC2 Launch Type', body: 'The "Pro Mode". You manage the servers yourself. Cheaper for big apps but requires more Linux knowledge.' },
    ],
    useCases: [
      { icon: '🔄', text: 'Running a "Microservices" architecture where apps are split into pieces' },
      { icon: '🔁', text: 'Zero-downtime updates: ECS starts new version before killing the old one' },
      { icon: '📈', text: 'Auto-scaling: Add more containers when your website gets busy' },
    ],
    pricing: 'With Fargate, you pay for the CPU and RAM your containers use every second. ECS management itself is actually free!',
    code: `<span class="comment"># Update a service to deploy your latest code</span>
aws ecs update-service --cluster production --service web-app --force-new-deployment`,
  },
  {
    id: 'lambda',
    icon: '⚡',
    title: 'AWS Lambda',
    subtitle: 'Serverless Functions',
    color: '#ff9a9a',
    desc: 'The ultimate "Hands-Off" compute. You stop worrying about servers entirely. You just write code (a "Function") and AWS runs it only when something happens. It is like an "Electric Switch": it only consumes power (and costs money) when it is actually turned ON.',
    tags: ['Serverless', 'Event-Driven', 'No-Ops', 'Auto-Scale'],
    howItWorks: [
      'Write your code (Python, Node.js, etc.) and upload it.',
      'Set a "Trigger" (like a file being uploaded to S3).',
      'AWS launches a tiny "Container" to run your code for a few seconds.',
      'The container disappears, and you only pay for those few seconds.'
    ],
    fresherTip: 'Lambda is perfect for "glue" code that connects different AWS services together without spinning up a whole server.',
    comparison: { simple: 'An electric light that only glows when you walk in', tech: 'Functions as a Service (FaaS)' },
    concepts: [
      { title: 'Event Triggers', body: 'Lambda is "Reactionary". It waits for something to happen: an API call, a database change, or a timer.' },
      { title: 'Cold Starts', body: 'The "Waking Up" delay. The very first time you call a Lambda after a while, it might take a second to start.' },
      { title: 'Concurrency', body: 'Lambda can run 1,000 copies of your code at the same exact time if 1,000 users call it simultaneously.' },
      { title: 'Timeout', body: 'Lambda is for "Quick Tasks". It has a maximum limit of 15 minutes. It is NOT for 24/7 background tasks.' },
    ],
    useCases: [
      { icon: '🖼️', text: 'Automatically resize an image as soon as it is uploaded to S3' },
      { icon: '⏰', text: 'Run a "Cron Job" to send daily email reports at 9 AM' },
      { icon: '🔗', text: 'Create a "Serverless API" that only costs money when someone calls it' },
    ],
    pricing: 'Extremely generous! The first 1 Million requests every month are FREE forever. Great for hobbyists and startups.',
    code: `<span class="comment"># A simple Python function that greets a user</span>
def lambda_handler(event, context):
    return "Hello from the Cloud!"`,
  },
  {
    id: 'alb',
    icon: '⚖️',
    title: 'ALB',
    subtitle: 'Application Load Balancer',
    color: '#ffd166',
    desc: 'Think of ALB as the "Traffic Police" for your busy website. When thousands of people visit, ALB decides which server is least busy and sends the visitor there. It makes sure no single server gets overwhelmed and crashes.',
    tags: ['Traffic Management', 'Routing', 'High Availability'],
    howItWorks: [
      'Create a "Listener" to wait for incoming HTTP traffic.',
      'Define "Routing Rules" (e.g., send /api to Backend team).',
      'ALB checks the "Health" of each server in the target group.',
      'Traffic is sent only to healthy servers.',
    ],
    fresherTip: 'Always configure health checks! Without them, the Load Balancer might send traffic to a crashed server.',
    comparison: { simple: 'A host at a restaurant seating people at empty tables', tech: 'Layer 7 Load Balancer' },
    concepts: [
      { title: 'Listeners', body: 'The "Ear" of the load balancer. It listens for traffic on Port 80 (HTTP) or Port 443 (Secure HTTPS).' },
      { title: 'Target Groups', body: 'The "Team" of servers. ALB keeps a list of servers and checks if they are "Alive" before sending work.' },
      { title: 'Path Routing', body: 'Smart routing! You can tell ALB: "Send /images to S3, and /api to my EC2 servers."' },
      { title: 'SSL Termination', body: 'ALB handles the "Secure" part of HTTPS, so your servers dont have to do the heavy encryption work.' },
    ],
    useCases: [
      { icon: '🌐', text: 'Spreading millions of web visitors across multiple servers' },
      { icon: '🔒', text: 'Adding "HTTPS" to your site easily for better security' },
      { icon: '🚧', text: 'Maintenance: Redirect traffic away from a server while you update it' },
    ],
    pricing: 'You pay a small hourly fee + a tiny fee based on the amount of traffic processed. Usually very affordable.',
    code: `<span class="comment"># Create a "Target Group" for your servers</span>
aws elbv2 create-target-group --name my-web-team --protocol HTTP --port 80`,
  },
  {
    id: 'cloudwatch',
    icon: '📊',
    title: 'CloudWatch',
    subtitle: 'Monitoring & Observability',
    color: '#00d4aa',
    desc: 'CloudWatch is the "CCTV and Heart Monitor" for AWS. It collects data (Metrics) and text logs so you can see exactly how your cloud apps are performing in real-time. If something breaks, CloudWatch is where you look to find out WHY.',
    tags: ['Monitoring', 'Logging', 'Alarms', 'Dashboards'],
    howItWorks: [
      'AWS services automatically send metrics (like CPU%) to CloudWatch.',
      'Your app sends text logs (errors, info) to Log Groups.',
      'You set "Alarms" to watch for specific bad numbers.',
      'You view everything on a "Dashboard" with pretty graphs.'
    ],
    fresherTip: 'Set an "Estimated Charges" alarm early on so you get an email if your AWS bill starts growing too fast!',
    comparison: { simple: 'A heart monitor in a hospital', tech: 'Monitoring & Logging Service' },
    concepts: [
      { title: 'Metrics', body: 'Numbers that show health. Examples: "CPU is at 80%" or "10 Users logged in."' },
      { title: 'Log Groups', body: 'The "Diary" of your app. Every error message can be stored here for you to search later.' },
      { title: 'Alarms', body: 'The "Sirens". You can say: "If CPU goes above 90%, send me an email immediately!"' },
      { title: 'Dashboards', body: 'A big screen for your office showing all your graphs in one beautiful place.' },
    ],
    useCases: [
      { icon: '🚨', text: 'Getting notified on your phone when your website goes down' },
      { icon: '📋', text: 'Searching through millions of lines of error logs to find a bug' },
      { icon: '📉', text: 'Seeing a graph of how many people use your app every hour' },
    ],
    pricing: 'Basic monitoring is free. You pay for "Custom Metrics" and "Log Storage" if you have a lot of data.',
    code: `<span class="comment"># Search through logs for "Error"</span>
aws logs filter-log-events --log-group-name MyAppLogs --filter-pattern "Error"`,
  },
  {
    id: 'rds',
    icon: '🗄️',
    title: 'Amazon RDS',
    subtitle: 'Relational Database Service',
    color: '#4f8ef7',
    desc: 'RDS is a "Managed Database." Instead of installing SQL manually, AWS gives you a ready-to-use database (like MySQL or Postgres). They handle the "boring but scary" stuff like backups, security updates, and fixing the database if the hardware breaks.',
    tags: ['SQL', 'Databases', 'Managed', 'Auto-Backup'],
    howItWorks: [
      'Choose your database "Engine" (e.g., MySQL, Postgres).',
      'Pick the size of the database (RAM/Storage).',
      'AWS provisions the database and gives you a "Connection String".',
      'Connect your app using the link and start running SQL queries.'
    ],
    fresherTip: 'Always enable "Deletion Protection" on production databases so you dont accidentally delete years of data with one click!',
    comparison: { simple: 'A personal librarian who manages all your books', tech: 'Managed RDBMS' },
    concepts: [
      { title: 'Multi-AZ', body: 'The "Spare Tire". AWS keeps a hidden copy of your DB in another building in case of disaster.' },
      { title: 'Read Replicas', body: 'The "Clones". If your site has millions of readers, you can create clones to handle the load.' },
      { title: 'Aurora', body: 'AWS\'s "Super Database". 5x faster than normal MySQL and can survive almost any crash.' },
      { title: 'Point-in-Time Recovery', body: 'A "Time Machine". RDS lets you restore your data to any second in the last 30 days.' },
    ],
    useCases: [
      { icon: '🛒', text: 'Storing customer orders, product prices, and inventory' },
      { icon: '👥', text: 'Keeping track of user profiles and passwords securely' },
      { icon: '💰', text: 'Financial transactions that need to be 100% accurate (ACID)' },
    ],
    pricing: 'Billed per hour based on size. "Free Tier" allows you to run a small database for free to learn.',
    code: `<span class="comment"># Create a new Postgres database</span>
aws rds create-db-instance --db-instance-identifier my-db --engine postgres --allocated-storage 20`,
  },
  {
    id: 'iam',
    icon: '🔐',
    title: 'AWS IAM',
    subtitle: 'Identity & Access Management',
    color: '#ff9a9a',
    desc: 'The "Security Guard and ID Badge" system. It controls exactly WHO (Users) can do WHAT (Actions) in your AWS account. Without IAM, anyone could delete your entire company website by mistake. It is the most important service for keeping your cloud resources safe.',
    tags: ['Security', 'Identity', 'Permissions', 'Roles'],
    howItWorks: [
      'Create "Users" for the real people on your team.',
      'Assign "Policies" (JSON rulebooks) to those users.',
      'Create "Roles" for services (like an EC2 needing S3 access).',
      'AWS checks these rules every single time anyone does anything.'
    ],
    fresherTip: 'Never use your "Root" account for daily work. Create an IAM user with admin powers and use that instead!',
    comparison: { simple: 'A master key system for a skyscraper', tech: 'Identity & Access Management' },
    concepts: [
      { title: 'Users & Groups', body: 'Users are for people. Groups are for teams (like "Developers") to manage permissions easily.' },
      { title: 'Roles', body: 'A "Temporary ID Badge". Used by apps or servers instead of using a password.' },
      { title: 'JSON Policies', body: 'The "Rulebook". A file that says: "Allow John to READ S3, but DENY him from DELETING."' },
      { title: 'MFA', body: 'Multi-Factor Authentication. The 6-digit code on your phone. ESSENTIAL for security.' },
    ],
    useCases: [
      { icon: '👷', text: 'Giving a new employee access to only the services they need' },
      { icon: '🤖', text: 'Allowing an EC2 server to upload files to S3 without a password' },
      { icon: '🏢', text: 'Organizing complex teams into groups with different power levels' },
    ],
    pricing: 'IAM is completely FREE. AWS encourages you to be secure, so they dont charge for it!',
    code: `<span class="comment"># Create a new user named John</span>
aws iam create-user --user-name JohnDoe`,
  },
];

// ========== QUIZ DATA ==========
const questions = [
  { q: 'When you want to store a large video file and get a link to share it, which service is the "Infinite Hard Drive"?', opts: ['Amazon EC2', 'Amazon S3', 'Amazon RDS', 'AWS Lambda'], ans: 1, exp: 'Amazon S3 (Simple Storage Service) is an object storage service designed to store and retrieve any amount of data from anywhere on the web.' },
  { q: 'Which EC2 pricing model is like a "last-minute flight deal" — very cheap but can be canceled by AWS?', opts: ['On-Demand', 'Reserved Instances', 'Spot Instances', 'Savings Plans'], ans: 2, exp: 'Spot Instances allow you to use spare AWS capacity at up to a 90% discount. However, AWS can take them back with a 2-minute notice if they need the capacity.' },
  { q: 'If you want to run Docker containers without managing any servers at all, which ECS mode should you use?', opts: ['EC2 Launch Type', 'Fargate', 'Lambda Mode', 'S3 Hosting'], ans: 1, exp: 'Fargate is a serverless compute engine for containers. You don\'t have to manage EC2 instances; AWS handles everything under the hood.' },
  { q: 'What is a "Cold Start" in AWS Lambda?', opts: ['Lambda running in a cold data center', 'The delay when a function runs for the first time after being idle', 'A function that has crashed due to an error', 'A function scheduled to run at midnight'], ans: 1, exp: 'A cold start occurs when a Lambda function is invoked after being idle. AWS has to provision a new container, which takes a bit of time (usually 0.1 to 1 second).' },
  { q: 'Which service acts like the "Traffic Police" to distribute visitors across multiple servers?', opts: ['CloudWatch', 'ALB (Application Load Balancer)', 'IAM', 'S3'], ans: 1, exp: 'ALB (Application Load Balancer) sits at the front and routes incoming application traffic across multiple targets, such as EC2 instances or containers.' },
  { q: 'Which CloudWatch "Siren" tells you when something is wrong (like a server reaching 95% CPU)?', opts: ['Log Group', 'Metric', 'Alarm', 'Dashboard'], ans: 2, exp: 'CloudWatch Alarms watch a single metric and perform one or more actions (like sending an email) when the metric reaches a certain threshold.' },
  { q: 'How does RDS ensure your database stays running even if one building (Data Center) loses power?', opts: ['Read Replicas', 'Multi-AZ (Availability Zone)', 'IAM Roles', 'S3 Backups'], ans: 1, exp: 'Multi-AZ Deployment creates a "standby" copy of your database in a different Availability Zone. AWS automatically switches to it if the primary one fails.' },
  { q: 'In IAM, if you have one policy that "Allows" access and another that "Denies" it, who wins?', opts: ['Allow', 'Deny', 'Neither', 'The one created first'], ans: 1, exp: 'In AWS, an "Explicit Deny" always wins. Safety first! If any policy says Deny, the request is blocked regardless of what other policies allow.' },
  { q: 'Which service is FREE and used to manage "Who can do What" in your AWS account?', opts: ['RDS', 'EC2', 'IAM', 'CloudWatch'], ans: 2, exp: 'IAM (Identity and Access Management) is a free service that lets you securely control access to AWS services and resources.' },
  { q: 'What is the cheapest S3 storage class for data you only need to look at once a year?', opts: ['Standard', 'Standard-IA', 'Glacier', 'Intelligent-Tiering'], ans: 2, exp: 'S3 Glacier is designed for long-term archiving. It is very cheap to store data, but it takes minutes to hours to retrieve it.' },
];

// ========== CLOUD GRID ICONS ==========
const cloudIcons = [
  { icon: '🪣', label: 'S3' }, { icon: '🖥️', label: 'EC2' }, { icon: '🐳', label: 'ECS' },
  { icon: '⚡', label: 'Lambda' }, { icon: '⚖️', label: 'ALB' }, { icon: '📊', label: 'CloudWatch' },
  { icon: '🗄️', label: 'RDS' }, { icon: '🔐', label: 'IAM' }, { icon: '🌐', label: 'VPC' },
];

// ========== INIT CLOUD GRID ==========
function initCloudGrid() {
  const grid = document.getElementById('cloudGrid');
  cloudIcons.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = 'cloud-icon';
    el.style.animationDelay = `${i * 0.07}s`;
    el.innerHTML = `<span class="icon">${c.icon}</span><span>${c.label}</span>`;
    grid.appendChild(el);
  });
}

// ========== INIT SERVICES GRID ==========
function initServicesGrid() {
  const grid = document.getElementById('servicesGrid');
  services.forEach(s => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.id = `card-${s.id}`;
    card.innerHTML = `
      <div class="card-header">
        <span class="card-icon">${s.icon}</span>
        <div>
          <div class="card-title">${s.title}</div>
          <div class="card-subtitle">${s.subtitle}</div>
        </div>
      </div>
      <div class="card-desc">${s.desc}</div>
      <div class="card-tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="card-cta">🔍 Explore concepts →</div>
    `;
    card.addEventListener('click', () => openModal(s));
    grid.appendChild(card);
  });
}

// ========== MODAL ==========
function openModal(s) {
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <div class="modal-hero">
      <span class="modal-icon">${s.icon}</span>
      <div>
        <div class="modal-title">${s.title}</div>
        <div class="modal-subtitle">${s.subtitle}</div>
      </div>
    </div>
    
    <div class="modal-analogy">
      <div class="analogy-label">🤝 Real-world Analogy</div>
      <div class="analogy-content">
        <strong>${s.comparison.simple}</strong>
        <span class="analogy-arrow">➜</span>
        <span class="analogy-tech">${s.comparison.tech}</span>
      </div>
    </div>

    <p class="modal-main-desc">${s.desc}</p>

    <div class="how-it-works">
      <h3>🛠️ How It Works (Step-by-Step)</h3>
      <div class="step-list">
        ${s.howItWorks.map((step, i) => `
          <div class="step-item">
            <span class="step-num">${i + 1}</span>
            <p>${step}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <h3 style="color:var(--text3);font-size:1rem;font-weight:700;margin:2rem 0 1rem;display:flex;align-items:center;gap:0.5rem;">
      <span style="font-size:1.25rem;">⚙️</span> Key Concepts
    </h3>
    <div class="concept-grid">
      ${s.concepts.map(c => `
        <div class="concept-card">
          <h4>${c.title}</h4>
          <p>${c.body}</p>
        </div>
      `).join('')}
    </div>

    <div class="fresher-tip-box">
      <div class="tip-header">🌟 Fresher's Pro-Tip</div>
      <p>${s.fresherTip}</p>
    </div>

    <div class="use-cases">
      <h3>💡 Common Use Cases</h3>
      <div class="use-case-list">
        ${s.useCases.map(u => `
          <div class="use-case-item">
            <span class="uc-icon">${u.icon}</span>
            <span>${u.text}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <h3 style="color:var(--text3);font-size:1rem;font-weight:700;margin:2rem 0 0.75rem;display:flex;align-items:center;gap:0.5rem;">
      <span style="font-size:1.25rem;">💻</span> CLI Example
    </h3>
    <div class="code-block">${s.code}</div>

    <div class="pricing-note">
      <strong>💰 Pricing:</strong> ${s.pricing}
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

// ========== QUIZ ==========
let currentQ = 0, score = 0, answered = false;

function loadQuestion() {
  const q = questions[currentQ];
  const progress = ((currentQ) / questions.length) * 100;
  document.getElementById('quizProgressBar').style.width = `${progress}%`;
  document.getElementById('quizQuestion').textContent = `Q${currentQ + 1}/${questions.length}: ${q.q}`;

  const opts = document.getElementById('quizOptions');
  opts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="option-letter">${'ABCD'[i]}</span>${opt}`;
    btn.id = `opt-${i}`;
    btn.addEventListener('click', () => selectAnswer(i));
    opts.appendChild(btn);
  });

  document.getElementById('quizFeedback').className = 'quiz-feedback';
  document.getElementById('quizFeedback').textContent = '';
  document.getElementById('quizNext').style.display = 'none';
  answered = false;
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;
  const q = questions[currentQ];
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach(o => o.classList.add('disabled'));

  const fb = document.getElementById('quizFeedback');
  if (idx === q.ans) {
    opts[idx].classList.add('correct');
    fb.textContent = `✅ Correct! ${q.exp}`;
    fb.className = 'quiz-feedback show correct-fb';
    score++;
  } else {
    opts[idx].classList.add('wrong');
    opts[q.ans].classList.add('correct');
    fb.textContent = `❌ Not quite. ${q.exp}`;
    fb.className = 'quiz-feedback show wrong-fb';
  }
  document.getElementById('quizNext').style.display = 'inline-flex';
}

document.getElementById('quizNext').addEventListener('click', () => {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById('quizProgressBar').style.width = '100%';
  document.getElementById('quizCard').style.display = 'none';
  const res = document.getElementById('quizResult');
  res.style.display = 'block';
  const pct = Math.round((score / questions.length) * 100);
  let emoji = '😅', title = 'Keep Practicing!', desc = 'Review the service concepts and try again.';
  if (pct >= 90) { emoji = '🏆'; title = 'AWS Expert!'; desc = 'Outstanding! You have a solid grasp of AWS services.'; }
  else if (pct >= 70) { emoji = '⭐'; title = 'Great Job!'; desc = 'You know your AWS well. A little more study and you\'ll ace it!'; }
  else if (pct >= 50) { emoji = '📚'; title = 'Good Start!'; desc = 'You\'re getting there. Review the weaker areas and retry.'; }
  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultDesc').textContent = desc;
  document.getElementById('scoreDisplay').textContent = `${score} / ${questions.length} (${pct}%)`;
}

document.getElementById('restartQuiz').addEventListener('click', () => {
  currentQ = 0; score = 0; answered = false;
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizCard').style.display = 'block';
  loadQuestion();
});

// ========== NAVBAR SCROLL ==========
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none';
});

// ========== HAMBURGER ==========
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ========== ANIMATE ON SCROLL ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .arch-layer').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ========== START ==========
initCloudGrid();
initServicesGrid();

// Re-observe after cards rendered
setTimeout(() => {
  document.querySelectorAll('.service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}, 50);

loadQuestion();
