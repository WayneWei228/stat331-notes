# STAT 331 · Applied Linear Models — all lecture pages


---

<!-- L01 -->

STAT 331 · Lecture 1 · Introduction and Motivation

# Lecture 1: Introduction and Motivation

This lecture defines the outcome and the covariate, reviews summaries and distributions for regression, and gives the course plan (Lecture 1 · p.1–38).

Contents
01 · Nomenclature and data example 02 · Univariate summaries: mean and variance 03 · Bivariate summaries: covariance and correlation 04 · Toward linear regression: simple and multiple models 05 · Review: normal, chi-square, t, and F distributions 06 · Course overview and logistics

## 01 · Nomenclature and data example

Plan · Slides p.1–6

p.1 title · p.2 outcome \(y\) · p.3 covariate \(x\) · p.4 brainhead data · p.5 variables and first rows · p.6 scatterplot.

### 01.1 Title page Slides p.1

Course: STAT 331: Applied Linear Models.

Lecture: Lecture 1: Intro & Motivation. Instructor: Glen McGee, Fall 2026.

### 01.2 The outcome \(y\) Slides p.2

**What** Slides p.2

Some Nomenclature · Lecture 1 · p.2 Outcome: \(y\)

- Main variable of interest
- Variable whose mean we want to explain in terms of other variables
- AKA: response, output, dependent variable

A variable is a quantity that you record for each subject, for example brain weight.

The mean is the average value.

We explain the mean of \(y\), not the exact \(y\) of each subject.

"AKA" means "also known as". The four names have one meaning.

**How** Added

Find \(y\) in a data set

- Read the research question.
- Find the quantity that the researcher wants to know most.
- Call its data column \(y\).

**Self-check:** "We explain the mean of ___ with other variables" must be correct. One analysis has one \(y\).

**Example** Added

1

Main quantity: brain weight

Slides p.4

2

Data column: brain.wgt (grams)

Slides p.5

3

\(y=\) brain weight

**Why** Added

1

The research question has one target quantity

2

The model gives how its mean changes with other quantities

Slides p.2, item 2

3

The target goes on the left side, as \(y\)

\(y_i=\beta_0+\beta_1x_i+\epsilon_i\), Slides p.21

### 01.3 The covariate \(x\) Slides p.3

**What** Slides p.3

Some Nomenclature · Lecture 1 · p.3 Covariate: \(x\)

- Other variables of interest
- Variables that explain/predict the outcome in some sense
- AKA: predictor, input, independent variable, feature

To predict is to estimate an unmeasured \(y\) from a known \(x\).

"In some sense": \(x\) and \(y\) have a relation. \(x\) does not necessarily cause \(y\).

The five names have one meaning.

One analysis can have more than one covariate.

Simple linear regression has one covariate. Multiple linear regression has more than one (Slides p.21–24).

**How** Added

Find \(x\) in a data set

- Find \(y\) (Section 01.2).
- Find the other columns that explain or predict \(y\).
- Call this column (or these columns) \(x\).

**Self-check:** "We use ___ to explain or predict \(y\)" must be correct. \(x\) is not the \(y\) column.

**Example** Added

Slides p.4: "Could we predict it based on size of head?" "It" is brain weight.

1

Predictor of brain weight: head size

Slides p.4

2

Data column: head.size (cm³)

Slides p.5

3

\(x=\) head size

Pages 5–6 do not use the columns gender and age.

**Why** Added

1

\(y\) is difficult to measure

You cannot weigh a live brain

2

\(x\) is easy to measure

Measure the head from outside

3

Use the known \(x\) to give the mean of \(y\)

Slides p.2–3

### 01.4 Data example: Gladstone (1905) Slides p.4

**What** Slides p.4

Data Example: Gladstone (1905) · Lecture 1 · p.4

- “A study of the relations of the brain to the size of the head.”
- Interested in brain weight

- Difficult to measure in live subjects!
- Could we predict it based on size of head?

- Observations on 236 deceased people
- Published in 1905 (Biometrika)

An observation is the set of values recorded for one subject. This data has 236.

Biometrika is a statistics journal.

### 01.5 Variables and first rows Slides p.5

**What** Slides p.5

The file brainhead.csv has one row per observation and one column per variable.

Slides p.5 sets \(x\) = head.size and \(y\) = brain.wgt.

It plots \(y\) against \(x\). Axis labels: "Head Size (cm^3)" (horizontal), "Brain Weight (grams)" (vertical).

The subscript \(i\) is the observation number. \(x_i\) and \(y_i\) belong to person \(i\).

Slides p.23

| \(i\) | gender | age | head.size \(x_i\) (cm³) | brain.wgt \(y_i\) (g)

| 1 | M | 20-46 | 4512 | 1530

| 2 | M | 20-46 | 3738 | 1297

| 3 | M | 20-46 | 4261 | 1335

| 4 | M | 20-46 | 3777 | 1282

| 5 | M | 20-46 | 4177 | 1590

| 6 | M | 20-46 | 3585 | 1300

gender: M or F. age: age group, 20-46 or 46+.

Slides p.23 Min. and Max. (full summary: Section 04.3):

head.size: Min. 2773 cm³, Max. 4747 cm³.

brain.wgt: Min. 1012 g, Max. 1635 g.

**How** Added

Read \(x_i\) and \(y_i\)

- Find row \(i\).
- Read head.size. This is \(x_i\).
- Read brain.wgt in the same row. This is \(y_i\).

**Self-check:** Same row. \(x_i\) between 2773 and 4747. \(y_i\) between 1012 and 1635.

**Example** Added

1

Row 1: M, 20-46, 4512, 1530

Slides p.23

2

\(x_1=4512\) cm³

3

\(y_1=1530\) g

4

\(2773\le 4512\le 4747\) and \(1012\le 1530\le 1635\)

Slides p.23

**Why** Added

1

Each row is one person

2

\(x_i\) and \(y_i\) of one row belong to one person

3

The pair \((x_i,y_i)\) is one observation of the \(x\)–\(y\) relation

### 01.6 The scatterplot Slides p.6

**What** Slides p.6

A scatterplot shows each observation as one point at \((x_i, y_i)\), \(x\) horizontal, \(y\) vertical.

This plot has 236 points.

**How** Added

Read a scatterplot

- Read the axis labels and units.
- Find which axis is \(x\) and which is \(y\).
- Compare the axis ranges with the data Min. and Max.
- Examine the points from left to right: up, down, or level?

**Self-check:** 236 points. Leftmost point: \(x=2773\). Highest point: \(y=1635\).

**Example** Slides p.6

Orange point: person 1, \((4512, 1530)\).

[figure]
Figure 1-1. Brainhead scatterplot (Slides p.6). One point per deceased person.

Step 1: horizontal axis \(x\), head size (cm³). Vertical axis \(y\), brain weight (grams).

Step 2: the units agree with Slides p.5.

Step 3: \(x\) goes from 2773 to 4747, \(y\) from 1012 to 1635 (Slides p.23).

Step 4: the points go up. A larger head has a larger mean brain weight.

Later units measure this trend with covariance and correlation (Slides p.17–20), then a straight line (Slides p.21–24).

**Why** Added

1

Question: what is the mean brain weight at a given head size?

Slides p.2 and p.4

2

Fix one \(x\) on the horizontal axis

3

Examine the points in a narrow vertical strip at this \(x\)

4

Their mean height is the mean of \(y\) near this \(x\)

5

\(x\) goes horizontal, \(y\) goes vertical

### 01.7 Practice Added

**Q1.** In Gladstone (1905), which variable is the outcome and which is the covariate? Give two other names for each.

Answer

Outcome \(y\): brain weight (brain.wgt). Other names: response, output, dependent variable.

Covariate \(x\): head size (head.size). Other names: predictor, input, independent variable, feature.

**Q2.** From the table (Slides p.23), give \(x_3\), \(y_3\), \(x_5\), and \(y_5\).

Answer

1

Row 3: M, 20-46, 4261, 1335

2

\(x_3=4261\) cm³, \(y_3=1335\) g

3

Row 5: M, 20-46, 4177, 1590

4

\(x_5=4177\) cm³, \(y_5=1590\) g

**Q3.** From Min. and Max. (Slides p.23), calculate the range (Max. minus Min.) of head size and of brain weight.

Answer

1

Range of \(x\) \(=4747-2773\)

2

\(=1974\) cm³

3

Range of \(y\) \(=1635-1012\)

4

\(=623\) g

## 02 · Univariate summaries: mean and variance

Plan · Slides p.7–16

p.7–9 summary list · p.10–11 \(E[Y]\), linearity · p.12 \(\bar y\) · p.13–14 \(\mathrm{Var}[Y]\), two properties · p.15–16 \(s_y^2\) · Added: derivations.

### 02.1 How can we describe the data? Slides p.7–9

**What** Slides p.7–9

How Can we Describe The Data? · Lecture 1 · p.9 You have by now seen a few ways of describing the data:
• Univariate summaries:
• Mean
• Variance/Standard Deviation
• Bivariate summaries:
• Covariance
• Correlation
Let’s review them briefly

A summary is one number that describes one property of a data column.

A univariate summary uses one variable. This unit covers it.

A bivariate summary shows how two variables change together. Unit 03 covers it.

Slides p.7–8 build the same list in parts.

### 02.2 Mean (expectation) and linearity Slides p.10–11

**What** Slides p.10–11

Review: Mean · Lecture 1 · p.10–11 Mean/Expectation: \[E[Y]=\int y f(y)\,dy\] Linearity of expectation: For random variables \(Y_1,\dots,Y_m\) and constants \(a_i,b_i\) for \(i=1,\dots,m\): \[E\left[\sum_{i=1}^m (a_iY_i+b_i)\right]=\sum_{i=1}^m a_iE[Y_i]+\sum_{i=1}^m b_i\]

A random variable \(Y\) is a quantity whose value chance sets. Small \(y\) is one possible value.

The probability density function (PDF) \(f(y)\) tells how likely \(Y\) is near \(y\). \(f(y)\ge 0\) and \(\int f(y)\,dy=1\).

The expectation \(E[Y]\) is the average of \(Y\) over many repeats. The PDF sets it, not data.

Constants \(a_i\), \(b_i\) are fixed, not random.

Linearity: a constant factor moves outside \(E\). \(E\) of a sum is the sum of the \(E\) values. \(E\) of a constant is the constant.

**How** Added

Use linearity to simplify \(E[\cdot]\)

- Write the expression as \(\sum_i (a_iY_i+b_i)\).
- Read each \(a_i\) and \(b_i\).
- Replace each \(a_iY_i\) with \(a_iE[Y_i]\).
- Keep each \(b_i\).
- Add the terms.

**Self-check:** The result contains only \(E[Y_i]\) values and constants.

**Example** Added

\(E[Z]=2\). Calculate \(E[3Z+1]\).

1

\(E[3Z+1]=3E[Z]+1\)

linearity, \(a_1=3,\ b_1=1\)

2

\(=3(2)+1\)

\(E[Z]=2\)

3

\(=6+1\)

4

\(=7\)

### 02.3 Sample mean Slides p.12

**What** Slides p.12

Review: Mean · Lecture 1 · p.12 For observations \(y_1,\dots,y_n\), the sample mean is: \[\bar y=\frac{1}{n}\sum_i^n y_i\]

\(n\) is the sample size, the number of observations.

An estimate is a number from data that replaces an unknown population value. \(\bar y\) estimates \(E[Y]\).

\(\sum_i^n\) adds the terms for \(i=1,\dots,n\). The slides also write \(\sum_i\).

**How** Added

Calculate the sample mean \(\bar y\)

- Count the observations to get \(n\).
- Add the observations.
- Divide the sum by \(n\).

**Self-check:** \(\bar y\) is between the smallest and largest observation, in the unit of \(y_i\).

**Example 1 · First four people** Added

Brain weights (g): 1530, 1297, 1335, 1282.

1

\(\bar y=\frac14(1530+1297+1335+1282)\)

\(n=4\)

2

\(=\frac14(5444)\)

3

\(=1361\) g

Self-check: \(1282\le 1361\le 1530\).

**Example 2 · All 236 people** Added

\(n=236\) (Slides p.4). The sum over the course data file is 303086 g (not on the slides). Min. 1012 g, Max. 1635 g (Slides p.23).

1

\(\bar y=\frac{1}{236}(303086)\)

\(n=236\)

2

\(=1284.263\) g

Self-check: \(1012\le 1284.263\le 1635\). Slides p.23 prints 1284.

**Example 3 · Linearity on data** Added

Grams to kilograms: \(y_i'=0.001\,y_i\).

1

\(\bar y'=0.001\,\bar y\)

linearity, \(a=0.001,\ b=0\)

2

\(=0.001(1284.263)\)

3

\(=1.284263\) kg

### 02.4 Variance and its two properties Slides p.13–14

**What** Slides p.13–14

Review: Variance · Lecture 1 · p.13–14 Variance \[\mathrm{Var}[Y]=E\left[(Y-E[Y])^2\right]=E[Y^2]-E[Y]^2\] Properties:
• \(\mathrm{Var}(aY+b)=a^2\mathrm{Var}(Y)\)
• For independent random variables \(X\) and \(Y\): \(\mathrm{Var}(X+Y)=\mathrm{Var}(X)+\mathrm{var}(Y)\)

The deviation \(Y-E[Y]\) is the difference between \(Y\) and its mean.

The variance is the expectation of the squared deviation. It is zero or more. More spread gives a larger variance.

The standard deviation is \(\sqrt{\mathrm{Var}[Y]}\). It has the unit of \(Y\). The variance has that unit squared.

Section 02.6 shows that the two forms are equal.

\(X\) and \(Y\) are independent when the value of one does not change the distribution of the other.

\(\mathrm{Var}[Y]\), \(\mathrm{Var}(Y)\), and \(\mathrm{var}(Y)\) are the same quantity.

Property 1: a shift \(b\) does not change the spread. A factor \(a\) multiplies the variance by \(a^2\).

**How** Added

Get the variance of a transformation

- Write the target as \(aY+b\) or \(X+Y\).
- For \(aY+b\): remove \(b\).
- For \(aY+b\): write \(a^2\mathrm{Var}(Y)\).
- For \(X+Y\): make sure that \(X\) and \(Y\) are independent.
- For \(X+Y\): write \(\mathrm{Var}(X)+\mathrm{var}(Y)\).

**Self-check:** The result is zero or more. The sign of \(a\) has no effect.

**Example 1 · \(\mathrm{Var}(aY+b)\)** Added

\(Z\) has standard deviation 0.25. Calculate \(\mathrm{Var}(3Z+1)\).

1

\(\mathrm{Var}(Z)=0.25^2\)

2

\(=0.0625\)

3

\(\mathrm{Var}(3Z+1)=3^2\,\mathrm{Var}(Z)\)

Property 1, \(a=3,\ b=1\)

4

\(=9(0.0625)\)

5

\(=0.5625\)

**Example 2 · \(\mathrm{Var}(X+Y)\)** Added

\(X\), \(Y\) independent, with standard deviations 0.25 and 1. Calculate \(\mathrm{Var}(X+Y)\).

1

\(\mathrm{Var}(X+Y)=\mathrm{Var}(X)+\mathrm{var}(Y)\)

Property 2

2

\(=0.25^2+1^2\)

3

\(=0.0625+1\)

4

\(=1.0625\)

### 02.5 Sample variance Slides p.15–16

Slide p.16 is the same as p.15.

**What** Slides p.15

Review: Variance · Lecture 1 · p.15 For observations \(y_1,\dots,y_n\), the sample variance is: \[s_y^2=\frac{1}{n-1}\sum_i^n (y_i-\bar y)^2\]

\(s_y^2\) estimates \(\mathrm{Var}[Y]\). The subscript \(y\) names the variable.

The sample standard deviation is \(s_y=\sqrt{s_y^2}\).

The denominator is \(n-1\), not \(n\).

**How** Added

Calculate the sample variance \(s_y^2\)

- Calculate \(\bar y\).
- Calculate each deviation \(y_i-\bar y\).
- Square each deviation.
- Add the squares.
- Divide by \(n-1\) to get \(s_y^2\).
- Take the square root to get \(s_y\).

**Self-check:** The deviations add to 0. \(s_y^2\ge 0\), in the unit of \(y\) squared.

**Example 1 · First four people** Added

\(y_i=1530,1297,1335,1282\), \(\bar y=1361\), \(n=4\). Orange lines in Figure 2-1 are the deviations.

[figure]
Figure 2-1: First four brain weights (blue), \(\bar y=1361\) (green dashed), deviations \(y_i-\bar y\) (orange). Right is positive, left is negative.

1

\(y_i-\bar y:\ 1530-1361,\ 1297-1361,\ 1335-1361,\ 1282-1361\)

2

\(=169,\ -64,\ -26,\ -79\)

3

\(\sum_i (y_i-\bar y)=169-64-26-79=0\)

self-check

4

\(\sum_i (y_i-\bar y)^2=169^2+(-64)^2+(-26)^2+(-79)^2\)

5

\(=28561+4096+676+6241\)

6

\(=39574\)

7

\(s_y^2=\frac{39574}{4-1}\)

\(n-1=3\)

8

\(=13191.33\) g\(^2\)

9

\(s_y=\sqrt{13191.33}=114.8535\) g

**Example 2 · All 236 people** Added

The course data file gives \(\sum_i (y_i-\bar y)^2=3309754\), rounded (not on the slides).

1

\(s_y^2=\frac{1}{236-1}\sum_i (y_i-\bar y)^2\)

\(n=236\)

2

\(=\frac{3309754}{235}\)

3

\(=14084.06\) g\(^2\)

4

\(s_y=\sqrt{14084.06}=118.6763\) g

A histogram cuts the number line into bins of equal width (here 50 g). Each bar height is the count of people in the bin.

[figure]
Figure 2-2: Histogram of 236 brain weights. Green: \(\bar y\). Purple dashed: \(\bar y\pm s_y\), \(s_y=118.6763\) g. 163 people are between them.

**Example 3 · Grams to kilograms: check \(\mathrm{Var}(aY+b)=a^2\mathrm{Var}(Y)\)** Added

1

\(s_{y'}^2=0.001^2\,s_y^2\)

Property 1, \(a=0.001,\ b=0\)

2

\(=0.000001(14084.06)\)

3

\(=0.01408406\) kg\(^2\)

4

\(s_{y'}=\sqrt{0.01408406}=0.1186763\) kg

With \(a=1\), \(b=100\): the mean becomes \(1284.263+100=1384.263\) g. The variance stays \(14084.06\) g\(^2\).

### 02.6 Why: the two variance formulas Added

Let \(\mu=E[Y]\), a constant.

**Derivation 1: \(\mathrm{Var}[Y]=E[Y^2]-E[Y]^2\)**

1

\(\mathrm{Var}[Y]=E\left[(Y-\mu)^2\right]\)

definition

2

\(=E\left[Y^2-2\mu Y+\mu^2\right]\)

3

\(=E[Y^2]-2\mu E[Y]+\mu^2\)

linearity

4

\(=E[Y^2]-2\mu\cdot\mu+\mu^2\)

\(E[Y]=\mu\)

5

\(=E[Y^2]-2\mu^2+\mu^2\)

6

\(=E[Y^2]-\mu^2\)

7

\(=E[Y^2]-E[Y]^2\)

\(\mu=E[Y]\)

**Derivation 2: \(\mathrm{Var}(aY+b)=a^2\mathrm{Var}(Y)\)**

1

\(E[aY+b]=aE[Y]+b\)

linearity

2

\(=a\mu+b\)

3

\(\mathrm{Var}(aY+b)=E\left[\left((aY+b)-E[aY+b]\right)^2\right]\)

definition

4

\(=E\left[\left((aY+b)-(a\mu+b)\right)^2\right]\)

line 2

5

\(=E\left[\left(aY-a\mu\right)^2\right]\)

\(b\) cancels

6

\(=E\left[\left(a(Y-\mu)\right)^2\right]\)

7

\(=E\left[a^2(Y-\mu)^2\right]\)

8

\(=a^2E\left[(Y-\mu)^2\right]\)

linearity

9

\(=a^2\mathrm{Var}(Y)\)

definition

### 02.7 Practice Added

**Q1.** \(E[Y_1]=2\), \(E[Y_2]=5\). Calculate \(E[3Y_1-2Y_2+4]\).

Answer

1

\(E[3Y_1-2Y_2+4]=3E[Y_1]-2E[Y_2]+4\)

linearity

2

\(=3(2)-2(5)+4\)

3

\(=6-10+4\)

4

\(=0\)

**Q2.** \(X\), \(Y\) independent, \(\mathrm{Var}(X)=0.0625\), \(\mathrm{Var}(Y)=1\). Calculate \(\mathrm{Var}(2X+Y+7)\).

Answer

1

\(\mathrm{Var}(2X+Y+7)=\mathrm{Var}(2X+Y)\)

Property 1, \(a=1,\ b=7\)

2

\(=\mathrm{Var}(2X)+\mathrm{var}(Y)\)

Property 2

3

\(=2^2\,\mathrm{Var}(X)+\mathrm{var}(Y)\)

Property 1, \(a=2,\ b=0\)

4

\(=4(0.0625)+1\)

5

\(=0.25+1\)

6

\(=1.25\)

**Q3.** Brain weights (g): 1530, 1297, 1335, 1282, 1590. Calculate \(\bar y\), \(s_y^2\), \(s_y\), and \(s_y^2\) in kg\(^2\).

Answer

1

\(\bar y=\frac15(1530+1297+1335+1282+1590)\)

\(n=5\)

2

\(=\frac{7034}{5}=1406.8\)

3

\(y_i-\bar y:\ 123.2,\ -109.8,\ -71.8,\ -124.8,\ 183.2\)

sum is 0

4

\((y_i-\bar y)^2:\ 15178.24,\ 12056.04,\ 5155.24,\ 15575.04,\ 33562.24\)

5

\(\sum_i (y_i-\bar y)^2=81526.8\)

6

\(s_y^2=\frac{81526.8}{5-1}=20381.7\) g\(^2\)

7

\(s_y=\sqrt{20381.7}=142.7645\) g

8

\(0.001^2\times 20381.7=0.0203817\) kg\(^2\)

Property 1, \(a=0.001\)

## 03 · Bivariate summaries: covariance and correlation

Plan · Slides p.17–20

p.17 covariance · p.18 three properties · p.19 sample covariance · p.20 \(\rho\), \(r\), \(S_{xy},S_{xx},S_{yy}\) · Added: practice.

Examples use the first 5 rows of the brainhead data (\(x\) in cm³, \(y\) in g):

\(x_i=4512,\ 3738,\ 4261,\ 3777,\ 4177\).

\(y_i=1530,\ 1297,\ 1335,\ 1282,\ 1590\).

### 03.1 Covariance Slides p.17

**What** Slides p.17

Review: Covariance · Lecture 1 · p.17 Covariance \[\mathrm{cov}[X,Y]=E[(X-E[X])(Y-E[Y])]=E[XY]-E[X]E[Y]\]

Covariance is the expectation of the product of the two deviations. It shows if \(X\) and \(Y\) are high together and low together.

\(\mathrm{cov}[X,Y]\) and \(\mathrm{cov}(X,Y)\) are the same quantity.

Same-sign deviations give a positive product. Opposite signs give a negative product.

\(\mathrm{cov}[X,Y]>0\): \(Y\) is usually high when \(X\) is high. \(\mathrm{cov}[X,Y]<0\): \(Y\) is usually low when \(X\) is high.

**How** Added

Calculate \(\mathrm{cov}[X,Y]\) with the second form

- Calculate \(E[X]\) and \(E[Y]\).
- Calculate \(E[XY]\), the probability-weighted average of the products \(xy\).
- Calculate \(E[XY]-E[X]E[Y]\).

**Self-check:** The first form gives the same result. The unit is (unit of \(X\))·(unit of \(Y\)).

**Example** Added

Take the 5 people as a population. Select 1 person at random, each with probability \(1/5\). \(X\) is head size, \(Y\) is brain weight.

Second form: How steps 1–3

1

\(E[X]=\frac15(4512+3738+4261+3777+4177)=\frac15(20465)=4093\)

2

\(E[Y]=\frac15(1530+1297+1335+1282+1590)=\frac15(7034)=1406.8\)

3

\(x_iy_i:\ 6903360,\ 4848186,\ 5688435,\ 4842114,\ 6641430\)

4

\(E[XY]=\frac15(6903360+4848186+5688435+4842114+6641430)\)

5

\(E[XY]=\frac15(28923525)=5784705\)

6

\(E[X]E[Y]=4093\times1406.8=5758032.4\)

7

\(\mathrm{cov}[X,Y]=5784705-5758032.4=26672.6\)

First form: How self-check

1

\(x_i-4093:\ 419,\ -355,\ 168,\ -316,\ 84\)

2

\(y_i-1406.8:\ 123.2,\ -109.8,\ -71.8,\ -124.8,\ 183.2\)

3

\((x_i-4093)(y_i-1406.8):\ 51620.8,\ 38979.0,\ -12062.4,\ 39436.8,\ 15388.8\)

4

\(\mathrm{cov}[X,Y]=\frac15(51620.8+38979.0-12062.4+39436.8+15388.8)\)

5

\(=\frac15(133363)\)

6

\(=26672.6\)

Both forms give 26672.6 g·cm³. Positive: a larger head usually has a heavier brain. ▲

**Why** Added

1

\(E[(X-E[X])(Y-E[Y])]\)

2

\(=E\big[XY-XE[Y]-E[X]Y+E[X]E[Y]\big]\)

3

\(=E[XY]-E[Y]E[X]-E[X]E[Y]+E[X]E[Y]\)

linearity; \(E[X],E[Y]\) constant

4

\(=E[XY]-E[X]E[Y]\)

### 03.2 Properties of covariance Slides p.18

**What** Slides p.18

Review: Covariance · Lecture 1 · p.18 Properties:
• \(\mathrm{cov}(X,X)=\mathrm{Var}(X)\)
• \(\mathrm{cov}(aY+c,bX+d)=ab\,\mathrm{cov}(X,Y)\)
• \(\mathrm{cov}(U+V,X+Y)=\mathrm{cov}(U,X)+\mathrm{cov}(U,Y)+\mathrm{cov}(V,X)+\mathrm{cov}(V,Y)\)
• Exercise: what is \(\mathrm{Var}(X+Y)\)?

\(a,b\) are constant factors. \(c,d\) are constant shifts. \(U,V,X,Y\) are any random variables.

Property 2: shifts have no effect. Factors move outside.

Property 3: each left term pairs with each right term, \(2\times2=4\) terms.

Practice Q1 (Section 03.5) answers the slide exercise.

**How** Added

Simplify \(\mathrm{cov}(\text{expression 1},\ \text{expression 2})\)

- Write each expression as a sum of "constant × random variable" terms plus a constant.
- Read each factor and each shift.
- Use property 3 to split the sums into pairs.
- Use property 2 to remove shifts and move factors outside.
- Use property 1 to replace each \(\mathrm{cov}(X,X)\) with \(\mathrm{Var}(X)\).

**Self-check:** Number of pairs = (left terms) × (right terms). The result has only variances, covariances, and constants.

**Example** Added

Same 5-person population: \(E[X]=4093\), \(E[Y]=1406.8\), \(\mathrm{cov}(X,Y)=26672.6\).

Property 1: Property 1

1

\(\mathrm{cov}(X,X)=\frac15(419^2+(-355)^2+168^2+(-316)^2+84^2)\)

deviations \(x_i-4093\)

2

\(=\frac15(175561+126025+28224+99856+7056)\)

3

\(=\frac15(436722)=87344.4\)

4

\(E[X^2]=\frac15(4512^2+3738^2+4261^2+3777^2+4177^2)=\frac15(84199967)=16839993.4\)

5

\(\mathrm{Var}(X)=E[X^2]-E[X]^2=16839993.4-4093^2\)

Slides p.13

6

\(=16839993.4-16752649\)

7

\(=87344.4=\mathrm{cov}(X,X)\)

For \(Y\): \(\mathrm{Var}(Y)=\frac15(15178.24+12056.04+5155.24+15575.04+33562.24)=\frac15(81526.8)=16305.36\).

Property 2: g to kg, cm³ to litres (1 litre = 1000 cm³). Property 2

Basis: Slides p.18 property 2 with \(a=1/1000,\ c=0,\ b=1/1000,\ d=0\).

1

\(\mathrm{cov}\left(\frac{1}{1000}Y+0,\ \frac{1}{1000}X+0\right)=\frac{1}{1000}\cdot\frac{1}{1000}\,\mathrm{cov}(X,Y)\)

2

\(=\frac{1}{1000000}\times26672.6\)

3

\(=0.0266726\)

The covariance is \(10^6\) times smaller. The sign stays.

Property 3: \(\mathrm{cov}(X+Y,\ X-Y)\), with \(X-Y=X+(-1)Y\). How steps 1–5

1

\(\mathrm{cov}(X+Y,\ X+(-1)Y)\)

2

\(=\mathrm{cov}(X,X)+\mathrm{cov}(X,(-1)Y)+\mathrm{cov}(Y,X)+\mathrm{cov}(Y,(-1)Y)\)

property 3

3

\(=\mathrm{cov}(X,X)-\mathrm{cov}(X,Y)+\mathrm{cov}(Y,X)-\mathrm{cov}(Y,Y)\)

property 2, factor \(-1\)

4

\(=\mathrm{cov}(X,X)-\mathrm{cov}(Y,Y)\)

symmetry (see Why)

5

\(=\mathrm{Var}(X)-\mathrm{Var}(Y)\)

property 1

6

\(=87344.4-16305.36\)

7

\(=71039.04\)

**Why** Added

Symmetry: the order of the two variables does not change the covariance.

1

\(\mathrm{cov}(Y,X)=E[(Y-E[Y])(X-E[X])]\)

definition

2

\(=E[(X-E[X])(Y-E[Y])]\)

3

\(=\mathrm{cov}(X,Y)\)

Property 1:

1

\(\mathrm{cov}(X,X)=E[(X-E[X])(X-E[X])]\)

definition, \(Y=X\)

2

\(=E[(X-E[X])^2]\)

3

\(=\mathrm{Var}(X)\)

Slides p.13

Property 2:

1

\((aY+c)-E[aY+c]=aY+c-(aE[Y]+c)\)

linearity

2

\(=a(Y-E[Y])\)

3

\((bX+d)-E[bX+d]=b(X-E[X])\)

same steps

4

\(\mathrm{cov}(aY+c,bX+d)=E[a(Y-E[Y])\,b(X-E[X])]\)

lines 2 and 3

5

\(=ab\,E[(Y-E[Y])(X-E[X])]\)

linearity

6

\(=ab\,\mathrm{cov}(Y,X)\)

7

\(=ab\,\mathrm{cov}(X,Y)\)

symmetry

Property 3:

1

\((U+V)-E[U+V]=(U-E[U])+(V-E[V])\)

linearity

2

\((X+Y)-E[X+Y]=(X-E[X])+(Y-E[Y])\)

linearity

3

\(\mathrm{cov}(U+V,X+Y)=E\big[\big((U-E[U])+(V-E[V])\big)\big((X-E[X])+(Y-E[Y])\big)\big]\)

lines 1 and 2

4

\(=E\big[(U-E[U])(X-E[X])+(U-E[U])(Y-E[Y])+(V-E[V])(X-E[X])+(V-E[V])(Y-E[Y])\big]\)

5

\(=E[(U-E[U])(X-E[X])]+E[(U-E[U])(Y-E[Y])]+E[(V-E[V])(X-E[X])]+E[(V-E[V])(Y-E[Y])]\)

linearity

6

\(=\mathrm{cov}(U,X)+\mathrm{cov}(U,Y)+\mathrm{cov}(V,X)+\mathrm{cov}(V,Y)\)

definition

### 03.3 Sample covariance Slides p.19

**What** Slides p.19

Review: Covariance · Lecture 1 · p.19 For observations \((y_1,x_1),\dots,(y_n,x_n)\), the sample covariance is: \[\frac{1}{n-1}\sum_i^n (y_i-\bar y)(x_i-\bar x)\]

The sample covariance estimates \(\mathrm{cov}(X,Y)\) from \(n\) pairs. Pair \(i\) comes from person \(i\).

\(E[\cdot]\) becomes "sum, then divide by \(n-1\)". \(E[X]\), \(E[Y]\) become \(\bar x\), \(\bar y\).

**How** Added

Calculate the sample covariance

- Calculate \(\bar x\) and \(\bar y\).
- Calculate the deviations \(x_i-\bar x\) and \(y_i-\bar y\).
- Multiply them for each \(i\).
- Add the \(n\) products.
- Divide by \(n-1\).

**Self-check:** Each set of deviations adds to 0. The sign gives the direction of the relation.

**Example** Added

First 5 people, \(n=5\): How steps 1–5

1

\(\bar x=4093,\quad \bar y=1406.8\)

Section 03.1

2

\(x_i-\bar x:\ 419,\ -355,\ 168,\ -316,\ 84\qquad y_i-\bar y:\ 123.2,\ -109.8,\ -71.8,\ -124.8,\ 183.2\)

3

\((y_i-\bar y)(x_i-\bar x):\ 51620.8,\ 38979.0,\ -12062.4,\ 39436.8,\ 15388.8\)

4

\(\sum_i (y_i-\bar y)(x_i-\bar x)=133363\)

5

\(\frac{1}{5-1}(133363)=33340.75\)

Self-check: \(419-355+168-316+84=0\), \(123.2-109.8-71.8-124.8+183.2=0\). The result is larger than 26672.6 because the divisor is 4, not 5.

All 236 people (course data file, not on the slides):

\(\bar x=3637.864\) cm³, \(\bar y=1284.263\) g.

Sample covariance \(=34014.61\) g·cm³.

Orange dashed lines \(\bar x\) and \(\bar y\) cut the plane into four quadrants.

Quadrants I (top right) and III (bottom left): same-sign deviations, positive product (blue).

Quadrants II (top left) and IV (bottom right): opposite signs, negative product (purple).

[figure]
Figure 3-1. Brainhead data (\(n=236\)) in four quadrants. Blue: positive product (91+97=188). Purple: negative product (24+24=48).

Product sums by quadrant: I: 4327495.5, II: −132594.1, III: 3925393.4, IV: −126861.4.

1

\(\sum_i (y_i-\bar y)(x_i-\bar x)=4327495.5-132594.1+3925393.4-126861.4\)

2

\(=7993433.4\)

3

\(\frac{1}{236-1}(7993433.4)=34014.61\)

The positive products are much larger. A larger head usually has a heavier brain. ▲

**Why** Added

1

\(\mathrm{cov}[X,Y]=E[(X-E[X])(Y-E[Y])]\)

Slides p.17

2

\(\to\ E[(Y-E[Y])(X-E[X])]\)

symmetry

3

\(\to\ \frac{1}{n-1}\sum_i (y_i-E[Y])(x_i-E[X])\)

average over data, divisor of p.16

4

\(\to\ \frac{1}{n-1}\sum_i (y_i-\bar y)(x_i-\bar x)\)

\(E[X],E[Y]\to\bar x,\bar y\)

### 03.4 Correlation Slides p.20

Covariance depends on the units. Correlation has no unit.

**What** Slides p.20

Review: Correlation · Lecture 1 · p.20 Correlation coefficient: \[\rho=\frac{\mathrm{cov}(X,Y)}{\sqrt{\mathrm{var}(X)}\sqrt{\mathrm{var}(Y)}}\] Correlation quantifies strength of linear relationship
Sample correlation: \[r=\frac{\frac{1}{n-1}\sum_{i=1}^n (y_i-\bar y)(x_i-\bar x)}{\sqrt{\frac{1}{n-1}\sum_{i=1}^n (y_i-\bar y)^2}\sqrt{\frac{1}{n-1}\sum_{i=1}^n (x_i-\bar x)^2}}=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}\]

\(\rho\) ("rho") is the covariance divided by the two standard deviations.

A linear relationship has points near a straight line. Correlation measures only its strength.

\(r\) uses the sample covariance and the sample variances.

From the two sides of the formula:

\(S_{xy}=\sum_{i=1}^n (y_i-\bar y)(x_i-\bar x)\), the sum of deviation products.

\(S_{xx}=\sum_{i=1}^n (x_i-\bar x)^2\), the sum of squares of \(x\). A sum of squares adds the squared deviations.

\(S_{yy}=\sum_{i=1}^n (y_i-\bar y)^2\), the sum of squares of \(y\).

\(S_{xy}\) and \(\sqrt{S_{xx}S_{yy}}=\sqrt{\text{cm}^6\cdot\text{g}^2}\) both have unit g·cm³. \(r\) has no unit.

**How** Added

Calculate \(r\) with the \(S\) form

- Calculate \(\bar x\) and \(\bar y\).
- Calculate the two deviations for each \(i\).
- Add the deviation products to get \(S_{xy}\).
- Add the squared deviations to get \(S_{xx}\) and \(S_{yy}\).
- Calculate \(\sqrt{S_{xx}S_{yy}}\).
- Divide \(S_{xy}\) by it.

**Self-check:** \(S_{xx}>0\), \(S_{yy}>0\). \(r\) has the sign of \(S_{xy}\). \(S_{xy}/(n-1)\) equals the sample covariance.

**Example** Added

First 5 people: How steps 1–6

1

\(\bar x=4093,\quad \bar y=1406.8\)

Section 03.1

2

\(S_{xy}=133363\)

Section 03.3, line 4

3

\(S_{xx}=436722\)

Section 03.2, property 1, line 3

4

\(S_{yy}=15178.24+12056.04+5155.24+15575.04+33562.24=81526.8\)

5

\(\sqrt{S_{xx}S_{yy}}=\sqrt{436722\times81526.8}=\sqrt{35604547149.6}=188691.7\)

6

\(r=\frac{133363}{188691.7}=0.7068\)

All 236 people (course data file, not on the slides): How steps 1–6

1

\(\bar x=3637.864,\quad \bar y=1284.263\)

2

\(S_{xy}=7993433.4\)

quadrant sum, Section 03.3

3

\(S_{xx}=30647233.7,\quad S_{yy}=3309753.7\)

4

\(S_{xx}S_{yy}=30647233.7\times3309753.7=1.014348\times10^{14}\)

5

\(\sqrt{S_{xx}S_{yy}}=\sqrt{1.014348\times10^{14}}=10071484.3\)

6

\(r=\frac{7993433.4}{10071484.3}=0.7937\)

Self-check: \(S_{xy}/(n-1)=7993433.4/235=34014.61\).

The \(1/(n-1)\) form divides by \(s_x s_y\): Slides p.20, first equal sign

\(s_x^2=S_{xx}/235=130413.76\), \(s_x=\sqrt{130413.76}=361.1285\).

\(s_y^2=S_{yy}/235=14084.06\), \(s_y=\sqrt{14084.06}=118.6763\).

1

\(r=\frac{34014.61}{\sqrt{14084.06}\sqrt{130413.76}}\)

2

\(=\frac{34014.61}{118.6763\times361.1285}\)

3

\(=\frac{34014.61}{42857.39}\)

4

\(=0.7937\)

\(r=0.7937\): a positive linear relation. ▲

**Why** Added

1

\(r=\frac{\frac{1}{n-1}S_{xy}}{\sqrt{\frac{1}{n-1}S_{yy}}\sqrt{\frac{1}{n-1}S_{xx}}}\)

definitions of the \(S\) sums

2

\(=\frac{\frac{1}{n-1}S_{xy}}{\sqrt{\frac{1}{n-1}}\sqrt{S_{yy}}\sqrt{\frac{1}{n-1}}\sqrt{S_{xx}}}\)

3

\(=\frac{\frac{1}{n-1}S_{xy}}{\frac{1}{n-1}\sqrt{S_{yy}}\sqrt{S_{xx}}}\)

4

\(=\frac{S_{xy}}{\sqrt{S_{yy}}\sqrt{S_{xx}}}\)

\(\frac{1}{n-1}\) cancels

5

\(=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}\)

### 03.5 Practice Added

**Q1 (Slides p.18 Exercise).** Write \(\mathrm{Var}(X+Y)\) with \(\mathrm{Var}(X)\), \(\mathrm{Var}(Y)\), and \(\mathrm{cov}(X,Y)\). Check it on the 5-person population.

Answer

1

\(\mathrm{Var}(X+Y)=\mathrm{cov}(X+Y,X+Y)\)

property 1

2

\(=\mathrm{cov}(X,X)+\mathrm{cov}(X,Y)+\mathrm{cov}(Y,X)+\mathrm{cov}(Y,Y)\)

property 3, \(U=X,\ V=Y\)

3

\(=\mathrm{Var}(X)+\mathrm{cov}(X,Y)+\mathrm{cov}(Y,X)+\mathrm{Var}(Y)\)

property 1

4

\(=\mathrm{Var}(X)+\mathrm{Var}(Y)+2\,\mathrm{cov}(X,Y)\)

symmetry

For independent \(X\), \(Y\), Slides p.14 gives \(\mathrm{Var}(X)+\mathrm{var}(Y)\): the term \(2\,\mathrm{cov}(X,Y)\) is 0.

5-person check: \(87344.4+16305.36+2\times26672.6=103649.76+53345.2=156994.96\).

All 236 people (sample values): \(130413.76+14084.06+2\times34014.61=144497.82+68029.22=212527.04\).

**Q2.** Find \(\mathrm{Var}(X-Y)\). With \(s_x^2=130413.76\), \(s_y^2=14084.06\), and sample covariance 34014.61, calculate the sample variance of \(x-y\).

Answer

1

\(\mathrm{Var}(X-Y)=\mathrm{cov}(X+(-1)Y,\ X+(-1)Y)\)

property 1

2

\(=\mathrm{cov}(X,X)+\mathrm{cov}(X,(-1)Y)+\mathrm{cov}((-1)Y,X)+\mathrm{cov}((-1)Y,(-1)Y)\)

property 3

3

\(=\mathrm{cov}(X,X)-\mathrm{cov}(X,Y)-\mathrm{cov}(Y,X)+\mathrm{cov}(Y,Y)\)

property 2, \((-1)(-1)=1\)

4

\(=\mathrm{Var}(X)+\mathrm{Var}(Y)-2\,\mathrm{cov}(X,Y)\)

property 1, symmetry

5

\(=130413.76+14084.06-2\times34014.61\)

6

\(=144497.82-68029.22\)

7

\(=76468.60\)

**Q3.** \(S_{xx}=30647233.7\), \(S_{yy}=3309753.7\), \(n=236\), sample covariance 34014.61. Find \(S_{xy}\) and \(r\).

Answer

1

\(S_{xy}=(n-1)\times34014.61\)

2

\(=235\times34014.61=7993433.35\)

3

\(r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}=\frac{7993433.35}{\sqrt{30647233.7\times3309753.7}}\)

Slides p.20

4

\(=\frac{7993433.35}{\sqrt{1.014348\times10^{14}}}\)

5

\(=\frac{7993433.35}{10071484.3}\)

6

\(=0.7937\)

The difference from 7993433.4 comes from rounding.

## 04 · Toward linear regression: simple and multiple models

This unit gives only the form of each model. Lecture 2 calculates the line.

Plan · Slides p.21–24

p.21 (footer 11/27) three questions, simple model · p.22 (12/27) line on the scatterplot · p.23 (13/27) more covariates · p.24 (14/27) multiple model, course aims.

### 04.1 Three questions and the simple model Slides p.21

**What** Slides p.21

Toward Linear Regression · Lecture 1 · p.21

- How do we characterize the relationship between \(x\) and \(y\)?
- How do we predict \(y\) given \(x\)?
- How does the mean of \(y\) change when \(x\) increases by \(a\).
We can answer questions like these with simple linear regression: \[y_i=\beta_0+\beta_1x_i+\epsilon_i\]

Relationship: how \(y\) changes when \(x\) increases.

\(a\) is any given change in \(x\), for example \(a=100\) cm³.

A parameter is a fixed, unknown number in the model. \(\beta_0\) and \(\beta_1\) are parameters, the same for all \(i\).

Intercept \(\beta_0\): the height of the line \(\beta_0+\beta_1x\) at \(x=0\).

Slope \(\beta_1\): the increase in line height when \(x\) increases by 1.

Error \(\epsilon_i\): \(y_i\) minus the line height \(\beta_0+\beta_1x_i\). Each observation has its own error.

Simple linear regression: \(y\) equals a straight line in one covariate plus an error.

**How** Added

Write one data row in the model form

- Find the \(y\) and \(x\) columns.
- Select row \(i\). Read \(x_i\) and \(y_i\).
- Put them into \(y_i=\beta_0+\beta_1x_i+\epsilon_i\).
- Keep \(\beta_0\), \(\beta_1\), and \(\epsilon_i\) as letters.

**Self-check:** Only \(\beta_0\), \(\beta_1\), \(\epsilon_i\) are unknown. The index of \(\epsilon\) equals the row number.

**Example · Row 1 of the brainhead data** Added

Row 1 (Slides p.23): M, 20-46, head size 4512, brain weight 1530.

1

\(y=\) brain weight, \(x=\) head size

How step 1

2

\(i=1:\ x_1=4512,\ y_1=1530\)

How step 2

3

\(y_1=\beta_0+\beta_1x_1+\epsilon_1\)

4

\(1530=\beta_0+\beta_1\cdot 4512+\epsilon_1\)

How step 3

The model splits 1530 g into the line height at 4512 cm³ and the error \(\epsilon_1\).

**Why · The error is a vertical distance, and \(\beta_1\) is the slope** Added

1

\(1530=\beta_0+\beta_1\cdot 4512+\epsilon_1\)

Example, line 4

2

\(\epsilon_1=1530-(\beta_0+\beta_1\cdot 4512)\)

3

\(\epsilon_1=y_1-(\beta_0+\beta_1x_1)\)

Change in line height when \(x\) increases by \(a\):

1

\([\beta_0+\beta_1(x+a)]-[\beta_0+\beta_1x]\)

2

\(=\beta_0+\beta_1x+\beta_1a-\beta_0-\beta_1x\)

3

\(=\beta_1a\)

4

\(a=1:\ =\beta_1\)

the slope

Lecture 2 adds assumptions that connect the line height to the mean of \(y\).

### 04.2 A line on the scatterplot Slides p.22

**What** Slides p.22

Simple Linear Regression · Lecture 1 · p.22 Simple Linear Regression: \(y_i=\beta_0+\beta_1x_i+\epsilon_i\)
[Scatterplot: Brain Weight (grams) versus Head Size (cm^3), with a straight line through the points.]

The line is \(\beta_0+\beta_1x\) for one set of values that Lecture 2 calculates.

**How** Added

Read a scatterplot with a line

- Find the direction of the line.
- Up from left to right: \(\beta_1\) is positive.
- Select one point. Find if it is above or below the line.
- Above: \(\epsilon_i>0\). Below: \(\epsilon_i<0\).
- Examine the spread. A point far from the line has a large \(|\epsilon_i|\).

**Self-check:** Measure the distance vertically, at the same \(x_i\). \(\epsilon_i\) compares only heights.

**Example · The line on Slides p.22** Added

[figure]
Figure 4-1. Brainhead points and the line of Slides p.22 (green). Orange: row 1 and its vertical distance to the line.

Steps 1–2: the line goes up. The slope is positive.

Steps 3–4: row 1, \((4512,1530)\), is above the line. Its vertical distance is positive.

Step 5: points are above and below the line. Each observation needs its own \(\epsilon_i\).

**Why · The picture shows a straight line** Added

1

\(y_i=\beta_0+\beta_1x_i+\epsilon_i\)

Slides p.21

2

\(y_i-\epsilon_i=\beta_0+\beta_1x_i\)

3

\(\beta_0+\beta_1x\) is a first-degree function of \(x\)

its graph is a straight line

### 04.3 More than one covariate Slides p.23

**What** Slides p.23

What if we have multiple covariates? · Lecture 1 · p.23 The slide prints the first 6 rows and a summary of each column. The values are below.

**First 6 rows (236 rows in total):** the table in Section 01.5 shows these rows.

**Summary of the two number columns:**

|  | Min. | 1st Qu. | Median | Mean | 3rd Qu. | Max.

| head.size | 2773 | 3390 | 3614 | 3638 | 3876 | 4747

| brain.wgt | 1012 | 1208 | 1280 | 1284 | 1351 | 1635

The columns gender and age contain text, not numbers. Each has length 236.

A categorical column contains group labels, not numbers. gender and age are categorical.

Median: the middle value of the sorted column.

1st Qu. and 3rd Qu. (quartiles): approximately 25% and 75% of the values are not larger than them.

**How** Added

Find the possible covariates in a data table

- Count the columns.
- Find the \(y\) column.
- Each other column is a possible covariate.
- Find if each one contains numbers or text.
- Put a number column into the equation directly.
- Change a text column into numbers first (week 6, categorical covariates, Lecture 1 p.37).
- Read the range (Min. to Max.) and center (Median, Mean) of each number column.

**Self-check:** Possible covariates = columns − 1. Min. ≤ 1st Qu. ≤ Median ≤ 3rd Qu. ≤ Max.

**Example · The brainhead data on Slides p.23** Added

1

number of columns \(=4\): gender, age, head.size, brain.wgt

How step 1

2

\(y=\) brain.wgt

How step 2

3

possible covariates: head.size, gender, age

How step 3

4

head.size: numbers; gender, age: text

How steps 4–6

5

head.size: range 2773 to 4747 cm³, median 3614, mean 3638

How step 7

6

brain.wgt: range 1012 to 1635 g, median 1280, mean 1284

How step 7

Self-check: \(4-1=3\). \(2773\le 3390\le 3614\le 3876\le 4747\). \(1012\le 1208\le 1280\le 1351\le 1635\).

**Why · The data has more than one covariate** Added

1

possible covariates \(=\) columns \(-\) outcome columns

2

\(=4-1\)

3

\(=3\)

Simple linear regression uses one of the three. A model with more than one \(x\) can use all.

### 04.4 Simple and multiple linear regression Slides p.24

**What** Slides p.24

Toward Multiple Linear Regression · Lecture 1 · p.24 Simple Linear Regression: \[y_i=\beta_0+\beta_1x_i+\epsilon_i\] Multiple Linear Regression: \[y_i=\beta_0+\beta_1x_{i1}+\beta_2x_{i2}+\beta_3x_{i3}+\epsilon_i\] This course will focus on developing multiple linear regression

- Theoretically/mathematically (derive estimators)
- Practically (how to fit these models [with software])
- How to choose and compare a model (which \(x_{ij}\) to include)
- How to evaluate the appropriateness of the model/assumptions (model diagnostics)

\(x_{ij}\): covariate \(j\) of observation \(i\).

A coefficient is the parameter that multiplies a covariate, for example \(\beta_2\) for \(x_{i2}\).

An estimator is a formula that calculates an unknown parameter from data.

Fit: calculate the parameter values from the data.

Assumptions: conditions that the model sets on the errors and other parts.

Model diagnostics: methods that check the model and its assumptions with data.

**How** Added

Write the multiple linear regression equation

- Find the \(y\) column.
- List the covariates for the model.
- Number them \(j=1,2,\dots\).
- For each \(j\), write \(\beta_jx_{ij}\).
- Write \(y_i=\beta_0+\) (sum of the terms) \(+\epsilon_i\).

**Self-check:** Parameters = covariates + 1. Each \(x\) has first index \(i\). No \(\beta\) has index \(i\).

**Example · Three covariates for the brainhead data** Added

1

\(y_i=\) brain.wgt of person \(i\)

How step 1

2

\(x_{i1}=\) head.size, \(x_{i2}=\) gender, \(x_{i3}=\) age group

How steps 2–3

3

terms: \(\beta_1x_{i1},\ \beta_2x_{i2},\ \beta_3x_{i3}\)

How step 4

4

\(y_i=\beta_0+\beta_1x_{i1}+\beta_2x_{i2}+\beta_3x_{i3}+\epsilon_i\)

How step 5

5

\(i=1:\ y_1=1530,\ x_{11}=4512\), gender \(=\) M, age \(=\) 20-46

row 1, p.23

6

\(1530=\beta_0+\beta_1\cdot 4512+\beta_2x_{12}+\beta_3x_{13}+\epsilon_1\)

\(x_{12}\), \(x_{13}\): numbers for M, 20-46

Self-check: \(3+1=4\) parameters. \(x_{12}\) and \(x_{13}\) stay letters until week 6.

**Why · Simple is a special case of multiple** Added

1

\(y_i=\beta_0+\beta_1x_{i1}+\beta_2x_{i2}+\beta_3x_{i3}+\epsilon_i\)

p.24

2

\(y_i=\beta_0+\beta_1x_{i1}+\epsilon_i\)

keep only \(j=1\)

3

\(y_i=\beta_0+\beta_1x_i+\epsilon_i\)

write \(x_{i1}\) as \(x_i\)

### 04.5 Practice Added

**Q1.** Row 3 (Slides p.23): M, 20-46, head size 4261, brain weight 1335. Write the simple model for \(i=3\). Which values are unknown?

Answer

1

\(x_3=4261,\ y_3=1335\)

2

\(y_3=\beta_0+\beta_1x_3+\epsilon_3\)

3

\(1335=\beta_0+\beta_1\cdot 4261+\epsilon_3\)

Unknown: \(\beta_0\), \(\beta_1\), \(\epsilon_3\).

**Q2.** In \(y_i=\beta_0+\beta_1x_{i1}+\beta_2x_{i2}+\beta_3x_{i3}+\epsilon_i\), \(x_{i2}\) is gender. What is \(x_{52}\)? How many parameters \(\beta\) are there?

Answer

\(x_{52}\) is the gender of person 5: M (Slides p.23).

\(3+1=4\): \(\beta_0,\beta_1,\beta_2,\beta_3\).

**Q3.** From the summary on Slides p.23, give the median head size. Between which two values are the middle 50% of brain weights?

Answer

Median head size: 3614 cm³.

Between 1st Qu. and 3rd Qu.: 1208 g and 1351 g.

## 05 · Review: normal, chi-square, t, and F distributions

Later lectures use these four distributions for inference about regression.

Plan · Slides p.25–28

p.25 normal, linear combinations · p.26 chi-square = sum of squared standard normals · p.27 t = standard normal / \(\sqrt{\text{chi-square}/\nu}\) · p.28 F = ratio of two chi-squares, each over its degrees of freedom.

A distribution describes how likely each value of a random variable is. "\(Z\sim N(\mu,\sigma^2)\)": \(Z\) has the normal distribution with mean \(\mu\), variance \(\sigma^2\).

Distribution parameters (\(\mu\), \(\sigma^2\), \(\nu\)) are fixed numbers that set its shape.

Moments: the slides use this name for \(E[Z]\) and \(\mathrm{Var}(Z)\).

### 05.1 Normal distribution Slides p.25

Lecture 3 shows that \(\hat\beta_1\) is a linear combination of independent normals.

**What** Slides p.25

Review: Normal Distribution · Lecture 1 · p.25 \[Z\sim N(\mu,\sigma^2)\quad\text{with parameters } \mu \text{ and } \sigma^2\] PDF: \[f(z)=\frac{1}{\sqrt{2\pi\sigma^2}}\exp\left[-\frac{(z-\mu)^2}{2\sigma^2}\right]\] Moments: \[E[Z]=\mu,\qquad \mathrm{Var}(Z)=\sigma^2\] For independent \(Z_i\overset{ind}{\sim}N(\mu_i,\sigma^2)\), \(U=\sum_i^n(a_iZ_i+b_i)\) is normally distributed: \[U\sim N\left(\sum_i^n(a_i\mu_i+b_i),\ \sum_i^n a_i^2\sigma_i^2\right)\]

The normal PDF is a bell curve, symmetric about \(\mu\) ("mu"). \(\sigma^2\) ("sigma squared") sets its width.

Standard normal: \(N(0,1)\).

\(\exp[t]=e^t\).

\(\overset{ind}{\sim}\): "are independent and have the distribution".

A linear combination multiplies each \(Z_i\) by \(a_i\), adds \(b_i\), and sums.

The slide writes \(\sigma^2\) in the assumption and \(\sigma_i^2\) in \(\mathrm{Var}(U)\). With all \(\sigma_i^2=\sigma^2\), \(\mathrm{Var}(U)=\sum_i^n a_i^2\sigma^2\).

[figure]
Figure 5-1 · PDF of \(N(0,1)\). Highest point \(f(0)=0.3989\) (Example).

**How** Added

Find the distribution of \(U=\sum_i^n(a_iZ_i+b_i)\)

- Make sure that each \(Z_i\) is normal.
- Make sure that the \(Z_i\) are independent.
- Read \(a_i\) and \(b_i\).
- Read \(\mu_i\) and \(\sigma^2\).
- Mean: add \(a_i\mu_i+b_i\) over all terms.
- Variance: add \(a_i^2\sigma^2\) over all terms. Do not use \(b_i\).
- Write \(U\sim N(\text{mean},\ \text{variance})\).

**Self-check:** The variance is positive.

Calculate the normal PDF \(f(z)\)

- Put \(z\), \(\mu\), \(\sigma^2\) into the formula.
- Calculate the exponent \(-(z-\mu)^2/(2\sigma^2)\).
- Calculate \(1/\sqrt{2\pi\sigma^2}\).
- Multiply it by \(\exp\) of the exponent.

**Self-check:** \(f(z)\) is largest at \(z=\mu\).

**Example** Added

\(f(0)\) for \(N(0,1)\):

How · PDF steps 1–4

1

\(f(0)=\frac{1}{\sqrt{2\pi\cdot 1}}\exp\left[-\frac{(0-0)^2}{2\cdot 1}\right]\)

2

\(=\frac{1}{\sqrt{2\pi}}\exp[0]\)

3

\(=\frac{1}{\sqrt{2\pi}}\)

\(e^0=1\)

4

\(=\frac{1}{2.5066}\)

5

\(=0.3989\)

Independent \(Z_1\sim N(1,1)\), \(Z_2\sim N(2,1)\), \(Z_3\sim N(300,1)\). \(a=(2,-1,0.5)\), \(b=(1,0,-3)\): \(U=(2Z_1+1)+(-1\cdot Z_2+0)+(0.5Z_3-3)\).

How · linear combination steps 1–4

Normal and independent: the rule on Slides p.25 applies. \(\mu_i=1,2,300\), \(\sigma^2=1\).

How · linear combination step 5

1

\(E[U]=(2\cdot1+1)+(-1\cdot2+0)+(0.5\cdot300-3)\)

2

\(=3+(-2)+147\)

3

\(=148\)

How · linear combination step 6

1

\(\mathrm{Var}(U)=2^2\cdot1+(-1)^2\cdot1+0.5^2\cdot1\)

2

\(=4+1+0.25\)

3

\(=5.25\)

How · linear combination step 7

\(U\sim N(148,\ 5.25)\).

**Why** Added

The slide states that \(U\) is normal. The mean and variance follow from linearity, \(\mathrm{Var}(aZ+b)=a^2\mathrm{Var}(Z)\), and Property 2 (Section 02.4).

1

\(E[U]=E\left[\sum_i^n(a_iZ_i+b_i)\right]\)

2

\(=\sum_i^n\left(a_iE[Z_i]+b_i\right)\)

linearity

3

\(=\sum_i^n(a_i\mu_i+b_i)\)

1

\(\mathrm{Var}(U)=\mathrm{Var}\left(\sum_i^n(a_iZ_i+b_i)\right)\)

2

\(=\sum_i^n\mathrm{Var}(a_iZ_i+b_i)\)

\(Z_i\) independent

3

\(=\sum_i^n a_i^2\,\mathrm{Var}(Z_i)\)

Property 1

4

\(=\sum_i^n a_i^2\sigma_i^2\)

### 05.2 Chi-square distribution Slides p.26

Lecture 3 uses it for inference about \(\sigma^2\).

**What** Slides p.26

Review: Chi-square Distribution · Lecture 1 · p.26 \[X\sim\chi^2_\nu\quad\text{with } \nu \text{ degrees of freedom}\] PDF: \[f(x)=\frac{1}{2^{\frac{\nu}{2}}\Gamma(\frac{\nu}{2})}x^{\frac{\nu}{2}-1}e^{-x/2},\quad X>0\] Moments: \[E[X]=\nu\] \[\mathrm{Var}(X)=2\nu\] For \(Z_i\overset{iid}{\sim}N(0,1)\): \[X=\sum_{i=1}^n Z_i^2\sim\chi^2_n\]

\(\chi^2_\nu\) ("chi") takes only positive values. A sum of squares cannot be negative.

Degrees of freedom \(\nu\) ("nu"): the number of squared standard normals in the sum.

iid (independent and identically distributed): independent, with one common distribution.

Gamma function: \(\Gamma(\alpha)=\int_0^\infty t^{\alpha-1}e^{-t}\,dt\) for \(\alpha>0\).

Three Gamma facts: Added

\(\Gamma(1)=\int_0^\infty e^{-t}\,dt=1\).

\(\Gamma(1/2)=\sqrt\pi=1.7725\) (known result).

\(\Gamma(\alpha+1)=\alpha\,\Gamma(\alpha)\). \(\Gamma(3/2)=\frac12\Gamma(1/2)=\sqrt\pi/2=0.8862\), \(\Gamma(2)=1\cdot\Gamma(1)=1\).

[figure]
Figure 5-2 · PDF of \(\chi^2_\nu\), \(\nu=2,3,5\). Larger \(\nu\): further right and wider. Orange: \(f(2)\) for \(\nu=2\).

**How** Added

Identify a chi-square variable and write its moments

- Make sure that each squared term is \(N(0,1)\).
- Make sure that the terms are iid.
- Count the \(n\) squared terms. Set \(\nu=n\).
- Write \(X\sim\chi^2_n\), \(E[X]=n\), \(\mathrm{Var}(X)=2n\).

**Self-check:** \(\mathrm{Var}(X)=2E[X]\).

Calculate the chi-square PDF at \(x\)

- Calculate \(2^{\nu/2}\) and \(\Gamma(\nu/2)\).
- Calculate \(x^{\nu/2-1}\) and \(e^{-x/2}\).
- Multiply the two numbers from step 2.
- Divide by the two numbers from step 1.

**Self-check:** \(x>0\).

**Example** Added

Example 1: \(f(2)\), \(\nu=2\).

How · PDF steps 1–4

1

\(f(2)=\frac{1}{2^{2/2}\Gamma(2/2)}\,2^{2/2-1}e^{-2/2}\)

2

\(=\frac{1}{2\,\Gamma(1)}\,2^{0}e^{-1}\)

3

\(=\frac{1}{2}e^{-1}\)

\(\Gamma(1)=1\), \(2^0=1\)

4

\(=\frac{0.36788}{2}\)

5

\(=0.1839\)

Example 2: \(Z_1,Z_2,Z_3\overset{iid}{\sim}N(0,1)\), \(X=Z_1^2+Z_2^2+Z_3^2\). Find its distribution, moments, and \(f(1)\).

How · identify steps 1–3

3 iid squared \(N(0,1)\) terms: \(\nu=3\).

How · identify step 4

\(X\sim\chi^2_3\), \(E[X]=3\), \(\mathrm{Var}(X)=2\cdot3=6\).

How · PDF steps 1–4

1

\(f(1)=\frac{1}{2^{3/2}\Gamma(3/2)}\,1^{3/2-1}e^{-1/2}\)

2

\(=\frac{1}{2^{3/2}\cdot\frac{\sqrt\pi}{2}}\,e^{-1/2}\)

\(\Gamma(3/2)=\sqrt\pi/2\)

3

\(=\frac{1}{\sqrt2\,\sqrt\pi}\,e^{-1/2}\)

\(2^{3/2}/2=2^{1/2}\)

4

\(=\frac{e^{-1/2}}{\sqrt{2\pi}}\)

5

\(=\frac{0.60653}{2.5066}\)

6

\(=0.2420\)

**Why** Added

1

\(\mathrm{Var}(Z)=E[Z^2]-E[Z]^2\)

2

\(1=E[Z^2]-0^2\)

\(N(0,1)\) moments

3

\(E[Z^2]=1\)

1

\(E[X]=E\left[\sum_{i=1}^n Z_i^2\right]\)

2

\(=\sum_{i=1}^n E[Z_i^2]\)

linearity

3

\(=n\)

Optional — not on the slides

For \(Z\sim N(0,1)\), \(E[Z^4]=3\) (known result).

1

\(\mathrm{Var}(Z^2)=E[Z^4]-E[Z^2]^2\)

2

\(=3-1^2\)

3

\(=2\)

4

\(\mathrm{Var}(X)=\sum_{i=1}^n\mathrm{Var}(Z_i^2)\)

\(Z_i^2\) independent

5

\(=2n\)

### 05.3 t distribution Slides p.27

Lecture 3 uses it for tests of the regression coefficients.

**What** Slides p.27

Review: t-Distribution · Lecture 1 · p.27 \[Y\sim t_\nu\quad\text{with } \nu \text{ degrees of freedom}\] PDF: \[f(y)=\frac{\Gamma(\frac{\nu+1}{2})}{\sqrt{\pi\nu}\,\Gamma(\frac{\nu}{2})}\left(1+\frac{y^2}{\nu}\right)^{-\frac{\nu+1}{2}}\] Moments: \[E[Y]=0 \text{ if } \nu>1,\ \text{NA otherwise}\] \[\mathrm{Var}(Y)=\frac{\nu}{\nu-2} \text{ if } \nu>2,\ \infty \text{ otherwise}\] For independent \(Z\sim N(0,1)\) and \(X\sim\chi^2_\nu\) \[\frac{Z}{\sqrt{X/\nu}}\sim t_\nu\]

The slide prints the PDF denominator as \(\sqrt{\pi\nu}\,\frac{\nu}{2}\), with no \(\Gamma\). The total area is 1 only with \(\Gamma(\frac{\nu}{2})\). This page uses \(\Gamma(\frac{\nu}{2})\).

\(t_\nu\) is a bell curve, symmetric about 0. Its center is lower than \(N(0,1)\), and its tails are thicker.

A tail is the part of the curve far from the center. Thicker tails make extreme values more likely.

\(\nu\) is the degrees of freedom of the chi-square in the denominator.

NA (not available): for \(\nu=1\), \(\int y f(y)\,dy\) does not converge. The mean does not exist.

\(\infty\): for \(\nu\le 2\), \(\int y^2 f(y)\,dy\) does not converge.

[figure]
Figure 5-3 · PDFs of \(t_1\) (orange), \(t_5\) (blue), \(N(0,1)\) (black, dashed). As \(\nu\) increases, \(t_\nu\) comes near \(N(0,1)\).

**How** Added

Identify a t variable and write its moments

- Numerator: one \(N(0,1)\) variable \(Z\).
- Denominator: \(\sqrt{X/\nu}\), \(X\sim\chi^2_\nu\).
- Make sure that the divisor is the degrees of freedom of \(X\).
- Make sure that \(Z\) and \(X\) are independent.
- Write \(\frac{Z}{\sqrt{X/\nu}}\sim t_\nu\).
- If \(\nu>1\), \(E[Y]=0\). If \(\nu>2\), \(\mathrm{Var}(Y)=\nu/(\nu-2)\).

**Self-check:** For \(\nu>2\), \(\nu/(\nu-2)>1\): more spread than \(N(0,1)\).

Calculate the t PDF at \(y\)

- Calculate \(\Gamma(\frac{\nu+1}{2})\) and \(\Gamma(\frac{\nu}{2})\).
- Calculate \(\sqrt{\pi\nu}\).
- Calculate \(\left(1+y^2/\nu\right)^{-(\nu+1)/2}\).
- Multiply \(\Gamma(\frac{\nu+1}{2})\) by the step 3 number.
- Divide by \(\sqrt{\pi\nu}\,\Gamma(\frac{\nu}{2})\).

**Self-check:** \(f(0)<1/\sqrt{2\pi}=0.3989\).

**Example** Added

Example 1: \(f(0)\), \(\nu=3\).

How · PDF steps 1–5

1

\(f(0)=\frac{\Gamma(\frac{3+1}{2})}{\sqrt{3\pi}\,\Gamma(\frac{3}{2})}\left(1+\frac{0^2}{3}\right)^{-\frac{3+1}{2}}\)

2

\(=\frac{\Gamma(2)}{\sqrt{3\pi}\,\Gamma(\frac32)}\cdot 1^{-2}\)

3

\(=\frac{1}{\sqrt{3\pi}\cdot\frac{\sqrt\pi}{2}}\)

\(\Gamma(2)=1,\ \Gamma(\frac32)=\frac{\sqrt\pi}{2}\)

4

\(=\frac{2}{\sqrt3\,\pi}\)

5

\(=0.3676\)

Self-check: \(0.3676<0.3989\).

Example 2: independent \(Z\sim N(0,1)\), \(X\sim\chi^2_5\). Find the distribution and moments of \(Y=Z/\sqrt{X/5}\).

How · identify steps 1–4

\(Z\) is \(N(0,1)\). \(X\sim\chi^2_5\) is divided by 5. \(Z\), \(X\) independent.

How · identify steps 5–6

\(Y\sim t_5\). \(\nu=5>1\): \(E[Y]=0\). \(\nu=5>2\):

1

\(\mathrm{Var}(Y)=\frac{5}{5-2}\)

2

\(=\frac{5}{3}\)

3

\(=1.6667\)

**Why** Added

Mean: \(y\) occurs only as \(y^2\), so \(f(y)=f(-y)\). For \(\nu>1\), symmetry gives \(E[Y]=0\).

Optional — not on the slides

Variance, for \(\nu>2\):

1

\(\mathrm{Var}(Y)=E[Y^2]-E[Y]^2\)

2

\(=E[Y^2]\)

\(E[Y]=0\)

3

\(=E\left[\frac{Z^2}{X/\nu}\right]\)

4

\(=\nu\,E[Z^2]\,E\left[\frac1X\right]\)

\(Z,X\) independent

5

\(=\nu\,E\left[\frac1X\right]\)

\(E[Z^2]=1\)

1

\(E\left[\frac1X\right]=\int_0^\infty\frac1x\cdot\frac{1}{2^{\nu/2}\Gamma(\nu/2)}x^{\nu/2-1}e^{-x/2}\,dx\)

chi-square PDF

2

\(=\frac{1}{2^{\nu/2}\Gamma(\nu/2)}\int_0^\infty x^{\nu/2-2}e^{-x/2}\,dx\)

3

\(=\frac{1}{2^{\nu/2}\Gamma(\nu/2)}\cdot 2^{\nu/2-1}\Gamma(\nu/2-1)\)

\(x=2t\); Gamma definition

4

\(=\frac{\Gamma(\nu/2-1)}{2\,\Gamma(\nu/2)}\)

5

\(=\frac{\Gamma(\nu/2-1)}{2\,(\nu/2-1)\,\Gamma(\nu/2-1)}\)

\(\Gamma(\alpha+1)=\alpha\Gamma(\alpha)\)

6

\(=\frac{1}{\nu-2}\)

7

\(\mathrm{Var}(Y)=\nu\cdot\frac{1}{\nu-2}=\frac{\nu}{\nu-2}\)

Step 3 needs \(\nu/2-1>0\), that is, \(\nu>2\).

### 05.4 F distribution Slides p.28

**What** Slides p.28

Review: F Distribution · Lecture 1 · p.28 \[W\sim F(\nu_1,\nu_2)\ \text{with } \nu_1,\nu_2 \text{ degrees of freedom}\] PDF: \[f(w)=\frac{\Gamma((\nu_1+\nu_2)/2)}{\Gamma(\nu_1/2)\Gamma(\nu_2/2)}\left(\nu_1^{\nu_1}\nu_2^{\nu_2}\frac{w^{\nu_1-2}}{(\nu_2+\nu_1w)^{(\nu_1+\nu_2)}}\right)^{1/2},\quad w>0\] For independent \(X_1\sim\chi^2_{\nu_1}\) and \(X_2\sim\chi^2_{\nu_2}\), \[W=\frac{X_1/\nu_1}{X_2/\nu_2}\sim F(\nu_1,\nu_2)\]

\(F(\nu_1,\nu_2)\) takes only positive values.

\(\nu_1\) (numerator degrees of freedom) always comes first. \(\nu_2\) (denominator degrees of freedom) comes second.

The slide gives no moments for F.

[figure]
Figure 5-4 · PDFs of \(F(2,2)\) (blue) and \(F(5,10)\) (green). Orange: \(F(2,2)\) PDF at \(w=1\).

**How** Added

Identify an F variable

- Numerator: \(X_1/\nu_1\), a chi-square over its degrees of freedom.
- Denominator: \(X_2/\nu_2\), a second chi-square over its degrees of freedom.
- Make sure that \(X_1\) and \(X_2\) are independent.
- Write \(W\sim F(\nu_1,\nu_2)\), numerator first.

**Self-check:** Each divisor is the degrees of freedom of its own chi-square.

Calculate the F PDF at \(w\)

- Calculate \(\Gamma((\nu_1+\nu_2)/2)/[\Gamma(\nu_1/2)\Gamma(\nu_2/2)]\).
- Calculate \(\nu_1^{\nu_1}\nu_2^{\nu_2}w^{\nu_1-2}/(\nu_2+\nu_1w)^{(\nu_1+\nu_2)}\).
- Take its square root.
- Multiply the step 1 and step 3 numbers.

**Self-check:** \(w>0\).

**Example** Added

\(F(2,2)\) at \(w=1\):

How · PDF steps 1–4

1

\(f(1)=\frac{\Gamma((2+2)/2)}{\Gamma(2/2)\Gamma(2/2)}\left(2^2\cdot2^2\cdot\frac{1^{2-2}}{(2+2\cdot1)^{(2+2)}}\right)^{1/2}\)

2

\(=\frac{\Gamma(2)}{\Gamma(1)\Gamma(1)}\left(16\cdot\frac{1}{4^4}\right)^{1/2}\)

3

\(=1\cdot\left(\frac{16}{256}\right)^{1/2}\)

\(\Gamma(2)=\Gamma(1)=1\)

4

\(=\frac{4}{16}\)

5

\(=0.25\)

**Why** Added

The lecture does not derive the F PDF. The square of a t variable is an F variable:

Optional — not on the slides

1

\(Y=\frac{Z}{\sqrt{X/\nu}}\sim t_\nu\)

p.27

2

\(Y^2=\frac{Z^2}{X/\nu}\)

3

\(Y^2=\frac{Z^2/1}{X/\nu}\)

4

\(Z^2\sim\chi^2_1\)

p.26, \(n=1\)

5

\(Y^2\sim F(1,\nu)\)

p.28, \(\nu_1=1,\ \nu_2=\nu\)

Unit summary

Normal: \(U\sim N\left(\sum(a_i\mu_i+b_i),\ \sum a_i^2\sigma_i^2\right)\).

Chi-square: \(\sum_{i=1}^n Z_i^2\sim\chi^2_n\), mean \(\nu\), variance \(2\nu\).

t: \(Z/\sqrt{X/\nu}\sim t_\nu\), mean 0 (\(\nu>1\)), variance \(\nu/(\nu-2)\) (\(\nu>2\)).

F: \(\frac{X_1/\nu_1}{X_2/\nu_2}\sim F(\nu_1,\nu_2)\).

### 05.5 Practice Added

**Q1.** \(Z_1\overset{ind}{\sim}N(1,4)\), \(Z_2\overset{ind}{\sim}N(3,4)\). Find the distribution of \(U=3Z_1-2Z_2+5\).

Answer

\(a_1=3,\ b_1=5,\ a_2=-2,\ b_2=0\); \(\mu_1=1,\ \mu_2=3,\ \sigma^2=4\).

1

\(E[U]=(3\cdot1+5)+(-2\cdot3+0)\)

2

\(=8-6=2\)

3

\(\mathrm{Var}(U)=3^2\cdot4+(-2)^2\cdot4\)

4

\(=36+16=52\)

5

\(U\sim N(2,\ 52)\)

**Q2.** \(Z_1,Z_2,Z_3,Z_4\overset{iid}{\sim}N(0,1)\). Name the distribution of (a) \(Z_2^2+Z_3^2+Z_4^2\); (b) \(\dfrac{Z_1}{\sqrt{(Z_2^2+Z_3^2+Z_4^2)/3}}\); (c) \(\dfrac{Z_1^2/1}{(Z_2^2+Z_3^2+Z_4^2)/3}\). For (a) and (b), give the mean and variance.

Answer

(a) \(\chi^2_3\). Mean 3, variance \(2\cdot3=6\).

(b) \(Z_1\) is \(N(0,1)\), independent of \(X\sim\chi^2_3\): \(t_3\). Mean 0 (\(\nu=3>1\)). Variance \(3/(3-2)=3\).

(c) \(\chi^2_1/1\) over \(\chi^2_3/3\), independent: \(F(1,3)\).

**Q3.** With the PDF on Slides p.27, calculate \(f(0)\) for \(Y\sim t_1\). What is \(E[Y]\)?

Answer

1

\(f(0)=\frac{\Gamma(\frac{1+1}{2})}{\sqrt{\pi\cdot1}\,\Gamma(\frac12)}\left(1+\frac{0^2}{1}\right)^{-1}\)

2

\(=\frac{\Gamma(1)}{\sqrt\pi\cdot\sqrt\pi}\)

\(\Gamma(\frac12)=\sqrt\pi\)

3

\(=\frac1\pi\)

\(\Gamma(1)=1\)

4

\(=0.3183\)

\(\nu=1\) is not \(>1\): \(E[Y]\) is NA.

## 06 · Course overview and logistics

Plan · Slides p.29–38

p.29 title · p.30 content, books · p.31 grading · p.32 assignments · p.33 exams · p.34 participation · p.35 communication · p.36 tutorials · p.37 schedule · p.38 tips.

### 06.1 Section title page Slides p.29

Slide p.29: "Course Overview".

Footer numbers 19/27 to 27/27 are on PDF pages 30 to 38. This unit uses PDF page numbers.

### 06.2 Course content and reference books Slides p.30

**What** Slides p.30

Course Overview · Lecture 1 · p.30

- Review & Simple Linear Regression (2 weeks)
- Multiple Linear Regression (4 weeks)
- Model Diagnostics (3 weeks)
- Model Building (3 weeks)
- Extensions (time permitting)
Textbook: None required. If you want a different perspective:

- Introduction to Regression Modeling by Abraham and Ledolter, 2006 (available online, see course outline for link)
- Gelman, A., Hill, J., & Vehtari, A. (2020). Regression and other stories. Cambridge University Press.
- Any other introductory book on linear regression

SLR: simple linear regression. MLR: multiple linear regression.

Model building: selecting the variables of a model and their form.

Extensions: topics past linear regression, only if time is available.

**How** Added

Find the block for a topic

- Count the covariates that the topic uses.
- One covariate: block 1.
- Two or more: block 2.
- Checking a fitted model: block 3.
- Selecting variables: block 4.

**Self-check:** Blocks 1–4 add to 12 weeks.

**Example · Check the number of weeks** Added

1

\(2+4+3+3\)

blocks 1–4, Slides p.30

2

\(=6+3+3\)

3

\(=12\) weeks

Block 5 has no fixed length.

**Why · The order of the blocks** Added

1

Start with one covariate (SLR).

2

Extend to two or more (MLR).

3

Fit a model before you check it (diagnostics).

4

Check models before you select one (model building).

### 06.3 Grading Slides p.31

**What** Slides p.31

Grading · Lecture 1 · p.31

- Assignments: 15%
- Midterm 1: 15%
- Midterm 2: 15%
- Final: 50%
- Participation: 5%

Weight: the percentage of the final grade from one component.

Midterm: an exam in the middle of the term.

Participation: a grade from your Piazza posts (Slides p.34).

[figure]
Length is proportional to weight. A = Assignments, M1 = Midterm 1, M2 = Midterm 2, P = Participation.

**How** Added

Calculate a final grade

- Write the percentage score of each component.
- Multiply each score by its weight.
- Add the five products.

**Self-check:** The weights add to 100%.

**Example · A final grade** Added

Scores: Assignments 80%, Midterm 1 70%, Midterm 2 75%, Final 72%, Participation 4 of 5 (80%).

1

\(0.15(80)+0.15(70)+0.15(75)+0.50(72)+0.05(80)\)

Slides p.31

2

\(=12+10.5+11.25+36+4\)

3

\(=73.75\)

**Why · The weights add to 100%** Added

1

\(15+15+15+50+5\)

Slides p.31

2

\(=45+50+5\)

3

\(=100\)

### 06.4 Assignments Slides p.32

**What** Slides p.32

Assignments · Lecture 1 · p.32

- Due:

- Assignment 1: 5pm Friday, September 25, 2026
- Assignment 2: 5pm Friday, October 30, 2026
- Assignment 3: 5pm Friday, November 27, 2026

- Each worth 5 % of final grade
- Goal: Practice what you've learned in class, extend your knowledge independently
- Typically 4 questions with multiple parts
- Usually include a theoretical question, an applied analysis question, and a simulation-based question
- You may discuss with other students, but you must write up your own solutions
Assignments up to 24 hours late will receive a penalty of 50%. If you are unable to complete an assignment due to severe illness or extenuating circumstances, you must email the instructor before the deadline.

The slide item about software is not quoted.

Theoretical question: you answer with a mathematical derivation.

Applied analysis question: you fit a model to real data and explain the result.

Simulation-based question: you generate random data and study how a method behaves.

**How** Added

Complete an assignment

- Record the deadline: 5pm Friday.
- Discuss with other students (optional).
- Write your own solutions.
- If severe illness stops you, email the instructor before the deadline.

**Self-check:** \(3\times 5\%\) equals the 15% on Slides p.31.

**Example · Check the assignment weight** Added

1

\(3\times 5\%\)

Slides p.32

2

\(=15\%\)

Slides p.31

**Why · The due dates spread over the term** Added

1

A1 to A2: Sept 25 to Oct 30 = 35 days

2

A2 to A3: Oct 30 to Nov 27 = 28 days

3

A1 to A3: Sept 25 to Nov 27 = 63 days

### 06.5 Midterms and final exam Slides p.33

**What** Slides p.33

Midterms & Final Exam · Lecture 1 · p.33

- Two in-class midterms (1hr20min)

- October 8th & November 12th

- You must attend the correct section!

- Each worth 15% of final grade

- Final exam (2hrs30min)

- Scheduled by the registrar during final exam period
- Worth 50% of final grade

- Coverage is cumulative
- Will test theory & application
- Bring a non-programmable calculator
If you are unable to attend a midterm due to severe illness or extenuating circumstances, you must email the instructor before the deadline/midterm start time. Grades for a missed midterm will be shifted to the final exam.

The slide also says that exams ask you to read the printed output of a fitted model.

In-class: during the usual class time and room. October 8 and November 12 are Thursdays.

Registrar: the university office for exams.

Cumulative: each exam can test all material from the start of the course.

**How** Added

New weights after a missed midterm

- Set the missed midterm to 0%.
- Add its 15% to the final.
- Keep the other weights.

**Self-check:** The weights add to 100%.

**Example · A student misses Midterm 1** Added

1

Final weight \(=50\%+15\%\)

Slides p.33

2

Final weight \(=65\%\)

**Why · The sum stays at 100%** Added

1

\(15+0+15+(50+15)+5\)

2

\(=15+15+65+5\)

3

\(=100\)

### 06.6 Participation Slides p.34

**What** Slides p.34

Participation · Lecture 1 · p.34

- Worth 5% of final grade
- Based on (public) discussions on Piazza

- 0 pts: You did not post on Piazza this term
- 1 pts: You posted on Piazza once
- 2 pts: You posted on Piazza twice
- 3 pts: You posted on Piazza several times
- 4 pts: You asked and answered several questions on Piazza
- 5 pts: You regularly posted high quality questions and gave high quality answers to student questions

Piazza: the online question-and-answer forum of the course.

Only public posts (visible to all students) count.

**How** Added

Get the participation grade

- Post publicly on Piazza.
- Ask questions.
- Answer other students.
- Do this for the full term.

**Self-check:** Find your current level on Slides p.34.

### 06.7 Communication Slides p.35

**What** Slides p.35

Communication · Lecture 1 · p.35

- Slides, assignments, etc. will all be posted on LEARN
- Announcements will be made in class and on LEARN
- All questions about course content should be posted on Piazza (not email)

- If you have personal concerns, you can email the TAs/instructor directly.

LEARN: the university course website (D2L Brightspace).

TA: teaching assistant.

Where to send a question

Course content: Piazza, not email.

Personal concern: email a TA or the instructor.

### 06.8 Tutorials Slides p.36

**What** Slides p.36

Tutorials · Lecture 1 · p.36

- Scheduled for Fridays at 2:30 in this room
- There will be 4 formal tutorials: Sept 18th, Oct 2nd, Oct 23rd, Nov 6th

- Work through practice problems with TA

- In other weeks TAs will use the tutorial time slot for office hours in this room

Tutorial: a class where a TA helps you do practice problems.

Office hour: a time when a TA answers your questions.

### 06.9 Schedule Slides p.37

**What** Slides p.37

Simple Linear Regression · Slides p.37

Week 1: Introduction. TA Office hour.

Week 2: Simple linear regression, least squares estimation, inference. **Tutorial 1 (Sept 18th)**.

Week 3: Prediction & Review of matrix algebra. TA Office hour. **Assignment 1 due 5pm (Sept 25th)**.

Multiple Linear Regression · Slides p.37

Week 4: Multiple linear regression, estimation & inference. **Tutorial 2 (Oct 2nd)**.

Week 5: Inference continued, prediction. TA Office hour. **Midterm 1 (Oct 8th, in class)**.

READING WEEK (no classes).

Week 6: Categorical covariates, interactions, non-linearities. **Tutorial 3 (Oct 23rd)**.

Week 7: ANOVA, multicollinearity. TA Office hour. **Assignment 2 due 5pm (Oct 30th)**.

Model Diagnostics · Slides p.37

Week 8: Residuals, Weighted least squares. **Tutorial 4 (Nov 6th)**.

Week 9: Outliers. TA Office hour. **Midterm 2 (Nov 12th, in class)**.

Week 10: Influential observations & Goodness of fit. TA Office hour.

Model Building · Slides p.37

Week 11: Prediction error, cross-validation, variable selection. TA Office hour. **Assignment 3 due 5pm (Nov 27th)**.

Week 12: LASSO, shrinkage, confounding. TA Office hour.

Extra · Slides p.37

Week 13: Logistic regression (time permitting).

**How** Added

Find a date in the schedule

- Find the event.
- Read its week.
- Read the topic of that week.

**Self-check:** Dates agree with Slides p.32, p.33, and p.36.

### 06.10 Tips for success Slides p.38

**What** Slides p.38

Tips for Success · Lecture 1 · p.38

- Come to class
- Participate

- Answer questions in class
- Ask questions when something is unclear

- Try practice problems, compare solutions on Piazza
- Don't fall behind

- Lecture recaps
- Tutorials
- Homework

- If you do fall behind

- Review the slides, post any misunderstandings on Piazza
- Come to class
- Come to office hours

Lecture recap: a short review of earlier lectures.

**How** Slides p.38

Recover when you fall behind (Slides p.38)

- Review the slides.
- Post what you do not understand on Piazza.
- Come to class.
- Go to office hours.

**Self-check:** Recaps, tutorials, and homework are current.

### 06.11 Practice Added

**Q1.** List the five grade components and weights. Show that they add to 100%.

Answer

Assignments 15%, Midterm 1 15%, Midterm 2 15%, Final 50%, Participation 5% (Slides p.31).

1

\(15+15+15+50+5\)

2

\(=45+50+5\)

3

\(=100\)

**Q2.** A student misses Midterm 2 because of severe illness and emails the instructor before the start time. What is the new final exam weight?

Answer

1

\(50\%+15\%\)

Slides p.33

2

\(=65\%\)

Others: Assignments 15%, Midterm 1 15%, Midterm 2 0%, Participation 5%.

**Q3.** From Slides p.37, give the date of Midterm 1, its week, and the topic of that week.

Answer

Oct 8th, in class, Week 5: "Inference continued, prediction".

**Q4.** Scores: Assignments 90%, Midterm 1 60%, Midterm 2 80%, Final 70%, Participation 5 of 5. Calculate the final grade.

Answer

1

\(0.15(90)+0.15(60)+0.15(80)+0.50(70)+0.05(100)\)

5 of 5 = 100%

2

\(=13.5+9+12+35+5\)

3

\(=74.5\)


---

<!-- L02 -->

STAT 331 · Lecture 2 · Simple Linear Regression: Estimation

# Lecture 2: Simple Linear Regression: Estimation

This lecture estimates \(\beta_0\), \(\beta_1\), and \(\sigma^2\) in the simple linear regression model with least squares and maximum likelihood (Lecture 2 · p.1–38).

Contents
01 · Recap: mean, variance, covariance, and correlation 02 · The simple linear regression model and its coefficients 03 · Least squares estimation 04 · Maximum likelihood estimation and its equality to least squares 05 · Fitted values and residuals 06 · Estimating \(\sigma^2\): the MLE and the unbiased estimator

## 01 · Recap: mean, variance, covariance, and correlation

Plan · Slides p.1–8

Slides p.1–3: title, section, housekeeping.

Slides p.4: mean, expectation, linearity.

Slides p.5: variance, two properties.

Slides p.6: covariance, three properties.

Slides p.7: correlation, \(S_{xy},S_{xx},S_{yy}\).

Slides p.8: goals and notation.

Data for this unit · Added

The first five people of the brainhead data (Slides p.10).

\(x_i\): head size (cm³). \(y_i\): brain weight (g).

\(x_1,\dots,x_5\): 4512, 3738, 4261, 3777, 4177.

\(y_1,\dots,y_5\): 1530, 1297, 1335, 1282, 1590.

### 01.1 Title, section, housekeeping Slides p.1–3

Page 1: Lecture 2: Simple Linear Regression: Estimation.

Page 2: section "Recap" (pages 3 to 8).

Page 3: review the course outline. Assignment 1 is due on September 25.

Ask questions on Piazza. Office hours: Wednesdays, 8:30–9:30 and 11:30–12:30.

### 01.2 Mean and expectation Slides p.4

**What** Slides p.4

Review: Mean · Lecture 2 · p.4 Mean/Expectation: \[E[Y]=\int y f(y)\,dy\] Linearity of expectation: For random variables \(Y_1,\dots,Y_m\) and constants \(a_i,b_i\) for \(i=1,\dots,m\): \[E\left[\sum_{i=1}^m (a_iY_i+b_i)\right]=\sum_{i=1}^m a_iE[Y_i]+\sum_{i=1}^m b_i\] For observations \(y_1,\dots,y_n\), the sample mean is: \[\bar y=\frac1n\sum_i y_i\]

A random variable \(Y\) is a quantity whose value comes from chance. \(y\) is one value of \(Y\).

The probability density function (PDF) \(f(y)\) shows how probable values near \(y\) are. It is not negative, and \(\int f(y)\,dy=1\).

The expectation \(E[Y]\) is the population mean of \(Y\).

A constant, such as \(a_i\) or \(b_i\), is a fixed number.

Linearity: constant factors move outside \(E\), sums split, and \(E\) of a constant is the constant.

The observations \(y_1,\dots,y_n\) are the data. \(n\) is the sample size.

The sample mean \(\bar y\) ("y bar") estimates \(E[Y]\) from the data.

**How** Added

Calculate the sample mean \(\bar y\)

- Add the \(n\) observations.
- Divide the sum by \(n\).

**Self-check:** \(\bar y\) is between the smallest and largest observation. It has the unit of \(y_i\).

Use linearity to simplify \(E[\cdot]\)

- Write the expression as \(\sum (a_iY_i+b_i)\).
- Replace each \(a_iY_i\) with \(a_iE[Y_i]\).
- Keep each constant \(b_i\).

**Self-check:** The result has no random variable.

**Example** Added

1

\(\bar y=\frac15(1530+1297+1335+1282+1590)\)

2

\(\bar y=\frac15(7034)\)

3

\(\bar y=1406.8\)

Check: 1406.8 g is between 1282 and 1590.

1

\(\bar x=\frac15(4512+3738+4261+3777+4177)\)

2

\(\bar x=\frac15(20465)\)

3

\(\bar x=4093\)

Grams to kilograms is \(Y/1000\):

1

\(E[Y/1000]=\frac{1}{1000}E[Y]+0\)

linearity, \(a=1/1000,\ b=0\)

2

\(\text{sample version: }1406.8/1000=1.4068\text{ kg}\)

**Why** Added

Proof for one term \(aY+b\). A sum repeats it for each term.

1

\(E[aY+b]=\int (ay+b)f(y)\,dy\)

definition of expectation

2

\(=\int ay f(y)\,dy+\int b f(y)\,dy\)

3

\(=a\int y f(y)\,dy+b\int f(y)\,dy\)

4

\(=aE[Y]+b\int f(y)\,dy\)

definition of expectation

5

\(=aE[Y]+b\)

a PDF integrates to 1

### 01.3 Variance Slides p.5

**What** Slides p.5

Review: Variance · Lecture 2 · p.5 Variance \[\mathrm{Var}[Y]=E\left[(Y-E[Y])^2\right]=E[Y^2]-E[Y]^2\] Properties:
• \(\mathrm{Var}(aY+b)=a^2\mathrm{Var}(Y)\)
• For independent random variables \(X\) and \(Y\): \(\mathrm{Var}(X+Y)=\mathrm{Var}(X)+\mathrm{var}(Y)\)
For observations \(y_1,\dots,y_n\), the sample variance is: \[s_y^2=\frac{1}{n-1}\sum_i (y_i-\bar y)^2\]

The variance \(\mathrm{Var}[Y]\) measures the spread of \(Y\) around its mean. \(\mathrm{Var}\) and \(\mathrm{var}\) mean the same.

A deviation \(Y-E[Y]\) is the distance from the mean. It can be negative.

The standard deviation is the square root of the variance. It has the unit of \(Y\).

\(X\) and \(Y\) are independent when the value of one does not change the distribution of the other.

**How** Added

Calculate the sample variance \(s_y^2\)

- Calculate \(\bar y\).
- Calculate each deviation \(y_i-\bar y\).
- Square the deviations and add them.
- Divide the sum by \(n-1\).

**Self-check:** The deviations add to 0. \(s_y^2\) is not negative. Its unit is the unit of \(y\), squared.

**Example** Added

1

\(y_i-\bar y:\ 1530-1406.8,\ 1297-1406.8,\ 1335-1406.8,\ 1282-1406.8,\ 1590-1406.8\)

2

\(y_i-\bar y:\ 123.2,\ -109.8,\ -71.8,\ -124.8,\ 183.2\)

3

\(\sum_i (y_i-\bar y)=123.2-109.8-71.8-124.8+183.2=0\)

self-check

4

\((y_i-\bar y)^2:\ 15178.24,\ 12056.04,\ 5155.24,\ 15575.04,\ 33562.24\)

5

\(\sum_i (y_i-\bar y)^2=15178.24+12056.04+5155.24+15575.04+33562.24\)

6

\(\sum_i (y_i-\bar y)^2=81526.8\)

7

\(s_y^2=\frac{81526.8}{5-1}\)

8

\(s_y^2=20381.7\ \text{g}^2\)

\(s_y=\sqrt{20381.7}=142.76\) g.

Head size (Sections 01.4 and 01.5 use these numbers):

1

\(x_i-\bar x:\ 4512-4093,\ 3738-4093,\ 4261-4093,\ 3777-4093,\ 4177-4093\)

2

\(x_i-\bar x:\ 419,\ -355,\ 168,\ -316,\ 84\)

3

\((x_i-\bar x)^2:\ 175561,\ 126025,\ 28224,\ 99856,\ 7056\)

4

\(\sum_i (x_i-\bar x)^2=436722\)

5

\(s_x^2=\frac{436722}{4}=109180.5\ (\text{cm}^3)^2\)

\(\mathrm{Var}(aY+b)=a^2\mathrm{Var}(Y)\) also holds for the sample variance. For kg, \(a=1/1000\):

1

\(s^2_{y/1000}=\left(\frac{1}{1000}\right)^2(20381.7)\)

Slides p.5, \(a=1/1000,\ b=0\)

2

\(s^2_{y/1000}=0.0203817\ \text{kg}^2\)

**Why** Added

Proof of \(E[Y^2]-E[Y]^2\). The constant \(\mu=E[Y]\).

1

\(\mathrm{Var}[Y]=E[(Y-\mu)^2]\)

2

\(=E[Y^2-2\mu Y+\mu^2]\)

3

\(=E[Y^2]-2\mu E[Y]+\mu^2\)

linearity

4

\(=E[Y^2]-2\mu^2+\mu^2\)

substitute \(E[Y]=\mu\)

5

\(=E[Y^2]-\mu^2\)

6

\(=E[Y^2]-E[Y]^2\)

Proof of \(\mathrm{Var}(aY+b)=a^2\mathrm{Var}(Y)\). Linearity gives \(E[aY+b]=a\mu+b\).

1

\(\mathrm{Var}(aY+b)=E[(aY+b-(a\mu+b))^2]\)

definition of variance

2

\(=E[(aY-a\mu)^2]\)

3

\(=E[a^2(Y-\mu)^2]\)

4

\(=a^2E[(Y-\mu)^2]\)

linearity

5

\(=a^2\mathrm{Var}(Y)\)

Section 01.4 proves the independence property.

### 01.4 Covariance Slides p.6

**What** Slides p.6

Review: Covariance · Lecture 2 · p.6 Covariance \[\mathrm{cov}[X,Y]=E[(X-E[X])(Y-E[Y])]=E[XY]-E[X]E[Y]\] Properties:
• \(\mathrm{cov}(X,X)=\mathrm{Var}(X)\)
• \(\mathrm{cov}(aY+c,bX+d)=ab\,\mathrm{cov}(X,Y)\)
• \(\mathrm{cov}(U+V,X+Y)=\mathrm{cov}(U,X)+\mathrm{cov}(U,Y)+\mathrm{cov}(V,X)+\mathrm{cov}(V,Y)\)
For observations \((y_1,x_1),\dots,(y_n,x_n)\), the sample covariance is: \[\frac{1}{n-1}\sum_i (y_i-\bar y)(x_i-\bar x)\]

The covariance \(\mathrm{cov}[X,Y]\) shows whether \(X\) and \(Y\) move together.

Positive: when \(X\) is above its mean, \(Y\) is usually above its mean.

Negative: when \(X\) is above its mean, \(Y\) is usually below its mean.

A pair \((y_i,x_i)\) is two values from the same person.

Added constants do not change the covariance. Constant factors multiply it.

\(\mathrm{cov}(X,Y)=\mathrm{cov}(Y,X)\). Added

**How** Added

Calculate the sample covariance

- Calculate the deviations \(y_i-\bar y\) and \(x_i-\bar x\).
- Multiply the two deviations of each pair.
- Add the products.
- Divide the sum by \(n-1\).

**Self-check:** Use \(y\) deviations for both factors. The result must be \(s_y^2\). The unit is the unit of \(x\) times the unit of \(y\).

**Example** Added

1

\(\bar x=4093,\quad \bar y=1406.8\)

Section 01.2

2

\(\sum_i (y_i-\bar y)(x_i-\bar x)=(123.2)(419)+(-109.8)(-355)+(-71.8)(168)+(-124.8)(-316)+(183.2)(84)\)

3

\(=51620.8+38979.0-12062.4+39436.8+15388.8\)

4

\(=133363\)

5

\(\text{sample covariance}=\frac{133363}{5-1}\)

6

\(\text{sample covariance}=33340.75\ \text{cm}^3\cdot\text{g}\)

[figure]
Figure 1-1 (Added) · Slides p.10 data. Point labels are \(i\). Orange dashed lines: \(\bar x\), \(\bar y\). Blue points have a positive product \((y_i-\bar y)(x_i-\bar x)\). Purple point 3 has a negative product.

33340.75 cm³·g is positive: people with larger heads usually have heavier brains.

**Why** Added

Proof of the second form. The constants are \(\mu_X=E[X]\) and \(\mu_Y=E[Y]\).

1

\(\mathrm{cov}[X,Y]=E[(X-\mu_X)(Y-\mu_Y)]\)

2

\(=E[XY-\mu_YX-\mu_XY+\mu_X\mu_Y]\)

3

\(=E[XY]-\mu_YE[X]-\mu_XE[Y]+\mu_X\mu_Y\)

linearity

4

\(=E[XY]-\mu_Y\mu_X-\mu_X\mu_Y+\mu_X\mu_Y\)

substitute \(E[X]=\mu_X,\ E[Y]=\mu_Y\)

5

\(=E[XY]-\mu_X\mu_Y\)

6

\(=E[XY]-E[X]E[Y]\)

Proof of \(\mathrm{cov}(aY+c,bX+d)=ab\,\mathrm{cov}(X,Y)\). Linearity gives \(E[aY+c]=a\mu_Y+c\) and \(E[bX+d]=b\mu_X+d\).

1

\(\mathrm{cov}(aY+c,bX+d)=E[(aY+c-a\mu_Y-c)(bX+d-b\mu_X-d)]\)

definition of covariance

2

\(=E[a(Y-\mu_Y)\,b(X-\mu_X)]\)

3

\(=ab\,E[(Y-\mu_Y)(X-\mu_X)]\)

linearity

4

\(=ab\,\mathrm{cov}(Y,X)\)

5

\(=ab\,\mathrm{cov}(X,Y)\)

Proof of the independence property (Slides p.5):

1

\(\mathrm{Var}(X+Y)=\mathrm{cov}(X+Y,X+Y)\)

property \(\mathrm{cov}(X,X)=\mathrm{Var}(X)\)

2

\(=\mathrm{cov}(X,X)+\mathrm{cov}(X,Y)+\mathrm{cov}(Y,X)+\mathrm{cov}(Y,Y)\)

four-term property

3

\(=\mathrm{Var}(X)+2\,\mathrm{cov}(X,Y)+\mathrm{Var}(Y)\)

4

\(=\mathrm{Var}(X)+0+\mathrm{Var}(Y)\)

independence: \(E[XY]=E[X]E[Y]\), \(\mathrm{cov}(X,Y)=0\)

5

\(=\mathrm{Var}(X)+\mathrm{Var}(Y)\)

The size of the covariance depends on the units.

### 01.5 Correlation Slides p.7

**What** Slides p.7

Correlation · Lecture 2 · p.7 Correlation coefficient: \[\rho=\frac{\mathrm{cov}(X,Y)}{\sqrt{\mathrm{var}(X)}\sqrt{\mathrm{var}(Y)}}\] Correlation quantifies strength of linear relationship
Sample correlation: \[r=\frac{\frac{1}{n-1}\sum_{i=1}^n (y_i-\bar y)(x_i-\bar x)}{\sqrt{\frac{1}{n-1}\sum_{i=1}^n (y_i-\bar y)^2}\sqrt{\frac{1}{n-1}\sum_{i=1}^n (x_i-\bar x)^2}}=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}\]

The correlation coefficient \(\rho\) ("rho") is the covariance divided by both standard deviations. It has no unit.

A linear relationship follows a straight line.

The sample correlation \(r\) puts sample quantities into \(\rho\).

\(S_{xy}=\sum_{i=1}^n (y_i-\bar y)(x_i-\bar x)\) is the sum of cross-products: the sample covariance without \(\frac{1}{n-1}\).

\(S_{xx}=\sum_{i=1}^n (x_i-\bar x)^2\) is the sum of squares of \(x\), the numerator of \(s_x^2\).

\(S_{yy}=\sum_{i=1}^n (y_i-\bar y)^2\) is the sum of squares of \(y\), the numerator of \(s_y^2\).

**How** Added

Calculate the sample correlation \(r\)

- Calculate \(\bar x\) and \(\bar y\).
- Calculate \(S_{xx}=\sum (x_i-\bar x)^2\).
- Calculate \(S_{yy}=\sum (y_i-\bar y)^2\).
- Calculate \(S_{xy}=\sum (y_i-\bar y)(x_i-\bar x)\).
- Calculate \(r=S_{xy}/\sqrt{S_{xx}S_{yy}}\).

**Self-check:** \(S_{xx}>0\) and \(S_{yy}>0\). \(r\) has the sign of \(S_{xy}\). \(r\) is between −1 and 1.

**Example 1 · \(r\) for the five people** Added

1

\(\bar x=4093,\quad \bar y=1406.8\)

Section 01.2

2

\(S_{xx}=436722\)

Section 01.3

3

\(S_{yy}=81526.8\)

Section 01.3

4

\(S_{xy}=133363\)

Section 01.4

5

\(r=\frac{133363}{\sqrt{436722\times 81526.8}}\)

6

\(r=\frac{133363}{\sqrt{35604547149.6}}\)

7

\(r=\frac{133363}{188691.67}\)

8

\(r=0.7068\)

Check: \(S_{xy}>0\) and \(r>0\). 0.7068 is between −1 and 1.

Second path: \(33340.75/(330.4247\times 142.7645)=0.7068\), with \(s_x=\sqrt{109180.5}\) and \(s_y=\sqrt{20381.7}\).

Head size and brain weight have a positive linear relationship.

**Example 2 · Scale \(y\) by 2** Added

Let \(y_i^*=2y_i\): 3060, 2594, 2670, 2564, 3180.

1

\(\bar y^*=2\bar y=2(1406.8)=2813.6\)

linearity, Slides p.4

2

\(y_i^*-\bar y^*=2(y_i-\bar y)\)

3

\(S_{xy^*}=2S_{xy}=2(133363)=266726\)

4

\(S_{y^*y^*}=2^2S_{yy}=4(81526.8)=326107.2\)

5

\(r^*=\frac{266726}{\sqrt{436722\times 326107.2}}\)

6

\(r^*=\frac{266726}{377383.34}\)

7

\(r^*=0.7068\)

Step 3 uses \(\mathrm{cov}(aY+c,bX+d)=ab\,\mathrm{cov}(X,Y)\) with \(a=2,\ c=0,\ b=1,\ d=0\). Slides p.6

Step 4 uses \(\mathrm{Var}(aY+b)=a^2\mathrm{Var}(Y)\) with \(a=2,\ b=0\). Slides p.5

The square root of 4 is 2. The two factors of 2 cancel, and \(r^*=r\).

**Why** Added

For each \(a>0\), \(aY\) has the same \(\rho\) as \(Y\):

1

\(\rho(aY,X)=\frac{\mathrm{cov}(aY,X)}{\sqrt{\mathrm{var}(X)}\sqrt{\mathrm{var}(aY)}}\)

definition of correlation

2

\(=\frac{a\,\mathrm{cov}(Y,X)}{\sqrt{\mathrm{var}(X)}\sqrt{\mathrm{var}(aY)}}\)

Slides p.6, \(b=1,\ c=d=0\)

3

\(=\frac{a\,\mathrm{cov}(Y,X)}{\sqrt{\mathrm{var}(X)}\sqrt{a^2\mathrm{var}(Y)}}\)

Slides p.5, \(\mathrm{Var}(aY+b)=a^2\mathrm{Var}(Y)\)

4

\(=\frac{a\,\mathrm{cov}(Y,X)}{\sqrt{\mathrm{var}(X)}\,a\sqrt{\mathrm{var}(Y)}}\)

\(a>0\)

5

\(=\frac{\mathrm{cov}(Y,X)}{\sqrt{\mathrm{var}(X)}\sqrt{\mathrm{var}(Y)}}\)

6

\(=\rho(Y,X)\)

The factors \(\frac{1}{n-1}\) cancel in the sample formula:

1

\(r=\frac{\frac{1}{n-1}S_{xy}}{\sqrt{\frac{1}{n-1}S_{yy}}\sqrt{\frac{1}{n-1}S_{xx}}}\)

definitions of \(S_{xy},S_{xx},S_{yy}\)

2

\(=\frac{\frac{1}{n-1}S_{xy}}{\frac{1}{n-1}\sqrt{S_{yy}}\sqrt{S_{xx}}}\)

3

\(=\frac{S_{xy}}{\sqrt{S_{yy}}\sqrt{S_{xx}}}\)

4

\(=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}\)

### 01.6 Goals and notation Slides p.8

**What** Slides p.8

Recap: Goals and Notation · Lecture 2 · p.8 Possible goals:
• Characterize the relationship between outcome \(y\) and covariate \(x\)
• Predict \(y\) given \(x\)
For the \(i\)th observation:
\(y_i\) is the outcome
\(x_i\) is a covariate
\(i=1,\dots,n\) indexes the observations in the sample

The outcome \(y_i\) is the quantity to explain or predict.

We use the covariate \(x_i\) to explain or predict \(y_i\).

To characterize the relationship is to describe how \(y\) changes with \(x\).

**How** Added

Match a data set to the notation

- Call the quantity to explain or predict \(y\).
- Call the quantity that explains it \(x\).
- Count the rows to get \(n\). Each row is one \(i\).

**Self-check:** Each \(i\) has one \(y_i\) and one \(x_i\), from the same person.

**Example** Added

\(y\): brain weight (g). \(x\): head size (cm³).

\(n=5\). Row 1 is \(i=1\): \(y_1=1530\) and \(x_1=4512\).

**Why** Added

Notation only. No derivation.

### 01.7 Practice Added

**Q1.** Change brain weight to kilograms: \(y^*=y/1000\). Use \(S_{xy}=133363\) and \(r=0.7068\). Find \(S_{xy^*}\) and \(r^*\) for \((y^*,x)\).

Answer

\(y_i^*-\bar y^*=(y_i-\bar y)/1000\). Then \(S_{xy^*}=S_{xy}/1000=133363/1000=133.363\).

The numerator and the denominator both get the factor \(1/1000\) (Slides p.5, p.6). They cancel: \(r^*=r=0.7068\).

**Q2.** For the five people, \(s_x^2=109180.5\), \(s_y^2=20381.7\), and the sample covariance is 33340.75. Use Slides p.6. Find the sample variance of \(x+y\).

Answer

1

\(\mathrm{Var}(x+y)=\mathrm{cov}(x+y,x+y)\)

2

\(=\mathrm{Var}(x)+2\,\mathrm{cov}(x,y)+\mathrm{Var}(y)\)

four-term property

3

\(=109180.5+2(33340.75)+20381.7\)

4

\(=109180.5+66681.5+20381.7\)

5

\(=196243.7\)

\(x\) and \(y\) are not independent. Keep the covariance term.

**Q3.** Let \(\mathrm{Var}(X)=4\), \(\mathrm{Var}(Y)=9\), and \(\mathrm{cov}(X,Y)=3\). Find \(\rho\) and \(\mathrm{cov}(2Y+1,\,3X-5)\).

Answer

\(\rho=\frac{3}{\sqrt4\sqrt9}=\frac{3}{2\times3}=0.5\).

Use \(\mathrm{cov}(aY+c,bX+d)=ab\,\mathrm{cov}(X,Y)\) with \(a=2,\ c=1,\ b=3,\ d=-5\).

\(\mathrm{cov}(2Y+1,3X-5)=2\times3\times3=18\).

## 02 · The simple linear regression model and its coefficients

Plan · Slides p.9–18

Slides p.10: first 6 rows of the data.

Slides p.11: histograms of \(x\) and \(y\).

Slides p.12: scatterplot of \(y\) against \(x\).

Slides p.13: the model: parameters, errors, data.

Slides p.14–16: meaning of \(\beta_0\) and \(\beta_1\).

Slides p.17: the model as one picture (figure Added).

Slides p.18: four assumptions and the estimation question.

### 02.1 Title page Slides p.9

Title: Lecture 2: Simple Linear Regression: Estimation.

Slides p.1–8 are a review (Unit 01). New material starts at Slides p.10.

### 02.2 Data example: the brainhead data Slides p.10

**What** Slides p.10

Data Example · Lecture 2 · p.10 The slide gives two columns of the brainhead data: \(x\) = head size, \(y\) = brain weight. It prints the first 6 rows:

| row \(i\) | \(x\) | \(y\)

| 1 | 4512 | 1530

| 2 | 3738 | 1297

| 3 | 4261 | 1335

| 4 | 3777 | 1282

| 5 | 4177 | 1590

| 6 | 3585 | 1300

An observation is one row of the data: one person.

A variable is one column of the data: one type of measurement.

Head size \(x\): head volume, in cubic centimetres (cm³).

Brain weight \(y\): in grams (g).

The brainhead data has \(n=236\) rows (Lecture 1 · p.4).

**How** Added

Read one row of the data

- Call the column that explains \(x\).
- Call the column to explain \(y\).
- Select a row \(i\).
- Read \(x_i\) and \(y_i\), with units.

**Self-check:** The \(x\) and \(y\) columns both have \(n\) rows.

**Example · Rows 1 and 2** Added

Steps 1–2: \(x\) is head size. \(y\) is brain weight.

Steps 3–4, row 1: \(x_1=4512\) cm³ and \(y_1=1530\) g.

Steps 3–4, row 2: \(x_2=3738\) cm³ and \(y_2=1297\) g.

**Why · The names \(x\) and \(y\)** Added

Each formula symbol refers to one column. For example, \(x_1=4512\) is the first value in the \(x\) column.

### 02.3 Exploratory data analysis: histograms Slides p.11

**What** Slides p.11

Exploratory Data Analysis · Lecture 2 · p.11 Two histograms: "Head Size (cm^3)" and "Brain Weight (grams)". The vertical axis is "Frequency".

Exploratory data analysis (EDA) uses plots and simple summaries to look at the data before modelling.

A histogram divides the number line into equal intervals (bins). Each bin has one bar.

Frequency: the number of observations in a bin. It is the height of the bar.

**How** Added

Read a histogram

- Read the variable and its unit on the horizontal axis.
- Read the bin width.
- Read the height of each bar.
- Find the highest bar.
- Compare the two sides of the highest bar.

**Self-check:** The bar heights add to \(n=236\).

**Example · The brainhead data** Added

The bar heights come from a count of the 236 rows in the data file.

[figure]
Figure 2-1 (Slides p.11, redrawn from the data) · Left: head size \(x\), bin width 200 cm³. Right: brain weight \(y\), bin width 50 g.

Head size, bar heights from left to right: 1, 6, 19, 41, 48, 45, 36, 24, 8, 7, 1.

Brain weight, bar heights from left to right: 3, 10, 17, 25, 45, 37, 40, 22, 18, 6, 7, 4, 2.

Head size: the highest bar, 3400 to 3600 cm³, has 48 people. Range: 2773 to 4747 cm³ (Lecture 1 · p.23).

Brain weight: the highest bar, 1200 to 1250 g, has 45 people. Range: 1012 to 1635 g (Lecture 1 · p.23).

Shape: both are high in the middle and low at the sides. Both are approximately symmetric.

**Why · The sum of the bar heights is \(n\)** Added

Each observation is in exactly one bin. The bar heights count each person one time.

1

\[\text{sum for } x=(1+6+19+41)+(48+45+36)+(24+8+7+1)\]

2

\[=67+129+40\]

3

\[=236=n\]

4

\[\text{sum for } y=(3+10+17+25)+(45+37+40)+(22+18+6+7+4+2)\]

5

\[=55+122+59\]

6

\[=236=n\]

### 02.4 Exploratory data analysis: scatterplot Slides p.12

**What** Slides p.12

EDA · Lecture 2 · p.12 Scatterplot: Brain Weight (grams) against Head Size (cm^3).

A scatterplot has one point \((x_i,y_i)\) for each observation. The brainhead data gives 236 points.

"\(y\) against \(x\)": \(y\) is on the vertical axis, \(x\) on the horizontal axis.

**How** Added

Draw and read a scatterplot

- Put \(x\) on the horizontal axis and \(y\) on the vertical axis.
- Draw observation \(i\) at \((x_i,y_i)\).
- Find the direction from left to right: up, down, or none.
- Find if the points follow approximately a straight line.
- Compare the vertical spread at the left and at the right.

**Self-check:** Find row 1, \((4512,1530)\), on the plot.

**Example · The brainhead data** Added

[figure]
Figure 2-2 (Slides p.12, redrawn from the data) · All 236 observations. Orange points 1–6 are the rows of Slides p.10. For example, point 1 is \((4512,1530)\), and point 2 is \((3738,1297)\).

Step 3: the points go up from bottom left to top right. Larger heads usually have heavier brains.

Step 4: the points follow approximately a straight line. There is no clear curve.

Step 5: at one head size, brain weights spread above and below. Point 5 has a smaller head than point 1, but a heavier brain.

Points 1 and 5: \(4512-4177=335\) cm³ for \(x\), and \(1590-1530=60\) g for \(y\).

**Why · The next step uses a straight-line model** Added

The points follow a line, with random spread above and below it. The model writes the line as \(\beta_0+\beta_1x_i\) and the spread as the random error \(\epsilon_i\).

### 02.5 The simple linear regression model Slides p.13

**What** Slides p.13

Simple Linear Regression · Lecture 2 · p.13 \[y_i=\beta_0+\beta_1x_i+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] Or: \[y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\ \sigma^2)\] • \(\beta_0,\beta_1,\sigma^2\): fixed, unknown parameters
• \(\epsilon_i\) is unobserved random error term
• \(y_i,x_i\) are the observed data
• Treat \(x_i\) as fixed

Simple linear regression (SLR) describes the mean of \(y\) with a straight line in one covariate \(x\).

A parameter is a fixed, unknown number of the population.

The error term \(\epsilon_i\) is the random distance of \(y_i\) from the line \(\beta_0+\beta_1x_i\). We cannot observe it.

\(\sigma^2\) is the variance of \(\epsilon_i\).

The normal distribution \(N(\mu,\sigma^2)\) is a continuous, bell-shaped distribution with mean \(\mu\) and variance \(\sigma^2\).

\(\overset{iid}{\sim}\): independent and identically distributed. All \(\epsilon_i\) are independent and have the same distribution \(N(0,\sigma^2)\).

\(\overset{indep}{\sim}\): independent only. The means \(\beta_0+\beta_1x_i\) change with \(i\).

"Treat \(x_i\) as fixed": \(x_i\) is a known constant. Only \(\epsilon_i\) and \(y_i\) are random.

**How** Added

Write a data set as an SLR model

- Call the outcome \(y\).
- Call the covariate \(x\).
- Count the observations: \(n\).
- Write \(y_i=\beta_0+\beta_1x_i+\epsilon_i,\ \epsilon_i\overset{iid}{\sim}N(0,\sigma^2),\ i=1,\dots,n\).
- Write the second form \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\).
- Sort each symbol: parameter (fixed, unknown), error (random, not observed), or data (observed).

**Self-check:** There are three parameters: \(\beta_0,\beta_1,\sigma^2\). \(\epsilon_i\) is not a parameter and not data.

**Example · The brainhead data** Added

1

Outcome and covariate How steps 1–3

\[y_i=\text{brain weight (g)},\quad x_i=\text{head size (cm}^3),\quad n=236\]

2

Model How step 4

\[y_i=\beta_0+\beta_1x_i+\epsilon_i,\quad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2),\quad i=1,\dots,236\]

3

Row 1, \((x_1,y_1)=(4512,1530)\) Slides p.10

\[1530=\beta_0+\beta_1(4512)+\epsilon_1\]

4

Second form How step 5

\[y_1\sim N(\beta_0+4512\beta_1,\ \sigma^2)\]

5

Row 2, \((x_2,y_2)=(3738,1297)\)

\[1297=\beta_0+\beta_1(3738)+\epsilon_2,\qquad y_2\sim N(\beta_0+3738\beta_1,\ \sigma^2)\]

Sort the symbols How step 6

Parameters (fixed, unknown): \(\beta_0,\beta_1,\sigma^2\), the same for all 236 people.

Errors (random, not observed): \(\epsilon_1,\dots,\epsilon_{236}\).

Data (observed): \(x_1=4512,\dots\) and \(y_1=1530,\dots\), 236 pairs.

Rows 1 and 2 have different centres, \(\beta_0+4512\beta_1\) and \(\beta_0+3738\beta_1\). For this reason, the second form writes "indep", not "iid".

**Why · The two forms are the same model** Added

Start from the first form. \(x_i\) is a constant.

1

\[E[y_i]=E[\beta_0+\beta_1x_i+\epsilon_i]\]

2

\[=\beta_0+\beta_1x_i+E[\epsilon_i]\]

Linearity of expectation.

3

\[=\beta_0+\beta_1x_i+0\]

\(\epsilon_i\sim N(0,\sigma^2)\) gives \(E[\epsilon_i]=0\).

4

\[\mathrm{Var}[y_i]=\mathrm{Var}[\beta_0+\beta_1x_i+\epsilon_i]\]

5

\[=\mathrm{Var}[\epsilon_i]\]

An added constant does not change the variance.

6

\[=\sigma^2\]

7

\[y_i\sim N(\beta_0+\beta_1x_i,\ \sigma^2)\]

A normal variable plus a constant is normal. Mean: line 3. Variance: line 6.

8

\[y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\ \sigma^2)\]

Each \(y_i\) contains one \(\epsilon_i\). The \(\epsilon_i\) are independent.

### 02.6 The meaning of \(\beta_0,\beta_1\) Slides p.14–16

Slides p.14–16 are three build steps of one slide (footer 12/27).

**What** Slides p.14–16

Regression Coefficients \((\beta_0,\beta_1)\) · Lecture 2 · p.14–16 \[y_i=\beta_0+\beta_1x_i+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] \[E[y_i|x_i]=\beta_0+\beta_1x_i\] • \(\beta_0\) is an intercept
• \(E[y_i|x_i=0]=\beta_0+\beta_1(0)=\beta_0\)
• \(\beta_1\) is a slope
• \(E[y_i|x_i=x^*]=\beta_0+\beta_1(x^*)\)
• \(E[y_i|x_i=x^*+1]=\beta_0+\beta_1(x^*+1)\) \[\Longrightarrow E[y_i|x_i=x^*+1]-E[y_i|x_i=x^*]=\beta_0+\beta_1(x^*+1)-[\beta_0+\beta_1(x^*)]=\beta_1\]

The conditional expectation \(E[y_i|x_i]\) is the mean of \(y_i\) at a given \(x_i\). Read "|" as "given".

The regression coefficients are \(\beta_0\) and \(\beta_1\).

The intercept \(\beta_0\) is the mean of \(y\) at \(x=0\): the height of the line at the vertical axis.

The slope \(\beta_1\) is the change in the mean of \(y\) when \(x\) increases by 1 unit.

\(x^*\) is any one fixed value of \(x\).

[figure]
Figure 2-3 (Added) · Blue: the mean line. Green: height \(\beta_0\) at \(x=0\). Orange: \(x\) increases by 1. Purple: the mean increases by \(\beta_1\).

**How** Added

Say what \(\beta_0\) and \(\beta_1\) mean

- Write the mean line \(E[y_i|x_i]=\beta_0+\beta_1x_i\).
- Put \(x_i=0\). Write: "When \(x\) is 0, the expected \(y\) is \(\beta_0\)."
- Put \(x^*\) and \(x^*+1\) into the line. Subtract the first result from the second.
- Write: "When \(x\) increases by 1 unit, the expected \(y\) changes by \(\beta_1\)."
- Replace "\(x\)" and "\(y\)" with the variable names and units.
- For an increase of \(d\) units in \(x\), the change is \(d\beta_1\). Added

**Self-check:** Each sentence says "expected" or "mean": the coefficients describe \(E[y_i|x_i]\), not one \(y_i\). \(\beta_1\) has the unit "unit of \(y\) per unit of \(x\)".

**Example · The brainhead data** Added

We have no estimates yet. The sentences have no number for \(\beta_1\).

1

Mean line How step 1

\[E[\text{brain weight}_i\,|\,\text{head size}_i]=\beta_0+\beta_1\,\text{head size}_i\]

2

\(\beta_0\) How step 2

\[E[y_i|x_i=0]=\beta_0+\beta_1(0)=\beta_0\]

**Basis:** Slides p.15. At a head size of 0 cm³, the expected brain weight is \(\beta_0\) g.

3

\(\beta_1\), with \(x^*=3738\) (row 2, Slides p.10) How step 3

\[E[y_i|x_i=3739]-E[y_i|x_i=3738]=\beta_0+\beta_1(3739)-[\beta_0+\beta_1(3738)]\]

4

\[=\beta_1(3739)-\beta_1(3738)\]

5

\[=\beta_1\]

**Basis:** Slides p.16, with \(x^*=3738\).

6

Names and units How steps 4–5

When head size increases by 1 cm³, the expected brain weight changes by \(\beta_1\) g.

7

Rows 1 and 2: \(d=4512-3738=774\) How step 6 · Added

\[E[y_i|x_i=4512]-E[y_i|x_i=3738]=\beta_0+\beta_1(4512)-[\beta_0+\beta_1(3738)]\]

8

\[=\beta_1(4512-3738)\]

9

\[=774\beta_1\]

\(\beta_0\) cancels. The result does not depend on \(x^*\).

Optional — not on the slides

Head size goes from 2773 to 4747 cm³ (Lecture 1 · p.23). \(x=0\) is outside this range. Here \(\beta_0\) does not describe a real person.

**Why · Derivation** Slides p.14–16

1

\[E[y_i|x_i]=\beta_0+\beta_1x_i\]

Section 02.5, Why line 3 (\(x_i\) fixed, \(E[\epsilon_i]=0\)).

2

\[E[y_i|x_i=0]=\beta_0+\beta_1(0)\]

Put \(x_i=0\).

3

\[=\beta_0\]

4

\[E[y_i|x_i=x^*]=\beta_0+\beta_1(x^*)\]

Put \(x_i=x^*\).

5

\[E[y_i|x_i=x^*+1]=\beta_0+\beta_1(x^*+1)\]

Put \(x_i=x^*+1\).

6

\[E[y_i|x_i=x^*+1]-E[y_i|x_i=x^*]=\beta_0+\beta_1(x^*+1)-[\beta_0+\beta_1(x^*)]\]

Line 5 minus line 4.

7

\[=\beta_0+\beta_1x^*+\beta_1-\beta_0-\beta_1x^*\]

8

\[=\beta_1\]

### 02.7 A picture of the model Slides p.17 · figure Added

Slides p.17 has only the title "Simple Linear Regression".

[figure]
Figure 2-4 (Added) · Orange bell curves (rotated by 90°) show the distribution of \(y\) at three values of \(x\). Purple points are possible observed values of \(y\).

Blue line: the mean line \(E[y_i|x_i]=\beta_0+\beta_1x_i\).

Orange bell curve: \(y_i\sim N(\beta_0+\beta_1x_i,\sigma^2)\) at a fixed \(x_i\). Its centre is on the line.

Vertical distance from a purple point to the orange centre: the error \(\epsilon_i=y_i-(\beta_0+\beta_1x_i)\).

All bell curves have the same width: the same variance \(\sigma^2\) at each \(x\).

Figure 2-2 has the same pattern: a line, with spread above and below it.

### 02.8 The four assumptions Slides p.18

**What** Slides p.18

Simple Linear Regression · Lecture 2 · p.18 \[y_i=\beta_0+\beta_1x_i+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] Or: \[y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\ \sigma^2)\] Assumptions:
1. Linearity
2. Independence
3. Normality
4. Equal variance (homoskedasticity)
How to estimate \(\beta_0\) and \(\beta_1\)?

An assumption is a condition that the model accepts as true. The data do not prove it.

1. Linearity

\(E[y_i|x_i]=\beta_0+\beta_1x_i\) is a straight line in \(x_i\).

2. Independence

The errors \(\epsilon_i\) are independent. Then the \(y_i\) are independent.

3. Normality

Each \(\epsilon_i\) has a normal distribution.

4. Equal variance (homoskedasticity)

Each \(\epsilon_i\) has the same variance \(\sigma^2\) at each \(x_i\). "Homoskedasticity" means "same variance".

**How** Added

Find each assumption in the model formula

- \(\beta_0+\beta_1x_i\) is a straight line: assumption 1.
- The first "i" in \(\overset{iid}{\sim}\) means "independent": assumption 2.
- The name \(N\): assumption 3.
- \(\sigma^2\) has no index \(i\): assumption 4.

**Self-check:** Each assumption matches one symbol in \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\) or in \(\beta_0+\beta_1x_i\).

**Example · The brainhead data** Added

1. Linearity: at head size \(x\) cm³, the mean brain weight is \(\beta_0+\beta_1x\) g.

2. Independence: the error of \(y_1=1530\) does not affect the error of \(y_2=1297\).

3. Normality: at one head size, brain weights are bell-shaped around their mean.

4. Equal variance: at 3738 cm³ and at 4512 cm³, brain weights have the same variance \(\sigma^2\).

Figure 2-2 agrees with assumptions 1 and 4.

**Why · The four assumptions together give the model** Added

1

\[y_i=\beta_0+\beta_1x_i+\epsilon_i,\quad E[\epsilon_i]=0\]

Assumption 1.

2

\[\mathrm{Var}[\epsilon_i]=\sigma^2\ \text{ for all } i\]

Assumption 4.

3

\[\epsilon_i\sim N(0,\sigma^2)\]

Assumption 3.

4

\[\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\]

Assumption 2.

Lines 1 and 4 together are the first line of Slides p.18.

We know only the 236 pairs \((x_i,y_i)\), not \(\beta_0\) and \(\beta_1\). An estimate is a number from the data that replaces an unknown parameter.

### 02.9 Practice Added

**Q1.** Use row 3 of the brainhead data on Slides p.10. Write the model for observation 3 in both forms. Which quantities are observed, and which are unknown?

Answer

Row 3: \((x_3,y_3)=(4261,1335)\).

First form: \(1335=\beta_0+\beta_1(4261)+\epsilon_3,\ \epsilon_3\sim N(0,\sigma^2)\).

Second form: \(y_3\sim N(\beta_0+4261\beta_1,\ \sigma^2)\).

Observed: \(x_3=4261\) and \(y_3=1335\). Unknown: \(\beta_0,\beta_1,\sigma^2\) and \(\epsilon_3\).

**Q2.** Use the SLR model for brain weight (g) on head size (cm³). Show that \(E[y_i|x_i=4261]-E[y_i|x_i=3738]\) depends only on \(\beta_1\). Then say what \(\beta_1\) means for these data.

Answer

1

\[E[y_i|x_i=4261]-E[y_i|x_i=3738]=\beta_0+\beta_1(4261)-[\beta_0+\beta_1(3738)]\]

2

\[=\beta_1(4261-3738)\]

3

\[=523\beta_1\]

\(\beta_0\) cancels. Meaning: when head size increases by 1 cm³, the expected brain weight changes by \(\beta_1\) g.

**Q3.** Name the model assumption that each statement describes.
(a) \(\mathrm{Var}[\epsilon_i]=\sigma^2\) for each \(i\).
(b) \(E[y_i|x_i]=\beta_0+\beta_1x_i\).
(c) The error of person 1 gives no information about the error of person 2.
(d) \(\epsilon_i\) has a bell-shaped \(N\) distribution.

Answer

(a) Equal variance (homoskedasticity): \(\sigma^2\) has no index \(i\).

(b) Linearity.

(c) Independence.

(d) Normality.

## 03 · Least squares estimation

Plan · Slides p.19–26

Slides p.19–20: many lines fit one scatterplot. Select the best line.

Slides p.21: make the sum of squares \(S(\beta_0,\beta_1)\) a minimum. Set both partial derivatives to 0.

Slides p.22–23: get \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).

Slides p.24–25: get a formula for \(\hat\beta_1\).

Slides p.26: write \(\hat\beta_1\) as \(S_{xy}/S_{xx}\).

**Symbols** Added

\(\sum_{i=1}^n a_i\) is \(a_1+a_2+\dots+a_n\). A \(\sum\) without limits means \(\sum_{i=1}^n\).

The sample mean gives \(\sum x_i=n\bar x\) and \(\sum y_i=n\bar y\).

An estimator is a formula that gives a value for a parameter from the data. A hat marks it: \(\hat\beta_0\) estimates \(\beta_0\).

**Data** Slides p.10

The examples use the first 6 brainhead observations: \(n=6\).

| \(i\) | 1 | 2 | 3 | 4 | 5 | 6

| \(x_i\) (cm³) | 4512 | 3738 | 4261 | 3777 | 4177 | 3585

| \(y_i\) (g) | 1530 | 1297 | 1335 | 1282 | 1590 | 1300

\(\sum x_i=4512+3738+4261+3777+4177+3585=24050\) and \(\sum y_i=1530+1297+1335+1282+1590+1300=8334\).

### 03.1 Section page and the line of best fit Slides p.19–20

Slides p.19: section page "Estimating \(\beta_0,\beta_1\)" (Slides p.20–26).

Slides p.20: title "Line of Best Fit" only.

The line of best fit is the line nearest to the points, by a stated rule.

Three candidate lines Added

[figure]
Figure 3-1 (Added) · 236 brainhead points. Orange dashed: the mean brain weight, approximately 1284 g (Lecture 1 p.23). Purple dashed: \(y=385.4323+0.2608207x\). Green: \(y=335.4323+0.2608207x\).

All three lines are near the points. We need a rule that gives a number for each line.

### 03.2 The least squares rule Slides p.21

**What** Slides p.21

Least Squares Estimation · Lecture 2 · p.21 Minimize the sum of squares: \[S(\beta_0,\beta_1)=\sum_{i=1}^n (y_i-\beta_0-\beta_1x_i)^2\] \[\Longrightarrow\quad \frac{\partial S(\beta_0,\beta_1)}{\partial\beta_0}=0,\qquad \frac{\partial S(\beta_0,\beta_1)}{\partial\beta_1}=0\]

\(\beta_0+\beta_1x_i\) is the height of the line at \(x_i\).

\(y_i-\beta_0-\beta_1x_i\) is the vertical distance from point \(i\) to the line. It is negative below the line.

Squares are never negative. Distances above and below the line do not cancel.

The sum of squares \(S(\beta_0,\beta_1)\) is a function of the line. A different line gives a different \(S\).

Least squares (LS) selects the \((\beta_0,\beta_1)\) with the smallest \(S\). These values, \(\hat\beta_0,\hat\beta_1\), are the least squares estimators.

The partial derivative \(\partial S/\partial\beta_0\) is the rate of change of \(S\) in \(\beta_0\), with \(\beta_1\) constant. \(\partial S/\partial\beta_1\) keeps \(\beta_0\) constant.

**How** Added

Calculate \(S\) for a given line

- For each point, calculate the height \(\beta_0+\beta_1x_i\).
- Calculate each distance \(y_i-\beta_0-\beta_1x_i\).
- Square each distance. Add the \(n\) squares to get \(S\).
- The line with the smallest \(S\) is the best by least squares.

**Self-check:** \(S\ge0\). \(S\) has the unit g².

**Example · 6 observations from Slides p.10** Added

Line A: \(\beta_0=1389,\ \beta_1=0\), a horizontal line at \(\bar y=8334/6=1389\).

Line B: \(\beta_0=300,\ \beta_1=0.27\).

Line C: \(\beta_0=100,\ \beta_1=0.32\).

Line A:

Distances: \(1530-1389=141\), \(1297-1389=-92\), \(1335-1389=-54\), \(1282-1389=-107\), \(1590-1389=201\), \(1300-1389=-89\).

Squares: \(19881,\ 8464,\ 2916,\ 11449,\ 40401,\ 7921\).

\(S(1389,0)=19881+8464+2916+11449+40401+7921=91032\).

Line B, height \(300+0.27x_i\):

| \(i\) | \(0.27x_i\) | height | distance | square

| 1 | 1218.24 | 1518.24 | 11.76 | 138.2976

| 2 | 1009.26 | 1309.26 | −12.26 | 150.3076

| 3 | 1150.47 | 1450.47 | −115.47 | 13333.3209

| 4 | 1019.79 | 1319.79 | −37.79 | 1428.0841

| 5 | 1127.79 | 1427.79 | 162.21 | 26312.0841

| 6 | 967.95 | 1267.95 | 32.05 | 1027.2025

\(S(300,0.27)=138.2976+150.3076+13333.3209+1428.0841+26312.0841+1027.2025=42389.2968\).

Line C, height \(100+0.32x_i\):

| \(i\) | \(0.32x_i\) | height | distance | square

| 1 | 1443.84 | 1543.84 | −13.84 | 191.5456

| 2 | 1196.16 | 1296.16 | 0.84 | 0.7056

| 3 | 1363.52 | 1463.52 | −128.52 | 16517.3904

| 4 | 1208.64 | 1308.64 | −26.64 | 709.6896

| 5 | 1336.64 | 1436.64 | 153.36 | 23519.2896

| 6 | 1147.20 | 1247.20 | 52.80 | 2787.8400

\(S(100,0.32)=191.5456+0.7056+16517.3904+709.6896+23519.2896+2787.84=43726.4608\).

Line B has the smallest \(S\) of the three. Section 03.5 finds the smallest \(S\) of all lines.

[figure]
Figure 3-2 (Added) · 236 points, the green line \(y=335.4323+0.2608207x\), and each vertical distance (orange). \(S\) is the sum of the squared orange lengths.

**Why · The partial derivatives are 0 at the minimum** Added

\(S(\beta_0,\beta_1)\) is a smooth polynomial of degree 2 in \(\beta_0\) and \(\beta_1\).

At the minimum, a small change in \(\beta_0\) alone cannot make \(S\) smaller: \(\partial S/\partial\beta_0=0\).

The same is true for \(\beta_1\): \(\partial S/\partial\beta_1=0\).

This gives two equations in two unknowns.

### 03.3 The derivative for \(\beta_0\): solve for \(\hat\beta_0\) Slides p.22–23

**What** Slides p.22–23

Least Squares Estimation · Lecture 2 · p.23 \[\frac{\partial S(\beta_0,\beta_1)}{\partial\beta_0}=\sum_{i=1}^n 2(y_i-\beta_0-\beta_1x_i)(-1),\quad\text{set to 0 and solve:}\] \[0=\sum_{i=1}^n(y_i-\hat\beta_0-\hat\beta_1x_i)\] \[0=\sum_{i=1}^n y_i-n\hat\beta_0-\hat\beta_1\sum_{i=1}^n x_i\] \[\hat\beta_0=\left(\frac1n\sum_{i=1}^n y_i\right)-\hat\beta_1\left(\frac1n\sum_{i=1}^n x_i\right)=\bar y-\hat\beta_1\bar x\]

When you know \(\hat\beta_1\), the two sample means give \(\hat\beta_0\). The same equation, \(\bar y=\hat\beta_0+\hat\beta_1\bar x\), puts \((\bar x,\bar y)\) on the least squares line.

Slides p.22 shows only the first line. Slides p.23 shows the full slide.

**How** Added

Calculate \(\hat\beta_0\) from \(\hat\beta_1\)

- Calculate \(\bar x\) and \(\bar y\).
- Calculate \(\hat\beta_1\bar x\).
- Calculate \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).

**Self-check:** \(\hat\beta_0+\hat\beta_1\bar x=\bar y\).

**Example · 6 observations from Slides p.10** Added

\(\hat\beta_1=0.2739824\) comes from Section 03.4.

Step 1: \(\bar x=24050/6=4008.333\), \(\bar y=8334/6=1389\).

Step 2: \(\hat\beta_1\bar x=0.2739824\times4008.333=1098.213\).

Step 3: \(\hat\beta_0=1389-1098.213=290.787\) g.

Check: \(290.787+1098.213=1389.000=\bar y\).

All 236 observations: Slides p.38 · Lecture 1 p.23

Slides p.38: \(\hat\beta_0=335.4323150\) and \(\hat\beta_1=0.2608207\).

Lecture 1 p.23, rounded: \(\bar x\approx3638\) and \(\bar y\approx1284\).

\(\hat\beta_1\bar x\approx0.2608207\times3638=948.866\).

\(\hat\beta_0+\hat\beta_1\bar x\approx335.432+948.866=1284.298\approx\bar y\). The rounded means cause the small difference.

**Why · Derivation** Slides p.22–23

1

\[S(\beta_0,\beta_1)=\sum_{i=1}^n (y_i-\beta_0-\beta_1x_i)^2\]

2

\[\frac{\partial S(\beta_0,\beta_1)}{\partial\beta_0}=\sum_{i=1}^n \frac{\partial}{\partial\beta_0}(y_i-\beta_0-\beta_1x_i)^2\]

Derivative of a sum is the sum of derivatives.

3

\[=\sum_{i=1}^n 2(y_i-\beta_0-\beta_1x_i)\cdot\frac{\partial}{\partial\beta_0}(y_i-\beta_0-\beta_1x_i)\]

Chain rule: \(u^2\) gives \(2u\) times the derivative of \(u\).

4

\[=\sum_{i=1}^n 2(y_i-\beta_0-\beta_1x_i)(-1)\]

Derivative of \(-\beta_0\) is \(-1\). Slides p.23, line 1.

5

\[0=\sum_{i=1}^n 2(y_i-\hat\beta_0-\hat\beta_1x_i)(-1)\]

Set to 0. Solutions get a hat.

6

\[0=-2\sum_{i=1}^n (y_i-\hat\beta_0-\hat\beta_1x_i)\]

7

\[0=\sum_{i=1}^n (y_i-\hat\beta_0-\hat\beta_1x_i)\]

Slides p.23, line 2.

8

\[0=\sum_{i=1}^n y_i-\sum_{i=1}^n\hat\beta_0-\sum_{i=1}^n\hat\beta_1x_i\]

9

\[0=\sum_{i=1}^n y_i-n\hat\beta_0-\hat\beta_1\sum_{i=1}^n x_i\]

\(n\) copies of \(\hat\beta_0\) add to \(n\hat\beta_0\). Slides p.23, line 3.

10

\[n\hat\beta_0=\sum_{i=1}^n y_i-\hat\beta_1\sum_{i=1}^n x_i\]

11

\[\hat\beta_0=\left(\frac1n\sum_{i=1}^n y_i\right)-\hat\beta_1\left(\frac1n\sum_{i=1}^n x_i\right)\]

12

\[\hat\beta_0=\bar y-\hat\beta_1\bar x\]

Sample mean. Slides p.23, last line. ∎

### 03.4 The derivative for \(\beta_1\): solve for \(\hat\beta_1\) Slides p.24–25

**What** Slides p.24–25

Least Squares Estimation · Lecture 2 · p.25 \[\frac{\partial S(\beta_0,\beta_1)}{\partial\beta_1}=\sum_{i=1}^n 2(y_i-\beta_0-\beta_1x_i)(-x_i),\quad\text{set to 0 and solve:}\] \[0=\sum_{i=1}^n y_ix_i-\hat\beta_0n\bar x-\hat\beta_1\sum_{i=1}^n x_i^2\] \[0=\sum_{i=1}^n y_ix_i-(\bar y-\hat\beta_1\bar x)n\bar x-\hat\beta_1\sum_{i=1}^n x_i^2\] \[0=\sum_{i=1}^n y_ix_i-n\bar y\bar x+\hat\beta_1n\bar x^2-\hat\beta_1\sum_{i=1}^n x_i^2\] \[0=\sum_{i=1}^n y_ix_i-n\bar y\bar x+\hat\beta_1\left(n\bar x^2-\sum_{i=1}^n x_i^2\right)\] \[\hat\beta_1=\frac{\sum_{i=1}^n y_ix_i-n\bar y\bar x}{\sum_{i=1}^n x_i^2-n\bar x^2}\]

Slides p.24 shows only the first line. Slides p.25 shows the full slide.

**How** Added

Calculate \(\hat\beta_1\) with the formula on Slides p.25

- Calculate \(n\), \(\bar x\), and \(\bar y\).
- Calculate \(\sum y_ix_i\).
- Calculate \(\sum x_i^2\).
- Calculate the numerator \(\sum y_ix_i-n\bar y\bar x\).
- Calculate the denominator \(\sum x_i^2-n\bar x^2\).
- Divide the numerator by the denominator.

**Self-check:** The denominator is positive when the \(x_i\) are not all equal. \(\hat\beta_1\) has the unit of \(y\) per unit of \(x\).

**Example · 6 observations from Slides p.10** Added

Step 1: \(n=6\), \(\bar x=24050/6=4008.333\), \(\bar y=8334/6=1389\).

Step 2: \(4512\times1530=6903360\), \(3738\times1297=4848186\), \(4261\times1335=5688435\), \(3777\times1282=4842114\), \(4177\times1590=6641430\), \(3585\times1300=4660500\).

\(\sum y_ix_i=33584025\).

Step 3: \(x_i^2\): \(20358144\), \(13972644\), \(18156121\), \(14265729\), \(17447329\), \(12852225\).

\(\sum x_i^2=97052192\).

Step 4: \(n\bar y\bar x=\bar y\,(n\bar x)=1389\times24050=33405450\). Numerator: \(33584025-33405450=178575\).

Step 5: \(n\bar x^2=(n\bar x)^2/n=24050^2/6=578402500/6=96400416.667\). Denominator: \(97052192-96400416.667=651775.333\).

Step 6: \(\hat\beta_1=178575/651775.333=0.2739824\) g/cm³.

**Why · Derivation** Slides p.24–25

1

\[S(\beta_0,\beta_1)=\sum_{i=1}^n (y_i-\beta_0-\beta_1x_i)^2\]

2

\[\frac{\partial S(\beta_0,\beta_1)}{\partial\beta_1}=\sum_{i=1}^n 2(y_i-\beta_0-\beta_1x_i)\cdot\frac{\partial}{\partial\beta_1}(y_i-\beta_0-\beta_1x_i)\]

Sum rule and chain rule.

3

\[=\sum_{i=1}^n 2(y_i-\beta_0-\beta_1x_i)(-x_i)\]

Derivative of \(-\beta_1x_i\) is \(-x_i\). Slides p.25, line 1.

4

\[0=\sum_{i=1}^n 2(y_i-\hat\beta_0-\hat\beta_1x_i)(-x_i)\]

Set to 0.

5

\[0=\sum_{i=1}^n (y_i-\hat\beta_0-\hat\beta_1x_i)x_i\]

6

\[0=\sum_{i=1}^n (y_ix_i-\hat\beta_0x_i-\hat\beta_1x_i^2)\]

7

\[0=\sum_{i=1}^n y_ix_i-\hat\beta_0\sum_{i=1}^n x_i-\hat\beta_1\sum_{i=1}^n x_i^2\]

8

\[0=\sum_{i=1}^n y_ix_i-\hat\beta_0n\bar x-\hat\beta_1\sum_{i=1}^n x_i^2\]

Substitute \(\sum x_i=n\bar x\). Slides p.25, line 2.

9

\[0=\sum_{i=1}^n y_ix_i-(\bar y-\hat\beta_1\bar x)n\bar x-\hat\beta_1\sum_{i=1}^n x_i^2\]

Substitute \(\hat\beta_0=\bar y-\hat\beta_1\bar x\). Slides p.25, line 3.

10

\[0=\sum_{i=1}^n y_ix_i-n\bar y\bar x+\hat\beta_1n\bar x^2-\hat\beta_1\sum_{i=1}^n x_i^2\]

Slides p.25, line 4.

11

\[0=\sum_{i=1}^n y_ix_i-n\bar y\bar x+\hat\beta_1\left(n\bar x^2-\sum_{i=1}^n x_i^2\right)\]

Slides p.25, line 5.

12

\[\hat\beta_1\left(\sum_{i=1}^n x_i^2-n\bar x^2\right)=\sum_{i=1}^n y_ix_i-n\bar y\bar x\]

13

\[\hat\beta_1=\frac{\sum_{i=1}^n y_ix_i-n\bar y\bar x}{\sum_{i=1}^n x_i^2-n\bar x^2}\]

Slides p.25, last line. ∎

### 03.5 The short form: \(\hat\beta_1^{LS}=S_{xy}/S_{xx}\) Slides p.26

**What** Slides p.26

Continued · Lecture 2 · p.26 \[\hat\beta_1^{LS}=\frac{\sum y_ix_i-\frac1n\sum y_i\sum x_i}{\sum x_i^2-n\bar x^2}=\frac{\sum y_i(x_i-\bar x)}{\sum x_i(x_i-\bar x)}=\frac{\sum(y_i-\bar y)(x_i-\bar x)}{\sum(x_i-\bar x)^2}\] because \(\sum\bar y(x_i-\bar x)=\bar y\sum(x_i-\bar x)=\bar y(\sum x_i-n\bar x)=0\).
So the least squares estimators are: \[\hat\beta_1^{LS}=\frac{S_{xy}}{S_{xx}},\qquad \hat\beta_0^{LS}=\bar y-\hat\beta_1^{LS}\bar x.\]

The superscript \(LS\) marks a least squares estimator. \(\hat\beta_1^{LS}\) is \(\hat\beta_1\) of Section 03.4.

**How** Added

Calculate \(\hat\beta_0^{LS},\hat\beta_1^{LS}\)

- Calculate \(n\), \(\bar x\), and \(\bar y\).
- Calculate each deviation \(x_i-\bar x\) and \(y_i-\bar y\).
- Calculate \(S_{xy}=\sum(y_i-\bar y)(x_i-\bar x)\).
- Calculate \(S_{xx}=\sum(x_i-\bar x)^2\).
- Calculate \(\hat\beta_1^{LS}=S_{xy}/S_{xx}\).
- Calculate \(\hat\beta_0^{LS}=\bar y-\hat\beta_1^{LS}\bar x\).

**Self-check:** Each set of deviations adds to 0. \(S_{xx}>0\). \(\hat\beta_1^{LS}\) has the sign of \(S_{xy}\). \((\bar x,\bar y)\) is on the line.

**Example · 6 observations from Slides p.10** Added

Step 1: \(n=6\), \(\bar x=4008.333\), \(\bar y=1389\).

Step 2: \(x_i-\bar x\): \(503.667,\ -270.333,\ 252.667,\ -231.333,\ 168.667,\ -423.333\). Sum: 0.

\(y_i-\bar y\): \(141,\ -92,\ -54,\ -107,\ 201,\ -89\). Sum: 0.

Step 3: \((y_i-\bar y)(x_i-\bar x)\): \(71017,\ 24870.667,\ -13644,\ 24752.667,\ 33902,\ 37676.667\).

\(S_{xy}=71017+24870.667-13644+24752.667+33902+37676.667=178575\), the numerator of Section 03.4.

Step 4: \((x_i-\bar x)^2\): \(253680.111,\ 73080.111,\ 63840.444,\ 53515.111,\ 28448.444,\ 179211.111\).

\(S_{xx}=651775.333\), the denominator of Section 03.4. The rounded squares add to 651775.332.

Step 5: \(\hat\beta_1^{LS}=178575/651775.333=0.2739824\).

Step 6: \(\hat\beta_0^{LS}=1389-0.2739824\times4008.333=1389-1098.213=290.787\).

Compare with the three lines of Section 03.2. The least squares line is \(y=290.787+0.2739824x\).

Heights \(\hat\beta_0+\hat\beta_1x_i\): \(1526.996,\ 1314.933,\ 1458.226,\ 1325.619,\ 1435.212,\ 1273.014\).

Distances: \(3.004,\ -17.933,\ -123.226,\ -43.619,\ 154.788,\ 26.986\).

Squares: \(9.03,\ 321.61,\ 15184.70,\ 1902.59,\ 23959.42,\ 728.24\).

\(S(290.787,\,0.2739824)=42105.59\). It is smaller than 91032 (Line A), 42389.2968 (Line B), and 43726.4608 (Line C).

All 236 observations: \(\hat\beta_0=335.4323150\) and \(\hat\beta_1=0.2608207\). Slides p.38

[figure]
Figure 3-3 (Added) · 236 points and the least squares line \(\hat y=335.432+0.2608x\) (green). The orange point \((\bar x,\bar y)\), approximately \((3638,\ 1284)\), is on the line.

Meaning (Unit 02): 1 cm³ more head size gives approximately 0.261 g more expected brain weight.

**Why · Derivation** Slides p.26

Numerator:

1

\[\sum y_ix_i-n\bar y\bar x\]

Numerator on Slides p.25.

2

\[=\sum y_ix_i-n\left(\frac1n\sum y_i\right)\left(\frac1n\sum x_i\right)\]

Sample mean.

3

\[=\sum y_ix_i-\frac1n\sum y_i\sum x_i\]

First numerator on Slides p.26.

4

\[=\sum y_ix_i-\bar x\sum y_i\]

\(\frac1n\sum x_i=\bar x\).

5

\[=\sum (y_ix_i-y_i\bar x)\]

6

\[=\sum y_i(x_i-\bar x)\]

Second numerator on Slides p.26.

7

\[=\sum y_i(x_i-\bar x)-\sum\bar y(x_i-\bar x)\]

\(\sum\bar y(x_i-\bar x)=\bar y(\sum x_i-n\bar x)=0\): the "because" line, Slides p.26.

8

\[=\sum (y_i-\bar y)(x_i-\bar x)\]

9

\[=S_{xy}\]

Definition of \(S_{xy}\).

Denominator, with \(x\) in place of \(y\):

1

\[\sum x_i^2-n\bar x^2\]

Denominator on Slides p.25.

2

\[=\sum x_i^2-\bar x\,(n\bar x)\]

3

\[=\sum x_i^2-\bar x\sum x_i\]

Substitute \(n\bar x=\sum x_i\).

4

\[=\sum (x_ix_i-x_i\bar x)\]

5

\[=\sum x_i(x_i-\bar x)\]

Second denominator on Slides p.26.

6

\[=\sum x_i(x_i-\bar x)-\sum\bar x(x_i-\bar x)\]

\(\sum\bar x(x_i-\bar x)=\bar x(\sum x_i-n\bar x)=0\). (Added)

7

\[=\sum (x_i-\bar x)(x_i-\bar x)\]

8

\[=\sum (x_i-\bar x)^2=S_{xx}\]

Definition of \(S_{xx}\).

Together:

1

\[\hat\beta_1^{LS}=\frac{\sum y_ix_i-n\bar y\bar x}{\sum x_i^2-n\bar x^2}\]

Section 03.4.

2

\[=\frac{\sum(y_i-\bar y)(x_i-\bar x)}{\sum(x_i-\bar x)^2}\]

The two chains above.

3

\[=\frac{S_{xy}}{S_{xx}}\]

With Section 03.3: \(\hat\beta_0^{LS}=\bar y-\hat\beta_1^{LS}\bar x\). ∎

### 03.6 The open question: why least squares Slides p.26

Lecture 2 · p.26 But why minimize least squares? Why not some other objective function?

An objective function is the function that we make a minimum or a maximum. Here it is \(S(\beta_0,\beta_1)\).

Unit 04 answers it. With normal errors, maximum likelihood estimation gives the same \(\hat\beta_0,\hat\beta_1\) as least squares.

### 03.7 Practice Added

**Q1.** Data \((x_i,y_i)\): (1, 2), (2, 4), (3, 5), (4, 4), (5, 5). Calculate \(\hat\beta_0^{LS}\) and \(\hat\beta_1^{LS}\) with \(\hat\beta_1^{LS}=S_{xy}/S_{xx}\).

Answer

Step 1: \(n=5\), \(\bar x=15/5=3\), \(\bar y=20/5=4\).

Step 2: \(x_i-\bar x\): \(-2,-1,0,1,2\). \(y_i-\bar y\): \(-2,0,1,0,1\).

Step 3: \(S_{xy}=(-2)(-2)+(-1)(0)+(0)(1)+(1)(0)+(2)(1)=4+0+0+0+2=6\).

Step 4: \(S_{xx}=4+1+0+1+4=10\).

Step 5: \(\hat\beta_1^{LS}=6/10=0.6\).

Step 6: \(\hat\beta_0^{LS}=4-0.6\times3=4-1.8=2.2\).

Check: \(2.2+0.6\times3=4=\bar y\).

**Q2.** For the same data, calculate \(\hat\beta_1\) with \(\hat\beta_1=\dfrac{\sum y_ix_i-n\bar y\bar x}{\sum x_i^2-n\bar x^2}\). Check that it agrees with Q1.

Answer

Step 1: \(\sum y_ix_i=2+8+15+16+25=66\).

Step 2: \(\sum x_i^2=1+4+9+16+25=55\).

Step 3: numerator \(66-5\times4\times3=66-60=6\).

Step 4: denominator \(55-5\times3^2=55-45=10\).

Step 5: \(\hat\beta_1=6/10=0.6\), as in Q1. The numerator is \(S_{xy}\), and the denominator is \(S_{xx}\).

**Q3.** Show that \(\sum_{i=1}^n (x_i-\bar x)=0\). Use it to show that \(\sum_{i=1}^n x_i(x_i-\bar x)=\sum_{i=1}^n (x_i-\bar x)^2\).

Answer

1

\[\sum (x_i-\bar x)=\sum x_i-n\bar x\]

\(n\) copies of \(\bar x\) add to \(n\bar x\).

2

\[=n\bar x-n\bar x=0\]

Substitute \(\sum x_i=n\bar x\).

3

\[\sum (x_i-\bar x)^2=\sum (x_i-\bar x)x_i-\sum (x_i-\bar x)\bar x\]

Split one factor \(x_i-\bar x\).

4

\[=\sum x_i(x_i-\bar x)-\bar x\sum (x_i-\bar x)\]

5

\[=\sum x_i(x_i-\bar x)-\bar x\cdot0=\sum x_i(x_i-\bar x)\]

Line 2. ∎

This identity makes the two denominators on Slides p.26 equal.

## 04 · Maximum likelihood estimation and its equality to least squares

Plan · Slides p.27–29

Slides p.27: write the likelihood \(L\). Take the log to get \(\ell\).

Slides p.28: differentiate \(\ell\) for \(\beta_0\), \(\beta_1\), \(\sigma^2\): (⋆), (⋆⋆), and a third equation.

Slides p.29: (⋆) = 0 and (⋆⋆) = 0 is the same as "minimize the sum of squares": \(\hat\beta^{LS}=\hat\beta^{ML}\).

Start point (results of Units 02–03) · Added

Model: \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), with \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\). Same as \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\).

Least squares (LS) minimizes \(S(\beta_0,\beta_1)=\sum_{i=1}^n(y_i-\beta_0-\beta_1x_i)^2\). Result: \(\hat\beta_1^{LS}=S_{xy}/S_{xx}\) and \(\hat\beta_0^{LS}=\bar y-\hat\beta_1^{LS}\bar x\) (Slides p.26).

Brainhead: \((x_1,y_1)=(4512,1530)\) and \((x_2,y_2)=(3738,1297)\) (Slides p.10). Slides p.38: \(\hat\beta_0=335.4323150\), \(\hat\beta_1=0.2608207\), fitted values 1512.255 and 1310.380 for observations 1 and 2.

Small data set (Added): \((x_i,y_i)\) = (1, 2), (2, 3), (3, 5), (4, 6), \(n=4\).

### 04.1 Likelihood and log-likelihood Slides p.27

**What** Slides p.27

Maximum Likelihood Estimation · Lecture 2 · p.27 Recall: \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\)
We can write the likelihood: \[L(\beta_0,\beta_1,\sigma^2|y)=\prod_{i=1}^n\frac{1}{\sqrt{2\pi\sigma^2}}\exp\left(-\frac{(y_i-[\beta_0+\beta_1x_i])^2}{2\sigma^2}\right)=(2\pi\sigma^2)^{-n/2}\exp\left(-\sum_{i=1}^n\frac{(y_i-[\beta_0+\beta_1x_i])^2}{2\sigma^2}\right)\] It's more convenient to work with the log-likelihood: \[\ell(\beta_0,\beta_1,\sigma^2|y)=-\frac n2\log(2\pi)-\frac n2\log(\sigma^2)-\frac{1}{2\sigma^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2\]

Normal density: the PDF of \(N(\mu,\sigma^2)\), \(f(y)=\dfrac{1}{\sqrt{2\pi\sigma^2}}\exp\left(-\dfrac{(y-\mu)^2}{2\sigma^2}\right)\). It is largest at \(y=\mu\).

\(\exp(a)=e^a\), with \(e\approx2.718\). \(\log\) is the natural log (base \(e\)).

\(\prod_{i=1}^n a_i=a_1\times a_2\times\cdots\times a_n\) is a product.

The likelihood \(L(\beta_0,\beta_1,\sigma^2|y)\) is the joint density of the data, as a function of the parameters. "\(|y\)": the data \(y=(y_1,\dots,y_n)\) are fixed.

The log-likelihood is \(\ell=\log L\).

Maximum likelihood estimation (MLE) uses the parameter values that make \(L\) largest: \(\hat\beta_0^{ML},\hat\beta_1^{ML}\).

The \(y_i\) are independent. Their joint density is the product of the single densities. The log is increasing: \(L\) and \(\ell\) have their maximum at the same point. The log changes the product into a sum, which is easier to differentiate.

**How** Added

Write \(\ell\) and calculate its value

- **Write one density.** Replace \(\mu\) with \(\beta_0+\beta_1x_i\) in the normal density.
- **Multiply to get \(L\).** The \(y_i\) are independent.
- **Take the log to get \(\ell\).** It has three terms: \(-\frac n2\log(2\pi)\), \(-\frac n2\log(\sigma^2)\), and \(-\frac{1}{2\sigma^2}\sum(y_i-[\beta_0+\beta_1x_i])^2\).
- **Find each difference** \(y_i-[\beta_0+\beta_1x_i]\).
- **Square the differences and add them.**
- **Calculate the three terms** with \(n\), \(\sigma^2\), and the sum of squares.
- **Add the three terms.Self-check:** ① The first term uses only \(n\). ② The second uses only \(n\) and \(\sigma^2\). ③ The third term is always \(\le0\). ④ One observation contributes the log of its density.

**Example 1 · Density of one brainhead observation** Added

Observation 1, with \(\beta_0=335.4323150\), \(\beta_1=0.2608207\) (Slides p.38) and \(\sigma^2=5000\).

The value 5000 is only for this example. Unit 06 estimates \(\sigma^2\).

1

Mean of observation 1 How step 1

\[x_1=4512,\quad y_1=1530\]

\[\beta_0+\beta_1x_1=335.4323150+0.2608207\times4512=335.4323150+1176.8230=1512.255\]

\[y_1-[\beta_0+\beta_1x_1]=1530-1512.255=17.745\]

Slides p.10: \(x_1,y_1\). Slides p.38: 1512.255.

2

Constant in front of the exponential How step 1

\[\frac{1}{\sqrt{2\pi\sigma^2}}=\frac{1}{\sqrt{2\pi\times5000}}=\frac{1}{\sqrt{31415.93}}=\frac{1}{177.2454}=0.005641896\]

3

Exponential part How step 1

\[\frac{(17.745)^2}{2\times5000}=\frac{314.8850}{10000}=0.03148850\]

\[\exp(-0.03148850)=0.9690021\]

4

Density How step 1

\[f(y_1)=0.005641896\times0.9690021=0.005467009\]

5

Contribution to \(\ell\) How steps 6–7

\[-\frac12\log(2\pi)-\frac12\log(5000)-0.03148850\]

\[=-0.9189385-4.2585966-0.0314885=-5.2090236\]

Check: \(\log(0.005467009)=-5.209024\) (self-check ④). ▲

\(L\) multiplies \(n\) densities such as 0.005467 and becomes very small for large \(n\). \(\ell\) adds terms such as \(-5.21\).

**Example 2 · \(\ell\) for the small data set** Added

\(\beta_0=0.5\), \(\beta_1=1.4\), \(\sigma^2=1\). These are the LS estimates (Example 3, Section 04.3).

1

Line heights How step 4

\[0.5+1.4\times1=1.9,\quad0.5+1.4\times2=3.3,\quad0.5+1.4\times3=4.7,\quad0.5+1.4\times4=6.1\]

2

Differences \(y_i-[\beta_0+\beta_1x_i]\) How step 4

\[2-1.9=0.1,\quad3-3.3=-0.3,\quad5-4.7=0.3,\quad6-6.1=-0.1\]

3

Sum of squares How step 5

\[0.1^2+(-0.3)^2+0.3^2+(-0.1)^2=0.01+0.09+0.09+0.01=0.2\]

4

Three terms How step 6

\[-\frac42\log(2\pi)=-2\times1.837877=-3.675754\]

\[-\frac42\log(1)=-2\times0=0\]

\[-\frac{1}{2\times1}\times0.2=-0.1\]

5

Add How step 7

\[\ell(0.5,\,1.4,\,1\,|\,y)=-3.675754+0-0.1=-3.775754\]

▲

**Why · From \(L\) to \(\ell\)** Slides p.27

1

\[L=\prod_{i=1}^n\frac{1}{\sqrt{2\pi\sigma^2}}\exp\left(-\frac{(y_i-[\beta_0+\beta_1x_i])^2}{2\sigma^2}\right)\]

**Independence:** joint density = product of the densities.

2

\[=\left(\prod_{i=1}^n\frac{1}{\sqrt{2\pi\sigma^2}}\right)\left(\prod_{i=1}^n\exp\left(-\frac{(y_i-[\beta_0+\beta_1x_i])^2}{2\sigma^2}\right)\right)\]

3

\[=\left(\frac{1}{\sqrt{2\pi\sigma^2}}\right)^n\prod_{i=1}^n\exp\left(-\frac{(y_i-[\beta_0+\beta_1x_i])^2}{2\sigma^2}\right)\]

4

\[=(2\pi\sigma^2)^{-n/2}\prod_{i=1}^n\exp\left(-\frac{(y_i-[\beta_0+\beta_1x_i])^2}{2\sigma^2}\right)\]

**Exponent rules:** \(1/\sqrt{a}=a^{-1/2}\) and \((a^{-1/2})^n=a^{-n/2}\).

5

\[=(2\pi\sigma^2)^{-n/2}\exp\left(-\sum_{i=1}^n\frac{(y_i-[\beta_0+\beta_1x_i])^2}{2\sigma^2}\right)\]

**Exponent rule:** \(e^{a_1}e^{a_2}\cdots e^{a_n}=e^{a_1+\cdots+a_n}\). Second form on the slide.

6

\[\ell=\log L=\log\left[(2\pi\sigma^2)^{-n/2}\right]+\log\left[\exp\left(-\sum_{i=1}^n\frac{(y_i-[\beta_0+\beta_1x_i])^2}{2\sigma^2}\right)\right]\]

**Log rule:** \(\log(ab)=\log a+\log b\).

7

\[=-\frac n2\log(2\pi\sigma^2)-\sum_{i=1}^n\frac{(y_i-[\beta_0+\beta_1x_i])^2}{2\sigma^2}\]

**Log rules:** \(\log(a^k)=k\log a\) and \(\log(e^b)=b\).

8

\[=-\frac n2\left[\log(2\pi)+\log(\sigma^2)\right]-\sum_{i=1}^n\frac{(y_i-[\beta_0+\beta_1x_i])^2}{2\sigma^2}\]

**Log rule:** \(\log(ab)=\log a+\log b\).

9

\[=-\frac n2\log(2\pi)-\frac n2\log(\sigma^2)-\sum_{i=1}^n\frac{(y_i-[\beta_0+\beta_1x_i])^2}{2\sigma^2}\]

10

\[=-\frac n2\log(2\pi)-\frac n2\log(\sigma^2)-\frac{1}{2\sigma^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2\]

\(\frac{1}{2\sigma^2}\) moves out of the sum. Slides p.27. ∎

Only the third term contains \(\beta_0\) and \(\beta_1\). It is \(-\frac{1}{2\sigma^2}\) times the sum of squares.

### 04.2 The three partial derivatives of \(\ell\) Slides p.28

**What** Slides p.28

Maximum Likelihood Estimation · Lecture 2 · p.28 \[\max\left[-\frac n2\log(2\pi)-\frac n2\log(\sigma^2)-\frac{1}{2\sigma^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2\right]\] \[\frac{\partial\ell}{\partial\beta_0}=\frac{1}{\sigma^2}\left(\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])\right)\qquad(\star)\] \[\frac{\partial\ell}{\partial\beta_1}=\frac{1}{\sigma^2}\left(\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])x_i\right)\qquad(\star\star)\] \[\frac{\partial\ell}{\partial\sigma^2}=-\frac{n}{2\sigma^2}+\frac{1}{2(\sigma^2)^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2\] Setting \((\star)\) and \((\star\star)\) to 0 and solving

\(\partial\ell/\partial\beta_0\) keeps \(\beta_1\) and \(\sigma^2\) constant.

\(\partial\ell/\partial\sigma^2\) treats \(\sigma^2\) as one variable, not \(\sigma\).

"max": find the parameter values that make the bracket largest. There, all partial derivatives are 0.

This unit uses only (⋆) and (⋆⋆). Unit 06 solves the third equation for \(\sigma^2\) (Slides p.34).

**How** Added

Calculate (⋆) and (⋆⋆) at given parameters

- Calculate each difference \(y_i-[\beta_0+\beta_1x_i]\).
- (⋆): add the differences. Divide by \(\sigma^2\).
- (⋆⋆): multiply each difference by its \(x_i\). Add. Divide by \(\sigma^2\).
- If both are 0, the point is a stationary point of \(\ell\). A stationary point is a point where the partial derivatives are 0.

**Self-check:** \(\sigma^2>0\). Only the sum in the bracket decides if (⋆) = 0.

**Example · (⋆) and (⋆⋆) for the small data set** Added

\(\sigma^2=1\). Line A: \(\beta_0=0.5,\ \beta_1=1.2\). Line B: \(\beta_0=0.5,\ \beta_1=1.4\).

1

Line A: differences How step 1

\[0.5+1.2\times1=1.7,\quad0.5+1.2\times2=2.9,\quad0.5+1.2\times3=4.1,\quad0.5+1.2\times4=5.3\]

\[2-1.7=0.3,\quad3-2.9=0.1,\quad5-4.1=0.9,\quad6-5.3=0.7\]

2

Line A: (⋆) and (⋆⋆) How steps 2–3

\[(\star)=\frac{0.3+0.1+0.9+0.7}{1}=2\]

\[(\star\star)=\frac{0.3\times1+0.1\times2+0.9\times3+0.7\times4}{1}=\frac{0.3+0.2+2.7+2.8}{1}=6\]

Not 0: line A is not the maximum.

3

Line B: differences How step 1

\[0.1,\quad-0.3,\quad0.3,\quad-0.1\]

Example 2, step 2.

4

Line B: (⋆) and (⋆⋆) How steps 2–4

\[(\star)=\frac{0.1-0.3+0.3-0.1}{1}=0\]

\[(\star\star)=\frac{0.1\times1-0.3\times2+0.3\times3-0.1\times4}{1}=\frac{0.1-0.6+0.9-0.4}{1}=0\]

Both 0: line B is a stationary point. ▲

**Why · Derivation of the three partial derivatives** Slides p.28

Chain rule: \(\frac{d}{du}g(h(u))=g'(h(u))\,h'(u)\).

(a) For \(\beta_0\):

1

\[\frac{\partial\ell}{\partial\beta_0}=\frac{\partial}{\partial\beta_0}\left[-\frac n2\log(2\pi)\right]+\frac{\partial}{\partial\beta_0}\left[-\frac n2\log(\sigma^2)\right]+\frac{\partial}{\partial\beta_0}\left[-\frac{1}{2\sigma^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2\right]\]

2

\[=0+0-\frac{1}{2\sigma^2}\sum_{i=1}^n\frac{\partial}{\partial\beta_0}(y_i-[\beta_0+\beta_1x_i])^2\]

The first two terms do not contain \(\beta_0\).

3

\[=-\frac{1}{2\sigma^2}\sum_{i=1}^n2(y_i-[\beta_0+\beta_1x_i])(-1)\]

**Chain rule:** the derivative of \(u^2\) is \(2u\). The derivative of \(y_i-\beta_0-\beta_1x_i\) for \(\beta_0\) is \(-1\).

4

\[=\frac{2}{2\sigma^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])\]

5

\[=\frac{1}{\sigma^2}\left(\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])\right)\qquad(\star)\]

∎

(b) For \(\beta_1\):

1

\[\frac{\partial\ell}{\partial\beta_1}=0+0-\frac{1}{2\sigma^2}\sum_{i=1}^n\frac{\partial}{\partial\beta_1}(y_i-[\beta_0+\beta_1x_i])^2\]

The first two terms do not contain \(\beta_1\).

2

\[=-\frac{1}{2\sigma^2}\sum_{i=1}^n2(y_i-[\beta_0+\beta_1x_i])(-x_i)\]

**Chain rule:** the derivative of \(y_i-\beta_0-\beta_1x_i\) for \(\beta_1\) is \(-x_i\).

3

\[=\frac{2}{2\sigma^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])x_i\]

4

\[=\frac{1}{\sigma^2}\left(\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])x_i\right)\qquad(\star\star)\]

∎

(c) For \(\sigma^2\), as one variable. Only the second and third terms contain \(\sigma^2\).

1

\[\frac{\partial\ell}{\partial\sigma^2}=0-\frac n2\cdot\frac{1}{\sigma^2}-\frac{\partial}{\partial\sigma^2}\left(\frac{1}{2\sigma^2}\right)\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2\]

**Derivative rule:** the derivative of \(\log(\sigma^2)\) for \(\sigma^2\) is \(\frac{1}{\sigma^2}\). The sum is a constant factor.

2

\[=-\frac{n}{2\sigma^2}-\left(-\frac{1}{2(\sigma^2)^2}\right)\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2\]

**Derivative rule:** the derivative of \(\frac{1}{2\sigma^2}\) for \(\sigma^2\) is \(-\frac{1}{2(\sigma^2)^2}\).

3

\[\frac{\partial\ell}{\partial\sigma^2}=-\frac{n}{2\sigma^2}+\frac{1}{2(\sigma^2)^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2\]

Slides p.28, third line. Unit 06 sets it to 0. ∎

(⋆) and (⋆⋆) both start with the positive constant \(1/\sigma^2\).

### 04.3 MLE and LS give the same estimates (\(\hat\beta^{LS}=\hat\beta^{ML}\)) Slides p.29

**What** Slides p.29

Maximum Likelihood Estimation · Lecture 2 · p.29 Setting \((\star)\) and \((\star\star)\) to 0 and solving is equivalent to minimizing the sum of squares!
• That is \(\hat\beta_0^{LS}=\hat\beta_0^{ML}\) and \(\hat\beta_1^{LS}=\hat\beta_1^{ML}\)
• Here on out we will call the LS/MLE estimators \(\hat\beta\).

Equivalent: the two problems have the same solution.

\(\hat\beta\): from here, \(\hat\beta_0\) and \(\hat\beta_1\) are both the LS estimators and the MLE.

In \(\ell\), \(\beta_0\) and \(\beta_1\) occur only in \(-\frac{1}{2\sigma^2}S(\beta_0,\beta_1)\). This factor is negative. A smaller \(S\) gives a larger \(\ell\).

This answers Slides p.26: in the normal model, least squares gives the MLE.

**How** Added

Find the MLE of \(\beta_0\) and \(\beta_1\)

- **Check the model:** \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\).
- Calculate \(\bar x\), \(\bar y\), \(S_{xx}\), and \(S_{xy}\).
- Calculate \(\hat\beta_1=S_{xy}/S_{xx}\).
- Calculate \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).
- These are the MLE: \(\hat\beta_0^{ML}=\hat\beta_0^{LS}\) and \(\hat\beta_1^{ML}=\hat\beta_1^{LS}\).

**Self-check:** ① \(\sum(y_i-[\hat\beta_0+\hat\beta_1x_i])=0\): (⋆) = 0. ② \(\sum(y_i-[\hat\beta_0+\hat\beta_1x_i])x_i=0\): (⋆⋆) = 0. ③ \(\ell\) at \(\hat\beta\) is larger than at another line, for each \(\sigma^2\).

**Example 3 · MLE for the small data set** Added

1

Check the model How step 1

Use \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\).

2

Means How step 2

\[\bar x=\frac{1+2+3+4}{4}=\frac{10}{4}=2.5,\qquad\bar y=\frac{2+3+5+6}{4}=\frac{16}{4}=4\]

3

\(S_{xx}\) and \(S_{xy}\) How step 2

\[x_i-\bar x:\ -1.5,\ -0.5,\ 0.5,\ 1.5\qquad y_i-\bar y:\ -2,\ -1,\ 1,\ 2\]

\[S_{xx}=(-1.5)^2+(-0.5)^2+0.5^2+1.5^2=2.25+0.25+0.25+2.25=5\]

\[S_{xy}=(-1.5)(-2)+(-0.5)(-1)+(0.5)(1)+(1.5)(2)=3+0.5+0.5+3=7\]

4

Estimates How steps 3–5

\[\hat\beta_1=\frac{S_{xy}}{S_{xx}}=\frac75=1.4\]

\[\hat\beta_0=\bar y-\hat\beta_1\bar x=4-1.4\times2.5=4-3.5=0.5\]

\[\hat\beta_0^{ML}=\hat\beta_0^{LS}=0.5,\qquad\hat\beta_1^{ML}=\hat\beta_1^{LS}=1.4\]

5

Self-checks ① and ② Section 04.2 example, step 4

Section 04.2: (⋆) = 0 and (⋆⋆) = 0 at \((0.5,1.4)\).

6

Self-check ③ with \(\sigma^2=1\) How steps 4–7 of Section 04.1

\[S(0.5,1.4)=0.2\quad\Rightarrow\quad\ell=-3.675754-0-\frac{0.2}{2}=-3.775754\]

\[S(0.5,1.2)=0.3^2+0.1^2+0.9^2+0.7^2=0.09+0.01+0.81+0.49=1.4\]

\[\ell(0.5,1.2,1\,|\,y)=-3.675754-0-\frac{1.4}{2}=-4.375754\]

\(-3.775754>-4.375754\): the LS line has the larger \(\ell\). ▲

[figure]
Figure 4-1 (Added) · Small data set, \(\beta_0\) fixed at \(\hat\beta_0=0.5\). Top (blue): \(S\), minimum \(S=0.2\) at \(\hat\beta_1=1.4\). Bottom (green): \(\ell\) with \(\sigma^2=1\), maximum \(\ell=-3.775754\) at the same \(\hat\beta_1=1.4\). Purple: line A (\(\beta_1=1.2\)), \(S=1.4\), \(\ell=-4.375754\).

The bottom curve is the top curve times \(-\frac12\), plus a constant.

**Why · (⋆) = 0 and (⋆⋆) = 0 are the same as "minimize \(S\)"** Slides p.29

(a) Objective functions:

1

\[\ell(\beta_0,\beta_1,\sigma^2|y)=-\frac n2\log(2\pi)-\frac n2\log(\sigma^2)-\frac{1}{2\sigma^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2\]

Slides p.27.

2

\[=-\frac n2\log(2\pi)-\frac n2\log(\sigma^2)-\frac{1}{2\sigma^2}S(\beta_0,\beta_1)\]

**Substitute** \(S(\beta_0,\beta_1)=\sum_{i=1}^n(y_i-\beta_0-\beta_1x_i)^2\) (Slides p.21).

3

\[=c-k\,S(\beta_0,\beta_1),\qquad c=-\frac n2\log(2\pi)-\frac n2\log(\sigma^2),\quad k=\frac{1}{2\sigma^2}>0\]

\(k>0\): the minimum of \(S\) is the maximum of \(\ell\). ∎

(b) Equations (Slides p.23, p.25):

1

\[\frac{\partial S}{\partial\beta_0}=\sum_{i=1}^n2(y_i-\beta_0-\beta_1x_i)(-1)=-2\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])\]

Slides p.23.

2

\[(\star)=\frac{1}{\sigma^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])=-\frac{1}{2\sigma^2}\cdot\frac{\partial S}{\partial\beta_0}\]

**Substitute** step 1: \(\sum(y_i-[\beta_0+\beta_1x_i])=-\frac12\,\partial S/\partial\beta_0\).

3

\[\frac{\partial S}{\partial\beta_1}=\sum_{i=1}^n2(y_i-\beta_0-\beta_1x_i)(-x_i)=-2\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])x_i\]

Slides p.25.

4

\[(\star\star)=\frac{1}{\sigma^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])x_i=-\frac{1}{2\sigma^2}\cdot\frac{\partial S}{\partial\beta_1}\]

**Substitute** step 3.

5

\[(\star)=0\iff\frac{\partial S}{\partial\beta_0}=0,\qquad(\star\star)=0\iff\frac{\partial S}{\partial\beta_1}=0\]

\(-\frac{1}{2\sigma^2}\neq0\). Same solution: \(\hat\beta_0^{ML}=\bar y-\hat\beta_1\bar x=\hat\beta_0^{LS}\), \(\hat\beta_1^{ML}=S_{xy}/S_{xx}=\hat\beta_1^{LS}\). ∎

### 04.4 Practice Added

**Q1.** Brainhead observation 2 has \(x_2=3738\) and \(y_2=1297\) (Slides p.10). Its fitted value is 1310.380 (Slides p.38). Use \(\sigma^2=5000\). Calculate (a) the normal density of \(y_2\), and (b) its contribution to \(\ell\).

Answer

(a) Fitted value: \(335.4323150+0.2608207\times3738=335.4323150+974.9478=1310.380\). Difference: \(1297-1310.380=-13.380\). Square: \((-13.380)^2=179.0244\).

Exponent: \(179.0244/(2\times5000)=0.01790244\). \(\exp(-0.01790244)=0.9822569\).

Constant: \(1/\sqrt{2\pi\times5000}=0.005641896\) (Example 1, step 2).

Density: \(0.005641896\times0.9822569=0.005541791\).

(b) Contribution: \(-\frac12\log(2\pi)-\frac12\log(\sigma^2)-\frac{(y_2-[\beta_0+\beta_1x_2])^2}{2\sigma^2}\):

\[-0.9189385-4.2585966-0.0179024=-5.1954375\]

Check: \(\log(0.005541791)=-5.195438\).

**Q2.** Start from \((\star)\). Show that \(\partial\ell/\partial\beta_0=0\) gives \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).

Answer

1

\[0=\frac{1}{\sigma^2}\left(\sum_{i=1}^n(y_i-[\hat\beta_0+\hat\beta_1x_i])\right)\]

Set (⋆) = 0.

2

\[0=\sum_{i=1}^n(y_i-\hat\beta_0-\hat\beta_1x_i)\]

\(\sigma^2>0\).

3

\[0=\sum_{i=1}^ny_i-n\hat\beta_0-\hat\beta_1\sum_{i=1}^nx_i\]

4

\[n\hat\beta_0=\sum_{i=1}^ny_i-\hat\beta_1\sum_{i=1}^nx_i\]

5

\[\hat\beta_0=\frac1n\sum_{i=1}^ny_i-\hat\beta_1\frac1n\sum_{i=1}^nx_i=\bar y-\hat\beta_1\bar x\]

The LS result on Slides p.23. ∎

**Q3.** True or false: under \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\), the maximum likelihood estimates of \(\beta_0\) and \(\beta_1\) depend on \(\sigma^2\). Use the log-likelihood to justify your answer.

Answer

False.

\(\ell=-\frac n2\log(2\pi)-\frac n2\log(\sigma^2)-\frac{1}{2\sigma^2}S(\beta_0,\beta_1)\). For each fixed \(\sigma^2>0\), the first two terms do not contain \(\beta_0,\beta_1\), and \(-\frac{1}{2\sigma^2}\) is negative. The \(\beta_0,\beta_1\) that make \(\ell\) largest always make \(S\) smallest.

Small data set with \(\sigma^2=2\): \(-\frac42\log(2)=-2\times0.693147=-1.386294\).

At \((0.5,1.4)\): \(\ell=-3.675754-1.386294-\frac{0.2}{4}=-5.112048\).

At \((0.5,1.2)\): \(\ell=-3.675754-1.386294-\frac{1.4}{4}=-5.412048\).

The least squares line \((0.5,1.4)\) again has the larger \(\ell\).

## 05 · Fitted values and residuals

Plan · Slides p.30–32

Slides p.30: section page.

Slides p.31: fitted values \(\hat y_i\), residuals \(e_i\), errors \(\epsilon_i\).

Slides p.32: data, fitted line, and residuals in one figure.

Data for this unit · Added

Small data set: \(x=(1,2,3,4,5)\), \(y=(2,4,5,4,5)\), \(n=5\). Unit 03, Practice Q1: \(\hat\beta_0=2.2\), \(\hat\beta_1=0.6\).

Brainhead (236 observations), Slides p.38: \(\hat\beta_0=335.4323150\), \(\hat\beta_1=0.2608207\). Slides p.10: the first six pairs \((x_i,y_i)\).

### 05.1 Section page Slides p.30

Slides p.30: section page "Fitted Values & Residuals" (Slides p.31–32).

### 05.2 Fitted values Slides p.31

**What** Slides p.31

Fitted Values and Residuals · Lecture 2 · p.31 Define the fitted values: \[\hat y_i=\hat\beta_0+\hat\beta_1x_i\]

The fitted line \(\hat\beta_0+\hat\beta_1x\) is the least squares line.

The fitted value \(\hat y_i\) ("y hat i") is the height of the fitted line at \(x_i\).

**How** Added

Calculate the fitted value \(\hat y_i\)

- Calculate \(\hat\beta_0\) and \(\hat\beta_1\).
- Take \(x_i\). Do not use \(y_i\).
- Calculate \(\hat\beta_0+\hat\beta_1x_i\).

**Self-check:** \(\hat y_i\) has the unit of \(y\). \((x_i,\hat y_i)\) is on the fitted line.

**Example 1 · The small data set** Added

1

\(\hat\beta_0=2.2,\quad \hat\beta_1=0.6\)

Unit 03, Practice Q1

2

\(\hat\beta_1x_i:\ 0.6(1),\ 0.6(2),\ 0.6(3),\ 0.6(4),\ 0.6(5)=0.6,\ 1.2,\ 1.8,\ 2.4,\ 3.0\)

3

\(\hat y_i:\ 2.2+0.6,\ 2.2+1.2,\ 2.2+1.8,\ 2.2+2.4,\ 2.2+3.0\)

4

\(\hat y_i:\ 2.8,\ 3.4,\ 4.0,\ 4.6,\ 5.2\)

**Example 2 · Observation 4 of the brainhead data** Added

Slides p.10: \((x_4,y_4)=(3777,1282)\).

1

\(\hat\beta_0=335.4323150,\quad \hat\beta_1=0.2608207\)

Slides p.38

2

\(\hat\beta_1x_4=0.2608207\times3777=985.1198\)

3

\(\hat y_4=335.4323150+985.1198\)

4

\(\hat y_4=1320.5521\)

Check: \(\hat y_4=1320.552\) g is the fourth fitted value on Slides p.38.

**Why** Added

1

\(E[y_i|x_i]=\beta_0+\beta_1x_i\)

Section 02.5; \(E[\epsilon_i]=0\)

2

\(\hat\beta_0+\hat\beta_1x_i\)

replace \(\beta_0,\beta_1\) with the estimates

3

\(=\hat y_i\)

definition, Slides p.31

\(\hat y_i\) estimates the mean \(E[y_i|x_i]\).

### 05.3 Residuals Slides p.31

**What** Slides p.31

Fitted Values and Residuals · Lecture 2 · p.31 Define the residuals: \[e_i=y_i-\hat y_i=y_i-(\hat\beta_0+\hat\beta_1x_i)\]

The residual \(e_i\) is the signed vertical distance from point \(i\) to the fitted line.

\(e_i>0\): the point is above the line. \(e_i<0\): the point is below the line.

**How** Added

Calculate the residual \(e_i\)

- Calculate \(\hat y_i\).
- Calculate \(e_i=y_i-\hat y_i\).
- Read the sign: plus is above the line, minus is below.

**Self-check:** \(\hat y_i+e_i=y_i\).

**Example 1 · The small data set** Added

1

\(e_i:\ 2-2.8,\ 4-3.4,\ 5-4.0,\ 4-4.6,\ 5-5.2\)

2

\(e_i:\ -0.8,\ 0.6,\ 1.0,\ -0.6,\ -0.2\)

Check: \(2.8+(-0.8)=2\), \(3.4+0.6=4\), \(4.0+1.0=5\), \(4.6+(-0.6)=4\), \(5.2+(-0.2)=5\).

Points 2 and 3 are above the fitted line. Points 1, 4, and 5 are below it.

**Example 2 · Observations 4 and 5 of the brainhead data** Added

1

\(e_4=y_4-\hat y_4=1282-1320.552\)

\(\hat y_4\) from Section 05.2, Example 2

2

\(e_4=-38.552\)

3

\(e_5=y_5-\hat y_5=1590-1424.880\)

\(y_5\): Slides p.10; \(\hat y_5\): Slides p.38

4

\(e_5=165.120\)

Person 4: 38.552 g below the fitted line.

Person 5: 165.120 g above the fitted line.

[figure]
Figure 5-1 (Added) · Purple: \((x_5,y_5)=(4177,1590)\). Blue line: the fitted line. Open blue point: \(\hat y_5=1424.880\) at \(x_5=4177\). Orange: \(e_5=165.120\), positive.

**Why** Added

1

\(S(\beta_0,\beta_1)=\sum_{i=1}^n(y_i-\beta_0-\beta_1x_i)^2\)

Slides p.21

2

\(S(\hat\beta_0,\hat\beta_1)=\sum_{i=1}^n(y_i-\hat\beta_0-\hat\beta_1x_i)^2\)

substitute the estimates

3

\(=\sum_{i=1}^n\big(y_i-(\hat\beta_0+\hat\beta_1x_i)\big)^2\)

4

\(=\sum_{i=1}^n(y_i-\hat y_i)^2\)

definition of \(\hat y_i\)

5

\(=\sum_{i=1}^n e_i^2\)

definition of \(e_i\)

The least squares line has the smallest sum of squared residuals \(\sum e_i^2\).

### 05.4 Residuals and errors Slides p.31

**What** Slides p.31

Fitted Values and Residuals · Lecture 2 · p.31 Note the residuals \(e_i\) are different from the errors: \(\epsilon_i=y_i-(\beta_0+\beta_1x_i)\)

The error \(\epsilon_i\) subtracts the true line \(\beta_0+\beta_1x_i\). We cannot observe it (Slides p.13).

The residual \(e_i\) subtracts the fitted line. It uses only data and estimates: we can calculate it.

We use \(e_i\) in place of \(\epsilon_i\).

**How** Added

Identify a residual or an error

- Look at the coefficients of the subtracted line.
- Hats (\(\hat\beta_0,\hat\beta_1\)): a residual \(e_i\).
- No hats (\(\beta_0,\beta_1\)): an error \(\epsilon_i\).
- For a number, calculate \(e_i\). \(\beta_0,\beta_1\) are unknown.

**Self-check:** A quantity with a numeric value is a residual.

**Example · Observation 4 of the brainhead data** Added

\((x_4,y_4)=(3777,1282)\), Slides p.10.

1

\(e_4=1282-(\hat\beta_0+\hat\beta_1\times3777)\)

How step 2: hats

2

\(e_4=1282-1320.552\)

Section 05.2, Example 2

3

\(e_4=-38.552\)

1

\(\epsilon_4=1282-(\beta_0+\beta_1\times3777)\)

How step 3: \(\beta_0,\beta_1\) unknown; the chain stops

**Why** Added

1

\(\epsilon_i-e_i=\big[y_i-(\beta_0+\beta_1x_i)\big]-\big[y_i-(\hat\beta_0+\hat\beta_1x_i)\big]\)

the two definitions, Slides p.31

2

\(=y_i-\beta_0-\beta_1x_i-y_i+\hat\beta_0+\hat\beta_1x_i\)

3

\(=-\beta_0-\beta_1x_i+\hat\beta_0+\hat\beta_1x_i\)

4

\(=(\hat\beta_0-\beta_0)+(\hat\beta_1-\beta_1)x_i\)

The difference comes only from \(\hat\beta_0-\beta_0\) and \(\hat\beta_1-\beta_1\). Both are unknown.

### 05.5 A picture of the fitted values and residuals Slides p.32

Slides p.32 has only the title "Fitted Values and Residuals". Figure 5-2 is Added.

Gray points: observations 7 to 236.

Purple points 1–6: the six observations of Slides p.10.

Blue line: \(\hat\beta_0+\hat\beta_1x=335.4323150+0.2608207x\) (Slides p.38).

Open blue points: the fitted values \((x_i,\hat y_i)\).

Orange segments: the residuals \(e_i\), from \(\hat y_i\) to \(y_i\).

[figure]
Figure 5-2 (Added) · Points 1, 5, and 6 are above the line: \(e_1,e_5,e_6\) are positive. Points 2, 3, and 4 are below: \(e_2,e_3,e_4\) are negative.

The fitted line makes \(\sum_{i=1}^{236}e_i^2\) as small as possible.

### 05.6 Practice Added

**Q1.** Use \(\hat\beta_0=335.4323150\) and \(\hat\beta_1=0.2608207\) (Slides p.38). Observation 6 has \(x_6=3585\) and \(y_6=1300\) (Slides p.10). Calculate \(\hat y_6\) and \(e_6\). Is point 6 above or below the fitted line?

Answer

1

\(\hat y_6=335.4323150+0.2608207\times3585\)

2

\(\hat y_6=335.4323150+935.0422\)

3

\(\hat y_6=1270.4745\approx1270.475\)

sixth value on Slides p.38

4

\(e_6=1300-1270.475=29.525\)

\(e_6>0\): point 6 is above the fitted line.

**Q2.** The data are \((x_i,y_i)\): (1, 1), (2, 3), (3, 2). Calculate \(\hat\beta_0\), \(\hat\beta_1\), the three fitted values, and the three residuals.

Answer

Step 1: \(\bar x=6/3=2\) and \(\bar y=6/3=2\).

Step 2: \(x_i-\bar x=(-1,0,1)\) and \(y_i-\bar y=(-1,1,0)\).

Step 3: \(S_{xy}=(-1)(-1)+(0)(1)+(1)(0)=1\) and \(S_{xx}=1+0+1=2\).

Step 4: \(\hat\beta_1=1/2=0.5\) and \(\hat\beta_0=2-0.5\times2=1\).

Step 5: \(\hat y_i=1+0.5x_i\): 1.5, 2.0, 2.5.

Step 6: \(e_i=y_i-\hat y_i\): \(1-1.5=-0.5\), \(3-2.0=1.0\), \(2-2.5=-0.5\).

Point 2 is above the fitted line. Points 1 and 3 are below it.

**Q3.** Use the second line of Slides p.23, \(0=\sum_{i=1}^n(y_i-\hat\beta_0-\hat\beta_1x_i)\). Show that the residuals add to 0. Check the result with the small data set.

Answer

1

\(0=\sum_{i=1}^n(y_i-\hat\beta_0-\hat\beta_1x_i)\)

Slides p.23

2

\(0=\sum_{i=1}^n\big(y_i-(\hat\beta_0+\hat\beta_1x_i)\big)\)

3

\(0=\sum_{i=1}^n(y_i-\hat y_i)\)

definition of \(\hat y_i\)

4

\(0=\sum_{i=1}^n e_i\)

definition of \(e_i\)

Check: \(-0.8+0.6+1.0-0.6-0.2=0\).

## 06 · Estimating \(\sigma^2\): the MLE and the unbiased estimator

Plan · Slides p.33–38

Slides p.33: section page.

Slides p.34: solve \(\partial\ell/\partial\sigma^2=0\) for \(\hat\sigma^2_{ML}\).

Slides p.35: the course estimator \(\hat\sigma^2=\sum e_i^2/(n-2)\).

Slides p.36: \(\hat\sigma^2\) is unbiased (chi-squared result).

Slides p.37: calculate \(\hat\beta_0\), \(\hat\beta_1\), and \(\hat\sigma\) in order.

Slides p.38: brainhead estimates and fitted values.

Start point (results of Units 02–05) · Added

Model: \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), with \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\). Same as \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\ \sigma^2)\).

The error variance \(\sigma^2=\mathrm{Var}[\epsilon_i]\) is the spread of the points around \(\beta_0+\beta_1x_i\). \(\sigma\) is the standard deviation of the errors, in the unit of \(y\).

\(\hat\beta_1=S_{xy}/S_{xx}\) and \(\hat\beta_0=\bar y-\hat\beta_1\bar x\). Least squares and maximum likelihood give the same values (Slides p.26–29).

\(\hat y_i=\hat\beta_0+\hat\beta_1x_i\) and \(e_i=y_i-\hat y_i\) (Slides p.31).

\(\sum e_i^2\) is the sum of squared residuals. \(\sum\) without limits means \(\sum_{i=1}^n\).

### 06.1 Section page Slides p.33

Slides p.33: section page "Estimating \(\sigma^2\)" (Slides p.34–38).

\(\sigma^2\) is the last unknown parameter of the model.

### 06.2 The maximum likelihood estimate of \(\sigma^2\) Slides p.34

**What** Slides p.34

Maximum Likelihood Estimation Continued · Lecture 2 · p.34 \[\frac{\partial\ell}{\partial\sigma^2}=0\] \[-\frac{n}{2\sigma^2}+\frac{1}{2(\sigma^2)^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2=0\] \[\frac{\sum_{i=1}^n(y_i-[\hat\beta_0+\hat\beta_1x_i])^2}{n}=\hat\sigma^2_{ML}\] or equivalently \[\hat\sigma^2_{ML}=\frac{\sum_{i=1}^n e_i^2}{n}\]

The subscript \(ML\) marks a maximum likelihood estimate.

\(\hat\sigma^2_{ML}\) is the mean of the squared residuals.

**How** Added

Calculate \(\hat\sigma^2_{ML}\) from data

- Calculate \(\hat\beta_1=S_{xy}/S_{xx}\) and \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).
- Calculate each fitted value \(\hat y_i=\hat\beta_0+\hat\beta_1x_i\).
- Calculate each residual \(e_i=y_i-\hat y_i\).
- Square each \(e_i\). Add the squares to get \(\sum e_i^2\).
- Divide by \(n\): \(\hat\sigma^2_{ML}=\sum e_i^2/n\).

**Self-check:** \(\hat\sigma^2_{ML}\ge0\). Its unit is the unit of \(y\), squared. The residuals add to 0. If not, an estimate \(\hat\beta\) is wrong.

**Example · The small data set of Unit 05** Added

\(x=(1,2,3,4,5)\), \(y=(2,4,5,4,5)\), \(n=5\).

Step 1: \(\hat\beta_0=2.2\) and \(\hat\beta_1=0.6\) (Unit 03, Practice Q1).

Step 2: fitted values 2.8, 3.4, 4.0, 4.6, 5.2 (Section 05.2, Example 1).

Step 3: residuals \(-0.8,\ 0.6,\ 1.0,\ -0.6,\ -0.2\) (Section 05.3, Example 1).

Step 4: squares 0.64, 0.36, 1.00, 0.36, 0.04. \(\sum e_i^2=0.64+0.36+1.00+0.36+0.04=2.4\).

Step 5: \(\hat\sigma^2_{ML}=2.4/5=0.48\). \(\hat\sigma_{ML}=\sqrt{0.48}=0.693\).

Check: \(-0.8+0.6+1.0-0.6-0.2=0\).

Residuals at their \(x\) positions Added. An estimate of \(\sigma\) measures their usual distance from \(e=0\).

[figure]
Figure 6-1 (Added) · Orange: the five residuals \(e_i\). Blue: \(e=0\). Green band: \(\pm\hat\sigma=\pm0.894\) (Section 06.3). Four of the five residuals are in the band.

**Why** Slides p.34

1

\[\ell(\beta_0,\beta_1,\sigma^2|y)=-\frac n2\log(2\pi)-\frac n2\log(\sigma^2)-\frac{1}{2\sigma^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2\]

log-likelihood, Slides p.27

2

\[\frac{\partial\ell}{\partial\sigma^2}=-\frac{n}{2\sigma^2}+\frac{1}{2(\sigma^2)^2}\sum_{i=1}^n(y_i-[\beta_0+\beta_1x_i])^2\]

Section 04.2 (c); Slides p.28, third line

3

\[-\frac{n}{2\hat\sigma^2_{ML}}+\frac{1}{2(\hat\sigma^2_{ML})^2}\sum_{i=1}^n(y_i-[\hat\beta_0+\hat\beta_1x_i])^2=0\]

set to 0 (Slides p.34); \(\hat\beta_0,\hat\beta_1\) from Slides p.29

4

\[-n\hat\sigma^2_{ML}+\sum_{i=1}^n(y_i-[\hat\beta_0+\hat\beta_1x_i])^2=0\]

5

\[n\hat\sigma^2_{ML}=\sum_{i=1}^n(y_i-[\hat\beta_0+\hat\beta_1x_i])^2\]

6

\[\hat\sigma^2_{ML}=\frac{\sum_{i=1}^n(y_i-[\hat\beta_0+\hat\beta_1x_i])^2}{n}\]

Slides p.34, third line

7

\[\hat\sigma^2_{ML}=\frac{\sum_{i=1}^n e_i^2}{n}\]

substitute \(e_i=y_i-(\hat\beta_0+\hat\beta_1x_i)\); Slides p.34, last line ∎

### 06.3 The estimator \(\hat\sigma^2\) that the course uses Slides p.35

**What** Slides p.35

Maximum Likelihood Estimation Continued · Lecture 2 · p.35 However we typically adopt a different estimator: \[\hat\sigma^2=\frac{\sum_{i=1}^n e_i^2}{n-2}\qquad\text{Why?}\]

Only the denominator changes: \(n-2\), not \(n\).

From here, \(\hat\sigma^2\) (no subscript) always means this estimator. \(\hat\sigma=\sqrt{\hat\sigma^2}\) estimates \(\sigma\). Slides p.36 answers "Why?".

**How** Added

Calculate \(\hat\sigma^2\) and \(\hat\sigma\) from data

- Do steps 1–4 of Section 06.2 to get \(\sum e_i^2\).
- Calculate \(n-2\).
- Divide: \(\hat\sigma^2=\sum e_i^2/(n-2)\).
- Take the square root: \(\hat\sigma=\sqrt{\hat\sigma^2}\).

**Self-check:** \(\hat\sigma^2\) is larger than \(\hat\sigma^2_{ML}\). The ratio \(\hat\sigma^2/\hat\sigma^2_{ML}\) is exactly \(n/(n-2)\).

**Example · The same small data set** Added

Section 06.2: \(\sum e_i^2=2.4\), \(n=5\).

Step 2: \(n-2=5-2=3\).

Step 3: \(\hat\sigma^2=2.4/3=0.8\).

Step 4: \(\hat\sigma=\sqrt{0.8}=0.894\).

Check: \(\hat\sigma^2/\hat\sigma^2_{ML}=0.8/0.48=1.667\) and \(n/(n-2)=5/3=1.667\).

### 06.4 The unbiased estimator Slides p.36

The slide gives only the intuition. It uses a chi-squared result without proof.

**What** Slides p.36

Unbiased Estimator · Lecture 2 · p.36 Why do we use this \(\hat\sigma^2\) instead of \(\hat\sigma^2_{ML}\)? \[E\left[\frac{\sum_{i=1}^n e_i^2}{n-2}\right]=\sigma^2\] Intuition: \[\frac{1}{\sigma^2}\sum_{i=1}^n e_i^2\sim\chi^2_{(n-2)}\quad\text{and}\quad E[\chi^2_\nu]=\nu\] \[\Longrightarrow E\left[\frac{\sum_{i=1}^n e_i^2}{n-2}\right]=\sigma^2E\left[\frac{1}{\sigma^2}\frac{\sum_{i=1}^n e_i^2}{n-2}\right]=\frac{\sigma^2}{(n-2)}E\left[\frac{1}{\sigma^2}\sum_{i=1}^n e_i^2\right]=\sigma^2\] Often doesn't matter when \(n\ge50\)

An estimator is unbiased when its expectation equals the parameter: \(E[\hat\sigma^2]=\sigma^2\).

In words: over many new data sets, the mean of the \(\hat\sigma^2\) values is \(\sigma^2\).

The chi-squared distribution \(\chi^2_\nu\) has only positive values. Lecture 1 p.26: if \(Z_1,\dots,Z_\nu\overset{iid}{\sim}N(0,1)\), then \(\sum Z_i^2\sim\chi^2_\nu\), and \(E[\chi^2_\nu]=\nu\).

The degrees of freedom \(\nu\) is the parameter of \(\chi^2_\nu\). Here \(\nu=n-2\).

\(\sim\): "has the distribution".

\(\frac{1}{\sigma^2}\sum e_i^2\) has mean \(n-2\). The division by \(n-2\) cancels it. For \(n\ge50\), \(n\) and \(n-2\) are almost equal, and the choice seldom changes a conclusion.

The \(\chi^2_3\) density and its mean Added:

[figure]
Figure 6-2 (Added) · Blue: the \(\chi^2_3\) density, above 0 only for positive values. Purple dashed: the mean \(E[\chi^2_3]=3\).

The right tail is long, but the mean is exactly the degrees of freedom.

**How** Added

Find if an estimator of \(\sigma^2\) is unbiased, and if the denominator is important

- Write the estimator as \(c\cdot\sum e_i^2\). Find \(c\).
- Use \(E\left[\frac{1}{\sigma^2}\sum e_i^2\right]=n-2\). This gives \(E\left[\sum e_i^2\right]=(n-2)\sigma^2\).
- Calculate \(E[c\sum e_i^2]=c(n-2)\sigma^2\).
- If \(c(n-2)=1\), the estimator is unbiased.
- If \(n\ge50\), \(n/(n-2)\) is near 1. The difference is usually small.

**Self-check:** Only \(c=1/(n-2)\) gives \(c(n-2)=1\).

**Example · Two sample sizes** Added

The small data set (\(n=5\)) and \(n=50\).

Step 1: for \(\hat\sigma^2\), \(c=1/(n-2)\). For \(\hat\sigma^2_{ML}\), \(c=1/n\).

Steps 2–3 with \(n=5\): \(E[\hat\sigma^2]=\frac13\cdot3\sigma^2=\sigma^2\). \(E[\hat\sigma^2_{ML}]=\frac15\cdot3\sigma^2=0.6\sigma^2\).

Step 4: \(\hat\sigma^2\) is unbiased. With \(n=5\), \(\hat\sigma^2_{ML}\) is 40% too low on average.

Step 5 with \(n=50\): \(E[\hat\sigma^2_{ML}]=\frac{1}{50}\cdot48\sigma^2=0.96\sigma^2\). The ratio \(n/(n-2)=50/48=1.042\): only 4%.

**Why** Slides p.36

The only input without proof is \(\frac{1}{\sigma^2}\sum e_i^2\sim\chi^2_{(n-2)}\).

1

\[E\left[\frac{\sum_{i=1}^n e_i^2}{n-2}\right]\]

2

\[=E\left[\sigma^2\cdot\frac{1}{\sigma^2}\frac{\sum_{i=1}^n e_i^2}{n-2}\right]\]

\(\sigma^2\cdot\frac{1}{\sigma^2}=1\)

3

\[=\sigma^2E\left[\frac{1}{\sigma^2}\frac{\sum_{i=1}^n e_i^2}{n-2}\right]\]

linearity of \(E\); \(\sigma^2\) is a constant

4

\[=\frac{\sigma^2}{(n-2)}E\left[\frac{1}{\sigma^2}\sum_{i=1}^n e_i^2\right]\]

linearity of \(E\); \(\frac{1}{n-2}\) is a constant

5

\[=\frac{\sigma^2}{(n-2)}\cdot(n-2)\]

\(\frac{1}{\sigma^2}\sum e_i^2\sim\chi^2_{(n-2)}\) and \(E[\chi^2_\nu]=\nu\)

6

\[=\sigma^2\]

∎

### 06.5 Data example: all three estimates in order Slides p.37

Slides p.37 shows this order as code. Only the statistical steps are here.

**What** Slides p.37

Data Example · Lecture 2 · p.37 (statistical content of the slide) Prepare \(\bar x\), \(\bar y\), \(S_{xy}=\sum(y_i-\bar y)(x_i-\bar x)\), \(S_{xx}=\sum(x_i-\bar x)^2\), and \(n\) (number of observations).
\(\beta_1\) estimate (MLE): \(\hat\beta_1=S_{xy}/S_{xx}\).
\(\beta_0\) estimate (MLE): \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).
Fitted values: \(\hat y_i=\hat\beta_0+\hat\beta_1x_i\). Residuals: \(e_i=y_i-\hat y_i\).
\(\sigma\) (unbiased estimate): \(\hat\sigma=\sqrt{\sum e_i^2/(n-2)}\).

A slide note gives a second way to get \(\hat\beta_1\). Divide the sample covariance of \(y\) and \(x\) by the sample variance of \(x\). The \(n-1\) cancels, giving \(S_{xy}/S_{xx}\).

\(\hat\sigma\) is the square root of \(\hat\sigma^2\), not of \(\hat\sigma^2_{ML}\).

**How** Added

Get the three point estimates \(\hat\beta_0\), \(\hat\beta_1\), \(\hat\sigma\)

- Calculate \(\bar x\), \(\bar y\), and \(n\).
- Calculate \(S_{xy}\) and \(S_{xx}\).
- Calculate \(\hat\beta_1=S_{xy}/S_{xx}\).
- Calculate \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).
- Calculate each fitted value \(\hat y_i\) and each residual \(e_i\).
- Calculate \(\hat\sigma=\sqrt{\sum e_i^2/(n-2)}\).

**Self-check:** The residuals add to 0. \(\hat\beta_0+\hat\beta_1\bar x=\bar y\).

**Example · A data set with six points** Added

\(x=(1,2,3,4,5,6)\), \(y=(3,5,4,8,7,9)\).

Step 1: \(n=6\). \(\bar x=21/6=3.5\). \(\bar y=36/6=6\).

Step 2: \(x_i-\bar x=(-2.5,-1.5,-0.5,0.5,1.5,2.5)\). \(y_i-\bar y=(-3,-1,-2,2,1,3)\).

Step 2: \(S_{xy}=7.5+1.5+1+1+1.5+7.5=20\). \(S_{xx}=6.25+2.25+0.25+0.25+2.25+6.25=17.5\).

Step 3: \(\hat\beta_1=20/17.5=1.1429\) (exactly \(8/7\)).

Step 4: \(\hat\beta_0=6-\frac87\times3.5=6-4=2\).

Step 5: \(\hat y_i=2+\frac87x_i\): 3.143, 4.286, 5.429, 6.571, 7.714, 8.857.

Step 5: \(e_i=y_i-\hat y_i\): \(-0.143,\ 0.714,\ -1.429,\ 1.429,\ -0.714,\ 0.143\).

Step 6: \(\sum e_i^2=0.0204+0.5102+2.0408+2.0408+0.5102+0.0204=5.1429\).

Step 6: \(\hat\sigma^2=5.1429/(6-2)=5.1429/4=1.2857\). \(\hat\sigma=\sqrt{1.2857}=1.134\).

Check: the residuals add to 0. \(2+\frac87\times3.5=2+4=6=\bar y\).

### 06.6 Estimates and fitted values for the brainhead data Slides p.38

**What** Slides p.38

Data Example · Lecture 2 · p.38 (statistical results printed on the slide) Regression coefficients: \(\hat\beta_0=335.4323150\) (intercept), \(\hat\beta_1=0.2608207\).
Fitted values of observations 1–6: 1512.255, 1310.380, 1446.789, 1320.552, 1424.880, 1270.475.

Intercept: \(\hat\beta_0=335.4323\) g is the estimated mean of \(y\) at \(x=0\).

Slope: one more cm³ of head size gives an estimated mean brain weight 0.2608 g larger.

**How** Added

Check a fitted value and find its residual

- Find \(x_i\) and \(y_i\) on Slides p.10.
- Calculate \(\hat\beta_1x_i\).
- Add \(\hat\beta_0\) to get \(\hat y_i\).
- Compare \(\hat y_i\) with Slides p.38.
- Calculate \(e_i=y_i-\hat y_i\).

**Self-check:** \(\hat y_i\), rounded to 3 decimals, equals the value on Slides p.38.

**Example · Observations 3 and 5** Added

Slides p.10: \((x_3,y_3)=(4261,1335)\) and \((x_5,y_5)=(4177,1590)\).

Observation 3, Step 2: \(\hat\beta_1x_3=0.2608207\times4261=1111.3570\).

Observation 3, Step 3: \(\hat y_3=335.4323150+1111.3570=1446.7893\).

Observation 3, Step 4: 1446.789, the third value on Slides p.38.

Observation 3, Step 5: \(e_3=1335-1446.789=-111.789\) g, below the fitted line.

Observation 5, Step 2: \(\hat\beta_1x_5=0.2608207\times4177=1089.4481\).

Observation 5, Step 3: \(\hat y_5=335.4323150+1089.4481=1424.8804\). Rounded: 1424.880, the fifth value on Slides p.38.

Observation 5, Step 5: \(e_5=1590-1424.880=165.120\) g, above the fitted line.

For \(\hat\sigma\) of these data, use all 236 residuals (Section 06.5, step 6).

Summary of this unit

\(\hat\sigma^2_{ML}=\sum e_i^2/n\). The course uses the unbiased \(\hat\sigma^2=\sum e_i^2/(n-2)\). Lecture 3 uses \(\hat\sigma\) in confidence intervals and tests.

### 06.7 Practice Added

**Q1.** Data: \(x=(0,1,2,3)\) and \(y=(1,3,2,6)\). Calculate \(\hat\beta_0\), \(\hat\beta_1\), the residuals, \(\hat\sigma^2_{ML}\), \(\hat\sigma^2\), and \(\hat\sigma\).

Answer

Step 1: \(n=4\). \(\bar x=6/4=1.5\). \(\bar y=12/4=3\).

Step 2: \(x_i-\bar x=(-1.5,-0.5,0.5,1.5)\). \(y_i-\bar y=(-2,0,-1,3)\).

Step 2: \(S_{xy}=3+0-0.5+4.5=7\). \(S_{xx}=2.25+0.25+0.25+2.25=5\).

Step 3: \(\hat\beta_1=7/5=1.4\).

Step 4: \(\hat\beta_0=3-1.4\times1.5=3-2.1=0.9\).

Step 5: \(\hat y_i=0.9+1.4x_i\): 0.9, 2.3, 3.7, 5.1. Residuals: \(0.1,\ 0.7,\ -1.7,\ 0.9\). Sum: 0.

Step 6: \(\sum e_i^2=0.01+0.49+2.89+0.81=4.2\).

\(\hat\sigma^2_{ML}=4.2/4=1.05\).

\(\hat\sigma^2=4.2/(4-2)=4.2/2=2.1\). \(\hat\sigma=\sqrt{2.1}=1.449\).

\(n/(n-2)=4/2=2\): the unbiased estimate is two times the MLE.

**Q2.** Use \(\frac{1}{\sigma^2}\sum_{i=1}^n e_i^2\sim\chi^2_{(n-2)}\) to find \(E[\hat\sigma^2_{ML}]\). Is \(\hat\sigma^2_{ML}\) unbiased? Give the factor for \(n=5\) and for \(n=50\).

Answer

1

\[E[\hat\sigma^2_{ML}]=E\left[\frac{\sum_{i=1}^n e_i^2}{n}\right]\]

2

\[=\frac{\sigma^2}{n}E\left[\frac{1}{\sigma^2}\sum_{i=1}^n e_i^2\right]\]

linearity of \(E\)

3

\[=\frac{\sigma^2}{n}(n-2)\]

\(E[\chi^2_{(n-2)}]=n-2\)

4

\[=\frac{n-2}{n}\sigma^2\]

∎

The factor \(\frac{n-2}{n}\) is less than 1. \(E[\hat\sigma^2_{ML}]\ne\sigma^2\): \(\hat\sigma^2_{ML}\) is not unbiased. On average it is too low. For \(n=5\), the factor is \(3/5=0.6\). For \(n=50\), it is \(48/50=0.96\).

**Q3.** Use the six fitted values on Slides p.38 and the six values \(y_i\) on Slides p.10. Calculate \(e_1,\dots,e_6\) and their sum. Can you use these six residuals to calculate \(\hat\sigma\) for the brainhead data?

Answer

Step 1: \(e_1=1530-1512.255=17.745\), \(e_2=1297-1310.380=-13.380\), \(e_3=1335-1446.789=-111.789\).

Step 2: \(e_4=1282-1320.552=-38.552\), \(e_5=1590-1424.880=165.120\), \(e_6=1300-1270.475=29.525\).

Step 3: \(17.745-13.380-111.789-38.552+165.120+29.525=48.669\).

The sum is not 0. \(\sum e_i=0\) holds for all \(n=236\) residuals together, not for six.

No. \(\hat\sigma=\sqrt{\sum e_i^2/(n-2)}\) needs all 236 residuals, with \(n-2=234\). The slides do not print the other 230.


---

<!-- L03 -->

STAT 331 · Lecture 3 · Simple Linear Regression: Inference

# Lecture 3: Simple Linear Regression: Inference

This lecture finds the distributions of \(\hat\beta_1\) and \(\hat\beta_0\) and uses them for confidence intervals and hypothesis tests (Lecture 3 · p.1–49).

Contents
01 · Recap: the SLR model, least squares, and the estimate of \(\sigma^2\) 02 · Sampling distribution and unbiasedness of \(\hat\beta_1\) 03 · Variance and distribution of \(\hat\beta_1\) and \(\hat\beta_0\) 04 · Confidence interval for \(\beta_1\): known \(\sigma\), unknown \(\sigma\) (t distribution), and standard error 05 · Interval estimation example and interpretation 06 · Hypothesis tests for \(\beta_1\): p-value, coefficient table, and one-sided tests

## 01 · Recap: the SLR model, least squares, and the estimate of \(\sigma^2\)

Plan · Slides p.1–8

Step 1: Title pages (Slides p.1–2).

Step 2: Model and assumptions (Slides p.3–4).

Step 3: Meaning of \(\beta_1\) (Slides p.5).

Step 4: \(\hat\beta_0\) and \(\hat\beta_1\) (Slides p.6–7).

Step 5: Residuals and \(\hat\sigma^2\) (Slides p.8).

Data for this unit · Added

Small data set: \(x=(1,2,3,4,5)\), \(y=(2,4,5,4,5)\), \(n=5\).

Brainhead data: \(n=236\) persons, \(y\) = brain weight (g), \(x\) = head size (cm³).

### 01.1 Title page and section page Slides p.1–2

Slides p.1 (title): "Lecture 3: Simple Linear Regression: Inference".

Inference uses sample data to make statements about unknown population parameters, for example with confidence intervals and hypothesis tests.

Slides p.2: section "Recap" (Slides p.3–8).

### 01.2 The SLR model and its assumptions Slides p.3–4

All inference in this lecture needs the four assumptions.

**What** Slides p.3–4

Simple Linear Regression · Lecture 3 · p.3–4 \[y_i=\beta_0+\beta_1x_i+\epsilon_i,\quad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] Or: \[y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\] Assumptions:
1. Linearity
2. Independence
3. Normality
4. Equal variance (homoskedasticity)

Simple linear regression (SLR): the mean of a response \(y\) is a straight-line function of one explanatory variable \(x\).

The response \(y_i\) is the result value of observation \(i\), \(i=1,\dots,n\). The sample size \(n\) is the number of observations.

The explanatory variable \(x_i\) is the input value of observation \(i\). The model treats it as a known constant.

The intercept \(\beta_0\) and the slope \(\beta_1\) are parameters (unknown model constants) of the population line.

The error \(\epsilon_i\) is the random, unobservable difference between \(y_i\) and the population line \(\beta_0+\beta_1x_i\).

\(N(\mu,\sigma^2)\) is the bell-shaped Normal distribution with mean (center) \(\mu\) and variance (mean squared distance from the mean) \(\sigma^2\).

\(\sigma^2\) is the error variance, the third parameter. \(\sigma\) is the standard deviation.

"iid": independent and identically distributed. All \(\epsilon_i\) have one distribution and do not affect each other.

"indep": independent. The \(y_i\) are not identically distributed: their mean \(\beta_0+\beta_1x_i\) changes with \(x_i\).

1. Linearity: the mean of \(y\) is \(\beta_0+\beta_1x\).

2. Independence: the errors are independent.

3. Normality: each error is Normal.

4. Equal variance (homoskedasticity): the error variance is \(\sigma^2\) at each \(x\).

Both forms give the same model: "line plus error", and the distribution of \(y_i\).

**How** Added

Write a data set as an SLR model

- Find the response \(y\): the variable to explain or predict.
- Find the explanatory variable \(x\): the variable that explains \(y\).
- Write \(y_i=\beta_0+\beta_1x_i+\epsilon_i\) with \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\), \(i=1,\dots,n\).
- List the three parameters: \(\beta_0\), \(\beta_1\), \(\sigma^2\).
- For the second form, put the mean \(\beta_0+\beta_1x_i\) and the variance \(\sigma^2\) into \(N(\cdot,\cdot)\).

**Self-check:** Greek letters: only \(\beta_0\), \(\beta_1\), \(\sigma^2\), \(\epsilon_i\). \(n\) equals the number of data pairs.

**Example 1 · The small data set** Added

Step 1–2: in each pair \((1,2),(2,4),(3,5),(4,4),(5,5)\), \(x\) is first. \(n=5\).

Step 3: \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\), \(i=1,\dots,5\).

Observation 3: \(5=\beta_0+\beta_1\cdot3+\epsilon_3\), with \(\beta_0\), \(\beta_1\), and \(\epsilon_3\) unknown.

Step 5: \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\). For observation 3, \(y_3\sim N(\beta_0+3\beta_1,\sigma^2)\).

**Example 2 · The brainhead data** Added

Step 1–2: for person \(i\), \(y_i\) is brain weight (g) and \(x_i\) is head size (cm³).

Step 3: \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\), \(i=1,\dots,236\).

Self-check: Slides p.45 gives \(n-2=234\) degrees of freedom. \(n=234+2=236\).

**Why · The two forms are the same** Added

\(x_i\), \(\beta_0\), and \(\beta_1\) are constants.

1

\(E[y_i]=E[\beta_0+\beta_1x_i+\epsilon_i]\)

2

\(=\beta_0+\beta_1x_i+E[\epsilon_i]\)

linearity of expectation

3

\(=\beta_0+\beta_1x_i+0\)

\(\epsilon_i\sim N(0,\sigma^2)\)

4

\(\mathrm{Var}[y_i]=\mathrm{Var}[\beta_0+\beta_1x_i+\epsilon_i]\)

5

\(=\mathrm{Var}[\epsilon_i]\)

constants do not change variance

6

\(=\sigma^2\)

A Normal variable plus a constant is Normal: \(y_i\sim N(\beta_0+\beta_1x_i,\sigma^2)\). Independent \(\epsilon_i\) give independent \(y_i\). ∎

### 01.3 The interpretation of \(\beta_1\) Slides p.5

**What** Slides p.5

Interpretations · Lecture 3 · p.5 \[\beta_1=E[y|x=x^*+1]-E[y|x=x^*]\] \(\beta_1\) is the mean difference comparing a population with \(x\) to a population with \(x\) a unit lower
\(\hat\beta_1\) is an estimate of this mean difference

The conditional expectation \(E[y|x=x^*]\) is the mean of \(y\) over the units with \(x=x^*\). \(x^*\) is any fixed value of \(x\).

A population is the set of all possible units. "A population with \(x\)" is all units with that value of \(x\).

An estimate is a value calculated from sample data. The hat "^" marks it: \(\hat\beta_1\) is the estimate of \(\beta_1\).

**How** Added

Interpret \(\hat\beta_1\) in one sentence

- Find the unit of \(x\) and the unit of \(y\).
- Write: "Compare two populations whose \(x\) differs by 1 (unit of \(x\))."
- Continue: "The estimated mean of \(y\) differs by \(\hat\beta_1\) (unit of \(y\))."
- Use the sign of \(\hat\beta_1\) to say "higher" or "lower" for the larger \(x\).
- For a difference of \(k\) units in \(x\), use the mean difference \(k\hat\beta_1\).

**Self-check:** The sentence says "mean" and gives both units.

**Example 1 · The small data set** Added

\(\hat\beta_1=0.6\) (Section 01.4). No units.

Step 2–4: compare two populations whose \(x\) differs by 1. The estimated mean of \(y\) is 0.6 higher at the larger \(x\).

Step 5: for \(x=5\) and \(x=1\), \(k=5-1=4\). The mean difference is \(4\times0.6=2.4\).

**Example 2 · The brainhead data** Added

Step 1: \(x\) is in cm³. \(y\) is in g.

Step 2–4: compare two populations whose head sizes differ by 1 cm³. The estimated mean brain weight is 0.26082 g higher at the larger head size (Slides p.45).

Step 5: for a difference of 100 cm³, the mean difference is \(100\times0.26082=26.082\) g.

This is a difference of means, not a change for one person.

**Why** Added

Put two values of \(x\) into \(E[y|x]=\beta_0+\beta_1x\) (Section 01.2) and subtract.

1

\(E[y|x=x^*+1]-E[y|x=x^*]=\big(\beta_0+\beta_1(x^*+1)\big)-\big(\beta_0+\beta_1x^*\big)\)

put in \(E[y|x]=\beta_0+\beta_1x\)

2

\(=\beta_0+\beta_1x^*+\beta_1-\beta_0-\beta_1x^*\)

3

\(=\beta_1\)

∎ The result does not contain \(x^*\): it is the same at each \(x\).

### 01.4 Least squares estimation Slides p.6–7

**What** Slides p.6–7

Least Squares Estimation · Lecture 3 · p.6 Minimize the sum of squares: \[S(\beta_0,\beta_1)=\sum_{i=1}^n(y_i-\beta_0-\beta_1x_i)^2\] \[\Longrightarrow\ \frac{\partial S(\beta_0,\beta_1)}{\partial\beta_0}=0,\qquad \frac{\partial S(\beta_0,\beta_1)}{\partial\beta_1}=0\]

Estimates · Lecture 3 · p.7 So the least squares estimators are: \[\hat\beta_1=\frac{S_{xy}}{S_{xx}},\qquad \hat\beta_0=\bar y-\hat\beta_1\bar x.\] OLS=MLE under the assumption of Normality
OLS well defined even without Normality, but only equal to MLE under Normality

The sum of squares \(S(\beta_0,\beta_1)\) adds the squared vertical differences \(y_i-\beta_0-\beta_1x_i\) of a candidate line.

The partial derivative \(\partial S/\partial\beta_0\) is the derivative of \(S\) in \(\beta_0\), with \(\beta_1\) constant.

Least squares (OLS, ordinary least squares) uses the \(\beta_0\) and \(\beta_1\) that make \(S\) smallest.

An estimator is a formula that changes data into an estimate, for example \(\hat\beta_1=S_{xy}/S_{xx}\).

The sample means are \(\bar x=\frac1n\sum_{i=1}^n x_i\) and \(\bar y=\frac1n\sum_{i=1}^n y_i\).

\(S_{xx}=\sum_{i=1}^n(x_i-\bar x)^2\) is the sum of squared deviations of \(x\). \(S_{xy}=\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y)\) is the sum of cross products of deviations.

The maximum likelihood estimator (MLE) uses the parameter values that make the density of the data largest.

**How** Added

Calculate \(\hat\beta_1\) and \(\hat\beta_0\)

- Calculate \(\bar x\) and \(\bar y\).
- Calculate \(x_i-\bar x\) and \(y_i-\bar y\) for each observation.
- Calculate \(S_{xx}=\sum(x_i-\bar x)^2\).
- Calculate \(S_{xy}=\sum(x_i-\bar x)(y_i-\bar y)\).
- Calculate \(\hat\beta_1=S_{xy}/S_{xx}\).
- Calculate \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).

**Self-check:** \(S_{xx}>0\). \(\hat\beta_1\) has the sign of \(S_{xy}\). The line goes through \((\bar x,\bar y)\): \(\hat\beta_0+\hat\beta_1\bar x=\bar y\).

**Example 1 · The small data set** Added How steps 1–6

Step 1: sample means.

1

\(\bar x=\dfrac{1+2+3+4+5}{5}=\dfrac{15}{5}=3\)

2

\(\bar y=\dfrac{2+4+5+4+5}{5}=\dfrac{20}{5}=4\)

Step 2: deviations.

\(x_i-\bar x\): \(1-3,\ 2-3,\ 3-3,\ 4-3,\ 5-3=-2,\ -1,\ 0,\ 1,\ 2\).

\(y_i-\bar y\): \(2-4,\ 4-4,\ 5-4,\ 4-4,\ 5-4=-2,\ 0,\ 1,\ 0,\ 1\).

Step 3–4: sums.

1

\(S_{xx}=(-2)^2+(-1)^2+0^2+1^2+2^2\)

2

\(=4+1+0+1+4=10\)

3

\(S_{xy}=(-2)(-2)+(-1)(0)+(0)(1)+(1)(0)+(2)(1)\)

4

\(=4+0+0+0+2=6\)

Step 5–6: slope and intercept.

1

\(\hat\beta_1=\dfrac{S_{xy}}{S_{xx}}=\dfrac{6}{10}=0.6\)

2

\(\hat\beta_0=\bar y-\hat\beta_1\bar x=4-0.6\times3\)

3

\(=4-1.8=2.2\)

Self-check: \(S_{xx}=10>0\). \(S_{xy}=6\) and \(\hat\beta_1=0.6\) are both positive. \(\hat\beta_0+\hat\beta_1\bar x=2.2+0.6\times3=2.2+1.8=4=\bar y\).

Fitted line: \(\hat y=2.2+0.6x\).

**Example 2 · The brainhead data** Slides p.45

Slides p.45: \(\hat\beta_0=335.43231\) g, \(\hat\beta_1=0.26082\) g per cm³. Fitted line: \(\hat y=335.43231+0.26082x\).

[figure]
Figure 1-1 · Brainhead data (blue, \(n=236\)) and the least squares line from Slides p.45 (orange). The line goes through \((\bar x,\bar y)\) (green).

Results for later units

Small data set: \(n=5\), \(\bar x=3\), \(\bar y=4\), \(S_{xx}=10\), \(S_{xy}=6\), \(\hat\beta_1=0.6\), \(\hat\beta_0=2.2\).

Brainhead data (Slides p.45): \(n=236\), \(\hat\beta_0=335.43231\), \(\hat\beta_1=0.26082\).

**Why** Added

Set the two partial derivatives of Slides p.6 to 0. Solve for \(\hat\beta_0\).

1

\(\dfrac{\partial S}{\partial\beta_0}=\sum_{i=1}^n2(y_i-\beta_0-\beta_1x_i)(-1)\)

chain rule

2

\(0=\sum_{i=1}^n(y_i-\hat\beta_0-\hat\beta_1x_i)\)

set to 0, divide by \(-2\)

3

\(0=\sum_{i=1}^ny_i-n\hat\beta_0-\hat\beta_1\sum_{i=1}^nx_i\)

4

\(n\hat\beta_0=\sum_{i=1}^ny_i-\hat\beta_1\sum_{i=1}^nx_i\)

5

\(\hat\beta_0=\frac1n\sum_{i=1}^ny_i-\hat\beta_1\frac1n\sum_{i=1}^nx_i\)

6

\(\hat\beta_0=\bar y-\hat\beta_1\bar x\)

definition of \(\bar x,\bar y\)

Solve for \(\hat\beta_1\).

1

\(\dfrac{\partial S}{\partial\beta_1}=\sum_{i=1}^n2(y_i-\beta_0-\beta_1x_i)(-x_i)\)

chain rule

2

\(0=\sum_{i=1}^n(y_i-\hat\beta_0-\hat\beta_1x_i)x_i\)

set to 0, divide by \(-2\)

3

\(0=\sum_{i=1}^ny_ix_i-\hat\beta_0n\bar x-\hat\beta_1\sum_{i=1}^nx_i^2\)

\(\sum x_i=n\bar x\)

4

\(0=\sum_{i=1}^ny_ix_i-(\bar y-\hat\beta_1\bar x)n\bar x-\hat\beta_1\sum_{i=1}^nx_i^2\)

put in \(\hat\beta_0=\bar y-\hat\beta_1\bar x\)

5

\(0=\sum_{i=1}^ny_ix_i-n\bar y\bar x+\hat\beta_1n\bar x^2-\hat\beta_1\sum_{i=1}^nx_i^2\)

6

\(0=\sum_{i=1}^ny_ix_i-n\bar y\bar x+\hat\beta_1\Big(n\bar x^2-\sum_{i=1}^nx_i^2\Big)\)

7

\(\hat\beta_1=\dfrac{\sum_{i=1}^ny_ix_i-n\bar y\bar x}{\sum_{i=1}^nx_i^2-n\bar x^2}\)

The denominator is \(S_{xx}\).

1

\(S_{xx}=\sum_{i=1}^n(x_i-\bar x)^2\)

2

\(=\sum_{i=1}^nx_i^2-2\bar x\sum_{i=1}^nx_i+n\bar x^2\)

3

\(=\sum_{i=1}^nx_i^2-2n\bar x^2+n\bar x^2\)

\(\sum x_i=n\bar x\)

4

\(=\sum_{i=1}^nx_i^2-n\bar x^2\)

The numerator is \(S_{xy}\).

1

\(S_{xy}=\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y)\)

2

\(=\sum_{i=1}^nx_iy_i-\bar y\sum_{i=1}^nx_i-\bar x\sum_{i=1}^ny_i+n\bar x\bar y\)

3

\(=\sum_{i=1}^nx_iy_i-n\bar x\bar y-n\bar x\bar y+n\bar x\bar y\)

\(\sum x_i=n\bar x,\ \sum y_i=n\bar y\)

4

\(=\sum_{i=1}^nx_iy_i-n\bar x\bar y\)

∎ \(\hat\beta_1=S_{xy}/S_{xx}\).

Small data check: \(\sum x_i^2=55\). \(\sum x_i^2-n\bar x^2=55-5\times3^2=55-45=10=S_{xx}\).

Small data check: \(\sum x_iy_i=66\). \(\sum x_iy_i-n\bar x\bar y=66-5\times3\times4=66-60=6=S_{xy}\).

### 01.5 Fitted values, residuals, and \(\hat\sigma^2\) Slides p.8

**What** Slides p.8

Fitted Values, Residuals, and σ̂² · Lecture 3 · p.8 Fitted values: \[\hat y_i=\hat\beta_0+\hat\beta_1x_i\] Residuals: \[e_i=y_i-\hat y_i=y_i-(\hat\beta_0+\hat\beta_1x_i)\] • Note: \(e_i\) are different from errors, \(\epsilon_i=y_i-(\beta_0+\beta_1x_i)\), and have different properties
Estimate of \(\sigma^2\) is: \[\hat\sigma^2=\frac{\sum_{i=1}^n(y_i-\hat y_i)^2}{n-2}=\frac{\sum_{i=1}^ne_i^2}{n-2}\] • This is not the MLE—instead it is an unbiased estimate of \(\sigma^2\)

The fitted value \(\hat y_i\) is the height of the fitted line at \(x=x_i\).

The residual \(e_i\) is the observed value minus the fitted value. It replaces \(\epsilon_i\), which needs the unknown population line.

The sum of squared residuals \(\sum_{i=1}^ne_i^2\) is the minimum of \(S\), at the least squares line.

An estimator is unbiased when its expected value equals the parameter: \(E[\hat\sigma^2]=\sigma^2\).

\(\hat\sigma=\sqrt{\hat\sigma^2}\) has the unit of \(y\).

**How** Added

Calculate \(\hat y_i\), \(e_i\), and \(\hat\sigma^2\)

- Calculate each fitted value \(\hat y_i=\hat\beta_0+\hat\beta_1x_i\).
- Calculate each residual \(e_i=y_i-\hat y_i\).
- Square each residual. Add the squares to get \(\sum e_i^2\).
- Divide the sum by \(n-2\) to get \(\hat\sigma^2\).
- Take the square root to get \(\hat\sigma\).

**Self-check:** \(\sum e_i=0\), up to rounding. \(\hat\sigma^2>0\). The denominator is \(n-2\), not \(n\).

**Example 1 · The small data set** Added How steps 1–5

Step 1: fitted values.

1

\(\hat\beta_1x_i:\ 0.6(1),\ 0.6(2),\ 0.6(3),\ 0.6(4),\ 0.6(5)=0.6,\ 1.2,\ 1.8,\ 2.4,\ 3.0\)

2

\(\hat y_i:\ 2.2+0.6,\ 2.2+1.2,\ 2.2+1.8,\ 2.2+2.4,\ 2.2+3.0\)

3

\(\hat y_i:\ 2.8,\ 3.4,\ 4.0,\ 4.6,\ 5.2\)

Step 2: residuals.

1

\(e_i:\ 2-2.8,\ 4-3.4,\ 5-4.0,\ 4-4.6,\ 5-5.2\)

2

\(e_i:\ -0.8,\ 0.6,\ 1.0,\ -0.6,\ -0.2\)

Self-check: \(-0.8+0.6+1.0-0.6-0.2=0\).

[figure]
Figure 1-2 (Added) · Blue: observations \((x_i,y_i)\). Orange: fitted values \((x_i,\hat y_i)\). Each purple segment has length \(|e_i|\). Points above the line have \(e_i>0\). Points below have \(e_i<0\).

Step 3–5: squared residuals and \(\hat\sigma^2\).

1

\(e_i^2:\ (-0.8)^2,\ 0.6^2,\ 1.0^2,\ (-0.6)^2,\ (-0.2)^2=0.64,\ 0.36,\ 1.00,\ 0.36,\ 0.04\)

2

\(\sum_{i=1}^5e_i^2=0.64+0.36+1.00+0.36+0.04=2.4\)

3

\(\hat\sigma^2=\dfrac{2.4}{5-2}=\dfrac{2.4}{3}=0.8\)

4

\(\hat\sigma=\sqrt{0.8}=0.8944\)

A typical point is about 0.89 from the line.

**Example 2 · The brainhead data** Slides p.45

Slides p.45: \(\hat\sigma=72.35\) g, with 234 degrees of freedom (the denominator \(n-2\)).

1

\(n-2=236-2=234\)

2

\(\hat\sigma^2=72.35^2=5234.52\ \text{g}^2\)

from the rounded \(\hat\sigma\)

A typical brain weight is about 72.35 g from the line.

Results for later units (continued)

Small data set: \(\sum e_i^2=2.4\), \(\hat\sigma^2=0.8\), \(\hat\sigma=0.8944\), \(n-2=3\).

Brainhead data (Slides p.45): \(\hat\sigma=72.35\), \(n-2=234\).

**Why · \(\sum e_i=0\) and the denominator \(n-2\)** Added

1

\(0=\sum_{i=1}^n(y_i-\hat\beta_0-\hat\beta_1x_i)\)

01.4, \(\hat\beta_0\) chain, line 2

2

\(0=\sum_{i=1}^n(y_i-\hat y_i)\)

definition of \(\hat y_i\)

3

\(0=\sum_{i=1}^ne_i\)

definition of \(e_i\)

The chi-squared distribution \(\chi^2_\nu\) has non-negative values, \(\nu\) degrees of freedom, and mean \(E[\chi^2_\nu]=\nu\). The course gives \(\frac{1}{\sigma^2}\sum_{i=1}^ne_i^2\sim\chi^2_{(n-2)}\).

1

\(E[\hat\sigma^2]=E\left[\dfrac{\sum_{i=1}^ne_i^2}{n-2}\right]\)

2

\(=\sigma^2E\left[\dfrac{1}{\sigma^2}\dfrac{\sum_{i=1}^ne_i^2}{n-2}\right]\)

3

\(=\dfrac{\sigma^2}{n-2}E\left[\dfrac{1}{\sigma^2}\sum_{i=1}^ne_i^2\right]\)

linearity of expectation

4

\(=\dfrac{\sigma^2}{n-2}(n-2)\)

mean of \(\chi^2_{(n-2)}\) is \(n-2\)

5

\(=\sigma^2\)

∎ The "2" counts the estimated line parameters \(\beta_0\) and \(\beta_1\).

### 01.6 Practice Added

**Q1.** A data set has \(x=(1,2,3,4,5)\) and \(y=(2,4,5,4,5)\). The least squares line is \(\hat y=2.2+0.6x\). Calculate \(\hat y_3\) and \(e_3\). Is point 3 above or below the line?

Answer

1

\(\hat y_3=2.2+0.6\times3\)

2

\(=2.2+1.8=4.0\)

3

\(e_3=y_3-\hat y_3=5-4.0=1.0\)

\(e_3>0\): point 3 is above the line.

**Q2.** For the brainhead data, \(\hat\beta_1=0.26082\) (Slides p.45). Interpret \(\hat\beta_1\). Then estimate the mean brain weight difference between head sizes 4000 cm³ and 3000 cm³.

Answer

Compare two populations whose head sizes differ by 1 cm³. The estimated mean brain weight is 0.26082 g higher at the larger head size.

1

\(k=4000-3000=1000\)

2

\(k\hat\beta_1=1000\times0.26082\)

01.3, How step 5

3

\(=260.82\) g

**Q3.** For the small data set, \(\sum_{i=1}^5e_i^2=2.4\). Calculate \(\hat\sigma^2\) and \(\hat\sigma\). Why is the denominator \(n-2\)?

Answer

1

\(\hat\sigma^2=\dfrac{2.4}{5-2}=\dfrac{2.4}{3}\)

2

\(=0.8\)

3

\(\hat\sigma=\sqrt{0.8}=0.8944\)

\(\frac{1}{\sigma^2}\sum e_i^2\sim\chi^2_{(n-2)}\) has mean \(n-2\). Dividing by \(n-2\) gives \(E[\hat\sigma^2]=\sigma^2\) (unbiased).

## 02 · Sampling distribution and unbiasedness of \(\hat\beta_1\)

Plan · Slides p.9–18

Step 1: Title page (Slides p.9).

Step 2: Different samples give different estimates (Slides p.10).

Step 3: Section page (Slides p.11).

Step 4: Write \(\hat\beta_1=\sum w_iy_i\) (Slides p.12).

Step 5: Find the distribution of \(\hat\beta_1\) (Slides p.13).

Step 6: Show \(E[\hat\beta_1]=\beta_1\) (Slides p.14–18).

### 02.1 Title page Slides p.9

Title: Lecture 3: Simple Linear Regression: Inference. New material starts on this page.

### 02.2 Why we need inference Slides p.10

**What** Slides p.10

Inference for \(\beta\) · Lecture 3 · p.10 (slide 7/25) In two different samples, we will get different estimates of β.
How do we acknowledge this variability?
How do we characterize uncertainty in our estimates?
• Standard errors
• Confidence intervals
• Hypothesis tests

A sample is the \(n\) data pairs \((x_i,y_i)\) that we have. The brainhead sample (\(n=236\)) gives \(\hat\beta_1=0.2608207\) (Lecture 2 · p.38).

Variability: a different sample gives a different estimate.

Uncertainty: the distance from the estimate to the true \(\beta_1\) is unknown.

Standard errors, confidence intervals, and hypothesis tests describe uncertainty. All three need the distribution of \(\hat\beta_1\) over samples.

**How** Added

Compare the estimates from two samples

- Divide the data into two samples.
- For each sample, calculate \(\bar x\) and \(\bar y\).
- Calculate \(S_{xy}=\sum_i(y_i-\bar y)(x_i-\bar x)\) and \(S_{xx}=\sum_i(x_i-\bar x)^2\).
- Calculate \(\hat\beta_1=S_{xy}/S_{xx}\).
- Compare the two values.

**Self-check:** Keep each pair \((x_i,y_i)\) together in one sample.

**Example · Two samples of three observations** Added

The first six brainhead observations (Lecture 2 · p.10), \(x\) in cm³, \(y\) in g: \((4512,1530)\), \((3738,1297)\), \((4261,1335)\), \((3777,1282)\), \((4177,1590)\), \((3585,1300)\).

Sample A: observations 1–3. Sample B: observations 4–6.

Sample A, step 2:

1

\[\bar x=\frac{4512+3738+4261}{3}=\frac{12511}{3}=4170.333\]

2

\[\bar y=\frac{1530+1297+1335}{3}=\frac{4162}{3}=1387.333\]

Sample A, step 3. Deviations: \(x_i-\bar x=341.667,\ -432.333,\ 90.667\); \(y_i-\bar y=142.667,\ -90.333,\ -52.333\).

1

\[S_{xy}=(142.667)(341.667)+(-90.333)(-432.333)+(-52.333)(90.667)\]

2

\[=48744.444+39054.111-4744.889\]

3

\[=83053.667\]

4

\[S_{xx}=341.667^2+(-432.333)^2+90.667^2\]

5

\[=116736.111+186912.111+8220.444\]

6

\[=311868.667\]

Sample A, step 4:

1

\[\hat\beta_1=\frac{83053.667}{311868.667}=0.2663\]

Sample B, step 2:

1

\[\bar x=\frac{3777+4177+3585}{3}=\frac{11539}{3}=3846.333\]

2

\[\bar y=\frac{1282+1590+1300}{3}=\frac{4172}{3}=1390.667\]

Sample B, step 3. Deviations: \(x_i-\bar x=-69.333,\ 330.667,\ -261.333\); \(y_i-\bar y=-108.667,\ 199.333,\ -90.667\).

1

\[S_{xy}=(-108.667)(-69.333)+(199.333)(330.667)+(-90.667)(-261.333)\]

2

\[=7534.222+65912.889+23694.222\]

3

\[=97141.333\]

4

\[S_{xx}=(-69.333)^2+330.667^2+(-261.333)^2\]

5

\[=4807.111+109340.444+68295.111\]

6

\[=182442.667\]

Sample B, step 4:

1

\[\hat\beta_1=\frac{97141.333}{182442.667}=0.5324\]

Step 5:

Sample A: \(\hat\beta_1=0.2663\). Sample B: \(\hat\beta_1=0.5324\). All 236 observations: \(\hat\beta_1=0.2608207\) (Lecture 2 · p.38).

We do not know which value is nearest to the true \(\beta_1\).

**Why** Added

\(\hat\beta_1\) is a function of the \(y_i=\beta_0+\beta_1x_i+\epsilon_i\). A new sample has new random \(\epsilon_i\), new \(y_i\), and a new \(\hat\beta_1\).

A random variable is a quantity whose value comes from a random outcome. \(\hat\beta_1\) is a random variable.

### 02.3 Section page: properties of the LS estimator Slides p.11

Section title: "Properties of LS Estimator". The least squares (LS) estimator of the slope is \(\hat\beta_1=S_{xy}/S_{xx}\).

### 02.4 Write \(\hat\beta_1\) as a linear combination of the \(y_i\) Slides p.12

**What** Slides p.12

Properties of \(\hat\beta_1\) · Lecture 3 · p.12 (slide 8/25) Recall: \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\) \[\hat\beta_1=\frac{\sum_i(y_i-\bar y)(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}=\frac{\sum_i y_i(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}=\sum_{i=1}^n w_iy_i\] where \(w_i=\frac{(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\) are fixed with respect to \(y\).
Hence \(\hat\beta_1\) is a linear combination of independent Normals!

The denominator is \(S_{xx}\). Its index \(j\) keeps it apart from the numerator index \(i\).

Weight \(w_i\): the constant that multiplies \(y_i\) in \(\hat\beta_1\).

Fixed with respect to \(y\): \(w_i\) uses only the \(x_i\), and the model treats each \(x_i\) as a known constant.

Linear combination: a sum \(a_1y_1+a_2y_2+\dots+a_ny_n\) with constants \(a_i\).

**How** Added

Calculate the \(w_i\) and use them to get \(\hat\beta_1\)

- Calculate \(\bar x\).
- Calculate \(S_{xx}=\sum_{j=1}^n(x_j-\bar x)^2\).
- For each \(i\), calculate \(w_i=(x_i-\bar x)/S_{xx}\).
- Calculate \(\sum_{i=1}^n w_iy_i\).
- Compare the result with \(S_{xy}/S_{xx}\).

**Self-check:** (1) \(\sum w_iy_i=S_{xy}/S_{xx}\). (2) \(\sum w_i=0\). (3) \(\sum w_ix_i=1\).

(4) \(x_i>\bar x\) gives \(w_i>0\). \(x_i<\bar x\) gives \(w_i<0\). Section 02.6 shows the reasons for (2) and (3).

**Example · Six observations of the brainhead data** Added

Data: the six observations of Section 02.2.

Step 1:

1

\[\bar x=\frac{4512+3738+4261+3777+4177+3585}{6}\]

2

\[=\frac{24050}{6}\]

3

\[=4008.333\]

Step 2. Deviations \(x_i-\bar x\): \(503.667,\ -270.333,\ 252.667,\ -231.333,\ 168.667,\ -423.333\).

1

\[S_{xx}=503.667^2+(-270.333)^2+252.667^2+(-231.333)^2+168.667^2+(-423.333)^2\]

2

\[=253680.111+73080.111+63840.444+53515.111+28448.444+179211.111\]

3

\[=651775.333\]

Step 3: divide each deviation by \(S_{xx}=651775.333\).

\(w_1=503.667/651775.333=7.7276\times10^{-4}\)

\(w_2=-270.333/651775.333=-4.1476\times10^{-4}\)

\(w_3=252.667/651775.333=3.8766\times10^{-4}\)

\(w_4=-231.333/651775.333=-3.5493\times10^{-4}\)

\(w_5=168.667/651775.333=2.5878\times10^{-4}\)

\(w_6=-423.333/651775.333=-6.4951\times10^{-4}\)

Step 4:

1

\[\sum w_iy_i=(7.7276\times10^{-4})(1530)+(-4.1476\times10^{-4})(1297)+\dots+(-6.4951\times10^{-4})(1300)\]

2

\[=1.18232-0.53795+0.51752-0.45502+0.41146-0.84436\]

3

\[=0.2740\]

Rounded terms sum to 0.27397; unrounded, 0.27398.

Step 5: \(\bar y=8334/6=1389\), and \(y_i-\bar y=141,\ -92,\ -54,\ -107,\ 201,\ -89\).

1

\[S_{xy}=(141)(503.667)+(-92)(-270.333)+\dots+(-89)(-423.333)\]

2

\[=71017+24870.667-13644+24752.667+33902+37676.667\]

3

\[=178575\]

4

\[\frac{S_{xy}}{S_{xx}}=\frac{178575}{651775.333}=0.2740\]

Check (1): \(\sum w_iy_i=0.2740=S_{xy}/S_{xx}\).

Check (2): \(\sum w_i=(503.667-270.333+252.667-231.333+168.667-423.333)/651775.333=0/651775.333=0\).

Check (3): \(\sum w_ix_i=3.48670-1.55039+1.65182-1.34056+1.08093-2.32849=1.00001\). The exact value is 1. The 0.00001 comes from rounding.

Check (4): observations 1, 3, 5 have \(x_i>\bar x=4008.333\) and \(w_i>0\). Observations 2, 4, 6 have \(x_i<\bar x\) and \(w_i<0\).

[figure]
Figure 2-1 (Added): the 236 brainhead weights \(w_i\) against \(x_i\). Orange dashed line: \(\bar x\). Grey dashed line: \(w=0\). All points lie on one line through \((\bar x,0)\) with slope \(1/S_{xx}\). A point far from \(\bar x\) has a large \(|w_i|\).

**Why** Slides p.12

Slides p.12 does not prove the first equals sign. The proof needs \(\sum_i(x_i-\bar x)=0\).

Helper result: the deviations add to 0.

1

\[\sum_{i=1}^n(x_i-\bar x)=\sum_{i=1}^n x_i-\sum_{i=1}^n\bar x\]

2

\[=\sum_{i=1}^n x_i-n\bar x\]

Adds the constant \(\bar x\) \(n\) times.

3

\[=n\bar x-n\bar x\]

\(\bar x=\frac1n\sum_{i=1}^n x_i\).

4

\[=0\]

The numerator:

1

\[\sum_{i=1}^n(y_i-\bar y)(x_i-\bar x)=\sum_{i=1}^n\left[y_i(x_i-\bar x)-\bar y(x_i-\bar x)\right]\]

2

\[=\sum_{i=1}^n y_i(x_i-\bar x)-\sum_{i=1}^n\bar y(x_i-\bar x)\]

3

\[=\sum_{i=1}^n y_i(x_i-\bar x)-\bar y\sum_{i=1}^n(x_i-\bar x)\]

\(\bar y\) has no index \(i\).

4

\[=\sum_{i=1}^n y_i(x_i-\bar x)-\bar y\cdot0\]

Helper result.

5

\[=\sum_{i=1}^n y_i(x_i-\bar x)\]

Check on the six observations: the terms \(y_i(x_i-\bar x)\) are \(770610-350622.333+337310-296569.333+268180-550333.333\). Their sum, \(178575\), is \(S_{xy}\).

The split into \(\sum w_iy_i\):

1

\[\hat\beta_1=\frac{\sum_{i=1}^n y_i(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

2

\[=\sum_{i=1}^n\frac{y_i(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

The denominator has no index \(i\).

3

\[=\sum_{i=1}^n\frac{(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\,y_i\]

4

\[=\sum_{i=1}^n w_iy_i\]

Definition of \(w_i\). ∎

### 02.5 The sampling distribution of \(\hat\beta_1\) Slides p.13

**What** Slides p.13

Properties of \(\hat\beta_1\) · Lecture 3 · p.13 (slide 8/25) Hence \(\hat\beta_1\) is a linear combination of independent Normals! \[\Longrightarrow\ \hat\beta_1\sim N\Big(\sum_{i=1}^n w_i(\beta_0+\beta_1x_i),\ \sigma^2\sum_{i=1}^n w_i^2\Big)\]

Sampling distribution: the distribution of an estimator over all possible samples.

Expectation \(E[\cdot]\): the mean of a random variable.

Rule: a linear combination of independent Normals is Normal. If \(y_i\overset{indep}{\sim}N(\mu_i,\sigma_i^2)\) and the \(a_i\) are constants, then \(\sum a_iy_i\sim N(\sum a_i\mu_i,\ \sum a_i^2\sigma_i^2)\).

**How** Added

Write the distribution of a linear combination

- Write the estimator as \(\sum a_iy_i\), with no \(y\) in any \(a_i\) (for \(\hat\beta_1\), \(a_i=w_i\)).
- Make sure that the \(y_i\) are independent and Normal.
- Write each mean \(\mu_i\) and variance \(\sigma_i^2\). For SLR, \(\mu_i=\beta_0+\beta_1x_i\) and \(\sigma_i^2=\sigma^2\).
- Calculate the mean \(\sum a_i\mu_i\).
- Calculate the variance \(\sum a_i^2\sigma_i^2\).
- Write \(N(\text{mean},\ \text{variance})\).

**Self-check:** The variance uses \(w_i^2\). The mean uses \(w_i\). The variance is positive.

**Example · Six head sizes with supposed parameters** Added

The true parameters are unknown. Suppose they equal the brainhead estimates:

\(\beta_0=335.4323150\) and \(\beta_1=0.2608207\) (Lecture 2 · p.38).

\(\sigma=72.35\), the \(\hat\sigma\) of Slides p.45.

The \(x_i\) and \(w_i\) are the six values of Section 02.4.

Steps 1–3: \(a_i=w_i\), and \(\mu_i=\beta_0+\beta_1x_i\). Observation 1:

1

\[\mu_1=335.4323150+0.2608207\times4512\]

2

\[=335.4323150+1176.8229984\]

3

\[=1512.2553\]

\(\mu_1,\dots,\mu_6=1512.2553,\ 1310.3801,\ 1446.7893,\ 1320.5521,\ 1424.8804,\ 1270.4745\): the fitted values on Lecture 2 · p.38.

Step 4:

1

\[\sum w_i\mu_i=(7.7276\times10^{-4})(1512.2553)+\dots+(-6.4951\times10^{-4})(1270.4745)\]

2

\[=1.16861-0.54350+0.56086-0.46870+0.36873-0.82518\]

3

\[=0.26082\]

Step 5:

1

\[\sum w_i^2=5.9716\times10^{-7}+1.7203\times10^{-7}+1.5028\times10^{-7}+1.2597\times10^{-7}+0.66967\times10^{-7}+4.2186\times10^{-7}\]

2

\[=1.5343\times10^{-6}\]

3

\[\sigma^2\sum w_i^2=72.35^2\times1.5343\times10^{-6}\]

4

\[=5234.5225\times1.5343\times10^{-6}\]

5

\[=0.00803\]

Step 6:

For these six head sizes, \(\hat\beta_1\sim N(0.26082,\ 0.00803)\).

The mean equals the supposed \(\beta_1=0.2608207\). Section 02.6 shows that this is always true.

Figure 2-2 uses all 236 head sizes and the same supposed parameters. A computer made 10000 new sets of \(y\) from the model. Each set gives one \(\hat\beta_1=\sum w_iy_i\).

[figure]
Figure 2-2 (Added): histogram of 10000 simulated \(\hat\beta_1\). The shape is the Normal bell. The center is near the supposed \(\beta_1\) (orange line).

**Why** Slides p.13

The rule gives the Normal shape. The chains give the mean and the variance.

The mean:

1

\[E[\hat\beta_1]=E\Big[\sum_{i=1}^n w_iy_i\Big]\]

Section 02.4.

2

\[=\sum_{i=1}^n w_iE[y_i]\]

Linearity of expectation; each \(w_i\) is a constant.

3

\[=\sum_{i=1}^n w_i(\beta_0+\beta_1x_i)\]

Model: \(E[y_i]=\beta_0+\beta_1x_i\).

The variance:

1

\[\mathrm{Var}[\hat\beta_1]=\mathrm{Var}\Big[\sum_{i=1}^n w_iy_i\Big]\]

2

\[=\sum_{i=1}^n\mathrm{Var}[w_iy_i]\]

The \(y_i\) are independent.

3

\[=\sum_{i=1}^n w_i^2\,\mathrm{Var}[y_i]\]

\(\mathrm{Var}[aY]=a^2\mathrm{Var}[Y]\).

4

\[=\sum_{i=1}^n w_i^2\sigma^2\]

Model: \(\mathrm{Var}[y_i]=\sigma^2\).

5

\[=\sigma^2\sum_{i=1}^n w_i^2\]

∎

### 02.6 The mean of \(\hat\beta_1\): unbiasedness Slides p.14–18

**What** Slides p.14–18

Mean of \(\hat\beta_1\) · Lecture 3 · p.14–18 (slide 9/25) \[\begin{aligned}E[\hat\beta_1]&=\sum_{i=1}^n w_i(\beta_0+\beta_1x_i)\\&=\sum_{i=1}^n\frac{(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}(\beta_0+\beta_1x_i)\\&=\beta_0\frac{\sum_{i=1}^n(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}+\beta_1\frac{\sum_{i=1}^n x_i(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\\&=0+\beta_1\frac{\sum_{i=1}^n(x_i-\bar x)(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\\&=\beta_1\end{aligned}\] Hence it is unbiased.

Over many repeated samples, the mean of \(\hat\beta_1\) is \(\beta_1\). One \(\hat\beta_1\) can still differ from \(\beta_1\).

Pages 14–18 build one slide, one line per page. The quote copies p.18.

**How** Added

Show that the linear estimator \(\sum w_iy_i\) is unbiased

- Write \(E[\hat\beta_1]=\sum w_iE[y_i]=\sum w_i(\beta_0+\beta_1x_i)\).
- Split the sum: \(\beta_0\sum w_i+\beta_1\sum w_ix_i\).
- Show \(\sum w_i=0\) with \(\sum(x_i-\bar x)=0\).
- Show \(\sum w_ix_i=1\): the numerator \(\sum x_i(x_i-\bar x)\) equals the denominator \(\sum(x_j-\bar x)^2\).
- Substitute: \(\beta_0\cdot0+\beta_1\cdot1=\beta_1\).

**Self-check:** The result contains no \(\beta_0\) and no \(x_i\).

**Example · Six head sizes with supposed parameters** Added

Data: Section 02.4, with the supposed \(\beta_0=335.4323150\) and \(\beta_1=0.2608207\).

Step 3: \(\sum w_i=0\) (check (2), Section 02.4). \(\beta_0\sum w_i=335.4323150\times0=0\).

Step 4: \(\sum w_ix_i=1\) (check (3), Section 02.4). \(\beta_1\sum w_ix_i=0.2608207\times1=0.2608207\).

Step 5: \(\sum w_i(\beta_0+\beta_1x_i)=0+0.2608207=0.2608207\), the supposed \(\beta_1\).

Section 02.5 got 0.26082 term by term. The results agree.

The 10000 simulated values of Figure 2-2 have mean 0.26063, near \(\beta_1=0.2608207\).

**Why** Slides p.14–18

Slides p.18 gives no reason for two steps: "\(=0\)", and the change from \(\sum x_i(x_i-\bar x)\) to \(\sum(x_i-\bar x)(x_i-\bar x)\).

Helper result: \(\sum x_i(x_i-\bar x)=\sum(x_i-\bar x)^2\).

1

\[\sum_{i=1}^n(x_i-\bar x)(x_i-\bar x)=\sum_{i=1}^n\left[x_i(x_i-\bar x)-\bar x(x_i-\bar x)\right]\]

2

\[=\sum_{i=1}^n x_i(x_i-\bar x)-\bar x\sum_{i=1}^n(x_i-\bar x)\]

\(\bar x\) has no index \(i\).

3

\[=\sum_{i=1}^n x_i(x_i-\bar x)-\bar x\cdot0\]

Helper result of Section 02.4.

4

\[=\sum_{i=1}^n x_i(x_i-\bar x)\]

Check on the six observations: the terms \(x_i(x_i-\bar x)\) are \(2272544-1010506+1076612.667-873746+704520.667-1517650\). Their sum, \(651775.333\), is \(S_{xx}\).

The main chain (p.18):

1

\[E[\hat\beta_1]=\sum_{i=1}^n w_i(\beta_0+\beta_1x_i)\]

Section 02.5. p.14.

2

\[=\sum_{i=1}^n\frac{(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}(\beta_0+\beta_1x_i)\]

Definition of \(w_i\). p.15.

3

\[=\sum_{i=1}^n\frac{\beta_0(x_i-\bar x)+\beta_1x_i(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

4

\[=\sum_{i=1}^n\frac{\beta_0(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}+\sum_{i=1}^n\frac{\beta_1x_i(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

5

\[=\beta_0\frac{\sum_{i=1}^n(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}+\beta_1\frac{\sum_{i=1}^n x_i(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

Constants have no index \(i\). p.16.

6

\[=\beta_0\frac{0}{\sum_{j=1}^n(x_j-\bar x)^2}+\beta_1\frac{\sum_{i=1}^n x_i(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

Helper result of Section 02.4.

7

\[=0+\beta_1\frac{\sum_{i=1}^n x_i(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

8

\[=0+\beta_1\frac{\sum_{i=1}^n(x_i-\bar x)(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

Helper result above. p.17.

9

\[=\beta_1\frac{\sum_{i=1}^n(x_i-\bar x)^2}{\sum_{j=1}^n(x_j-\bar x)^2}\]

10

\[=\beta_1\]

Same sum, different index letter. p.18. ∎

With Section 02.5: \(\hat\beta_1\sim N(\beta_1,\ \sigma^2\sum w_i^2)\).

### 02.7 Practice Added

**Q1.** A data set has three pairs: \((x_i,y_i)=(1,2),\ (3,3),\ (5,7)\). Calculate \(w_1,w_2,w_3\). Calculate \(\hat\beta_1=\sum w_iy_i\) and compare it with \(S_{xy}/S_{xx}\).

Answer

Step 1: \(\bar x=(1+3+5)/3=9/3=3\).

Step 2: \(x_i-\bar x=-2,\ 0,\ 2\). \(S_{xx}=(-2)^2+0^2+2^2=4+0+4=8\).

Step 3: \(w_1=-2/8=-0.25\), \(w_2=0/8=0\), \(w_3=2/8=0.25\).

Step 4: \(\sum w_iy_i=(-0.25)(2)+(0)(3)+(0.25)(7)=-0.5+0+1.75=1.25\).

Step 5: \(\bar y=(2+3+7)/3=12/3=4\), and \(y_i-\bar y=-2,\ -1,\ 3\). \(S_{xy}=(-2)(-2)+(-1)(0)+(3)(2)=4+0+6=10\). \(S_{xy}/S_{xx}=10/8=1.25\).

Self-check: \(\sum w_i=-0.25+0+0.25=0\). \(\sum w_ix_i=(-0.25)(1)+(0)(3)+(0.25)(5)=-0.25+0+1.25=1\).

**Q2.** Let \(w_i=\frac{(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\). Show that \(\sum_{i=1}^n w_i=0\) and \(\sum_{i=1}^n w_ix_i=1\).

Answer

1

\[\sum_{i=1}^n w_i=\frac{\sum_{i=1}^n(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

The denominator has no index \(i\).

2

\[=\frac{\sum_{i=1}^n x_i-n\bar x}{\sum_{j=1}^n(x_j-\bar x)^2}\]

3

\[=\frac{n\bar x-n\bar x}{\sum_{j=1}^n(x_j-\bar x)^2}\]

\(\sum x_i=n\bar x\).

4

\[=0\]

1

\[\sum_{i=1}^n w_ix_i=\frac{\sum_{i=1}^n x_i(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

2

\[=\frac{\sum_{i=1}^n x_i(x_i-\bar x)-\bar x\sum_{i=1}^n(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

The new term is \(\bar x\cdot0=0\).

3

\[=\frac{\sum_{i=1}^n(x_i-\bar x)(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\]

4

\[=1\]

**Q3.** Use the three \(x\) values of Q1. Suppose that \(\beta_0=1\), \(\beta_1=1\), and \(\sigma=2\). Write the sampling distribution of \(\hat\beta_1\). Which two parts of the model make \(\hat\beta_1\) exactly Normal?

Answer

Means: \(\mu_i=1+x_i\), and \(\mu_1=2\), \(\mu_2=4\), \(\mu_3=6\).

Mean of \(\hat\beta_1\): \(\sum w_i\mu_i=(-0.25)(2)+(0)(4)+(0.25)(6)=-0.5+0+1.5=1=\beta_1\).

\(\sum w_i^2=0.0625+0+0.0625=0.125\).

Variance of \(\hat\beta_1\): \(\sigma^2\sum w_i^2=4\times0.125=0.5\).

Result: \(\hat\beta_1\sim N(1,\ 0.5)\).

(1) Each \(y_i\) is Normal. (2) The \(y_i\) are independent. With constant \(w_i\), \(\sum w_iy_i\) is a linear combination of independent Normals.

## 03 · Variance and distribution of \(\hat\beta_1\) and \(\hat\beta_0\)

Plan · Slides p.19–24

Step 1: Calculate \(\mathrm{Var}[\hat\beta_1]=\sigma^2/S_{xx}\) (Slides p.19–23).

Step 2: State the distribution of \(\hat\beta_1\) (Slides p.24, top).

Step 3: State the distribution of \(\hat\beta_0\) (Slides p.24, bottom).

Step 4: Practice questions (Added).

Model (Slides p.12): \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\ \sigma^2)\), \(i=1,\dots,n\).

\(\hat\beta_1=\sum_{i=1}^n w_iy_i\), with \(w_i=\dfrac{x_i-\bar x}{\sum_{j=1}^n(x_j-\bar x)^2}\) (Slides p.12). Each \(w_i\) is a constant.

From Unit 02: \(\mathrm{Var}[\hat\beta_1]=\sigma^2\sum_{i=1}^n w_i^2\) (Slides p.13) and \(E[\hat\beta_1]=\beta_1\) (Slides p.18).

Examples use the first 6 brainhead head sizes (Lecture 2 · p.10). Added

| \(i\) | 1 | 2 | 3 | 4 | 5 | 6

| \(x_i\) (cm³) | 4512 | 3738 | 4261 | 3777 | 4177 | 3585

The formulas use only \(x\) and \(\sigma\). We suppose \(\sigma=72.35\) g (\(\hat\sigma\) on Slides p.45), so \(\sigma^2=72.35^2=5234.5225\).

### 03.1 Variance of \(\hat\beta_1\) Slides p.19–23

**What** Slides p.19–23

Variance of \(\hat\beta_1\) · Lecture 3 · p.19–23 \[\begin{aligned} \mathrm{Var}[\hat\beta_1]&=\sigma^2\sum_{i=1}^n w_i^2\\ &=\sigma^2\sum_{i=1}^n\left[\frac{(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\right]^2\\ &=\sigma^2\sum_{i=1}^n\frac{(x_i-\bar x)^2}{\left[\sum_{j=1}^n(x_j-\bar x)^2\right]^2}\\ &=\sigma^2\frac{\sum_{i=1}^n(x_i-\bar x)^2}{\left[\sum_{j=1}^n(x_j-\bar x)^2\right]^2}\\ &=\sigma^2\frac{1}{\sum_{j=1}^n(x_j-\bar x)^2}=\frac{\sigma^2}{S_{xx}} \end{aligned}\]

Slides p.23 writes \(\sum_{j=1}^n(x_i-\bar x)^2\). The index is \(j\), so the correct term is \(x_j\).

Larger \(\sigma^2\) (points farther from the line): larger variance.

Larger \(S_{xx}\) (wider spread of \(x\)): smaller variance.

Each term of \(S_{xx}\) is 0 or more. An added observation cannot make \(S_{xx}\) smaller.

**How** Added

Calculate \(\mathrm{Var}[\hat\beta_1]\)

- Calculate \(\bar x=\frac1n\sum_{i=1}^n x_i\).
- Calculate each \(x_j-\bar x\).
- Square each value. Add the squares to get \(S_{xx}\).
- Get \(\sigma^2\) from the question.
- Calculate \(\mathrm{Var}[\hat\beta_1]=\sigma^2/S_{xx}\).
- Take the square root to get the standard deviation \(\sigma/\sqrt{S_{xx}}\).

**Self-check:** With \(w_i=(x_i-\bar x)/S_{xx}\), \(\sum_{i=1}^n w_i^2=1/S_{xx}\).

**Example · Six head sizes** Added

1

Mean of \(x\) Step 1

\[\bar x=\frac{4512+3738+4261+3777+4177+3585}{6}=\frac{24050}{6}=4008.3333\]

2

Distances from \(\bar x\) Step 2

\[503.6667,\quad -270.3333,\quad 252.6667,\quad -231.3333,\quad 168.6667,\quad -423.3333\]

\(x_1-\bar x=4512-4008.3333=503.6667\).

3

Squares and their sum Step 3

\[253680.1111,\quad 73080.1111,\quad 63840.4444,\quad 53515.1111,\quad 28448.4444,\quad 179211.1111\]

\[S_{xx}=253680.1111+73080.1111+63840.4444+53515.1111+28448.4444+179211.1111=651775.3333\]

Rounded squares give 651775.3332; exact is 651775.3333.

4

Weights and the self-check Self-check

\[w_1=\frac{503.6667}{651775.3333}=7.7276\times10^{-4},\qquad w_1^2=5.9716\times10^{-7}\]

\[w_2^2=1.7203\times10^{-7},\ w_3^2=1.5028\times10^{-7},\ w_4^2=1.2597\times10^{-7},\ w_5^2=6.6967\times10^{-8},\ w_6^2=4.2186\times10^{-7}\]

\[\sum_{i=1}^6 w_i^2=1.5343\times10^{-6},\qquad \frac{1}{S_{xx}}=\frac{1}{651775.3333}=1.5343\times10^{-6}\]

**Self-check:** The two values are equal.

5

Variance Steps 4–5

\[\mathrm{Var}[\hat\beta_1]=\frac{\sigma^2}{S_{xx}}=\frac{5234.5225}{651775.3333}=0.0080312\]

6

Standard deviation Step 6

\[\frac{\sigma}{\sqrt{S_{xx}}}=\sqrt{0.0080312}=0.089617\]

The standard deviation is 0.089617 g/cm³. Unit 02 got the same variance, 0.00803, from \(\sigma^2\sum w_i^2\). ▲

With all 236 observations, Slides p.45 prints 0.01307. Slides p.45

The full data have a much larger \(S_{xx}\), so the value is much smaller.

Slides p.45 uses \(\hat\sigma=72.35\) for \(\sigma\). Unit 04 calls this the standard error, \(\mathrm{SE}(\hat\beta_1)=\hat\sigma/\sqrt{S_{xx}}\).

**Why** Slides p.19–23

The \(y_i\) are independent, so \(\mathrm{Var}[\sum w_iy_i]=\sum w_i^2\mathrm{Var}[y_i]=\sigma^2\sum w_i^2\).

1

\[\mathrm{Var}[\hat\beta_1]=\sigma^2\sum_{i=1}^n w_i^2\]

Slides p.19; Unit 02.

2

\[=\sigma^2\sum_{i=1}^n\left[\frac{(x_i-\bar x)}{\sum_{j=1}^n(x_j-\bar x)^2}\right]^2\]

Put in \(w_i\). Slides p.20.

3

\[=\sigma^2\sum_{i=1}^n\frac{(x_i-\bar x)^2}{\left[\sum_{j=1}^n(x_j-\bar x)^2\right]^2}\]

Square top and bottom. Slides p.21.

4

\[=\sigma^2\frac{\sum_{i=1}^n(x_i-\bar x)^2}{\left[\sum_{j=1}^n(x_j-\bar x)^2\right]^2}\]

Denominator has no \(i\). Slides p.22.

5

\[=\sigma^2\frac{\sum_{j=1}^n(x_j-\bar x)^2}{\left[\sum_{j=1}^n(x_j-\bar x)^2\right]^2}\]

Rename the index \(i\) to \(j\).

6

\[=\sigma^2\frac{1}{\sum_{j=1}^n(x_j-\bar x)^2}\]

Cancel one factor. Slides p.23.

7

\[=\frac{\sigma^2}{S_{xx}}\]

Definition of \(S_{xx}\). ∎

### 03.2 Distribution of \(\hat\beta_1\) Slides p.24

**What** Slides p.24

Distribution of \(\hat\beta_1\) · Lecture 3 · p.24 So the distribution of \(\hat\beta_1\) is: \[\hat\beta_1\sim N\Big(\beta_1,\ \frac{\sigma^2}{S_{xx}}\Big)\]

\(\sim\) means "has the distribution".

The second item in \(N(\cdot,\cdot)\) is the variance, not the standard deviation.

**How** Added

Write the distribution of \(\hat\beta_1\)

- Write \(\beta_1\) as the mean, because \(E[\hat\beta_1]=\beta_1\).
- Calculate \(S_{xx}\) (Section 03.1).
- Write \(\sigma^2/S_{xx}\) as the variance.
- Write \(N\) as the family (Slides p.12–13).

**Self-check:** \(\hat\beta_1\) is in g/cm³, so the variance is in (g/cm³)².

**Example · Six head sizes** Added

\[\hat\beta_1\sim N\Big(\beta_1,\ \frac{5234.5225}{651775.3333}\Big)=N\big(\beta_1,\ 0.0080312\big)\]

The standard deviation is \(\sqrt{0.0080312}=0.089617\). 95% of the values of \(\hat\beta_1\) are within \(1.96\times0.089617=0.175649\) of \(\beta_1\). ▲

Figure 3-1 uses the numbers of Slides p.45: \(\hat\beta_1=0.26082\), estimated standard deviation 0.01307. Added · Slides p.45

Tick marks are \(0.26082+k\times0.01307\), \(k=-3,\dots,3\). For example, \(0.26082-3\times0.01307=0.26082-0.03921=0.22161\).

[figure]
Figure 3-1 (Added): estimated sampling distribution \(N(0.26082,\ 0.01307^2)\) of \(\hat\beta_1\), 236 brainhead observations (Slides p.45). Orange: center. Green: ±1 standard deviation. Almost all area is between 0.22 and 0.30, far from 0.

**Why** Added

1

\[\hat\beta_1=\sum_{i=1}^n w_iy_i,\qquad y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\]

Slides p.12.

2

\[\hat\beta_1\sim N\Big(\sum_{i=1}^n w_i(\beta_0+\beta_1x_i),\ \sigma^2\sum_{i=1}^n w_i^2\Big)\]

Linear combination of independent Normals. Slides p.13.

3

\[\hat\beta_1\sim N\Big(\beta_1,\ \sigma^2\sum_{i=1}^n w_i^2\Big)\]

\(\sum w_i(\beta_0+\beta_1x_i)=\beta_1\). Slides p.18.

4

\[\hat\beta_1\sim N\Big(\beta_1,\ \frac{\sigma^2}{S_{xx}}\Big)\]

Section 03.1. ∎

### 03.3 Distribution of \(\hat\beta_0\) Slides p.24

**What** Slides p.24

Distribution of \(\hat\beta_0\) · Lecture 3 · p.24 Question: what about \(\hat\beta_0\)? \[\hat\beta_0\sim N\Big(\beta_0,\ \sigma^2\Big(\frac1n+\frac{\bar x^2}{S_{xx}}\Big)\Big)\]

\(\hat\beta_0\) is Normal and unbiased.

\(\frac1n\) decreases when \(n\) increases.

\(\frac{\bar x^2}{S_{xx}}\) increases when \(\bar x\) is farther from 0. \(\beta_0\) is the mean of \(y\) at \(x=0\).

**How** Added

Calculate \(\mathrm{Var}[\hat\beta_0]\)

- Calculate \(n\), \(\bar x\), and \(S_{xx}\) (Section 03.1).
- Calculate \(\frac1n\).
- Calculate \(\bar x^2\), then \(\frac{\bar x^2}{S_{xx}}\).
- Add the two terms.
- Multiply the sum by \(\sigma^2\) to get the variance.
- Take the square root to get the standard deviation.

**Self-check:** The sum is at least \(\frac1n\), because \(\frac{\bar x^2}{S_{xx}}\geq0\).

**Example · Six head sizes** Added

1

Basic values Step 1

\[n=6,\qquad \bar x=4008.3333,\qquad S_{xx}=651775.3333\]

2

First term Step 2

\[\frac1n=\frac16=0.166667\]

3

Second term Step 3

\[\bar x^2=4008.3333^2=16066736.1111\]

\[\frac{\bar x^2}{S_{xx}}=\frac{16066736.1111}{651775.3333}=24.650727\]

4

Sum Step 4

\[\frac1n+\frac{\bar x^2}{S_{xx}}=0.166667+24.650727=24.817394\]

**Self-check:** 24.817394 > 0.166667.

5

Multiply by \(\sigma^2\) Step 5

\[\mathrm{Var}[\hat\beta_0]=5234.5225\times24.817394=129907.21\]

6

Square root Step 6

\[\sigma\sqrt{\frac1n+\frac{\bar x^2}{S_{xx}}}=\sqrt{129907.21}=360.43\]

\(\bar x\) is far from 0, so the second term is almost all of the sum. The standard deviation of \(\hat\beta_0\) is 360.43 g. ▲

For all 236 observations, Slides p.45 prints 47.77644 (with \(\hat\sigma\) for \(\sigma\)): the standard error of \(\hat\beta_0\). Slides p.45

**Why** Added

The slides give no derivation. \(\hat\beta_0=\bar y-\hat\beta_1\bar x\) is also a linear combination of the \(y_i\). It is Normal with mean \(\beta_0\), as for \(\hat\beta_1\).

Optional — not on the slides

Outline only. For the exam, use the slide result.

Covariance \(\mathrm{Cov}[U,V]=E[(U-E[U])(V-E[V])]\) measures how two random variables change together.

\(\mathrm{Var}[U-V]=\mathrm{Var}[U]+\mathrm{Var}[V]-2\mathrm{Cov}[U,V]\).

\(\hat\beta_0=\bar y-\bar x\,\hat\beta_1\) gives \(\mathrm{Var}[\hat\beta_0]=\mathrm{Var}[\bar y]+\bar x^2\mathrm{Var}[\hat\beta_1]-2\bar x\,\mathrm{Cov}[\bar y,\hat\beta_1]\).

\(\mathrm{Var}[\bar y]=\sigma^2/n\), and \(\mathrm{Var}[\hat\beta_1]=\sigma^2/S_{xx}\).

\(\mathrm{Cov}[\bar y,\hat\beta_1]=\sum_{i=1}^n\frac1n w_i\sigma^2=\frac{\sigma^2}{n}\sum_{i=1}^n w_i=0\), because \(\sum_{i=1}^n(x_i-\bar x)=0\).

Together: \(\mathrm{Var}[\hat\beta_0]=\sigma^2\big(\frac1n+\frac{\bar x^2}{S_{xx}}\big)\). ∎

### 03.4 Practice Added

**Q1.** Use \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\), \(\hat\beta_1=\sum_{i=1}^n w_iy_i\), \(w_i=\frac{x_i-\bar x}{\sum_{j=1}^n(x_j-\bar x)^2}\). Show \(\mathrm{Var}[\hat\beta_1]=\sigma^2/S_{xx}\). Where does the derivation use independence?

Answer

\(\mathrm{Var}[\hat\beta_1]=\mathrm{Var}[\sum w_iy_i]=\sum\mathrm{Var}[w_iy_i]\). This step uses independence.

\(=\sum w_i^2\mathrm{Var}[y_i]=\sigma^2\sum w_i^2\).

\(=\sigma^2\sum_i\frac{(x_i-\bar x)^2}{[\sum_j(x_j-\bar x)^2]^2}=\sigma^2\frac{\sum_i(x_i-\bar x)^2}{[\sum_j(x_j-\bar x)^2]^2}=\sigma^2\frac{1}{\sum_j(x_j-\bar x)^2}=\frac{\sigma^2}{S_{xx}}\).

**Q2.** For the 6 observations, \(S_{xx}=651775.3333\) and \(\sigma=72.35\). A second study measures the same 6 head sizes, so each \(x_i\) occurs two times and \(n=12\). (a) Calculate the new \(S_{xx}\). (b) Calculate the new standard deviation of \(\hat\beta_1\).

Answer

(a) \(\bar x\) stays 4008.3333. Each square occurs two times: \(S_{xx}=2\times651775.3333=1303550.6667\).

(b) \(\sigma^2/S_{xx}=5234.5225/1303550.6667=0.0040156\). \(\sqrt{0.0040156}=0.063369\).

This is the old value divided by \(\sqrt2\): \(0.089617/1.41421=0.063369\).

**Q3.** For the 6 observations, \(n=6\), \(\bar x=4008.3333\), \(S_{xx}=651775.3333\). (a) Calculate \(\frac1n+\frac{\bar x^2}{S_{xx}}\). (b) Which term gives most of \(\mathrm{Var}[\hat\beta_0]\)? Why?

Answer

(a) \(\frac1n=0.166667\). \(\frac{\bar x^2}{S_{xx}}=16066736.1111/651775.3333=24.650727\). Sum: \(0.166667+24.650727=24.817394\).

(b) The second term: \(24.650727/24.817394=0.99328\), about 99%. The mean head size 4008.3333 is far from \(x=0\), where the intercept is.

## 04 · Confidence interval for \(\beta_1\): known \(\sigma\), unknown \(\sigma\) (t distribution), and standard error

Plan · Slides p.25–35

Step 1 (Slides p.25–26): Standardize \(\hat\beta_1\) to get \(Z\sim N(0,1)\).

Step 2 (Slides p.27–30): Known \(\sigma\): solve \(P(-1.96\le Z\le1.96)=0.95\) for \(\beta_1\).

Step 3 (Slides p.31–33): Unknown \(\sigma\): use \(\hat\sigma\). The new quantity has distribution \(t_{(n-2)}\).

Step 4 (Slides p.34): Replace 1.96 with the t quantile \(q=t_{1-\alpha/2,n-2}\).

Step 5 (Slides p.35): Define \(\mathrm{SD}(\hat\beta_1)\) and \(\mathrm{SE}(\hat\beta_1)\). Write the interval as \(\hat\beta_1\pm t_{1-\alpha/2,n-2}\mathrm{SE}(\hat\beta_1)\).

Unit 05 calculates the brainhead interval (Slides p.36–37).

Start point (results of Units 01–03) · Added

Model (Slides p.3): \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), with \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\), \(i=1,\dots,n\).

Unit 03 (Slides p.24): \(\hat\beta_1\sim N\!\left(\beta_1,\dfrac{\sigma^2}{S_{xx}}\right)\), with \(S_{xx}=\sum_{i=1}^n(x_i-\bar x)^2\).

Slides p.8: \(\hat\sigma^2=\dfrac{1}{n-2}\sum_{i=1}^ne_i^2\), with \(e_i=y_i-\hat y_i\) and \(\hat y_i=\hat\beta_0+\hat\beta_1x_i\).

\(N(0,1)\) is the standard Normal distribution: mean 0, variance 1.

Brainhead data: Lecture 2 · p.38 gives \(\hat\beta_1=0.2608207\). Slides p.45 give \(\hat\sigma=72.35\) on 234 degrees of freedom (\(n=236\)) and \(\mathrm{SE}(\hat\beta_1)=0.01307\).

Four-point data set (Added): \((x_i,y_i)\) = (1, 2), (2, 3), (3, 5), (4, 6), \(n=4\). \(\bar x=10/4=2.5\), \(\bar y=16/4=4\). Deviations: \(x_i-\bar x=-1.5,-0.5,0.5,1.5\) and \(y_i-\bar y=-2,-1,1,2\). \(S_{xy}=3+0.5+0.5+3=7\), \(S_{xx}=2.25+0.25+0.25+2.25=5\). Estimates: \(\hat\beta_1=7/5=1.4\), \(\hat\beta_0=4-1.4\times2.5=0.5\).

### 04.1 Standardize \(\hat\beta_1\) Slides p.25–26

Slides p.25 is the section page "Confidence Interval for \(\beta_1\)". It has no formulas.

**What** Slides p.26

Confidence interval for β1 · Lecture 3 · p.26 \[\hat\beta_1\sim N\!\left(\beta_1,\frac{\sigma^2}{S_{xx}}\right)\quad\Longrightarrow\quad\frac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}\sim N(0,1)\]

Confidence interval (CI): an interval from the data that contains the unknown parameter with a given probability, for example 95%.

Standardize: subtract the mean, then divide by the SD. The result has mean 0 and SD 1.

The SD of \(\hat\beta_1\) is \(\sqrt{\sigma^2/S_{xx}}=\sigma/\sqrt{S_{xx}}\). Call the result \(Z=\dfrac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}\).

The distribution of \(\hat\beta_1\) contains the unknown \(\beta_1\) and \(\sigma\). \(N(0,1)\) contains no unknown values. Its known probabilities give statements about \(\beta_1\).

**How** Added

Write \(Z\) for a data set

- **Mean.** The mean of \(\hat\beta_1\) is \(\beta_1\) (Unit 02).
- **SD.** Take the square root of \(\sigma^2/S_{xx}\): \(\sigma/\sqrt{S_{xx}}\).
- **\(\sqrt{S_{xx}}\).** ① Calculate \(\bar x\). ② Calculate each \((x_i-\bar x)^2\). ③ Add them. ④ Take the square root.
- **Write \(Z\).** Numerator \(\hat\beta_1-\beta_1\). Denominator \(\sigma/\sqrt{S_{xx}}\).

Self-check: the denominator contains \(\sqrt{S_{xx}}\), not \(S_{xx}\). It is an SD, not a variance.

**Example · Four-point data set** Added

1

Mean of \(x\) How step 3 ①

\[\bar x=\frac{1+2+3+4}{4}=\frac{10}{4}=2.5\]

2

Squared distances How step 3 ②

\[(1-2.5)^2=2.25,\quad(2-2.5)^2=0.25,\quad(3-2.5)^2=0.25,\quad(4-2.5)^2=2.25\]

3

\(S_{xx}\) and its square root How step 3 ③④

\[S_{xx}=2.25+0.25+0.25+2.25=5,\qquad\sqrt{S_{xx}}=\sqrt5=2.236068\]

4

SD of \(\hat\beta_1\) How step 2

\[\frac{\sigma}{\sqrt{S_{xx}}}=\frac{\sigma}{2.236068}=0.447214\,\sigma\]

5

Write \(Z\) How step 4

\[Z=\frac{1.4-\beta_1}{0.447214\,\sigma}\sim N(0,1)\]

Section 04.3 removes \(\sigma\). ▲

**Why** Added

A linear transformation multiplies by a constant and adds a constant. A linear transformation of a Normal variable is Normal.

1

\[Z=\frac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}=\frac{\sqrt{S_{xx}}}{\sigma}\hat\beta_1-\frac{\sqrt{S_{xx}}}{\sigma}\beta_1\]

**Linear transformation:** \(Z=a\hat\beta_1+b\), \(a=\sqrt{S_{xx}}/\sigma\), \(b=-\sqrt{S_{xx}}\beta_1/\sigma\). \(Z\) is Normal.

2

\[E[Z]=\frac{\sqrt{S_{xx}}}{\sigma}E[\hat\beta_1]-\frac{\sqrt{S_{xx}}}{\sigma}\beta_1\]

\(E[aW+b]=aE[W]+b\).

3

\[=\frac{\sqrt{S_{xx}}}{\sigma}\beta_1-\frac{\sqrt{S_{xx}}}{\sigma}\beta_1=0\]

\(E[\hat\beta_1]=\beta_1\).

4

\[\mathrm{Var}[Z]=\left(\frac{\sqrt{S_{xx}}}{\sigma}\right)^2\mathrm{Var}[\hat\beta_1]\]

\(\mathrm{Var}[aW+b]=a^2\mathrm{Var}[W]\).

5

\[=\frac{S_{xx}}{\sigma^2}\cdot\frac{\sigma^2}{S_{xx}}\]

\(\mathrm{Var}[\hat\beta_1]=\sigma^2/S_{xx}\).

6

\[=1\quad\Longrightarrow\quad Z\sim N(0,1)\]

∎

### 04.2 95% CI for \(\beta_1\) with known \(\sigma\) Slides p.27–30

**What** Slides p.27–30

95% CI for β1 — Known σ · Lecture 3 · p.27–30 Suppose \(\sigma\) is known. \[0.95=P(-1.96\le Z\le1.96)\] \[0.95=P\!\left(\hat\beta_1-1.96\frac{\sigma}{\sqrt{S_{xx}}}\le\beta_1\le\hat\beta_1+1.96\frac{\sigma}{\sqrt{S_{xx}}}\right)\] So a 95% CI for \(\beta_1\) is \(\hat\beta_1\pm1.96\dfrac{\sigma}{\sqrt{S_{xx}}}\)
I.e. the random interval \(\hat\beta_1\pm1.96\dfrac{\sigma}{\sqrt{S_{xx}}}\) will cover the true \(\beta_1\) 95% of the time.

\(P(A)\): the probability of event \(A\), a number from 0 to 1.

Quantile: for a random variable \(W\) and a probability \(p\), the number \(q\) with \(P(W\le q)=p\).

1.96 is the 0.975 quantile of \(N(0,1)\): \(P(Z\le1.96)=0.975\). The exact value is 1.959964.

\(a\pm b\): the interval from \(a-b\) to \(a+b\).

Random interval: its end points come from \(\hat\beta_1\) and change with the data. \(\beta_1\) is fixed.

\(N(0,1)\) is symmetric about 0. Each tail outside \(\pm1.96\) has area 0.025. "95%" is a property of the method: over many samples, about 95% of the intervals contain \(\beta_1\).

**How** Added

95% CI with known σ

- **Quantile.** Use 1.96.
- **SD.** Divide \(\sigma\) by \(\sqrt{S_{xx}}\).
- **Half-width.** Multiply: \(1.96\times\sigma/\sqrt{S_{xx}}\).
- **Interval.** \(\hat\beta_1-\) half-width to \(\hat\beta_1+\) half-width.

Self-check: the center is \(\hat\beta_1\). The area of \(N(0,1)\) between \(-1.96\) and 1.96 is 0.950004.

**Example · Four-point data set with a supposed \(\sigma\)** Added

In practice, \(\sigma\) is unknown. For this example only, suppose \(\sigma=0.3\).

1

Quantile How step 1

\[q=1.96\]

2

SD of \(\hat\beta_1\) How step 2

\[\frac{\sigma}{\sqrt{S_{xx}}}=\frac{0.3}{2.236068}=0.134164\]

\(\sqrt{S_{xx}}\) from Section 04.1.

3

Half-width How step 3

\[1.96\times0.134164=0.262962\]

4

Interval How step 4

\[1.4-0.262962=1.137038,\qquad1.4+0.262962=1.662962\]

\[1.4\pm0.262962=(1.137038,\ 1.662962)\]

▲

Unit 05 shows the meaning of "95% of the time" with the figure on Slides p.39.

**Why** Slides p.27–30

Each step does the same operation on all three parts. The probability stays 0.95.

1

\[0.95=P(-1.96\le Z\le1.96)\]

\(P(Z\le1.96)=0.975\). \(N(0,1)\) is symmetric.

2

\[0.95=P\!\left(-1.96\le\frac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}\le1.96\right)\]

Definition of \(Z\).

3

\[0.95=P\!\left(-1.96\frac{\sigma}{\sqrt{S_{xx}}}\le\hat\beta_1-\beta_1\le1.96\frac{\sigma}{\sqrt{S_{xx}}}\right)\]

Multiply by \(\sigma/\sqrt{S_{xx}}>0\). The signs stay.

4

\[0.95=P\!\left(-1.96\frac{\sigma}{\sqrt{S_{xx}}}\le\beta_1-\hat\beta_1\le1.96\frac{\sigma}{\sqrt{S_{xx}}}\right)\]

Multiply by \(-1\). The signs reverse. The bounds are symmetric.

5

\[0.95=P\!\left(\hat\beta_1-1.96\frac{\sigma}{\sqrt{S_{xx}}}\le\beta_1\le\hat\beta_1+1.96\frac{\sigma}{\sqrt{S_{xx}}}\right)\]

Last line of Slides p.30. ∎

### 04.3 Unknown \(\sigma\): use \(\hat\sigma\), get the t distribution Slides p.31–33

**What** Slides p.31–33

95% CI for β1 — Unknown σ · Lecture 3 · p.31–33 In practice, \(\sigma\) is unknown and must be estimated. We have:
1. \(Z=\dfrac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}\sim N(0,1)\)
2. \(V=\dfrac{1}{\sigma^2}\sum_{i=1}^ne_i^2\sim\chi^2_{(n-2)}\)
3. It can be shown that \(Z\) and \(V\) are independent
Note that for independent \(Z\sim N(0,1)\) and \(V\sim\chi^2_\nu\), \(\Longrightarrow\dfrac{Z}{\sqrt{V/\nu}}\sim t_\nu\) \[\Longrightarrow\frac{Z}{\sqrt{V/\nu}}=\frac{\frac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}}{\sqrt{\frac{1}{\sigma^2}\sum_{i=1}^ne_i^2/(n-2)}}\sim t_{(n-2)}\] \[\frac{\frac{\hat\beta_1-\beta_1}{1/\sqrt{S_{xx}}}}{\sqrt{\sum_{i=1}^ne_i^2/(n-2)}}\sim t_{(n-2)}\] \[\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{(n-2)}\]

Degrees of freedom (df) \(\nu\): the parameter that sets the shape of a \(\chi^2\) or t distribution. For SLR, \(\nu=n-2\).

t distribution \(t_\nu\): the distribution of \(Z/\sqrt{V/\nu}\), with independent \(Z\sim N(0,1)\) and \(V\sim\chi^2_\nu\).

\(t_\nu\) is bell-shaped and symmetric about 0, with thicker tails than \(N(0,1)\). When \(\nu\) increases, it comes nearer to \(N(0,1)\).

The slides do not prove item 3.

\(Z\) contains the unknown \(\sigma\). With \(\hat\sigma\) for \(\sigma\), the denominator is random, and the distribution changes to \(t_{(n-2)}\). This distribution has no unknown values.

**How** Added

Calculate \(\hat\sigma/\sqrt{S_{xx}}\) and the degrees of freedom

- **Fit.** Calculate \(\hat\beta_0\), \(\hat\beta_1\), and each \(\hat y_i\).
- **Residual sum of squares.** ① Calculate \(e_i=y_i-\hat y_i\). ② Square each. ③ Add them.
- **df.** \(\nu=n-2\).
- **\(\hat\sigma\).** \(\hat\sigma^2=\sum e_i^2/(n-2)\). Take the square root.
- **Denominator.** Divide \(\hat\sigma\) by \(\sqrt{S_{xx}}\). Then \((\hat\beta_1-\beta_1)/(\hat\sigma/\sqrt{S_{xx}})\sim t_{(n-2)}\).

Self-check: divide by \(n-2\), not \(n\). The residuals add to 0.

**Example · Four-point data set** Added

1

Fitted values How step 1

\[\hat y_i=0.5+1.4x_i:\quad0.5+1.4=1.9,\quad0.5+2.8=3.3,\quad0.5+4.2=4.7,\quad0.5+5.6=6.1\]

2

Residuals How step 2 ①

\[e_1=2-1.9=0.1,\quad e_2=3-3.3=-0.3,\quad e_3=5-4.7=0.3,\quad e_4=6-6.1=-0.1\]

Self-check: \(0.1-0.3+0.3-0.1=0\).

3

Residual sum of squares How step 2 ②③

\[\sum_{i=1}^4e_i^2=0.01+0.09+0.09+0.01=0.2\]

4

df How step 3

\[\nu=n-2=4-2=2\]

5

\(\hat\sigma\) How step 4

\[\hat\sigma^2=\frac{0.2}{2}=0.1,\qquad\hat\sigma=\sqrt{0.1}=0.316228\]

6

t quantity How step 5

\[\frac{\hat\sigma}{\sqrt{S_{xx}}}=\frac{0.316228}{2.236068}=0.141421\]

\[\frac{1.4-\beta_1}{0.141421}\sim t_{(2)}\]

\(\beta_1\) is the only unknown. ▲

Brainhead data: \(\hat\sigma=72.35\) on 234 df (Slides p.45). The t quantity has distribution \(t_{(234)}\).

**Why** Slides p.31–33

1

\[\frac{Z}{\sqrt{V/(n-2)}}\sim t_{(n-2)}\]

**Definition of t** with items 1–3 of the slide.

2

\[\frac{Z}{\sqrt{V/(n-2)}}=\frac{\frac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}}{\sqrt{\frac{1}{\sigma^2}\sum_{i=1}^ne_i^2/(n-2)}}\]

Definitions of \(Z\) and \(V\).

3

\[=\frac{\frac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}}{\frac{1}{\sigma}\sqrt{\sum_{i=1}^ne_i^2/(n-2)}}\]

\(\sqrt{\frac{1}{\sigma^2}A}=\frac{1}{\sigma}\sqrt{A}\), because \(\sigma>0\).

4

\[=\frac{\sigma\cdot\frac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}}{\sqrt{\sum_{i=1}^ne_i^2/(n-2)}}\]

5

\[=\frac{\frac{\hat\beta_1-\beta_1}{1/\sqrt{S_{xx}}}}{\sqrt{\sum_{i=1}^ne_i^2/(n-2)}}\]

\(\sigma\) cancels. Second line of Slides p.32.

6

\[=\frac{\frac{\hat\beta_1-\beta_1}{1/\sqrt{S_{xx}}}}{\hat\sigma}\]

\(\hat\sigma=\sqrt{\sum_{i=1}^ne_i^2/(n-2)}\) (Slides p.8).

7

\[=\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{(n-2)}\]

Last line of Slides p.33. ∎

### 04.4 Interval with a t quantile \(q=t_{1-\alpha/2,n-2}\) Slides p.34

The steps are those of Section 04.2, with \(q\) for 1.96 and \(\hat\sigma\) for \(\sigma\).

**What** Slides p.34

95% CI for β1 — Unknown σ · Lecture 3 · p.34 So we can find some quantile \(q\) such that \[0.95=P\!\left(-q\le\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\le q\right)\] \[0.95=P\!\left(\hat\beta_1-q\frac{\hat\sigma}{\sqrt{S_{xx}}}\le\beta_1\le\hat\beta_1+q\frac{\hat\sigma}{\sqrt{S_{xx}}}\right)\] and construct a 95% CI for \(\beta_1\) is \(\hat\beta_1\pm q\dfrac{\hat\sigma}{\sqrt{S_{xx}}}\)
Often written \(t_{1-\alpha/2,n-2}\), as in: \(\hat\beta_1\pm t_{1-\alpha/2,n-2}\dfrac{\hat\sigma}{\sqrt{S_{xx}}}\)

\(\alpha\): the probability that the interval does not contain the true value. The confidence level is \(1-\alpha\). A 95% CI has \(\alpha=0.05\).

\(t_{1-\alpha/2,n-2}\): the \(1-\alpha/2\) quantile of \(t_{(n-2)}\). For a \(t_{(n-2)}\) variable \(T\), \(P(T\le t_{1-\alpha/2,n-2})=1-\alpha/2\).

For a 95% CI, \(\alpha/2=0.025\) and \(q=t_{0.975,n-2}\). Get it from a t table or software.

Each tail outside \(\pm q\) has area \(\alpha/2\). The t tails are thicker than the Normal tails. \(q\) is a little larger than 1.96, and the interval is a little wider.

**How** Added

Find \(t_{1-\alpha/2,n-2}\) and write the interval

- **\(\alpha\).** \(\alpha=1-\) confidence level. For 95%, \(\alpha=0.05\).
- **df.** df \(=n-2\).
- **\(q\).** Find the \(1-\alpha/2\) quantile of \(t_{(n-2)}\) (table or software).
- **Interval.** \(\hat\beta_1\pm q\,\hat\sigma/\sqrt{S_{xx}}\).

Self-check: ① For 95%, \(q\) is larger than 1.96. When df increases, \(q\) comes nearer to 1.96. ② \(P(T\le-q)=\alpha/2\).

**Example 1 · Brainhead data: compare \(q\) with 1.96** Added

1

\(\alpha\) and df How steps 1–2

\[\alpha=1-0.95=0.05,\qquad\alpha/2=0.025,\qquad\text{df}=236-2=234\]

2

t quantile How step 3

\[q=t_{0.975,234}=1.970154\]

3

Compare with the Normal value Self-check ①

\[1.970154-1.959964=0.010190\]

Large df makes the difference small.

4

Tail area Self-check ②

\[P(T\le-1.970154)=0.025\]

▲

Values of \(t_{0.975,\nu}\): df = 2: \(q=4.302653\). df = 5: \(q=2.570582\). df = 10: \(q=2.228139\).

df = 30: \(q=2.042272\). df = 234: \(q=1.970154\). When df increases, \(q\) comes nearer to 1.959964.

[figure]
Figure 4-1. Densities of \(N(0,1)\) (blue solid) and \(t_{(234)}\) (orange dashed). Their largest height difference is 0.00058. The green area between \(-q\) and \(q\) is 0.95. Each tail is 0.025. At this scale, the difference between 1.970 and 1.96 is too small to see.

[figure]
Figure 4-2. Zoom from 1.85 to 2.10. The t line is above the Normal line, and the t tail has more area. To keep the right tail at 0.025, the boundary moves from 1.960 to 1.970.

**Example 2 · Four-point data set: 95% CI with unknown σ** Added

\(\hat\sigma/\sqrt{S_{xx}}=0.141421\) comes from Section 04.3.

1

\(\alpha\) and df How steps 1–2

\[\alpha=0.05,\qquad\alpha/2=0.025,\qquad\text{df}=4-2=2\]

2

t quantile How step 3

\[q=t_{0.975,2}=4.302653\]

3

Half-width How step 4

\[q\,\frac{\hat\sigma}{\sqrt{S_{xx}}}=4.302653\times0.1414214=0.608487\]

4

Interval How step 4

\[1.4-0.608487=0.791513,\qquad1.4+0.608487=2.008487\]

\[1.4\pm0.608487=(0.791513,\ 2.008487)\]

With 2 df, \(q\) is large and the interval wide. ▲

**Why** Slides p.34

1

\[0.95=P\!\left(-q\le\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\le q\right)\]

\(q=t_{0.975,n-2}\). \(t_{(n-2)}\) is symmetric about 0.

2

\[0.95=P\!\left(-q\frac{\hat\sigma}{\sqrt{S_{xx}}}\le\hat\beta_1-\beta_1\le q\frac{\hat\sigma}{\sqrt{S_{xx}}}\right)\]

Multiply by \(\hat\sigma/\sqrt{S_{xx}}>0\).

3

\[0.95=P\!\left(-q\frac{\hat\sigma}{\sqrt{S_{xx}}}\le\beta_1-\hat\beta_1\le q\frac{\hat\sigma}{\sqrt{S_{xx}}}\right)\]

Multiply by \(-1\). The bounds are symmetric.

4

\[0.95=P\!\left(\hat\beta_1-q\frac{\hat\sigma}{\sqrt{S_{xx}}}\le\beta_1\le\hat\beta_1+q\frac{\hat\sigma}{\sqrt{S_{xx}}}\right)\]

General level: \(1-\alpha\) for 0.95, \(t_{1-\alpha/2,n-2}\) for \(q\). ∎

### 04.5 \(\mathrm{SD}(\hat\beta_1)\) and \(\mathrm{SE}(\hat\beta_1)\) Slides p.35

**What** Slides p.35

Standard Errors · Lecture 3 · p.35 Standard error of \(\hat\beta_1\) is the estimated standard deviation of \(\hat\beta_1\) \[\mathrm{SD}(\hat\beta_1)=\frac{\sigma}{\sqrt{S_{xx}}}\] \[\mathrm{SE}(\hat\beta_1)=\frac{\hat\sigma}{\sqrt{S_{xx}}}\] Can write a CI as \(\hat\beta_1\pm t_{1-\alpha/2,n-2}\mathrm{SE}(\hat\beta_1)\)

\(\mathrm{SD}(\hat\beta_1)\): the usual distance of \(\hat\beta_1\) from \(\beta_1\) over many samples. It contains the unknown \(\sigma\). We cannot calculate it.

Standard error \(\mathrm{SE}(\hat\beta_1)\): the estimate of \(\mathrm{SD}(\hat\beta_1)\), with \(\hat\sigma\) for \(\sigma\). We can calculate it.

The interval has the form "estimate ± t quantile × standard error".

**How** Added

Calculate \(\mathrm{SE}(\hat\beta_1)\)

- **\(\hat\sigma\).** \(\hat\sigma=\sqrt{\sum e_i^2/(n-2)}\) (Section 04.3, How steps 2–4).
- **\(\sqrt{S_{xx}}\).** Section 04.1, How step 3.
- **Divide.** \(\mathrm{SE}(\hat\beta_1)=\hat\sigma/\sqrt{S_{xx}}\).

Self-check: SE has the unit of \(\hat\beta_1\). SE uses \(\hat\sigma\), not \(\sigma\).

**Example · Four-point data set and brainhead data** Added

1

\(\hat\sigma\), four-point data How step 1

\[\hat\sigma=\sqrt{\frac{0.2}{4-2}}=\sqrt{0.1}=0.316228\]

2

\(\sqrt{S_{xx}}\), four-point data How step 2

\[\sqrt{S_{xx}}=\sqrt5=2.236068\]

3

Divide How step 3

\[\mathrm{SE}(\hat\beta_1)=\frac{0.316228}{2.236068}=0.141421\]

4

Brainhead SE Slides p.45

\[\hat\sigma=72.35,\qquad\mathrm{SE}(\hat\beta_1)=0.01307\]

\[\sqrt{S_{xx}}=\frac{\hat\sigma}{\mathrm{SE}(\hat\beta_1)}=\frac{72.35}{0.01307}=5535.6\]

Approximate: the slide values are rounded.

5

Interval form Slides p.35

\[\hat\beta_1\pm t_{0.975,234}\mathrm{SE}(\hat\beta_1)=0.2608207\pm1.970154\times0.01307\]

Unit 05 completes this (Slides p.36–37). ▲

Over many samples, \(\hat\beta_1\) is usually about 0.013 from the true \(\beta_1\).

**Why** Added

1

\[\mathrm{Var}[\hat\beta_1]=\frac{\sigma^2}{S_{xx}}\]

Unit 03 (Slides p.23–24).

2

\[\mathrm{SD}(\hat\beta_1)=\sqrt{\mathrm{Var}[\hat\beta_1]}=\sqrt{\frac{\sigma^2}{S_{xx}}}\]

SD is the square root of the variance.

3

\[=\frac{\sigma}{\sqrt{S_{xx}}}\]

4

\[\mathrm{SE}(\hat\beta_1)=\frac{\hat\sigma}{\sqrt{S_{xx}}}\]

Slides p.35: \(\hat\sigma\) for \(\sigma\). ∎

### 04.6 Practice Added

**Q1.** Brainhead data, \(n=236\). For a 90% CI and a 99% CI, give \(\alpha\), \(\alpha/2\), df, and the quantile \(t_{1-\alpha/2,n-2}\). Use \(t_{0.95,234}=1.651391\) and \(t_{0.995,234}=2.597002\). Compare them with the \(N(0,1)\) quantiles 1.644854 and 2.575829.

Answer

df \(=236-2=234\).

90%: \(\alpha=0.10\), \(\alpha/2=0.05\). \(t_{0.95,234}=1.651391\). Normal: 1.644854. Difference: \(1.651391-1.644854=0.006537\).

99%: \(\alpha=0.01\), \(\alpha/2=0.005\). \(t_{0.995,234}=2.597002\). Normal: 2.575829. Difference: \(2.597002-2.575829=0.021173\).

The t quantile is a little larger at both levels (thicker tails). A higher level gives a larger \(q\) and a wider interval.

**Q2.** \(\sigma\) is unknown. Start from \(1-\alpha=P\!\left(-t_{1-\alpha/2,n-2}\le\dfrac{\hat\beta_1-\beta_1}{\mathrm{SE}(\hat\beta_1)}\le t_{1-\alpha/2,n-2}\right)\). Derive the \(1-\alpha\) CI for \(\beta_1\).

Answer

Write \(t=t_{1-\alpha/2,n-2}\) and \(\mathrm{SE}=\mathrm{SE}(\hat\beta_1)\).

1

\[1-\alpha=P\!\left(-t\le\frac{\hat\beta_1-\beta_1}{\mathrm{SE}}\le t\right)\]

2

\[1-\alpha=P\!\left(-t\,\mathrm{SE}\le\hat\beta_1-\beta_1\le t\,\mathrm{SE}\right)\]

\(\mathrm{SE}>0\).

3

\[1-\alpha=P\!\left(-t\,\mathrm{SE}\le\beta_1-\hat\beta_1\le t\,\mathrm{SE}\right)\]

Multiply by \(-1\). The bounds are symmetric.

4

\[1-\alpha=P\!\left(\hat\beta_1-t\,\mathrm{SE}\le\beta_1\le\hat\beta_1+t\,\mathrm{SE}\right)\]

CI: \(\hat\beta_1\pm t_{1-\alpha/2,n-2}\mathrm{SE}(\hat\beta_1)\). ∎

**Q3.** Small data set of Unit 01: \((x_i,y_i)\) = (1, 2), (2, 4), (3, 5), (4, 4), (5, 5). Sections 01.4–01.5 give \(S_{xx}=10\), \(\hat\beta_1=0.6\), and \(\sum e_i^2=2.4\). Calculate \(\hat\sigma\), \(\mathrm{SE}(\hat\beta_1)\), df, and the 95% CI for \(\beta_1\). Use \(t_{0.975,3}=3.182446\).

Answer

\(n=5\). df \(=5-2=3\).

\(\hat\sigma^2=2.4/3=0.8\) and \(\hat\sigma=\sqrt{0.8}=0.894427\).

\(\mathrm{SE}(\hat\beta_1)=0.894427/\sqrt{10}=0.894427/3.162278=0.2828427\).

Half-width: \(3.182446\times0.2828427=0.900132\).

95% CI: \(0.6-0.900132=-0.300132\) and \(0.6+0.900132=1.500132\). The interval is \((-0.300132,\ 1.500132)\).

## 05 · Interval estimation example and interpretation

Plan · Slides p.36–39

Step 1: Calculate the two intervals (Slides p.36).

Step 2: Check the printed intervals (Slides p.37–38).

Step 3: Interpret "95%" (Slides p.39).

Step 4: Practice (Added).

Start point · Added

Brainhead data: \(n=236\), \(\hat\beta_1=0.2608207\), \(\hat\beta_0=335.4323150\) (Lecture 2 · p.38).

\(\hat\sigma=72.35\), with \(n-2=234\) (Slides p.45).

From brainhead.csv (Added): \(\bar x=3637.8644\), \(S_{xx}=30647233.66\), and \(\hat\sigma=72.35066\).

### 05.1 Confidence intervals for \(\beta_1\) and \(\beta_0\) Slides p.36

**What** Slides p.36

Example: interval estimation · Lecture 3 · p.36 (results only) 95% CI for \(\beta_1\): [0.235, 0.287]
95% CI for \(\beta_0\): [241.305, 429.559]

The \(\beta_0\) interval uses \(\hat\beta_0\sim N\big(\beta_0,\ \sigma^2(1/n+\bar x^2/S_{xx})\big)\) (Slides p.24), with \(\hat\sigma\) for \(\sigma\).

\(\beta_1\): \(\hat\beta_1\pm t_{1-\alpha/2,\,n-2}\,\mathrm{SE}(\hat\beta_1)\), with \(\mathrm{SE}(\hat\beta_1)=\dfrac{\hat\sigma}{\sqrt{S_{xx}}}\)

\(\beta_0\): \(\hat\beta_0\pm t_{1-\alpha/2,\,n-2}\,\mathrm{SE}(\hat\beta_0)\), with \(\mathrm{SE}(\hat\beta_0)=\hat\sigma\sqrt{\dfrac{1}{n}+\dfrac{\bar x^2}{S_{xx}}}\)

**How** Added

Calculate the CI for \(\beta_1\) or \(\beta_0\)

- Find \(t_{1-\alpha/2,\,n-2}\).
- Calculate the standard error.
- Multiply the quantile by the standard error to get the half-width.
- Subtract the half-width from the estimate to get the lower limit.
- Add the half-width to the estimate to get the upper limit.

Self-check: ① The midpoint equals the estimate. ② For \(n=236\), the 95% quantile is 1.970. ③ The standard errors agree with Slides p.45: 0.01307 and 47.77644.

**Example 1 · CI for \(\beta_1\)** Added

1

Quantile How step 1

\[t_{1-\alpha/2,\,n-2}=t_{1-0.05/2,\,236-2}\]

\[=t_{0.975,\,234}\]

\[=1.970154\]

2

Standard error How step 2

\[\mathrm{SE}(\hat\beta_1)=\frac{\hat\sigma}{\sqrt{S_{xx}}}=\frac{72.35066}{\sqrt{30647233.66}}\]

\[=\frac{72.35066}{5535.994}\]

\[=0.01306914\]

Slides p.45: 0.01307.

3

Half-width How step 3

\[t_{0.975,\,234}\,\mathrm{SE}(\hat\beta_1)=1.970154\times0.01306914\]

\[=0.0257482\]

4

Limits How steps 4–5

\[\hat\beta_1\pm0.0257482=0.2608207\pm0.0257482\]

\[=(0.2608207-0.0257482,\ \ 0.2608207+0.0257482)\]

\[=(0.2350725,\ \ 0.2865689)\]

Rounded: [0.235, 0.287], as on Slides p.36.

**Example 2 · CI for \(\beta_0\)** Added

1

Quantile How step 1

\[t_{0.975,\,234}=1.970154\]

Same \(\alpha\) and \(n-2\) as Example 1.

2

Standard error How step 2

\[\mathrm{SE}(\hat\beta_0)=\hat\sigma\sqrt{\frac{1}{n}+\frac{\bar x^2}{S_{xx}}}=72.35066\sqrt{\frac{1}{236}+\frac{3637.8644^2}{30647233.66}}\]

\[=72.35066\sqrt{\frac{1}{236}+\frac{13234057.39}{30647233.66}}\]

\[=72.35066\sqrt{0.0042373+0.4318190}\]

\[=72.35066\sqrt{0.4360563}\]

\[=72.35066\times0.6603456\]

\[=47.77644\]

Slides p.45: 47.77644.

3

Half-width How step 3

\[t_{0.975,\,234}\,\mathrm{SE}(\hat\beta_0)=1.970154\times47.77644\]

\[=94.12694\]

4

Limits How steps 4–5

\[\hat\beta_0\pm94.12694=335.43232\pm94.12694\]

\[=(335.43232-94.12694,\ \ 335.43232+94.12694)\]

\[=(241.30538,\ \ 429.55926)\]

Rounded: [241.305, 429.559], as on Slides p.36.

\(\mathrm{SE}(\hat\beta_0)=47.78\) is much larger than \(\mathrm{SE}(\hat\beta_1)=0.0131\). The cause is \(\bar x^2/S_{xx}=0.4318\): \(\bar x=3637.8644\) is far from \(x=0\).

**Why** Added

The steps are the same as for \(\hat\beta_1\) on Slides p.33–34.

1

\[\hat\beta_0\sim N\Big(\beta_0,\ \sigma^2\Big(\frac1n+\frac{\bar x^2}{S_{xx}}\Big)\Big)\]

Slides p.24.

2

\[\frac{\hat\beta_0-\beta_0}{\sigma\sqrt{\frac1n+\frac{\bar x^2}{S_{xx}}}}\sim N(0,1)\]

Standardize.

3

\[\frac{\hat\beta_0-\beta_0}{\hat\sigma\sqrt{\frac1n+\frac{\bar x^2}{S_{xx}}}}\sim t_{(n-2)}\]

Replace \(\sigma\) with \(\hat\sigma\), as on Slides p.33.

4

\[0.95=P\Big(-t_{0.975,\,n-2}\le\frac{\hat\beta_0-\beta_0}{\mathrm{SE}(\hat\beta_0)}\le t_{0.975,\,n-2}\Big)\]

5

\[0.95=P\big(-t_{0.975,\,n-2}\,\mathrm{SE}(\hat\beta_0)\le\hat\beta_0-\beta_0\le t_{0.975,\,n-2}\,\mathrm{SE}(\hat\beta_0)\big)\]

6

\[0.95=P\big(-t_{0.975,\,n-2}\,\mathrm{SE}(\hat\beta_0)\le\beta_0-\hat\beta_0\le t_{0.975,\,n-2}\,\mathrm{SE}(\hat\beta_0)\big)\]

7

\[0.95=P\big(\hat\beta_0-t_{0.975,\,n-2}\,\mathrm{SE}(\hat\beta_0)\le\beta_0\le\hat\beta_0+t_{0.975,\,n-2}\,\mathrm{SE}(\hat\beta_0)\big)\]

∎

### 05.2 The printed intervals Slides p.37–38

**What** Slides p.37–38

Example: interval estimation · Lecture 3 · p.37–38 (results only) 95% CI for \(\beta_0\): from 241.3053884 to 429.5592416
95% CI for \(\beta_1\): from 0.2350725 to 0.2865689
Does this mean \(P(0.235\le\beta_1\le0.287)=95\%\)? No!

Slides p.37 gives the intervals of Slides p.36 with more decimal places.

**How** Added

Check a printed interval

- Calculate (lower + upper)/2. It must equal the estimate.
- Calculate (upper − lower)/2 to get the half-width.
- Divide the half-width by the standard error. The result must equal \(t_{0.975,\,n-2}\).

Self-check: For the brainhead data, step 3 gives 1.970154.

**Example 3 · Check the printed intervals** Added

\(\beta_1\), step 1: \((0.2350725+0.2865689)/2=0.2608207=\hat\beta_1\).

\(\beta_1\), step 2: \((0.2865689-0.2350725)/2=0.0257482\), as in Example 1.

\(\beta_1\), step 3: \(0.0257482/0.01306914=1.97015\).

\(\beta_0\), step 1: \((241.3053884+429.5592416)/2=335.432315=\hat\beta_0\).

\(\beta_0\), step 2: \((429.5592416-241.3053884)/2=94.1269266\). Example 2 gives 94.12694, a rounding difference.

\(\beta_0\), step 3: \(94.1269266/47.77644=1.97015\).

### 05.3 Interpretation of the confidence interval Slides p.39

"95%" describes the **method**, not one calculated interval.

**What** Slides p.39

Interval interpretation · Lecture 3 · p.39 If we were to draw samples repeatedly and construct intervals in the same way, any given interval may or may not cover the truth. On average, 95% will cover the truth.

\(\beta_1\) is a fixed number. It has no probability distribution.

Before sampling, \(L=\hat\beta_1-t_{0.975,\,n-2}\,\mathrm{SE}(\hat\beta_1)\) and \(U=\hat\beta_1+t_{0.975,\,n-2}\,\mathrm{SE}(\hat\beta_1)\) are random, because the \(y_i\) are random.

An interval covers \(\beta_1\) when \(L\le\beta_1\le U\).

"95%" means \(P(L\le\beta_1\le U)=0.95\).

After sampling, \(L=0.235\) and \(U=0.287\) are fixed. This interval covers \(\beta_1\) or it does not.

**How** Added

Interpret a confidence interval

- State the parameter and its unit.
- State the interval and the confidence level.
- Say that 95% of intervals from repeated samples cover the parameter.

Self-check: ① "95%" describes the intervals, not \(\beta_1\). ② The limits agree with Slides p.36–37.

**Example 4 · Interpretation for \(\beta_1\)** Added

Interpretation · brainhead \(\beta_1\)

Step 1: \(\beta_1\) is the change in mean brain weight (g) for each 1 cm³ increase in head size.

Step 2: The 95% CI for \(\beta_1\) is [0.235, 0.287] g per cm³.

Step 3: Draw many samples of 236 persons. Make \(\hat\beta_1\pm t_{0.975,\,234}\,\mathrm{SE}(\hat\beta_1)\) from each. About 95% of these intervals cover the true \(\beta_1\).

**Example 5 · Simulation of coverage** Added

In real data, \(\beta_1\) is unknown. A simulation sets the true values and counts the intervals that cover \(\beta_1\).

Simulation settings

True values: \(\beta_0=2\), \(\beta_1=1\), \(\sigma=2\).

Fixed \(x\): \(1,2,\dots,10\). \(n=10\), \(\bar x=5.5\), \(S_{xx}=82.5\).

Each sample: \(y_i=2+1\cdot x_i+\epsilon_i\), with \(\epsilon_i\sim N(0,2^2)\).

Each interval: the \(\beta_1\) method of Section 05.1, with \(t_{0.975,\,8}=2.306004\).

\(S_{xx}\): the \(x_i-\bar x\) are \(\pm0.5,\pm1.5,\pm2.5,\pm3.5,\pm4.5\). Their squares add to \(2(0.25+2.25+6.25+12.25+20.25)=2\times41.25=82.5\).

[figure]
Figure 5-1 · 95% CIs from 20 simulated samples (Added). Dot: \(\hat\beta_1\). Red line: true \(\beta_1=1.0\). 19 blue intervals cover it. Interval 1 (orange, [0.061, 0.941]) does not.

\(\beta_1=1\) is fixed. The red line does not move.

Each sample gives a different \(\hat\beta_1\) and \(\hat\sigma\). The center and width of each interval change.

Coverage: \(19/20=0.95\). For 10000 intervals: \(9497/10000=0.9497\).

**Why** Added

1

\[\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{(n-2)}\]

Slides p.33. \(\hat\beta_1\), \(\hat\sigma\) are random.

2

\[0.95=P\Big(-t_{0.975,\,n-2}\le\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\le t_{0.975,\,n-2}\Big)\]

Definition of the quantile.

3

\[0.95=P\Big(\hat\beta_1-t_{0.975,\,n-2}\frac{\hat\sigma}{\sqrt{S_{xx}}}\le\beta_1\le\hat\beta_1+t_{0.975,\,n-2}\frac{\hat\sigma}{\sqrt{S_{xx}}}\Big)\]

Slides p.34.

4

\[0.95=P(L\le\beta_1\le U)\]

\(L\), \(U\) random; \(\beta_1\) constant.

5

\[L=0.235,\quad U=0.287\]

One sample: nothing random remains.

Line 4 is a property of the method. Line 5 is one result of it. ∎

### 05.4 Practice Added

Brainhead data: \(n=236\), \(\hat\beta_0=335.4323150\), \(\hat\beta_1=0.2608207\), \(\mathrm{SE}(\hat\beta_1)=0.01306914\), \(\mathrm{SE}(\hat\beta_0)=47.77644\).

**Q1.** Calculate a 90% CI for \(\beta_1\). Use \(t_{0.95,\,234}=1.651391\).

Answer

1

\[t_{1-0.10/2,\,234}=t_{0.95,\,234}=1.651391\]

2

\[1.651391\times0.01306914=0.02158226\]

3

\[0.2608207\pm0.02158226=(0.2392384,\ 0.2824030)\]

It is narrower than the 95% CI [0.235, 0.287], because 1.651 < 1.970.

**Q2.** Calculate a 99% CI for \(\beta_0\). Use \(t_{0.995,\,234}=2.597002\).

Answer

1

\[2.597002\times47.77644=124.0755\]

2

\[335.4323\pm124.0755=(211.357,\ 459.508)\]

**Q3.** The 95% CI for \(\beta_1\) is [0.235, 0.287]. Which interpretation is correct?

(A) There is a 95% probability that \(\beta_1\) lies in [0.235, 0.287].

(B) Draw many samples of size 236 and make an interval the same way from each. About 95% of these intervals cover the true \(\beta_1\).

(C) 95% of the persons have a slope between 0.235 and 0.287.

Answer

**(B)**. \(\beta_1\) is fixed. \(L\) and \(U\) are random (Slides p.39).

## 06 · Hypothesis tests for \(\beta_1\): p-value, coefficient table, and one-sided tests

Plan · Slides p.40–49

Step 1: Hypotheses and test statistic (Slides p.40–41).

Step 2: p-value as a tail area of the t density (Slides p.42).

Step 3: Test \(H_0:\beta_1=0\) on the brainhead data (Slides p.43–44).

Step 4: Coefficient table (Slides p.45).

Step 5: p-value meaning and Type-I error rate (Slides p.46–47).

Step 6: One-sided tests (Slides p.48–49).

Step 7: Practice (Added).

Unit 01: \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\); \(\hat\beta_1=S_{xy}/S_{xx}\); \(\hat\sigma=\sqrt{\sum_{i=1}^n e_i^2/(n-2)}\).

Unit 04: \(\mathrm{SE}(\hat\beta_1)=\hat\sigma/\sqrt{S_{xx}}\) and \(\dfrac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{(n-2)}\) (Slides p.33–35).

Brainhead (Unit 05): \(n=236\), \(\hat\beta_1=0.2608207\), \(\hat\sigma=72.35066\), \(S_{xx}=30647233.66\).

### 06.1 Test setup and test statistic Slides p.40–41

Slides p.40: section page, no formulas.

Hypothesis test: a method that measures the evidence in the data against a claim about a parameter.

Null hypothesis \(H_0\): the claim that we test, for example \(H_0:\beta_1=\theta_0\). The test assumes it is true.

\(\theta_0\): a given number. Usually \(\theta_0=0\): the mean of \(y\) has no linear relation with \(x\).

Alternative hypothesis \(H_1\): the claim against \(H_0\), for example \(H_1:\beta_1\ne\theta_0\).

Test statistic: a value from the data whose distribution under \(H_0\) is known.

**What** Slides p.40–41

Hypothesis Testing · Lecture 3 · p.41 Want to test a null hypothesis \(H_0:\beta_1=\theta_0\) vs. some alternative hypothesis \(H_1:\beta_1\ne\theta_0\).
• E.g., often want to test \(H_0:\beta_1=0\).
Goal is to characterize how much evidence we have against \(H_0\)
• How “extreme” are our data relative to \(H_0\)?
• I.e. If \(H_0\) really were true, would these data be really surprising?
Under \(H_0\): \[\frac{\hat\beta_1-\theta_0}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{(n-2)}\]

The test does not prove \(H_0\) true or false. It asks: are the data rare if \(H_0\) is true?

The statistic is the distance from \(\hat\beta_1\) to \(\theta_0\) in standard errors.

\(T\) is the random statistic. \(t\) is its observed value (Slides p.42).

**How** Added

Calculate \(t\)

- Write \(H_0:\beta_1=\theta_0\).
- Calculate \(\hat\beta_1=S_{xy}/S_{xx}\).
- Calculate \(\mathrm{SE}(\hat\beta_1)=\hat\sigma/\sqrt{S_{xx}}\).
- Calculate \(t=\dfrac{\hat\beta_1-\theta_0}{\hat\sigma/\sqrt{S_{xx}}}\).
- Write the reference distribution \(t_{(n-2)}\).

**Self-check:** \(t\) has the sign of \(\hat\beta_1-\theta_0\).

**Example · Brainhead data** Slides p.43

1

Hypotheses How step 1

\[H_0:\beta_1=0\quad\text{vs.}\quad H_1:\beta_1\ne0,\qquad \theta_0=0\]

2

Slope estimate How step 2

\[\hat\beta_1=0.2608207\]

3

Standard error How step 3

\[\mathrm{SE}(\hat\beta_1)=\frac{\hat\sigma}{\sqrt{S_{xx}}}=0.01306914\]

Section 05.1. Slides p.45 prints 0.01307.

4

Observed value How step 4

\[t=\frac{0.2608207-0}{0.01306914}=\frac{0.2608207}{0.01306914}=19.957\]

5

Reference distribution How step 5

\[n-2=236-2=234,\qquad T\sim t_{(234)}\ \text{under}\ H_0\]

**Self-check:** \(\hat\beta_1=0.26>0=\theta_0\), and \(t\) is positive.

\(\hat\beta_1\) is about 20 standard errors from 0. ▲

**Why** Slides p.41

1

\[\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{(n-2)}\]

Unit 04 (Slides p.33–35), for each \(\beta_1\).

2

\[\beta_1=\theta_0\]

\(H_0\) is true.

3

\[\frac{\hat\beta_1-\theta_0}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{(n-2)}\quad\text{under }H_0\]

Put line 2 into line 1.

∎ Under \(H_0\), this distribution has no unknown parameter.

### 06.2 The p-value Slides p.42

p-value: the probability, under \(H_0\), of a test statistic as extreme as the observed value or more.

Extreme (two-sided test): a large \(|T|\), far from 0 in either direction.

Probability density function (PDF): a curve whose area over an interval is the probability of that interval.

**What** Slides p.42

Hypothesis Testing – p value · Lecture 3 · p.42 Under \(H_0\): \(\frac{\hat\beta_1-\theta_0}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{(n-2)}\)
• What’s the probability under the null of a test statistic as extreme or more than what we observe? \[P(|T|\ge|t|)=2P(T\ge|t|)=2[1-P(T\le|t|)]\quad\text{(last term corrected)}\]

Correction: Slides p.42 prints the last term as \(2[1-P(T\le-|t|)]\). This is a typing error. The block uses the correct form.

Figure 6-1 is the plot that Slides p.42 asks for ("DRAW PLOT").

[figure]
Figure 6-1. \(t_{(234)}\) density (blue). Orange: the tails \(T\ge|t|\) and \(T\le-|t|\), for the demonstration value \(|t|=2\). Each tail has area 0.02332811. Total (two-sided p-value): 0.04665622. The brainhead value 19.957 is far past the right edge.

**How** Added

Calculate the two-sided p-value

- Calculate \(t\) (Section 06.1) and \(n-2\).
- Take \(|t|\).
- Find \(P(T\ge|t|)\) for \(T\sim t_{(n-2)}\) with a t table or software.
- Multiply by 2. The result is \(P(|T|\ge|t|)\).

**Self-check:** \(2P(T\le-|t|)\) gives the same value.

**Example · Demonstration value and brainhead data** Added

1

Demonstration value: right tail How step 3

\[P(T\ge2)=0.02332811,\qquad T\sim t_{(234)}\]

2

Demonstration value: multiply by 2 How step 4

\[P(|T|\ge2)=2\times0.02332811=0.04665622\]

3

Brainhead: right tail How step 3

\[P(T\ge t)=1.015856\times10^{-52}\]

Unrounded \(t\) (brainhead.csv): 19.956998.

4

Brainhead: multiply by 2 How step 4

\[P(|T|\ge|t|)=2\times1.015856\times10^{-52}=2.031713\times10^{-52}\]

**Self-check:** Slides p.43 prints \(2.031713\times10^{-52}\).

\(|t|=2\) gives about 0.047. \(|t|=19.957\) gives about \(10^{-52}\). A larger \(|t|\) gives a smaller p-value. ▲

**Why** Slides p.42

1

\[P(|T|\ge|t|)=P(T\ge|t|)+P(T\le-|t|)\]

The two tails do not overlap.

2

\[P(T\le-|t|)=P(T\ge|t|)\]

Symmetry about 0.

3

\[P(|T|\ge|t|)=2P(T\ge|t|)\]

Put line 2 into line 1.

4

\[P(T\ge|t|)=1-P(T<|t|)\]

Complement.

5

\[P(T<|t|)=P(T\le|t|)\]

\(T\) is continuous: \(P(T=|t|)=0\).

6

\[P(|T|\ge|t|)=2[1-P(T\le|t|)]\]

Put lines 4 and 5 into line 3.

∎ Lines 2 and 3 also give \(P(|T|\ge|t|)=2P(T\le-|t|)\).

### 06.3 Example: test \(H_0:\beta_1=0\) Slides p.43–44

Significance level \(\alpha\): the limit, set before the test, below which the p-value rejects \(H_0\). This course uses \(\alpha=0.05\).

Reject \(H_0\): the data give sufficient evidence against \(H_0\).

**What** Slides p.43–44

Example: Testing a Hypothesis · Lecture 3 · p.43–44 The pval < 0.05. Hence we reject the null hypothesis at the 5% level.
What if pval > 0.05? Would we accept the null? No! Simply would not have enough evidence to reject.

A p-value above 0.05 does not show that \(H_0\) is true.

**How** Added

Make a decision at level \(\alpha\)

- Write \(H_0\), \(H_1\), and \(\alpha\) (default 0.05).
- Calculate \(t\) and the p-value (Sections 06.1–06.2).
- If p-value < \(\alpha\), write "reject \(H_0\) at the \(100\alpha\%\) level".
- If p-value > \(\alpha\), write "not enough evidence to reject \(H_0\)".
- Write the result in the question's words.

**Self-check:** Never write "accept \(H_0\)".

**Example · Brainhead data** Slides p.43

1

Hypotheses and level How step 1

\[H_0:\beta_1=0,\quad H_1:\beta_1\ne0,\quad \alpha=0.05\]

2

Statistic and p-value How step 2

\[t=19.957,\qquad \text{p-value}=2\times1.015856\times10^{-52}=2.031713\times10^{-52}\]

3

Compare How step 3

\[2.031713\times10^{-52}<0.05\ \Rightarrow\ \text{reject }H_0\text{ at the 5\% level}\]

4

Result sentence How step 5

The data give very strong evidence that mean brain weight changes linearly with head size (\(\beta_1\ne0\)).

▲

### 06.4 Read the coefficient table Slides p.45

**What** Slides p.45

Example: Testing a Hypothesis · Lecture 3 · p.45 (numbers only) Intercept row: estimate 335.43231, standard error 47.77644, t value 7.021, p-value \(2.37\times10^{-11}\).
Slope row: estimate 0.26082, standard error 0.01307, t value 19.957, p-value less than \(2\times10^{-16}\).
\(\hat\sigma\): 72.35 on 234 degrees of freedom.

Each row tests \(H_0:\text{coefficient}=0\). The intercept row is \(\beta_0\). The slope row is \(\beta_1\).

**Estimate**: \(\hat\beta_0=335.43231\), \(\hat\beta_1=0.26082\).

**Standard error**: slope \(\hat\sigma/\sqrt{S_{xx}}=0.01307\); intercept \(\hat\sigma\sqrt{1/n+\bar x^2/S_{xx}}=47.77644\).

**t value**: estimate divided by standard error.

**p-value**: two-sided, \(P(|T|\ge|t|)\), \(T\sim t_{(n-2)}\). For the slope, the table prints only "less than \(2\times10^{-16}\)". Slides p.43 gives \(2.031713\times10^{-52}\).

**\(\hat\sigma\)**: 72.35, with \(n-2=234\) degrees of freedom.

Residuals: minimum −174.88, first quartile −49.03, median −2.40, third quartile 46.72, maximum 242.41.

\(R^2=0.6299\), adjusted \(R^2=0.6283\), F statistic 398.3 on 1 and 234 degrees of freedom. Later lectures explain these.

**How** Added

Read one test from the table

- Select the row.
- Use \(H_0:\text{coefficient}=0\) vs. \(H_1:\text{coefficient}\ne0\). The table is only for \(\theta_0=0\).
- Read the t value and the p-value.
- Compare the p-value with \(\alpha=0.05\) (Section 06.3).

**Self-check:** Estimate / standard error = t value, to rounding. Degrees of freedom: 234.

**Example · Brainhead data** Slides p.45

1

Intercept row: t value Self-check

\[t=\frac{335.43231}{47.77644}=7.020873\approx7.021\]

2

Intercept row: p-value Section 06.2

\[2P(T\ge7.020873)=2.371264\times10^{-11}\approx2.37\times10^{-11}\]

3

Slope row: t value Self-check

\[t=\frac{0.26082}{0.01307}=19.9556\]

Unrounded: \(0.2608207/0.01306914=19.957\).

4

Slope row: p-value Section 06.3

\[2.031713\times10^{-52}<2\times10^{-16}\]

**Self-check:** Same p-value as Section 06.3.

Both rows reject \(H_0:\text{coefficient}=0\) at the 5% level. ▲

### 06.5 Interpret the p-value Slides p.46–47

Type-I error: the test rejects \(H_0\) when \(H_0\) is true.

Type-I error rate: the probability of a Type-I error.

**What** Slides p.46–47

Interpreting P-Values · Lecture 3 · p.46–47 Does this mean pval \(=P(\beta_1=0)\)? No! Instead, it means that under the null hypothesis (i.e. assuming \(\beta_1=0\)) the probability of a test statistic as extreme as the one observed is pval. That’s why a small p-value is evidence against the null, since it would be particularly “rare” under the null (and hence surprising).

If we reject the null whenever we get a p-value below 5%, then if the null is true and we repeat the experiment over and over then we will only reject the null incorrectly 5% of the time. This is called the Type-I error rate.

\(\beta_1\) is a fixed constant. The p-value is a probability about the data, not about \(\beta_1\).

**How** Added

Interpret a p-value in one sentence

- Write the condition: "Assuming \(H_0\) is true (\(\beta_1=\theta_0\)), …".
- Write the event: "… the probability of a test statistic at least as extreme as the observed \(t\) …".
- Write the value: "… is p-value = …".
- Write the result: a small p-value is evidence against \(H_0\).

**Self-check:** The sentence says "assuming \(H_0\)". The probability is about the test statistic.

**Example · Brainhead data** Added

1

Condition How step 1

Assuming \(\beta_1=0\) (head size has no linear effect on mean brain weight),

2

Event and value How steps 2–3

the probability of \(|T|\ge19.957\) is \(2.031713\times10^{-52}\).

3

Result How step 4

The data give very strong evidence against \(\beta_1=0\).

▲

**Why · The Type-I error rate is 5%** Slides p.47

Section 04.4 defines \(t_{1-\alpha/2,\,n-2}\). Brainhead: \(t_{0.975,\,234}=1.970154\).

1

\[P(\text{reject}\mid H_0)=P(\text{p-value}<0.05\mid H_0)\]

Decision rule.

2

\[\text{p-value}<0.05\iff 2P(T\ge|t|)<0.05\]

Section 06.2.

3

\[2P(T\ge|t|)<0.05\iff P(T\ge|t|)<0.025\]

4

\[P(T\ge|t|)<0.025\iff |t|>t_{0.975,\,n-2}\]

Right-tail area at \(t_{0.975,\,n-2}\) is 0.025.

5

\[P(\text{reject}\mid H_0)=P(|T|>t_{0.975,\,n-2})\]

Under \(H_0\), \(T\sim t_{(n-2)}\).

6

\[P(|T|>t_{0.975,\,n-2})=0.025+0.025=0.05\]

Symmetry: each tail is 0.025.

∎

### 06.6 One-sided tests Slides p.48–49

Two-sided alternative \(H_1:\beta_1\ne\theta_0\): evidence for \(\beta_1>\theta_0\) or \(\beta_1<\theta_0\) counts.

One-sided alternative, for example \(H_1:\beta_1>\theta_0\): only evidence for \(\beta_1>\theta_0\) counts.

**What** Slides p.48–49

One-sided hypothesis tests · Lecture 3 · p.48–49 Above we conducted a hypothesis test of the null \(H_0:\beta_1=\theta_0\) vs the two-sided alternative \(H_1:\beta_1\ne\theta_0\)
• Evidence against the null (and in favour of the alternative) is evidence that either \(\beta_1>\theta_0\) or \(\beta_1<\theta_0\)
Sometimes we are interested in evidence one direction: e.g., \(H_1:\beta_1>\theta_0\)
• Evidence against the null in favour of \(H_1\) is evidence that the true \(\beta_1\) is larger than \(\theta_0\)
• How do we compute a p-value here?
◦ Consider the test statistic: \(\frac{\hat\beta_1-\theta_0}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{(n-2)}\)
◦ Evidence against the null and in favour of \(H_1\) is evidence that \(\beta_1>\theta_0\).
◦ So large values of \(\hat\beta_1-\theta_0\) indicate evidence against the null in favour of \(H_1\)
◦ \(\Longrightarrow\) large values of \(\frac{\hat\beta_1-\theta_0}{\hat\sigma/\sqrt{S_{xx}}}\) indicate evidence in favour of \(H_1\)
◦ I.e. p-value only includes one tail

Slides p.48 writes \(H_1:\theta\ne\theta_0\). It means \(H_1:\beta_1\ne\theta_0\).

For \(H_1:\beta_1>\theta_0\), the p-value is \(P(T\ge t)\). Do not take \(|t|\). Do not multiply by 2.

[figure]
Figure 6-2. One-sided p-value for \(H_1:\beta_1>\theta_0\): the right tail \(T\ge t\) only (green), with \(t=2\). Area 0.02332811, half of the two-sided 0.04665622 in Figure 6-1.

**How** Added

One-sided test of \(H_0:\beta_1=\theta_0\) vs. \(H_1:\beta_1>\theta_0\)

- Calculate \(t=\dfrac{\hat\beta_1-\theta_0}{\hat\sigma/\sqrt{S_{xx}}}\). Keep the sign.
- Find \(P(T\ge t)\) for \(T\sim t_{(n-2)}\).
- Do not multiply by 2. This area is the p-value.
- Compare the p-value with \(\alpha\) (Section 06.3).

**Self-check:** When \(t>0\), the one-sided p-value is half the two-sided p-value.

**Example · Brainhead data** Added

Test \(H_0:\beta_1=0\) vs. \(H_1:\beta_1>0\): a larger head gives a larger mean brain weight.

1

Statistic How step 1

\[t=\frac{0.2608207-0}{0.01306914}=19.957\]

2

Right tail How steps 2–3

\[\text{p-value}=P(T\ge19.957)=1.015856\times10^{-52}\]

**Self-check:** \(2.031713\times10^{-52}/2=1.015856\times10^{-52}\).

3

Decision How step 4

\[1.015856\times10^{-52}<0.05\ \Rightarrow\ \text{reject }H_0\text{ in favour of }\beta_1>0\]

▲

**Why · The p-value uses one tail** Slides p.49

1

\[H_1:\beta_1>\theta_0\]

2

\[\hat\beta_1-\theta_0\ \text{large}\]

\(\hat\beta_1\) is unbiased for \(\beta_1\).

3

\[\frac{\hat\beta_1-\theta_0}{\hat\sigma/\sqrt{S_{xx}}}\ \text{large}\]

The denominator is positive.

4

\[\text{p-value}=P(T\ge t)\quad\text{under }H_0,\ T\sim t_{(n-2)}\]

Only values larger than \(t\) are more extreme.

∎ When \(t>0\), symmetry gives \(P(T\ge t)=\tfrac12P(|T|\ge|t|)\).

### 06.7 Practice Added

**Q1.** Brainhead: \(\hat\beta_1=0.2608207\), \(\hat\sigma/\sqrt{S_{xx}}=0.01306914\), \(n=236\). Test \(H_0:\beta_1=0.25\) vs. \(H_1:\beta_1\ne0.25\) at the 5% level.

Answer

\(t=\dfrac{0.2608207-0.25}{0.01306914}=\dfrac{0.0108207}{0.01306914}=0.8280\).

With \(t_{(234)}\): \(P(T\ge0.8280)=0.2043\). p-value \(=2\times0.2043=0.4085\).

\(0.4085>0.05\): not enough evidence to reject \(H_0:\beta_1=0.25\) at the 5% level.

**Q2.** Same data. Test \(H_0:\beta_1=0.24\) vs. \(H_1:\beta_1>0.24\) at the 5% level. Also give the two-sided p-value for \(H_1:\beta_1\ne0.24\).

Answer

\(t=\dfrac{0.2608207-0.24}{0.01306914}=\dfrac{0.0208207}{0.01306914}=1.5931\).

One-sided p-value: \(P(T\ge1.5931)=0.05624\), \(T\sim t_{(234)}\).

\(0.05624>0.05\): not enough evidence to reject \(H_0\) in favour of \(\beta_1>0.24\) at the 5% level.

Two-sided p-value: \(2\times0.05624=0.1125\).

**Q3.** Slides p.45, intercept row: estimate 335.43231, standard error 47.77644, t value 7.021, p-value \(2.37\times10^{-11}\). (a) Hypotheses? (b) Check the t value. (c) Interpret the p-value.

Answer

(a) \(H_0:\beta_0=0\) vs. \(H_1:\beta_0\ne0\).

(b) \(335.43231/47.77644=7.020873\approx7.021\).

(c) Assuming \(\beta_0=0\), the probability of a test statistic at least as extreme as \(|t|=7.021\) is \(2.37\times10^{-11}\). Reject \(H_0\) at the 5% level.


---

<!-- L04 -->

STAT 331 · Lecture 4 · Simple Linear Regression: Prediction

# Lecture 4: Simple Linear Regression: Prediction

This lecture estimates the mean response at a given \(x_0\), gives a confidence interval for it, and gives a prediction interval for a new response (Lecture 4 · p.1–43).

Contents
01 · Recap: the model, the estimators, and inference for \(\beta_1\) 02 · Point estimate of the mean response and its distribution 03 · Confidence interval for the mean response 04 · Predicting a new response: the prediction interval 05 · Prediction intervals over a range of \(x\) values 06 · Practice questions Q1 and Q2

## 01 · Recap: the model, the estimators, and inference for \(\beta_1\)

Plan · Slides p.1–7

Model (p.3), estimators (p.4), CI (p.5), test (p.6), brainhead results (p.7).

Data for this unit · Added

Small data set: \(x=(1,2,3,4,5)\), \(y=(2,4,5,4,5)\), \(n=5\).

Brainhead data: \(y\) is brain weight (g). \(x\) is head size (cm³).

### 01.1 Title page and section page Slides p.1–2

Slides p.1 title: "Lecture 4: Simple Linear Regression: Prediction".

Prediction is the use of a fitted model to give a value for a new response (Unit 04).

Slides p.2: section page "Recap" (Slides p.3–7).

### 01.2 The model and its assumptions Slides p.3

**What** Slides p.3

Simple Linear Regression · Lecture 4 · p.3 \[y_i=\beta_0+\beta_1x_i+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] Or: \[y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\ \sigma^2)\] Assumptions:
1. Linearity
2. Independence
3. Normality
4. Equal variance (homoskedasticity)

In simple linear regression (SLR), the mean of the response \(y\) is a straight line in one covariate \(x\).

The response \(y_i\) is the value we explain for observation \(i=1,\dots,n\), where \(n\) is the sample size.

The covariate \(x_i\) is the known constant that explains \(y_i\).

The intercept \(\beta_0\) is the mean of \(y\) at \(x=0\).

The slope \(\beta_1\) is the change in the mean of \(y\) per 1-unit increase in \(x\).

A parameter is an unknown constant of the model, for example \(\beta_0\) and \(\beta_1\).

The error \(\epsilon_i\) is the random difference between \(y_i\) and the line \(\beta_0+\beta_1x_i\).

\(N(\mu,\sigma^2)\) is the normal distribution: bell-shaped, with mean \(\mu\) and variance \(\sigma^2\).

The expectation \(E[\cdot]\) is the long-run average of a random variable. The variance \(\mathrm{Var}[\cdot]\) is the expected squared distance from it.

The error variance \(\sigma^2\) is the third parameter. \(\sigma\) is the error standard deviation.

"iid" means independent and identically distributed.

"indep" means independent, not identically distributed, because the mean changes with \(x_i\).

1. Linearity

\(E[y_i]=\beta_0+\beta_1x_i\).

2. Independence

The errors \(\epsilon_i\) are independent.

3. Normality

Each \(\epsilon_i\) has a normal distribution.

4. Equal variance (homoskedasticity)

Each \(\epsilon_i\) has variance \(\sigma^2\), at all \(x_i\).

**How** Added

Write a data set as an SLR model

- Find the response \(y\): the variable to explain or predict.
- Find the covariate \(x\): the variable that explains \(y\).
- Count the observations to get \(n\).
- Write \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\), \(i=1,\dots,n\).
- Write \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\). List the four assumptions.

**Self-check:** \(\beta_0\), \(\beta_1\), \(\sigma^2\) are unknown. The data give \(x_i\), \(y_i\), \(n\).

**Example 1 · The small data set** Added

Pairs: \((1,2),(2,4),(3,5),(4,4),(5,5)\).

Step 1: \(y\): the second value of each pair.

Step 2: \(x\): the first value of each pair.

Step 3: Five pairs give \(n=5\).

Step 4: \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\), \(i=1,\dots,5\).

Step 5: \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\). For observation 3, \(y_3\sim N(\beta_0+3\beta_1,\sigma^2)\).

**Example 2 · The brainhead data** Slides p.7

Step 1: \(y_i\): brain weight of person \(i\) (g).

Step 2: \(x_i\): head size of person \(i\) (cm³).

Step 3: Slides p.7 prints \(n-2=234\) degrees of freedom. \(n=234+2=236\).

Step 4: \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\), \(i=1,\dots,236\).

Step 5: \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\ \sigma^2)\).

[figure]
Figure 1-1. The 236 brainhead points (blue) and the fitted line \(\hat y=335.43+0.26082\,x\) (orange). The points follow a line with almost equal spread.

**Why · The two forms are equal** Added

1

\[y_i=\beta_0+\beta_1x_i+\epsilon_i\]

2

\[E[y_i]=\beta_0+\beta_1x_i+E[\epsilon_i]\]

\(\beta_0+\beta_1x_i\) is a constant.

3

\[E[y_i]=\beta_0+\beta_1x_i+0=\beta_0+\beta_1x_i\]

\(\epsilon_i\sim N(0,\sigma^2)\) has mean 0.

4

\[\mathrm{Var}[y_i]=\mathrm{Var}[\epsilon_i]\]

A constant does not change the variance.

5

\[\mathrm{Var}[y_i]=\sigma^2\]

6

\[y_i\sim N(\beta_0+\beta_1x_i,\ \sigma^2)\]

A normal variable plus a constant is normal.

7

\[y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\ \sigma^2)\]

The \(\epsilon_i\) are independent. ∎

### 01.3 The least squares estimators and the distribution of \(\hat\beta_1\) Slides p.4

**What** Slides p.4

Recap: Estimates · Lecture 4 · p.4 So the least squares estimators are: \[\hat\beta_1=\frac{S_{xy}}{S_{xx}},\qquad \hat\beta_0=\bar y-\hat\beta_1\bar x.\] \[\hat\beta_1\sim N\!\left(\beta_1,\frac{\sigma^2}{S_{xx}}\right)\ \Longrightarrow\ \frac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}\sim N(0,1)\ \Longrightarrow\ \frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{n-2}\]

An estimator is a formula that gives a parameter value from the data. A hat marks it: \(\hat\beta_1\).

Least squares (LS) chooses the \(\hat\beta_0\) and \(\hat\beta_1\) that make \(\sum_{i=1}^n(y_i-\hat\beta_0-\hat\beta_1x_i)^2\) smallest.

The sample means are \(\bar x=\frac1n\sum_{i=1}^n x_i\) and \(\bar y=\frac1n\sum_{i=1}^n y_i\).

\(S_{xx}=\sum_{i=1}^n(x_i-\bar x)^2\) is the sum of squared distances of \(x_i\) from \(\bar x\).

\(S_{xy}=\sum_{i=1}^n(y_i-\bar y)(x_i-\bar x)\) is the sum of the products of the two distances.

The fitted value is \(\hat y_i=\hat\beta_0+\hat\beta_1x_i\). The residual is \(e_i=y_i-\hat y_i\).

\(\hat\sigma\) estimates \(\sigma\), with \(\hat\sigma^2=\sum_{i=1}^n e_i^2/(n-2)\).

The standard error \(\mathrm{SE}(\hat\beta_1)=\hat\sigma/\sqrt{S_{xx}}\) estimates the standard deviation of \(\hat\beta_1\).

\(N(0,1)\) is the standard normal distribution: mean 0, variance 1.

\(t_{n-2}\) is the \(t\) distribution with \(n-2\) degrees of freedom: symmetric about 0, with wider tails than \(N(0,1)\).

Putting \(\hat\sigma\) for the unknown \(\sigma\) changes \(N(0,1)\) to \(t_{n-2}\).

**How** Added

Calculate \(\hat\beta_0\), \(\hat\beta_1\), \(\hat\sigma\), and \(\mathrm{SE}(\hat\beta_1)\)

- Calculate \(\bar x\) and \(\bar y\).
- Calculate \(S_{xx}\) and \(S_{xy}\).
- Calculate \(\hat\beta_1=S_{xy}/S_{xx}\).
- Calculate \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).
- Calculate each fitted value \(\hat y_i\) and each residual \(e_i\).
- Calculate \(\hat\sigma^2=\sum e_i^2/(n-2)\) and \(\hat\sigma\).
- Calculate \(\mathrm{SE}(\hat\beta_1)=\hat\sigma/\sqrt{S_{xx}}\).

**Self-check:** The residuals add to 0. The line contains \((\bar x,\bar y)\).

**Example 3 · The small data set** Added

Step 1: \(\bar x=(1+2+3+4+5)/5=15/5=3\). \(\bar y=(2+4+5+4+5)/5=20/5=4\).

Step 2: \(x_i-\bar x\): \(-2,-1,0,1,2\). \(y_i-\bar y\): \(-2,0,1,0,1\).

\(S_{xx}=4+1+0+1+4=10\).

\(S_{xy}=(-2)(-2)+(0)(-1)+(1)(0)+(0)(1)+(1)(2)=4+0+0+0+2=6\).

Step 3: \(\hat\beta_1=6/10=0.6\).

Step 4: \(\hat\beta_0=4-0.6\times3=4-1.8=2.2\).

Step 5: \(\hat y_i=2.2+0.6x_i\): \(2.8,\ 3.4,\ 4.0,\ 4.6,\ 5.2\).

\(e_i=y_i-\hat y_i\): \(-0.8,\ 0.6,\ 1.0,\ -0.6,\ -0.2\).

Step 6: \(\sum e_i^2=0.64+0.36+1.00+0.36+0.04=2.4\).

\(\hat\sigma^2=2.4/(5-2)=2.4/3=0.8\), and \(\hat\sigma=\sqrt{0.8}=0.894427\).

Step 7: \(\mathrm{SE}(\hat\beta_1)=0.894427/\sqrt{10}=0.894427/3.162278=0.282843\).

Self-check: \(-0.8+0.6+1.0-0.6-0.2=0\), and \(2.2+0.6\times3=4=\bar y\). With \(n-2=3\):
\[\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}=\frac{0.6-\beta_1}{0.282843}\sim t_{3}.\]
**Example 4 · The brainhead data** Slides p.7

\(\hat\beta_0=335.43231\) and \(\hat\beta_1=0.26082\).

\(\mathrm{SE}(\hat\beta_1)=0.01307\).

\(\hat\sigma=72.35\), with \(n-2=234\) degrees of freedom.

Each 1 cm³ more head size increases the estimated mean brain weight by 0.26082 g.
\[\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}=\frac{0.26082-\beta_1}{0.01307}\sim t_{234}.\]
**Why · The distribution chain** Added

1

\[\hat\beta_1=\frac{\sum_i(y_i-\bar y)(x_i-\bar x)}{S_{xx}}\]

2

\[\hat\beta_1=\frac{\sum_i y_i(x_i-\bar x)-\bar y\sum_i(x_i-\bar x)}{S_{xx}}\]

3

\[\hat\beta_1=\frac{\sum_i y_i(x_i-\bar x)-\bar y\cdot 0}{S_{xx}}\]

\(\sum_i(x_i-\bar x)=n\bar x-n\bar x=0\).

4

\[\hat\beta_1=\sum_{i=1}^n w_iy_i,\qquad w_i=\frac{x_i-\bar x}{S_{xx}}\]

\(w_i\) uses only \(x\): a constant.

5

\[\hat\beta_1\sim N\!\left(\sum_i w_i(\beta_0+\beta_1x_i),\ \sigma^2\sum_i w_i^2\right)\]

A weighted sum of independent normals is normal.

6

\[E[\hat\beta_1]=\beta_0\sum_i w_i+\beta_1\sum_i w_ix_i\]

7

\[E[\hat\beta_1]=\beta_0\cdot0+\beta_1\frac{\sum_i(x_i-\bar x)x_i}{S_{xx}}\]

\(\sum_i w_i=\sum_i(x_i-\bar x)/S_{xx}=0\).

8

\[E[\hat\beta_1]=\beta_1\frac{\sum_i(x_i-\bar x)(x_i-\bar x)}{S_{xx}}\]

\(\sum_i(x_i-\bar x)\bar x=0\).

9

\[E[\hat\beta_1]=\beta_1\frac{S_{xx}}{S_{xx}}=\beta_1\]

10

\[\mathrm{Var}[\hat\beta_1]=\sigma^2\sum_i\frac{(x_i-\bar x)^2}{S_{xx}^2}\]

11

\[\mathrm{Var}[\hat\beta_1]=\sigma^2\frac{S_{xx}}{S_{xx}^2}=\frac{\sigma^2}{S_{xx}}\]

12

\[\hat\beta_1\sim N\!\left(\beta_1,\frac{\sigma^2}{S_{xx}}\right)\]

The first result on Slides p.4.

13

\[Z=\frac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}\sim N(0,1)\]

Subtract the mean. Divide by the standard deviation.

14

\[V=\frac{1}{\sigma^2}\sum_{i=1}^n e_i^2\sim\chi^2_{(n-2)},\quad Z,V\text{ independent}\]

Stated in Lecture 3. \(\chi^2_\nu\): the chi-squared distribution.

15

\[\frac{Z}{\sqrt{V/(n-2)}}\sim t_{n-2}\]

Independent \(Z\sim N(0,1)\), \(V\sim\chi^2_\nu\) give \(Z/\sqrt{V/\nu}\sim t_\nu\).

16

\[\frac{(\hat\beta_1-\beta_1)\big/(\sigma/\sqrt{S_{xx}})}{\sqrt{\frac{1}{\sigma^2}\sum_i e_i^2/(n-2)}}\sim t_{n-2}\]

17

\[\frac{(\hat\beta_1-\beta_1)\big/(1/\sqrt{S_{xx}})}{\sqrt{\sum_i e_i^2/(n-2)}}\sim t_{n-2}\]

18

\[\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{n-2}\]

\(\hat\sigma=\sqrt{\sum_i e_i^2/(n-2)}\). ∎

### 01.4 The confidence interval for \(\beta_1\) Slides p.5

**What** Slides p.5

Confidence interval for \(\beta_1\) · Lecture 4 · p.5 95% CI for \(\beta_1\) is \(\hat\beta_1\pm t_{0.975,n-2}\times\sqrt{\dfrac{\hat\sigma^2}{S_{xx}}}\)
or \(\hat\beta_1\pm t_{0.975,n-2}\times \mathrm{SE}(\hat\beta_1)\).
If we were to collect a new sample, we would obtain a different estimate and a different 95% CI

- 95% of such intervals will cover the true \(\beta_1\)
More generally a \(100\times(1-\alpha)\%\) CI is: \(\hat\beta_1\pm t_{1-\alpha/2,n-2}\times \mathrm{SE}(\hat\beta_1)\)

A confidence interval (CI) is an interval calculated from the data with a fixed rule.

The confidence level \(100\times(1-\alpha)\%\) is the proportion of such intervals that cover the true parameter. For 95%, \(\alpha=0.05\).

The quantile \(t_{1-\alpha/2,n-2}\) has area \(1-\alpha/2\) to its left under the \(t_{n-2}\) curve.

For 95%, the quantile is \(t_{0.975,n-2}\), with right-tail area 0.025.

\(\sqrt{\hat\sigma^2/S_{xx}}=\hat\sigma/\sqrt{S_{xx}}=\mathrm{SE}(\hat\beta_1)\).

**How** Added

Calculate a \(100\times(1-\alpha)\%\) CI for \(\beta_1\)

- Get \(\hat\beta_1\) and \(\mathrm{SE}(\hat\beta_1)\).
- Calculate the degrees of freedom \(n-2\).
- Find \(t_{1-\alpha/2,n-2}\) in a \(t\) table or with software.
- Calculate the half-width \(t_{1-\alpha/2,n-2}\times\mathrm{SE}(\hat\beta_1)\).
- Calculate \(\hat\beta_1-\text{half-width}\) and \(\hat\beta_1+\text{half-width}\).

**Self-check:** The midpoint is \(\hat\beta_1\). A higher confidence level gives a wider interval.

**Example 5 · 95% CI for the small data set** Added

Step 1: \(\hat\beta_1=0.6\) and \(\mathrm{SE}(\hat\beta_1)=0.282843\) (Example 3).

Step 2: \(n-2=5-2=3\).

Step 3: \(t_{0.975,3}=3.182446\).

Step 4: Half-width \(=3.182446\times0.282843=0.900132\).

Step 5: \(0.6-0.900132=-0.300132\) and \(0.6+0.900132=1.500132\).

The 95% CI is \([-0.300132,\ 1.500132]\). It is wide because \(n=5\) is small and \(t_{0.975,3}\) is large.

**Example 6 · 95% CI for the brainhead data** Slides p.7

Step 1: \(\hat\beta_1=0.26082\) and \(\mathrm{SE}(\hat\beta_1)=0.01307\).

Step 2: \(n-2=236-2=234\).

Step 3: \(t_{0.975,234}=1.970154\).

Step 4: Half-width \(=1.970154\times0.01307=0.025750\).

Step 5: \(0.26082-0.025750=0.235070\) and \(0.26082+0.025750=0.286570\).

Slides p.7 prints \([0.2350725,\ 0.2865689]\) (more input digits). We are 95% confident that 1 cm³ more head size increases the mean brain weight by 0.2351 g to 0.2866 g.

[figure]
Figure 1-2. The \(t_{234}\) density: center area 0.95 (blue), each tail 0.025 (orange). Right boundary: \(t_{0.975,234}=1.970154\).

**Why · The interval formula** Added

Let \(q=t_{0.975,n-2}\) and \(T\sim t_{n-2}\).

1

\[0.95=P(-q\le T\le q)\]

\(t\) is symmetric. Each tail has area 0.025.

2

\[0.95=P\!\left(-q\le\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\le q\right)\]

The \(t_{n-2}\) result of Section 01.3.

3

\[0.95=P\!\left(-q\frac{\hat\sigma}{\sqrt{S_{xx}}}\le\hat\beta_1-\beta_1\le q\frac{\hat\sigma}{\sqrt{S_{xx}}}\right)\]

4

\[0.95=P\!\left(-q\frac{\hat\sigma}{\sqrt{S_{xx}}}\le\beta_1-\hat\beta_1\le q\frac{\hat\sigma}{\sqrt{S_{xx}}}\right)\]

5

\[0.95=P\!\left(\hat\beta_1-q\frac{\hat\sigma}{\sqrt{S_{xx}}}\le\beta_1\le\hat\beta_1+q\frac{\hat\sigma}{\sqrt{S_{xx}}}\right)\]

6

\[\hat\beta_1\pm t_{0.975,n-2}\times\mathrm{SE}(\hat\beta_1)\]

Use \(1-\alpha/2\) for 0.975 in general. ∎

In line 5, \(\hat\beta_1\) and \(\hat\sigma\) are random; \(\beta_1\) is fixed. 0.95 is the probability that the interval covers \(\beta_1\).

### 01.5 The hypothesis test for \(\beta_1\) Slides p.6

**What** Slides p.6

Hypothesis Testing · Lecture 4 · p.6 Want to test \(H_0:\beta_1=\theta_0\) vs \(H_1:\beta_1\neq\theta_0\).
Under \(H_0\): \(\dfrac{\hat\beta_1-\theta_0}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{n-2}\)

- P-value: What's the probability under the null of observing a test statistic as or more extreme than the one we observed?

- I.e. for \(T\sim t_{n-2}\) and our observed test statistic \(t^{obs}\): \(P(|T|\ge|t^{obs}|)\)

A hypothesis test decides if the data agree with a statement about a parameter.

The null hypothesis \(H_0:\beta_1=\theta_0\) is the tested statement. \(\theta_0\) is given, usually 0 (no linear relation).

The alternative hypothesis \(H_1:\beta_1\neq\theta_0\) is the statement if \(H_0\) is false. \(\neq\) makes the test two-sided.

The test statistic is \(\dfrac{\hat\beta_1-\theta_0}{\hat\sigma/\sqrt{S_{xx}}}\). \(t^{obs}\) is its value for our data.

The p-value is the probability, under \(H_0\), of a test statistic as extreme as \(t^{obs}\) or more.

A small p-value is evidence against \(H_0\).

**How** Added

Test \(H_0:\beta_1=\theta_0\) vs \(H_1:\beta_1\neq\theta_0\)

- Write \(H_0\) and \(H_1\). Find \(\theta_0\).
- Get \(\hat\beta_1\) and \(\mathrm{SE}(\hat\beta_1)\).
- Calculate \(t^{obs}=(\hat\beta_1-\theta_0)/\mathrm{SE}(\hat\beta_1)\).
- Calculate the p-value \(2P(T\ge|t^{obs}|)\), with \(T\sim t_{n-2}\).
- Compare the p-value with the significance level \(\alpha\), usually 0.05.
- If the p-value < \(\alpha\), reject \(H_0\). If not, do not reject it.

**Self-check:** For \(\theta_0=0\), the 95% CI excludes 0 exactly when the p-value < 0.05.

**Example 7 · Test \(H_0:\beta_1=0\) for the small data set** Added

Step 1: \(H_0:\beta_1=0\) vs \(H_1:\beta_1\neq0\). \(\theta_0=0\).

Step 2: \(\hat\beta_1=0.6\) and \(\mathrm{SE}(\hat\beta_1)=0.282843\).

Step 3: \(t^{obs}=(0.6-0)/0.282843=2.121320\).

Step 4: \(2P(T\ge2.121320)=0.124027\), with \(T\sim t_3\).

Step 5–6: \(0.124027>0.05\). Do not reject \(H_0\).

The 95% CI of Example 5, \([-0.300132,\ 1.500132]\), also contains 0.

**Example 8 · Test \(H_0:\beta_1=0\) for the brainhead data** Slides p.7

Step 1: \(H_0:\beta_1=0\) vs \(H_1:\beta_1\neq0\). \(\theta_0=0\).

Step 2: \(\hat\beta_1=0.26082\) and \(\mathrm{SE}(\hat\beta_1)=0.01307\).

Step 3: \(t^{obs}=(0.26082-0)/0.01307=19.956\). Slides p.7 prints 19.957 (more input digits).

Step 4: \(2P(T\ge19.957)=2.03\times10^{-52}\), \(T\sim t_{234}\). Slides p.7 prints "< \(2\times10^{-16}\)".

Step 5–6: The p-value is much less than 0.05. Reject \(H_0\).

[figure]
Figure 1-3. The \(t_{234}\) density of \(T\) under \(H_0\), almost all between \(-4\) and 4. \(t^{obs}=19.957\) is far right; its tail area is too small to see.

Head size and brain weight have a linear relation. The 95% CI \([0.2351,\ 0.2866]\) also excludes 0.

**Why · The test statistic has the \(t_{n-2}\) distribution** Added

1

\[\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{n-2}\]

Section 01.3, line 18. True for each \(\beta_1\).

2

\[\frac{\hat\beta_1-\theta_0}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{n-2}\quad\text{under }H_0\]

\(H_0\) gives \(\beta_1=\theta_0\).

3

\[P(|T|\ge|t^{obs}|)=P(T\ge|t^{obs}|)+P(T\le-|t^{obs}|)\]

4

\[P(|T|\ge|t^{obs}|)=2P(T\ge|t^{obs}|)\]

\(t\) is symmetric about 0. ∎

### 01.6 The brainhead results on Slides p.7 Slides p.7

**What** Slides p.7

Intercept: estimate \(\hat\beta_0=335.43231\), standard error 47.77644, \(t\) value 7.021, p-value \(2.37\times10^{-11}\).

Slope: estimate \(\hat\beta_1=0.26082\), standard error 0.01307, \(t\) value 19.957, p-value less than \(2\times10^{-16}\).

\(\hat\sigma=72.35\) on 234 degrees of freedom.

95% CI for \(\beta_0\): \([241.3053884,\ 429.5592416]\).

95% CI for \(\beta_1\): \([0.2350725,\ 0.2865689]\).

Later lectures explain the numbers below.

Residuals: minimum \(-174.88\), first quartile \(-49.03\), median \(-2.40\), third quartile 46.72, maximum 242.41.

\(R^2=0.6299\) and adjusted \(R^2=0.6283\).

F-statistic 398.3 on 1 and 234 degrees of freedom, p-value less than \(2.2\times10^{-16}\).

**How** Added

Connect the printed numbers to the formulas

- Match each estimate to \(\hat\beta_0\) or \(\hat\beta_1\).
- Match the slope standard error to \(\mathrm{SE}(\hat\beta_1)=\hat\sigma/\sqrt{S_{xx}}\).
- Divide each estimate by its standard error: \(t^{obs}\) for \(\theta_0=0\).
- Match each p-value to \(P(|T|\ge|t^{obs}|)\), \(T\sim t_{n-2}\).
- Add 2 to the degrees of freedom: \(n\).
- Compare the midpoint of each CI with the estimate.

**Self-check:** Each \(t\) value is the estimate divided by its standard error.

**Example 9 · Check each number** Slides p.7

Step 1: \(\hat\beta_0=335.43231\) and \(\hat\beta_1=0.26082\).

Step 2: \(\mathrm{SE}(\hat\beta_1)=0.01307\).

Step 3: Slope: \(0.26082/0.01307=19.956\). Slides p.7 prints 19.957 (more input digits).

Intercept: \(335.43231/47.77644=7.021\), as printed.

Step 4: \(2P(T\ge7.021)=2.37\times10^{-11}\) with \(T\sim t_{234}\), as printed.

Step 5: \(n=234+2=236\).

Step 6: Slope CI midpoint: \((0.2350725+0.2865689)/2=0.5216414/2=0.2608207\). This rounds to 0.26082.

Intercept CI midpoint: \((241.3053884+429.5592416)/2=670.8646300/2=335.432315\). This rounds to 335.43231.

### 01.7 Practice Added

**Q1.** From Slides p.7, calculate a 90% CI for \(\beta_1\). Use \(t_{0.95,234}=1.651391\). Interpret it.

Answer

Step 1: \(\hat\beta_1=0.26082\) and \(\mathrm{SE}(\hat\beta_1)=0.01307\).

Step 2: \(\alpha=0.10\) and \(1-\alpha/2=0.95\). The quantile is \(t_{0.95,234}=1.651391\).

Step 3: Half-width \(=1.651391\times0.01307=0.021584\).

Step 4: \(0.26082-0.021584=0.239236\) and \(0.26082+0.021584=0.282404\).

The 90% CI is \([0.239236,\ 0.282404]\). We are 90% confident that 1 cm³ more head size increases the mean brain weight by 0.2392 g to 0.2824 g. It is narrower than the 95% CI because 1.651391 < 1.970154.

**Q2.** Test \(H_0:\beta_1=0.25\) vs \(H_1:\beta_1\neq0.25\) at the 5% level. Report \(t^{obs}\), the p-value, and your conclusion.

Answer

Step 1: \(\theta_0=0.25\).

Step 2: \(t^{obs}=(0.26082-0.25)/0.01307=0.01082/0.01307=0.82785\).

Step 3: \(2P(T\ge0.82785)=0.4086\), with \(T\sim t_{234}\).

Step 4: \(0.4086>0.05\). Do not reject \(H_0\). The data agree with \(\beta_1=0.25\).

The 95% CI \([0.2351,\ 0.2866]\) also contains 0.25.

**Q3.** Verify the 95% CI for \(\beta_0\) on Slides p.7. Use \(t_{0.975,234}=1.970154\).

Answer

Step 1: \(\hat\beta_0=335.43231\), with standard error 47.77644.

Step 2: Half-width \(=1.970154\times47.77644=94.1269\).

Step 3: \(335.43231-94.1269=241.3054\) and \(335.43231+94.1269=429.5592\).

This agrees with \([241.3053884,\ 429.5592416]\) on Slides p.7.

## 02 · Point estimate of the mean response and its distribution

Plan · Slides p.8–18

\(\hat\mu_0\) and its second form (p.10–13), \(E[\hat\mu_0]\) (p.14–15), \(\mathrm{Var}[\hat\mu_0]\) (p.16–17), distribution (p.18).

Slides p.8 Page 8 repeats the Lecture 4 title page.

Slides p.9 Page 9 is the section page "Estimating Mean Response".

Model and notation from earlier · Slides p.3–4 (unit 01 defines each item)

Model: \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\), or \(y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\).

Estimators: \(\hat\beta_1=S_{xy}/S_{xx}\), \(\hat\beta_0=\bar y-\hat\beta_1\bar x\), with \(S_{xx}=\sum_{i=1}^n(x_i-\bar x)^2\), \(S_{xy}=\sum_{i=1}^n(y_i-\bar y)(x_i-\bar x)\).

An estimator is random. An estimate is its number for one data set.

Example data · Slides p.7 and Added

Brainhead data: \(n=236\) persons, \(x_i\) head size (cm³), \(y_i\) brain weight (g).

Slides p.7: \(\hat\beta_0=335.43231\), \(\hat\beta_1=0.26082\), \(\hat\sigma=72.35\), \(n-2=234\).

From brainhead.csv (Added): \(\bar x=3637.864\), \(\bar y=1284.263\), \(S_{xx}=30647233.66\), \(\hat\beta_1=0.2608207\).

### 02.1 The mean response \(\mu_0\) and its point estimate \(\hat\mu_0\) Slides p.10–13

**What** Slides p.10

Lecture 4 · p.10 Recall the mean response is \(E[y_i\mid x_i]=\beta_0+\beta_1x_i\).
For an arbitrary \(x_0\), the mean outcome is \(\mu_0:=E[y_0\mid x_0]=\beta_0+\beta_1x_0\).
We can estimate this as \[\hat\mu_0=\hat\beta_0+\hat\beta_1x_0\]

The conditional expectation \(E[y\mid x]\) is the long-run average of \(y\) at one fixed \(x\).

The mean response \(E[y\mid x]\) is the height \(\beta_0+\beta_1x\) of the true line, because \(E[\epsilon]=0\).

\(x_0\) is a covariate value of interest, not necessarily in the data. \(y_0\) is the response at \(x_0\).

The symbol \(:=\) means "is defined as".

A point estimate is one number that estimates an unknown quantity. \(\hat\mu_0\) is the point estimate of \(\mu_0\).

\(\mu_0\) is unknown, because \(\beta_0\) and \(\beta_1\) are unknown. \(\hat\mu_0\), the height of the fitted line at \(x_0\), comes from the data.

Lecture 4 · p.11–13 \[\hat\mu_0=\hat\beta_0+\hat\beta_1x_0=\left(\bar y-\hat\beta_1\bar x\right)+\hat\beta_1x_0=\bar y+\hat\beta_1(x_0-\bar x)\] Intuition?
• What happens at \(\bar x\)?

The second form starts at the center \((\bar x,\bar y)\). It moves along the fitted line by \(x_0-\bar x\), with height change \(\hat\beta_1\) per unit.

At \(x_0=\bar x\) (Slides p.13), the distance is 0, and \(\hat\mu_0=\bar y\).

**How** Added

Calculate \(\hat\mu_0\)

- Calculate \(n\), \(\bar x\), \(\bar y\), \(S_{xx}\) and \(S_{xy}\).
- Calculate \(\hat\beta_1=S_{xy}/S_{xx}\) and \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).
- Form 1 (Slides p.10): put \(x_0\) into \(\hat\mu_0=\hat\beta_0+\hat\beta_1x_0\).
- Form 2 (Slides p.12): calculate \(x_0-\bar x\).
- Calculate \(\bar y+\hat\beta_1(x_0-\bar x)\).

**Self-check:** ① Both forms agree, to rounding. ② At \(x_0=\bar x\), the result is \(\bar y\). ③ If \(\hat\beta_1>0\) and \(x_0>\bar x\), the result is above \(\bar y\).

**Example 1 · The brainhead data at \(x_0=4000\) cm³** Added

1

Start values How step 1

\[n=236,\quad \bar x=3637.864,\quad \bar y=1284.263,\quad S_{xx}=30647233.66\]

From brainhead.csv (Added).

2

Coefficients How step 2

\[\hat\beta_1=0.2608207,\qquad \hat\beta_0=335.4323\]

Basis: Slides p.4. Slides p.7 prints 335.43231 and 0.26082.

3

Form 1 How step 3 · Slides p.10

\[\hat\mu_0=\hat\beta_0+\hat\beta_1x_0\]

\[\hat\mu_0=335.4323+0.2608207\times4000\]

\[\hat\mu_0=335.4323+1043.2828=1378.7151\]

4

Form 2 How steps 4–5 · Slides p.12

\[x_0-\bar x=4000-3637.864=362.136\]

\[\hat\beta_1(x_0-\bar x)=0.2608207\times362.136=94.452\]

\[\hat\mu_0=\bar y+\hat\beta_1(x_0-\bar x)=1284.263+94.452=1378.715\]

**Self-check:** Both forms give 1378.715, above \(\bar y=1284.263\) (check ③).

5

At \(x_0=\bar x\) Slides p.13

\[\hat\mu_0=\bar y+\hat\beta_1(\bar x-\bar x)=\bar y+\hat\beta_1\times0=\bar y=1284.263\]

[figure]
Figure 2-1. Brainhead data (blue), fitted line (orange), center \((\bar x,\bar y)\) (purple), and \(\hat\mu_0=1378.715\) at \(x_0=4000\) (green). From purple, move right \(x_0-\bar x=362.1\); the height increases \(\hat\beta_1\times362.1=94.45\).

At 4000 cm³, the estimated mean brain weight is \(\hat\mu_0=1378.715\) g. At \(x_0=\bar x\), it is \(\bar y=1284.263\) g.

**Why · The two forms are equal** Slides p.10–13

1

\[\hat\mu_0=\hat\beta_0+\hat\beta_1x_0\]

Definition, Slides p.10.

2

\[=\left(\bar y-\hat\beta_1\bar x\right)+\hat\beta_1x_0\]

Slides p.4, p.11.

3

\[=\bar y+\hat\beta_1x_0-\hat\beta_1\bar x\]

4

\[=\bar y+\hat\beta_1(x_0-\bar x)\]

Slides p.12. ∎

At \(x_0=\bar x\) (Slides p.13):

1

\[\hat\mu_0=\bar y+\hat\beta_1(\bar x-\bar x)\]

2

\[=\bar y+\hat\beta_1\times0\]

3

\[=\bar y\]

The fitted line contains \((\bar x,\bar y)\). ∎

### 02.2 \(\hat\mu_0\) is unbiased Slides p.14–15

**What** Slides p.15

Lecture 4 · p.15 \[E[\hat\mu_0]=E[\hat\beta_0+\hat\beta_1x_0]=E[\hat\beta_0]+E[\hat\beta_1]x_0=\beta_0+\beta_1x_0\]

An estimator is unbiased when its expectation equals the parameter it estimates. \(E[\hat\mu_0]=\mu_0\).

Repeated sampling: keep \(x_1,\dots,x_n\), get new \(y_1,\dots,y_n\), and calculate \(\hat\mu_0\) again.

One \(\hat\mu_0\) can be too high or too low. On average over repeated samples, it is correct.

**How** Added

Find \(E[\hat\mu_0]\)

- Write \(\hat\mu_0=\hat\beta_0+\hat\beta_1x_0\).
- Use linearity of expectation: \(E[aU+bV]=aE[U]+bE[V]\) for constants \(a\), \(b\).
- Treat \(x_0\) as a constant.
- Put in \(E[\hat\beta_0]=\beta_0\) and \(E[\hat\beta_1]=\beta_1\) (Lecture 3).

**Self-check:** The result has no hat. It is \(\beta_0+\beta_1x_0=\mu_0\).

**Example 2 · A small data set with known parameters** Added

Real data have unknown \(\beta_0\), \(\beta_1\). This example sets them: \(n=3\), \(x=(1,2,3)\), \(\beta_0=2\), \(\beta_1=0.5\), \(x_0=4\).

Write \(\hat\mu_0=\sum_{i=1}^n c_iy_i\), with weight \(c_i=\frac1n+\frac{(x_i-\bar x)(x_0-\bar x)}{S_{xx}}\) (Section 02.3, line 6).

1

Center and spread of \(x\)

\[\bar x=\frac{1+2+3}{3}=\frac{6}{3}=2\]

\[S_{xx}=(1-2)^2+(2-2)^2+(3-2)^2=1+0+1=2\]

\[x_0-\bar x=4-2=2\]

2

Weights \(c_i\)

\[c_1=\frac13+\frac{(1-2)(2)}{2}=\frac13-1=-\frac23\]

\[c_2=\frac13+\frac{(2-2)(2)}{2}=\frac13+0=\frac13\]

\[c_3=\frac13+\frac{(3-2)(2)}{2}=\frac13+1=\frac43\]

3

Expected responses

\[E[y_1]=2+0.5\times1=2.5,\quad E[y_2]=2+0.5\times2=3,\quad E[y_3]=2+0.5\times3=3.5\]

\(E[y_i]=\beta_0+\beta_1x_i\) (Slides p.3).

4

Expectation of \(\hat\mu_0\)

\[E[\hat\mu_0]=c_1E[y_1]+c_2E[y_2]+c_3E[y_3]\]

\[=-\frac23\times2.5+\frac13\times3+\frac43\times3.5\]

\[=-\frac53+1+\frac{14}3=\frac{-5+3+14}{3}=\frac{12}{3}=4\]

5

True mean response

\[\mu_0=\beta_0+\beta_1x_0=2+0.5\times4=2+2=4\]

**Self-check:** \(E[\hat\mu_0]=4=\mu_0\).

**Why · \(\hat\mu_0\) is unbiased** Slides p.14–15

1

\[E[\hat\mu_0]=E[\hat\beta_0+\hat\beta_1x_0]\]

Slides p.10.

2

\[=E[\hat\beta_0]+E[\hat\beta_1x_0]\]

Linearity of expectation.

3

\[=E[\hat\beta_0]+E[\hat\beta_1]x_0\]

\(x_0\) is a constant.

4

\[=\beta_0+\beta_1x_0\]

Lecture 3.

5

\[=\mu_0\]

Slides p.10. ∎

### 02.3 The variance of \(\hat\mu_0\) Slides p.16–17

**What** Slides p.17

Lecture 4 · p.17 \[\mathrm{Var}[\hat\mu_0]=\sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right)\]

The denominator is \(S_{xx}\).

The first term, \(\sigma^2/n\), does not change with \(x_0\).

The second term, \(\sigma^2(x_0-\bar x)^2/S_{xx}\), increases as \(x_0\) moves away from \(\bar x\).

The variance is smallest, \(\sigma^2/n\), at \(x_0=\bar x\). Away from the center, the distance multiplies the error in \(\hat\beta_1\).

**How** Added

Calculate \(\mathrm{Var}[\hat\mu_0]\)

- Calculate \(1/n\).
- Calculate \((x_0-\bar x)^2/S_{xx}\).
- Add them to get the factor \(\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}\).
- Multiply the factor by \(\sigma^2\).
- For a number, use \(\hat\sigma\) for \(\sigma\) and take the square root.

**Self-check:** ① The factor is at least \(1/n\). ② At \(x_0=\bar x\), it is \(1/n\). ③ Equal distances from \(\bar x\) give equal variances.

Slides p.7 prints \(\hat\sigma=72.35\).

**Example 3 · The brainhead data at \(x_0=4000\) and \(x_0=\bar x\)** Added

1

\(x_0=4000\): the two terms How steps 1–2

\[\frac1n=\frac1{236}=0.004237288\]

\[(x_0-\bar x)^2=362.1356^2=131142.19\]

\[\frac{(x_0-\bar x)^2}{S_{xx}}=\frac{131142.19}{30647233.66}=0.004279087\]

2

\(x_0=4000\): the factor How step 3

\[\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}=0.004237288+0.004279087=0.008516375\]

3

\(x_0=4000\): multiply by \(\sigma^2\) How steps 4–5

\[\mathrm{Var}[\hat\mu_0]=\sigma^2\times0.008516375\]

\[\sqrt{0.008516375}=0.09228421\]

\[\hat\sigma\sqrt{0.008516375}=72.35\times0.09228421=6.677\]

4

\(x_0=\bar x\)

\[\frac1n+\frac{(\bar x-\bar x)^2}{S_{xx}}=\frac1n+0=0.004237288\]

\[\sqrt{236}=15.36229\]

\[\hat\sigma\sqrt{1/n}=\frac{72.35}{15.36229}=4.710\]

**Self-check:** 4.710 < 6.677. The estimate is most precise at the center.

[figure]
Figure 2-2. \(\hat\sigma\sqrt{1/n+(x_0-\bar x)^2/S_{xx}}\) for the brainhead data. Minimum \(\hat\sigma/\sqrt n=4.710\) at \(x_0=\bar x\); 6.677 at \(x_0=4000\).

**Example 4 · The small data set of Example 2** Added

Calculate \(\mathrm{Var}[\hat\mu_0]\) in two ways for \(x=(1,2,3)\), \(x_0=4\).

1

Formula from Slides p.17

\[\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}=\frac13+\frac{2^2}{2}=\frac13+2=\frac73\]

2

Sum of squared weights

\[\sum_{i=1}^3c_i^2=\left(-\frac23\right)^2+\left(\frac13\right)^2+\left(\frac43\right)^2=\frac49+\frac19+\frac{16}9=\frac{21}9=\frac73\]

Line 7 below: \(\mathrm{Var}[\hat\mu_0]=\sigma^2\sum c_i^2\).

**Self-check:** Both give \(\mathrm{Var}[\hat\mu_0]=\frac73\sigma^2\).

**Why · The chain for the variance** Slides p.16–17

The chain follows Slides p.17, with one change per line.

Fact A (model): \(y_1,\dots,y_n\) are independent, and \(\mathrm{Var}[y_i]=\sigma^2\).

Fact B (Lecture 2): \(\mathrm{Var}(aY)=a^2\mathrm{Var}(Y)\). For independent \(X\) and \(Y\), \(\mathrm{Var}(X+Y)=\mathrm{Var}(X)+\mathrm{Var}(Y)\).

Fact C: \(\sum_{i=1}^n(x_i-\bar x)=\sum_{i=1}^n x_i-n\bar x=n\bar x-n\bar x=0\).

Fact D (Lecture 3): \(\hat\beta_1=\sum_{i=1}^n w_iy_i\), with fixed \(w_i=\frac{x_i-\bar x}{S_{xx}}\).

1

\[\mathrm{Var}[\hat\mu_0]=\mathrm{Var}[\hat\beta_0+\hat\beta_1x_0]\]

Slides p.10.

2

\[=\mathrm{Var}[(\bar y-\hat\beta_1\bar x)+\hat\beta_1x_0]\]

Put in \(\hat\beta_0\).

3

\[=\mathrm{Var}[\bar y+\hat\beta_1(x_0-\bar x)]\]

As in Section 02.1.

4

\[=\mathrm{Var}\left[\left(\sum_{i=1}^n\frac1n y_i\right)+\hat\beta_1(x_0-\bar x)\right]\]

Put in \(\bar y=\sum_{i=1}^n\frac1n y_i\). (Added: split.)

5

\[=\mathrm{Var}\left[\left(\sum_{i=1}^n\frac1n y_i\right)+\left(\sum_{i=1}^n\frac{x_i-\bar x}{S_{xx}}y_i\right)(x_0-\bar x)\right]\]

Fact D.

6

\[=\mathrm{Var}\left[\sum_{i=1}^n\left(\frac1n+\frac{(x_i-\bar x)(x_0-\bar x)}{S_{xx}}\right)y_i\right]\]

Join the two sums.

7

\[=\sum_{i=1}^n\left(\frac1n+\frac{(x_i-\bar x)(x_0-\bar x)}{S_{xx}}\right)^2\mathrm{Var}[y_i]\]

Facts A and B. (Added: split.)

8

\[=\sum_{i=1}^n\left(\frac1n+\frac{(x_i-\bar x)(x_0-\bar x)}{S_{xx}}\right)^2\sigma^2\]

Fact A.

9

\[=\sigma^2\sum_{i=1}^n\left(\frac1{n^2}+\frac{(x_i-\bar x)^2(x_0-\bar x)^2}{S_{xx}^2}+2\,\frac1n\,\frac{(x_i-\bar x)(x_0-\bar x)}{S_{xx}}\right)\]

\((a+b)^2=a^2+b^2+2ab\).

10

\[=\sigma^2\left(\sum_{i=1}^n\frac1{n^2}+\sum_{i=1}^n\frac{(x_i-\bar x)^2(x_0-\bar x)^2}{S_{xx}^2}+2\sum_{i=1}^n\frac1n\,\frac{(x_i-\bar x)(x_0-\bar x)}{S_{xx}}\right)\]

Split into three sums.

11

\[=\sigma^2\left(\frac1n+\sum_{i=1}^n\frac{(x_i-\bar x)^2(x_0-\bar x)^2}{S_{xx}^2}+2\sum_{i=1}^n\frac1n\,\frac{(x_i-\bar x)(x_0-\bar x)}{S_{xx}}\right)\]

\(\sum_{i=1}^n\frac1{n^2}=n\cdot\frac1{n^2}=\frac1n\). (Added: split.)

12

\[=\sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}^2}\sum_{i=1}^n(x_i-\bar x)^2+2\sum_{i=1}^n\frac1n\,\frac{(x_i-\bar x)(x_0-\bar x)}{S_{xx}}\right)\]

Move the constant out. (Added: split.)

13

\[=\sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}^2}S_{xx}+2\sum_{i=1}^n\frac1n\,\frac{(x_i-\bar x)(x_0-\bar x)}{S_{xx}}\right)\]

Definition of \(S_{xx}\). (Added: split.)

14

\[=\sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}^2}S_{xx}+2\,\frac1n\,\frac{(x_0-\bar x)}{S_{xx}}\sum_{i=1}^n(x_i-\bar x)\right)\]

Move the constant out. Second-last line, Slides p.17.

15

\[=\sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}^2}S_{xx}+2\,\frac1n\,\frac{(x_0-\bar x)}{S_{xx}}\cdot0\right)\]

Fact C. (Added: split.)

16

\[=\sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}\right)\]

\(S_{xx}/S_{xx}^2=1/S_{xx}\). (Added: split.)

17

\[=\sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right)\]

Last line, Slides p.17. ∎

Number check (Added): the three sums of line 10 for \(x=(1,2,3)\), \(x_0=4\), \(\bar x=2\), \(S_{xx}=2\), \(x_0-\bar x=2\).

First: \(\sum_{i=1}^3\frac1{3^2}=3\times\frac19=\frac13\).

Second: \(\frac{(1)(4)+(0)(4)+(1)(4)}{2^2}=\frac{8}{4}=2\), equal to \((x_0-\bar x)^2/S_{xx}=4/2=2\).

Third: \(2\times\frac13\times\frac{(-1)(2)+(0)(2)+(1)(2)}{2}=2\times\frac13\times\frac{0}{2}=0\).

Total: \(\frac13+2+0=\frac73\), as in Example 4.

### 02.4 The distribution of \(\hat\mu_0\) Slides p.18

**What** Slides p.18

Lecture 4 · p.18 \[\Longrightarrow\ \hat\mu_0\sim N\!\left[\mu_0,\ \sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right)\right]\qquad\text{(why?)}\]

The symbol \(\sim\) means "has the distribution".

A linear combination is \(\sum_{i=1}^n c_iy_i\) with fixed numbers \(c_i\).

**How** Added

Write the distribution of \(\hat\mu_0\)

- Family: \(\hat\mu_0\) is a linear combination of independent normal \(y_i\). It is normal.
- Mean: \(E[\hat\mu_0]=\mu_0=\beta_0+\beta_1x_0\) (Section 02.2).
- Variance: \(\sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}\right)\) (Section 02.3).
- Put in \(n\), \(\bar x\), \(S_{xx}\) and \(x_0\).

**Self-check:** The mean has no hat. The only unknown in the variance is \(\sigma^2\).

**Example 5 · The brainhead data at \(x_0=4000\)** Added

1

Family How step 1

\[\hat\mu_0=\sum_{i=1}^{236}\left(\frac1{236}+\frac{(x_i-3637.864)(362.136)}{30647233.66}\right)y_i\]

Fixed weights, independent normal \(y_i\): normal.

2

Mean How step 2

\[E[\hat\mu_0]=\mu_0=\beta_0+4000\,\beta_1\]

3

Variance How steps 3–4

\[\hat\mu_0\sim N\!\left[\beta_0+4000\,\beta_1,\ \sigma^2\times0.008516375\right]\]

Factor 0.008516375: Example 3. Data value: \(\hat\mu_0=1378.715\).

**Why · \(\hat\mu_0\) is normal (the "why?" on Slides p.18)** Slides p.18

1

\[\hat\mu_0=\sum_{i=1}^n\left(\frac1n+\frac{(x_i-\bar x)(x_0-\bar x)}{S_{xx}}\right)y_i\]

Section 02.3, line 6. Each weight uses only \(n\), \(x_i\), \(\bar x\), \(x_0\), \(S_{xx}\): a fixed number.

2

\[y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\sigma^2)\]

Slides p.3.

3

\[\hat\mu_0\ \text{is a linear combination of independent normals}\ \Longrightarrow\ \hat\mu_0\ \text{is normal}\]

Same rule as for \(\hat\beta_1=\sum w_iy_i\) (Lecture 3).

4

\[E[\hat\mu_0]=\mu_0\]

Section 02.2 (Slides p.15).

5

\[\hat\mu_0\sim N\!\left[\mu_0,\ \sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right)\right]\]

Variance: Section 02.3 (Slides p.17). ∎

### 02.5 Practice Added

**Q1.** Brainhead data: \(n=236\), \(\bar x=3637.864\), \(\bar y=1284.263\), \(\hat\beta_0=335.4323\), \(\hat\beta_1=0.2608207\). Calculate \(\hat\mu_0\) at \(x_0=3000\) cm³ in two ways: (a) \(\hat\beta_0+\hat\beta_1x_0\); (b) \(\bar y+\hat\beta_1(x_0-\bar x)\).

Answer

(a) \(0.2608207\times3000=782.4621\). \(\hat\mu_0=335.4323+782.4621=1117.894\).

(b) \(x_0-\bar x=3000-3637.864=-637.864\).

\(\hat\beta_1(x_0-\bar x)=0.2608207\times(-637.864)=-166.368\).

\(\hat\mu_0=1284.263-166.368=1117.895\). This agrees with (a) to rounding (1117.894).

\(x_0<\bar x\) and \(\hat\beta_1>0\): the result is below \(\bar y\).

**Q2.** Show that \(\mathrm{Var}[\hat\mu_0]\) is smallest at \(x_0=\bar x\). Give its value there in terms of \(\sigma^2\) and \(n\).

Answer

\(\mathrm{Var}[\hat\mu_0]=\sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}\right)\).

\(\sigma^2/n\) does not change with \(x_0\). \((x_0-\bar x)^2\geq0\) and \(S_{xx}>0\). The second term is 0 only at \(x_0=\bar x\), and positive elsewhere.

At \(x_0=\bar x\):

\[\mathrm{Var}[\hat\mu_0]=\sigma^2\left(\frac1n+\frac{(\bar x-\bar x)^2}{S_{xx}}\right)=\sigma^2\left(\frac1n+0\right)=\frac{\sigma^2}{n}\]

There \(\hat\mu_0=\bar y\), and \(\mathrm{Var}[\bar y]=\sigma^2/n\) agrees.

**Q3.** Brainhead data, \(S_{xx}=30647233.66\). Calculate \(\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}\) at \(x_0=3000\) and \(x_0=4500\). Where is the estimate of \(\mu_0\) more precise? Use the distance to \(\bar x\).

Answer

\(x_0=3000\): \(x_0-\bar x=-637.8644\), \((x_0-\bar x)^2=406871.0\), \(406871.0/30647233.66=0.01327595\). Factor: \(0.004237288+0.01327595=0.01751323\).

\(x_0=4500\): \(x_0-\bar x=862.1356\), \((x_0-\bar x)^2=743277.8\), \(743277.8/30647233.66=0.02425269\). Factor: \(0.004237288+0.02425269=0.02848998\).

0.01751323 < 0.02848998: the estimate is more precise at \(x_0=3000\).

3000 is 637.9 from \(\bar x\); 4500 is 862.1 from \(\bar x\). The variance increases with \((x_0-\bar x)^2\).

## 03 · Confidence interval for the mean response

Start point · Slides p.3, p.7, p.10–18

Brainhead data, \(n=236\). Slides p.7: \(\hat\beta_0=335.43231\), \(\hat\beta_1=0.26082\), \(\hat\sigma=72.35\) on 234 degrees of freedom.

More digits from brainhead.csv (Added): \(\hat\beta_0=335.432315\), \(\hat\beta_1=0.2608207153\), \(\hat\sigma=72.35066237\), \(\bar x=3637.864407\), \(S_{xx}=30647233.66\).

Start result (Slides p.18):
\[\hat\mu_0\sim N\!\left(\mu_0,\ \sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right)\right)\]

### 03.1 Standardize: from \(N(0,1)\) to \(t_{n-2}\) Slides p.19

**What** Slides p.19

Lecture 4 · p.19 So \[\frac{\hat\mu_0-\mu_0}{\sigma\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}}\sim N(0,1)\] And by the same logic as before: \[\frac{\hat\mu_0-\mu_0}{\hat\sigma\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}}\sim t_{n-2}\]

To standardize a normal quantity, subtract its mean and divide by its standard deviation.

The first line contains the unknown \(\sigma\). We cannot calculate it from data.

The second line uses \(\hat\sigma\) for \(\sigma\). This changes \(N(0,1)\) to \(t_{n-2}\).

\(\mathrm{SE}(\hat\mu_0)=\hat\sigma\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}}\) estimates the standard deviation of \(\hat\mu_0\).

**How** Added

Calculate the standard error of \(\hat\mu_0\)

- Calculate \(n\), \(\bar x\) and \(S_{xx}\).
- Calculate \(\hat\beta_0\), \(\hat\beta_1\), the residuals \(e_i\) and \(\hat\sigma\).
- Calculate \((x_0-\bar x)^2\).
- Divide by \(S_{xx}\).
- Add \(1/n\).
- Take the square root.
- Multiply by \(\hat\sigma\).

**Self-check:** ① The unit of SE is the unit of \(y\) (g). ② The step 5 sum is much less than 1. SE must be much less than \(\hat\sigma\).

**Example 1 · Standard error at \(x_0=4000\)** Added

Steps 1–2 come from the start point.

1

Distance from \(\bar x\) How step 3

\[x_0-\bar x=4000-3637.864407=362.1355932\]

\[(x_0-\bar x)^2=362.1355932^2=131142.1879\]

2

Divide by \(S_{xx}\) How step 4

\[\frac{(x_0-\bar x)^2}{S_{xx}}=\frac{131142.1879}{30647233.66}=0.004279087285\]

3

Add \(1/n\) How step 5

\[\frac1n=\frac1{236}=0.004237288136\]

\[0.004237288136+0.004279087285=0.008516375421\]

4

Square root How step 6

\[\sqrt{0.008516375421}=0.09228421003\]

5

Multiply by \(\hat\sigma\) How step 7

\[\mathrm{SE}(\hat\mu_0)=72.35066237\times0.09228421003=6.676823721\]

6.676823721 g is much less than \(\hat\sigma=72.35066237\) g. ▲

**Why** Added

Same logic as Lecture 3 p.31 for \(\hat\beta_1\). Let \(c_0=\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}\).

1

\[\hat\mu_0\sim N\!\left(\mu_0,\ \sigma^2c_0\right)\]

Slides p.18.

2

\[\hat\mu_0-\mu_0\sim N\!\left(0,\ \sigma^2c_0\right)\]

3

\[Z=\frac{\hat\mu_0-\mu_0}{\sigma\sqrt{c_0}}\sim N(0,1)\]

First line of Slides p.19.

4

\[V=\frac1{\sigma^2}\sum_{i=1}^n e_i^2\sim\chi^2_{(n-2)}\]

Lecture 3 p.31: \(Z\), \(V\) independent.

5

\[\frac{Z}{\sqrt{V/(n-2)}}\sim t_{n-2}\]

Lecture 3 p.31.

6

\[\sqrt{\frac{V}{n-2}}=\sqrt{\frac{\sum_{i=1}^n e_i^2}{\sigma^2(n-2)}}=\frac{\hat\sigma}{\sigma}\]

7

\[\frac{Z}{\sqrt{V/(n-2)}}=\frac{\hat\mu_0-\mu_0}{\sigma\sqrt{c_0}}\cdot\frac{\sigma}{\hat\sigma}\]

8

\[\frac{\hat\mu_0-\mu_0}{\hat\sigma\sqrt{c_0}}\sim t_{n-2}\]

Second line of Slides p.19. ∎

Two random quantities are independent when the value of one gives no information about the other.

### 03.2 The \(100(1-\alpha)\%\) confidence interval for \(\mu_0\) Slides p.20

**What** Slides p.20

Lecture 4 · p.20 \[\Longrightarrow\ 1-\alpha=P\!\left(-t_{1-\frac\alpha2,\,n-2}\le\frac{\hat\mu_0-\mu_0}{\hat\sigma\left(\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right)^{1/2}}\le t_{1-\frac\alpha2,\,n-2}\right)\] and a 100(1-α)% CI is: \[\hat\mu_0\pm t_{1-\frac\alpha2,\,n-2}\,\hat\sigma\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}\]

With repeated samples, \(100(1-\alpha)\%\) of these intervals contain the true \(\mu_0\).

The interval is "center ± quantile × standard error", with center \(\hat\mu_0\).

The half-width is \(t_{1-\alpha/2,\,n-2}\times\mathrm{SE}(\hat\mu_0)\).

**How** Added

Calculate the CI for \(\mu_0\) at a value \(x_0\)

- Calculate \(\mathrm{SE}(\hat\mu_0)\) (Section 03.1).
- Calculate the center \(\hat\mu_0=\hat\beta_0+\hat\beta_1x_0\).
- Find the quantile \(t_{1-\alpha/2,\,n-2}\).
- Multiply the quantile by \(\mathrm{SE}(\hat\mu_0)\) to get the half-width.
- Lower limit \(L\): \(\hat\mu_0\) minus the half-width.
- Upper limit \(U\): \(\hat\mu_0\) plus the half-width.

**Self-check:** ① \((L+U)/2=\hat\mu_0\). ② At 95% with \(n=236\), the quantile is 1.970, near 1.96.

**Example 2 · 95% CI for the mean brain weight at \(x_0=4000\)** Added

Example 1 gives \(\mathrm{SE}(\hat\mu_0)=6.676823721\) (How step 1).

1

Center How step 2

\[\hat\mu_0=\hat\beta_0+\hat\beta_1x_0=335.432315+0.2608207153\times4000\]

\[=335.432315+1043.282861\]

\[=1378.715176\]

2

Quantile How step 3

\[\alpha=0.05,\quad 1-\frac\alpha2=0.975,\quad n-2=236-2=234\]

\[t_{0.975,\,234}=1.970153643\]

3

Half-width How step 4

\[t_{0.975,\,234}\times\mathrm{SE}(\hat\mu_0)=1.970153643\times6.676823721=13.15436858\]

Basis: Example 1.

4

Lower limit How step 5

\[L=1378.715176-13.15436858=1365.560808\]

5

Upper limit How step 6

\[U=1378.715176+13.15436858=1391.869545\]

Self-check: \((1365.560808+1391.869545)/2=1378.715176=\hat\mu_0\).

At head size 4000 cm³, the 95% CI for the mean brain weight is (1365.561, 1391.870) g. ▲

**Why** Added

Isolate \(\mu_0\). Let \(t=t_{1-\alpha/2,\,n-2}\) and \(\mathrm{SE}=\hat\sigma\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}}\).

1

\[1-\alpha=P\!\left(-t\le\frac{\hat\mu_0-\mu_0}{\mathrm{SE}}\le t\right)\]

Section 03.1; symmetric, each tail \(\alpha/2\).

2

\[1-\alpha=P\!\left(-t\,\mathrm{SE}\le\hat\mu_0-\mu_0\le t\,\mathrm{SE}\right)\]

\(\mathrm{SE}>0\).

3

\[1-\alpha=P\!\left(-\hat\mu_0-t\,\mathrm{SE}\le-\mu_0\le-\hat\mu_0+t\,\mathrm{SE}\right)\]

4

\[1-\alpha=P\!\left(\hat\mu_0-t\,\mathrm{SE}\le\mu_0\le\hat\mu_0+t\,\mathrm{SE}\right)\]

Multiply by \(-1\); the signs change direction.

5

\[\text{CI}=\hat\mu_0\pm t_{1-\frac\alpha2,\,n-2}\,\hat\sigma\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}\]

∎

### 03.3 Confidence intervals at a range of \(x_0\) values Slides p.21–22

**What** Slides p.21–22

Lecture 4 · p.22 Estimating mean outcomes and report corresponding CIs at a range of x0 values

Slides p.21 shows only code. It does Section 03.2 at many \(x_0\).

A grid is a list of values with equal spaces. The \(x_0\) grid goes from the smallest to the largest \(x\), step 1.

All intervals are 95% and use \(t_{0.975,\,234}\).

Slides p.22 plots the data, the fitted line, and \(L\) and \(U\) at each grid value.

A confidence band is the pair of curves through all \(L\) and all \(U\).

**How** Added

Draw the confidence band for the mean response

- Find the smallest and the largest \(x\).
- Make the grid of \(x_0\) values between them, step 1.
- At each grid value, calculate \(L\) and \(U\) (Section 03.2).
- Plot the data and the fitted line \(\hat\beta_0+\hat\beta_1x\).
- Join all lower limits with a curve.
- Join all upper limits with a second curve.

**Self-check:** ① Grid size = (largest \(x\) − smallest \(x\)) + 1. ② At \(x_0=4000\), the limits are (1365.561, 1391.870), as in Example 2.

**Example 3 · The first grid value** Added

Brainhead data (Added): smallest \(x\) is 2773, largest \(x\) is 4747.

1

Number of grid values How step 2

\[(4747-2773)+1=1974+1=1975\]

2

Distance from \(\bar x\) 03.1 How steps 3–4

\[x_0-\bar x=2773-3637.864407=-864.8644068\]

\[\frac{(x_0-\bar x)^2}{S_{xx}}=\frac{747990.4421}{30647233.66}=0.02440645868\]

3

Standard error 03.1 How steps 5–7

\[0.004237288136+0.02440645868=0.02864374682\]

\[\sqrt{0.02864374682}=0.169244636\]

\[\mathrm{SE}(\hat\mu_0)=72.35066237\times0.169244636=12.24496152\]

4

Center 03.2 How step 2

\[\hat\mu_0=335.432315+0.2608207153\times2773\]

\[=335.432315+723.2558436=1058.688159\]

5

Half-width 03.2 How step 4

\[1.970153643\times12.24496152=24.12445554\]

6

Limits 03.2 How steps 5–6

\[L=1058.688159-24.12445554=1034.563703\]

\[U=1058.688159+24.12445554=1082.812614\]

First band points: (2773, 1034.564) and (2773, 1082.813). The other 1974 grid values give the full band in Figure 3-1. ▲

[figure]
Figure 3-1 · Slides p.22, drawn again from the data. Grey: 236 observations. Blue: fitted line \(\hat\mu_0=\hat\beta_0+\hat\beta_1x_0\). Orange: 95% limits \(L\), \(U\). Purple dashed: \(\bar x\), where the curves are nearest.

### 03.4 Why the intervals become wider toward the edges Slides p.23

**What** Slides p.23

Lecture 4 · p.23 Why do the CIs get wider toward the edges?

Half-width: \(t_{1-\alpha/2,\,n-2}\,\hat\sigma\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}}\).

Only \((x_0-\bar x)^2\) changes with \(x_0\). All other parts are fixed for one data set.

This term increases as \(x_0\) moves from \(\bar x\). It is 0 at \(\bar x\), where the interval is narrowest.

**How** Added

Compare the interval widths at different values of \(x_0\)

- For each \(x_0\), calculate \(|x_0-\bar x|\).
- Calculate the half-width (Section 03.2).
- Multiply it by 2 to get the width.
- Sort the \(x_0\) values by \(|x_0-\bar x|\).
- Make sure that the widths increase in the same order.

**Self-check:** ① At \(x_0=\bar x\), \(\mathrm{SE}(\hat\mu_0)=\hat\sigma/\sqrt n\). ② The ratio of two widths depends only on the two sums under the square root.

**Example 4 · Widths at four values of \(x_0\)** Added

All use \(t_{0.975,\,234}=1.970153643\), \(\hat\sigma=72.35066237\), \(1/n=0.004237288136\), \(S_{xx}=30647233.66\).

\(x_0=\bar x=3637.864407\) · \(|x_0-\bar x|=0\)

\(\frac{(x_0-\bar x)^2}{S_{xx}}=0\). Sum \(=0.004237288136\). Square root \(=0.06509445549\).

\(\mathrm{SE}(\hat\mu_0)=72.35066237\times0.06509445549=4.709626971\). Half-width \(=1.970153643\times4.709626971=9.278688732\).

\(\hat\mu_0=335.432315+948.8303969=1284.262712\). CI \(=(1274.984,\ 1293.541)\). Width \(=2\times9.278688732=18.557\).

Self-check: \(\hat\sigma/\sqrt n=72.35066237\times0.06509445549=4.709626971=\mathrm{SE}(\hat\mu_0)\).

\(x_0=4000\) · \(|x_0-\bar x|=362.1355932\)

From Examples 1–2: \(\mathrm{SE}(\hat\mu_0)=6.676823721\). Half-width \(=13.15436858\).

CI \(=(1365.561,\ 1391.870)\). Width \(=2\times13.15436858=26.309\).

\(x_0=2773\) (smallest \(x\)) · \(|x_0-\bar x|=864.8644068\)

From Example 3: \(\mathrm{SE}(\hat\mu_0)=12.24496152\). Half-width \(=24.12445554\).

CI \(=(1034.564,\ 1082.813)\). Width \(=2\times24.12445554=48.249\).

\(x_0=4747\) (largest \(x\)) · \(|x_0-\bar x|=1109.135593\)

\(\frac{(x_0-\bar x)^2}{S_{xx}}=\frac{1230181.764}{30647233.66}=0.0401400589\). Sum \(=0.04437734703\). Square root \(=0.2106593151\).

\(\mathrm{SE}(\hat\mu_0)=72.35066237\times0.2106593151=15.24134098\). Half-width \(=1.970153643\times15.24134098=30.02778345\).

\(\hat\mu_0=335.432315+1238.115936=1573.548251\). CI \(=(1543.520,\ 1603.576)\). Width \(=2\times30.02778345=60.056\).

Widths in order of \(|x_0-\bar x|\): 18.557, 26.309, 48.249, 60.056. The width at the largest \(x\) is \(\sqrt{0.04437734703/0.004237288136}=3.236209805\) times the width at \(\bar x\). ▲

[figure]
Figure 3-2 · Half-width \(t_{0.975,\,234}\times\mathrm{SE}(\hat\mu_0)\) at each \(x_0\) (Added). Lowest at \(\bar x\) (purple dashed). Blue dots: the four \(x_0\) of Example 4.

**Why** Added

The structure of the Slides p.17 result:
\[\mathrm{Var}[\hat\mu_0]=\mathrm{Var}[\bar y+\hat\beta_1(x_0-\bar x)]=\underbrace{\frac{\sigma^2}{n}}_{\text{from }\bar y}+\underbrace{\frac{\sigma^2(x_0-\bar x)^2}{S_{xx}}}_{\text{from }\hat\beta_1}\]
The first equal sign uses Slides p.12. The second is Slides p.17, where the cross term is 0 because \(\sum_{i=1}^n(x_i-\bar x)=0\). ∎

The error in \(\bar y\) is the same at each \(x_0\). It gives \(\frac1n\). The distance \(x_0-\bar x\) multiplies the slope error. It gives \(\frac{(x_0-\bar x)^2}{S_{xx}}\).

### 03.5 Why most points are outside the lines Slides p.24

**What** Slides p.24

Lecture 4 · p.24 Why do most of the points fall outside the lines?

The interval targets the mean \(\mu_0\), not one observation.

Each observation is \(y_i=\mu_i+\epsilon_i\), with \(\mu_i=\beta_0+\beta_1x_i\).

\(\epsilon_i\) has standard deviation \(\sigma\), estimated by \(\hat\sigma=72.35066237\) g.

The largest half-width of the band is 30.02778345 g, at \(x_0=4747\) (Example 4).

Most observations are farther from the line than this half-width.

**How** Added

Find if an observation is inside the band

- Use \(x_i\) as \(x_0\).
- Calculate \(L_i\) and \(U_i\) (Section 03.2).
- Compare \(y_i\) with \(L_i\) and \(U_i\).
- If \(L_i\le y_i\le U_i\), the point is inside. If not, it is outside.
- Do steps 1–4 for all \(n\) observations. Count the two groups.

**Self-check:** inside + outside \(=n=236\).

**Example 5 · Two persons of the brainhead data** Added

Person 1: \(x_1=4512\), \(y_1=1530\). Person 2: \(x_2=3738\), \(y_2=1297\).

1

Person 1: standard error How steps 1–2

\[x_1-\bar x=4512-3637.864407=874.1355932\]

\[\frac{(x_1-\bar x)^2}{S_{xx}}=\frac{764113.0353}{30647233.66}=0.02493252878\]

\[\sqrt{0.004237288136+0.02493252878}=\sqrt{0.02916981692}=0.1707917355\]

\[\mathrm{SE}=72.35066237\times0.1707917355=12.35689519\]

2

Person 1: limits How step 2

\[\hat\mu_0=335.432315+0.2608207153\times4512=335.432315+1176.823068=1512.255383\]

\[\text{half-width}=1.970153643\times12.35689519=24.34498207\]

\[L_1=1487.910401,\qquad U_1=1536.600365\]

3

Person 1: compare How steps 3–4

\[1487.910401\le1530\le1536.600365\]

Inside.

4

Person 2: standard error How steps 1–2

\[x_2-\bar x=3738-3637.864407=100.1355932\]

\[\frac{(x_2-\bar x)^2}{S_{xx}}=\frac{10027.13703}{30647233.66}=0.0003271791882\]

\[\sqrt{0.004237288136+0.0003271791882}=\sqrt{0.004564467324}=0.06756084165\]

\[\mathrm{SE}=72.35066237\times0.06756084165=4.888071643\]

5

Person 2: limits How step 2

\[\hat\mu_0=335.432315+0.2608207153\times3738=335.432315+974.947834=1310.380149\]

\[\text{half-width}=1.970153643\times4.888071643=9.630252153\]

\[L_2=1300.749897,\qquad U_2=1320.010401\]

6

Person 2: compare How steps 3–4

\[1297<1300.749897=L_2\]

Outside: residual \(1297-1310.380149=-13.38014892\) g exceeds half-width 9.630252153 g.

All 236 persons: 41 inside, 195 outside (data file, Added). \(195/236=0.8262711864\), or 82.6%. Self-check: \(41+195=236\). ▲

[figure]
Figure 3-3 · Data and 95% band (blue) of Figure 3-1 (Added). Green: inside. Orange: outside. The vertical spread of the points is much larger than the band.

**Why** Added

Compare the variance of one observation with the variance of \(\hat\mu_0\).

1

\[y_i=\mu_i+\epsilon_i,\qquad \mathrm{Var}[y_i]=\sigma^2\]

Slides p.3.

2

\[\mathrm{Var}[\hat\mu_0]=\sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}\right)\]

Slides p.17.

3

\[\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}\le0.04437734703\quad\text{for }2773\le x_0\le4747\]

Example 4: largest at \(x_0=4747\).

4

\[\mathrm{Var}[\hat\mu_0]\le0.04437734703\,\sigma^2\]

Less than 5% of \(\mathrm{Var}[y_i]\). ∎

The interval shows only the error of \(\hat\mu_0\). As \(n\) increases, the interval becomes narrower. The spread \(\sigma\) of each point does not decrease with \(n\).

### 03.6 When we want to predict a new observation Slides p.25

Lecture 4 · p.25 What if we don't just care about the mean, but predictions? I.e. even if we got the mean absolutely perfect—the new points wouldn't fall directly on this line!

With exact \(\beta_0\), \(\beta_1\), \(\hat\mu_0=\mu_0\) has no estimation error.

A new observation is still \(\mu_0+\epsilon\), with \(\epsilon\sim N(0,\sigma^2)\) and \(\hat\sigma=72.35066237\) g.

An interval for a new observation must include the error of the mean estimate and the new error \(\epsilon\).

A prediction interval is an interval made to contain a new observation (Unit 04).

Summary of this unit

CI for \(\mu_0\): \(\hat\mu_0\pm t_{1-\alpha/2,\,n-2}\,\hat\sigma\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}\). Narrowest at \(\bar x\). It contains the mean, not single observations.

### 03.7 Practice Added

Given: \(n=236\), \(\bar x=3637.864407\), \(S_{xx}=30647233.66\), \(\hat\beta_0=335.432315\), \(\hat\beta_1=0.2608207153\), \(\hat\sigma=72.35066237\).

**Q1.** Calculate a 90% CI for the mean brain weight at \(x_0=4000\) cm³. Use \(t_{0.95,\,234}=1.651391475\). Give the half-width and the interval.

Answer

1

\[\alpha=0.10,\qquad 1-\frac\alpha2=0.95,\qquad t_{0.95,\,234}=1.651391475\]

2

\[\hat\mu_0=1378.715176,\qquad \mathrm{SE}(\hat\mu_0)=6.676823721\]

Examples 1–2.

3

\[\text{half-width}=1.651391475\times6.676823721=11.02604977\]

4

\[1378.715176\pm11.02604977=(1367.689,\ 1389.741)\]

It is narrower than the 95% interval (1365.561, 1391.870), because 1.651391475 < 1.970153643.

**Q2.** Calculate the 95% CI for the mean response at \(x_0=3500\). First predict: wider or narrower than at \(x_0=4000\)? Then compare with your numbers.

Answer

Prediction: \(|3500-\bar x|=137.8644068\) < \(|4000-\bar x|=362.1355932\). The interval is narrower.

1

\[\hat\mu_0=335.432315+0.2608207153\times3500=335.432315+912.8725037=1248.304819\]

2

\[\frac{(x_0-\bar x)^2}{S_{xx}}=\frac{19006.59466}{30647233.66}=0.000620173255\]

3

\[\sqrt{0.004237288136+0.000620173255}=\sqrt{0.004857461391}=0.06969549046\]

4

\[\mathrm{SE}(\hat\mu_0)=72.35066237\times0.06969549046=5.042514899\]

5

\[\text{half-width}=1.970153643\times5.042514899=9.934529096\]

6

\[1248.304819\pm9.934529096=(1238.370,\ 1258.239)\]

Width \(2\times9.934529096=19.869\) < 26.309 at \(x_0=4000\). This agrees with the prediction.

**Q3.** At which \(x_0\) is the CI for \(\mu_0\) narrowest? How many times wider is the 95% interval at \(x_0=4747\)? Why does this ratio not depend on \(\hat\sigma\) or \(\alpha\)?

Answer

Narrowest at \(x_0=\bar x=3637.864407\), where \((x_0-\bar x)^2=0\).

1

\[\frac{\text{width at }4747}{\text{width at }\bar x}=\frac{2t\hat\sigma\sqrt{1/n+(4747-\bar x)^2/S_{xx}}}{2t\hat\sigma\sqrt{1/n}}\]

2

\[=\sqrt{\frac{0.04437734703}{0.004237288136}}\]

3

\[=3.236209805\]

Example 4: \(60.0555669/18.55737746=3.236209805\).

\(2t_{1-\alpha/2,\,n-2}\hat\sigma\) cancels. The ratio depends only on \(x_0\), \(n\) and \(S_{xx}\).

## 04 · Predicting a new response: the prediction interval

Start point · Added

Brainhead data, \(n=236\). Slides p.7: \(\hat\beta_0=335.43231\), \(\hat\beta_1=0.26082\), \(\hat\sigma=72.35\), \(n-2=234\).

From brainhead.csv (Added): \(\hat\beta_0=335.432315\), \(\hat\beta_1=0.2608207153\), \(\hat\sigma=72.35066237\), \(\bar x=3637.864407\), \(S_{xx}=30647233.66\).

All examples use \(x_{new}=4000\), as in Units 02–03.

### 04.1 The new response and the predicted value Slides p.26–30

**What** Slides p.27–30

Lecture 4 · p.27–30 Instead of the mean, we might want to predict the response itself for an observation with covariate \(x_{new}\) (as always treating \(x_{new}\) as fixed): \[y_{new}=\beta_0+\beta_1x_{new}+\epsilon_{new}\] Define the predicted value \[\hat y_{new}=\hat\beta_0+\hat\beta_1x_{new}\] • How does this differ from how we estimate the mean?
• But we'll need to take into account additional uncertainty (why?)

\(x_{new}\) is the fixed covariate value of the new observation.

The new response \(y_{new}\) is the unobserved response of the new observation. It is random because of its error \(\epsilon_{new}\).

The new error \(\epsilon_{new}\sim N(0,\sigma^2)\) is independent of \(\epsilon_1,\dots,\epsilon_n\).

The predicted value \(\hat y_{new}\) is the fitted line at \(x_{new}\), our guess for \(y_{new}\).

**Slide question 1: how does this differ from the estimate of the mean?** With \(x_0=x_{new}\), the formulas are the same: \(\hat y_{new}=\hat\mu_0\). The target is different:

\(\mu_0=\beta_0+\beta_1x_0\) is a fixed parameter, with no error term.

\(y_{new}=\beta_0+\beta_1x_{new}+\epsilon_{new}\) has the random error \(\epsilon_{new}\).

**Slide question 2: why is there additional uncertainty?** Uncertainty is the possible difference between a guess and the true value. A new response has two sources:

Source 1: \(\hat\beta_0+\hat\beta_1x_{new}\) changes from sample to sample, as for the mean.

Source 2: \(\epsilon_{new}\). We cannot guess it, even with the true \(\beta_0\) and \(\beta_1\).

**How** Added

Calculate the predicted value \(\hat y_{new}\)

- Get \(\hat\beta_1=S_{xy}/S_{xx}\) and \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).
- Multiply \(\hat\beta_1\) by \(x_{new}\).
- Add \(\hat\beta_0\).

**Self-check:** \(\hat y_{new}=\hat\mu_0\) at the same \(x\).

**Example 1 · The brainhead data at \(x_{new}=4000\)** Added How steps 2–3

Predict the brain weight of a new person with head size 4000 cm³.

1

\[\hat y_{new}=\hat\beta_0+\hat\beta_1x_{new}\]

2

\[\hat y_{new}=335.432315+0.2608207153\times4000\]

3

\[\hat y_{new}=335.432315+1043.282861\]

4

\[\hat y_{new}=1378.715176\ \text{g}\]

Slide p.7 values: \(335.43231+0.26082\times4000=1378.71231\).

**Compare with unit 02:** \(\hat\mu_0=1378.715\) is the same number. In this unit, it predicts one person. In unit 02, it estimates the mean of all persons with head size 4000. ▲

### 04.2 Expectation and variance of the prediction error Slides p.31–35

**What** Slides p.31–35

Lecture 4 · p.31–35 Define the prediction error: \(\hat y_{new}-y_{new}\)
Properties: \[E[\hat y_{new}-y_{new}]=E[(\hat\beta_0+\hat\beta_1x_{new})-(\beta_0+\beta_1x_{new}+\epsilon_{new})]=\beta_0+\beta_1x_{new}-(\beta_0+\beta_1x_{new})=0\] Now note that \(\hat y_{new}\) and \(y_{new}\) are independent (why?) \[\mathrm{Var}[\hat y_{new}-y_{new}]=\sigma^2\left(1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right)\]

The prediction error \(\hat y_{new}-y_{new}\) is the predicted value minus the true new response. It is random.

Expectation 0: on average, \(\hat y_{new}\) is not too high and not too low.

The term \(\sigma^2\left(\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}\right)\) is source 1. It equals \(\mathrm{Var}[\hat\mu_0]\) of unit 02.

The term \(\sigma^2\) is source 2, from \(\epsilon_{new}\).

Independence: \(\hat y_{new}\) uses only \(y_1,\dots,y_n\). The random part of \(y_{new}\) is \(\epsilon_{new}\), independent of the sample.

**How** Added

Calculate the estimated variance of the prediction error

- Calculate \(\frac1n\).
- Calculate \((x_{new}-\bar x)^2/S_{xx}\).
- Multiply the sum of steps 1–2 by \(\hat\sigma^2\): the line part (source 1).
- The new-error part (source 2) is \(\hat\sigma^2\).
- Add the two parts: \(\hat\sigma^2\left(1+\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}\right)\).

**Self-check:** Step 3 equals the estimate of \(\mathrm{Var}[\hat\mu_0]\) in unit 02. The total is larger than \(\hat\sigma^2\).

**Example 2 · The brainhead data at \(x_{new}=4000\)** Added How steps 1–5

Use \(\hat\sigma\) for \(\sigma\): \(\hat\sigma^2=72.35066237^2=5234.618345\).

1

\[\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}=0.004237288+0.004279087=0.008516375\]

How steps 1–2; unit 02, Example 3.

2

\[\text{line part}=\hat\sigma^2\times0.008516375=5234.618345\times0.008516375=44.579975\]

How step 3: estimate of \(\mathrm{Var}[\hat\mu_0]\).

3

\[\text{new-error part}=\hat\sigma^2=5234.618345\]

How step 4.

4

\[\hat\sigma^2\left(1+\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}\right)=44.579975+5234.618345=5279.198320\]

How step 5.

[figure]
Figure 4-1 · Total estimated variance 5279.198 at \(x_{new}=4000\), parts to scale. Orange: fitted line (source 1). Blue: \(\epsilon_{new}\) (source 2), 99.16% of the total.

**Result:** \(\epsilon_{new}\) gives almost all of the variance. This term does not decrease as \(n\) increases. The prediction interval is much wider than the confidence interval. ▲

**Why · The expectation and the variance of the prediction error** Slides p.33–35

**(a) Expectation.** Use \(E[\hat\beta_0]=\beta_0\), \(E[\hat\beta_1]=\beta_1\), \(E[\epsilon_{new}]=0\).

1

\[E[\hat y_{new}-y_{new}]=E[(\hat\beta_0+\hat\beta_1x_{new})-(\beta_0+\beta_1x_{new}+\epsilon_{new})]\]

Definitions.

2

\[=E[\hat\beta_0]+E[\hat\beta_1]x_{new}-(\beta_0+\beta_1x_{new}+E[\epsilon_{new}])\]

Linearity of expectation.

3

\[=\beta_0+\beta_1x_{new}-(\beta_0+\beta_1x_{new}+0)\]

Unbiased estimators; \(E[\epsilon_{new}]=0\).

4

\[=\beta_0+\beta_1x_{new}-(\beta_0+\beta_1x_{new})\]

5

\[=0\]

**(b) Independence.**

\(\hat\beta_0\) and \(\hat\beta_1\) use only \(y_1,\dots,y_n\), whose random part is \(\epsilon_1,\dots,\epsilon_n\).

The random part of \(y_{new}\) is \(\epsilon_{new}\), independent of \(\epsilon_1,\dots,\epsilon_n\).

\(\hat y_{new}\) and \(y_{new}\) are independent.

**(c) Variance.**

For independent \(A\) and \(B\): \(\mathrm{Var}[A-B]=\mathrm{Var}[A]+\mathrm{Var}[B]\).

Unit 02 (Lecture 4 · p.17–18): \(\mathrm{Var}[\hat\beta_0+\hat\beta_1x_0]=\sigma^2\left(\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right)\).

\(\mathrm{Var}[y_{new}]=\mathrm{Var}[\epsilon_{new}]=\sigma^2\).

1

\[\mathrm{Var}[\hat y_{new}-y_{new}]=\mathrm{Var}[(\hat\beta_0+\hat\beta_1x_{new})-y_{new}]\]

2

\[=\mathrm{Var}[(\hat\beta_0+\hat\beta_1x_{new})]+\mathrm{Var}[y_{new}]\]

Independence (b). Both terms are added.

3

\[=\sigma^2\left(\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right)+\mathrm{Var}[y_{new}]\]

Unit 02 with \(x_0=x_{new}\).

4

\[=\sigma^2\left(\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right)+\sigma^2\]

\(\mathrm{Var}[y_{new}]=\sigma^2\).

5

\[=\sigma^2\left(1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right)\]

\(\epsilon_{new}\) adds the "1", compared with \(\mathrm{Var}[\hat\mu_0]\). ∎

### 04.3 The prediction interval Slides p.36–37

**What** Slides p.36–37

Lecture 4 · p.36–37 We know \(\hat y_{new}-y_{new}\sim N\left(0,\ \sigma^2\left[1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\right]\right)\) \[\Longrightarrow\ \frac{\hat y_{new}-y_{new}}{\sigma\sqrt{1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}}\sim N(0,1)\] Same logic as before: \[\frac{\hat y_{new}-y_{new}}{\hat\sigma\sqrt{1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}}\sim t_{n-2}\] \[\Longrightarrow\ 1-\alpha=P\left(-t_{1-\frac{\alpha}{2},n-2}\le\frac{\hat y_{new}-y_{new}}{\hat\sigma\sqrt{1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}}\le t_{1-\frac{\alpha}{2},n-2}\right)\] So a 100(1−α)% prediction interval is: \[\hat y_{new}\pm t_{1-\frac{\alpha}{2},n-2}\,\hat\sigma\sqrt{1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}\]

A prediction interval (PI) is an interval, calculated from the data, that contains the random \(y_{new}\) with probability \(1-\alpha\).

The confidence interval (CI) of unit 03 contains the fixed \(\mu_0\) with probability \(1-\alpha\).

The only difference from the CI is the "1" under the square root: the \(\sigma^2\) from \(\epsilon_{new}\).

**How** Added

Calculate a 100(1−α)% prediction interval

- Calculate \(\hat y_{new}=\hat\beta_0+\hat\beta_1x_{new}\) (Section 04.1).
- Calculate \(1+\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}\).
- Take the square root and multiply by \(\hat\sigma\): the standard error of prediction.
- Find the quantile \(t_{1-\alpha/2,\,n-2}\).
- Multiply step 4 by step 3: the half-width.
- Subtract the half-width from \(\hat y_{new}\) and add it to \(\hat y_{new}\).

**Self-check:** ① The midpoint is \(\hat y_{new}\). ② The standard error of prediction is larger than \(\hat\sigma\). ③ The PI is wider than the CI at the same point.

**Example 3 · The brainhead data at \(x_{new}=4000\), 95% prediction interval** Added How steps 1–6

Find the 95% PI for the brain weight of a new person with head size 4000 cm³. Compare it with the 95% CI for the mean. \(\alpha=0.05\), \(n-2=234\).

1

Predicted value How step 1

\[\hat y_{new}=335.432315+0.2608207153\times4000=1378.715176\]

**Basis:** Example 1.

2

Value under the square root How step 2

\[1+\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}=1+0.008516375=1.008516375\]

**Basis:** Example 2, step 1.

3

Standard error of prediction How step 3

\[\hat\sigma\sqrt{1.008516375}=72.35066237\times1.004249160=72.658092\]

4

t quantile How step 4

\[t_{1-\frac{0.05}{2},\,234}=t_{0.975,\,234}=1.970154\]

5

Half-width How step 5

\[1.970154\times72.658092=143.1476\]

6

Interval How step 6

\[1378.715\pm143.148=(1378.715-143.148,\ \ 1378.715+143.148)=(1235.568,\ \ 1521.863)\]

95% CI for \(\mu_0\) (unit 03, Example 2): \((1365.561,\ 1391.870)\), width \(2\times13.154=26.31\) g.

95% PI for \(y_{new}\): \((1235.568,\ 1521.863)\), width \(2\times143.148=286.30\) g.

Same midpoint, 1378.715. The PI is \(143.1476/13.15437=10.88\) times as wide.

Slides p.39 shows both bands over a range of \(x\) (Unit 05). ▲

**Why · From the distribution to the prediction interval** Slides p.36–37

Let \(k=1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}\).

Normality: \(\hat y_{new}\) is a linear combination of the normal \(y_1,\dots,y_n\).

\(y_{new}\) is normal and independent of the sample. A linear combination of independent normals is normal.

1

\[\hat y_{new}-y_{new}\sim N\left(0,\ \sigma^2k\right)\]

Section 04.2.

2

\[\frac{\hat y_{new}-y_{new}-0}{\sqrt{\sigma^2k}}\sim N(0,1)\]

Standardize.

3

\[\frac{\hat y_{new}-y_{new}}{\sigma\sqrt{k}}\sim N(0,1)\]

4

\[\frac{\hat y_{new}-y_{new}}{\hat\sigma\sqrt{k}}\sim t_{n-2}\]

\(\hat\sigma\) for \(\sigma\), as for \(\hat\beta_1\), \(\hat\mu_0\).

5

\[1-\alpha=P\left(-t_{1-\frac{\alpha}{2},n-2}\le\frac{\hat y_{new}-y_{new}}{\hat\sigma\sqrt{k}}\le t_{1-\frac{\alpha}{2},n-2}\right)\]

Symmetric; each tail \(\alpha/2\).

6

\[1-\alpha=P\left(-t_{1-\frac{\alpha}{2},n-2}\,\hat\sigma\sqrt{k}\le\hat y_{new}-y_{new}\le t_{1-\frac{\alpha}{2},n-2}\,\hat\sigma\sqrt{k}\right)\]

7

\[1-\alpha=P\left(-\hat y_{new}-t_{1-\frac{\alpha}{2},n-2}\,\hat\sigma\sqrt{k}\le-y_{new}\le-\hat y_{new}+t_{1-\frac{\alpha}{2},n-2}\,\hat\sigma\sqrt{k}\right)\]

8

\[1-\alpha=P\left(\hat y_{new}-t_{1-\frac{\alpha}{2},n-2}\,\hat\sigma\sqrt{k}\le y_{new}\le\hat y_{new}+t_{1-\frac{\alpha}{2},n-2}\,\hat\sigma\sqrt{k}\right)\]

Multiply by \(-1\); the signs change direction.

9

\[\hat y_{new}\pm t_{1-\frac{\alpha}{2},n-2}\,\hat\sigma\sqrt{1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}\]

Put in \(k\).

Line 8: this random interval contains the random \(y_{new}\) with probability \(1-\alpha\). ∎

### 04.4 Practice Added

Given: \(n=236\), \(\bar x=3637.864407\), \(S_{xx}=30647233.66\), \(\hat\beta_0=335.432315\), \(\hat\beta_1=0.2608207153\), \(\hat\sigma=72.35066237\).

**Q1.** A new person has head size 4000 cm³. Calculate a 90% PI for this person's brain weight. Use \(t_{0.95,\,234}=1.651391\).

Answer

Step 1: \(\hat y_{new}=1378.715176\) (Example 1).

Steps 2–3: \(\hat\sigma\sqrt{1+\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}}=72.658092\) (Example 3).

Step 4: \(\alpha=0.10\), \(t_{1-0.10/2,\,234}=t_{0.95,\,234}=1.651391\).

Step 5: half-width \(=1.651391\times72.658092=119.9870\).

Step 6: \(1378.715\pm119.987=(1258.728,\ 1498.702)\).

It is narrower than the 95% PI \((1235.568,\ 1521.863)\), because its quantile is smaller.

**Q2.** Calculate a 95% PI for the brain weight of a new person with head size 4500 cm³. Use \(t_{0.975,\,234}=1.970154\).

Answer

Step 1: \(\hat y_{new}=335.432315+0.2608207153\times4500=335.432315+1173.693219=1509.125534\).

Step 2: \(x_{new}-\bar x=4500-3637.864407=862.135593\). \(\frac{862.135593^2}{30647233.66}=\frac{743277.7807}{30647233.66}=0.024252688\).

\(1+\frac1{236}+0.024252688=1+0.004237288+0.024252688=1.028489976\).

Step 3: \(\hat\sigma\sqrt{1.028489976}=72.35066237\times1.014144948=73.374059\).

Step 4: \(t_{0.975,\,234}=1.970154\).

Step 5: half-width \(=1.970154\times73.374059=144.5582\).

Step 6: \(1509.126\pm144.558=(1364.567,\ 1653.684)\).

4500 is farther from \(\bar x\) than 4000. The half-width 144.558 is a little larger than 143.148.

**Q3.** (a) At which \(x_{new}\) is the PI narrowest? (b) Calculate its 95% half-width. (c) Why does this half-width not decrease to 0 as \(n\to\infty\)?

Answer

(a) Only \(\frac{(x_{new}-\bar x)^2}{S_{xx}}\) changes with \(x_{new}\). It is 0 at \(x_{new}=\bar x=3637.864407\), where the PI is narrowest.

(b) \(\hat\sigma\sqrt{1+\frac1{236}+0}=72.35066237\times\sqrt{1.004237288}=72.35066237\times1.002116404=72.503786\).

Half-width \(=1.970154\times72.503786=142.8436\).

\(\hat y_{new}=335.432315+0.2608207153\times3637.864407=1284.262712\). PI: \(1284.263\pm142.844=(1141.419,\ 1427.106)\).

(c) As \(n\to\infty\), \(\frac1n\to0\), and the third term is 0 at \(\bar x\). The "1" stays.

The "1" is \(\mathrm{Var}[\epsilon_{new}]=\sigma^2\). More data improve the fitted line but do not remove \(\epsilon_{new}\).

The half-width stays near \(t_{1-\alpha/2,\,n-2}\,\hat\sigma\) or larger.

## 05 · Prediction intervals over a range of \(x\) values

Start point · Added

Brainhead data, \(n=236\). Values from brainhead.csv, as in units 01–04:

\(\hat\beta_0=335.432315\), \(\hat\beta_1=0.2608207\).

\(\hat\sigma=72.35066\), with \(n-2=234\) degrees of freedom.

\(\bar x=3637.8644\), \(S_{xx}=\sum_{i=1}^n(x_i-\bar x)^2=30647233.66\).

\(t_{0.975,\,234}=1.970154\).

\(\min x_i=2773\), \(\max x_i=4747\).

### 05.1 Calculate the prediction interval at many values of \(x_{new}\) Slides p.38

**What** Slides p.37–38

Prediction Interval · Lecture 4 · p.37 So a 100(1-α)% prediction interval is: \[\hat y_{new}\pm t_{1-\frac{\alpha}{2},\,n-2}\,\hat\sigma\sqrt{1+\frac{1}{n}+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}\]

Slides p.38 shows this as code. For each \(x_{new}\), the code does four things:

It finds \(t_{1-\alpha/2,\,n-2}\). The default level 0.95 gives \(t_{0.975,\,n-2}\).

It calculates the plug-in estimate \(\hat y_{new}\). A plug-in estimate puts \(\hat\beta_0,\hat\beta_1\) in place of the unknown \(\beta_0,\beta_1\).

It calculates the standard error \(\hat\sigma\sqrt{1+\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}}\).

It gives L = estimate − quantile × standard error and U = estimate + quantile × standard error.

The grid goes from 2773 to 4747, step 1: \(4747-2773+1=1975\) values. The p.39 plot joins all L and all U.

Only the PI has the term **1** under the square root.

**How** Added

Calculate a prediction interval at one value of \(x_{new}\)

- Find the quantile \(t_{1-\alpha/2,\,n-2}\).
- Calculate \(\hat y_{new}=\hat\beta_0+\hat\beta_1x_{new}\).
- Calculate the distance term \(k=(x_{new}-\bar x)^2/S_{xx}\).
- Calculate the standard error \(\hat\sigma\sqrt{1+1/n+k}\).
- Multiply the quantile by the standard error to get the half-width.
- Subtract the half-width from \(\hat y_{new}\) to get L. Add it to get U.

For the band, do steps 2–6 at each grid value. The quantile does not change.

**Self-check:** ① \((L+U)/2=\hat y_{new}\). ② \(1+1/n+k\) is a little larger than 1. ③ At \(x_{new}=4000\), the PI is (1235.568, 1521.863), as in unit 04.

**Example 1 · 95% PI at the smallest head size, \(x_{new}=2773\)** Added

1

Quantile How step 1

\[t_{1-\alpha/2,\,n-2}=t_{1-0.05/2,\,236-2}\]

\[=t_{0.975,\,234}=1.970154\]

2

Predicted value How step 2

\[\hat y_{new}=335.432315+0.2608207\times2773\]

\[=335.432315+723.255844\]

\[=1058.688159\]

3

Distance term How step 3

\[k=\frac{(2773-3637.8644)^2}{30647233.66}\]

\[=\frac{(-864.8644)^2}{30647233.66}\]

\[=\frac{747990.44}{30647233.66}\]

\[=0.024406\]

4

Standard error How step 4

\[\hat\sigma\sqrt{1+\tfrac1n+k}=72.35066\sqrt{1+0.004237+0.024406}\]

\[=72.35066\sqrt{1.028644}\]

\[=72.35066\times1.014221\]

\[=73.37954\]

\(1/n=1/236=0.004237\).

5

Half-width How step 5

\[1.970154\times73.37954=144.56898\]

6

Limits How step 6

\[L=1058.68816-144.56898=914.11918\]

\[U=1058.68816+144.56898=1203.25714\]

95% PIs at four grid points (data file):

\(x_{new}=2773\) (smallest): (914.119, 1203.257), width 289.138.

\(x_{new}=\bar x=3637.8644\): (1141.419, 1427.106), width 285.687.

\(x_{new}=4000\): (1235.568, 1521.863), width 286.295, as in unit 04.

\(x_{new}=4747\) (largest): (1427.878, 1719.219), width 291.341.

Self-check ①: \((914.119+1203.257)/2=1058.688=\hat y_{new}\). ▲

**Why** Added

Each How step gives one part of the p.37 formula: step 1 the quantile, step 2 \(\hat y_{new}\), steps 3–4 the standard error, steps 5–6 the limits.

Unit 04 (Slides p.35): \(\mathrm{Var}[\hat y_{new}-y_{new}]=\sigma^2\left(1+\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}\right)\). The 1 is \(\mathrm{Var}[y_{new}]=\sigma^2\). ∎

### 05.2 Read the plot: the PI is much wider than the CI Slides p.39

**What** Slides p.39

The CI for \(\mu_0\) (Lecture 4 p.20) is \(\hat\mu_0\pm t_{1-\alpha/2,\,n-2}\,\hat\sigma\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}\), without the 1.

Prediction Intervals · Lecture 4 · p.39 Computing prediction intervals at a range of \(x_{new}\) values:
• Note the prediction intervals are much wider than the CIs before!
• Note also the lines are not parallel (slightly wider at the edges)

Note 1 compares PI and CI widths. Note 2: the PI is a little wider near the smallest and largest \(x\).

**How** Added

Compare the widths of the PI and the CI

- Select \(\bar x\), \(\min x_i\), \(\max x_i\), and one more \(x\).
- Calculate the PI width U − L at each \(x\).
- Calculate the CI width at the same \(x\).
- Divide the PI width by the CI width.
- Compare the PI width at \(\bar x\) with the PI width at the edges.

A ratio much larger than 1 supports note 1. Edge widths a little larger than the center width support note 2.

**Self-check:** ① Both widths are smallest at \(\bar x\), where \((x-\bar x)^2/S_{xx}=0\). ② Both intervals have the midpoint \(\hat\beta_0+\hat\beta_1x\).

**Example 2 · Widths in the brainhead data** Added

[figure]
Figure 5-1. Brainhead data (\(n=236\)). Blue: 95% CI band. Orange: 95% PI band. Black points are in the PI; purple points are outside. Dashed: \(\bar x\). The CI band widens much at the edges; the PI lines widen only a little.

PI widths from Section 05.1. CI widths use the same steps without the 1.

\(x=2773\): PI width 289.138, CI width 48.249, ratio 5.99.

\(x=\bar x\): PI width 285.687, CI width 18.557, ratio 15.39.

\(x=4000\): PI width 286.295, CI width 26.309, ratio 10.88.

\(x=4747\): PI width 291.341, CI width 60.056, ratio 4.85.

Note 1: the PI is 4.85 to 15.39 times as wide as the CI, most at \(\bar x\).

Note 2: the PI width is 285.687 at \(\bar x\), and 289.138 and 291.341 at the edges: only 3.451 and 5.654 g more.

The CI width grows from 18.557 to 60.056, more than 3 times.

Count (Added, data file): 226 of 236 points are in the 95% PI at their own \(x_i\): 95.8%, near 95%. Only 41 points are in the CI band. ▲

**Why** Added

Let \(k=\frac{(x-\bar x)^2}{S_{xx}}\ge0\).

1

\[\frac{\text{PI width}}{\text{CI width}}=\frac{2\,t_{1-\alpha/2,\,n-2}\,\hat\sigma\sqrt{1+\frac1n+k}}{2\,t_{1-\alpha/2,\,n-2}\,\hat\sigma\sqrt{\frac1n+k}}\]

2

\[=\sqrt{\frac{1+\frac1n+k}{\frac1n+k}}\]

3

\[=\sqrt{\frac{1+\frac1n}{\frac1n}}\]

At \(x=\bar x\), \(k=0\).

4

\[=\sqrt{n+1}\]

5

\[=\sqrt{237}=15.3948\]

Agrees with 15.39 at \(\bar x\). ∎

Note 2: in the PI, the 1 is the largest term. At the right edge, \(k\) is only 0.040140. The square root grows only from \(\sqrt{1.004237}\) to \(\sqrt{1.044377}\). Without the 1, the same \(k\) has a large effect on the CI.

### 05.3 Fitted values, the CI for the mean, and the PI together Slides p.40

**What** Slides p.40

Slides p.40 is code only, with no numbers. It gives three quantities from the fitted model:

Fitted values: \(\hat y_i=\hat\beta_0+\hat\beta_1x_i\), the fitted line above each sample \(x_i\).

CIs for the means: \(\hat\mu_0\pm t_{1-\alpha/2,\,n-2}\,\hat\sigma\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}}\) at each grid value \(x_0\).

PIs: \(\hat y_{new}\pm t_{1-\alpha/2,\,n-2}\,\hat\sigma\sqrt{1+\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}}\) at each grid value \(x_{new}\).

At the same \(x\), \(\hat\mu_0=\hat y_{new}\). Only the standard error differs.

**How** Added

Calculate the CI and the PI at the same \(x\)

- Calculate the center \(\hat\beta_0+\hat\beta_1x\) for both intervals.
- Calculate \(k=(x-\bar x)^2/S_{xx}\).
- Calculate the CI standard error \(\hat\sigma\sqrt{1/n+k}\).
- Calculate the PI standard error \(\hat\sigma\sqrt{1+1/n+k}\).
- Multiply each by \(t_{1-\alpha/2,\,n-2}\) to get the two half-widths.
- Subtract each half-width from the center and add it.

**Self-check:** ① Same midpoint. ② The PI contains the CI.

**Example 3 · Both intervals at \(x=3000\)** Added

1

Center How step 1

\[\hat\mu_0=\hat y_{new}=335.432315+0.2608207\times3000\]

\[=335.432315+782.462146\]

\[=1117.894461\]

2

Distance term How step 2

\[k=\frac{(3000-3637.8644)^2}{30647233.66}\]

\[=\frac{(-637.8644)^2}{30647233.66}\]

\[=\frac{406871.00}{30647233.66}\]

\[=0.013276\]

3

CI standard error How step 3

\[72.35066\sqrt{0.004237+0.013276}=72.35066\sqrt{0.017513}\]

\[=72.35066\times0.132338\]

\[=9.574711\]

4

PI standard error How step 4

\[72.35066\sqrt{1+0.004237+0.013276}=72.35066\sqrt{1.017513}\]

\[=72.35066\times1.008719\]

\[=72.98146\]

5

Half-widths How step 5

\[\text{CI: }1.970154\times9.574711=18.86365\]

\[\text{PI: }1.970154\times72.98146=143.78469\]

6

Limits How step 6

\[\text{CI: }(1117.89446-18.86365,\ 1117.89446+18.86365)=(1099.031,\ 1136.758)\]

\[\text{PI: }(1117.89446-143.78469,\ 1117.89446+143.78469)=(974.110,\ 1261.679)\]

Midpoint 1117.894 for both. CI width 37.727, PI width 287.569. The PI contains the CI. ▲

A fitted value uses step 1 only. Person 1 has \(x_1=4512\): \(\hat y_1=335.432315+0.2608207\times4512=335.432315+1176.823068=1512.255\) g (Added).

**Why** Added

Both intervals use the fitted line at \(x\) as the center. The CI targets the fixed \(\mu_0\): only the error in \(\hat\beta_0,\hat\beta_1\) counts. The PI targets \(y_{new}=\beta_0+\beta_1x_{new}+\epsilon_{new}\): the variance \(\sigma^2\) of \(\epsilon_{new}\) also counts. ∎

### 05.4 Practice Added

Use \(n=236\), \(\hat\beta_0=335.432315\), \(\hat\beta_1=0.2608207\), \(\hat\sigma=72.35066\), \(\bar x=3637.8644\), \(S_{xx}=30647233.66\).

**Q1.** A new person has head size 3500 cm³. Calculate a 90% PI for this person's brain weight by hand. Use \(t_{0.95,\,234}=1.651391\).

Answer

1

\[\hat y_{new}=335.432315+0.2608207\times3500=335.432315+912.872504=1248.3048\]

2

\[k=\frac{(3500-3637.8644)^2}{30647233.66}=\frac{(-137.8644)^2}{30647233.66}=\frac{19006.59}{30647233.66}=0.000620\]

3

\[72.35066\sqrt{1+0.004237+0.000620}=72.35066\sqrt{1.004857}\]

4

\[=72.35066\times1.002426=72.5262\]

5

\[1.651391\times72.5262=119.7691\]

6

\[1248.3048\pm119.7691=(1128.536,\ 1368.074)\]

**Q2.** At \(x=\bar x\), show that the 95% PI width divided by the 95% CI width equals \(\sqrt{n+1}\). Evaluate it for the brainhead data.

Answer

At \(x=\bar x\), the distance term is 0.

1

\[\frac{2\,t_{0.975,\,n-2}\,\hat\sigma\sqrt{1+\frac1n}}{2\,t_{0.975,\,n-2}\,\hat\sigma\sqrt{\frac1n}}=\sqrt{\frac{1+\frac1n}{\frac1n}}\]

2

\[=\sqrt{n+1}\]

3

\[=\sqrt{237}=15.39\]

Check: \(285.687/18.557=15.39\).

**Q3.** Two 95% intervals at \(x=3000\) are (1099.031, 1136.758) and (974.110, 1261.679). (a) Which is the CI for the mean response, and which is the PI? (b) Why do both have the same midpoint?

Answer

(a) The first (width 37.727) is the CI. The second (width 287.569) is the PI: its standard error has the extra 1 from \(\sigma^2\).

(b) Both have the center \(\hat\beta_0+\hat\beta_1x=335.432315+0.2608207\times3000=1117.894\). The mean estimate and the predicted value are the same number.

## 06 · Practice questions Q1 and Q2

Plan · Slides p.41–43

Section page (p.41), Q1: MLEs and \(\hat\sigma/\hat\sigma_{MLE}\) (p.42), Q2: two CIs and one PI (p.43), similar exercises (Added).

Slides p.41 · Section page "Practice"

The two questions use no data set, only the numbers given.

### 06.1 Practice Q1: MLEs and the ratio \(\hat\sigma/\hat\sigma_{MLE}\) Slides p.42

**What · The question** Slides p.42

Lecture 4 · p.42 · Practice Q1 Consider the simple linear regression model \[y_i=\beta_0+\beta_1x_i+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2),\qquad i=1,\dots,n.\] (a) Write down expressions of the MLEs of \(\beta_0\) and \(\beta_1\) in terms of \(\bar x,\bar y,S_{xy}\) and the sample variance of \(x\).
(b) For \(n=20\), find the ratio \(\hat\sigma/\hat\sigma_{MLE}\).
(c) Suppose \(n=50\), and \(S_{xx}=180,\ \bar x=4.8,\ S_{xy}=353,\ \sum_{i=1}^n x_iy_i=3378\). Compute the MLEs for \(\beta_0\) and \(\beta_1\).

The maximum likelihood estimator (MLE) is the parameter value that makes the observed data most probable under the model.

The sample variance of \(x\) is \(s_x^2=\frac{1}{n-1}\sum_{i=1}^n(x_i-\bar x)^2=S_{xx}/(n-1)\).

Earlier result · Lecture 3 · p.7 So the least squares estimators are: \[\hat\beta_1=\frac{S_{xy}}{S_{xx}},\qquad \hat\beta_0=\bar y-\hat\beta_1\bar x.\] OLS=MLE under the assumption of Normality.

With normal errors, the least squares estimators are the MLEs.

Earlier result · Lecture 2 · p.5 For observations \(y_1,\dots,y_n\), the sample variance is: \(\displaystyle s_y^2=\frac{1}{n-1}\sum_{i}^{n}(y_i-\bar y)^2\)

Earlier result · Lecture 2 · p.35 \[\hat\sigma^2_{ML}=\frac{\sum_{i=1}^n e_i^2}{n}.\qquad\text{However we typically adopt a different estimator: }\ \hat\sigma^2=\frac{\sum_{i=1}^n e_i^2}{n-2}.\]

\(\hat\sigma_{MLE}\) in Q1 is \(\hat\sigma_{ML}\). It divides by \(n\); \(\hat\sigma^2\) divides by \(n-2\). The numerator \(\sum e_i^2\) is the same.

**How · The steps** Added

Q1 · How to solve

- **(a) Write the MLEs.** ① Write \(\hat\beta_1=S_{xy}/S_{xx}\). ② Replace \(S_{xx}\) with \((n-1)s_x^2\). ③ Write \(\hat\beta_0=\bar y-\hat\beta_1\bar x\). ④ Put ② into ③.
- **(b) Find the ratio.** ① Write \(\hat\sigma^2\) and \(\hat\sigma^2_{MLE}\). ② Divide them; \(\sum e_i^2\) cancels. ③ Take the square root. ④ Put in \(n\).
- **(c) Calculate the estimates.** ① Calculate \(\hat\beta_1=S_{xy}/S_{xx}\). ② Find \(\bar y\) from \(\sum x_iy_i=S_{xy}+n\bar x\bar y\). ③ Calculate \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).

**Self-check:** (a) contains only \(\bar x,\bar y,S_{xy},s_x^2\), \(n\), not \(S_{xx}\). (b) is more than 1, because \(n-2<n\). In (c), \(S_{xy}+n\bar x\bar y=3378\).

**Example · The answers** Added

Answer to Q1(a)

1

Write the slope L3 p.7 · \(\hat\beta_1=S_{xy}/S_{xx}\)

\[\hat\beta_1=\frac{S_{xy}}{S_{xx}}\]

**Basis:** OLS = MLE with normal errors.

2

Replace \(S_{xx}\) L2 p.5 · \(s_x^2=S_{xx}/(n-1)\)

\[\hat\beta_1=\frac{S_{xy}}{(n-1)s_x^2}\]

3

Write the intercept L3 p.7 · \(\hat\beta_0=\bar y-\hat\beta_1\bar x\)

\[\hat\beta_0=\bar y-\frac{S_{xy}}{(n-1)s_x^2}\,\bar x\]

Answer to Q1(b)

1

Write the two estimators L2 p.35 · \(\hat\sigma^2_{ML}\) and \(\hat\sigma^2\)

\[\hat\sigma^2=\frac{\sum_{i=1}^n e_i^2}{n-2},\qquad \hat\sigma^2_{MLE}=\frac{\sum_{i=1}^n e_i^2}{n}\]

2

Divide and take the square root (Why (ii))

\[\frac{\hat\sigma}{\hat\sigma_{MLE}}=\sqrt{\frac{n}{n-2}}\]

3

Put in \(n=20\)

\[\frac{\hat\sigma}{\hat\sigma_{MLE}}=\sqrt{\frac{20}{18}}\]

\[\frac{\hat\sigma}{\hat\sigma_{MLE}}=\sqrt{\frac{10}{9}}\]

\[\frac{\hat\sigma}{\hat\sigma_{MLE}}\approx 1.0541\]

\(\hat\sigma\) is approximately 5.4% larger than \(\hat\sigma_{MLE}\).

Answer to Q1(c)

1

Calculate the slope L3 p.7 · \(\hat\beta_1=S_{xy}/S_{xx}\)

\[\hat\beta_1=\frac{353}{180}\]

\[\hat\beta_1\approx 1.961111\]

2

Put the numbers in the identity \(\sum x_iy_i=S_{xy}+n\bar x\bar y\) (Why (iii))

\[3378=353+50\times4.8\times\bar y\]

\[3378=353+240\,\bar y\]

3

Find \(\bar y\)

\[240\,\bar y=3025\]

\[\bar y=\frac{3025}{240}\]

\[\bar y\approx 12.604167\]

4

Calculate the intercept L3 p.7 · \(\hat\beta_0=\bar y-\hat\beta_1\bar x\)

\[\hat\beta_0=12.604167-1.961111\times4.8\]

\[\hat\beta_0=12.604167-9.413333\]

\[\hat\beta_0\approx 3.190833\]

**Self-check:** \(353+240\times12.604167\approx3378\).

\(\hat\beta_1\approx1.9611\), \(\hat\beta_0\approx3.1908\).

**Why · The derivations** Added

**(i) \(S_{xx}\) and the sample variance**

1

\[s_x^2=\frac{1}{n-1}\sum_{i=1}^n(x_i-\bar x)^2\]

**Basis:** Lecture 2 · p.5

2

\[s_x^2=\frac{S_{xx}}{n-1}\]

**Basis:** definition of \(S_{xx}\)

3

\[S_{xx}=(n-1)s_x^2\]

**(ii) The ratio \(\hat\sigma/\hat\sigma_{MLE}\)**

1

\[\frac{\hat\sigma^2}{\hat\sigma^2_{MLE}}=\frac{\sum e_i^2/(n-2)}{\sum e_i^2/n}\]

**Basis:** Lecture 2 · p.35

2

\[\frac{\hat\sigma^2}{\hat\sigma^2_{MLE}}=\frac{\sum e_i^2}{n-2}\cdot\frac{n}{\sum e_i^2}\]

3

\[\frac{\hat\sigma^2}{\hat\sigma^2_{MLE}}=\frac{n}{n-2}\]

4

\[\frac{\hat\sigma}{\hat\sigma_{MLE}}=\sqrt{\frac{n}{n-2}}\]

**Basis:** both are positive

**(iii) The identity \(\sum x_iy_i=S_{xy}+n\bar x\bar y\)**

1

\[S_{xy}=\sum_{i=1}^n(y_i-\bar y)(x_i-\bar x)\]

2

\[S_{xy}=\sum x_iy_i-\bar x\sum y_i-\bar y\sum x_i+n\bar x\bar y\]

3

\[S_{xy}=\sum x_iy_i-\bar x(n\bar y)-\bar y(n\bar x)+n\bar x\bar y\]

**Basis:** \(\sum y_i=n\bar y\), \(\sum x_i=n\bar x\)

4

\[S_{xy}=\sum x_iy_i-n\bar x\bar y\]

5

\[\sum x_iy_i=S_{xy}+n\bar x\bar y\qquad\blacksquare\]

### 06.2 Practice Q2: two confidence intervals and one prediction interval Slides p.43

**What · The question** Slides p.43

Lecture 4 · p.43 · Practice Q2 Consider the simple linear regression model \[y_i=\beta_0+\beta_1x_i+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2),\qquad i=1,\dots,n.\] Suppose \(n=10\) and \(\hat\beta_1=5,\ \hat\beta_0=-2,\ S_{xx}=16,\ \bar x=0,\ \hat\sigma=0.4\).
Also we know that if \(T\sim t_{(8)}\): \(P(T>-1.86)=0.95\), \(P(|T|>2.75)=0.025\), \(P(T<2.31)=0.975\).
(a) Calculate a two-sided 95% confidence interval for \(\beta_1\).
(b) Calculate a two-sided 95% confidence interval for \(\beta_0\).
(c) Calculate a 90% prediction interval for a new response at \(x_{new}=5\).

\(t_{(8)}\) has \(n-2=10-2=8\) degrees of freedom.

Lecture 4 · p.5 (review of Lecture 3) 95% CI for \(\beta_1\) is \(\displaystyle\hat\beta_1\pm t_{0.975,n-2}\times\sqrt{\frac{\hat\sigma^2}{S_{xx}}}\) or \(\hat\beta_1\pm t_{0.975,n-2}\times \mathrm{SE}(\hat\beta_1)\).
More generally a \(100\times(1-\alpha)\%\) CI is: \(\hat\beta_1\pm t_{1-\alpha/2,n-2}\times \mathrm{SE}(\hat\beta_1)\).

Earlier result · Lecture 3 · p.24 \[\hat\beta_0\sim N\!\left(\beta_0,\ \sigma^2\left(\frac1n+\frac{\bar x^2}{S_{xx}}\right)\right)\]

\(\hat\sigma\) for \(\sigma\) gives \(\mathrm{SE}(\hat\beta_0)=\hat\sigma\sqrt{\frac1n+\frac{\bar x^2}{S_{xx}}}\). The CI is \(\hat\beta_0\pm t_{1-\alpha/2,n-2}\,\mathrm{SE}(\hat\beta_0)\) (Lecture 3 · p.36).

Lecture 4 · p.37 So a 100(1−\(\alpha\))% prediction interval is: \[\hat y_{new}\pm t_{1-\frac{\alpha}{2},n-2}\ \hat\sigma\sqrt{1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}\]

**How · The steps** Added

Q2 · How to solve

- **Step 0: Read the quantiles.** ① Find \(1-\alpha/2\): 95% gives 0.975, 90% gives 0.95. ② Find \(P(T<c)=1-\alpha/2\) in the question. ③ Change \(P(T>-c)\) to \(P(T<c)\) by symmetry.
- **(a) CI for \(\beta_1\).** ① Calculate \(\mathrm{SE}(\hat\beta_1)=\hat\sigma/\sqrt{S_{xx}}\). ② Multiply by \(t_{0.975,8}\). ③ Write \(\hat\beta_1\) plus or minus this number.
- **(b) CI for \(\beta_0\).** ① Calculate \(\frac1n+\frac{\bar x^2}{S_{xx}}\). ② Take the square root and multiply by \(\hat\sigma\): \(\mathrm{SE}(\hat\beta_0)\). ③ Write \(\hat\beta_0\pm t_{0.975,8}\,\mathrm{SE}(\hat\beta_0)\).
- **(c) 90% PI.** ① Calculate \(\hat y_{new}=\hat\beta_0+\hat\beta_1x_{new}\). ② Calculate \(1+\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}\). ③ Take the square root and multiply by \(\hat\sigma\). ④ Multiply by \(t_{0.95,8}\). Write \(\hat y_{new}\) plus or minus this number.

**Self-check:** Degrees of freedom \(n-2=8\). Each interval has the point estimate at its center. The PI has an extra "1" under the square root.

[figure]
Figure 6-1. The \(t_{(8)}\) density. Blue tails (beyond ±2.31): 0.025 each, middle 0.95. Orange-plus-blue tails (beyond ±1.86): 0.05 each, middle 0.90.

**Example · The answers** Added

Step 0: read \(t_{0.975,8}\) and \(t_{0.95,8}\) from the question

1

A 95% interval needs \(t_{0.975,8}\) How Step 0 ①

\[1-\alpha=0.95\ \Rightarrow\ 1-\alpha/2=0.975\]

2

Third statement definition of a quantile

\[P(T<2.31)=0.975\ \Rightarrow\ t_{0.975,8}=2.31\]

3

A 90% interval needs \(t_{0.95,8}\) How Step 0 ①

\[1-\alpha=0.90\ \Rightarrow\ 1-\alpha/2=0.95\]

4

First statement, by symmetry (Why (i)) How Step 0 ③

\[P(T>-1.86)=0.95\ \Rightarrow\ P(T<1.86)=0.95\ \Rightarrow\ t_{0.95,8}=1.86\]

\(P(|T|>2.75)=0.025\) puts 0.0125 in each tail: a two-sided 97.5% interval. Q2 does not use it.

Answer to Q2(a): 95% CI for \(\beta_1\)

1

Standard error L4 p.5 · \(\mathrm{SE}(\hat\beta_1)=\hat\sigma/\sqrt{S_{xx}}\)

\[\mathrm{SE}(\hat\beta_1)=\frac{0.4}{\sqrt{16}}\]

\[\mathrm{SE}(\hat\beta_1)=\frac{0.4}{4}\]

\[\mathrm{SE}(\hat\beta_1)=0.1\]

2

Half-width Step 0 · \(t_{0.975,8}=2.31\)

\[t_{0.975,8}\times \mathrm{SE}(\hat\beta_1)=2.31\times0.1\]

\[t_{0.975,8}\times \mathrm{SE}(\hat\beta_1)=0.231\]

3

Interval L4 p.5 · \(\hat\beta_1\pm t_{0.975,n-2}\mathrm{SE}(\hat\beta_1)\)

\[5\pm0.231\]

\[(5-0.231,\ 5+0.231)=(4.769,\ 5.231)\]

Answer to Q2(b): 95% CI for \(\beta_0\)

1

SE formula L3 p.24 · \(\mathrm{SE}(\hat\beta_0)\)

\[\mathrm{SE}(\hat\beta_0)=\hat\sigma\sqrt{\frac1n+\frac{\bar x^2}{S_{xx}}}\]

2

Put in \(n=10,\ \bar x=0,\ S_{xx}=16\)

\[\frac1n+\frac{\bar x^2}{S_{xx}}=\frac1{10}+\frac{0^2}{16}\]

\[\frac1n+\frac{\bar x^2}{S_{xx}}=0.1+0\]

\[\frac1n+\frac{\bar x^2}{S_{xx}}=0.1\]

3

Square root, times \(\hat\sigma\)

\[\mathrm{SE}(\hat\beta_0)=0.4\sqrt{0.1}\]

\[\mathrm{SE}(\hat\beta_0)=0.4\times0.316228\]

\[\mathrm{SE}(\hat\beta_0)\approx0.126491\]

4

Half-width Step 0 · \(t_{0.975,8}=2.31\)

\[2.31\times0.126491\approx0.292194\]

5

Interval L3 p.36 · \(\hat\beta_0\pm t\cdot \mathrm{SE}(\hat\beta_0)\)

\[-2\pm0.292194\]

\[(-2-0.292194,\ -2+0.292194)\approx(-2.292,\ -1.708)\]

Answer to Q2(c): 90% PI at \(x_{new}=5\)

1

Center L4 p.37 · \(\hat y_{new}=\hat\beta_0+\hat\beta_1x_{new}\)

\[\hat y_{new}=-2+5\times5\]

\[\hat y_{new}=-2+25\]

\[\hat y_{new}=23\]

2

Terms under the square root L4 p.37 · \(1+\frac1n+\frac{(x_{new}-\bar x)^2}{S_{xx}}\)

\[1+\frac1{10}+\frac{(5-0)^2}{16}=1+0.1+\frac{25}{16}\]

\[1+0.1+1.5625=2.6625\]

3

Square root, times \(\hat\sigma\)

\[\hat\sigma\sqrt{2.6625}=0.4\times1.631717\]

\[\hat\sigma\sqrt{2.6625}\approx0.652687\]

4

Half-width Step 0 · \(t_{0.95,8}=1.86\)

\[1.86\times0.652687\approx1.213997\]

5

Interval L4 p.37 · \(\hat y_{new}\pm t_{1-\alpha/2,n-2}\,\hat\sigma\sqrt{\cdots}\)

\[23\pm1.213997\]

\[(23-1.213997,\ 23+1.213997)\approx(21.786,\ 24.214)\]

[figure]
Figure 6-2. Fitted line \(\hat y=-2+5x\) (blue) and 90% prediction band (green). Orange bar: the PI \((21.786,\ 24.214)\) at \(x_{new}=5\). The band is narrowest at \(\bar x=0\) and widens as \((x_{new}-\bar x)^2/S_{xx}\) increases.

**Why · The derivations** Added

Only the two new steps of Q2.

**(i) From \(P(T>-1.86)=0.95\) to \(t_{0.95,8}=1.86\)**

1

\[P(T>-1.86)=0.95\]

**Basis:** the question

2

\[P(-T<1.86)=0.95\]

3

\[P(T<1.86)=0.95\]

**Basis:** \(-T\) has the same distribution as \(T\) (symmetry)

4

\[t_{0.95,8}=1.86\]

**Basis:** \(P(T<t_{q,8})=q\)

**(ii) A 90% interval uses \(t_{0.95,8}\)**

1

\[100(1-\alpha)\%=90\%\]

2

\[\alpha=0.10\]

3

\[1-\frac{\alpha}{2}=1-0.05\]

4

\[1-\frac{\alpha}{2}=0.95\]

5

\[t_{1-\frac{\alpha}{2},n-2}=t_{0.95,8}\qquad\blacksquare\]

**Basis:** Slides p.37, \(n-2=8\)

### 06.3 Practice Added

Exercise 6.1

Model \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\). \(n=12\), \(S_{xx}=40\), \(\bar x=3\), \(S_{xy}=60\), \(\bar y=10\). Calculate the MLEs for \(\beta_0\) and \(\beta_1\).

Answer

1

Slope L3 p.7 · \(\hat\beta_1=S_{xy}/S_{xx}\)

\[\hat\beta_1=\frac{60}{40}\]

\[\hat\beta_1=1.5\]

2

Intercept L3 p.7 · \(\hat\beta_0=\bar y-\hat\beta_1\bar x\)

\[\hat\beta_0=10-1.5\times3\]

\[\hat\beta_0=10-4.5\]

\[\hat\beta_0=5.5\]

Exercise 6.2

Setting of Practice Q2 (\(n=10,\ \hat\beta_0=-2,\ \hat\beta_1=5,\ \hat\sigma=0.4\)). Find \(\hat\sigma_{MLE}\).

Answer

1

Ratio formula 06.1 Why (ii) · \(\hat\sigma/\hat\sigma_{MLE}=\sqrt{n/(n-2)}\)

\[\hat\sigma_{MLE}=\hat\sigma\sqrt{\frac{n-2}{n}}\]

2

Put in \(n=10\), \(\hat\sigma=0.4\)

\[\hat\sigma_{MLE}=0.4\sqrt{\frac{8}{10}}\]

\[\hat\sigma_{MLE}=0.4\times0.894427\]

\[\hat\sigma_{MLE}\approx0.3578\]

Exercise 6.3

Setting of Practice Q2 (\(n=10,\ \hat\beta_1=5,\ \hat\beta_0=-2,\ S_{xx}=16,\ \bar x=0,\ \hat\sigma=0.4\), \(P(T<2.31)=0.975\) for \(T\sim t_{(8)}\)). Calculate a 95% PI for a new response at \(x_{new}=2\).

Answer

1

Quantile How Step 0

\[95\%\Rightarrow 1-\alpha/2=0.975\Rightarrow t_{0.975,8}=2.31\]

2

Center L4 p.37 · \(\hat y_{new}\)

\[\hat y_{new}=-2+5\times2\]

\[\hat y_{new}=8\]

3

Terms under the square root L4 p.37

\[1+\frac1{10}+\frac{(2-0)^2}{16}=1+0.1+0.25\]

\[1+0.1+0.25=1.35\]

4

Times \(\hat\sigma\), then times the quantile

\[0.4\sqrt{1.35}=0.4\times1.161895\approx0.464758\]

\[2.31\times0.464758\approx1.073591\]

5

Interval

\[8\pm1.073591\approx(6.926,\ 9.074)\]


---

<!-- L05 -->

STAT 331 · Lecture 5 · Random Vectors and Multivariate Normal

# Lecture 5: Random Vectors and Multivariate Normal

This lecture writes regression in matrix form, reviews matrix rules, and defines random vectors and the multivariate normal distribution (Lecture 5 · p.1–48).

Contents
01 · Recap and multiple linear regression in matrix form 02 · Matrix review: transpose, inverse, trace 03 · Matrix calculus 04 · Random vectors: mean vector, covariance matrix, and linear transformations 05 · Multivariate normal distribution: definition and properties 06 · Exercises on the MVN, MLR as an MVN model, and practice

## 01 · Recap and multiple linear regression in matrix form

### 01.1 Title and section pages Slides p.1–2

Page 1: "Lecture 5: Random Vectors & Multivariate normal".

Page 2: section title "Recap" (pages 3–5).

### 01.2 Recap: simple linear regression model Slides p.3

**What** Slides p.3

Recap: Simple Linear Regression · Lecture 5 · p.3 \[y_i=\beta_0+\beta_1x_i+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] Or: \[y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\ \sigma^2)\]

Simple linear regression is a linear model with one explanatory variable.

The response \(y_i\) is the quantity to explain in observation \(i\), \(i=1,\dots,n\). The sample size \(n\) is the number of observations.

The explanatory variable (covariate) \(x_i\) explains \(y_i\). The model treats \(x_i\) as a known, fixed number.

The intercept \(\beta_0\) and the slope \(\beta_1\) are parameters: fixed, unknown numbers of the population.

The error \(\epsilon_i\) is the random distance of \(y_i\) from the line \(\beta_0+\beta_1x_i\).

A random variable is a number whose value comes from a random result.

The expectation (mean) \(E[\cdot]\) is the theoretical average of a random variable.

The variance \(Var(\cdot)\) is the expected squared distance from the mean. It measures spread.

\(N(\mu,\sigma^2)\) is the bell-shaped normal distribution with mean \(\mu\) and variance \(\sigma^2\). The standard deviation \(\sigma\) is the square root of the variance.

\(\overset{iid}{\sim}\) means "independent and identically distributed": the errors do not affect each other and have one distribution.

\(\overset{indep}{\sim}\) means "independent". The \(y_i\) have different means, because the mean changes with \(x_i\).

The first form is "line plus error". The second form gives the distribution of each \(y_i\).

**How** Added

Write a data set as a simple linear regression model

- Find the response \(y\).
- Find the explanatory variable \(x\).
- Count the observations \(n\).
- Write \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), with \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\) and \(i=1,\dots,n\).

**Self-check:** The unknown parameters are \(\beta_0\), \(\beta_1\) and \(\sigma^2\). The data give \(x_i\), \(y_i\) and \(n\).

**Example · brainhead data** Added

The course file brainhead.csv gives the head size and brain weight of 236 persons. All examples in this unit use it. The first 3 rows:

Row 1: head size 4512 cm³, brain weight 1530 g.

Row 2: head size 3738 cm³, brain weight 1297 g.

Row 3: head size 4261 cm³, brain weight 1335 g.

1

Response How step 1

\[y_i=\text{brain weight of person } i\text{ (g)}\]

2

Explanatory variable How step 2

\[x_i=\text{head size of person } i\text{ (cm³)}\]

3

Sample size How step 3

\[n=236\]

4

Model How step 4

\[y_i=\beta_0+\beta_1x_i+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2),\qquad i=1,\dots,236\]

Lecture 4 · p.7 gives \(\hat\beta_0=335.43231\), \(\hat\beta_1=0.26082\) and \(\hat\sigma=72.35\). A hat \(\hat{\ }\) marks an estimate: a number calculated from the data.

The examples use more digits, calculated from brainhead.csv (Added, not on the slides): \(\hat\beta_0=335.4323\), \(\hat\beta_1=0.2608207\), \(\hat\sigma=72.35066\), \(\bar x=3637.864\), \(\bar y=1284.263\), \(\sum_{i=1}^n(x_i-\bar x)^2=30647233.66\).

[figure]
Figure 01.1 · Brainhead data (\(n=236\)) and the fitted line \(\hat y=335.43+0.2608x\) (green). Orange: the first 3 observations. Each orange dashed line is a residual (vertical distance to the line).

**Why · the two forms are the same** Added

1

\[y_i=\beta_0+\beta_1x_i+\epsilon_i\]

2

\[E[y_i]=\beta_0+\beta_1x_i+E[\epsilon_i]\]

\(\beta_0+\beta_1x_i\) is a constant.

3

\[E[y_i]=\beta_0+\beta_1x_i\]

\(E[\epsilon_i]=0\).

4

\[Var(y_i)=Var(\epsilon_i)=\sigma^2\]

A constant does not change the variance.

5

\[y_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\ \sigma^2)\]

Normal plus constant is normal; independent \(\epsilon_i\). ∎

### 01.3 Recap: estimating the mean response Slides p.4

**What** Slides p.4

Estimating the Mean Response · Lecture 5 · p.4 \[\hat\mu_0=\hat\beta_0+\hat\beta_1x_0=\bar y+\hat\beta_1(x_0-\bar x)\] \[\frac{\hat\mu_0-\mu_0}{\hat\sigma\sqrt{\dfrac1n+\dfrac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}}\sim t_{n-2}\] 100(1-α)% CI is: \[\hat\mu_0\pm t_{1-\alpha/2,\,n-2}\,\hat\sigma\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}\]

The mean response \(\mu_0=\beta_0+\beta_1x_0\) is the population mean of \(y\) at \(x=x_0\). It is an unknown parameter.

\(\hat\mu_0\) is the estimate of \(\mu_0\).

The sample means \(\bar x=\frac1n\sum_{i=1}^nx_i\) and \(\bar y\) are the averages of the \(x_i\) and the \(y_i\).

\(\hat\sigma=\sqrt{\sum_ie_i^2/(n-2)}\) estimates \(\sigma\). The residual \(e_i=y_i-\hat y_i\) is the observed value minus the fitted value.

\(t_{n-2}\) is the t distribution with \(n-2\) degrees of freedom. It is bell-shaped like \(N(0,1)\), with thicker tails.

\(t_{1-\alpha/2,\,n-2}\) is the \(1-\alpha/2\) quantile of \(t_{n-2}\): the point with area \(1-\alpha/2\) to its left.

A confidence interval (CI) is calculated from the data. In repeated samples, \(100(1-\alpha)\%\) of these intervals contain the true \(\mu_0\).

**How** Added

Calculate the \(100(1-\alpha)\%\) CI for \(\mu_0\)

- Calculate \(\hat\mu_0=\hat\beta_0+\hat\beta_1x_0\).
- Calculate \(\dfrac1n+\dfrac{(x_0-\bar x)^2}{\sum_i(x_i-\bar x)^2}\).
- Take the square root of step 2. Multiply it by \(\hat\sigma\).
- Find the quantile \(t_{1-\alpha/2,\,n-2}\).
- Multiply step 4 by step 3. This is the half-width.
- Write \(\hat\mu_0\pm\) the half-width.

**Self-check:** The midpoint equals \(\hat\mu_0\). The interval is wider when \(x_0\) is farther from \(\bar x\).

**Example · brainhead data, \(x_0=4000\) cm³** Added

Find the 95% CI (\(\alpha=0.05\)) for the mean brain weight at head size 4000 cm³.

1

Point estimate How step 1

\[\hat\mu_0=335.4323+0.2608207\times4000\]

\[\hat\mu_0=335.4323+1043.2828=1378.7151\]

2

Term in the square root How step 2

\[x_0-\bar x=4000-3637.864=362.136\]

\[(x_0-\bar x)^2=362.136^2=131142.48\]

\[\frac{131142.48}{30647233.66}=0.0042791\]

\[\frac1{236}=0.0042373\]

\[0.0042373+0.0042791=0.0085164\]

3

Standard error How step 3

\[\sqrt{0.0085164}=0.0922843\]

\[72.35066\times0.0922843=6.67683\]

4

Quantile How step 4

\[t_{1-0.05/2,\,236-2}=t_{0.975,\,234}=1.970154\]

5

Half-width How step 5

\[1.970154\times6.67683=13.15438\]

6

Interval How step 6

\[1378.7151\pm13.1544=(1378.7151-13.1544,\ \ 1378.7151+13.1544)=(1365.5607,\ \ 1391.8695)\]

**Self-check:** \((1365.5607+1391.8695)/2=1378.7151=\hat\mu_0\).

Result: 95% CI for the mean brain weight at 4000 cm³ is (1365.56, 1391.87) g. ▲

**Why · the second form is correct** Added

1

\[\hat\mu_0=\hat\beta_0+\hat\beta_1x_0\]

2

\[\hat\mu_0=\bar y-\hat\beta_1\bar x+\hat\beta_1x_0\]

Put in \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).

3

\[\hat\mu_0=\bar y+\hat\beta_1(x_0-\bar x)\]

∎

### 01.4 Recap: predicting a new response Slides p.5

**What** Slides p.5

Predicting a New Response · Lecture 5 · p.5 \[\hat y_{new}=\hat\beta_0+\hat\beta_1x_{new}\] \[\frac{\hat y_{new}-y_{new}}{\hat\sigma\sqrt{1+\dfrac1n+\dfrac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}}\sim t_{n-2}\] 100(1-α)% prediction interval is: \[\hat y_{new}\pm t_{1-\alpha/2,\,n-2}\,\hat\sigma\sqrt{1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_{i=1}^n(x_i-\bar x)^2}}\]

The new response \(y_{new}=\beta_0+\beta_1x_{new}+\epsilon_{new}\) is the response of a new, unobserved person. It is a random variable, not a parameter.

\(\hat y_{new}\) is the prediction of \(y_{new}\). It uses the same equation as \(\hat\mu_0\).

A prediction interval (PI) contains \(y_{new}\) in \(100(1-\alpha)\%\) of repeated samples.

**How** Added

Calculate the \(100(1-\alpha)\%\) PI for \(y_{new}\)

- Calculate \(\hat y_{new}=\hat\beta_0+\hat\beta_1x_{new}\).
- Calculate \(1+\dfrac1n+\dfrac{(x_{new}-\bar x)^2}{\sum_i(x_i-\bar x)^2}\).
- Take the square root of step 2. Multiply it by \(\hat\sigma\).
- Find the quantile \(t_{1-\alpha/2,\,n-2}\).
- Multiply step 4 by step 3. This is the half-width.
- Write \(\hat y_{new}\pm\) the half-width.

**Self-check:** At one point, the PI and the CI have the same midpoint. The PI is always wider.

**Example · brainhead data, \(x_{new}=4000\) cm³** Added

Find the 95% PI for the brain weight of one new person with head size 4000 cm³.

1

Prediction How step 1

\[\hat y_{new}=335.4323+0.2608207\times4000=1378.7151\]

2

Term in the square root How step 2

\[1+0.0085164=1.0085164\]

0.0085164 from Section 01.3, step 2.

3

Standard error How step 3

\[\sqrt{1.0085164}=1.0042492\]

\[72.35066\times1.0042492=72.65809\]

4

Quantile How step 4

\[t_{0.975,\,234}=1.970154\]

5

Half-width How step 5

\[1.970154\times72.65809=143.14763\]

6

Interval How step 6

\[1378.7151\pm143.1476=(1378.7151-143.1476,\ \ 1378.7151+143.1476)=(1235.5675,\ \ 1521.8627)\]

**Self-check:** Midpoint 1378.7151, same as the CI. Half-width is \(143.1476/13.1544=10.88\) times the CI half-width.

Result: 95% PI for one new person at 4000 cm³ is (1235.57, 1521.86) g. ▲

**Why · the square root has an extra 1** Added

The prediction error \(\hat y_{new}-y_{new}\) has two independent sources: the estimated line and the new error \(\epsilon_{new}\).

1

\[Var(\hat y_{new}-y_{new})=Var(\hat y_{new})+Var(y_{new})\]

\(y_{new}\) is independent of the data.

2

\[=\sigma^2\left(\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_i(x_i-\bar x)^2}\right)+\sigma^2\]

\(Var(\hat y_{new})\) as on page 4; \(Var(y_{new})=\sigma^2\).

3

\[=\sigma^2\left(1+\frac1n+\frac{(x_{new}-\bar x)^2}{\sum_i(x_i-\bar x)^2}\right)\]

Put \(\hat\sigma\) for \(\sigma\): ratio is \(t_{n-2}\). ∎

### 01.5 From simple to multiple linear regression Slides p.6–7

Slides p.6 Page 6 repeats the title page. New material starts.

**What** Slides p.7

Linear Regression · Lecture 5 · p.7 Simple Linear Regression: \[y_i=\beta_0+\beta_1x_i+\epsilon_i,\quad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\iff y_i\,|\,x_i\overset{indep}{\sim}N(\beta_0+\beta_1x_i,\ \sigma^2)\] Multiple Linear Regression: \[y_i=\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}+\epsilon_i,\quad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] \[\iff y_i\,|\,x_i\overset{indep}{\sim}N(\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip},\ \sigma^2)\]

Multiple linear regression is a linear model with \(p\) explanatory variables. With \(p=1\), it is simple linear regression.

\(x_{ij}\) is the value of variable \(j\) in observation \(i\). Index \(i\) counts rows (observations); \(j=1,\dots,p\) counts columns (variables).

\(\beta_j\) is the coefficient of variable \(j\). With the intercept \(\beta_0\), the model has \(p+1\) coefficients.

\(y_i\,|\,x_i\) is the conditional distribution of \(y_i\) when \(x_i=(x_{i1},\dots,x_{ip})\) is fixed.

\(\iff\) means "if and only if": the two sides give the same model.

**How** Added

Write a data set as a multiple linear regression model

- Find the response \(y\). Count the observations \(n\).
- List the explanatory variables. Count them: \(p\).
- Number the variables \(1,\dots,p\).
- Call the value of variable \(j\) in row \(i\) \(x_{ij}\).
- Write \(y_i=\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}+\epsilon_i\), with \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\) and \(i=1,\dots,n\).

**Self-check:** The right side has \(p+1\) coefficients. For \(j\ge1\), \(\beta_j\) multiplies a variable with second index \(j\).

**Example · brainhead data** Added

The only explanatory variable is head size: \(p=1\).

1

Response and sample size How step 1

\[y_i=\text{brain weight},\qquad n=236\]

2

Variables How steps 2–3

\[\text{variable 1}=\text{head size},\qquad p=1\]

3

Values How step 4

\[x_{11}=4512,\qquad x_{21}=3738,\qquad x_{31}=4261\]

4

Model How step 5

\[y_i=\beta_0+\beta_1x_{i1}+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2),\qquad i=1,\dots,236\]

This is the model of Section 01.2, with \(x_i\) renamed \(x_{i1}\). ▲

**Why · the two forms are the same** Added

1

\[y_i=\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}+\epsilon_i\]

2

\[E[y_i\,|\,x_i]=\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}+E[\epsilon_i]\]

For fixed \(x_i\), the linear part is constant.

3

\[E[y_i\,|\,x_i]=\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}\]

\(E[\epsilon_i]=0\).

4

\[Var(y_i\,|\,x_i)=Var(\epsilon_i)=\sigma^2\]

5

\[y_i\,|\,x_i\overset{indep}{\sim}N(\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip},\ \sigma^2)\]

Normal plus constant is normal; independent \(\epsilon_i\). ∎

### 01.6 Matrix form of multiple linear regression Slides p.8

**What** Slides p.8

Multiple Linear Regression · Lecture 5 · p.8 \[y_i=\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] We can write this: \[\underbrace{\left[\begin{array}{c}y_1\\y_2\\\vdots\\y_n\end{array}\right]}_{\mathbf{y}}=\underbrace{\left[\begin{array}{ccccc}1&x_{11}&x_{12}&\dots&x_{1p}\\1&x_{21}&x_{22}&\dots&x_{2p}\\\vdots&\vdots&\vdots&\vdots&\vdots\\1&x_{n1}&x_{n2}&\dots&x_{np}\end{array}\right]}_{\mathbf{X}}\underbrace{\left[\begin{array}{c}\beta_0\\\beta_1\\\vdots\\\beta_p\end{array}\right]}_{\boldsymbol\beta}+\underbrace{\left[\begin{array}{c}\epsilon_1\\\epsilon_2\\\vdots\\\epsilon_n\end{array}\right]}_{\boldsymbol\epsilon}\]

A matrix is a set of numbers in rows and columns. An \(r\times c\) matrix has \(r\) rows and \(c\) columns (its dimension).

A column vector is an \(r\times1\) matrix. The slides write vectors in bold lowercase (\(\mathbf{y},\boldsymbol\beta,\boldsymbol\epsilon\)) and matrices in bold uppercase (\(\mathbf{X}\)).

\(\mathbf{y}\) (\(n\times1\)) is the response vector, with components \(y_i\).

\(\mathbf{X}\) (\(n\times(p+1)\)) is the design matrix. Row \(i\) is observation \(i\). Column 1 is all 1s. Column \(j+1\) is variable \(j\).

\(\boldsymbol\beta\) (\((p+1)\times1\)) is the coefficient vector \(\beta_0,\beta_1,\dots,\beta_p\).

\(\boldsymbol\epsilon\) (\(n\times1\)) is the error vector, with components \(\epsilon_i\).

Matrix multiplication: component \(i\) of \(\mathbf{X}\boldsymbol\beta\) is the sum of the term-by-term products of row \(i\) of \(\mathbf{X}\) and \(\boldsymbol\beta\). Columns of \(\mathbf{X}\) must equal rows of \(\boldsymbol\beta\).

An \(n\times(p+1)\) matrix times a \((p+1)\times1\) vector gives an \(n\times1\) vector.

Matrix addition adds entries in the same position. The two matrices must have the same dimension.

[figure]
Figure 01.2 · Block dimensions in \(\mathbf{y}=\mathbf{X}\boldsymbol\beta+\boldsymbol\epsilon\). The \(p+1\) columns of \(\mathbf{X}\) match the \(p+1\) rows of \(\boldsymbol\beta\). The product is \(n\times1\), like \(\boldsymbol\epsilon\) and \(\mathbf{y}\). Dark green: column of 1s.

**How** Added

Write multiple linear regression as \(\mathbf{y}=\mathbf{X}\boldsymbol\beta+\boldsymbol\epsilon\)

- Write \(\mathbf{y}\): put \(y_1,\dots,y_n\) in one column, in observation order.
- Write \(\mathbf{X}\): row \(i\) is \([\,1,\ x_{i1},\ \dots,\ x_{ip}\,]\), in the row order of \(\mathbf{y}\).
- Write \(\boldsymbol\beta\): put \(\beta_0,\beta_1,\dots,\beta_p\) in one column.
- Write \(\boldsymbol\epsilon\): put \(\epsilon_1,\dots,\epsilon_n\) in one column.

**Self-check:** ① \(\mathbf{X}\) is \(n\times(p+1)\), and column 1 is all 1s. ② Row \(i\) of \(\mathbf{X}\) times \(\boldsymbol\beta\) gives \(\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}\).

**Example · first 3 rows of the brainhead data** Added

Use only the first 3 observations: \(n=3\), \(p=1\).

1

Response vector How step 1

\[\mathbf{y}=\left[\begin{array}{c}1530\\1297\\1335\end{array}\right]\qquad(3\times1)\]

2

Design matrix How step 2

\[\mathbf{X}=\left[\begin{array}{cc}1&4512\\1&3738\\1&4261\end{array}\right]\qquad(3\times2=n\times(p+1))\]

3

Coefficient vector How step 3

\[\boldsymbol\beta=\left[\begin{array}{c}\beta_0\\\beta_1\end{array}\right]\qquad(2\times1)\]

4

Error vector How step 4

\[\boldsymbol\epsilon=\left[\begin{array}{c}\epsilon_1\\\epsilon_2\\\epsilon_3\end{array}\right]\qquad(3\times1)\]

5

Matrix equation

\[\left[\begin{array}{c}1530\\1297\\1335\end{array}\right]=\left[\begin{array}{cc}1&4512\\1&3738\\1&4261\end{array}\right]\left[\begin{array}{c}\beta_0\\\beta_1\end{array}\right]+\left[\begin{array}{c}\epsilon_1\\\epsilon_2\\\epsilon_3\end{array}\right]\]

Multiply each row (self-check ②):

Row 1: \(1530=1\cdot\beta_0+4512\cdot\beta_1+\epsilon_1\), that is, \(y_1=\beta_0+\beta_1x_{11}+\epsilon_1\).

Row 2: \(1297=1\cdot\beta_0+3738\cdot\beta_1+\epsilon_2\), that is, \(y_2=\beta_0+\beta_1x_{21}+\epsilon_2\).

Row 3: \(1335=1\cdot\beta_0+4261\cdot\beta_1+\epsilon_3\), that is, \(y_3=\beta_0+\beta_1x_{31}+\epsilon_3\).

The 1 in column 1 puts the intercept \(\beta_0\) in each row.

\(\boldsymbol\epsilon\) is unknown, because \(\boldsymbol\beta\) is unknown. As a check, use \(\hat\beta_0=335.4323\) and \(\hat\beta_1=0.2608207\). \(\mathbf{X}\hat{\boldsymbol\beta}\) gives the fitted values; \(\mathbf{y}-\mathbf{X}\hat{\boldsymbol\beta}\) gives the residuals.

1

Row 1

\[1\times335.4323+4512\times0.2608207=335.4323+1176.8230=1512.2553\]

\[e_1=1530-1512.2553=17.7447\]

2

Row 2

\[1\times335.4323+3738\times0.2608207=335.4323+974.9478=1310.3801\]

\[e_2=1297-1310.3801=-13.3801\]

3

Row 3

\[1\times335.4323+4261\times0.2608207=335.4323+1111.3570=1446.7893\]

\[e_3=1335-1446.7893=-111.7893\]

These residuals are the orange dashed lines in Figure 01.1. A positive residual is a point above the line.

For all 236 rows: \(\mathbf{y}\) is \(236\times1\), \(\mathbf{X}\) is \(236\times2\), \(\boldsymbol\beta\) is \(2\times1\), \(\boldsymbol\epsilon\) is \(236\times1\). ▲

**Why · row \(i\) of the matrix equation is equation \(i\)** Added

1

\[[\mathbf{y}]_i=[\mathbf{X}\boldsymbol\beta+\boldsymbol\epsilon]_i\]

\([\cdot]_i\): component \(i\). Equal vectors have equal components.

2

\[y_i=[\mathbf{X}\boldsymbol\beta]_i+\epsilon_i\]

Matrix addition, entry by entry.

3

\[y_i=1\cdot\beta_0+x_{i1}\beta_1+x_{i2}\beta_2+\cdots+x_{ip}\beta_p+\epsilon_i\]

Row \(i\) of \(\mathbf{X}\) is \([1,x_{i1},\dots,x_{ip}]\).

4

\[y_i=\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}+\epsilon_i\]

True for each \(i=1,\dots,n\). ∎

### 01.7 Practice Added

**Q1.** Rows 4 to 6 of brainhead.csv have head sizes 3777, 4177, 3585 and brain weights 1282, 1590, 1300. Use only these rows and the model \(y_i=\beta_0+\beta_1x_{i1}+\epsilon_i\). Write \(\mathbf{y}\), \(\mathbf{X}\), \(\boldsymbol\beta\), \(\boldsymbol\epsilon\) and their dimensions.

Answer

Step 1: \(\mathbf{y}=\left[\begin{array}{c}1282\\1590\\1300\end{array}\right]\), \(3\times1\).

Step 2: \(\mathbf{X}=\left[\begin{array}{cc}1&3777\\1&4177\\1&3585\end{array}\right]\), \(3\times2\).

Step 3: \(\boldsymbol\beta=\left[\begin{array}{c}\beta_0\\\beta_1\end{array}\right]\), \(2\times1\).

Step 4: \(\boldsymbol\epsilon=\left[\begin{array}{c}\epsilon_1\\\epsilon_2\\\epsilon_3\end{array}\right]\), \(3\times1\).

**Self-check:** Row 2 gives \(1590=\beta_0+4177\beta_1+\epsilon_2\).

**Q2.** A study has \(n=50\) observations and the model \(y_i=\beta_0+\beta_1x_{i1}+\beta_2x_{i2}+\beta_3x_{i3}+\epsilon_i\). Give the dimensions of \(\mathbf{y}\), \(\mathbf{X}\), \(\boldsymbol\beta\), \(\boldsymbol\epsilon\). Write row 7 of \(\mathbf{X}\).

Answer

Step 1: 3 explanatory variables: \(p=3\), \(p+1=4\).

Step 2: \(\mathbf{y}\) is \(50\times1\). \(\mathbf{X}\) is \(50\times4\). \(\boldsymbol\beta\) is \(4\times1\). \(\boldsymbol\epsilon\) is \(50\times1\).

Step 3: Row 7 is \([\,1,\ x_{71},\ x_{72},\ x_{73}\,]\).

**Self-check:** 4 columns of \(\mathbf{X}\), 4 rows of \(\boldsymbol\beta\); the product is \(50\times1\).

**Q3.** Use \(\hat\beta_0=335.4323\) and \(\hat\beta_1=0.2608207\). For Q1, calculate component 2 of \(\mathbf{X}\hat{\boldsymbol\beta}\) and of \(\mathbf{y}-\mathbf{X}\hat{\boldsymbol\beta}\).

Answer

Step 1: Row 2 of \(\mathbf{X}\) is \([1,\ 4177]\).

Step 2: \([\mathbf{X}\hat{\boldsymbol\beta}]_2=1\times335.4323+4177\times0.2608207=335.4323+1089.4481=1424.8804\).

Step 3: \([\mathbf{y}-\mathbf{X}\hat{\boldsymbol\beta}]_2=1590-1424.8804=165.1196\).

**Self-check:** The residual is positive: 1590 is above 1424.8804.

## 02 · Matrix review: transpose, inverse, trace

Slides p.9–19 The 11 pages show one slide. Each page adds one rule.

Notation used in this unit · Added

Entry \([\mathbf{C}]_{ij}\): the number in row \(i\), column \(j\) of \(\mathbf{C}\). Also \(a_{ij}=[\mathbf{A}]_{ij}\), \(b_{ij}=[\mathbf{B}]_{ij}\).

Multiplication in entry form: if \(\mathbf{A}\) is \(n\times m\) and \(\mathbf{B}\) is \(m\times p\), then \(\mathbf{AB}\) is \(n\times p\), with \([\mathbf{AB}]_{ij}=\sum_{k=1}^{m}a_{ik}b_{kj}\).

Diagonal: the entries with row number equal to column number, \(a_{11},a_{22},\dots\).

Many examples use this design matrix (\(n=3\), \(p=1\), \(x_1=1\), \(x_2=2\), \(x_3=4\)):

\[\mathbf{X}=\left[\begin{array}{cc}1 & 1\\ 1 & 2\\ 1 & 4\end{array}\right]\qquad(3\times2)\]

### 02.1 Transpose Slides p.9

**What** Slides p.9

Lecture 5 · p.9 \([\mathbf{C}^T]_{ij}=[\mathbf{C}]_{ji}\)

Transpose \(\mathbf{C}^T\): row \(i\) of \(\mathbf{C}\) becomes column \(i\). If \(\mathbf{C}\) is \(n\times m\), \(\mathbf{C}^T\) is \(m\times n\).

**How** Added

Find \(\mathbf{C}^T\)

- **Find the dimension.** If \(\mathbf{C}\) is \(n\times m\), \(\mathbf{C}^T\) is \(m\times n\).
- **Write each row as a column.** Row \(i\) of \(\mathbf{C}\) becomes column \(i\) of \(\mathbf{C}^T\).

**Self-check:** For one entry, confirm \([\mathbf{C}^T]_{ij}=[\mathbf{C}]_{ji}\). Diagonal entries do not move.

**Example · \(\mathbf{X}^T\)** Added

The rows \((1,1)\), \((1,2)\), \((1,4)\) of \(\mathbf{X}\) become columns:

\[\mathbf{X}^T=\left[\begin{array}{ccc}1 & 1 & 1\\ 1 & 2 & 4\end{array}\right]\qquad(2\times3)\]

**Self-check:** \([\mathbf{X}^T]_{23}=4=[\mathbf{X}]_{32}\).

[figure]
Figure 02.1 · Each row of \(\mathbf{X}\) becomes the column with the same number in \(\mathbf{X}^T\). The orange cells hold the same number, 4, with the indices changed.

**Why** Added

This rule is the definition of the transpose. It needs no proof. Later transpose rules follow from it, entry by entry.

### 02.2 Symmetric matrix Slides p.10

**What** Slides p.10

Lecture 5 · p.10 \(\mathbf{C}\) is symmetric if \(\mathbf{C}^T=\mathbf{C}\)

Square matrix: an \(n\times n\) matrix.

Symmetric matrix: a matrix equal to its transpose, that is, \([\mathbf{C}]_{ij}=[\mathbf{C}]_{ji}\) for all \(i,j\).

Only a square matrix can be symmetric, because \(\mathbf{C}^T\) must have the dimension of \(\mathbf{C}\).

**How** Added

Test if \(\mathbf{C}\) is symmetric

- **Check the dimension.** \(\mathbf{C}\) must be \(n\times n\).
- **Compare pairs.** For each \(i\neq j\), compare \([\mathbf{C}]_{ij}\) with \([\mathbf{C}]_{ji}\). All equal: symmetric.

**Self-check:** Write \(\mathbf{C}^T\). It must be identical to \(\mathbf{C}\).

**Example · \(\mathbf{X}^T\mathbf{X}\)** Added

A \(2\times3\) matrix times a \(3\times2\) matrix gives a \(2\times2\) matrix.

1

Entry (1,1): row 1 of \(\mathbf{X}^T\), \((1,1,1)\), times column 1 of \(\mathbf{X}\), \((1,1,1)\)

\[[\mathbf{X}^T\mathbf{X}]_{11}=1\cdot1+1\cdot1+1\cdot1=3\]

2

Entry (1,2): row 1 of \(\mathbf{X}^T\), \((1,1,1)\), times column 2 of \(\mathbf{X}\), \((1,2,4)\)

\[[\mathbf{X}^T\mathbf{X}]_{12}=1\cdot1+1\cdot2+1\cdot4=7\]

3

Entry (2,1): row 2 of \(\mathbf{X}^T\), \((1,2,4)\), times column 1 of \(\mathbf{X}\), \((1,1,1)\)

\[[\mathbf{X}^T\mathbf{X}]_{21}=1\cdot1+2\cdot1+4\cdot1=7\]

4

Entry (2,2): row 2 of \(\mathbf{X}^T\) times column 2 of \(\mathbf{X}\)

\[[\mathbf{X}^T\mathbf{X}]_{22}=1^2+2^2+4^2\]

\[[\mathbf{X}^T\mathbf{X}]_{22}=1+4+16\]

\[[\mathbf{X}^T\mathbf{X}]_{22}=21\]

\[\mathbf{X}^T\mathbf{X}=\left[\begin{array}{cc}3 & 7\\ 7 & 21\end{array}\right]\]

**Self-check:** The only off-diagonal pair is \(7\) and \(7\). The matrix is symmetric.

**Why · this example is symmetric** Added

Steps 2 and 3 calculate the same sum \(\sum_i x_i\), with each product in the other order. Slides p.11 proves the general case.

### 02.3 Transpose of a product Slides p.11

**What** Slides p.11

Lecture 5 · p.11 \((\mathbf{AB})^T=\mathbf{B}^T\mathbf{A}^T\)

Transpose each factor and multiply in reverse order. With \(\mathbf{A}\) \(n\times m\) and \(\mathbf{B}\) \(m\times p\), \(\mathbf{B}^T\mathbf{A}^T\) is \(p\times n\), like \((\mathbf{AB})^T\).

**How** Added

Expand \((\mathbf{AB})^T\)

- **Reverse the factors.** Write \(\mathbf{A},\mathbf{B}\) as \(\mathbf{B},\mathbf{A}\).
- **Add \(T\) to each factor.** The result is \(\mathbf{B}^T\mathbf{A}^T\).
- **Simplify \((\mathbf{C}^T)^T=\mathbf{C}\).** Two transposes return the indices to their start.

**Self-check:** The dimension of the new product is the dimension of \(\mathbf{AB}\) in reverse.

**Example · a numerical check and \((\mathbf{X}^T\mathbf{X})^T\)** Added

Section 02.4 uses these matrices again.

\[\mathbf{A}=\left[\begin{array}{cc}3 & 1\\ 2 & 1\end{array}\right],\qquad \mathbf{B}=\left[\begin{array}{cc}1 & 2\\ 0 & 1\end{array}\right]\]

1

\[\mathbf{AB}=\left[\begin{array}{cc}3\cdot1+1\cdot0 & 3\cdot2+1\cdot1\\ 2\cdot1+1\cdot0 & 2\cdot2+1\cdot1\end{array}\right]\]

2

\[\mathbf{AB}=\left[\begin{array}{cc}3 & 7\\ 2 & 5\end{array}\right]\]

3

\[(\mathbf{AB})^T=\left[\begin{array}{cc}3 & 2\\ 7 & 5\end{array}\right]\]

Slides p.9

4

\[\mathbf{B}^T\mathbf{A}^T=\left[\begin{array}{cc}1 & 0\\ 2 & 1\end{array}\right]\left[\begin{array}{cc}3 & 2\\ 1 & 1\end{array}\right]\]

5

\[\mathbf{B}^T\mathbf{A}^T=\left[\begin{array}{cc}1\cdot3+0\cdot1 & 1\cdot2+0\cdot1\\ 2\cdot3+1\cdot1 & 2\cdot2+1\cdot1\end{array}\right]\]

6

\[\mathbf{B}^T\mathbf{A}^T=\left[\begin{array}{cc}3 & 2\\ 7 & 5\end{array}\right]\]

**Self-check:** Steps 3 and 6 agree.

Apply the rule to \(\mathbf{X}^T\mathbf{X}\) for any \(\mathbf{X}\):

1

\[(\mathbf{X}^T\mathbf{X})^T=\mathbf{X}^T(\mathbf{X}^T)^T\]

Slides p.11 with \(\mathbf{A}=\mathbf{X}^T\), \(\mathbf{B}=\mathbf{X}\)

2

\[(\mathbf{X}^T\mathbf{X})^T=\mathbf{X}^T\mathbf{X}\]

\((\mathbf{X}^T)^T=\mathbf{X}\)

By Slides p.10, \(\mathbf{X}^T\mathbf{X}\) is always symmetric.

**Why** Added

1

\[[(\mathbf{AB})^T]_{ij}=[\mathbf{AB}]_{ji}\]

Slides p.9

2

\[=\sum_k a_{jk}b_{ki}\]

multiplication formula

3

\[=\sum_k b_{ki}a_{jk}\]

4

\[=\sum_k [\mathbf{B}^T]_{ik}[\mathbf{A}^T]_{kj}\]

Slides p.9: \(b_{ki}=[\mathbf{B}^T]_{ik}\), \(a_{jk}=[\mathbf{A}^T]_{kj}\)

5

\[=[\mathbf{B}^T\mathbf{A}^T]_{ij}\]

multiplication formula ∎

### 02.4 Inverse Slides p.12

**What** Slides p.12

Lecture 5 · p.12 If square matrix (i.e. \(n\times n\)) \(\mathbf{B}\) is nonsingular, then \(\mathbf{BB}^{-1}=\mathbf{B}^{-1}\mathbf{B}=\mathbf{I}\)

Identity matrix \(\mathbf{I}\): a square matrix with 1 on the diagonal and 0 elsewhere. \(\mathbf{CI}=\mathbf{IC}=\mathbf{C}\). For \(2\times2\), \(\mathbf{I}=\left[\begin{array}{cc}1 & 0\\ 0 & 1\end{array}\right]\).

Inverse \(\mathbf{B}^{-1}\): the square matrix whose product with \(\mathbf{B}\), on either side, is \(\mathbf{I}\).

Nonsingular: \(\mathbf{B}^{-1}\) exists.

The inverse acts like the reciprocal \(1/b\) of a number \(b\neq0\). Only a square matrix can have an inverse.

**How** Added

Find and check \(\mathbf{B}^{-1}\)

- **Confirm that \(\mathbf{B}\) is square.**
- **Get a candidate inverse.** For \(2\times2\), use the optional formula below.
- **Check the candidate.** \(\mathbf{BB}^{-1}\) and \(\mathbf{B}^{-1}\mathbf{B}\) must both equal \(\mathbf{I}\).

**Self-check:** If one product is not \(\mathbf{I}\), the candidate is not the inverse.

Optional — not on the slides

The determinant of a \(2\times2\) matrix is \(\det\left[\begin{array}{cc}a & b\\ c & d\end{array}\right]=ad-bc\). The matrix is nonsingular if and only if \(ad-bc\neq0\).

Then the inverse is \(\frac{1}{ad-bc}\left[\begin{array}{cc}d & -b\\ -c & a\end{array}\right]\).

**Example · \(\mathbf{A}^{-1}\) and \(\mathbf{B}^{-1}\)** Added

Use \(\mathbf{A}=\left[\begin{array}{cc}3 & 1\\ 2 & 1\end{array}\right]\) and \(\mathbf{B}=\left[\begin{array}{cc}1 & 2\\ 0 & 1\end{array}\right]\) from 02.3.

1

Determinant of \(\mathbf{A}\)

\[3\cdot1-1\cdot2=1\]

2

Candidate \(\mathbf{A}^{-1}\)

\[\mathbf{A}^{-1}=\frac{1}{1}\left[\begin{array}{cc}1 & -1\\ -2 & 3\end{array}\right]=\left[\begin{array}{cc}1 & -1\\ -2 & 3\end{array}\right]\]

optional formula

3

Determinant of \(\mathbf{B}\)

\[1\cdot1-2\cdot0=1\]

4

Candidate \(\mathbf{B}^{-1}\)

\[\mathbf{B}^{-1}=\frac{1}{1}\left[\begin{array}{cc}1 & -2\\ 0 & 1\end{array}\right]=\left[\begin{array}{cc}1 & -2\\ 0 & 1\end{array}\right]\]

optional formula

Check \(\mathbf{AA}^{-1}\):

1

\[\mathbf{AA}^{-1}=\left[\begin{array}{cc}3 & 1\\ 2 & 1\end{array}\right]\left[\begin{array}{cc}1 & -1\\ -2 & 3\end{array}\right]\]

2

\[=\left[\begin{array}{cc}3\cdot1+1\cdot(-2) & 3\cdot(-1)+1\cdot3\\ 2\cdot1+1\cdot(-2) & 2\cdot(-1)+1\cdot3\end{array}\right]\]

3

\[=\left[\begin{array}{cc}1 & 0\\ 0 & 1\end{array}\right]=\mathbf{I}\]

Check \(\mathbf{A}^{-1}\mathbf{A}\):

1

\[\mathbf{A}^{-1}\mathbf{A}=\left[\begin{array}{cc}1\cdot3+(-1)\cdot2 & 1\cdot1+(-1)\cdot1\\ (-2)\cdot3+3\cdot2 & (-2)\cdot1+3\cdot1\end{array}\right]\]

2

\[=\left[\begin{array}{cc}1 & 0\\ 0 & 1\end{array}\right]=\mathbf{I}\]

For \(\mathbf{B}\): \(\mathbf{BB}^{-1}=\left[\begin{array}{cc}1\cdot1+2\cdot0 & 1\cdot(-2)+2\cdot1\\ 0\cdot1+1\cdot0 & 0\cdot(-2)+1\cdot1\end{array}\right]=\mathbf{I}\).

**Self-check:** All products equal \(\mathbf{I}\): \(\mathbf{A}^{-1}=\left[\begin{array}{cc}1 & -1\\ -2 & 3\end{array}\right]\), \(\mathbf{B}^{-1}=\left[\begin{array}{cc}1 & -2\\ 0 & 1\end{array}\right]\).

**Why** Added

Slides p.12 is the definition. To test a candidate, multiply it with the matrix and compare with \(\mathbf{I}\). Sections 02.5 and 02.6 use this test.

### 02.5 Inverse of a product Slides p.13

**What** Slides p.13

Lecture 5 · p.13 \((\mathbf{AB})^{-1}=\mathbf{B}^{-1}\mathbf{A}^{-1}\), if both square and nonsingular

If \(\mathbf{A}\) and \(\mathbf{B}\) are \(n\times n\) and nonsingular, \(\mathbf{AB}\) is nonsingular. Its inverse is the product of the inverses in reverse order.

**How** Added

Find \((\mathbf{AB})^{-1}\)

- **Check the conditions.** \(\mathbf{A}\) and \(\mathbf{B}\) are square and nonsingular.
- **Find each inverse.** Find \(\mathbf{A}^{-1}\) and \(\mathbf{B}^{-1}\).
- **Multiply in reverse order.** Calculate \(\mathbf{B}^{-1}\mathbf{A}^{-1}\).

**Self-check:** The result times \(\mathbf{AB}\) must equal \(\mathbf{I}\).

**Example · \((\mathbf{AB})^{-1}\)** Added

From 02.3, \(\mathbf{AB}=\left[\begin{array}{cc}3 & 7\\ 2 & 5\end{array}\right]\). \(\mathbf{A}^{-1}\) and \(\mathbf{B}^{-1}\) are from 02.4.

1

\[\mathbf{B}^{-1}\mathbf{A}^{-1}=\left[\begin{array}{cc}1 & -2\\ 0 & 1\end{array}\right]\left[\begin{array}{cc}1 & -1\\ -2 & 3\end{array}\right]\]

2

\[=\left[\begin{array}{cc}1\cdot1+(-2)(-2) & 1\cdot(-1)+(-2)\cdot3\\ 0\cdot1+1\cdot(-2) & 0\cdot(-1)+1\cdot3\end{array}\right]\]

3

\[=\left[\begin{array}{cc}5 & -7\\ -2 & 3\end{array}\right]\]

Check against \(\mathbf{AB}\):

1

\[(\mathbf{AB})(\mathbf{B}^{-1}\mathbf{A}^{-1})=\left[\begin{array}{cc}3\cdot5+7\cdot(-2) & 3\cdot(-7)+7\cdot3\\ 2\cdot5+5\cdot(-2) & 2\cdot(-7)+5\cdot3\end{array}\right]\]

2

\[=\left[\begin{array}{cc}1 & 0\\ 0 & 1\end{array}\right]=\mathbf{I}\]

**Self-check:** \(\det(\mathbf{AB})=3\cdot5-7\cdot2=1\). The optional formula gives \(\left[\begin{array}{cc}5 & -7\\ -2 & 3\end{array}\right]\) again.

**Why** Added

Use the test from 02.4:

1

\[(\mathbf{AB})(\mathbf{B}^{-1}\mathbf{A}^{-1})=\mathbf{A}(\mathbf{BB}^{-1})\mathbf{A}^{-1}\]

Regroup the product (associativity).

2

\[=\mathbf{AIA}^{-1}\]

Slides p.12

3

\[=\mathbf{AA}^{-1}\]

4

\[=\mathbf{I}\]

Slides p.12

The other order: \((\mathbf{B}^{-1}\mathbf{A}^{-1})(\mathbf{AB})=\mathbf{B}^{-1}(\mathbf{A}^{-1}\mathbf{A})\mathbf{B}=\mathbf{B}^{-1}\mathbf{IB}=\mathbf{B}^{-1}\mathbf{B}=\mathbf{I}\). ∎

The reverse order puts \(\mathbf{B}\) next to \(\mathbf{B}^{-1}\).

### 02.6 Inverse of a transpose Slides p.14

**What** Slides p.14

Lecture 5 · p.14 \((\mathbf{A}^T)^{-1}=(\mathbf{A}^{-1})^T\)

For a nonsingular square \(\mathbf{A}\), the transpose and the inverse can be done in either order.

**How** Added

Find \((\mathbf{A}^T)^{-1}\)

- **Find the inverse.** Find \(\mathbf{A}^{-1}\).
- **Transpose it.** Write the rows of \(\mathbf{A}^{-1}\) as columns.

**Self-check:** The result times \(\mathbf{A}^T\) must equal \(\mathbf{I}\).

**Example · \((\mathbf{A}^T)^{-1}\)** Added

1

From 02.4

\[\mathbf{A}^{-1}=\left[\begin{array}{cc}1 & -1\\ -2 & 3\end{array}\right]\]

2

\[(\mathbf{A}^{-1})^T=\left[\begin{array}{cc}1 & -2\\ -1 & 3\end{array}\right]\]

Slides p.9

3

Other order: \(\mathbf{A}^T=\left[\begin{array}{cc}3 & 2\\ 1 & 1\end{array}\right]\), determinant \(3\cdot1-2\cdot1=1\)

\[(\mathbf{A}^T)^{-1}=\frac{1}{1}\left[\begin{array}{cc}1 & -2\\ -1 & 3\end{array}\right]\]

optional formula

4

\[(\mathbf{A}^T)^{-1}=\left[\begin{array}{cc}1 & -2\\ -1 & 3\end{array}\right]\]

**Self-check:** Steps 2 and 4 agree.

**Why** Added

Use the test from 02.4:

1

\[\mathbf{A}^T(\mathbf{A}^{-1})^T=(\mathbf{A}^{-1}\mathbf{A})^T\]

Slides p.11, right to left

2

\[=\mathbf{I}^T\]

Slides p.12

3

\[=\mathbf{I}\]

\(\mathbf{I}\) is symmetric

The other order: \((\mathbf{A}^{-1})^T\mathbf{A}^T=(\mathbf{AA}^{-1})^T=\mathbf{I}^T=\mathbf{I}\). ∎

It follows that the inverse of a symmetric nonsingular matrix is symmetric (Practice Q3).

### 02.7 Definition of the trace Slides p.15

**What** Slides p.15

Lecture 5 · p.15 \(tr(\mathbf{A})=\sum_j^n a_{jj}\) for \(n\times n\) matrix

Trace \(tr(\mathbf{A})\): the sum of the diagonal entries of a square matrix. Only a square matrix has a trace.

**How** Added

Find \(tr(\mathbf{A})\)

- **Confirm that \(\mathbf{A}\) is square.**
- **List the diagonal.** Write \(a_{11},\dots,a_{nn}\).
- **Add the diagonal entries.Self-check:** The trace is one number. Off-diagonal entries are not in the sum.

**Example · \(tr(\mathbf{A})\), \(tr(\mathbf{B})\), \(tr(\mathbf{X}^T\mathbf{X})\)** Added

1

\[tr(\mathbf{A})=3+1=4\]

2

\[tr(\mathbf{B})=1+1=2\]

3

\[tr(\mathbf{X}^T\mathbf{X})=3+21=24\]

\(\mathbf{X}^T\mathbf{X}\) from 02.2

**Why** Added

Slides p.15 is a definition. It needs no proof.

### 02.8 Trace of a sum Slides p.16

**What** Slides p.16

Lecture 5 · p.16 \(tr(\mathbf{A}+\mathbf{B})=tr(\mathbf{A})+tr(\mathbf{B})\)

Matrix addition in entry form: \([\mathbf{A}+\mathbf{B}]_{ij}=a_{ij}+b_{ij}\).

**How** Added

Split \(tr(\mathbf{A}+\mathbf{B})\)

- **Confirm the dimensions.** \(\mathbf{A}\) and \(\mathbf{B}\) are both \(n\times n\).
- **Add the two traces.** You do not need \(\mathbf{A}+\mathbf{B}\).

**Self-check:** The trace of \(\mathbf{A}+\mathbf{B}\) gives the same number.

**Example** Added

1

\[\mathbf{A}+\mathbf{B}=\left[\begin{array}{cc}3+1 & 1+2\\ 2+0 & 1+1\end{array}\right]=\left[\begin{array}{cc}4 & 3\\ 2 & 2\end{array}\right]\]

2

\[tr(\mathbf{A}+\mathbf{B})=4+2=6\]

3

\[tr(\mathbf{A})+tr(\mathbf{B})=4+2=6\]

traces from 02.7

**Why** Added

1

\[tr(\mathbf{A}+\mathbf{B})=\sum_j^n[\mathbf{A}+\mathbf{B}]_{jj}\]

Slides p.15

2

\[=\sum_j^n(a_{jj}+b_{jj})\]

matrix addition

3

\[=\sum_j^n a_{jj}+\sum_j^n b_{jj}\]

4

\[=tr(\mathbf{A})+tr(\mathbf{B})\]

Slides p.15 ∎

### 02.9 Trace of a scalar multiple Slides p.17

**What** Slides p.17

Lecture 5 · p.17 \(tr(c\mathbf{A})=c\,tr(\mathbf{A})\)

Scalar \(c\): one ordinary number. \(c\mathbf{A}\) multiplies each entry by \(c\): \([c\mathbf{A}]_{ij}=c\,a_{ij}\).

**How** Added

Simplify \(tr(c\mathbf{A})\)

- **Move \(c\) outside.** Write \(c\,tr(\mathbf{A})\).
- **Find \(tr(\mathbf{A})\).** Multiply it by \(c\).

**Self-check:** The trace of \(c\mathbf{A}\) gives the same number.

**Example · \(c=3\)** Added

1

\[3\mathbf{A}=\left[\begin{array}{cc}3\cdot3 & 3\cdot1\\ 3\cdot2 & 3\cdot1\end{array}\right]=\left[\begin{array}{cc}9 & 3\\ 6 & 3\end{array}\right]\]

2

\[tr(3\mathbf{A})=9+3=12\]

3

\[3\,tr(\mathbf{A})=3\times4=12\]

**Why** Added

1

\[tr(c\mathbf{A})=\sum_j^n c\,a_{jj}\]

Slides p.15 and scalar multiplication

2

\[=c\sum_j^n a_{jj}\]

3

\[=c\,tr(\mathbf{A})\]

Slides p.15 ∎

02.8 and 02.9 together say that the trace is linear.

### 02.10 Trace of a transpose Slides p.18

**What** Slides p.18

Lecture 5 · p.18 \(tr(\mathbf{A}^T)=tr(\mathbf{A})\)

The transpose does not move the diagonal entries.

**How** Added

Simplify \(tr(\mathbf{A}^T)\)

- **Remove the transpose.** Write \(tr(\mathbf{A})\).

**Self-check:** The diagonal of \(\mathbf{A}^T\) is the diagonal of \(\mathbf{A}\).

**Example** Added

\(\mathbf{A}^T=\left[\begin{array}{cc}3 & 2\\ 1 & 1\end{array}\right]\). \(tr(\mathbf{A}^T)=3+1=4=tr(\mathbf{A})\).

**Why** Added

1

\[tr(\mathbf{A}^T)=\sum_j^n[\mathbf{A}^T]_{jj}\]

Slides p.15

2

\[=\sum_j^n[\mathbf{A}]_{jj}\]

Slides p.9 with \(i=j\)

3

\[=tr(\mathbf{A})\]

Slides p.15 ∎

### 02.11 Trace of a product in either order Slides p.19

**What** Slides p.19

Lecture 5 · p.19 \(tr(\mathbf{AB})=tr(\mathbf{BA})\)

Let \(\mathbf{A}\) be \(n\times m\) and \(\mathbf{B}\) be \(m\times n\). \(\mathbf{AB}\) (\(n\times n\)) and \(\mathbf{BA}\) (\(m\times m\)) have equal traces. \(\mathbf{A}\) and \(\mathbf{B}\) need not be square.

**How** Added

Use \(tr(\mathbf{AB})=tr(\mathbf{BA})\) to make a calculation shorter

- **Check the dimensions.** \(\mathbf{A}\) is \(n\times m\) and \(\mathbf{B}\) is \(m\times n\).
- **Select the smaller product.** Compare \(n\) and \(m\).
- **Calculate only its diagonal.** Add the diagonal entries.

**Self-check:** The trace of the other product is equal.

**Example · 1 · square \(\mathbf{A}\) and \(\mathbf{B}\)** Added

From 02.3, \(\mathbf{AB}=\left[\begin{array}{cc}3 & 7\\ 2 & 5\end{array}\right]\).

1

\[\mathbf{BA}=\left[\begin{array}{cc}1\cdot3+2\cdot2 & 1\cdot1+2\cdot1\\ 0\cdot3+1\cdot2 & 0\cdot1+1\cdot1\end{array}\right]=\left[\begin{array}{cc}7 & 3\\ 2 & 1\end{array}\right]\]

2

\[tr(\mathbf{AB})=3+5=8\]

3

\[tr(\mathbf{BA})=7+1=8\]

\(\mathbf{AB}\neq\mathbf{BA}\), but both traces are 8.

**Example · 2 · non-square factors \(\mathbf{X}\) and \(\mathbf{X}^T\)** Added

\(\mathbf{XX}^T\) is \(3\times3\); \(\mathbf{X}^T\mathbf{X}\) is \(2\times2\). Entry \((i,j)\) of \(\mathbf{XX}^T\) is row \(i\) of \(\mathbf{X}\) times row \(j\) of \(\mathbf{X}\): \(1+x_ix_j\).

1

Row 1: \(1+1\cdot1\), \(1+1\cdot2\), \(1+1\cdot4\)

\[(2,\ 3,\ 5)\]

2

Row 2: \(1+2\cdot1\), \(1+2\cdot2\), \(1+2\cdot4\)

\[(3,\ 5,\ 9)\]

3

Row 3: \(1+4\cdot1\), \(1+4\cdot2\), \(1+4\cdot4\)

\[(5,\ 9,\ 17)\]

4

The \(3\times3\) side

\[tr(\mathbf{XX}^T)=2+5+17=24\]

5

The \(2\times2\) side, from 02.7

\[tr(\mathbf{X}^T\mathbf{X})=3+21=24\]

**Self-check:** The sides are equal. The \(2\times2\) side needs only 2 diagonal entries.

[figure]
Figure 02.2 · Blue: the diagonals. \(\mathbf{XX}^T\) and \(\mathbf{X}^T\mathbf{X}\) differ in dimension and entries. Both diagonal sums are 24. Both matrices are symmetric (02.3).

**Why** Added

Let \(\mathbf{A}\) be \(n\times m\) and \(\mathbf{B}\) be \(m\times n\).

1

\[tr(\mathbf{AB})=\sum_{i=1}^{n}[\mathbf{AB}]_{ii}\]

Slides p.15

2

\[=\sum_{i=1}^{n}\sum_{k=1}^{m}a_{ik}b_{ki}\]

multiplication formula

3

\[=\sum_{k=1}^{m}\sum_{i=1}^{n}b_{ki}a_{ik}\]

Change the order of finite sums and factors.

4

\[=\sum_{k=1}^{m}[\mathbf{BA}]_{kk}\]

multiplication formula

5

\[=tr(\mathbf{BA})\]

Slides p.15 ∎

Lecture 7 uses this rule.

### 02.12 Practice Added

**Q1.** Let \(\mathbf{X}\) be any \(n\times(p+1)\) matrix. With only the rules on Lecture 5 p.9–19, show that \(\mathbf{X}^T\mathbf{X}\) is symmetric and that \(tr(\mathbf{X}^T\mathbf{X})=tr(\mathbf{XX}^T)\). Give the dimensions of \(\mathbf{X}^T\mathbf{X}\) and \(\mathbf{XX}^T\).

Answer

Symmetric: \((\mathbf{X}^T\mathbf{X})^T=\mathbf{X}^T(\mathbf{X}^T)^T=\mathbf{X}^T\mathbf{X}\) (Slides p.11, then \((\mathbf{X}^T)^T=\mathbf{X}\)). By Slides p.10, it is symmetric.

Trace: with \(\mathbf{A}=\mathbf{X}^T\), \(\mathbf{B}=\mathbf{X}\), Slides p.19 gives \(tr(\mathbf{X}^T\mathbf{X})=tr(\mathbf{XX}^T)\).

Dimensions: \(\mathbf{X}^T\mathbf{X}\) is \((p+1)\times(p+1)\). \(\mathbf{XX}^T\) is \(n\times n\).

For the \(\mathbf{X}\) of this unit (\(n=3\), \(p=1\)), both traces are 24 (02.11).

**Q2.** Let \(\mathbf{A}=\left[\begin{array}{cc}4 & 1\\ 3 & 1\end{array}\right]\). (a) Verify that \(\mathbf{A}^{-1}=\left[\begin{array}{cc}1 & -1\\ -3 & 4\end{array}\right]\). (b) Find \((\mathbf{A}^T)^{-1}\). (c) Compute \(tr(\mathbf{A}^T\mathbf{A})\).

Answer

(a) \(\mathbf{AA}^{-1}=\left[\begin{array}{cc}4\cdot1+1\cdot(-3) & 4\cdot(-1)+1\cdot4\\ 3\cdot1+1\cdot(-3) & 3\cdot(-1)+1\cdot4\end{array}\right]=\left[\begin{array}{cc}1 & 0\\ 0 & 1\end{array}\right]=\mathbf{I}\).

\(\mathbf{A}^{-1}\mathbf{A}=\left[\begin{array}{cc}1\cdot4+(-1)\cdot3 & 1\cdot1+(-1)\cdot1\\ (-3)\cdot4+4\cdot3 & (-3)\cdot1+4\cdot1\end{array}\right]=\mathbf{I}\).

(b) By Slides p.14, \((\mathbf{A}^T)^{-1}=(\mathbf{A}^{-1})^T=\left[\begin{array}{cc}1 & -3\\ -1 & 4\end{array}\right]\).

(c) \(\mathbf{A}^T=\left[\begin{array}{cc}4 & 3\\ 1 & 1\end{array}\right]\). \(\mathbf{A}^T\mathbf{A}=\left[\begin{array}{cc}4\cdot4+3\cdot3 & 4\cdot1+3\cdot1\\ 1\cdot4+1\cdot3 & 1\cdot1+1\cdot1\end{array}\right]=\left[\begin{array}{cc}25 & 7\\ 7 & 2\end{array}\right]\).

\(tr(\mathbf{A}^T\mathbf{A})=25+2=27\). By Slides p.19, \(tr(\mathbf{AA}^T)=27\) also.

**Q3.** \(\mathbf{C}\) is \(n\times n\), symmetric and nonsingular. Show that \(\mathbf{C}^{-1}\) is symmetric.

Answer

1

\[(\mathbf{C}^{-1})^T=(\mathbf{C}^T)^{-1}\]

Slides p.14

2

\[=\mathbf{C}^{-1}\]

\(\mathbf{C}^T=\mathbf{C}\) (Slides p.10)

By Slides p.10, \(\mathbf{C}^{-1}\) is symmetric. ∎ For example, \((\mathbf{X}^T\mathbf{X})^{-1}\) is symmetric when it exists.

Check with \(\mathbf{X}^T\mathbf{X}=\left[\begin{array}{cc}3 & 7\\ 7 & 21\end{array}\right]\): determinant \(3\cdot21-7\cdot7=14\); inverse \(\frac{1}{14}\left[\begin{array}{cc}21 & -7\\ -7 & 3\end{array}\right]\). Both off-diagonal entries are \(-7/14\).

## 03 · Matrix calculus

**Symbols** Added

\(\mathbf{y}=(y_1,\dots,y_k)^T\) is a column vector with \(k\) components.

\(z=f(y_1,\dots,y_k)\) is a function that gives one scalar \(z\).

Partial derivative \(\frac{\partial z}{\partial y_l}\): the derivative of \(z\) with respect to \(y_l\), with all other \(y_i\) constant.

Matrix-vector product: \((\mathbf{A}\mathbf{y})_l=\sum_{j=1}^k a_{lj}y_j\) (row \(l\) of \(\mathbf{A}\) times \(\mathbf{y}\)).

### 03.1 The derivative with respect to a vector Slides p.20

**What** Slides p.20

Lecture 5 · p.20 Let \(z=f(y_1,\dots,y_k)\) and \(\mathbf{y}=\left[\begin{array}{c}y_1\\ \vdots\\ y_k\end{array}\right]\), then \[\frac{\partial z}{\partial \mathbf{y}}=\left[\begin{array}{c}\frac{\partial z}{\partial y_1}\\ \frac{\partial z}{\partial y_2}\\ \vdots\\ \frac{\partial z}{\partial y_k}\end{array}\right]\]

The gradient \(\frac{\partial z}{\partial \mathbf{y}}\) is the column of the \(k\) partial derivatives. Component \(l\) shows how fast \(z\) changes when only \(y_l\) changes.

The gradient is \(k\times1\), like \(\mathbf{y}\).

**How** Added

Find \(\partial z/\partial \mathbf{y}\) from the definition

- Write \(z\) as a formula in \(y_1,\dots,y_k\).
- For each \(l=1,\dots,k\), find \(\frac{\partial z}{\partial y_l}\).
- Put the \(k\) results in one column, in the order of \(l\).

**Self-check:** The result is \(k\times1\). Row \(l\) is the partial derivative with respect to \(y_l\).

**Example** Added

Let \(k=2\) and \(z=3y_1+y_1y_2\). Find \(\frac{\partial z}{\partial \mathbf{y}}\) at \(\mathbf{y}=(1,2)^T\).

1

Write \(z\) How step 1

\[z=3y_1+y_1y_2\]

2

Partial derivatives How step 2

\[\frac{\partial z}{\partial y_1}=3+y_2,\qquad \frac{\partial z}{\partial y_2}=y_1\]

3

One column How step 3

\[\frac{\partial z}{\partial \mathbf{y}}=\left[\begin{array}{c}3+y_2\\ y_1\end{array}\right]\]

\[\frac{\partial z}{\partial \mathbf{y}}\Big|_{\mathbf{y}=(1,2)^T}=\left[\begin{array}{c}3+2\\ 1\end{array}\right]=\left[\begin{array}{c}5\\ 1\end{array}\right]\]

**Why** Added

Slides p.20 is a definition. It needs no proof.

### 03.2 Linear function: \(\partial(\mathbf{a}^T\mathbf{y})/\partial\mathbf{y}=\mathbf{a}\) Slides p.20

**What** Slides p.20

Lecture 5 · p.20 If \(z=\mathbf{a}^T\mathbf{y}\), where \(\mathbf{a}=(a_1,\dots,a_k)^T\) is a vector, then \[\frac{\partial z}{\partial \mathbf{y}}=\mathbf{a}\]

\(\mathbf{a}\) is constant. \(z=\mathbf{a}^T\mathbf{y}=a_1y_1+\dots+a_ky_k\) is a scalar and a linear function: each \(y_i\) has power 1. The gradient is \(\mathbf{a}\) at all \(\mathbf{y}\).

**How** Added

Use the rule for \(\partial(\mathbf{a}^T\mathbf{y})/\partial\mathbf{y}\)

- Write \(z\) as a constant vector, transposed, times \(\mathbf{y}\).
- Read \(\mathbf{a}\): \(a_l\) is the coefficient of \(y_l\).
- Write \(\frac{\partial z}{\partial \mathbf{y}}=\mathbf{a}\).

**Self-check:** The result is \(k\times1\) and contains no \(y_i\). For one \(l\), \(\partial z/\partial y_l=a_l\).

**Example · a linear function** Added

Let \(k=3\) and \(\mathbf{a}=(1,2,3)^T\).

1

Write \(z\) How step 1

\[z=\mathbf{a}^T\mathbf{y}=\left[\begin{array}{ccc}1&2&3\end{array}\right]\left[\begin{array}{c}y_1\\ y_2\\ y_3\end{array}\right]\]

\[z=1\cdot y_1+2\cdot y_2+3\cdot y_3=y_1+2y_2+3y_3\]

2

Use the rule How steps 2–3

\[\frac{\partial z}{\partial \mathbf{y}}=\mathbf{a}=\left[\begin{array}{c}1\\ 2\\ 3\end{array}\right]\]

3

Check with the definition 03.1 How

\[\frac{\partial z}{\partial y_1}=1,\qquad \frac{\partial z}{\partial y_2}=2,\qquad \frac{\partial z}{\partial y_3}=3\]

**Basis:** 03.1. For \(y_1\), the terms \(2y_2\) and \(3y_3\) are constant.

At \(\mathbf{y}=(2,-1,1)^T\), \(z=2-2+3=3\), and the gradient is still \((1,2,3)^T\). ▲

**Figure · gradient of \(z=y_1+2y_2\)** Added

[figure]
Figure 03.1 · \(z=y_1+2y_2\). Blue lines: level lines (constant \(z\)), 1 apart in \(z\). Thick line: \(z=3\). Orange arrow: the gradient \(\mathbf{a}=(1,2)^T\) at the green point \((1,1)^T\). It is at a right angle to the level lines (equal axis scales). The gradient is the same at all points.

**Why · derivation of the rule in 03.2** Added

1

\[z=\mathbf{a}^T\mathbf{y}=\sum_{i=1}^k a_iy_i\]

2

\[\frac{\partial z}{\partial y_l}=\sum_{i=1}^k a_i\frac{\partial y_i}{\partial y_l}\]

Each \(a_i\) is a constant.

3

\[\frac{\partial y_i}{\partial y_l}=\begin{cases}1, & i=l\\ 0, & i\neq l\end{cases}\]

For \(i\neq l\), \(y_i\) is constant.

4

\[\frac{\partial z}{\partial y_l}=a_l\]

Only the term \(i=l\) stays.

5

\[\frac{\partial z}{\partial \mathbf{y}}=\left[\begin{array}{c}a_1\\ \vdots\\ a_k\end{array}\right]=\mathbf{a}\]

Stack \(l=1,\dots,k\) (03.1). ∎

### 03.3 Quadratic form: \(\partial(\mathbf{y}^T\mathbf{A}\mathbf{y})/\partial\mathbf{y}=\mathbf{A}\mathbf{y}+\mathbf{A}^T\mathbf{y}\) Slides p.21

**What** Slides p.21

Lecture 5 · p.21 If \(z=\mathbf{y}^T\mathbf{A}\mathbf{y}\) where \(\mathbf{A}\) is a \(k\times k\) matrix, then \[\frac{\partial z}{\partial \mathbf{y}}=\mathbf{A}\mathbf{y}+\mathbf{A}^T\mathbf{y}\] and if \(\mathbf{A}\) is symmetric, then: \(\frac{\partial z}{\partial \mathbf{y}}=2\mathbf{A}\mathbf{y}\)

A quadratic form is \(z=\mathbf{y}^T\mathbf{A}\mathbf{y}=\sum_{i=1}^k\sum_{j=1}^k a_{ij}y_iy_j\), a scalar. Each term is a coefficient times two components.

If \(\mathbf{A}\) is symmetric, \(\mathbf{A}^T\mathbf{y}=\mathbf{A}\mathbf{y}\), and the two terms become \(2\mathbf{A}\mathbf{y}\).

**How** Added

Use the rule for \(\partial(\mathbf{y}^T\mathbf{A}\mathbf{y})/\partial\mathbf{y}\)

- Confirm that \(z=\mathbf{y}^T\mathbf{A}\mathbf{y}\), with \(\mathbf{A}\) a constant \(k\times k\) matrix.
- Compare \(a_{ij}\) with \(a_{ji}\) for each pair. All equal: \(\mathbf{A}\) is symmetric.
- If \(\mathbf{A}\) is symmetric, calculate \(2\mathbf{A}\mathbf{y}\).
- If not, calculate \(\mathbf{A}\mathbf{y}+\mathbf{A}^T\mathbf{y}\).
- Put in the given value of \(\mathbf{y}\), if any.

**Self-check:** The result is \(k\times1\). Each component is linear in \(y_1,\dots,y_k\), with no constant term. One expanded partial derivative must agree.

**Example · a matrix that is not symmetric** Added

Let \(k=2\), \(\mathbf{A}=\left[\begin{array}{cc}1&2\\ 0&3\end{array}\right]\), \(\mathbf{y}=(1,2)^T\).

1

Write \(z\) How step 1

\[z=\sum_{i=1}^2\sum_{j=1}^2 a_{ij}y_iy_j=a_{11}y_1^2+a_{12}y_1y_2+a_{21}y_2y_1+a_{22}y_2^2\]

\[z=1\cdot y_1^2+2y_1y_2+0\cdot y_2y_1+3y_2^2=y_1^2+2y_1y_2+3y_2^2\]

\[z(1,2)=1+4+12=17\]

2

Examine symmetry How step 2

\[\mathbf{A}^T=\left[\begin{array}{cc}1&0\\ 2&3\end{array}\right]\]

\[a_{12}=2,\quad a_{21}=0,\quad a_{12}\neq a_{21}\]

Not symmetric: use the general rule.

3

Calculate \(\mathbf{A}\mathbf{y}\) How step 4

\[\mathbf{A}\mathbf{y}=\left[\begin{array}{c}1\cdot1+2\cdot2\\ 0\cdot1+3\cdot2\end{array}\right]=\left[\begin{array}{c}5\\ 6\end{array}\right]\]

4

Calculate \(\mathbf{A}^T\mathbf{y}\) How step 4

\[\mathbf{A}^T\mathbf{y}=\left[\begin{array}{c}1\cdot1+0\cdot2\\ 2\cdot1+3\cdot2\end{array}\right]=\left[\begin{array}{c}1\\ 8\end{array}\right]\]

5

Add How steps 4–5

\[\frac{\partial z}{\partial \mathbf{y}}=\mathbf{A}\mathbf{y}+\mathbf{A}^T\mathbf{y}=\left[\begin{array}{c}5+1\\ 6+8\end{array}\right]=\left[\begin{array}{c}6\\ 14\end{array}\right]\]

6

Check with the definition 03.1 How

\[\frac{\partial z}{\partial y_1}=2y_1+2y_2=2\cdot1+2\cdot2=6\]

\[\frac{\partial z}{\partial y_2}=2y_1+6y_2=2\cdot1+6\cdot2=14\]

**Basis:** \(z=y_1^2+2y_1y_2+3y_2^2\) from step 1.

**Example · a symmetric matrix** Added

Let \(k=3\), \(\mathbf{A}=\left[\begin{array}{ccc}4&0&1\\ 0&3&-1\\ 1&-1&4\end{array}\right]\), \(\mathbf{y}=(1,2,2)^T\).

1

Write \(z\) How step 1

\[z=\sum_{i=1}^3\sum_{j=1}^3 a_{ij}y_iy_j\]

\[z=4y_1^2+0\cdot y_1y_2+1\cdot y_1y_3+0\cdot y_2y_1+3y_2^2-1\cdot y_2y_3+1\cdot y_3y_1-1\cdot y_3y_2+4y_3^2\]

\[z=4y_1^2+3y_2^2+4y_3^2+2y_1y_3-2y_2y_3\]

\[z(1,2,2)=4+12+16+4-8=28\]

2

Examine symmetry How step 2

\[a_{12}=a_{21}=0,\quad a_{13}=a_{31}=1,\quad a_{23}=a_{32}=-1\]

\(\mathbf{A}^T=\mathbf{A}\): use \(2\mathbf{A}\mathbf{y}\).

3

Calculate \(\mathbf{A}\mathbf{y}\) How step 3

\[\mathbf{A}\mathbf{y}=\left[\begin{array}{c}4\cdot1+0\cdot2+1\cdot2\\ 0\cdot1+3\cdot2+(-1)\cdot2\\ 1\cdot1+(-1)\cdot2+4\cdot2\end{array}\right]=\left[\begin{array}{c}6\\ 4\\ 7\end{array}\right]\]

4

Multiply by 2 How steps 3, 5

\[\frac{\partial z}{\partial \mathbf{y}}=2\mathbf{A}\mathbf{y}=\left[\begin{array}{c}12\\ 8\\ 14\end{array}\right]\]

5

Check with the definition 03.1 How

\[\frac{\partial z}{\partial y_1}=8y_1+2y_3=8+4=12\]

\[\frac{\partial z}{\partial y_2}=6y_2-2y_3=12-4=8\]

\[\frac{\partial z}{\partial y_3}=8y_3+2y_1-2y_2=16+2-4=14\]

**Basis:** \(z\) from step 1, at \(\mathbf{y}=(1,2,2)^T\).

For a symmetric matrix, calculate \(\mathbf{A}\mathbf{y}\) one time only. ▲

**Why · derivation of the rule in 03.3** Added

The product rule: \((uv)'=u'v+uv'\).

1

\[z=\mathbf{y}^T\mathbf{A}\mathbf{y}=\sum_{i=1}^k\sum_{j=1}^k a_{ij}y_iy_j\]

2

\[\frac{\partial z}{\partial y_l}=\sum_{i=1}^k\sum_{j=1}^k a_{ij}\frac{\partial (y_iy_j)}{\partial y_l}\]

3

\[\frac{\partial z}{\partial y_l}=\sum_{i=1}^k\sum_{j=1}^k a_{ij}\left(\frac{\partial y_i}{\partial y_l}y_j+y_i\frac{\partial y_j}{\partial y_l}\right)\]

Product rule.

4

\[\frac{\partial z}{\partial y_l}=\sum_{i=1}^k\sum_{j=1}^k a_{ij}\frac{\partial y_i}{\partial y_l}y_j+\sum_{i=1}^k\sum_{j=1}^k a_{ij}y_i\frac{\partial y_j}{\partial y_l}\]

5

\[\frac{\partial z}{\partial y_l}=\sum_{j=1}^k a_{lj}y_j+\sum_{i=1}^k a_{il}y_i\]

03.2 Why step 3: \(i=l\), then \(j=l\), stays.

6

\[\sum_{j=1}^k a_{lj}y_j=(\mathbf{A}\mathbf{y})_l\]

Row \(l\) of \(\mathbf{A}\) times \(\mathbf{y}\).

7

\[\sum_{i=1}^k a_{il}y_i=(\mathbf{A}^T\mathbf{y})_l\]

Row \(l\) of \(\mathbf{A}^T\) has entries \(a_{il}\).

8

\[\frac{\partial z}{\partial y_l}=(\mathbf{A}\mathbf{y})_l+(\mathbf{A}^T\mathbf{y})_l\]

9

\[\frac{\partial z}{\partial \mathbf{y}}=\mathbf{A}\mathbf{y}+\mathbf{A}^T\mathbf{y}\]

Stack \(l=1,\dots,k\) (03.1).

10

\[\frac{\partial z}{\partial \mathbf{y}}=\mathbf{A}\mathbf{y}+\mathbf{A}\mathbf{y}\]

Symmetric: \(\mathbf{A}^T=\mathbf{A}\).

11

\[\frac{\partial z}{\partial \mathbf{y}}=2\mathbf{A}\mathbf{y}\]

∎

The two terms come from the derivatives of \(y_i\) and of \(y_j\).

### 03.4 Practice Added

**Q1.** Let \(\mathbf{y}=(y_1,y_2,y_3)^T\), \(\mathbf{a}=(2,0,-1)^T\), and \(z=\mathbf{a}^T\mathbf{y}+\mathbf{y}^T\mathbf{y}\). Find \(\frac{\partial z}{\partial \mathbf{y}}\) at \(\mathbf{y}=(1,1,1)^T\).

Answer

The derivative of a sum is the sum of the derivatives.

\(\mathbf{y}^T\mathbf{y}=\mathbf{y}^T\mathbf{I}\mathbf{y}\), and \(\mathbf{I}\) is symmetric.

\(\frac{\partial(\mathbf{a}^T\mathbf{y})}{\partial\mathbf{y}}=\mathbf{a}\) (03.2). \(\frac{\partial(\mathbf{y}^T\mathbf{I}\mathbf{y})}{\partial\mathbf{y}}=2\mathbf{I}\mathbf{y}=2\mathbf{y}\) (03.3).

\(\frac{\partial z}{\partial \mathbf{y}}=\mathbf{a}+2\mathbf{y}\). At \(\mathbf{y}=(1,1,1)^T\): \((2+2,\ 0+2,\ -1+2)^T=(4,2,1)^T\).

Check: \(z=2y_1-y_3+y_1^2+y_2^2+y_3^2\). \(\partial z/\partial y_1=2+2y_1=4\), \(\partial z/\partial y_2=2y_2=2\), \(\partial z/\partial y_3=-1+2y_3=1\).

**Q2.** Let \(\mathbf{A}=\left[\begin{array}{cc}2&1\\ 3&1\end{array}\right]\) and \(z=\mathbf{y}^T\mathbf{A}\mathbf{y}\), \(\mathbf{y}=(y_1,y_2)^T\). (a) Write \(z\) as a polynomial in \(y_1,y_2\). (b) Compute \(\frac{\partial z}{\partial \mathbf{y}}\) at \(\mathbf{y}=(1,-1)^T\) with the rule on p.21. (c) Check (b) with the partial derivatives of (a).

Answer

(a) \(z=2y_1^2+1\cdot y_1y_2+3y_2y_1+1\cdot y_2^2=2y_1^2+4y_1y_2+y_2^2\). At \((1,-1)^T\): \(z=2-4+1=-1\).

(b) \(a_{12}=1\neq a_{21}=3\): not symmetric. Use \(\mathbf{A}\mathbf{y}+\mathbf{A}^T\mathbf{y}\).

\(\mathbf{A}\mathbf{y}=(2\cdot1+1\cdot(-1),\ 3\cdot1+1\cdot(-1))^T=(1,2)^T\).

\(\mathbf{A}^T=\left[\begin{array}{cc}2&3\\ 1&1\end{array}\right]\), \(\mathbf{A}^T\mathbf{y}=(2\cdot1+3\cdot(-1),\ 1\cdot1+1\cdot(-1))^T=(-1,0)^T\).

\(\frac{\partial z}{\partial \mathbf{y}}=(1+(-1),\ 2+0)^T=(0,2)^T\).

(c) \(\frac{\partial z}{\partial y_1}=4y_1+4y_2=4-4=0\). \(\frac{\partial z}{\partial y_2}=4y_1+2y_2=4-2=2\). Same as (b).

**Q3.** Let \(z=3y_1^2+4y_1y_2+y_2^2\). Find a symmetric \(2\times2\) matrix \(\mathbf{A}\) with \(z=\mathbf{y}^T\mathbf{A}\mathbf{y}\). Find the gradient with \(2\mathbf{A}\mathbf{y}\). Confirm it with partial derivatives.

Answer

For a symmetric \(\mathbf{A}\), \(z=a_{11}y_1^2+(a_{12}+a_{21})y_1y_2+a_{22}y_2^2=a_{11}y_1^2+2a_{12}y_1y_2+a_{22}y_2^2\). Match the coefficients.

\(a_{11}=3\), \(a_{22}=1\), \(2a_{12}=4\): \(a_{12}=a_{21}=2\). \(\mathbf{A}=\left[\begin{array}{cc}3&2\\ 2&1\end{array}\right]\).

\(2\mathbf{A}\mathbf{y}=2\left[\begin{array}{c}3y_1+2y_2\\ 2y_1+y_2\end{array}\right]=\left[\begin{array}{c}6y_1+4y_2\\ 4y_1+2y_2\end{array}\right]\).

Direct: \(\frac{\partial z}{\partial y_1}=6y_1+4y_2\), \(\frac{\partial z}{\partial y_2}=4y_1+2y_2\). They agree.

## 04 · Random vectors: mean vector, covariance matrix, and linear transformations

Given values · Added

All examples use brainhead.csv (236 persons; not printed on the slides).

Random vector \(\mathbf{y}=(y_1,y_2)^T\): \(y_1\) is head size (cm³), \(y_2\) is brain weight (g) of one person. In the slide formulas, \(n=2\).

The sample values of the 236 persons act as the true values.

Given mean vector: \(\boldsymbol\mu=(3637.864,\ 1284.263)^T\).

Given covariance matrix: \(\mathbf{V}=\left[\begin{array}{cc}130413.76&34014.61\\34014.61&14084.06\end{array}\right]\).

### 04.1 Random vector and mean vector Slides p.22

**What** Slides p.22

Random Vectors · Lecture 5 · p.22 Let \(\mathbf{y}=(y_1,\dots,y_n)^T\) be a random vector. The mean of \(\mathbf{y}\) is \[E[\mathbf{y}]=\left[\begin{array}{c}E[y_1]\\ \vdots\\ E[y_n]\end{array}\right]\]

A random vector \(\mathbf{y}\) is an \(n\times1\) column of random variables \(y_1,\dots,y_n\).

The mean vector \(E[\mathbf{y}]\) has entry \(i\) equal to \(E[y_i]\). The slides write \(\boldsymbol\mu=E[\mathbf{y}]\) and \(\mu_i=E[y_i]\).

A random matrix is a matrix of random variables. Its expectation is also taken entry by entry.

**How** Added

Write the mean vector \(E[\mathbf{y}]\)

- List the entries \(y_1,\dots,y_n\) in order.
- Get \(E[y_i]\) for each entry.
- Put \(E[y_1],\dots,E[y_n]\) in one column, in the same order.

**Self-check:** \(E[\mathbf{y}]\) has the length of \(\mathbf{y}\).

**Example · brainhead** Added How steps 1–3

Step 1: \(\mathbf{y}=(y_1,y_2)^T\), \(n=2\).

Step 2: mean head size 3637.864; mean brain weight 1284.263.

Step 3: \(E[\mathbf{y}]=\boldsymbol\mu=\left[\begin{array}{c}3637.864\\1284.263\end{array}\right]\). ▲

[figure]
Figure 04.1 · The 236 persons (blue) and the mean vector \(\boldsymbol\mu\) (orange). The purple lines extend one standard deviation to each side: \(\sqrt{\mathbf{V}_{11}}=361.13\) (horizontal) and \(\sqrt{\mathbf{V}_{22}}=118.68\) (vertical). The upward trend shows \(cov(y_1,y_2)\gt 0\).

**Why** Added

Slides p.22 is a definition. It needs no proof.

### 04.2 Covariance matrix Slides p.23

**What** Slides p.23

Covariance Matrix · Lecture 5 · p.23 The variance is \[var(\mathbf{y})=E[(\mathbf{y}-\boldsymbol\mu)(\mathbf{y}-\boldsymbol\mu)^T]\] \[\mathbf{V}=var(\mathbf{y})=\left[\begin{array}{cccc}var(y_1)&cov(y_1,y_2)&\cdots&cov(y_1,y_n)\\cov(y_2,y_1)&var(y_2)&\cdots&cov(y_2,y_n)\\ \vdots&\vdots&\ddots&\vdots\\cov(y_n,y_1)&cov(y_n,y_2)&\cdots&var(y_n)\end{array}\right]\]

The covariance \(cov(y_i,y_j)=E[(y_i-\mu_i)(y_j-\mu_j)]\) is the expected product of the two distances from the means.

Positive covariance: the two variables tend to be large together. Negative: one tends to be large when the other is small.

\(cov(y_i,y_i)=var(y_i)\).

The covariance matrix \(\mathbf{V}=var(\mathbf{y})\) is the \(n\times n\) matrix with \(\mathbf{V}_{ij}=cov(y_i,y_j)\).

\((\mathbf{y}-\boldsymbol\mu)(\mathbf{y}-\boldsymbol\mu)^T\) is an \(n\times1\) column times a \(1\times n\) row: an \(n\times n\) random matrix.

**How** Added

Write the covariance matrix \(\mathbf{V}=var(\mathbf{y})\)

- Find the length \(n\) of \(\mathbf{y}\). Make an empty \(n\times n\) table.
- In diagonal entry \(i\), write \(var(y_i)\).
- In entry \((i,j)\), \(i\ne j\), write \(cov(y_i,y_j)\).

**Self-check:** \(\mathbf{V}\) is \(n\times n\). Diagonal entries are \(\ge0\). \(\mathbf{V}_{ij}=\mathbf{V}_{ji}\) (04.3).

**Example · brainhead** Added How steps 1–3

Step 1: \(n=2\): \(\mathbf{V}\) is \(2\times2\).

Step 2: \(var(y_1)=130413.76\), \(var(y_2)=14084.06\).

Step 3: \(cov(y_1,y_2)=cov(y_2,y_1)=34014.61\). Positive: a larger head tends to come with a larger brain weight.

Result: \[\mathbf{V}=var(\mathbf{y})=\left[\begin{array}{cc}var(y_1)&cov(y_1,y_2)\\cov(y_2,y_1)&var(y_2)\end{array}\right]=\left[\begin{array}{cc}130413.76&34014.61\\34014.61&14084.06\end{array}\right]\]

Standard deviations: \(\sqrt{130413.76}=361.13\), \(\sqrt{14084.06}=118.68\). ▲

**Why · the entries are variances and covariances** Added

1

\[\mathbf{y}-\boldsymbol\mu=\left[\begin{array}{c}y_1-\mu_1\\ \vdots\\ y_n-\mu_n\end{array}\right]\]

2

\[\big[(\mathbf{y}-\boldsymbol\mu)(\mathbf{y}-\boldsymbol\mu)^T\big]_{ij}=(y_i-\mu_i)(y_j-\mu_j)\]

Column times row.

3

\[\big[E[(\mathbf{y}-\boldsymbol\mu)(\mathbf{y}-\boldsymbol\mu)^T]\big]_{ij}=E[(y_i-\mu_i)(y_j-\mu_j)]\]

Expectation entry by entry (04.1).

4

\[=cov(y_i,y_j)\]

Definition of covariance. ∎

### 04.3 \(\mathbf{V}\) is symmetric Slides p.24

**What** Slides p.24

Covariance Matrix · Lecture 5 · p.24 \(\mathbf{V}\) is symmetric: \[\mathbf{V}_{ij}=\mathbf{V}_{ji}\]

Calculate only the entries on and above the diagonal.

**How** Added

Use the symmetry of \(\mathbf{V}\)

- Calculate the diagonal entries and the entries with \(i<j\).
- Copy each \(\mathbf{V}_{ij}\) to position \((j,i)\).

**Self-check:** Each pair \(\mathbf{V}_{ij}\), \(\mathbf{V}_{ji}\) is equal.

**Example · brainhead** Added How steps 1–2

Step 1: \(\mathbf{V}_{12}=cov(y_1,y_2)=34014.61\).

Step 2: \(\mathbf{V}_{21}=cov(y_2,y_1)=34014.61\). ▲

**Why · \(\mathbf{V}\) is symmetric** Added

1

\[\mathbf{V}_{ij}=cov(y_i,y_j)=E[(y_i-\mu_i)(y_j-\mu_j)]\]

Entry formula (04.2).

2

\[=E[(y_j-\mu_j)(y_i-\mu_i)]\]

Factor order does not change a product.

3

\[=cov(y_j,y_i)=\mathbf{V}_{ji}\]

∎

### 04.4 \(\mathbf{V}\) is positive semi-definite Slides p.25

**What** Slides p.25

Covariance Matrix · Lecture 5 · p.25 \(\mathbf{V}\) is positive semi-definite: for all \(\mathbf{a}\) in \(\mathbb{R}^n\) \[\mathbf{a}^T\mathbf{V}\mathbf{a}\ge0\]

\(\mathbb{R}^n\) is the set of all columns of \(n\) real numbers. \(\mathbf{a}\) is a constant \(n\times1\) vector.

\(\mathbf{a}^T\mathbf{V}\mathbf{a}=\sum_i\sum_j a_i\mathbf{V}_{ij}a_j\) is one number.

A symmetric matrix is positive semi-definite when \(\mathbf{a}^T\mathbf{V}\mathbf{a}\ge0\) for every \(\mathbf{a}\).

**How** Added

Calculate \(\mathbf{a}^T\mathbf{V}\mathbf{a}\) for a given \(\mathbf{a}\)

- Calculate the column \(\mathbf{V}\mathbf{a}\).
- Multiply each entry of \(\mathbf{a}\) by the matching entry of \(\mathbf{V}\mathbf{a}\).
- Add the products.

**Self-check:** The result is one number, \(\ge0\).

**Example · brainhead, \(\mathbf{a}=(-0.3,\ 1)^T\)** Added How steps 1–3

Step 1: \[\mathbf{V}\mathbf{a}=\left[\begin{array}{c}130413.76\times(-0.3)+34014.61\times1\\34014.61\times(-0.3)+14084.06\times1\end{array}\right]=\left[\begin{array}{c}-39124.128+34014.61\\-10204.383+14084.06\end{array}\right]=\left[\begin{array}{c}-5109.518\\3879.677\end{array}\right]\]

Step 2: \((-0.3)(-5109.518)=1532.8554\) and \((1)(3879.677)=3879.677\).

Step 3: \(\mathbf{a}^T\mathbf{V}\mathbf{a}=1532.8554+3879.677=5412.5324\ge0\). ▲

This is the variance of \(z=-0.3y_1+y_2\) (04.5).

**Why · \(\mathbf{V}\) is positive semi-definite** Added

Linearity of expectation: a constant moves into or out of \(E[\cdot]\).

1

\[\mathbf{a}^T\mathbf{V}\mathbf{a}=\mathbf{a}^TE[(\mathbf{y}-\boldsymbol\mu)(\mathbf{y}-\boldsymbol\mu)^T]\mathbf{a}\]

Definition of \(\mathbf{V}\) (p.23).

2

\[=E[\mathbf{a}^T(\mathbf{y}-\boldsymbol\mu)(\mathbf{y}-\boldsymbol\mu)^T\mathbf{a}]\]

\(\mathbf{a}\) is constant.

3

\[=E[\big(\mathbf{a}^T(\mathbf{y}-\boldsymbol\mu)\big)\big(\mathbf{a}^T(\mathbf{y}-\boldsymbol\mu)\big)]\]

A number equals its transpose.

4

\[=E[\big(\mathbf{a}^T(\mathbf{y}-\boldsymbol\mu)\big)^2]\]

5

\[\ge0\]

The expectation of a square is \(\ge0\). ∎

### 04.5 Linear combinations and properties of random vectors Slides p.26–29

**What (1)** Slides p.26

Linear Combinations of Random Variables · Lecture 5 · p.26 Recall that if: \(z=\sum_{i=1}^n a_iy_i+c\) and \(u=\sum_{i=1}^n b_iy_i+d\). Then: \[E[z]=\sum_{i=1}^n a_iE[y_i]+c\] \[cov(z,u)=\sum_{i=1}^n\sum_{j=1}^n a_ib_j\,cov(y_i,y_j)\] Equivalently in matrix notation: \(z=\mathbf{a}^T\mathbf{y}+c\) and \(u=\mathbf{b}^T\mathbf{y}+d\) \[E[z]=\mathbf{a}^T\boldsymbol\mu+c\] \[cov(z,u)=\mathbf{a}^T\mathbf{V}\mathbf{b}\] where \(\boldsymbol\mu=E[\mathbf{y}]\) and \(\mathbf{V}=var(\mathbf{y})\)

A linear combination multiplies each \(y_i\) by a constant weight, adds the products, and can add a constant. \(z\) and \(u\) are random variables.

\(\mathbf{a}=(a_1,\dots,a_n)^T\) and \(\mathbf{b}=(b_1,\dots,b_n)^T\) hold the constant weights. \(c\) and \(d\) are constants.

**What (2)** Slides p.27–29

Properties of Random Vectors · Lecture 5 · p.27–29 Consider a random vector \(\mathbf{y}\) and constant vector \(\mathbf{a}\)

- \(E[\mathbf{a}]=\mathbf{a}\) (p.27)
- \(E[\mathbf{a}^T\mathbf{y}+b]=\mathbf{a}^TE[\mathbf{y}]+b\) (p.28)
- \(Var(\mathbf{a}^T\mathbf{y})=\mathbf{a}^TVar(\mathbf{y})\mathbf{a}\) (p.29)

\(b\) is a constant number, like \(c\) on p.26. \(Var(\mathbf{y})=var(\mathbf{y})=\mathbf{V}\).

The three properties are special cases of p.26. The third uses \(u=z\), because \(cov(z,z)=Var(z)\).

**How** Added

Calculate \(E[z]\), \(Var(z)\) and \(cov(z,u)\)

- Read \(\mathbf{a}\), \(c\) from \(z\) and \(\mathbf{b}\), \(d\) from \(u\). Write weight 0 for a missing \(y_i\).
- \(E[z]\): calculate \(\mathbf{a}^T\boldsymbol\mu+c\).
- \(cov(z,u)\): calculate \(\mathbf{V}\mathbf{b}\), then \(\mathbf{a}^T(\mathbf{V}\mathbf{b})\). Do not use \(c\) or \(d\).
- \(Var(z)\): use step 3 with \(\mathbf{b}=\mathbf{a}\).

**Self-check:** \(\mathbf{a}\) and \(\mathbf{b}\) have the length of \(\mathbf{y}\). The sum form gives the same result. \(Var(z)\ge0\).

**Example · brainhead, \(z=-0.3y_1+y_2\) and \(u=y_1-y_2\)** Added How steps 1–4

Step 1: \(\mathbf{a}=(-0.3,\ 1)^T\), \(c=0\), \(\mathbf{b}=(1,\ -1)^T\), \(d=0\). By p.27, \(E[\mathbf{a}]=(-0.3,\ 1)^T\).

Step 2: \(E[z]=\mathbf{a}^T\boldsymbol\mu+c=(-0.3)(3637.864)+(1)(1284.263)+0=-1091.3592+1284.263=192.9038\).

Step 3 (matrix form): \[\mathbf{V}\mathbf{b}=\left[\begin{array}{c}130413.76-34014.61\\34014.61-14084.06\end{array}\right]=\left[\begin{array}{c}96399.15\\19930.55\end{array}\right]\] \[cov(z,u)=\mathbf{a}^T\mathbf{V}\mathbf{b}=(-0.3)(96399.15)+(1)(19930.55)=-28919.745+19930.55=-8989.195\]

Step 3 (sum form, 4 terms): \[a_1b_1cov(y_1,y_1)=(-0.3)(1)(130413.76)=-39124.128\] \[a_1b_2cov(y_1,y_2)=(-0.3)(-1)(34014.61)=10204.383\] \[a_2b_1cov(y_2,y_1)=(1)(1)(34014.61)=34014.61\] \[a_2b_2cov(y_2,y_2)=(1)(-1)(14084.06)=-14084.06\] Sum: \(-39124.128+10204.383+34014.61-14084.06=-8989.195\).

Step 4: \(Var(z)=\mathbf{a}^T\mathbf{V}\mathbf{a}=5412.5324\) (04.4). Sum form: \[a_1^2\mathbf{V}_{11}+2a_1a_2\mathbf{V}_{12}+a_2^2\mathbf{V}_{22}=(0.09)(130413.76)+2(-0.3)(1)(34014.61)+(1)(14084.06)\] \[=11737.2384-20408.766+14084.06=5412.5324\]

\(\boldsymbol\mu\) and \(\mathbf{V}\) are sufficient. The 236 data rows are not necessary. ▲

Figure 04.2 shows the 236 values \(z_i=-0.3\times(\text{head size})_i+(\text{brain weight})_i\). Example: \(z_1=-0.3\times4512+1530=-1353.6+1530=176.4\). A histogram is a bar chart of the count of values in equal-width intervals.

[figure]
Figure 04.2 · Histogram of the 236 values \(z_i\) (interval width 25). Orange: \(\mathbf{a}^T\boldsymbol\mu=192.90\), the center. Purple: one standard deviation \(\sqrt{\mathbf{a}^T\mathbf{V}\mathbf{a}}=73.57\) to each side.

**Why · formulas for linear combinations** Added

1

\[E[z]=E\Big[\sum_{i=1}^n a_iy_i+c\Big]=\sum_{i=1}^n a_iE[y_i]+c\]

Linearity of expectation.

2

\[=\sum_{i=1}^n a_i\mu_i+c=\mathbf{a}^T\boldsymbol\mu+c\]

\(\mu_i=E[y_i]\).

3

\[z-E[z]=\sum_{i=1}^n a_i(y_i-\mu_i),\qquad u-E[u]=\sum_{j=1}^n b_j(y_j-\mu_j)\]

\(c\) and \(d\) cancel.

4

\[cov(z,u)=E\Big[\sum_{i=1}^n a_i(y_i-\mu_i)\sum_{j=1}^n b_j(y_j-\mu_j)\Big]\]

\(cov(z,u)=E[(z-E[z])(u-E[u])]\).

5

\[=E\Big[\sum_{i=1}^n\sum_{j=1}^n a_ib_j(y_i-\mu_i)(y_j-\mu_j)\Big]\]

6

\[=\sum_{i=1}^n\sum_{j=1}^n a_ib_jE[(y_i-\mu_i)(y_j-\mu_j)]=\sum_{i=1}^n\sum_{j=1}^n a_ib_j\,cov(y_i,y_j)\]

Linearity of expectation.

7

\[=\sum_{i=1}^n\sum_{j=1}^n a_i\mathbf{V}_{ij}b_j=\mathbf{a}^T\mathbf{V}\mathbf{b}\]

\(\mathbf{V}_{ij}=cov(y_i,y_j)\).

The properties of p.27–29:

1

\[E[\mathbf{a}]=\left[\begin{array}{c}E[a_1]\\ \vdots\\ E[a_n]\end{array}\right]=\left[\begin{array}{c}a_1\\ \vdots\\ a_n\end{array}\right]=\mathbf{a}\]

The expectation of a constant is the constant.

2

\[E[\mathbf{a}^T\mathbf{y}+b]=\mathbf{a}^T\boldsymbol\mu+b=\mathbf{a}^TE[\mathbf{y}]+b\]

p.26 with \(c=b\).

3

\[Var(\mathbf{a}^T\mathbf{y})=cov(\mathbf{a}^T\mathbf{y},\ \mathbf{a}^T\mathbf{y})\]

4

\[=\mathbf{a}^T\mathbf{V}\mathbf{a}=\mathbf{a}^TVar(\mathbf{y})\mathbf{a}\]

p.26 with \(\mathbf{b}=\mathbf{a}\), \(c=d=0\). ∎

### 04.6 Linear transformations \(\mathbf{z}=\mathbf{A}\mathbf{y}\) Slides p.30–35

**What** Slides p.30–31

Linear Transformations · Lecture 5 · p.30–31 Matrix Notation: Consider a random vector \(\mathbf{z}=(z_1,\dots,z_k)^T\) of \(k\) linear combinations of random \(\mathbf{y}\): \[\begin{array}{rcl}z_1&=&a_{11}y_1+a_{12}y_2+\cdots a_{1n}y_n\\z_2&=&a_{21}y_1+a_{22}y_2+\cdots a_{2n}y_n\\&\vdots&\\z_k&=&a_{k1}y_1+a_{k2}y_2+\cdots a_{kn}y_n\end{array}\] We can equivalently write \(\mathbf{z}=\mathbf{A}\mathbf{y}\) for \([\mathbf{A}]_{ij}=a_{ij}\). Then: \[E[\mathbf{z}]=\mathbf{A}E[\mathbf{y}]\] \[Var(\mathbf{z})=\mathbf{A}Var(\mathbf{y})\mathbf{A}^T\]

A linear transformation multiplies the random vector by a constant matrix: \(\mathbf{z}=\mathbf{A}\mathbf{y}\). Each \(z_r\) is one linear combination of \(\mathbf{y}\).

\(\mathbf{A}\) is a \(k\times n\) constant matrix. Row \(r\) holds the weights of \(z_r\).

\(\mathbf{z}\) and \(E[\mathbf{z}]\) are \(k\times1\). \(Var(\mathbf{z})\) is \((k\times n)(n\times n)(n\times k)=k\times k\).

With \(k=1\) and \(\mathbf{A}=\mathbf{a}^T\), the formula becomes p.29.

**How** Added

Calculate \(E[\mathbf{A}\mathbf{y}]\) and \(Var(\mathbf{A}\mathbf{y})\)

- Write the weights of \(z_r\) as row \(r\) of \(\mathbf{A}\). Write 0 for a missing \(y_j\).
- Mean: calculate \(\mathbf{A}\boldsymbol\mu\) (\(k\times1\)).
- Variance: calculate \(\mathbf{V}\mathbf{A}^T\) (\(n\times k\)).
- Multiply \(\mathbf{A}\) by the result of step 3 (\(k\times k\)).

**Self-check:** \(Var(\mathbf{z})\) is symmetric with diagonal \(\ge0\). Diagonal entry \(r\) equals \(Var(z_r)\) from 04.5.

**Example · brainhead, \(z_1=y_1\) and \(z_2=y_1-y_2\)** Added How steps 1–4

\(k=2\), \(n=2\).

Step 1: \[\mathbf{A}=\left[\begin{array}{cc}1&0\\1&-1\end{array}\right],\qquad \mathbf{z}=\mathbf{A}\mathbf{y}=\left[\begin{array}{c}y_1\\y_1-y_2\end{array}\right]\]

Step 2: \[E[\mathbf{z}]=\mathbf{A}\boldsymbol\mu=\left[\begin{array}{c}1(3637.864)+0(1284.263)\\1(3637.864)-1(1284.263)\end{array}\right]=\left[\begin{array}{c}3637.864\\2353.601\end{array}\right]\]

Step 3: \(\mathbf{A}^T=\left[\begin{array}{cc}1&1\\0&-1\end{array}\right]\). \[\mathbf{V}\mathbf{A}^T=\left[\begin{array}{cc}130413.76(1)+34014.61(0)&130413.76(1)+34014.61(-1)\\34014.61(1)+14084.06(0)&34014.61(1)+14084.06(-1)\end{array}\right]=\left[\begin{array}{cc}130413.76&96399.15\\34014.61&19930.55\end{array}\right]\]

Step 4: Row 1 of \(\mathbf{A}\) is \((1,0)\): copy row 1. Row 2 is \((1,-1)\): row 1 minus row 2. \[\mathbf{A}\mathbf{V}\mathbf{A}^T=\left[\begin{array}{cc}130413.76&96399.15\\130413.76-34014.61&96399.15-19930.55\end{array}\right]=\left[\begin{array}{cc}130413.76&96399.15\\96399.15&76468.60\end{array}\right]\]

Self-check: symmetric (96399.15 twice). \(Var(z_1)=130413.76=var(y_1)\).

Self-check: 04.5 with \(\mathbf{b}=(1,-1)^T\) gives \(\mathbf{b}^T\mathbf{V}\mathbf{b}=(1)(96399.15)+(-1)(19930.55)=76468.60=Var(z_2)\). ▲

**Why (1) · \(E[\mathbf{A}\mathbf{y}]=\mathbf{A}E[\mathbf{y}]\)** Slides p.32–33

The slides use a square \(n\times n\) \(\mathbf{A}\). The steps are the same for \(k\) rows.

1

\[E[\mathbf{A}\mathbf{y}]=E\left[\left[\begin{array}{cccc}a_{11}&a_{12}&\dots&a_{1n}\\a_{21}&a_{22}&\dots&a_{2n}\\ \vdots&&&\\a_{n1}&a_{n2}&\dots&a_{nn}\end{array}\right]\left[\begin{array}{c}y_1\\y_2\\ \vdots\\y_n\end{array}\right]\right]\]

2

\[=E\left[\begin{array}{c}\sum_ia_{1i}y_i\\ \sum_ia_{2i}y_i\\ \vdots\\ \sum_ia_{ni}y_i\end{array}\right]\]

Matrix times vector, row by row.

3

\[=\left[\begin{array}{c}\sum_ia_{1i}E[y_i]\\ \sum_ia_{2i}E[y_i]\\ \vdots\\ \sum_ia_{ni}E[y_i]\end{array}\right]\]

Entry by entry (p.22); linearity of expectation.

4

\[=\mathbf{A}E[\mathbf{y}]\]

∎

**Why (2) · \(Var(\mathbf{A}\mathbf{y})=\mathbf{A}Var(\mathbf{y})\mathbf{A}^T\)** Slides p.34–35

The proof uses \((\mathbf{A}\mathbf{B})^T=\mathbf{B}^T\mathbf{A}^T\) (Lecture 5 · p.11).

Check with \(\mathbf{A}\) from the example and \(\mathbf{B}=\mathbf{y}\): \((\mathbf{A}\mathbf{y})^T=(y_1,\ y_1-y_2)\).

\(\mathbf{y}^T\mathbf{A}^T=(y_1,\ y_2)\left[\begin{array}{cc}1&1\\0&-1\end{array}\right]=(y_1,\ y_1-y_2)\). Equal.

1

\[Var(\mathbf{A}\mathbf{y})=E[(\mathbf{A}\mathbf{y}-E[\mathbf{A}\mathbf{y}])(\mathbf{A}\mathbf{y}-E[\mathbf{A}\mathbf{y}])^T]\]

p.23 with \(\mathbf{A}\mathbf{y}\) for \(\mathbf{y}\).

2

\[=E[\mathbf{A}(\mathbf{y}-E[\mathbf{y}])(\mathbf{A}(\mathbf{y}-E[\mathbf{y}]))^T]\]

Why (1); take out \(\mathbf{A}\).

3

\[=E[\mathbf{A}(\mathbf{y}-E[\mathbf{y}])(\mathbf{y}-E[\mathbf{y}])^T\mathbf{A}^T]\]

\((\mathbf{A}\mathbf{B})^T=\mathbf{B}^T\mathbf{A}^T\), \(\mathbf{B}=\mathbf{y}-E[\mathbf{y}]\).

4

\[=\mathbf{A}E[(\mathbf{y}-E[\mathbf{y}])(\mathbf{y}-E[\mathbf{y}])^T]\mathbf{A}^T\]

Constant matrices move out of \(E[\cdot]\).

5

\[=\mathbf{A}Var(\mathbf{y})\mathbf{A}^T\]

p.23. ∎

Later units write the estimator \(\hat{\boldsymbol\beta}\) as a constant matrix times \(\mathbf{y}\) and use these two formulas.

### 04.7 Practice Added

In all three questions, \(\mathbf{y}=(y_1,y_2)^T\), \(\boldsymbol\mu=E[\mathbf{y}]=(3637.864,\ 1284.263)^T\), \(\mathbf{V}=var(\mathbf{y})=\left[\begin{array}{cc}130413.76&34014.61\\34014.61&14084.06\end{array}\right]\).

**Q1.** Let \(z=y_1+y_2\). Write \(z=\mathbf{a}^T\mathbf{y}\). Calculate \(E[z]\) and \(Var(z)\).

Answer

Step 1: \(\mathbf{a}=(1,\ 1)^T\).

Step 2: \(E[z]=\mathbf{a}^T\boldsymbol\mu=3637.864+1284.263=4922.127\).

Step 3: \(Var(z)=\mathbf{a}^T\mathbf{V}\mathbf{a}=\mathbf{V}_{11}+2\mathbf{V}_{12}+\mathbf{V}_{22}=130413.76+2(34014.61)+14084.06\).

Step 4: \(130413.76+68029.22+14084.06=212527.04\).

**Self-check:** \(\ge0\).

**Q2.** Let \(z_1=y_1+y_2\) and \(z_2=y_2\). Write \(\mathbf{z}=\mathbf{A}\mathbf{y}\). Calculate \(E[\mathbf{z}]\), \(Var(\mathbf{z})\) and \(cov(z_1,z_2)\).

Answer

Step 1: \(\mathbf{A}=\left[\begin{array}{cc}1&1\\0&1\end{array}\right]\), \(\mathbf{A}^T=\left[\begin{array}{cc}1&0\\1&1\end{array}\right]\).

Step 2: \(E[\mathbf{z}]=\mathbf{A}\boldsymbol\mu=(3637.864+1284.263,\ 1284.263)^T=(4922.127,\ 1284.263)^T\).

Step 3: \(\mathbf{V}\mathbf{A}^T=\left[\begin{array}{cc}130413.76+34014.61&34014.61\\34014.61+14084.06&14084.06\end{array}\right]=\left[\begin{array}{cc}164428.37&34014.61\\48098.67&14084.06\end{array}\right]\).

Step 4: Row 1 is the sum of the two rows of step 3. Row 2 is row 2 of step 3. \[Var(\mathbf{z})=\left[\begin{array}{cc}164428.37+48098.67&34014.61+14084.06\\48098.67&14084.06\end{array}\right]=\left[\begin{array}{cc}212527.04&48098.67\\48098.67&14084.06\end{array}\right]\]

Step 5: \(cov(z_1,z_2)=[Var(\mathbf{z})]_{12}=48098.67\).

**Self-check:** Symmetric. \(Var(z_1)=212527.04\) (Q1). \(Var(z_2)=14084.06=var(y_2)\).

**Q3.** Show that \(Var(\mathbf{a}^T\mathbf{y})=\mathbf{a}^TVar(\mathbf{y})\mathbf{a}\) (p.29) is a special case of \(Var(\mathbf{A}\mathbf{y})=\mathbf{A}Var(\mathbf{y})\mathbf{A}^T\) (p.31).

Answer

1

\[\text{Let } k=1,\ \mathbf{A}=\mathbf{a}^T\ (1\times n)\]

One linear combination: one row.

2

\[Var(\mathbf{a}^T\mathbf{y})=\mathbf{a}^TVar(\mathbf{y})(\mathbf{a}^T)^T\]

Substitute into p.31.

3

\[=\mathbf{a}^TVar(\mathbf{y})\mathbf{a}\]

\((\mathbf{a}^T)^T=\mathbf{a}\).

The result is \(1\times1\), as on p.29. ∎

## 05 · Multivariate normal distribution: definition and properties

All examples use \(\mathbf{A}=\left[\begin{array}{cc}2&0\\1&1\end{array}\right]\) and \(\boldsymbol\mu=\left[\begin{array}{c}1\\2\end{array}\right]\).

### 05.1 Definition: construction from a standard normal vector Slides p.36

**What** Slides p.36

Multivariate Normal Distribution · Lecture 5 · p.36 Let \(\mathbf{z}=(z_1,\dots,z_n)^T\) be a random vector of i.i.d standard normal random variables, i.e. \(z_i\overset{iid}{\sim}N(0,1)\).
Then \(\mathbf{y}=\mathbf{A}\mathbf{z}+\boldsymbol\mu\) has multivariate normal distribution, i.e.: \(\mathbf{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\) where

- \(E[\mathbf{y}]=\boldsymbol\mu\) and
- \(Var(\mathbf{y})=\boldsymbol\Sigma=\mathbf{A}\mathbf{A}^T\).

The standard normal distribution \(N(0,1)\) has mean 0 and variance 1.

\(\mathbf{A}\) is a constant matrix. \(\boldsymbol\mu\) is a constant \(n\times1\) vector.

The multivariate normal distribution (MVN) is the distribution of \(\mathbf{y}=\mathbf{A}\mathbf{z}+\boldsymbol\mu\). In \(MVN(\boldsymbol\mu,\boldsymbol\Sigma)\), \(\boldsymbol\mu\) is the mean vector and \(\boldsymbol\Sigma\) is the covariance matrix.

**How** Added

Find the distribution of \(\mathbf{y}\) from \(\mathbf{A}\) and \(\boldsymbol\mu\)

- Write the mean: \(E[\mathbf{y}]=\boldsymbol\mu\).
- Find \(\mathbf{A}^T\).
- Find \(\boldsymbol\Sigma=\mathbf{A}\mathbf{A}^T\). Entry \((i,j)\) is row \(i\) times row \(j\) of \(\mathbf{A}\), term by term, added.
- Write \(\mathbf{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\).

**Self-check:** \(\boldsymbol\Sigma\) is \(n\times n\) and symmetric, with diagonal \(\ge 0\). \(\boldsymbol\mu\) has length \(n\).

**Example** Added

\(n=2\):
\[\mathbf{A}=\left[\begin{array}{cc}2&0\\1&1\end{array}\right],\qquad \boldsymbol\mu=\left[\begin{array}{c}1\\2\end{array}\right]\]
Step 1: \(E[\mathbf{y}]=\boldsymbol\mu=(1,2)^T\).

Step 2: \(\mathbf{A}^T=\left[\begin{array}{cc}2&1\\0&1\end{array}\right]\).

Step 3: \(\Sigma_{11}=2\cdot2+0\cdot0=4\). \(\Sigma_{12}=2\cdot1+0\cdot1=2\). \(\Sigma_{21}=1\cdot2+1\cdot0=2\). \(\Sigma_{22}=1\cdot1+1\cdot1=2\).

\(\boldsymbol\Sigma=\left[\begin{array}{cc}4&2\\2&2\end{array}\right]\).

Step 4: \(\mathbf{y}\sim MVN\left(\left[\begin{array}{c}1\\2\end{array}\right],\left[\begin{array}{cc}4&2\\2&2\end{array}\right]\right)\).

Self-check: \(\Sigma_{12}=\Sigma_{21}\). Diagonal 4 and 2 are positive.

A random draw is one value of the random vector from one run of the random process.

[figure]
Figure 05.1 · Left: 400 random draws of \(\mathbf{y}=\mathbf{A}\mathbf{z}+\boldsymbol\mu\); orange: \(\boldsymbol\mu=(1,2)^T\). The cloud slopes up because \(\Sigma_{12}=2>0\). It is wider than tall because \(\Sigma_{11}=4>\Sigma_{22}=2\). Equal axis scales. Section 05.6 uses the right panel.

**Why** Added

Two rules from Section 04.6, with a constant vector \(\mathbf{b}\) added:

Rule E: \(E[\mathbf{A}\mathbf{z}+\mathbf{b}]=\mathbf{A}\,E[\mathbf{z}]+\mathbf{b}\).

Rule V: \(Var(\mathbf{A}\mathbf{z}+\mathbf{b})=\mathbf{A}\,Var(\mathbf{z})\,\mathbf{A}^T\). A constant shift does not change the covariance.

\(E[z_i]=0\): \(E[\mathbf{z}]=\mathbf{0}\).

\(Var(z_i)=1\), and \(cov(z_i,z_j)=0\) for \(i\ne j\) (independent): \(Var(\mathbf{z})=\mathbf{I}\).

Mean:

1

\[E[\mathbf{y}]=E[\mathbf{A}\mathbf{z}+\boldsymbol\mu]\]

2

\[=\mathbf{A}\,E[\mathbf{z}]+\boldsymbol\mu\]

Rule E with \(\mathbf{b}=\boldsymbol\mu\).

3

\[=\mathbf{A}\,\mathbf{0}+\boldsymbol\mu\]

\(E[\mathbf{z}]=\mathbf{0}\).

4

\[=\boldsymbol\mu\]

∎

Covariance matrix:

1

\[Var(\mathbf{y})=Var(\mathbf{A}\mathbf{z}+\boldsymbol\mu)\]

2

\[=\mathbf{A}\,Var(\mathbf{z})\,\mathbf{A}^T\]

Rule V.

3

\[=\mathbf{A}\,\mathbf{I}\,\mathbf{A}^T\]

\(Var(\mathbf{z})=\mathbf{I}\).

4

\[=\mathbf{A}\mathbf{A}^T=\boldsymbol\Sigma\]

∎

### 05.2 Density function Slides p.36

**What** Slides p.36

MVN density · Lecture 5 · p.36 \(\mathbf{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\), if: \[f(\mathbf{y})=\frac{1}{(2\pi)^{\frac n2}|\boldsymbol\Sigma|^{\frac12}}\exp\left\{-\frac12(\mathbf{y}-\boldsymbol\mu)^T\boldsymbol\Sigma^{-1}(\mathbf{y}-\boldsymbol\mu)\right\}\]

The joint density \(f(\mathbf{y})\) is the density of all \(n\) components together. \(f(\mathbf{y})\) times the volume of a small region near \(\mathbf{y}\) is about the probability of that region.

The determinant \(|\boldsymbol\Sigma|\) is one number from a square matrix. For \(2\times2\), it is \(ad-bc\) (02.4).

\(\exp\{x\}=e^x\), with \(e\approx2.71828\).

The quadratic form \((\mathbf{y}-\boldsymbol\mu)^T\boldsymbol\Sigma^{-1}(\mathbf{y}-\boldsymbol\mu)\) is one number: the distance from \(\mathbf{y}\) to \(\boldsymbol\mu\), scaled by \(\boldsymbol\Sigma\).

\(\boldsymbol\mu\) and \(\boldsymbol\Sigma\) give the full distribution.

**How** Added

Calculate \(f(\mathbf{y})\) at a point \(\mathbf{y}\)

- Calculate \(\mathbf{y}-\boldsymbol\mu\).
- Calculate \(|\boldsymbol\Sigma|\).
- Calculate \(\boldsymbol\Sigma^{-1}\).
- Calculate \(\boldsymbol\Sigma^{-1}(\mathbf{y}-\boldsymbol\mu)\).
- Calculate \(q=(\mathbf{y}-\boldsymbol\mu)^T\boldsymbol\Sigma^{-1}(\mathbf{y}-\boldsymbol\mu)\): step 4 times step 1, term by term, added.
- Put the values into \(f=\dfrac{1}{(2\pi)^{n/2}|\boldsymbol\Sigma|^{1/2}}e^{-q/2}\).

**Self-check:** \(|\boldsymbol\Sigma|>0\). \(\boldsymbol\Sigma\boldsymbol\Sigma^{-1}=\mathbf{I}\). \(q\ge0\). At \(\mathbf{y}=\boldsymbol\mu\), \(q=0\) and \(f\) is largest.

**Example** Added

\(\boldsymbol\mu\), \(\boldsymbol\Sigma\) from 05.1; point \(\mathbf{y}=(2,3)^T\); \(n=2\).

Step 1: \(\mathbf{y}-\boldsymbol\mu=(2-1,\ 3-2)^T=(1,1)^T\).

Step 2: \(|\boldsymbol\Sigma|=4\cdot2-2\cdot2=8-4=4\).

Step 3: \(\boldsymbol\Sigma^{-1}=\frac14\left[\begin{array}{cc}2&-2\\-2&4\end{array}\right]=\left[\begin{array}{cc}0.5&-0.5\\-0.5&1\end{array}\right]\).

Step 4: \(\boldsymbol\Sigma^{-1}(1,1)^T=(0.5-0.5,\ -0.5+1)^T=(0,\ 0.5)^T\).

Step 5: \(q=1\cdot0+1\cdot0.5=0.5\).

Step 6: \((2\pi)^{n/2}=(2\pi)^1=2\pi\). \(|\boldsymbol\Sigma|^{1/2}=4^{1/2}=2\). Denominator: \(2\pi\cdot2=4\pi=12.566371\).

Step 7: \(e^{-q/2}=e^{-0.25}=0.778801\).

Step 8: \(f=\dfrac{0.778801}{12.566371}=0.061975\).

Self-check: \(|\boldsymbol\Sigma|=4>0\), \(q=0.5\ge0\). Entry \((1,1)\) of \(\boldsymbol\Sigma\boldsymbol\Sigma^{-1}\): \(4\cdot0.5+2\cdot(-0.5)=1\).

**Why** Added

For \(n=1\), the MVN density is the normal density. Let \(\boldsymbol\Sigma=\sigma^2\), \(\mathbf{y}=y\), \(\boldsymbol\mu=\mu\).

1

\[f(y)=\frac{1}{(2\pi)^{\frac12}|\sigma^2|^{\frac12}}\exp\left\{-\frac12(y-\mu)^T(\sigma^2)^{-1}(y-\mu)\right\}\]

Put in \(n=1\).

2

\[=\frac{1}{\sqrt{2\pi}\,\sigma}\exp\left\{-\frac12(y-\mu)^T(\sigma^2)^{-1}(y-\mu)\right\}\]

\(1\times1\) determinant: \(|\sigma^2|^{1/2}=\sigma\).

3

\[=\frac{1}{\sqrt{2\pi}\,\sigma}\exp\left\{-\frac12(y-\mu)\frac{1}{\sigma^2}(y-\mu)\right\}\]

A number equals its transpose.

4

\[=\frac{1}{\sqrt{2\pi}\,\sigma}\exp\left\{-\frac{(y-\mu)^2}{2\sigma^2}\right\}\]

Density of \(N(\mu,\sigma^2)\). ∎

\(\sigma^2\) becomes \(\boldsymbol\Sigma\); division by \(\sigma^2\) becomes multiplication by \(\boldsymbol\Sigma^{-1}\).

### 05.3 Property 1: linearity Slides p.37

**What** Slides p.37

Properties of \(\mathbf{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\) · Lecture 5 · p.37 Linearity: If \(\mathbf{u}=\mathbf{C}\mathbf{y}+\mathbf{d}\), then: \[\mathbf{u}\sim MVN(\mathbf{C}\boldsymbol\mu+\mathbf{d},\ \mathbf{C}\boldsymbol\Sigma\mathbf{C}^T)\]

\(\mathbf{C}\) is a constant \(m\times n\) matrix. \(\mathbf{d}\) and \(\mathbf{u}\) are \(m\times1\).

\(\mathbf{u}\) is normal. Rules E and V give its parameters.

**How** Added

Find the distribution of \(\mathbf{u}=\mathbf{C}\mathbf{y}+\mathbf{d}\)

- Write \(\mathbf{C}\) (\(m\times n\)) and \(\mathbf{d}\) (\(m\times1\)).
- Calculate the mean \(\mathbf{C}\boldsymbol\mu+\mathbf{d}\).
- Calculate \(\mathbf{C}\boldsymbol\Sigma\).
- Multiply step 3 on the right by \(\mathbf{C}^T\).
- Write \(\mathbf{u}\sim MVN(\mathbf{C}\boldsymbol\mu+\mathbf{d},\ \mathbf{C}\boldsymbol\Sigma\mathbf{C}^T)\). For \(m=1\), write \(N(\cdot,\cdot)\).

**Self-check:** The mean has length \(m\). The covariance matrix is \(m\times m\), symmetric, diagonal \(\ge0\).

**Example** Added

\(\mathbf{y}\) from 05.1. Let \(\mathbf{C}=(1,\ -1)\) and \(\mathbf{d}=3\): \(u=y_1-y_2+3\).

Step 1: \(\mathbf{C}=(1,-1)\), \(m=1\), \(\mathbf{d}=3\).

Step 2: \(\mathbf{C}\boldsymbol\mu+\mathbf{d}=1\cdot1+(-1)\cdot2+3=2\).

Step 3: \(\mathbf{C}\boldsymbol\Sigma=(1\cdot4-1\cdot2,\ 1\cdot2-1\cdot2)=(2,\ 0)\).

Step 4: \(\mathbf{C}\boldsymbol\Sigma\mathbf{C}^T=2\cdot1+0\cdot(-1)=2\).

Step 5: \(u\sim N(2,\ 2)\).

Self-check: variance 2 is positive.

**Why** Added

1

\[\mathbf{u}=\mathbf{C}\mathbf{y}+\mathbf{d}\]

2

\[=\mathbf{C}(\mathbf{A}\mathbf{z}+\boldsymbol\mu)+\mathbf{d}\]

\(\mathbf{y}=\mathbf{A}\mathbf{z}+\boldsymbol\mu\) (p.36).

3

\[=(\mathbf{C}\mathbf{A})\mathbf{z}+(\mathbf{C}\boldsymbol\mu+\mathbf{d})\]

Form of p.36: MVN, mean \(\mathbf{C}\boldsymbol\mu+\mathbf{d}\).

4

\[Var(\mathbf{u})=(\mathbf{C}\mathbf{A})(\mathbf{C}\mathbf{A})^T\]

p.36: matrix times its transpose.

5

\[=\mathbf{C}\mathbf{A}\mathbf{A}^T\mathbf{C}^T\]

\((\mathbf{C}\mathbf{A})^T=\mathbf{A}^T\mathbf{C}^T\).

6

\[=\mathbf{C}\boldsymbol\Sigma\mathbf{C}^T\]

\(\mathbf{A}\mathbf{A}^T=\boldsymbol\Sigma\). ∎

### 05.4 Property 2: marginal distribution Slides p.38

**What** Slides p.38

Properties of \(\mathbf{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\) · Lecture 5 · p.38 Marginal Distribution: If \(\tilde{\mathbf{y}}=(y_1,\dots,y_m)^T\subset\mathbf{y}\) is a vector subset of \(\mathbf{y}\), then \(\tilde{\mathbf{y}}\) is MVN-distributed.

A marginal distribution is the distribution of some components, with all other components ignored.

A vector subset \(\tilde{\mathbf{y}}\subset\mathbf{y}\) holds \(m\le n\) components of \(\mathbf{y}\). The slides take the first \(m\).

Linearity gives the parameters (Why): the matching entries of \(\boldsymbol\mu\) and the matching rows and columns of \(\boldsymbol\Sigma\).

**How** Added

Find the distribution of \(\tilde{\mathbf{y}}\)

- List the indices to keep, for example \(\{1,\dots,m\}\).
- Mean: take these entries of \(\boldsymbol\mu\).
- Covariance: take the entries of \(\boldsymbol\Sigma\) where these rows and columns cross.
- Write \(\tilde{\mathbf{y}}\sim MVN(\tilde{\boldsymbol\mu},\tilde{\boldsymbol\Sigma})\). For one component, \(y_i\sim N(\mu_i,\Sigma_{ii})\).

**Self-check:** \(\tilde{\boldsymbol\Sigma}\) is \(m\times m\). Its diagonal matches \(\boldsymbol\Sigma\).

**Example** Added

\(\mathbf{y}\) from 05.1; keep only \(y_1\) (\(m=1\)).

Step 1: Index set \(\{1\}\).

Step 2: \(\mu_1=1\).

Step 3: \(\Sigma_{11}=4\).

Step 4: \(y_1\sim N(1,4)\). Standard deviation \(\sqrt4=2\).

Density of \(y_1\) at 2 (p.36, \(n=1\), \(\boldsymbol\Sigma=4\)):

Step 5: \(y_1-\mu_1=2-1=1\). \(q=1\cdot\frac14\cdot1=0.25\).

Step 6: \((2\pi)^{1/2}\cdot4^{1/2}=2.506628\cdot2=5.013257\).

Step 7: \(e^{-q/2}=e^{-0.125}=0.882497\).

Step 8: \(f(2)=\dfrac{0.882497}{5.013257}=0.176033\).

[figure]
Figure 05.2 · Blue: histogram of many random draws of \(y_1\), density scale (frequency divided by bin width; total area 1). Orange: the \(N(1,4)\) density. The shapes agree.

**Why** Added

Let \(\mathbf{C}=[\,\mathbf{I}_m\ \ \mathbf{0}\,]\) (\(m\times n\): identity on the left, zeros on the right) and \(\mathbf{d}=\mathbf{0}\).

1

\[\mathbf{C}\mathbf{y}=(y_1,\dots,y_m)^T=\tilde{\mathbf{y}}\]

Row \(i\) of \(\mathbf{C}\) has 1 only in column \(i\).

2

\[\tilde{\mathbf{y}}\sim MVN(\mathbf{C}\boldsymbol\mu,\ \mathbf{C}\boldsymbol\Sigma\mathbf{C}^T)\]

Linearity (p.37).

3

\[\mathbf{C}\boldsymbol\mu=(\mu_1,\dots,\mu_m)^T\]

4

\[\mathbf{C}\boldsymbol\Sigma\mathbf{C}^T=\text{the top-left }m\times m\text{ block of }\boldsymbol\Sigma\]

\(\mathbf{C}\) keeps rows; \(\mathbf{C}^T\) keeps columns. ∎

In the example, \(\mathbf{C}=(1,0)\): \(\mathbf{C}\boldsymbol\mu=1\), \(\mathbf{C}\boldsymbol\Sigma\mathbf{C}^T=\Sigma_{11}=4\).

### 05.5 Property 3: conditional distribution Slides p.39

**What** Slides p.39

Properties of \(\mathbf{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\) · Lecture 5 · p.39 Conditional Distribution: If \(\mathbf{y}=(\mathbf{y}_1^T,\mathbf{y}_2^T)^T\), then \(\mathbf{y}_1|\mathbf{y}_2\) is MVN-distributed.

A partition \(\mathbf{y}=(\mathbf{y}_1^T,\mathbf{y}_2^T)^T\) cuts \(\mathbf{y}\) into a top sub-vector \(\mathbf{y}_1\) and a bottom sub-vector \(\mathbf{y}_2\).

The conditional distribution \(\mathbf{y}_1|\mathbf{y}_2\) is the distribution of \(\mathbf{y}_1\) when \(\mathbf{y}_2\) has a known, fixed value. "\(|\)" reads "given".

The slides give no formulas for the conditional mean or covariance.

**How** Added

Identify the type of a conditional distribution

- Confirm that \(\mathbf{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\).
- State the components of \(\mathbf{y}_1\) and of \(\mathbf{y}_2\).
- Conclude that \(\mathbf{y}_1|\mathbf{y}_2\) is MVN (univariate normal if \(\mathbf{y}_1\) has one component).

**Self-check:** \(\mathbf{y}_1\) and \(\mathbf{y}_2\) together hold all components, with no overlap.

**Example** Added

Step 1: \(\mathbf{y}\sim MVN\left(\left[\begin{array}{c}1\\2\end{array}\right],\left[\begin{array}{cc}4&2\\2&2\end{array}\right]\right)\) (05.1).

Step 2: \(\mathbf{y}_1=y_1\), \(\mathbf{y}_2=y_2\).

Step 3: By p.39, \(y_1\) given \(y_2=3\) is univariate normal.

Self-check: \(\{y_1\}\) and \(\{y_2\}\) hold both components, with no overlap.

[figure]
Figure 05.3 · Purple: histogram of \(y_1\) in the random draws with \(y_2\) within 0.05 of 3. Orange: a normal density with the same mean and standard deviation. The histogram is bell-shaped, as p.39 says.

**Why** Added

No proof on Slides p.39

Slide p.39 gives no proof and no conditional mean or covariance. This unit uses only "\(\mathbf{y}_1|\mathbf{y}_2\) is MVN".

### 05.6 Property 4: independence Slides p.40

**What** Slides p.40

Properties of \(\mathbf{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\) · Lecture 5 · p.40 Independence: If \(\Sigma_{ij}=0\), then \(\mathbf{y}_i\) and \(\mathbf{y}_j\) are independent.

\(\Sigma_{ij}=cov(y_i,y_j)\).

Two variables are independent when the value of one does not change the distribution of the other.

With densities, independence means \(f(y_i,y_j)=f_i(y_i)f_j(y_j)\).

This property is true only when \(\mathbf{y}\) is MVN.

**How** Added

Use \(\boldsymbol\Sigma\) to find independent components

- Confirm that the vector is MVN.
- For \(\mathbf{C}\mathbf{y}+\mathbf{d}\), find its covariance matrix by linearity.
- Read the off-diagonal entry \(\Sigma_{ij}\).
- If \(\Sigma_{ij}=0\), components \(i\) and \(j\) are independent.

**Self-check:** \(\Sigma_{ij}=\Sigma_{ji}=0\).

**Example** Added

In 05.1, \(\Sigma_{12}=2\ne0\). Make a linear transformation with zero covariance: \(\mathbf{w}=\mathbf{C}_2\mathbf{y}\), \(\mathbf{C}_2=\left[\begin{array}{cc}1&-1\\0&1\end{array}\right]\), \(\mathbf{w}=(y_1-y_2,\ y_2)^T\).

Step 1: By linearity, \(\mathbf{w}\sim MVN(\mathbf{C}_2\boldsymbol\mu,\ \mathbf{C}_2\boldsymbol\Sigma\mathbf{C}_2^T)\).

Step 2: \(\mathbf{C}_2\boldsymbol\mu=(1-2,\ 2)^T=(-1,\ 2)^T\).

Step 3: \(\mathbf{C}_2\boldsymbol\Sigma=\left[\begin{array}{cc}4-2&2-2\\2&2\end{array}\right]=\left[\begin{array}{cc}2&0\\2&2\end{array}\right]\).

Step 4: \(\mathbf{C}_2^T=\left[\begin{array}{cc}1&0\\-1&1\end{array}\right]\).

Step 5: \(\mathbf{C}_2\boldsymbol\Sigma\mathbf{C}_2^T=\left[\begin{array}{cc}2-0&0+0\\2-2&0+2\end{array}\right]=\left[\begin{array}{cc}2&0\\0&2\end{array}\right]\).

Step 6: The off-diagonal entries are 0.

Step 7: \(w_1=y_1-y_2\) and \(w_2=y_2\) are independent.

Figure 05.1, right panel: the same 400 draws as \(\mathbf{w}\). The cloud does not slope. Orange: the mean \((-1,2)^T\).

**Why** Added

Proof for \(n=2\), with \(\Sigma_{12}=\Sigma_{21}=0\): \(\boldsymbol\Sigma=\left[\begin{array}{cc}\Sigma_{11}&0\\0&\Sigma_{22}\end{array}\right]\).

1

\[|\boldsymbol\Sigma|=\Sigma_{11}\Sigma_{22}-0\cdot0=\Sigma_{11}\Sigma_{22}\]

2

\[\boldsymbol\Sigma^{-1}=\frac{1}{\Sigma_{11}\Sigma_{22}}\left[\begin{array}{cc}\Sigma_{22}&0\\0&\Sigma_{11}\end{array}\right]\]

\(2\times2\) inverse formula (02.4).

3

\[=\left[\begin{array}{cc}1/\Sigma_{11}&0\\0&1/\Sigma_{22}\end{array}\right]\]

4

\[(\mathbf{y}-\boldsymbol\mu)^T\boldsymbol\Sigma^{-1}(\mathbf{y}-\boldsymbol\mu)=\frac{(y_1-\mu_1)^2}{\Sigma_{11}}+\frac{(y_2-\mu_2)^2}{\Sigma_{22}}\]

5

\[f(\mathbf{y})=\frac{1}{2\pi(\Sigma_{11}\Sigma_{22})^{1/2}}\exp\left\{-\frac{(y_1-\mu_1)^2}{2\Sigma_{11}}-\frac{(y_2-\mu_2)^2}{2\Sigma_{22}}\right\}\]

p.36 density, \((2\pi)^{n/2}=2\pi\).

6

\[=\frac{1}{\sqrt{2\pi}\sqrt{\Sigma_{11}}}\exp\left\{-\frac{(y_1-\mu_1)^2}{2\Sigma_{11}}\right\}\cdot\frac{1}{\sqrt{2\pi}\sqrt{\Sigma_{22}}}\exp\left\{-\frac{(y_2-\mu_2)^2}{2\Sigma_{22}}\right\}\]

\(e^{a+b}=e^ae^b\).

7

\[=f_1(y_1)\,f_2(y_2)\]

Marginal densities (p.38). ∎

### 05.7 Practice Added

**Q1.** Let \(\mathbf{y}=(y_1,y_2)^T\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\) with \(\boldsymbol\mu=\left[\begin{array}{c}1\\2\end{array}\right]\) and \(\boldsymbol\Sigma=\left[\begin{array}{cc}4&2\\2&2\end{array}\right]\). Find the distribution of \(u=2y_1+y_2-1\).

Answer

Step 1: \(u=\mathbf{C}\mathbf{y}+\mathbf{d}\), \(\mathbf{C}=(2,\ 1)\), \(\mathbf{d}=-1\).

Step 2: \(\mathbf{C}\boldsymbol\mu+\mathbf{d}=2\cdot1+1\cdot2-1=3\).

Step 3: \(\mathbf{C}\boldsymbol\Sigma=(2\cdot4+1\cdot2,\ 2\cdot2+1\cdot2)=(10,\ 6)\).

Step 4: \(\mathbf{C}\boldsymbol\Sigma\mathbf{C}^T=10\cdot2+6\cdot1=26\).

Step 5: By linearity (p.37), \(u\sim N(3,\ 26)\).

**Q2.** Let \(\mathbf{y}=(y_1,y_2,y_3)^T\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\) with \(\boldsymbol\mu=\left[\begin{array}{c}0\\1\\-1\end{array}\right]\) and \(\boldsymbol\Sigma=\left[\begin{array}{ccc}3&1&0\\1&2&0\\0&0&5\end{array}\right]\). (a) Give the distribution of \(\tilde{\mathbf{y}}=(y_1,y_3)^T\). (b) Which pairs of components are independent by the Independence property?

Answer

(a) Step 1: Index set \(\{1,3\}\).

(a) Step 2: \(\tilde{\boldsymbol\mu}=(\mu_1,\mu_3)^T=(0,\ -1)^T\).

(a) Step 3: Rows and columns 1 and 3: \(\tilde{\boldsymbol\Sigma}=\left[\begin{array}{cc}\Sigma_{11}&\Sigma_{13}\\\Sigma_{31}&\Sigma_{33}\end{array}\right]=\left[\begin{array}{cc}3&0\\0&5\end{array}\right]\).

(a) Step 4: By p.38, \(\tilde{\mathbf{y}}\sim MVN\left(\left[\begin{array}{c}0\\-1\end{array}\right],\left[\begin{array}{cc}3&0\\0&5\end{array}\right]\right)\).

(b) \(\Sigma_{13}=\Sigma_{31}=0\): \(y_1\) and \(y_3\) are independent (p.40).

(b) \(\Sigma_{23}=\Sigma_{32}=0\): \(y_2\) and \(y_3\) are independent (p.40).

(b) \(\Sigma_{12}=1\): the property does not apply to \((y_1,y_2)\).

**Q3.** Let \(z_1,z_2\overset{iid}{\sim}N(0,1)\), \(\mathbf{A}=\left[\begin{array}{cc}1&0\\1&1\end{array}\right]\), \(\boldsymbol\mu=\left[\begin{array}{c}0\\0\end{array}\right]\), \(\mathbf{y}=\mathbf{A}\mathbf{z}+\boldsymbol\mu\). Find \(\boldsymbol\Sigma\) and \(f(\mathbf{y})\) at \(\mathbf{y}=(1,1)^T\).

Answer

Step 1: \(\boldsymbol\Sigma=\mathbf{A}\mathbf{A}^T\). \(\Sigma_{11}=1\cdot1+0\cdot0=1\). \(\Sigma_{12}=\Sigma_{21}=1\cdot1+0\cdot1=1\). \(\Sigma_{22}=1\cdot1+1\cdot1=2\).

\(\boldsymbol\Sigma=\left[\begin{array}{cc}1&1\\1&2\end{array}\right]\).

Step 2: \(\mathbf{y}-\boldsymbol\mu=(1,1)^T\).

Step 3: \(|\boldsymbol\Sigma|=1\cdot2-1\cdot1=1\).

Step 4: \(\boldsymbol\Sigma^{-1}=\frac11\left[\begin{array}{cc}2&-1\\-1&1\end{array}\right]=\left[\begin{array}{cc}2&-1\\-1&1\end{array}\right]\).

Step 5: \(\boldsymbol\Sigma^{-1}(1,1)^T=(2-1,\ -1+1)^T=(1,\ 0)^T\).

Step 6: \(q=1\cdot1+1\cdot0=1\).

Step 7: Denominator \((2\pi)^1\cdot1^{1/2}=2\pi=6.283185\).

Step 8: \(e^{-q/2}=e^{-0.5}=0.606531\).

Step 9: \(f=\dfrac{0.606531}{6.283185}=0.096532\).

## 06 · Exercises on the MVN, MLR as an MVN model, and practice

Two results from unit 05: the definition (p.36), \(\mathbf{y}=\mathbf{A}\mathbf{z}+\boldsymbol\mu\sim MVN(\boldsymbol\mu,\mathbf{A}\mathbf{A}^T)\) for \(z_i\overset{iid}{\sim}N(0,1)\); and linearity (p.37), \(\mathbf{C}\mathbf{y}+\mathbf{d}\sim MVN(\mathbf{C}\boldsymbol\mu+\mathbf{d},\ \mathbf{C}\boldsymbol\Sigma\mathbf{C}^T)\).

### 06.1 Exercise: \(X_2\) has a normal distribution Slides p.41–42

**What (1)** Slides p.41

Exercise · Lecture 5 · p.41 Let r.v.'s \(X_1\sim N(0,1)\) and \(B\sim Bernoulli(0.5)\), independent of \(X_1\). Now consider r.v. \(X_2=\left\{\begin{array}{ll}X_1 & \text{if } B=0\\ -X_1 & \text{if } B=1\end{array}\right.\)
\(X_2\) is clearly Normally distributed (we've just swapped half the signs to be opposite, and since it's symmetric, the distribution is unchanged.)

"r.v." means random variable.

\(B\sim Bernoulli(0.5)\): \(B\) is 0 or 1, with \(P(B=0)=P(B=1)=0.5\) (one fair coin toss).

Symmetric: the \(N(0,1)\) density has the same shape on each side of 0. \(X_1\) and \(-X_1\) have the same distribution.

\(X_2\) is \(X_1\) with a random sign. The sign change does not change a symmetric distribution.

**What (2) · the visual check** Slides p.42

A simulation makes many random draws with a computer and shows their pattern.

A density curve is a curve whose area over an interval is the probability of that interval.

Slides p.42 shows a density-scale histogram of the draws of \(X_2\), with the \(N(0,1)\) density curve.

The bars follow the curve. The highest bars are near 0, at height about 0.4.

The \(N(0,1)\) density at 0 is \(1/\sqrt{2\pi}\approx0.3989\).

**How** Added

A cumulative distribution function (CDF) gives \(P(X\le t)\) for each \(t\). Equal CDFs at all \(t\) mean equal distributions. \(\Phi(t)=P(X_1\le t)\) is the CDF of \(N(0,1)\).

Find \(P(X_2\le t)\) for one value of \(t\)

- Divide the event into the cases \(B=0\) and \(B=1\).
- In each case, replace \(X_2\) by its rule.
- Use independence to write each case as a product of two probabilities.
- Change \(P(-X_1\le t)\) to \(P(X_1\ge -t)\), then to \(\Phi(t)\) by symmetry.
- Add the two cases.

**Self-check:** \(P(B=0)+P(B=1)=1\). The result equals \(\Phi(t)\).

**Example · \(t=1\)** Added

Table value: \(\Phi(1)=0.8413\).

Step 1: \(P(X_2\le1)=P(X_2\le1,\ B=0)+P(X_2\le1,\ B=1)\).

Step 2: \(=P(X_1\le1,\ B=0)+P(-X_1\le1,\ B=1)\).

Step 3: \(=P(X_1\le1)\times0.5+P(-X_1\le1)\times0.5\).

Step 4: \(P(-X_1\le1)=P(X_1\ge-1)=1-\Phi(-1)=1-0.1587=0.8413=\Phi(1)\) (Figure 06.1).

Step 5: \(P(X_2\le1)=0.8413\times0.5+0.8413\times0.5=0.42065+0.42065=0.8413\).

Self-check: \(0.5+0.5=1\); the result equals \(\Phi(1)\).

[figure]
Figure 06.1 · The \(N(0,1)\) density. Blue: area left of \(-1\), 0.1587. Orange: area right of \(1\), also 0.1587: \(P(X_1\ge-1)=P(X_1\le1)\).

**Why** Added

1

\[P(X_2\le t)=P(X_2\le t,\ B=0)+P(X_2\le t,\ B=1)\]

\(B\) is 0 or 1.

2

\[=P(X_1\le t,\ B=0)+P(-X_1\le t,\ B=1)\]

The rule for \(X_2\).

3

\[=P(X_1\le t)P(B=0)+P(-X_1\le t)P(B=1)\]

\(B\) and \(X_1\) are independent.

4

\[=\tfrac12\,\Phi(t)+\tfrac12\,P(-X_1\le t)\]

5

\[=\tfrac12\,\Phi(t)+\tfrac12\,P(X_1\le t)\]

Symmetry.

6

\[=\tfrac12\,\Phi(t)+\tfrac12\,\Phi(t)=\Phi(t)\]

\(X_2\sim N(0,1)\). ∎

### 06.2 Exercise continued: \(Y=X_1+X_2\) is not normal Slides p.43–44

**What** Slides p.43–44

Exercise continued · Lecture 5 · p.43–44 Now let \(Y=X_1+X_2\). Is \(Y\) Normal? No!
How do we know?
• \(P(Y=0)=P(B=1)=1/2\)
What's going on here?
• While \(X_1\) and \(X_2\) are each normally distributed, \(\mathbf{x}=(X_1,X_2)^T\) is not multivariate normal.
• I.e. cannot find \(\mathbf{A}_{2\times k}\) s.t. \(\mathbf{x}=\mathbf{A}\mathbf{z}\) for \(\mathbf{z}=(Z_1,\dots,Z_k)^T\), \(Z_i\overset{iid}{\sim}N(0,1)\)

If \(B=1\), \(X_2=-X_1\) and \(Y=X_1-X_1=0\). This case has probability 1/2.

A normal variable has probability 0 at each single value if its variance is positive, and 1 if its variance is 0 (a constant).

\(P(Y=0)=1/2\) is neither 0 nor 1. \(Y\) is not normal.

\(Y=(1,1)\,\mathbf{x}\) is a linear combination of \(\mathbf{x}\). If \(\mathbf{x}\) were MVN, linearity (p.37) would make \(Y\) normal. \(\mathbf{x}\) is not MVN.

"cannot find \(\mathbf{A}_{2\times k}\)": no constant \(2\times k\) matrix \(\mathbf{A}\) gives \(\mathbf{x}=\mathbf{A}\mathbf{z}\) (p.36).

**How** Added

Use linearity to show that a vector \(\mathbf{x}\) is not MVN

- Select a constant row vector \(\mathbf{C}\). Let \(u=\mathbf{C}\mathbf{x}\), for example \(\mathbf{C}=(1,1)\), \(u=Y\).
- Assume that \(\mathbf{x}\) is MVN. Then \(u\) is normal (p.37, \(\mathbf{d}=0\)).
- Calculate one probability of \(u\), for example \(P(Y=0)\) over the cases \(B=0\) and \(B=1\).
- If the result is neither 0 nor 1, the assumption in step 2 is false.

**Self-check:** \(\mathbf{C}\) is constant: no \(B\) or \(X_1\) in it. \(P(B=0)+P(B=1)=1\).

**Example · Six hand-made values** Added

Data: \(X_1=(1.2,\ -0.5,\ 0.8,\ -1.5,\ 2.0,\ 0.3)\) and \(B=(0,\ 1,\ 1,\ 0,\ 1,\ 0)\).

Step 1: \(\mathbf{C}=(1,1)\): \(Y=X_1+X_2\).

Step 2: Assume \(\mathbf{x}\) is MVN. Then \(Y\) is normal.

Step 3a, \(B=0\) (rows 1, 4, 6): \(X_2=X_1\), \(Y=2X_1\): \(2\times1.2=2.4\), \(2\times(-1.5)=-3.0\), \(2\times0.3=0.6\).

Step 3b, \(B=1\) (rows 2, 3, 5): \(X_2=-X_1\): \(0.5\), \(-0.8\), \(-2.0\). \(Y\): \(-0.5+0.5=0\), \(0.8-0.8=0\), \(2.0-2.0=0\).

Step 3c: \(Y=(2.4,\ 0,\ 0,\ -3.0,\ 0,\ 0.6)\). Each row with \(B=1\) gives \(Y=0\) exactly.

Step 4: \(P(Y=0)=P(B=1)=1/2\), neither 0 nor 1. \(\mathbf{x}\) is not MVN.

[figure]
Figure 06.2 · Distribution of \(Y=X_1+X_2\). Purple bar: probability 1/2 at the single value 0 (\(B=1\)). Blue curve: the spread-out part \(Y=2X_1\) (\(B=0\)). A normal distribution has no probability at a single value.

**Why** Added

First \(P(Y=0)\), then no matrix \(\mathbf{A}\) exists.

1

\[P(Y=0)=P(Y=0,\ B=0)+P(Y=0,\ B=1)\]

\(B\) is 0 or 1.

2

\[=P(X_1+X_1=0,\ B=0)+P(X_1-X_1=0,\ B=1)\]

The rule for \(X_2\).

3

\[=P(2X_1=0,\ B=0)+P(0=0,\ B=1)\]

4

\[=P(X_1=0)P(B=0)+P(B=1)\]

Independence; \(0=0\) is always true.

5

\[=0\times\tfrac12+\tfrac12=\tfrac12\]

\(P(X_1=0)=0\). ∎

1

\[\text{Assume } \mathbf{x}=\mathbf{A}\mathbf{z},\quad \mathbf{A}_{2\times k},\ Z_i\overset{iid}{\sim}N(0,1)\]

Then \(\mathbf{x}\sim MVN(\mathbf{0},\mathbf{A}\mathbf{A}^T)\) (p.36).

2

\[Y=(1,1)\,\mathbf{x}\]

3

\[Y\sim MVN\big((1,1)\mathbf{0},\ (1,1)\mathbf{A}\mathbf{A}^T(1,1)^T\big)\]

Linearity (p.37), \(\mathbf{d}=0\).

4

\[Y\sim N\big(0,\ (1,1)\mathbf{A}\mathbf{A}^T(1,1)^T\big)\]

One-component MVN is normal.

5

\[P(Y=0)\in\{0,\ 1\}\]

0 if variance positive; 1 if 0.

6

\[P(Y=0)=\tfrac12\notin\{0,\ 1\}\]

Contradiction: no \(\mathbf{A}_{2\times k}\) exists. ∎

MVN is a property of the full vector, not of each component. The regression model assumes that the full error vector is MVN.

### 06.3 Multiple linear regression as an MVN model Slides p.45

**What** Slides p.45

Multiple Linear Regression · Lecture 5 · p.45 \[y_i=\beta_0+\beta_1x_{i1}+\dots+\beta_px_{ip}+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] We can write this: \[\left[\begin{array}{c}y_1\\y_2\\\vdots\\y_n\end{array}\right]=\left[\begin{array}{ccccc}1&x_{11}&x_{12}&\dots&x_{1p}\\1&x_{21}&x_{22}&\dots&x_{2p}\\\vdots&\vdots&\vdots&\vdots&\vdots\\1&x_{n1}&x_{n2}&\dots&x_{np}\end{array}\right]\left[\begin{array}{c}\beta_0\\\beta_1\\\vdots\\\beta_p\end{array}\right]+\left[\begin{array}{c}\epsilon_1\\\epsilon_2\\\vdots\\\epsilon_n\end{array}\right]\] Or more simply: \[\mathbf{y}=\mathbf{X}\boldsymbol\beta+\boldsymbol\epsilon,\quad \boldsymbol\epsilon\sim MVN(\mathbf{0},\sigma^2\mathbf{I})\quad\iff\quad \mathbf{y}\sim MVN(\mathbf{X}\boldsymbol\beta,\sigma^2\mathbf{I})\]

Page 45 repeats the matrix form of page 8 (01.6) and adds the MVN statement.

\(\sigma^2\mathbf{I}\) has \(\sigma^2\) on the diagonal and 0 elsewhere: each error has variance \(\sigma^2\); each pair has covariance 0.

\(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\) gives \(\boldsymbol\epsilon=\sigma\mathbf{I}\mathbf{z}\): MVN by p.36. \(\mathbf{y}\) is \(\boldsymbol\epsilon\) plus the constant \(\mathbf{X}\boldsymbol\beta\). By linearity, \(\mathbf{y}\) is MVN with mean \(\mathbf{X}\boldsymbol\beta\) and the same covariance.

**How** Added

Write the distribution of \(\mathbf{y}\) from the distribution of \(\boldsymbol\epsilon\)

- Write \(\mathbf{y}=\mathbf{X}\boldsymbol\beta+\boldsymbol\epsilon\), \(\boldsymbol\epsilon\sim MVN(\mathbf{0},\sigma^2\mathbf{I})\).
- Write \(\mathbf{y}=\mathbf{C}\boldsymbol\epsilon+\mathbf{d}\), with \(\mathbf{C}=\mathbf{I}\), \(\mathbf{d}=\mathbf{X}\boldsymbol\beta\).
- Mean: \(\mathbf{C}\mathbf{0}+\mathbf{d}=\mathbf{X}\boldsymbol\beta\).
- Covariance: \(\mathbf{C}(\sigma^2\mathbf{I})\mathbf{C}^T=\mathbf{I}\sigma^2\mathbf{I}\mathbf{I}=\sigma^2\mathbf{I}\).
- Write \(\mathbf{y}\sim MVN(\mathbf{X}\boldsymbol\beta,\sigma^2\mathbf{I})\).

**Self-check:** \(\mathbf{d}\) is constant. The mean is \(n\times1\). The covariance is \(n\times n\), \(\sigma^2\) on the diagonal, 0 elsewhere.

**Example · A small data set** Added

\(n=3\), \(p=2\), \((x_{i1},x_{i2})=(2,1),\ (3,0),\ (5,4)\).

Step 1: \(\left[\begin{array}{c}y_1\\y_2\\y_3\end{array}\right]=\left[\begin{array}{ccc}1&2&1\\1&3&0\\1&5&4\end{array}\right]\left[\begin{array}{c}\beta_0\\\beta_1\\\beta_2\end{array}\right]+\left[\begin{array}{c}\epsilon_1\\\epsilon_2\\\epsilon_3\end{array}\right]\), \(\boldsymbol\epsilon\sim MVN(\mathbf{0},\sigma^2\mathbf{I})\).

Step 2: \(\mathbf{C}=\mathbf{I}\) (\(3\times3\)), \(\mathbf{d}=\mathbf{X}\boldsymbol\beta\).

Step 3: \(\mathbf{X}\boldsymbol\beta=\left[\begin{array}{c}\beta_0+2\beta_1+1\beta_2\\\beta_0+3\beta_1+0\beta_2\\\beta_0+5\beta_1+4\beta_2\end{array}\right]=\left[\begin{array}{c}\beta_0+2\beta_1+\beta_2\\\beta_0+3\beta_1\\\beta_0+5\beta_1+4\beta_2\end{array}\right]\).

Step 4: \(\sigma^2\mathbf{I}=\left[\begin{array}{ccc}\sigma^2&0&0\\0&\sigma^2&0\\0&0&\sigma^2\end{array}\right]\).

Step 5: \(\left[\begin{array}{c}y_1\\y_2\\y_3\end{array}\right]\sim MVN\left(\left[\begin{array}{c}\beta_0+2\beta_1+\beta_2\\\beta_0+3\beta_1\\\beta_0+5\beta_1+4\beta_2\end{array}\right],\ \left[\begin{array}{ccc}\sigma^2&0&0\\0&\sigma^2&0\\0&0&\sigma^2\end{array}\right]\right)\).

**Self-check:** mean \(3\times1\), covariance \(3\times3\).

**Self-check:** the marginal property (p.38) keeps only \(y_1\):

\(y_1\sim N(\beta_0+2\beta_1+\beta_2,\ \sigma^2)\), the model for one observation.

**Why** Added

Lines 1–3 give "⟹"; lines 4–6 give "⟸". Both use linearity (p.37).

1

\[\mathbf{y}=\mathbf{I}\boldsymbol\epsilon+\mathbf{X}\boldsymbol\beta,\quad \boldsymbol\epsilon\sim MVN(\mathbf{0},\sigma^2\mathbf{I})\]

2

\[\mathbf{y}\sim MVN\big(\mathbf{I}\mathbf{0}+\mathbf{X}\boldsymbol\beta,\ \mathbf{I}(\sigma^2\mathbf{I})\mathbf{I}^T\big)\]

Linearity, \(\mathbf{C}=\mathbf{I}\), \(\mathbf{d}=\mathbf{X}\boldsymbol\beta\).

3

\[\mathbf{y}\sim MVN(\mathbf{X}\boldsymbol\beta,\ \sigma^2\mathbf{I})\]

\(\mathbf{I}\mathbf{0}=\mathbf{0}\), \(\mathbf{I}^T=\mathbf{I}\), \(\mathbf{I}\mathbf{I}=\mathbf{I}\). ⟹

4

\[\boldsymbol\epsilon=\mathbf{I}\mathbf{y}-\mathbf{X}\boldsymbol\beta,\quad \mathbf{y}\sim MVN(\mathbf{X}\boldsymbol\beta,\sigma^2\mathbf{I})\]

5

\[\boldsymbol\epsilon\sim MVN\big(\mathbf{I}\mathbf{X}\boldsymbol\beta-\mathbf{X}\boldsymbol\beta,\ \mathbf{I}(\sigma^2\mathbf{I})\mathbf{I}^T\big)\]

Linearity, \(\mathbf{C}=\mathbf{I}\), \(\mathbf{d}=-\mathbf{X}\boldsymbol\beta\).

6

\[\boldsymbol\epsilon\sim MVN(\mathbf{0},\ \sigma^2\mathbf{I})\]

⟸ ∎

Later lectures use \(\mathbf{y}\sim MVN(\mathbf{X}\boldsymbol\beta,\sigma^2\mathbf{I})\) to find the distribution of \(\hat{\boldsymbol\beta}\).

### 06.4 Practice Q1: mean vectors and covariance matrices Slides p.46–47

Slides p.46 is the title page "Practice". Slides p.47–48 give the two questions.

**What** Slides p.47

Practice Q1 · Lecture 5 · p.47 Let \(\mathbf{y}=(y_1,y_2,y_3)^T\) such that \(E[\mathbf{y}]=(1,2,2)^T\) and \(Var(\mathbf{y})=\left[\begin{array}{ccc}4&0&1\\0&3&-1\\1&-1&4\end{array}\right]\) and let \(\mathbf{a}=(1,2,3)^T\) and \(\mathbf{A}=\left[\begin{array}{ccc}1&-1&0\\0&1&-1\\1&0&-1\\1&1&1\end{array}\right]\). Compute \(E[\mathbf{a}^T\mathbf{y}]\), \(E[\mathbf{A}\mathbf{y}]\), \(Var(\mathbf{a}^T\mathbf{y})\), \(Var(\mathbf{A}\mathbf{y})\)

\(\mathbf{a}^T\mathbf{y}=y_1+2y_2+3y_3\) is one number. \(\mathbf{A}\mathbf{y}\) is \(4\times1\).

Formulas: \(E[\mathbf{a}^T\mathbf{y}+b]=\mathbf{a}^TE[\mathbf{y}]+b\), \(Var(\mathbf{a}^T\mathbf{y})=\mathbf{a}^TVar(\mathbf{y})\mathbf{a}\) (p.28–29); \(E[\mathbf{A}\mathbf{y}]=\mathbf{A}E[\mathbf{y}]\), \(Var(\mathbf{A}\mathbf{y})=\mathbf{A}Var(\mathbf{y})\mathbf{A}^T\) (p.31).

**How** Added

Let \(\mathbf{V}=Var(\mathbf{y})\).

Practice Q1

- \(E[\mathbf{a}^T\mathbf{y}]\): calculate \(\mathbf{a}^TE[\mathbf{y}]\) (\(b=0\)).
- \(E[\mathbf{A}\mathbf{y}]\): do step 1 with each row of \(\mathbf{A}\).
- \(Var(\mathbf{a}^T\mathbf{y})\): calculate \(\mathbf{V}\mathbf{a}\) (\(3\times1\)).
- Calculate \(\mathbf{a}^T(\mathbf{V}\mathbf{a})\).
- \(Var(\mathbf{A}\mathbf{y})\): calculate \(\mathbf{A}\mathbf{V}\) (\(4\times3\)).
- Row \(i\) of \(\mathbf{A}\mathbf{V}\): add the rows of \(\mathbf{V}\), with row \(i\) of \(\mathbf{A}\) as weights.
- Calculate \((\mathbf{A}\mathbf{V})\mathbf{A}^T\) (\(4\times4\)).
- Entry \((i,j)\): row \(i\) of \(\mathbf{A}\mathbf{V}\) times row \(j\) of \(\mathbf{A}\), term by term, added.

**Self-check:** \(Var(\mathbf{a}^T\mathbf{y})\ge0\) (p.25). \(Var(\mathbf{A}\mathbf{y})\) is symmetric (p.24) with diagonal \(\ge0\).

**Example · the full calculation** Added

Answer: Practice Q1

Step 1: \(E[\mathbf{a}^T\mathbf{y}]=\mathbf{a}^TE[\mathbf{y}]=1\times1+2\times2+3\times2=1+4+6=11\).

Step 2, row 1: \(1\times1+(-1)\times2+0\times2=1-2+0=-1\).

Step 2, row 2: \(0\times1+1\times2+(-1)\times2=0+2-2=0\).

Step 2, row 3: \(1\times1+0\times2+(-1)\times2=1+0-2=-1\).

Step 2, row 4: \(1\times1+1\times2+1\times2=1+2+2=5\). \(E[\mathbf{A}\mathbf{y}]=(-1,\ 0,\ -1,\ 5)^T\).

Step 3: \(\mathbf{V}\mathbf{a}=\left[\begin{array}{c}4\times1+0\times2+1\times3\\0\times1+3\times2+(-1)\times3\\1\times1+(-1)\times2+4\times3\end{array}\right]=\left[\begin{array}{c}4+0+3\\0+6-3\\1-2+12\end{array}\right]=\left[\begin{array}{c}7\\3\\11\end{array}\right]\).

Step 4: \(Var(\mathbf{a}^T\mathbf{y})=\mathbf{a}^T\mathbf{V}\mathbf{a}=1\times7+2\times3+3\times11=7+6+33=46\).

Step 5: Rows of \(\mathbf{V}\): \(\mathbf{v}_1=(4,0,1)\), \(\mathbf{v}_2=(0,3,-1)\), \(\mathbf{v}_3=(1,-1,4)\).

Step 6, row \((1,-1,0)\): \(\mathbf{v}_1-\mathbf{v}_2=(4-0,\ 0-3,\ 1+1)=(4,-3,2)\).

Step 6, row \((0,1,-1)\): \(\mathbf{v}_2-\mathbf{v}_3=(0-1,\ 3+1,\ -1-4)=(-1,4,-5)\).

Step 6, row \((1,0,-1)\): \(\mathbf{v}_1-\mathbf{v}_3=(4-1,\ 0+1,\ 1-4)=(3,1,-3)\).

Step 6, row \((1,1,1)\): \(\mathbf{v}_1+\mathbf{v}_2+\mathbf{v}_3=(4+0+1,\ 0+3-1,\ 1-1+4)=(5,2,4)\).

Steps 7–8, row \((4,-3,2)\) with the rows of \(\mathbf{A}\): \(4+3+0=7\); \(0-3-2=-5\); \(4+0-2=2\); \(4-3+2=3\).

Steps 7–8, row \((-1,4,-5)\): \(-1-4+0=-5\); \(0+4+5=9\); \(-1+0+5=4\); \(-1+4-5=-2\).

Steps 7–8, row \((3,1,-3)\): \(3-1+0=2\); \(0+1+3=4\); \(3+0+3=6\); \(3+1-3=1\).

Steps 7–8, row \((5,2,4)\): \(5-2+0=3\); \(0+2-4=-2\); \(5+0-4=1\); \(5+2+4=11\).
\[Var(\mathbf{A}\mathbf{y})=\left[\begin{array}{cccc}7&-5&2&3\\-5&9&4&-2\\2&4&6&1\\3&-2&1&11\end{array}\right]\]
Self-check: \(46\ge0\). Symmetric: entries \((1,2)\) and \((2,1)\) are both \(-5\).

Self-check: diagonal 7, 9, 6, 11 are all \(\ge0\).

**Why** Slides p.34–35

Section 04.6, Why (2), derives \(Var(\mathbf{A}\mathbf{y})\). \(Var(\mathbf{a}^T\mathbf{y})\) is the case \(\mathbf{A}=\mathbf{a}^T\) (04.7, Q3).

### 06.5 Practice Q2: the cross-covariance matrix Slides p.48

**What** Slides p.48

Practice Q2 · Lecture 5 · p.48 Suppose \(\mathbf{x}=(x_1,\dots,x_n)^T\) is a random vector with \(E[\mathbf{x}]=\boldsymbol\mu\) and \(var(\mathbf{x})=\mathbf{V}\). Let \(\mathbf{y}=\mathbf{A}_{p\times n}\mathbf{x}\) and \(\mathbf{w}=\mathbf{B}_{q\times n}\mathbf{x}\). Let \(\mathbf{C}\) denote the "cross-covariance" matrix, where \(\mathbf{C}_{ij}=cov(y_i,w_j)\). (You can think of this as the off-diagonal block of the variance matrix of \((\mathbf{y}^T,\mathbf{w}^T)^T\), where the diagonal blocks would be \(var(\mathbf{y})\) and \(var(\mathbf{w})\).) Write \(\mathbf{C}\) in terms of \(\boldsymbol\mu,\mathbf{V},\mathbf{A},\mathbf{B}\)

The cross-covariance matrix \(\mathbf{C}\) (\(p\times q\)) has entry \((i,j)\) equal to \(cov(y_i,w_j)\).

Stack \(\mathbf{y}\) above \(\mathbf{w}\). The covariance matrix of this \((p+q)\times1\) vector has four blocks: \(var(\mathbf{y})\) top-left, \(var(\mathbf{w})\) bottom-right, \(\mathbf{C}\) top-right.

Formula from p.26, with \(\mathbf{x}\) as the random vector: \(cov(\mathbf{a}^T\mathbf{x}+c,\ \mathbf{b}^T\mathbf{x}+d)=\mathbf{a}^T\mathbf{V}\mathbf{b}\).

**How** Added

Practice Q2

- Let \(\mathbf{a}_i^T\) be row \(i\) of \(\mathbf{A}\) and \(\mathbf{b}_j^T\) row \(j\) of \(\mathbf{B}\).
- Write \(y_i=\mathbf{a}_i^T\mathbf{x}\) and \(w_j=\mathbf{b}_j^T\mathbf{x}\).
- Use p.26 with \(c=d=0\): \(\mathbf{C}_{ij}=\mathbf{a}_i^T\mathbf{V}\mathbf{b}_j\).
- \(\mathbf{b}_j\) is column \(j\) of \(\mathbf{B}^T\).
- Write \(\mathbf{C}=\mathbf{A}\mathbf{V}\mathbf{B}^T\).

**Self-check:** \((p\times n)(n\times n)(n\times q)=p\times q\). No \(\boldsymbol\mu\). If \(\mathbf{B}=\mathbf{A}\), the answer is \(\mathbf{A}\mathbf{V}\mathbf{A}^T\).

**Example · The numbers of Q1** Added

Use the random vector and \(\mathbf{V}\) of Q1 as \(\mathbf{x}\) (\(n=3\)), the \(4\times3\) \(\mathbf{A}\) of Q1 (\(p=4\)), and \(\mathbf{B}=\mathbf{a}^T=(1,2,3)\) (\(q=1\)).

Answer: Practice Q2 and a numerical example

General answer: \(\mathbf{C}=\mathbf{A}\mathbf{V}\mathbf{B}^T\). No \(\boldsymbol\mu\).

Step 1: \(\mathbf{B}^T=\mathbf{a}=(1,2,3)^T\): \(\mathbf{C}=\mathbf{A}\mathbf{V}\mathbf{a}\) (\(4\times1\)).

Step 2: Q1 step 3: \(\mathbf{V}\mathbf{a}=(7,3,11)^T\).

Step 3, row \((1,-1,0)\): \(7-3+0=4\).

Step 3, row \((0,1,-1)\): \(0+3-11=-8\).

Step 3, row \((1,0,-1)\): \(7+0-11=-4\).

Step 3, row \((1,1,1)\): \(7+3+11=21\). \(\mathbf{C}=(4,\ -8,\ -4,\ 21)^T\).

Step 4: Stack \(\mathbf{A}\) above \(\mathbf{a}^T\): a \(5\times3\) matrix \(\mathbf{S}\). \(\mathbf{S}\mathbf{V}\mathbf{S}^T\) is the covariance matrix of \((\mathbf{y}^T,w)^T\).
\[\mathbf{S}\mathbf{V}\mathbf{S}^T=\left[\begin{array}{ccccc}7&-5&2&3&4\\-5&9&4&-2&-8\\2&4&6&1&-4\\3&-2&1&11&21\\4&-8&-4&21&46\end{array}\right]\]
Top-left \(4\times4\) block: \(Var(\mathbf{A}\mathbf{y})\) (Q1). Bottom-right 46: \(Var(\mathbf{a}^T\mathbf{y})\) (Q1).

Column 5, first four entries: \((4,-8,-4,21)=\mathbf{C}\).

Self-check: size \(4\times1=p\times q\).

**Why · \(\mathbf{C}=\mathbf{A}\mathbf{V}\mathbf{B}^T\)** Added

First by entries, then by matrices.

1

\[\mathbf{C}_{ij}=cov(y_i,w_j)\]

2

\[=cov(\mathbf{a}_i^T\mathbf{x},\ \mathbf{b}_j^T\mathbf{x})\]

Rows of \(\mathbf{A}\) and \(\mathbf{B}\).

3

\[=\mathbf{a}_i^T\mathbf{V}\mathbf{b}_j\]

p.26, \(c=d=0\).

4

\[=\sum_{k=1}^n\sum_{l=1}^n A_{ik}V_{kl}B_{jl}\]

5

\[=\sum_{k=1}^n\sum_{l=1}^n A_{ik}V_{kl}(B^T)_{lj}\]

\(B_{jl}=(B^T)_{lj}\).

6

\[=[\mathbf{A}\mathbf{V}\mathbf{B}^T]_{ij}\]

Matrix product, all \(i,j\). ∎

1

\[\mathbf{C}=E[(\mathbf{y}-E[\mathbf{y}])(\mathbf{w}-E[\mathbf{w}])^T]\]

Entry \((i,j)\) is \(cov(y_i,w_j)\).

2

\[=E[(\mathbf{A}\mathbf{x}-\mathbf{A}\boldsymbol\mu)(\mathbf{B}\mathbf{x}-\mathbf{B}\boldsymbol\mu)^T]\]

\(E[\mathbf{A}\mathbf{x}]=\mathbf{A}\boldsymbol\mu\) (p.31).

3

\[=E[\mathbf{A}(\mathbf{x}-\boldsymbol\mu)(\mathbf{x}-\boldsymbol\mu)^T\mathbf{B}^T]\]

4

\[=\mathbf{A}E[(\mathbf{x}-\boldsymbol\mu)(\mathbf{x}-\boldsymbol\mu)^T]\mathbf{B}^T\]

5

\[=\mathbf{A}\mathbf{V}\mathbf{B}^T\]

Line 3 removes \(\boldsymbol\mu\). ∎

### 06.6 Practice Added

**P1.** Use the data of Section 06.3: \((x_{i1},x_{i2})=(2,1),\ (3,0),\ (5,4)\). Assume \(\mathbf{y}=\mathbf{X}\boldsymbol\beta+\boldsymbol\epsilon\), \(\boldsymbol\epsilon\sim MVN(\mathbf{0},\sigma^2\mathbf{I})\). Find the distribution of \(y_1-y_2\).

Answer

Step 1: By 06.3, \(\mathbf{y}\sim MVN(\mathbf{X}\boldsymbol\beta,\sigma^2\mathbf{I})\), \(\mathbf{X}\boldsymbol\beta=(\beta_0+2\beta_1+\beta_2,\ \beta_0+3\beta_1,\ \beta_0+5\beta_1+4\beta_2)^T\).

Step 2: \(y_1-y_2=\mathbf{C}\mathbf{y}\), \(\mathbf{C}=(1,-1,0)\), \(\mathbf{d}=0\).

Step 3 (mean): \(\mathbf{C}\mathbf{X}\boldsymbol\beta=(\beta_0+2\beta_1+\beta_2)-(\beta_0+3\beta_1)=(2-3)\beta_1+\beta_2=-\beta_1+\beta_2\).

Step 4 (variance): \(\mathbf{C}(\sigma^2\mathbf{I})\mathbf{C}^T=\sigma^2(1^2+(-1)^2+0^2)=\sigma^2(1+1+0)=2\sigma^2\).

Result: \(y_1-y_2\sim N(-\beta_1+\beta_2,\ 2\sigma^2)\) (p.37). \(\beta_0\) cancels.

**P2.** Use \(\mathbf{y}\), \(E[\mathbf{y}]\), \(Var(\mathbf{y})\) from Practice Q1. Let \(u=2y_1-y_2+1\). Calculate \(E[u]\), \(Var(u)\), \(cov(u,y_3)\).

Answer

Step 1: \(u=\mathbf{b}^T\mathbf{y}+1\), \(\mathbf{b}=(2,-1,0)^T\).

Step 2: \(E[u]=\mathbf{b}^T\boldsymbol\mu+1=2\times1+(-1)\times2+0\times2+1=2-2+0+1=1\).

Step 3: \(\mathbf{V}\mathbf{b}=(4\times2+0\times(-1)+1\times0,\ 0\times2+3\times(-1)+(-1)\times0,\ 1\times2+(-1)\times(-1)+4\times0)^T=(8,-3,3)^T\).

Step 4: \(Var(u)=\mathbf{b}^T\mathbf{V}\mathbf{b}=2\times8+(-1)\times(-3)+0\times3=16+3+0=19\). The constant 1 does not change the variance.

Step 5: \(y_3=\mathbf{e}_3^T\mathbf{y}\), \(\mathbf{e}_3=(0,0,1)^T\). \(cov(u,y_3)=\mathbf{b}^T\mathbf{V}\mathbf{e}_3\) (p.26).

Step 6: \(\mathbf{V}\) is symmetric: \(\mathbf{b}^T\mathbf{V}\mathbf{e}_3\) is component 3 of \(\mathbf{V}\mathbf{b}\). \(cov(u,y_3)=3\).


---

<!-- L06 -->

STAT 331 · Lecture 6 · Multiple Linear Regression: Intro and Estimation

# Lecture 6: Multiple Linear Regression: Intro and Estimation

This lecture writes multiple linear regression in matrix form, estimates \(\boldsymbol\beta\) and \(\sigma^2\), and finds the properties of the estimators (Lecture 6 · p.1–41).

Contents
01 · Recap: matrix calculus, random vectors, and the multivariate normal 02 · Data example and interpreting regression coefficients 03 · Estimating β: least squares and maximum likelihood 04 · Properties of the LS estimator, fitted values, and residuals 05 · Estimating σ², calculating the estimates, and practice

## 01 · Recap: matrix calculus, random vectors, and the multivariate normal

Plan · Slides p.1–7

Step 1: Take the derivative of a scalar with respect to a vector (Slides p.3).

Step 2: Find the expectation and variance of a random vector after a linear change (Slides p.4).

Step 3: Define the multivariate normal distribution (Slides p.5).

Step 4: Use four properties of the multivariate normal (Slides p.6).

Step 5: Write the regression model as \(\boldsymbol{y}=\boldsymbol{X}\boldsymbol\beta+\boldsymbol\epsilon\) (Slides p.7).

The slides give no data. The examples use small 2×2 or 3×3 matrices.

### 01.1 Notation Slides p.1–2

Slide p.1: title "Lecture 6: Multiple Linear Regression: Intro & Estimation". Slide p.2: section page "Recap". Added

Vector: a column of numbers, with a bold lower-case name, for example \(\boldsymbol{y}=(y_1,\dots,y_k)^T\).

Matrix: a rectangular table of numbers, with a bold upper-case name, for example \(\boldsymbol{A}\). "\(k\times k\)" means \(k\) rows and \(k\) columns.

Transpose \(^T\): changes rows into columns. \(\boldsymbol{a}^T\) is a row.

Scalar: one number, with a plain name, for example \(z\) or \(\sigma^2\).

Identity matrix \(\boldsymbol{I}\): 1 on the diagonal, 0 at all other positions. Zero vector \(\boldsymbol{0}\): 0 at all positions.

### 01.2 Matrix calculus Slides p.3

**What** Slides p.3

A partial derivative \(\partial z/\partial y_j\) is the rate of change of \(z\) when only \(y_j\) changes. A symmetric matrix has \(\boldsymbol{A}^T=\boldsymbol{A}\), that is, \(a_{ij}=a_{ji}\).

Matrix Calculus · Lecture 6 · p.3 Let \(z=f(y_1,\dots,y_k)\) and \(\boldsymbol{y}=\left[\begin{array}{c}y_1\\ \vdots\\ y_k\end{array}\right]\), then \[\frac{\partial z}{\partial \boldsymbol{y}}=\left[\begin{array}{c}\frac{\partial z}{\partial y_1}\\ \frac{\partial z}{\partial y_2}\\ \vdots\\ \frac{\partial z}{\partial y_k}\end{array}\right]\]

- If \(z=\boldsymbol{a}^T\boldsymbol{y}\), where \(\boldsymbol{a}=(a_1,\dots,a_k)^T\) is a vector, then \(\frac{\partial z}{\partial \boldsymbol{y}}=\boldsymbol{a}\)
- If \(z=\boldsymbol{y}^T\boldsymbol{A}\boldsymbol{y}\) where \(\boldsymbol{A}\) is a \(k\times k\) matrix, then \(\frac{\partial z}{\partial \boldsymbol{y}}=\boldsymbol{A}\boldsymbol{y}+\boldsymbol{A}^T\boldsymbol{y}\)
and if \(\boldsymbol{A}\) is symmetric, then: \(\frac{\partial z}{\partial \boldsymbol{y}}=2\boldsymbol{A}\boldsymbol{y}\)

Linear form \(\boldsymbol{a}^T\boldsymbol{y}=a_1y_1+\dots+a_ky_k\): each term is a constant times one entry. Quadratic form \(\boldsymbol{y}^T\boldsymbol{A}\boldsymbol{y}\): each term is a constant times two entries.

**How** Added

How · Take the derivative with respect to a vector

- Find the type of \(z\): linear form or quadratic form.
- For a linear form, write \(\partial z/\partial\boldsymbol{y}=\boldsymbol{a}\).
- For a quadratic form, compare each \(a_{ij}\) with \(a_{ji}\). All equal: write \(2\boldsymbol{A}\boldsymbol{y}\). Else: write \(\boldsymbol{A}\boldsymbol{y}+\boldsymbol{A}^T\boldsymbol{y}\).
- Write the result as a \(k\times1\) column.

**Self-check:** The result has length \(k\).

**Self-check:** Expand \(z\) and find each \(\partial z/\partial y_j\). The result must agree with step 2 or 3.

**Example** Added

Let \(k=2\), \(\boldsymbol{y}=(y_1,y_2)^T\), and use the point \(\boldsymbol{y}=(1,2)^T\).

Example (i): linear form, \(\boldsymbol{a}=(3,5)^T\).

1

Expand \(z\) How step 1

\[z=\boldsymbol{a}^T\boldsymbol{y}=3y_1+5y_2\]

2

Partial derivatives Self-check 2

\[\frac{\partial z}{\partial y_1}=3,\qquad \frac{\partial z}{\partial y_2}=5\]

3

Column How step 2

\[\frac{\partial z}{\partial\boldsymbol{y}}=\left[\begin{array}{c}3\\5\end{array}\right]=\boldsymbol{a}\]

Example (ii): symmetric quadratic form, \(\boldsymbol{A}=\left[\begin{array}{cc}2&1\\1&3\end{array}\right]\), \(a_{12}=a_{21}=1\).

1

Expand \(z\) How step 1

\[z=\boldsymbol{y}^T\boldsymbol{A}\boldsymbol{y}=\left[\begin{array}{cc}y_1&y_2\end{array}\right]\left[\begin{array}{c}2y_1+y_2\\y_1+3y_2\end{array}\right]\]

\[=y_1(2y_1+y_2)+y_2(y_1+3y_2)\]

\[=2y_1^2+2y_1y_2+3y_2^2\]

2

Partial derivatives Self-check 2

\[\frac{\partial z}{\partial y_1}=4y_1+2y_2,\qquad \frac{\partial z}{\partial y_2}=2y_1+6y_2\]

3

Rule \(2\boldsymbol{A}\boldsymbol{y}\) How step 3

\[2\boldsymbol{A}\boldsymbol{y}=2\left[\begin{array}{c}2y_1+y_2\\y_1+3y_2\end{array}\right]=\left[\begin{array}{c}4y_1+2y_2\\2y_1+6y_2\end{array}\right]\]

Agrees with step 2.

4

Put in \(\boldsymbol{y}=(1,2)^T\)

\[z=2(1)^2+2(1)(2)+3(2)^2=2+4+12=18\]

\[\frac{\partial z}{\partial\boldsymbol{y}}=\left[\begin{array}{c}4(1)+2(2)\\2(1)+6(2)\end{array}\right]=\left[\begin{array}{c}8\\14\end{array}\right]\]

Example (iii): non-symmetric quadratic form, \(\boldsymbol{A}=\left[\begin{array}{cc}1&2\\0&3\end{array}\right]\), \(a_{12}=2\ne a_{21}=0\).

1

Expand \(z\) How step 1

\[z=\left[\begin{array}{cc}y_1&y_2\end{array}\right]\left[\begin{array}{c}y_1+2y_2\\3y_2\end{array}\right]\]

\[=y_1^2+2y_1y_2+3y_2^2\]

2

Partial derivatives Self-check 2

\[\frac{\partial z}{\partial y_1}=2y_1+2y_2,\qquad \frac{\partial z}{\partial y_2}=2y_1+6y_2\]

3

Rule \(\boldsymbol{A}\boldsymbol{y}+\boldsymbol{A}^T\boldsymbol{y}\) How step 3

\[\boldsymbol{A}\boldsymbol{y}+\boldsymbol{A}^T\boldsymbol{y}=\left[\begin{array}{c}y_1+2y_2\\3y_2\end{array}\right]+\left[\begin{array}{c}y_1\\2y_1+3y_2\end{array}\right]\]

\[=\left[\begin{array}{c}2y_1+2y_2\\2y_1+6y_2\end{array}\right]\]

\(\boldsymbol{A}^T=\left[\begin{array}{cc}1&0\\2&3\end{array}\right]\). Agrees with step 2.

4

Put in \(\boldsymbol{y}=(1,2)^T\)

\[z=1^2+2(1)(2)+3(2)^2=1+4+12=17\]

\[\frac{\partial z}{\partial\boldsymbol{y}}=\left[\begin{array}{c}2(1)+2(2)\\2(1)+6(2)\end{array}\right]=\left[\begin{array}{c}6\\14\end{array}\right]\]

**Why** Added

Linear form:

1

\[z=\boldsymbol{a}^T\boldsymbol{y}=\sum_{i=1}^k a_iy_i\]

2

\[\frac{\partial z}{\partial y_j}=a_j\]

Only term \(i=j\) contains \(y_j\).

3

\[\frac{\partial z}{\partial\boldsymbol{y}}=(a_1,\dots,a_k)^T=\boldsymbol{a}\]

Definition on p.3. ∎

Quadratic form. \(a_{ij}\) is the entry of \(\boldsymbol{A}\) in row \(i\), column \(j\).

1

\[z=\boldsymbol{y}^T\boldsymbol{A}\boldsymbol{y}=\sum_{i=1}^k\sum_{l=1}^k y_i\,a_{il}\,y_l\]

2

\[\frac{\partial z}{\partial y_j}=\sum_{l=1}^k a_{jl}y_l+\sum_{i=1}^k y_i a_{ij}\]

Product rule: \(y_j\) is in terms \(i=j\) and \(l=j\).

3

\[=(\boldsymbol{A}\boldsymbol{y})_j+\sum_{i=1}^k a_{ij}y_i\]

First sum: row \(j\) of \(\boldsymbol{A}\) times \(\boldsymbol{y}\).

4

\[=(\boldsymbol{A}\boldsymbol{y})_j+(\boldsymbol{A}^T\boldsymbol{y})_j\]

\(a_{ij}\) is entry \((j,i)\) of \(\boldsymbol{A}^T\).

5

\[\frac{\partial z}{\partial\boldsymbol{y}}=\boldsymbol{A}\boldsymbol{y}+\boldsymbol{A}^T\boldsymbol{y}\]

6

\[=\boldsymbol{A}\boldsymbol{y}+\boldsymbol{A}\boldsymbol{y}=2\boldsymbol{A}\boldsymbol{y}\]

Symmetric: \(\boldsymbol{A}^T=\boldsymbol{A}\). ∎

Unit 03 uses these rules on \(S(\boldsymbol\beta)\).

### 01.3 Properties of random vectors Slides p.4

**What** Slides p.4

A random variable is a number whose value comes from a random result. A random vector has random variables as entries. The expectation \(E[\cdot]\) is the long-run average, taken entry by entry for a vector.

The variance of a random variable is its expected squared distance from its expectation. The covariance \(\mathrm{cov}(y_i,y_j)=E[(y_i-E[y_i])(y_j-E[y_j])]\) shows how much two variables change together. The covariance matrix \(\mathrm{Var}(\boldsymbol{y})\) has entry \((i,j)\) equal to \(\mathrm{cov}(y_i,y_j)\), and variances on the diagonal. Below, \(\boldsymbol{a}\), \(\boldsymbol{b}\), and \(\boldsymbol{A}\) are constants.

Properties of Random Vectors · Lecture 6 · p.4

- \(E[\boldsymbol{a}]=\boldsymbol{a}\)
- \(E[\boldsymbol{a}^T\boldsymbol{y}+\boldsymbol{b}]=\boldsymbol{a}^TE[\boldsymbol{y}]+\boldsymbol{b}\)
- \(E[\boldsymbol{A}\boldsymbol{y}]=\boldsymbol{A}E[\boldsymbol{y}]\)
- \(\mathrm{Var}(\boldsymbol{y})=E[(\boldsymbol{y}-E[\boldsymbol{y}])(\boldsymbol{y}-E[\boldsymbol{y}])^T]\)
- \(\mathrm{Var}(\boldsymbol{a}^T\boldsymbol{y})=\boldsymbol{a}^T\mathrm{Var}(\boldsymbol{y})\boldsymbol{a}\)
- \(\mathrm{Var}(\boldsymbol{A}\boldsymbol{y})=\boldsymbol{A}\mathrm{Var}(\boldsymbol{y})\boldsymbol{A}^T\)

For the variance, \(\boldsymbol{A}\) goes on the left and \(\boldsymbol{A}^T\) on the right. \(\mathrm{Var}(\boldsymbol{a}^T\boldsymbol{y})\) is a scalar. \(\mathrm{Var}(\boldsymbol{A}\boldsymbol{y})\) is a matrix.

**How** Added

How · Expectation and variance after a linear change

- Write \(\boldsymbol{A}\) (\(m\times k\)), \(E[\boldsymbol{y}]\) (\(k\times1\)), and \(\mathrm{Var}(\boldsymbol{y})\) (\(k\times k\)).
- Calculate \(\boldsymbol{A}E[\boldsymbol{y}]\) (\(m\times1\)).
- Calculate \(\boldsymbol{A}\mathrm{Var}(\boldsymbol{y})\), then multiply on the right by \(\boldsymbol{A}^T\) (\(m\times m\)).

**Self-check:** The variance matrix is symmetric.

**Self-check:** The diagonal entries are \(\ge 0\).

**Example** Added

Let \(E[\boldsymbol{y}]=(10,20)^T\), \(\mathrm{Var}(\boldsymbol{y})=\boldsymbol{I}\) (2×2), \(\boldsymbol{A}=\left[\begin{array}{cc}1&2\\3&4\end{array}\right]\), and \(\boldsymbol{a}=(1,1)^T\).

1

Expectation How step 2

\[E[\boldsymbol{A}\boldsymbol{y}]=\boldsymbol{A}E[\boldsymbol{y}]=\left[\begin{array}{c}1(10)+2(20)\\3(10)+4(20)\end{array}\right]=\left[\begin{array}{c}50\\110\end{array}\right]\]

2

Variance How step 3

\[\mathrm{Var}(\boldsymbol{A}\boldsymbol{y})=\boldsymbol{A}\,\boldsymbol{I}\,\boldsymbol{A}^T=\boldsymbol{A}\boldsymbol{A}^T\]

\[=\left[\begin{array}{cc}1&2\\3&4\end{array}\right]\left[\begin{array}{cc}1&3\\2&4\end{array}\right]\]

\[=\left[\begin{array}{cc}1+4&3+8\\3+8&9+16\end{array}\right]=\left[\begin{array}{cc}5&11\\11&25\end{array}\right]\]

Symmetric, positive diagonal: both self-checks pass.

3

Scalar case

\[\mathrm{Var}(\boldsymbol{a}^T\boldsymbol{y})=\boldsymbol{a}^T\boldsymbol{I}\boldsymbol{a}=1^2+1^2=2\]

\(\boldsymbol{a}^T\boldsymbol{y}=y_1+y_2\).

Order is important: \(\boldsymbol{A}^T\boldsymbol{A}=\left[\begin{array}{cc}10&14\\14&20\end{array}\right]\) is a different matrix.

**Why** Added

1

\[\mathrm{Var}(\boldsymbol{A}\boldsymbol{y})=E[(\boldsymbol{A}\boldsymbol{y}-E[\boldsymbol{A}\boldsymbol{y}])(\boldsymbol{A}\boldsymbol{y}-E[\boldsymbol{A}\boldsymbol{y}])^T]\]

Definition of Var, p.4.

2

\[=E[(\boldsymbol{A}\boldsymbol{y}-\boldsymbol{A}E[\boldsymbol{y}])(\boldsymbol{A}\boldsymbol{y}-\boldsymbol{A}E[\boldsymbol{y}])^T]\]

\(E[\boldsymbol{A}\boldsymbol{y}]=\boldsymbol{A}E[\boldsymbol{y}]\).

3

\[=E[\boldsymbol{A}(\boldsymbol{y}-E[\boldsymbol{y}])(\boldsymbol{A}(\boldsymbol{y}-E[\boldsymbol{y}]))^T]\]

4

\[=E[\boldsymbol{A}(\boldsymbol{y}-E[\boldsymbol{y}])(\boldsymbol{y}-E[\boldsymbol{y}])^T\boldsymbol{A}^T]\]

\((\boldsymbol{B}\boldsymbol{C})^T=\boldsymbol{C}^T\boldsymbol{B}^T\).

5

\[=\boldsymbol{A}\,E[(\boldsymbol{y}-E[\boldsymbol{y}])(\boldsymbol{y}-E[\boldsymbol{y}])^T]\,\boldsymbol{A}^T\]

Constant matrices move out of \(E\).

6

\[=\boldsymbol{A}\,\mathrm{Var}(\boldsymbol{y})\,\boldsymbol{A}^T\]

One row \(\boldsymbol{a}^T\) gives the scalar rule. ∎

Unit 04 uses this rule to find \(\mathrm{Var}[\hat{\boldsymbol\beta}]\).

### 01.4 Multivariate normal distribution Slides p.5

**What** Slides p.5

\(N(0,1)\) is the standard normal: mean 0, variance 1. "i.i.d." means independent and identically distributed. Two variables are independent if the value of one does not change the distribution of the other. The multivariate normal (MVN) is a distribution of a random vector, set fully by its mean \(\boldsymbol\mu\) and covariance matrix \(\boldsymbol\Sigma\).

The integral of the density \(f(\boldsymbol{y})\) over a region gives the probability that \(\boldsymbol{y}\) is in that region. The determinant \(|\boldsymbol\Sigma|\) is one number from a square matrix; for 2×2, \(\left|\begin{array}{cc}p&q\\r&s\end{array}\right|=ps-qr\). The inverse \(\boldsymbol\Sigma^{-1}\) satisfies \(\boldsymbol\Sigma\boldsymbol\Sigma^{-1}=\boldsymbol{I}\).

Multivariate Normal Distribution · Lecture 6 · p.5 Let \(\boldsymbol{z}=(z_1,\dots,z_n)^T\) be a random vector of i.i.d standard normal random variables, i.e. \(z_i\overset{iid}{\sim}N(0,1)\).
Then \(\boldsymbol{y}=\boldsymbol{A}\boldsymbol{z}+\boldsymbol\mu\) has multivariate normal distribution, i.e.: \(\boldsymbol{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\) where \(E[\boldsymbol{y}]=\boldsymbol\mu\) and \(\mathrm{Var}(\boldsymbol{y})=\boldsymbol\Sigma=\boldsymbol{A}\boldsymbol{A}^T\).
\(\boldsymbol{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\), if: \[f(\boldsymbol{y})=\frac{1}{(2\pi)^{\frac n2}|\boldsymbol\Sigma|^{\frac12}}\exp\left\{-\frac12(\boldsymbol{y}-\boldsymbol\mu)^T\boldsymbol\Sigma^{-1}(\boldsymbol{y}-\boldsymbol\mu)\right\}\]

The slide gives two equivalent descriptions: a construction from \(n\) independent standard normals, and a density. Both use only \(\boldsymbol\mu\) (\(n\times1\)) and \(\boldsymbol\Sigma\) (\(n\times n\)).

**How** Added

How · Get the MVN parameters and the density

- Read \(\boldsymbol\mu\), the added constant vector.
- Calculate \(\boldsymbol\Sigma=\boldsymbol{A}\boldsymbol{A}^T\).
- Write \(\boldsymbol{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\).
- For \(f(\boldsymbol{y})\), calculate \(|\boldsymbol\Sigma|\), then \(\boldsymbol\Sigma^{-1}\), then \((\boldsymbol{y}-\boldsymbol\mu)^T\boldsymbol\Sigma^{-1}(\boldsymbol{y}-\boldsymbol\mu)\).
- Put these three values into the density formula.

**Self-check:** \(\boldsymbol\Sigma\) is symmetric and \(|\boldsymbol\Sigma|>0\). Else \(|\boldsymbol\Sigma|^{1/2}\) and \(\boldsymbol\Sigma^{-1}\) do not exist.

**Self-check:** At \(\boldsymbol{y}=\boldsymbol\mu\), the exponential term is \(e^0=1\).

**Example** Added

Use \(\boldsymbol{A}\) from Section 01.3, \(n=2\), \(\boldsymbol\mu=(10,20)^T\), and \(\boldsymbol{y}=\boldsymbol{A}\boldsymbol{z}+\boldsymbol\mu\).

1

Mean How step 1

\[\boldsymbol\mu=\left[\begin{array}{c}10\\20\end{array}\right]\]

2

Covariance matrix How step 2

\[\boldsymbol\Sigma=\boldsymbol{A}\boldsymbol{A}^T=\left[\begin{array}{cc}5&11\\11&25\end{array}\right]\]

Same product as Section 01.3.

3

Distribution How step 3

\[\boldsymbol{y}\sim MVN\left(\left[\begin{array}{c}10\\20\end{array}\right],\left[\begin{array}{cc}5&11\\11&25\end{array}\right]\right)\]

4

Determinant How step 4

\[|\boldsymbol\Sigma|=5(25)-11(11)=125-121=4\]

5

Density at \(\boldsymbol{y}=\boldsymbol\mu\) Self-check 2

\[f(\boldsymbol\mu)=\frac{1}{(2\pi)^{\frac22}\,4^{\frac12}}\exp\{0\}\]

\[=\frac{1}{2\pi\times2}=\frac{1}{4\pi}=0.07957747\]

Second example: \(\boldsymbol\mu=\boldsymbol{0}\), \(\boldsymbol\Sigma=\boldsymbol{I}\) (2×2), \(\boldsymbol{y}=(1,-1)^T\). Added

1

Determinant and inverse How step 4

\[|\boldsymbol{I}|=1(1)-0(0)=1,\qquad \boldsymbol{I}^{-1}=\boldsymbol{I}\]

2

Quadratic form How step 4

\[(\boldsymbol{y}-\boldsymbol{0})^T\boldsymbol{I}(\boldsymbol{y}-\boldsymbol{0})=1^2+(-1)^2=2\]

3

Density How step 5

\[f(\boldsymbol{y})=\frac{1}{(2\pi)^{1}\,1^{\frac12}}\exp\left\{-\frac12(2)\right\}\]

\[=\frac{e^{-1}}{2\pi}=\frac{0.36787944}{6.28318531}=0.05854983\]

4

Check with two one-dimensional densities

\[\frac{1}{\sqrt{2\pi}}e^{-\frac12(1)^2}\times\frac{1}{\sqrt{2\pi}}e^{-\frac12(-1)^2}=\frac{e^{-1}}{2\pi}=0.05854983\]

\(N(0,1)\) density: \(\frac{1}{\sqrt{2\pi}}e^{-y^2/2}\).

The cloud centers near \(\boldsymbol\mu=(10,20)\). It slopes up-right because \(\mathrm{cov}(y_1,y_2)=11>0\). It is taller than wide because \(\mathrm{Var}(y_2)=25>\mathrm{Var}(y_1)=5\).

[figure]
Figure 1-1. 300 simulated points \(\boldsymbol{y}=\boldsymbol{A}\boldsymbol{z}+\boldsymbol\mu\) with \(\boldsymbol{A}=\left[\begin{array}{cc}1&2\\3&4\end{array}\right]\) (blue). Orange cross: mean \(\boldsymbol\mu\).

**Why** Added

Each \(z_i\) has mean 0 and variance 1, and different \(z_i\) have covariance 0. Then \(E[\boldsymbol{z}]=\boldsymbol{0}\) and \(\mathrm{Var}(\boldsymbol{z})=\boldsymbol{I}\).

1

\[E[\boldsymbol{y}]=E[\boldsymbol{A}\boldsymbol{z}+\boldsymbol\mu]=\boldsymbol{A}E[\boldsymbol{z}]+\boldsymbol\mu\]

p.4 expectation rules.

2

\[=\boldsymbol{A}\boldsymbol{0}+\boldsymbol\mu=\boldsymbol\mu\]

3

\[\mathrm{Var}(\boldsymbol{y})=\mathrm{Var}(\boldsymbol{A}\boldsymbol{z}+\boldsymbol\mu)=\mathrm{Var}(\boldsymbol{A}\boldsymbol{z})\]

An added constant does not change variance.

4

\[=\boldsymbol{A}\,\mathrm{Var}(\boldsymbol{z})\,\boldsymbol{A}^T\]

p.4 variance rule.

5

\[=\boldsymbol{A}\,\boldsymbol{I}\,\boldsymbol{A}^T=\boldsymbol{A}\boldsymbol{A}^T=\boldsymbol\Sigma\]

∎

### 01.5 Properties of \(\boldsymbol{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\) Slides p.6

**What** Slides p.6

A marginal distribution is the distribution of some entries of a vector. A conditional distribution \(\boldsymbol{y}_1\mid\boldsymbol{y}_2\) is the distribution of \(\boldsymbol{y}_1\) when \(\boldsymbol{y}_2\) is known. \(\Sigma_{ij}=\mathrm{cov}(y_i,y_j)\) is entry \((i,j)\) of \(\boldsymbol\Sigma\).

Properties of \(\boldsymbol{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\) · Lecture 6 · p.6 Linearity: If \(\boldsymbol{u}=\boldsymbol{C}\boldsymbol{y}+\boldsymbol{d}\), then: \[\boldsymbol{u}\sim MVN(\boldsymbol{C}\boldsymbol\mu+\boldsymbol{d},\,\boldsymbol{C}\boldsymbol\Sigma\boldsymbol{C}^T)\] Marginal Distribution: If \(\tilde{\boldsymbol{y}}=(y_1,\dots,y_m)^T\subset\boldsymbol{y}\) is a vector subset of \(\boldsymbol{y}\), then \(\tilde{\boldsymbol{y}}\) is MVN-distributed.
Conditional Distribution: If \(\boldsymbol{y}=(\boldsymbol{y}_1^T,\boldsymbol{y}_2^T)^T\), then \(\boldsymbol{y}_1^T\mid\boldsymbol{y}_2^T\) is MVN-distributed.
Independence: If \(\Sigma_{ij}=0\), then \(\boldsymbol{y}_i\) and \(\boldsymbol{y}_j\) are independent.

Linearity: \(\boldsymbol{C}\boldsymbol{y}+\boldsymbol{d}\) stays MVN. Its mean and variance follow the p.4 rules.

Marginal: any set of entries is MVN. One entry is normal.

Conditional: when the lower block \(\boldsymbol{y}_2\) is known, the upper block \(\boldsymbol{y}_1\) is MVN. \(\boldsymbol{y}_1^T\mid\boldsymbol{y}_2^T\) means \(\boldsymbol{y}_1\mid\boldsymbol{y}_2\). The lecture does not give its parameters.

Independence: for MVN, covariance 0 gives independence.

**How** Added

A linear combination is a sum of entries, each multiplied by a constant.

How · Use linearity to find the distribution of a new variable

- Write \(\boldsymbol{u}=\boldsymbol{C}\boldsymbol{y}+\boldsymbol{d}\). For a subset, each row of \(\boldsymbol{C}\) has one 1 and all other entries 0.
- Mean: calculate \(\boldsymbol{C}\boldsymbol\mu+\boldsymbol{d}\).
- Variance: calculate \(\boldsymbol{C}\boldsymbol\Sigma\boldsymbol{C}^T\).
- Write \(\boldsymbol{u}\sim MVN(\text{step 2},\text{step 3})\). For one entry, write \(N(\cdot,\cdot)\).

**Self-check:** Columns of \(\boldsymbol{C}\) = length of \(\boldsymbol{y}\). Length of \(\boldsymbol{d}\) = rows of \(\boldsymbol{C}\).

**Example** Added

Use \(\boldsymbol{y}\sim MVN\left(\left[\begin{array}{c}10\\20\end{array}\right],\left[\begin{array}{cc}5&11\\11&25\end{array}\right]\right)\) from Section 01.4.

(i) Linearity: \(u=y_1+y_2\).

1

Write \(u=\boldsymbol{C}\boldsymbol{y}+\boldsymbol{d}\) How step 1

\[\boldsymbol{C}=\left[\begin{array}{cc}1&1\end{array}\right],\qquad \boldsymbol{d}=0\]

2

Mean How step 2

\[\boldsymbol{C}\boldsymbol\mu+\boldsymbol{d}=1(10)+1(20)+0=30\]

3

Variance How step 3

\[\boldsymbol{C}\boldsymbol\Sigma\boldsymbol{C}^T=\left[\begin{array}{cc}1&1\end{array}\right]\left[\begin{array}{cc}5&11\\11&25\end{array}\right]\left[\begin{array}{c}1\\1\end{array}\right]\]

\[=\left[\begin{array}{cc}5+11&11+25\end{array}\right]\left[\begin{array}{c}1\\1\end{array}\right]\]

\[=\left[\begin{array}{cc}16&36\end{array}\right]\left[\begin{array}{c}1\\1\end{array}\right]=16+36=52\]

4

Distribution How step 4

\[u=y_1+y_2\sim N(30,\,52)\]

(ii) Marginal: \(\boldsymbol{C}=\left[\begin{array}{cc}1&0\end{array}\right]\), \(\boldsymbol{d}=0\). Mean \(1(10)+0(20)=10\), variance \(\Sigma_{11}=5\): \(y_1\sim N(10,5)\).

(iii) Independence: \(\boldsymbol\Sigma=\boldsymbol{I}\), \(\boldsymbol\mu=\boldsymbol{0}\), \(\Sigma_{12}=0\). The joint density is the product of two \(N(0,1)\) densities: both give 0.05854983 at \((1,-1)\) (Section 01.4).

**Why** Added

Let \(\boldsymbol{y}=\boldsymbol{A}\boldsymbol{z}+\boldsymbol\mu\), with \(\boldsymbol\Sigma=\boldsymbol{A}\boldsymbol{A}^T\).

1

\[\boldsymbol{u}=\boldsymbol{C}\boldsymbol{y}+\boldsymbol{d}=\boldsymbol{C}(\boldsymbol{A}\boldsymbol{z}+\boldsymbol\mu)+\boldsymbol{d}\]

p.5 construction.

2

\[=(\boldsymbol{C}\boldsymbol{A})\boldsymbol{z}+(\boldsymbol{C}\boldsymbol\mu+\boldsymbol{d})\]

3

\[\Rightarrow\ \boldsymbol{u}\sim MVN\big(\boldsymbol{C}\boldsymbol\mu+\boldsymbol{d},\ (\boldsymbol{C}\boldsymbol{A})(\boldsymbol{C}\boldsymbol{A})^T\big)\]

Form "matrix × \(\boldsymbol{z}\) + vector": p.5 applies.

4

\[(\boldsymbol{C}\boldsymbol{A})(\boldsymbol{C}\boldsymbol{A})^T=\boldsymbol{C}\boldsymbol{A}\boldsymbol{A}^T\boldsymbol{C}^T\]

\((\boldsymbol{C}\boldsymbol{A})^T=\boldsymbol{A}^T\boldsymbol{C}^T\).

5

\[=\boldsymbol{C}\boldsymbol\Sigma\boldsymbol{C}^T\]

∎ Marginal: \(\boldsymbol{C}\) selects entries.

The lecture states the conditional and independence properties without proof. Unit 04 uses linearity to get the distribution of \(\hat{\boldsymbol\beta}\).

### 01.6 Recap: multiple linear regression Slides p.7

**What** Slides p.7

Multiple linear regression (MLR) models an outcome \(y_i\) as an intercept, plus a linear combination of \(p\) covariates \(x_{i1},\dots,x_{ip}\), plus a random error \(\epsilon_i\). The regression coefficients \(\beta_0,\dots,\beta_p\) and the error variance \(\sigma^2\) are unknown constants. \(n\) is the number of observations.

Recap: Multiple Linear Regression · Lecture 6 · p.7 \[y_i=\beta_0+\beta_1x_{i1}+\cdots+\beta_Px_{ip}+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] We can write this: \[\left[\begin{array}{c}y_1\\y_2\\ \vdots\\y_n\end{array}\right]=\left[\begin{array}{cccccc}1&x_{11}&x_{12}&\dots&x_{1p}\\1&x_{21}&x_{22}&\dots&x_{2p}\\ \vdots&\vdots&\vdots&\vdots&\vdots\\1&x_{n1}&x_{n2}&\dots&x_{np}\end{array}\right]\left[\begin{array}{c}\beta_0\\ \beta_1\\ \vdots\\ \beta_p\end{array}\right]+\left[\begin{array}{c}\epsilon_1\\ \epsilon_2\\ \vdots\\ \epsilon_n\end{array}\right]\] Or more simply: \[\begin{array}{rl}&\boldsymbol{y}=\boldsymbol{X}\boldsymbol\beta+\boldsymbol\epsilon,\qquad \boldsymbol\epsilon\sim MVN(\boldsymbol{0},\sigma^2\boldsymbol{I})\\ \iff&\boldsymbol{y}\sim MVN(\boldsymbol{X}\boldsymbol\beta,\sigma^2\boldsymbol{I})\end{array}\]

Notation note The slide writes \(\beta_P\) in the first line and \(\beta_p\) after. Both mean the last index \(p\).

Row \(i\) is one observation. Column 1 of \(\boldsymbol{X}\) is all 1s, for the intercept \(\beta_0\). Column \(j+1\) is covariate \(j\). \(\boldsymbol{X}\) is \(n\times(p+1)\); \(\boldsymbol\beta\) is \((p+1)\times1\).

"\(\epsilon_i\) i.i.d. \(N(0,\sigma^2)\)" equals \(\boldsymbol\epsilon\sim MVN(\boldsymbol{0},\sigma^2\boldsymbol{I})\): means 0, variances \(\sigma^2\), covariances 0.

[figure]
Figure 1-2. Block sizes in \(\boldsymbol{y}=\boldsymbol{X}\boldsymbol\beta+\boldsymbol\epsilon\). Left of the dashed line: the column of 1s. Columns of \(\boldsymbol{X}\) = length \(p+1\) of \(\boldsymbol\beta\). \(\boldsymbol{X}\boldsymbol\beta\) is \(n\times1\).

**How** Added

How · Write \(\boldsymbol{y}=\boldsymbol{X}\boldsymbol\beta+\boldsymbol\epsilon\)

- For \(\boldsymbol{y}\), put \(y_1,\dots,y_n\) in one column.
- For \(\boldsymbol{X}\), write \((1,x_{i1},\dots,x_{ip})\) as row \(i\).
- For \(\boldsymbol\beta\), put \(\beta_0,\dots,\beta_p\) in one column.
- Check: row \(i\) of \(\boldsymbol{X}\) times \(\boldsymbol\beta\) equals \(\beta_0+\beta_1x_{i1}+\dots+\beta_px_{ip}\).

**Self-check:** \(\boldsymbol{X}\) is \(n\times(p+1)\), with a first column of 1s.

**Example** Added

Let \(n=3\), \(p=2\), covariates \((1,4)\), \((2,5)\), \((3,6)\). For the algebra only, let \(\boldsymbol\beta=(1,2,3)^T\).

1

Write \(\boldsymbol{X}\) How step 2

\[\boldsymbol{X}=\left[\begin{array}{ccc}1&1&4\\1&2&5\\1&3&6\end{array}\right]\quad(3\times3=n\times(p+1))\]

2

Calculate \(\boldsymbol{X}\boldsymbol\beta\) How step 4

\[\boldsymbol{X}\boldsymbol\beta=\left[\begin{array}{c}1+2(1)+3(4)\\1+2(2)+3(5)\\1+2(3)+3(6)\end{array}\right]=\left[\begin{array}{c}1+2+12\\1+4+15\\1+6+18\end{array}\right]=\left[\begin{array}{c}15\\20\\25\end{array}\right]\]

Then \(\boldsymbol{y}\sim MVN\big((15,20,25)^T,\ \sigma^2\boldsymbol{I}\big)\).

**Why** Added

Use linearity (Section 01.5) with \(\boldsymbol{C}=\boldsymbol{I}\) and constant \(\boldsymbol{d}=\boldsymbol{X}\boldsymbol\beta\).

1

\[\boldsymbol{y}=\boldsymbol{I}\boldsymbol\epsilon+\boldsymbol{X}\boldsymbol\beta\]

2

\[\boldsymbol{y}\sim MVN(\boldsymbol{I}\boldsymbol{0}+\boldsymbol{X}\boldsymbol\beta,\ \boldsymbol{I}(\sigma^2\boldsymbol{I})\boldsymbol{I}^T)\]

p.6 linearity.

3

\[\boldsymbol{y}\sim MVN(\boldsymbol{X}\boldsymbol\beta,\ \sigma^2\boldsymbol{I})\]

Reverse: \(\boldsymbol{d}=-\boldsymbol{X}\boldsymbol\beta\) gives \(\iff\). ∎

### 01.7 Practice Added

**Q1.** Let \(z=\boldsymbol{y}^T\boldsymbol{A}\boldsymbol{y}\) with \(\boldsymbol{A}=\left[\begin{array}{cc}4&1\\1&2\end{array}\right]\). Find \(\frac{\partial z}{\partial\boldsymbol{y}}\) at \(\boldsymbol{y}=(1,-1)^T\). Check entry by entry.

Answer

1

\[\boldsymbol{A}^T=\boldsymbol{A}\ \Rightarrow\ \frac{\partial z}{\partial\boldsymbol{y}}=2\boldsymbol{A}\boldsymbol{y}=2\left[\begin{array}{c}4y_1+y_2\\y_1+2y_2\end{array}\right]=\left[\begin{array}{c}8y_1+2y_2\\2y_1+4y_2\end{array}\right]\]

2

\[z=4y_1^2+2y_1y_2+2y_2^2,\quad \frac{\partial z}{\partial y_1}=8y_1+2y_2,\quad \frac{\partial z}{\partial y_2}=2y_1+4y_2\]

Agrees with step 1.

3

\[\left.\frac{\partial z}{\partial\boldsymbol{y}}\right|_{(1,-1)}=\left[\begin{array}{c}8(1)+2(-1)\\2(1)+4(-1)\end{array}\right]=\left[\begin{array}{c}6\\-2\end{array}\right]\]

**Q2.** Let \(\boldsymbol{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\), \(\boldsymbol\mu=(1,2)^T\), \(\boldsymbol\Sigma=\left[\begin{array}{cc}2&1\\1&3\end{array}\right]\). Find the distribution of \(u=y_1-y_2\).

Answer

1

\[u=\boldsymbol{C}\boldsymbol{y}+\boldsymbol{d},\quad \boldsymbol{C}=\left[\begin{array}{cc}1&-1\end{array}\right],\ \boldsymbol{d}=0\]

2

\[\boldsymbol{C}\boldsymbol\mu=1(1)+(-1)(2)=-1\]

3

\[\boldsymbol{C}\boldsymbol\Sigma=\left[\begin{array}{cc}2-1&1-3\end{array}\right]=\left[\begin{array}{cc}1&-2\end{array}\right]\]

4

\[\boldsymbol{C}\boldsymbol\Sigma\boldsymbol{C}^T=\left[\begin{array}{cc}1&-2\end{array}\right]\left[\begin{array}{c}1\\-1\end{array}\right]=1+2=3\]

5

\[u\sim N(-1,\,3)\]

p.6 linearity.

**Q3.** An MLR has \(n=50\) and \(p=3\), with \(\boldsymbol{y}=\boldsymbol{X}\boldsymbol\beta+\boldsymbol\epsilon\), \(\boldsymbol\epsilon\sim MVN(\boldsymbol{0},\sigma^2\boldsymbol{I})\). (a) Give the dimensions of \(\boldsymbol{X}\), \(\boldsymbol\beta\), and \(\mathrm{Var}(\boldsymbol{y})\). (b) Show \(E[\boldsymbol{y}]=\boldsymbol{X}\boldsymbol\beta\) with the random-vector properties.

Answer

(a) \(\boldsymbol{X}\): \(n\times(p+1)=50\times4\). \(\boldsymbol\beta\): \(4\times1\). \(\mathrm{Var}(\boldsymbol{y})=\sigma^2\boldsymbol{I}\): \(50\times50\).

(b)

1

\[E[\boldsymbol{y}]=E[\boldsymbol{X}\boldsymbol\beta+\boldsymbol\epsilon]\]

2

\[=\boldsymbol{X}\boldsymbol\beta+E[\boldsymbol\epsilon]\]

p.4: \(E[\boldsymbol{a}]=\boldsymbol{a}\) for constant \(\boldsymbol{X}\boldsymbol\beta\).

3

\[=\boldsymbol{X}\boldsymbol\beta+\boldsymbol{0}=\boldsymbol{X}\boldsymbol\beta\]

## 02 · Data example and interpreting regression coefficients

Plan · Slides p.8–16

Step 1 (Slides p.8–9): meet the data set satisfaction.csv.

Step 2 (Slides p.10–11): read the summary numbers and the scatter plots.

Step 3 (Slides p.12): list the questions of the lecture.

Step 4 (Slides p.13): write the model in scalar form and matrix form.

Step 5 (Slides p.14–16): interpret the intercept \(\beta_0\) and each slope \(\beta_j\).

Basic words · Added

Variable: one column of a data table.

Observation: one row of a data table. In this unit, one patient.

The subscript \(i\) gives the observation. The subscript \(j\) gives the covariate.

### 02.1 Title page Slides p.8

Slides p.8 Slide p.8 repeats the title "Lecture 6: Multiple Linear Regression: Intro & Estimation".

Slides p.1–7 are a recap. New material starts on Slides p.9.

### 02.2 Data example: satisfaction.csv Slides p.9

**What** Slides p.9

Data Example · Lecture 6 · p.9
satisfaction.csv contains data on \(n = 46\) hospital patients. The variables are:

- Satisfaction: degree of satisfaction with quality of care (higher values = more)
- Age: age of patient in years
- Severity: severity score for patient condition
- Stress: patient self reported degree of stress

| Variable | Role

| Satisfaction | outcome \(y_i\)

| Age | covariate 1, \(x_{i1}\)

| Severity | covariate 2, \(x_{i2}\)

| Stress | covariate 3, \(x_{i3}\)

\(n=46\) observations, \(p=3\) covariates.

### 02.3 Exploratory data analysis: first rows and summary numbers Slides p.10

Exploratory data analysis (EDA): a check of the range, center, and shape of the data before you make a model.

**What** Slides p.10

First 6 rows:

| Row | Satisfaction | Age | Severity | Stress

| 1 | 48 | 50 | 51 | 2.3

| 2 | 57 | 36 | 46 | 2.3

| 3 | 66 | 40 | 48 | 2.2

| 4 | 70 | 41 | 44 | 1.8

| 5 | 89 | 28 | 43 | 1.8

| 6 | 36 | 49 | 54 | 2.9

Summary numbers:

|  | Satisfaction | Age | Severity | Stress

| Minimum | 26.00 | 22.00 | 41.00 | 1.800

| 1st quartile | 48.25 | 31.25 | 48.00 | 2.100

| Median | 60.00 | 37.50 | 50.50 | 2.300

| Mean | 61.57 | 38.39 | 50.43 | 2.287

| 3rd quartile | 76.75 | 44.75 | 53.00 | 2.475

| Maximum | 92.00 | 55.00 | 62.00 | 2.900

Quartile: a value that divides the sorted data into four equal parts. About 25% of the data are below the 1st quartile, about 75% below the 3rd.

Median: the middle value of the sorted data.

Sample mean \(\bar y=\frac1n\sum_{i=1}^n y_i\).

**How** Added

Read the summary numbers of one variable

- Find the column of the variable.
- Read the minimum and maximum. They give the range.
- Read the median and mean. They give the center.
- Read the 1st and 3rd quartiles. The middle 50% of the data are between them.

**Self-check:** minimum ≤ 1st quartile ≤ median ≤ 3rd quartile ≤ maximum. The mean is in the range.

**Example · Read the two tables** Added

Patient 1: \(y_1=48\), \(x_{11}=50\), \(x_{12}=51\), \(x_{13}=2.3\).

| Variable | Range | Mean

| Satisfaction | 26 to 92 | 61.57 (median 60)

| Age | 22 to 55 years | 38.39

| Severity | 41 to 62 | 50.43

| Stress | 1.8 to 2.9 | 2.287

**Self-check:** For Age, 22 ≤ 31.25 ≤ 37.50 ≤ 44.75 ≤ 55, and 38.39 is between 22 and 55.

No covariate has the value 0. Section 02.7 uses this fact. ▲

### 02.4 Scatter plot matrix Slides p.11

**What** Slides p.11

Slides p.11 shows a scatter plot matrix of the four variables.

Scatter plot: one point for each observation. The horizontal position is one variable, the vertical position is another.

Scatter plot matrix (pairs plot): a grid with the scatter plot of each pair of variables. 4 variables give a 4×4 grid. The diagonal cells show only the names.

**How** Added

Find the scatter plot of one pair of variables

- Find variable A on the diagonal. Note its row.
- Find variable B on the diagonal. Note its column.
- Go to row A, column B. The vertical axis is A. The horizontal axis is B.
- Points from lower left to upper right show a positive association.
- Points from upper left to lower right show a negative association.

**Self-check:** Each axis covers the minimum to the maximum of its variable in the summary table.

**Example · Satisfaction against Age** Added

Row 1, column 2: vertical axis Satisfaction, horizontal axis Age.

[figure]
Figure 2-1. Satisfaction against Age, 46 patients. Orange: patient 1 (Age 50, Satisfaction 48).

The points go from upper left to lower right (step 5). Satisfaction and Age have a negative association.

The axes cover 26 to 92 and 22 to 55, as in the summary table.

This plot does not hold Severity and Stress fixed. Section 02.7 does. ▲

### 02.5 Motivating questions Slides p.12

**What** Slides p.12

Motivating Questions · Lecture 6 · p.12

- Is mean satisfaction associated with stress, conditional on age and severity?
- How does mean satisfaction differ for older patients vs younger patients with the same severity and stress scores?
- Given a patient's stress, age, and severity, can we predict their satisfaction?
- Later: is the (conditional) association between stress and satisfaction different for older patients than for younger patients?
- Many others...

Association: when one variable changes, the mean of another variable changes.

Conditional on: with the other variables held at fixed values.

Questions 1 and 2 hold other variables fixed. Figure 2-1 cannot do this. We need a model with all three covariates.

### 02.6 The multiple linear regression model Slides p.13

**What** Slides p.13

Multiple Linear Regression · Lecture 6 · p.13 \[y_i=\beta_0+\beta_1x_{i1}+\cdots+\beta_Px_{ip}+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2),\quad i=1,\dots,n\]
Or
\[\boldsymbol{y}=\boldsymbol{X}\boldsymbol{\beta}+\boldsymbol{\epsilon},\quad \boldsymbol{\epsilon}\sim MVN(\boldsymbol{0},\sigma^2\boldsymbol{I})\] \[\iff\] \[\boldsymbol{y}\sim MVN(\boldsymbol{X}\boldsymbol{\beta},\sigma^2\boldsymbol{I})\]
Note: we assume \(p+1<n\)

This is the model of Section 01.6, with \(i=1,\dots,n\) added.

\(p+1<n\): there are fewer unknown coefficients than observations. It makes \(n-(p+1)\) positive. Unit 05 divides by it.

**How** Added

Write the model and \(\boldsymbol{X}\) for a data set

- Find the outcome and the covariates. Write \(n\) and \(p\).
- Write the scalar form with the variable names.
- Put \(n\) 1s in column 1 of \(\boldsymbol{X}\).
- Put covariate \(j\) in column \(j+1\).
- Check \(p+1<n\).

**Self-check:** \(\boldsymbol{X}\) is \(n\times(p+1)\). \(\boldsymbol{\beta}\) has \(p+1\) entries. Row \(i\) of \(\boldsymbol{X}\) matches row \(i\) of the data.

**Example · The model for satisfaction.csv** Added

**Step 1.** \(n=46\), \(p=3\).

**Step 2.**
\[\text{Satisfaction}_i=\beta_0+\beta_1\,\text{Age}_i+\beta_2\,\text{Severity}_i+\beta_3\,\text{Stress}_i+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2),\quad i=1,\dots,46\]
**Steps 3–4.** First three rows from Slides p.10:
\[\boldsymbol{X}=\left[\begin{array}{cccc}1&50&51&2.3\\1&36&46&2.3\\1&40&48&2.2\\\vdots&\vdots&\vdots&\vdots\end{array}\right]_{46\times4},\qquad \boldsymbol{\beta}=\left[\begin{array}{c}\beta_0\\\beta_1\\\beta_2\\\beta_3\end{array}\right]\]
**Step 5.** \(4<46\). The assumption is true.

**Self-check:** \(46\times4=n\times(p+1)\). Row 1 is patient 1: Age 50, Severity 51, Stress 2.3.

**Coefficient estimates used in this unit.** Estimate: a number calculated from the data in place of an unknown true value. A hat marks it, for example \(\hat\beta_1\).

Lecture 6 does not print the estimates. Lecture 7 · p.51 prints a 95% confidence interval for each coefficient. Confidence interval: a range of values for an unknown coefficient, calculated from the data.

The estimate is the midpoint of each interval:

1

\[\hat\beta_0=\frac{121.911727+195.0707761}{2}=\frac{316.9825031}{2}=158.4912516\approx158.491\]

2

\[\hat\beta_1=\frac{-1.575093+(-0.7081303)}{2}=\frac{-2.2832233}{2}=-1.1416117\approx-1.142\]

3

\[\hat\beta_2=\frac{-1.434831+0.5508228}{2}=\frac{-0.8840082}{2}=-0.4420041\approx-0.442\]

4

\[\hat\beta_3=\frac{-27.797859+0.8575324}{2}=\frac{-26.9403266}{2}=-13.4701633\approx-13.470\]

This unit uses \(\hat{\boldsymbol\beta}=(158.491,\,-1.142,\,-0.442,\,-13.470)^T\). Unit 03 calculates it. ▲

**Why** Added

The scalar form and the matrix form give the same model. Row \(i\) of \(\boldsymbol{X}\boldsymbol\beta\):

1

\[[\boldsymbol{X}\boldsymbol\beta]_i=\left[\begin{array}{cccc}1&x_{i1}&\cdots&x_{ip}\end{array}\right]\left[\begin{array}{c}\beta_0\\\beta_1\\\vdots\\\beta_p\end{array}\right]\]

2

\[=1\cdot\beta_0+x_{i1}\beta_1+\cdots+x_{ip}\beta_p\]

3

\[=\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}\]

Add \(\epsilon_i\) to get the scalar form. The form \(\boldsymbol{y}\sim MVN(\boldsymbol{X}\boldsymbol\beta,\sigma^2\boldsymbol{I})\) comes from linearity (Slides p.6, Section 01.6).

Check with patient 1, row \((1,50,51,2.3)\):

1

\[1(158.491)+50(-1.142)+51(-0.442)+2.3(-13.470)\]

2

\[=158.491-57.1-22.542-30.981\]

3

\[=47.868\]

This equals the scalar form \(\hat\beta_0+\hat\beta_1(50)+\hat\beta_2(51)+\hat\beta_3(2.3)\). ∎

### 02.7 Interpreting regression coefficients Slides p.14–16

Slides p.14–16 Slides p.14 and p.15 are the first parts of Slides p.16. This section follows p.16.

**What** Slides p.14–16

Interpreting Regression Coefficients · Lecture 6 · p.14–16
To interpret a parameter, isolate it!
\[E[y_i\,|\,x_{i1},\dots,x_{ip}]=\beta_0+\beta_1x_{i1}\cdots+\beta_Px_{ip}\]
What does \(\beta_0\) represent?
\[E[y_i\,|\,x_{i1}=\cdots=x_{ip}=0]=\beta_0+\beta_1(0)+\cdots+\beta_P(0)=\beta_0\]

- \(\implies\beta_0\) is the mean outcome when all covariates are set to 0
- May not be interpretable: e.g. what does it mean for age to be 0 in a sample of adults?

What does \(\beta_1\) represent?
\[E[y_i\,|\,x_{i1}=x_1,x_{i2}=x_2,\dots,x_{ip}=x_P]=\beta_0+\beta_1(x_1)+\beta_2(x_2)+\cdots+\beta_P(x_P)\] \[E[y_i\,|\,x_{i1}=(x_1+1),x_{i2}=x_2,\dots,x_{ip}=x_P]=\beta_0+\beta_1(x_1+1)+\cdots+\beta_P(x_P)\]

- \(E[y_i\,|\,x_{i1}=(x_1+1),x_{i2}=x_2,\dots,x_{ip}=x_P]-E[y_i\,|\,x_{i1}=x_1,x_{i2}=x_2,\dots,x_{ip}=x_P]=\beta_1\)
- More generally \(\beta_j\) represents the difference in mean outcome for a one-unit change in the \(j^{th}\) covariate, holding other covariates fixed.

Conditional expectation \(E[y_i\,|\,x_{i1},\dots,x_{ip}]\): the mean of \(y_i\) at the given covariate values. Read \(|\) as "given".

If 0 is outside the range of the data, \(\beta_0\) has no practical meaning.

"Holding other covariates fixed" is a necessary part of each slope interpretation.

**How** Added

Interpret one coefficient \(\beta_j\)

- Write \(\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}\).
- Intercept: put 0 for all covariates. The result is \(\beta_0\).
- Check in the summary table if 0 is in the range of each covariate.
- Slope: write the expression with covariate \(j\) at \(x_j\), then at \(x_j+1\).
- Give the other covariates the same values in both.
- Subtract. Only \(\beta_j\) remains.
- Write: a one-unit increase in covariate \(j\) changes the mean outcome by \(\beta_j\), other covariates held fixed.

**Self-check:** The sentence names the covariate and its unit, the direction and size, and "held fixed". With an estimate, it says "estimated mean outcome".

**Example · Interpret \(\hat\beta_0\) and \(\hat\beta_1\)** Added

**Step 1.**
\[\hat\beta_0+\hat\beta_1\,\text{Age}+\hat\beta_2\,\text{Severity}+\hat\beta_3\,\text{Stress}=158.491-1.142\,\text{Age}-0.442\,\text{Severity}-13.470\,\text{Stress}\]
**Step 2 (intercept).** Age = Severity = Stress = 0:

1

\[158.491-1.142(0)-0.442(0)-13.470(0)\]

2

\[=158.491=\hat\beta_0\]

**Step 3.** Minimum Age is 22, Severity 41, Stress 1.8 (Section 02.3). \(\hat\beta_0\) has no practical meaning. This is the second bullet of Slides p.15.

**Steps 4–5 (Age).** Hold Severity = 50, Stress = 2.3. Use Age 40, then 41.

1

\[\text{Age }40:\ 158.491-1.142(40)-0.442(50)-13.470(2.3)\]

2

\[=158.491-45.68-22.1-30.981\]

3

\[=59.73\]

1

\[\text{Age }41:\ 158.491-1.142(41)-0.442(50)-13.470(2.3)\]

2

\[=158.491-46.822-22.1-30.981\]

3

\[=58.588\]

**Step 6.**

1

\[58.588-59.73=-1.142=\hat\beta_1\]

\(-22.1\) and \(-30.981\) cancel.

**Step 7.** Each one-year increase in Age decreases the estimated mean satisfaction by 1.142, with Severity and Stress held fixed.

\(\hat\beta_2=-0.442\): each one-point increase in Severity decreases the estimated mean satisfaction by 0.442, with Age and Stress held fixed.

\(\hat\beta_3=-13.470\): each one-unit increase in Stress decreases the estimated mean satisfaction by 13.470, with Age and Severity held fixed.

Figure 2-2 holds Severity and Stress at their means, 50.43 and 2.287: \(158.491-0.442(50.43)-13.470(2.287)-1.142\,\text{Age}=105.395-1.142\,\text{Age}\) (3 decimals).

[figure]
Figure 2-2. Data (blue) and the estimated mean line (orange), slope \(\hat\beta_1=-1.142\). Green: Age 30 and 50. The line drops \(20\times1.142=22.84\).

Other fixed values, for example Severity = 60, move the line up or down. The slope stays \(-1.142\). ▲

**Why** Slides p.14–16

1

\[E[y_i\,|\,x_{i1},\dots,x_{ip}]=E[\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}+\epsilon_i\,|\,x_{i1},\dots,x_{ip}]\]

Model, Slides p.13

2

\[=\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}+E[\epsilon_i]\]

Given covariates, first part is fixed

3

\[=\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}\]

\(E[\epsilon_i]=0\)

4

\[E[y_i\,|\,x_{i1}=\cdots=x_{ip}=0]=\beta_0+\beta_1(0)+\cdots+\beta_p(0)\]

5

\[=\beta_0\]

6

\[E[y_i\,|\,x_{ij}=x_j+1,\ \text{others fixed}]=\beta_0+\cdots+\beta_j(x_j+1)+\cdots+\beta_px_p\]

7

\[E[y_i\,|\,x_{ij}=x_j,\ \text{others fixed}]=\beta_0+\cdots+\beta_jx_j+\cdots+\beta_px_p\]

8

\[\text{line 6}-\text{line 7}=\beta_j(x_j+1)-\beta_jx_j\]

Other terms are equal and cancel

9

\[=\beta_jx_j+\beta_j-\beta_jx_j\]

10

\[=\beta_j\]

Line 8 needs equal values of the other covariates. The result does not depend on \(x_j\): Age 40 to 41 and Age 30 to 31 both give \(\beta_1\). ∎

### 02.8 Practice Added

Use \(\hat{\boldsymbol\beta}=(158.491,\,-1.142,\,-0.442,\,-13.470)^T\).

**Q1.** Interpret \(\hat\beta_3=-13.470\). Two patients have the same Age and Severity. Their Stress differs by 0.5. Find the difference in estimated mean satisfaction.

Answer

Each one-unit increase in Stress decreases the estimated mean satisfaction by 13.470, with Age and Severity held fixed.

\(0.5\times(-13.470)=-6.735\)

The patient with higher Stress has an estimated mean satisfaction 6.735 lower.

**Q2.** Two patients have Severity = 50 and Stress = 2.3. Their ages are 30 and 50. Find each estimated mean satisfaction and the difference. Write the difference with \(\hat\beta_1\).

Answer

1

\[\text{Age }30:\ 158.491-1.142(30)-0.442(50)-13.470(2.3)\]

2

\[=158.491-34.26-22.1-30.981\]

3

\[=71.15\]

1

\[\text{Age }50:\ 158.491-1.142(50)-0.442(50)-13.470(2.3)\]

2

\[=158.491-57.1-22.1-30.981\]

3

\[=48.31\]

Difference: \(48.31-71.15=-22.84\).

With \(\hat\beta_1\): \(20\times\hat\beta_1=20\times(-1.142)=-22.84\).

The Severity and Stress terms cancel. The older patient is 22.84 lower.

**Q3.** Patient 5 (Slides p.10) has Age 28, Severity 43, Stress 1.8. Write row 5 of \(\boldsymbol{X}\). Find the estimated mean satisfaction.

Answer

Row 5 of \(\boldsymbol{X}\): \((1,28,43,1.8)\).

1

\[1(158.491)+28(-1.142)+43(-0.442)+1.8(-13.470)\]

2

\[=158.491-31.976-19.006-24.246\]

3

\[=83.263\]

Estimate 83.263. Observed value 89.

## 03 · Estimating β: least squares and maximum likelihood

Plan · Slides p.17–22

Step 1: State the model (Slides p.17).

Step 2: Least squares: minimize \(S(\boldsymbol\beta)\) (Slides p.18–20).

Step 3: Solve a small data set by hand (Added).

Step 4: Maximum likelihood: link \(\ell\) to \(S(\boldsymbol\beta)\) (Slides p.21–22).

### 03.1 Title page: Estimating \(\boldsymbol\beta\) Slides p.17

Model: \(\boldsymbol{y}=\boldsymbol{X}\boldsymbol\beta+\boldsymbol\epsilon\), \(\boldsymbol\epsilon\sim MVN(\boldsymbol{0},\sigma^2\boldsymbol{I})\). The errors are independent normal, each with variance \(\sigma^2\).

Estimator \(\hat{\boldsymbol\beta}\): a formula that gives a value for \(\boldsymbol\beta\) from the data.

The slides use the satisfaction data (\(n=46\), \(p=3\), Slides p.9). The example uses a smaller data set.

### 03.2 Least squares estimation Slides p.18–20

Slides p.18–19 build up p.20.

**What** Slides p.20

Least Squares Estimation · Lecture 6 · p.20 Want to minimize the sum of squares, i.e.: \[\begin{aligned} S(\boldsymbol\beta)&=(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\\ &=\boldsymbol{y}^T\boldsymbol{y}-\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta-\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{y}+\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta\\ &=\boldsymbol{y}^T\boldsymbol{y}-2\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta+\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta \end{aligned}\] \[\begin{aligned} \frac{\partial S(\boldsymbol\beta)}{\partial\boldsymbol\beta}=-2\boldsymbol{X}^T\boldsymbol{y}+2\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta&=0\\ (\boldsymbol{X}^T\boldsymbol{X})\boldsymbol\beta&=\boldsymbol{X}^T\boldsymbol{y}\\ \hat{\boldsymbol\beta}&=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y} \end{aligned}\] assuming the columns of \(\boldsymbol{X}\) are linearly independent

Sum of squares: \(S(\boldsymbol\beta)=\sum_{i=1}^n\big(y_i-(\boldsymbol{X}\boldsymbol\beta)_i\big)^2\), one number.

Least squares (OLS, ordinary least squares): the estimate \(\hat{\boldsymbol\beta}\) is the \(\boldsymbol\beta\) with the smallest \(S(\boldsymbol\beta)\).

Linearly independent columns: no column of \(\boldsymbol{X}\) is a linear combination of the others.

Normal equations: \((\boldsymbol{X}^T\boldsymbol{X})\boldsymbol\beta=\boldsymbol{X}^T\boldsymbol{y}\). With linearly independent columns, they have one solution.

**How** Added

Calculate \(\hat{\boldsymbol\beta}\) from data

- Write \(\boldsymbol{y}\) (\(n\times1\)) and \(\boldsymbol{X}\) (\(n\times(p+1)\), first column all 1s).
- Calculate \(\boldsymbol{X}^T\boldsymbol{X}\). Entry \((j,k)\) is \(\sum_i x_{ij}x_{ik}\).
- Calculate \(\boldsymbol{X}^T\boldsymbol{y}\). Entry \(j\) is \(\sum_i x_{ij}y_i\).
- Make sure that \(\det(\boldsymbol{X}^T\boldsymbol{X})\neq0\).
- Solve \((\boldsymbol{X}^T\boldsymbol{X})\boldsymbol\beta=\boldsymbol{X}^T\boldsymbol{y}\).

**Self-check:** (1) \(\boldsymbol{X}^T\boldsymbol{X}\) is symmetric, and its entry \((1,1)\) is \(n\). (2) Entry 1 of \(\boldsymbol{X}^T\boldsymbol{y}\) is \(\sum_iy_i\). (3) \((\boldsymbol{X}^T\boldsymbol{X})\hat{\boldsymbol\beta}\) equals \(\boldsymbol{X}^T\boldsymbol{y}\).

**Example** Added

\(n=4\), one covariate (\(p=1\)), \(\boldsymbol\beta=(\beta_0,\beta_1)^T\).

Data: \(x=1,2,3,4\) and \(y=2,3,5,6\).

1

Write \(\boldsymbol{y}\) and \(\boldsymbol{X}\) How step 1

\[\boldsymbol{y}=\left[\begin{array}{c}2\\3\\5\\6\end{array}\right],\qquad \boldsymbol{X}=\left[\begin{array}{cc}1&1\\1&2\\1&3\\1&4\end{array}\right]\]

2

Calculate \(\boldsymbol{X}^T\boldsymbol{X}\) How step 2

\[(1,1):\ 1+1+1+1=4\]

\[(1,2)=(2,1):\ 1+2+3+4=10\]

\[(2,2):\ 1^2+2^2+3^2+4^2=1+4+9+16=30\]

\[\boldsymbol{X}^T\boldsymbol{X}=\left[\begin{array}{cc}4&10\\10&30\end{array}\right]\]

**Self-check:** symmetric; entry \((1,1)=4=n\).

3

Calculate \(\boldsymbol{X}^T\boldsymbol{y}\) How step 3

\[\text{entry }1:\ 2+3+5+6=16\]

\[\text{entry }2:\ 1(2)+2(3)+3(5)+4(6)=2+6+15+24=47\]

\[\boldsymbol{X}^T\boldsymbol{y}=\left[\begin{array}{c}16\\47\end{array}\right]\]

**Self-check:** entry 1 is \(\sum_iy_i\).

4

Make sure that the inverse exists How step 4

\[\det(\boldsymbol{X}^T\boldsymbol{X})=4(30)-10(10)=120-100=20\neq0\]

The columns of \(\boldsymbol{X}\) are linearly independent.

5

Find \((\boldsymbol{X}^T\boldsymbol{X})^{-1}\) How step 5

Rows \((a,b),(c,d)\) → \(\frac{1}{ad-bc}\) times rows \((d,-b),(-c,a)\).

\[(\boldsymbol{X}^T\boldsymbol{X})^{-1}=\frac{1}{20}\left[\begin{array}{cc}30&-10\\-10&4\end{array}\right]\]

6

Calculate \(\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\) How step 5 · Slides p.20

\[\hat{\boldsymbol\beta}=\frac{1}{20}\left[\begin{array}{c}30(16)-10(47)\\-10(16)+4(47)\end{array}\right]\]

\[\hat{\boldsymbol\beta}=\frac{1}{20}\left[\begin{array}{c}480-470\\-160+188\end{array}\right]\]

\[\hat{\boldsymbol\beta}=\frac{1}{20}\left[\begin{array}{c}10\\28\end{array}\right]\]

\[\hat{\boldsymbol\beta}=\left[\begin{array}{c}\hat\beta_0\\\hat\beta_1\end{array}\right]=\left[\begin{array}{c}0.5\\1.4\end{array}\right]\]

**Basis:** Slides p.20. Step 4 makes the solution unique.

7

Put \(\hat{\boldsymbol\beta}\) back into the equations Self-check 3

\[\text{row }1:\ 4(0.5)+10(1.4)=2+14=16\]

\[\text{row }2:\ 10(0.5)+30(1.4)=5+42=47\]

**Self-check:** 16 and 47 equal \(\boldsymbol{X}^T\boldsymbol{y}\).

Model values \(0.5+1.4x\): 1.9, 3.3, 4.7, 6.1. Differences \(y_i-(\boldsymbol{X}\hat{\boldsymbol\beta})_i\): 0.1, −0.3, 0.3, −0.1.

\[S(\hat{\boldsymbol\beta})=0.1^2+(-0.3)^2+0.3^2+(-0.1)^2=0.01+0.09+0.09+0.01=0.2\]

Result: \(\hat{\boldsymbol\beta}=(0.5,\,1.4)^T\), \(S(\hat{\boldsymbol\beta})=0.2\). ▲

In the figure, \(\beta_0\) stays at 0.5 and only \(\beta_1\) changes. Then \(S=0.2+30(\beta_1-1.4)^2\), with \(30=\sum_ix_i^2\).

[figure]
Figure 3-1. \(x=1,2,3,4\), \(y=2,3,5,6\). Top: \(S\) is smallest at \(\hat\beta_1=1.4\). Bottom: the log-likelihood (Section 03.3) is largest at the same point.

At \(\beta_1=\hat\beta_1\pm0.1\), \(S=0.2+30(0.1)^2=0.5\).

**Why** Slides p.20

Rules from Unit 01, with \(\boldsymbol\beta\) in place of \(\boldsymbol{y}\):

Rule A: for a constant vector \(\boldsymbol{a}\), \(\dfrac{\partial(\boldsymbol{a}^T\boldsymbol{y})}{\partial \boldsymbol{y}}=\boldsymbol{a}\).

Rule B: for a constant symmetric matrix \(\boldsymbol{A}\), \(\dfrac{\partial(\boldsymbol{y}^T\boldsymbol{A}\boldsymbol{y})}{\partial \boldsymbol{y}}=2\boldsymbol{A}\boldsymbol{y}\).

1

\[S(\boldsymbol\beta)=(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\]

2

\[S(\boldsymbol\beta)=(\boldsymbol{y}^T-\boldsymbol\beta^T\boldsymbol{X}^T)(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\]

\((\boldsymbol{X}\boldsymbol\beta)^T=\boldsymbol\beta^T\boldsymbol{X}^T\).

3

\[S(\boldsymbol\beta)=\boldsymbol{y}^T\boldsymbol{y}-\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta-\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{y}+\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta\]

4

\[\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{y}=(\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{y})^T=\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta\]

A \(1\times1\) value equals its transpose.

5

\[S(\boldsymbol\beta)=\boldsymbol{y}^T\boldsymbol{y}-2\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta+\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta\]

Line 3 of Slides p.20.

6

\[\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta=(\boldsymbol{X}^T\boldsymbol{y})^T\boldsymbol\beta\]

Form \(\boldsymbol{a}^T\boldsymbol\beta\), \(\boldsymbol{a}=\boldsymbol{X}^T\boldsymbol{y}\).

7

\[\frac{\partial(\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta)}{\partial\boldsymbol\beta}=\boldsymbol{X}^T\boldsymbol{y}\]

Rule A.

8

\[(\boldsymbol{X}^T\boldsymbol{X})^T=\boldsymbol{X}^T(\boldsymbol{X}^T)^T=\boldsymbol{X}^T\boldsymbol{X}\]

Symmetric: Rule B applies.

9

\[\frac{\partial(\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta)}{\partial\boldsymbol\beta}=2\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta\]

Rule B with \(\boldsymbol{A}=\boldsymbol{X}^T\boldsymbol{X}\).

10

\[\frac{\partial S(\boldsymbol\beta)}{\partial\boldsymbol\beta}=0-2\boldsymbol{X}^T\boldsymbol{y}+2\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta\]

Steps 7 and 9.

11

\[-2\boldsymbol{X}^T\boldsymbol{y}+2\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta=0\]

The derivative is 0 at the minimum.

12

\[2\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta=2\boldsymbol{X}^T\boldsymbol{y}\]

13

\[(\boldsymbol{X}^T\boldsymbol{X})\boldsymbol\beta=\boldsymbol{X}^T\boldsymbol{y}\]

14

\[\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\]

Multiply on the left by \((\boldsymbol{X}^T\boldsymbol{X})^{-1}\). ∎

Check of step 11 on the example: \(-2(16,47)^T+2(16,47)^T=(0,0)^T\).

### 03.3 Maximum likelihood Slides p.21–22

Slide p.21 builds up p.22.

**What** Slides p.22

Maximum Likelihood · Lecture 6 · p.22 Under our assumptions, we have: \[\boldsymbol{y}\sim MVN(\boldsymbol{X}\boldsymbol\beta,\sigma^2\boldsymbol{I})\] \[\mathcal{L}(\boldsymbol\beta,\sigma^2|\mathbf{Y})=\frac{1}{(2\pi)^{\frac n2}|\sigma^2\boldsymbol{I}|^{\frac12}}\exp\left\{-\frac12(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\sigma^2\boldsymbol{I})^{-1}(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\right\}\] \[\ell(\boldsymbol\beta,\sigma^2|\mathbf{Y})=-\frac n2\log(2\pi)-\frac n2\log\sigma^2-\frac{1}{2\sigma^2}(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\] Look familiar?
So \(\hat{\boldsymbol\beta}_{MLE}=\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\)
• I.e. MLE=OLS (when all our assumptions hold)

Likelihood \(\mathcal{L}(\boldsymbol\beta,\sigma^2|\mathbf{Y})\): the MVN density of the observed data, as a function of \(\boldsymbol\beta\) and \(\sigma^2\).

Log-likelihood \(\ell\): \(\log\mathcal{L}\) (natural log). It has its maximum where \(\mathcal{L}\) has it.

Maximum likelihood estimator (MLE) \(\hat{\boldsymbol\beta}_{MLE}\): the \(\boldsymbol\beta\) with the largest \(\mathcal{L}\).

"Look familiar?": only the last term of \(\ell\) contains \(\boldsymbol\beta\), and it is \(-\frac{1}{2\sigma^2}S(\boldsymbol\beta)\). The largest \(\ell\) occurs at the smallest \(S\). The assumptions are linearity, independence, normality, and equal variance.

**How** Added

Get \(\hat{\boldsymbol\beta}_{MLE}\) from the model

- Write \(\boldsymbol{y}\sim MVN(\boldsymbol{X}\boldsymbol\beta,\sigma^2\boldsymbol{I})\).
- Write \(\mathcal{L}(\boldsymbol\beta,\sigma^2|\mathbf{Y})\). Take the log to get \(\ell(\boldsymbol\beta,\sigma^2|\mathbf{Y})\).
- Find the term of \(\ell\) with \(\boldsymbol\beta\): \(-\frac{1}{2\sigma^2}(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\).
- The factor \(-\frac{1}{2\sigma^2}\) is negative. Maximize \(\ell\) by minimizing \(S(\boldsymbol\beta)\).
- Use Section 03.2: \(\hat{\boldsymbol\beta}_{MLE}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\).

**Self-check:** (1) A change of \(\sigma^2\) does not move the maximizing \(\boldsymbol\beta\). (2) \(\ell(\hat{\boldsymbol\beta},\sigma^2|\mathbf{Y})\) is larger than \(\ell\) at any other \(\boldsymbol\beta\).

**Example** Added

Data of Section 03.2 (\(n=4\)). \(\sigma^2\) is unknown. Fix \(\sigma^2=1\), then \(\sigma^2=0.5\). Unit 05 estimates \(\sigma^2\).

1

Write the three terms of \(\ell\) How step 2

\[\ell(\boldsymbol\beta,\sigma^2|\mathbf{Y})=-\frac{4}{2}\log(2\pi)-\frac{4}{2}\log\sigma^2-\frac{1}{2\sigma^2}S(\boldsymbol\beta)\]

\(\frac n2=2\).

2

Calculate at \(\boldsymbol\beta=\hat{\boldsymbol\beta}\) and \(\sigma^2=1\) Slides p.22

\[-2\log(2\pi)=-3.675754\]

\[-2\log 1=0\]

\[-\tfrac{1}{2(1)}S(\hat{\boldsymbol\beta})=-\tfrac{0.2}{2}=-0.1\]

\[\ell(\hat{\boldsymbol\beta},1|\mathbf{Y})=-3.675754+0-0.1=-3.775754\]

3

Move \(\beta_1\) by \(\pm0.1\) and keep \(\beta_0=0.5\) Self-check 2

\[S=0.2+30(0.1)^2=0.5\]

\[\ell=-3.675754+0-\tfrac{0.5}{2}=-3.925754\]

\[-3.925754<-3.775754\]

Both sides; bottom curve of Figure 3-1.

4

Calculate again with \(\sigma^2=0.5\) Self-check 1

\[-2\log 0.5=1.386294\]

\[\ell(\hat{\boldsymbol\beta},0.5|\mathbf{Y})=-3.675754+1.386294-\tfrac{0.2}{1}=-2.489460\]

\[\beta_1=\hat\beta_1\pm0.1:\ \ell=-3.675754+1.386294-\tfrac{0.5}{1}=-2.789460\]

**Self-check:** \(\ell\) changes, but its maximum stays at \(\hat{\boldsymbol\beta}\). \(\sigma^2\) changes only the positive factor \(\frac{1}{2\sigma^2}\).

Result: \(\hat{\boldsymbol\beta}_{MLE}=(0.5,\,1.4)^T\), the OLS estimate. ▲

**Why** Slides p.22

1

\[\mathcal{L}(\boldsymbol\beta,\sigma^2|\mathbf{Y})=(2\pi)^{-\frac n2}|\sigma^2\boldsymbol{I}|^{-\frac12}\exp\left\{-\frac12(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\sigma^2\boldsymbol{I})^{-1}(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\right\}\]

MVN density.

2

\[|\sigma^2\boldsymbol{I}|=(\sigma^2)^n\]

Diagonal matrix: product of diagonal entries.

3

\[(\sigma^2\boldsymbol{I})^{-1}=\frac{1}{\sigma^2}\boldsymbol{I}\]

4

\[\mathcal{L}(\boldsymbol\beta,\sigma^2|\mathbf{Y})=(2\pi)^{-\frac n2}(\sigma^2)^{-\frac n2}\exp\left\{-\frac{1}{2\sigma^2}(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\right\}\]

Put in steps 2 and 3.

5

\[\ell(\boldsymbol\beta,\sigma^2|\mathbf{Y})=\log\left[(2\pi)^{-\frac n2}\right]+\log\left[(\sigma^2)^{-\frac n2}\right]-\frac{1}{2\sigma^2}(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\]

\(\log(abc)=\log a+\log b+\log c\) and \(\log e^{u}=u\).

6

\[\ell(\boldsymbol\beta,\sigma^2|\mathbf{Y})=-\frac n2\log(2\pi)-\frac n2\log\sigma^2-\frac{1}{2\sigma^2}(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\]

\(\log a^{k}=k\log a\). Slides p.22.

7

\[\ell(\boldsymbol\beta,\sigma^2|\mathbf{Y})=-\frac n2\log(2\pi)-\frac n2\log\sigma^2-\frac{1}{2\sigma^2}S(\boldsymbol\beta)\]

Definition of \(S(\boldsymbol\beta)\): "Look familiar?"

8

\[\frac{\partial\ell}{\partial\boldsymbol\beta}=-\frac{1}{2\sigma^2}\frac{\partial S(\boldsymbol\beta)}{\partial\boldsymbol\beta}=-\frac{1}{2\sigma^2}\left(-2\boldsymbol{X}^T\boldsymbol{y}+2\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta\right)\]

Section 03.2, Why step 10.

9

\[-2\boldsymbol{X}^T\boldsymbol{y}+2\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta=0\]

Set to 0; multiply by \(-2\sigma^2\).

10

\[\hat{\boldsymbol\beta}_{MLE}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}=\hat{\boldsymbol\beta}\]

Section 03.2, Why steps 11–14. ∎

### 03.4 Practice Added

**Q1.** Use the data \(x=2,4,6\) and \(y=1,3,8\). Calculate \(\boldsymbol{X}^T\boldsymbol{X}\), \(\boldsymbol{X}^T\boldsymbol{y}\), and \(\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\).

Answer

\(\boldsymbol{X}\) has rows \((1,2)\), \((1,4)\), \((1,6)\).

\(\boldsymbol{X}^T\boldsymbol{X}\): entry \((1,1)=3\); entry \((1,2)=2+4+6=12\); entry \((2,2)=4+16+36=56\).

\(\boldsymbol{X}^T\boldsymbol{y}\): entry \(1=1+3+8=12\); entry \(2=2(1)+4(3)+6(8)=2+12+48=62\).

\(\det(\boldsymbol{X}^T\boldsymbol{X})=3(56)-12(12)=168-144=24\).

\(\hat\beta_0=\frac{1}{24}\big(56(12)-12(62)\big)=\frac{1}{24}(672-744)=\frac{-72}{24}=-3\).

\(\hat\beta_1=\frac{1}{24}\big(-12(12)+3(62)\big)=\frac{1}{24}(-144+186)=\frac{42}{24}=1.75\).

Check row 1: \(3(-3)+12(1.75)=-9+21=12\). Check row 2: \(12(-3)+56(1.75)=-36+98=62\). \(\hat{\boldsymbol\beta}=(-3,\,1.75)^T\).

**Q2.** Intercept-only model \(y_i=\beta_0+\epsilon_i\): \(\boldsymbol{X}\) is an \(n\times1\) column of 1s. Use \(\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\) to find \(\hat\beta_0\). Calculate it for \(y=2,3,5,6\).

Answer

\(\boldsymbol{X}=(1,\dots,1)^T\).

\(\boldsymbol{X}^T\boldsymbol{X}=\sum_{i=1}^n1\cdot1=n\).

\(\boldsymbol{X}^T\boldsymbol{y}=\sum_{i=1}^ny_i\).

\(\hat\beta_0=n^{-1}\sum_{i=1}^ny_i=\bar y\), the sample mean.

Data: \(n=4\), \(\sum_iy_i=2+3+5+6=16\), \(\hat\beta_0=16/4=4\).

**Q3.** Use \(\boldsymbol{y}\sim MVN(\boldsymbol{X}\boldsymbol\beta,\sigma^2\boldsymbol{I})\). Why does the \(\boldsymbol\beta\) with the largest \(\ell(\boldsymbol\beta,\sigma^2|\mathbf{Y})\) not depend on \(\sigma^2\)? For \(n=4\), \(S(\hat{\boldsymbol\beta})=0.2\), calculate \(\ell(\hat{\boldsymbol\beta},2|\mathbf{Y})\).

Answer

\(\ell(\boldsymbol\beta,\sigma^2|\mathbf{Y})=-\frac n2\log(2\pi)-\frac n2\log\sigma^2-\frac{1}{2\sigma^2}S(\boldsymbol\beta)\).

Only the third term contains \(\boldsymbol\beta\): the positive \(\frac{1}{2\sigma^2}\) times \(-S(\boldsymbol\beta)\).

For each \(\sigma^2>0\), the largest \(\ell\) occurs at the smallest \(S\), at \(\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\).

Numbers: \(-2\log(2\pi)=-3.675754\), \(-2\log2=-1.386294\), \(-\frac{0.2}{2(2)}=-0.05\).

\(\ell(\hat{\boldsymbol\beta},2|\mathbf{Y})=-3.675754-1.386294-0.05=-5.112048\).

## 04 · Properties of the LS estimator, fitted values, and residuals

Plan · Slides p.23–32

Step 1: Show \(E[\hat{\boldsymbol\beta}]=\boldsymbol\beta\) (Slides p.23–25).

Step 2: Find the covariance matrix of \(\hat{\boldsymbol\beta}\) (Slides p.26–27).

Step 3: Write the distribution of \(\hat{\boldsymbol\beta}\) and of each \(\hat\beta_j\) (Slides p.28–29).

Step 4: Define the fitted values and the hat matrix \(\boldsymbol H\) (Slides p.30).

Step 5: Define the residuals and show \(\boldsymbol X^T\boldsymbol e=\boldsymbol 0\) (Slides p.31–32).

Facts from earlier units:

Model (Slides p.7, p.13): \(\boldsymbol y=\boldsymbol X\boldsymbol\beta+\boldsymbol\epsilon\), \(\boldsymbol\epsilon\sim MVN(\boldsymbol 0,\sigma^2\boldsymbol I)\). Equivalently, \(\boldsymbol y\sim MVN(\boldsymbol X\boldsymbol\beta,\sigma^2\boldsymbol I)\).

\(E[\boldsymbol y]=\boldsymbol X\boldsymbol\beta\) and \(\mathrm{Var}[\boldsymbol y]=\sigma^2\boldsymbol I\).

\(\boldsymbol X\) is a known \(n\times(p+1)\) matrix of constants.

For a constant matrix \(\boldsymbol C\) (Slides p.4): \(E[\boldsymbol C\boldsymbol y]=\boldsymbol C\,E[\boldsymbol y]\) and \(\mathrm{Var}[\boldsymbol C\boldsymbol y]=\boldsymbol C\,\mathrm{Var}[\boldsymbol y]\,\boldsymbol C^T\).

\(\mathrm{Var}[\cdot]\) and \(\mathrm{Var}(\cdot)\) have the same meaning.

Least squares estimator (Unit 03, Slides p.20): \(\hat{\boldsymbol\beta}=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol y\).

All examples use this data set Added: \(n=4\), \(p=1\), row \(i\) of \(\boldsymbol X\) is \((1,\ x_i)\).
\[x=(0,\ 1,\ 2,\ 3),\qquad \boldsymbol y=(1,\ 3,\ 2,\ 5)^T,\qquad \boldsymbol X=\left[\begin{array}{cc}1&0\\1&1\\1&2\\1&3\end{array}\right]\]

1

\[\boldsymbol X^T\boldsymbol X=\left[\begin{array}{cc}1+1+1+1&0+1+2+3\\0+1+2+3&0+1+4+9\end{array}\right]=\left[\begin{array}{cc}4&6\\6&14\end{array}\right]\]

Entry \((j,k)\): column \(j\) dot column \(k\).

2

\[\det(\boldsymbol X^T\boldsymbol X)=4\cdot14-6\cdot6=56-36=20\]

3

\[(\boldsymbol X^T\boldsymbol X)^{-1}=\frac{1}{20}\left[\begin{array}{cc}14&-6\\-6&4\end{array}\right]=\left[\begin{array}{cc}0.7&-0.3\\-0.3&0.2\end{array}\right]\]

\(2\times2\) inverse: swap diagonal, negate off-diagonal, divide.

4

\[\boldsymbol X^T\boldsymbol y=\left[\begin{array}{c}1+3+2+5\\0\cdot1+1\cdot3+2\cdot2+3\cdot5\end{array}\right]=\left[\begin{array}{c}11\\22\end{array}\right]\]

5

\[\hat{\boldsymbol\beta}=\left[\begin{array}{c}0.7\cdot11-0.3\cdot22\\-0.3\cdot11+0.2\cdot22\end{array}\right]=\left[\begin{array}{c}7.7-6.6\\-3.3+4.4\end{array}\right]\]

6

\[\hat{\boldsymbol\beta}=\left[\begin{array}{c}1.1\\1.1\end{array}\right]\]

### 04.1 The mean of \(\hat{\boldsymbol\beta}\): unbiasedness Slides p.23–25

**What** Slides p.25

Properties of \(\hat{\boldsymbol\beta}\) · Lecture 6 · p.25 \[E[\hat{\boldsymbol\beta}]=E[(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol y]=\boldsymbol\beta\]

\(\hat{\boldsymbol\beta}\) comes from the random \(\boldsymbol y\). Each new data set gives a different \(\hat{\boldsymbol\beta}\). Its mean over all data sets is exactly \(\boldsymbol\beta\). Unbiased: the mean of the estimator equals the parameter.

**How** Added

Test if an estimator \(\boldsymbol C\boldsymbol y\) is unbiased

- Write the estimator as \(\boldsymbol C\boldsymbol y\), with \(\boldsymbol C\) built only from \(\boldsymbol X\) and numbers.
- For \(\hat{\boldsymbol\beta}\), \(\boldsymbol C=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\).
- Move \(E\) inside: \(E[\boldsymbol C\boldsymbol y]=\boldsymbol C\,E[\boldsymbol y]\).
- Put in \(E[\boldsymbol y]=\boldsymbol X\boldsymbol\beta\) to get \(\boldsymbol C\boldsymbol X\boldsymbol\beta\).
- Calculate \(\boldsymbol C\boldsymbol X\). If \(\boldsymbol C\boldsymbol X=\boldsymbol I\), then \(E[\boldsymbol C\boldsymbol y]=\boldsymbol\beta\).

**Self-check:** \(\boldsymbol C\) is \((p+1)\times n\). \(\boldsymbol C\boldsymbol X\) is \((p+1)\times(p+1)\), with 1 on the diagonal and 0 elsewhere.

**Example** Added

Steps 2 and 5 for the small data set:

1

\[\boldsymbol C=\left[\begin{array}{cc}0.7&-0.3\\-0.3&0.2\end{array}\right]\left[\begin{array}{cccc}1&1&1&1\\0&1&2&3\end{array}\right]\]

2

\[\boldsymbol C=\left[\begin{array}{cccc}0.7&0.7-0.3&0.7-0.6&0.7-0.9\\-0.3&-0.3+0.2&-0.3+0.4&-0.3+0.6\end{array}\right]\]

3

\[\boldsymbol C=\left[\begin{array}{cccc}0.7&0.4&0.1&-0.2\\-0.3&-0.1&0.1&0.3\end{array}\right]\]

4

\[\boldsymbol C\boldsymbol X=\left[\begin{array}{cc}0.7+0.4+0.1-0.2&0+0.4+0.2-0.6\\-0.3-0.1+0.1+0.3&0-0.1+0.2+0.9\end{array}\right]\]

5

\[\boldsymbol C\boldsymbol X=\left[\begin{array}{cc}1&0\\0&1\end{array}\right]=\boldsymbol I\]

\(E[\hat{\boldsymbol\beta}]=\boldsymbol I\boldsymbol\beta=\boldsymbol\beta\). Check: row 1 of \(\boldsymbol C\boldsymbol y\) is \(0.7\cdot1+0.4\cdot3+0.1\cdot2-0.2\cdot5=0.7+1.2+0.2-1.0=1.1\). ▲

**Why** Slides p.25

1

\[E[\hat{\boldsymbol\beta}]=E[(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol y]\]

2

\[=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T E[\boldsymbol y]\]

\(E[\boldsymbol C\boldsymbol y]=\boldsymbol C\,E[\boldsymbol y]\).

3

\[=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T(\boldsymbol X\boldsymbol\beta)\]

Model: \(E[\boldsymbol y]=\boldsymbol X\boldsymbol\beta\).

4

\[=(\boldsymbol X^T\boldsymbol X)^{-1}(\boldsymbol X^T\boldsymbol X)\boldsymbol\beta\]

5

\[=\boldsymbol\beta\]

∎

### 04.2 The covariance matrix of \(\hat{\boldsymbol\beta}\) Slides p.26–27

**What** Slides p.27

Properties of \(\hat{\boldsymbol\beta}\) · Lecture 6 · p.27 \[\mathrm{Var}[\hat{\boldsymbol\beta}]=\mathrm{Var}[(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol y]=\sigma^2(\boldsymbol X^T\boldsymbol X)^{-1}\]

\(\mathrm{Var}[\hat{\boldsymbol\beta}]\) is \((p+1)\times(p+1)\). Its diagonal entry for \(\beta_j\) is \(\mathrm{Var}[\hat\beta_j]\). \(\sigma^2\) is unknown. \((\boldsymbol X^T\boldsymbol X)^{-1}\) is known.

The slides write \(\boldsymbol V=(\boldsymbol X^T\boldsymbol X)^{-1}\) (p.29). Rows and columns follow the order \(\beta_0,\beta_1,\dots,\beta_p\). \(V_{jj}\) is the diagonal entry for \(\beta_j\).

**How** Added

Find \(\mathrm{Var}[\hat\beta_j]\)

- Make \(\boldsymbol X\), with 1 in each entry of column 1.
- Calculate \(\boldsymbol X^T\boldsymbol X\).
- Find \(\boldsymbol V=(\boldsymbol X^T\boldsymbol X)^{-1}\).
- Take \(V_{jj}\). The first diagonal entry is for \(\beta_0\).
- Write \(\mathrm{Var}[\hat\beta_j]=\sigma^2V_{jj}\).

**Self-check:** \(\boldsymbol V\) is \((p+1)\times(p+1)\) and symmetric. Each \(V_{jj}\) is larger than 0.

**Example** Added

Step 1–3: \(\boldsymbol V=\left[\begin{array}{cc}0.7&-0.3\\-0.3&0.2\end{array}\right]\), \(2\times2\) because \(p+1=2\).

Step 4: \(V_{00}=0.7\) (for \(\beta_0\)) and \(V_{11}=0.2\) (for \(\beta_1\)).

Step 5: \(\mathrm{Var}[\hat\beta_0]=0.7\,\sigma^2\) (intercept).

Step 5: \(\mathrm{Var}[\hat\beta_1]=0.2\,\sigma^2\) (slope).

\(\sigma^2\) is still unknown. Unit 05 estimates it and calculates the standard error. ▲

**Why** Slides p.27

The slides do lines 3 and 4 in one step Added.

1

\[\mathrm{Var}[\hat{\boldsymbol\beta}]=\mathrm{Var}[(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol y]\]

2

\[=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\,\mathrm{Var}[\boldsymbol y]\,((\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T)^T\]

\(\mathrm{Var}[\boldsymbol C\boldsymbol y]=\boldsymbol C\,\mathrm{Var}[\boldsymbol y]\,\boldsymbol C^T\) (Slides p.4).

3

\[=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\,\mathrm{Var}[\boldsymbol y]\,(\boldsymbol X^T)^T((\boldsymbol X^T\boldsymbol X)^{-1})^T\]

Added: \((\boldsymbol A\boldsymbol B)^T=\boldsymbol B^T\boldsymbol A^T\).

4

\[=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\,\mathrm{Var}[\boldsymbol y]\,\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\]

Symmetric \(\boldsymbol X^T\boldsymbol X\) has a symmetric inverse.

5

\[=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T(\sigma^2\boldsymbol I)\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\]

Model: \(\mathrm{Var}[\boldsymbol y]=\sigma^2\boldsymbol I\).

6

\[=\sigma^2(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\]

7

\[=\sigma^2(\boldsymbol X^T\boldsymbol X)^{-1}\]

∎

### 04.3 The distribution of \(\hat{\boldsymbol\beta}\) Slides p.28–29

**What** Slides p.29

Properties of \(\hat{\boldsymbol\beta}\) · Lecture 6 · p.29 And \(\hat{\boldsymbol\beta}\) is MVN-distributed. Why? \[\Longrightarrow\ \hat{\boldsymbol\beta}\sim N(\boldsymbol\beta,\ \sigma^2(\boldsymbol X^T\boldsymbol X)^{-1})\] From property 2 of MVN distributions, this gives: \[\hat\beta_j\sim N(\beta_j,\ \sigma^2V_{jj})\] where \(\boldsymbol V=(\boldsymbol X^T\boldsymbol X)^{-1}\).

Line 1 combines the mean (04.1) and the covariance matrix (04.2). "Property 2" is the marginal property (Slides p.6). It gives one component \(\hat\beta_j\) a normal distribution.

**How** Added

Write the distribution of one \(\hat\beta_j\)

- Find \(j\): the intercept has \(j=0\), covariate \(k\) has \(j=k\).
- Find \(\boldsymbol V\) (How box of 04.2).
- Take \(V_{jj}\).
- Write \(\hat\beta_j\sim N(\beta_j,\ \sigma^2V_{jj})\). The mean is the parameter \(\beta_j\), not a number.

**Self-check:** The variance is \(\sigma^2\) times a positive number.

**Example** Added

Slope estimator \(\hat\beta_1\), small data set:

1

\[j=1\]

2

\[\boldsymbol V=\left[\begin{array}{cc}0.7&-0.3\\-0.3&0.2\end{array}\right]\]

3

\[V_{11}=0.2\]

4

\[\hat\beta_1\sim N(\beta_1,\ 0.2\,\sigma^2)\]

The value \(\hat\beta_1=1.1\) is one draw from this distribution. ▲

**Why** Added

Added · An answer to the "Why?" on p.29

The slides give no reason. The reason is the linearity property (Slides p.6):

Lecture 6 · p.6 Linearity: If \(\boldsymbol u=\boldsymbol C\boldsymbol y+\boldsymbol d\), then: \[\boldsymbol u\sim MVN(\boldsymbol C\boldsymbol\mu+\boldsymbol d,\ \boldsymbol C\boldsymbol\Sigma\boldsymbol C^T)\]

with \(\boldsymbol y\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\).

1

\[\boldsymbol y\sim MVN(\boldsymbol X\boldsymbol\beta,\ \sigma^2\boldsymbol I)\]

Model (p.7).

2

\[\hat{\boldsymbol\beta}=\boldsymbol C\boldsymbol y+\boldsymbol 0,\qquad \boldsymbol C=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\]

\(\boldsymbol C\) is constant; \(\boldsymbol d=\boldsymbol 0\).

3

\[\hat{\boldsymbol\beta}\sim MVN(\boldsymbol C\boldsymbol X\boldsymbol\beta,\ \boldsymbol C(\sigma^2\boldsymbol I)\boldsymbol C^T)\]

Linearity.

4

\[\boldsymbol C\boldsymbol X\boldsymbol\beta=\boldsymbol\beta\]

Why of 04.1, lines 3–5.

5

\[\boldsymbol C(\sigma^2\boldsymbol I)\boldsymbol C^T=\sigma^2(\boldsymbol X^T\boldsymbol X)^{-1}\]

Why of 04.2, lines 2–7.

6

\[\hat{\boldsymbol\beta}\sim N(\boldsymbol\beta,\ \sigma^2(\boldsymbol X^T\boldsymbol X)^{-1})\]

Line 1 of p.29. ∎

Line 2 of p.29: the marginal property (p.6) takes entry \(j\) of the mean and diagonal entry \(j\) of \(\sigma^2\boldsymbol V\).

### 04.4 Fitted values and the hat matrix \(\boldsymbol H\) Slides p.30

**What** Slides p.30

Fitted values · Lecture 6 · p.30 \[\hat{\boldsymbol y}=\boldsymbol X\hat{\boldsymbol\beta}=\boldsymbol H\boldsymbol y\] where \(\boldsymbol H=\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\) is called the Hat matrix.

Fitted value: the estimated regression equation at the covariates of observation \(i\), \(\hat y_i=\hat\beta_0+\hat\beta_1x_{i1}+\cdots+\hat\beta_px_{ip}\). Hat matrix \(\boldsymbol H\): the \(n\times n\) matrix that changes \(\boldsymbol y\) into \(\hat{\boldsymbol y}\). \(\boldsymbol H\) depends only on \(\boldsymbol X\).

**How** Added

Calculate the fitted values

- Calculate \(\hat{\boldsymbol\beta}\).
- Take row \(i\) of \(\boldsymbol X\), \((1,x_{i1},\dots,x_{ip})\).
- Multiply it with \(\hat{\boldsymbol\beta}\) term by term and add, to get \(\hat y_i\).
- Do Steps 2 and 3 for each \(i=1,\dots,n\).
- Alternative: calculate \(\boldsymbol H=\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\), then \(\boldsymbol H\boldsymbol y\).

**Self-check:** \(\boldsymbol H\) is \(n\times n\) and symmetric. Steps 4 and 5 give the same \(\hat{\boldsymbol y}\).

**Example** Added

Step 1: \(\hat\beta_0=1.1\), \(\hat\beta_1=1.1\).

Steps 2–3, \(i=1\): \(\hat y_1=1.1\cdot1+1.1\cdot0=1.1+0=1.1\).

Steps 2–3, \(i=2\): \(\hat y_2=1.1\cdot1+1.1\cdot1=1.1+1.1=2.2\).

Steps 2–3, \(i=3\): \(\hat y_3=1.1\cdot1+1.1\cdot2=1.1+2.2=3.3\).

Steps 2–3, \(i=4\): \(\hat y_4=1.1\cdot1+1.1\cdot3=1.1+3.3=4.4\).

Step 5: \(\boldsymbol H=\boldsymbol X\boldsymbol C\), with \(\boldsymbol C\) from 04.1. Row \(i\) of \(\boldsymbol H\) is \((\text{row 1 of }\boldsymbol C)+x_i\cdot(\text{row 2 of }\boldsymbol C)\).

1

\[\boldsymbol H=\left[\begin{array}{cccc}0.7&0.4&0.1&-0.2\\0.7-0.3&0.4-0.1&0.1+0.1&-0.2+0.3\\0.7-0.6&0.4-0.2&0.1+0.2&-0.2+0.6\\0.7-0.9&0.4-0.3&0.1+0.3&-0.2+0.9\end{array}\right]\]

\(x_i=0,1,2,3\).

2

\[\boldsymbol H=\left[\begin{array}{cccc}0.7&0.4&0.1&-0.2\\0.4&0.3&0.2&0.1\\0.1&0.2&0.3&0.4\\-0.2&0.1&0.4&0.7\end{array}\right]\]

3

\[\boldsymbol H\boldsymbol y=\left[\begin{array}{c}0.7\cdot1+0.4\cdot3+0.1\cdot2-0.2\cdot5\\0.4\cdot1+0.3\cdot3+0.2\cdot2+0.1\cdot5\\0.1\cdot1+0.2\cdot3+0.3\cdot2+0.4\cdot5\\-0.2\cdot1+0.1\cdot3+0.4\cdot2+0.7\cdot5\end{array}\right]\]

4

\[=\left[\begin{array}{c}0.7+1.2+0.2-1.0\\0.4+0.9+0.4+0.5\\0.1+0.6+0.6+2.0\\-0.2+0.3+0.8+3.5\end{array}\right]\]

5

\[=\left[\begin{array}{c}1.1\\2.2\\3.3\\4.4\end{array}\right]\]

Same as Steps 2–4. ▲

**Why** Slides p.30

1

\[\hat{\boldsymbol y}=\boldsymbol X\hat{\boldsymbol\beta}\]

2

\[=\boldsymbol X\left[(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol y\right]\]

3

\[=\left[\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\right]\boldsymbol y\]

Matrix multiplication is associative.

4

\[=\boldsymbol H\boldsymbol y\]

∎

### 04.5 Residuals and \(\boldsymbol X^T\boldsymbol e=\boldsymbol 0\) Slides p.31–32

**What** Slides p.32

Residuals · Lecture 6 · p.32 \[\boldsymbol e=\boldsymbol y-\hat{\boldsymbol y}=(\boldsymbol I-\boldsymbol H)\boldsymbol y.\] Note: \(\boldsymbol X^T\boldsymbol e=\boldsymbol 0\). Why?

Residual: observed value minus fitted value, \(e_i=y_i-\hat y_i\). \(\boldsymbol X^T\boldsymbol e=\boldsymbol 0\) gives one equation for each column of \(\boldsymbol X\):

Column of ones: \(\sum_{i=1}^n e_i=0\).

Column of covariate \(k\): \(\sum_{i=1}^n x_{ik}e_i=0\).

Orthogonal: two vectors with dot product 0 (sum of products of matching entries). \(\boldsymbol e\) is orthogonal to each column of \(\boldsymbol X\).

**How** Added

Calculate the residuals and check \(\boldsymbol X^T\boldsymbol e=\boldsymbol 0\)

- Calculate \(\hat{\boldsymbol y}\) (How box of 04.4).
- Calculate \(e_i=y_i-\hat y_i\) for each \(i\).
- Calculate \(\sum e_i\).
- For each covariate \(k\), calculate \(\sum x_{ik}e_i\).

**Self-check:** With exact arithmetic, each of the \(p+1\) entries is exactly 0.

**Example** Added

Step 1: \(\hat{\boldsymbol y}=(1.1,\ 2.2,\ 3.3,\ 4.4)^T\).

Step 2: \(e_1=1-1.1=-0.1\).

Step 2: \(e_2=3-2.2=0.8\).

Step 2: \(e_3=2-3.3=-1.3\).

Step 2: \(e_4=5-4.4=0.6\).

Step 3: \(\sum e_i=-0.1+0.8-1.3+0.6=0\).

Step 4: \(\sum x_ie_i=0\cdot(-0.1)+1\cdot0.8+2\cdot(-1.3)+3\cdot0.6=0+0.8-2.6+1.8=0\). ▲

[figure]
Figure 4-1. Small data set (\(n=4\)): points \((x_i,y_i)\) in green, fitted line \(\hat y=1.1+1.1x\) in blue, residuals in orange. Segment length is \(|e_i|\); points above the line have \(e_i>0\). The residuals add to 0.

**Why** Slides p.31–32

Part 1 is Slides p.31. Part 2 answers the "Why?" on p.32. The slides do lines 2 and 3 of Part 2 in one step Added.

1

\[\boldsymbol e=\boldsymbol y-\hat{\boldsymbol y}\]

2

\[=\boldsymbol y-\boldsymbol X\hat{\boldsymbol\beta}\]

3

\[=\boldsymbol y-\boldsymbol H\boldsymbol y\]

04.4.

4

\[=(\boldsymbol I-\boldsymbol H)\boldsymbol y\]

∎

1

\[\boldsymbol X^T\boldsymbol e=\boldsymbol X^T(\boldsymbol y-\boldsymbol H\boldsymbol y)\]

Line 3 of Part 1.

2

\[=\boldsymbol X^T\boldsymbol y-\boldsymbol X^T\boldsymbol H\boldsymbol y\]

Added.

3

\[=\boldsymbol X^T\boldsymbol y-\boldsymbol X^T\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol y\]

4

\[=\boldsymbol X^T\boldsymbol y-\boldsymbol X^T\boldsymbol y\]

5

\[=\boldsymbol 0\]

∎

Summary of this unit

\(E[\hat{\boldsymbol\beta}]=\boldsymbol\beta\). \(\mathrm{Var}[\hat{\boldsymbol\beta}]=\sigma^2\boldsymbol V\). \(\hat\beta_j\sim N(\beta_j,\sigma^2V_{jj})\). \(\hat{\boldsymbol y}=\boldsymbol H\boldsymbol y\). \(\boldsymbol e=(\boldsymbol I-\boldsymbol H)\boldsymbol y\), \(\boldsymbol X^T\boldsymbol e=\boldsymbol 0\). Unit 05 estimates \(\sigma^2\).

### 04.6 Practice Added

**Q1.** Data: \(n=3\), \(x=(1,\ 2,\ 3)\), model \(y_i=\beta_0+\beta_1x_i+\epsilon_i\). Find \(\boldsymbol V=(\boldsymbol X^T\boldsymbol X)^{-1}\). Write the distribution of \(\hat\beta_1\) in terms of \(\sigma^2\).

Answer

\(\boldsymbol X\) has rows \((1,1)\), \((1,2)\), \((1,3)\).

\(\boldsymbol X^T\boldsymbol X=\left[\begin{array}{cc}1+1+1&1+2+3\\1+2+3&1+4+9\end{array}\right]=\left[\begin{array}{cc}3&6\\6&14\end{array}\right]\).

\(\det(\boldsymbol X^T\boldsymbol X)=3\cdot14-6\cdot6=42-36=6\).

\(\boldsymbol V=\frac16\left[\begin{array}{cc}14&-6\\-6&3\end{array}\right]=\left[\begin{array}{cc}7/3&-1\\-1&0.5\end{array}\right]\).

\(V_{11}=0.5\). By p.29, \(\hat\beta_1\sim N(\beta_1,\ 0.5\,\sigma^2)\).

**Q2.** Use the data of Q1 with \(\boldsymbol y=(2,\ 2,\ 5)^T\). Calculate \(\hat{\boldsymbol\beta}\), the fitted values, and the residuals. Check \(\boldsymbol X^T\boldsymbol e=\boldsymbol 0\).

Answer

\(\boldsymbol X^T\boldsymbol y=(2+2+5,\ 1\cdot2+2\cdot2+3\cdot5)^T=(9,\ 21)^T\).

\(\hat\beta_0=\frac16(14\cdot9-6\cdot21)=\frac16(126-126)=0\).

\(\hat\beta_1=\frac16(-6\cdot9+3\cdot21)=\frac16(-54+63)=\frac96=1.5\).

\(\hat y_1=0+1.5\cdot1=1.5\). \(\hat y_2=0+1.5\cdot2=3\). \(\hat y_3=0+1.5\cdot3=4.5\).

\(e_1=2-1.5=0.5\). \(e_2=2-3=-1\). \(e_3=5-4.5=0.5\).

\(\sum e_i=0.5-1+0.5=0\).

\(\sum x_ie_i=1\cdot0.5+2\cdot(-1)+3\cdot0.5=0.5-2+1.5=0\).

**Q3.** Show \(\boldsymbol X^T\hat{\boldsymbol y}=\boldsymbol X^T\boldsymbol y\). Check row 1 with the small data set.

Answer

1

\[\boldsymbol X^T\boldsymbol e=\boldsymbol 0\]

p.32.

2

\[\boldsymbol X^T(\boldsymbol y-\hat{\boldsymbol y})=\boldsymbol 0\]

3

\[\boldsymbol X^T\boldsymbol y-\boldsymbol X^T\hat{\boldsymbol y}=\boldsymbol 0\]

4

\[\boldsymbol X^T\hat{\boldsymbol y}=\boldsymbol X^T\boldsymbol y\]

∎

Row 1 (column of ones): \(\sum\hat y_i=\sum y_i\). \(\sum\hat y_i=1.1+2.2+3.3+4.4=11\). \(\sum y_i=1+3+2+5=11\).

## 05 · Estimating σ², calculating the estimates, and practice

Plan · Slides p.33–41

Step 1: Find the MLE \(\hat\sigma^2_{MLE}=\frac1n\boldsymbol{e}^T\boldsymbol{e}\) (Slides p.33–35).

Step 2: Change the divisor to \(n-(p+1)\) to get the unbiased \(\hat\sigma^2\) (Slides p.36).

Step 3: Calculate \(\hat{\boldsymbol\beta}\) from a system of linear equations (Slides p.37).

Step 4: Calculate the fitted values, residuals, \(\hat\sigma^2\), and standard errors (Slides p.38).

Step 5: Do the two practice questions for simple linear regression (Slides p.39–41).

Model (Slides p.13): \(\boldsymbol{y}=\boldsymbol{X}\boldsymbol\beta+\boldsymbol\epsilon\), \(\boldsymbol\epsilon\sim MVN(\boldsymbol{0},\sigma^2\boldsymbol{I})\). \(\boldsymbol{X}\) is \(n\times(p+1)\). \(p\) is the number of covariates.

The error variance \(\sigma^2\) is the variance of each \(\epsilon_i\). It is the last unknown parameter.

Least squares estimate (Unit 03): \(\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\). It is also the MLE.

Residuals (Unit 04): \(\boldsymbol{e}=\boldsymbol{y}-\boldsymbol{X}\hat{\boldsymbol\beta}\). The residual sum of squares is \(\boldsymbol{e}^T\boldsymbol{e}=\sum_{i=1}^n e_i^2\). Slides p.32: \(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\).

**The small data set of this unit** Added

The slides do not print the fit for the satisfaction data (\(n=46\), \(p=3\)). This unit uses a small data set that you can do by hand.

\(n=5\), \(p=1\). Covariate: \(x=(1,\,2,\,3,\,4,\,5)\). Outcome: \(y=(2,\,4,\,5,\,4,\,5)\).
\[\boldsymbol{X}=\left[\begin{array}{cc}1&1\\1&2\\1&3\\1&4\\1&5\end{array}\right],\qquad \boldsymbol{y}=\left[\begin{array}{c}2\\4\\5\\4\\5\end{array}\right]\]
Section 5.3 calculates \(\hat{\boldsymbol\beta}=(2.2,\,0.6)^T\) from these data.

### 05.1 MLE of \(\sigma^2\) Slides p.33–35

**What** Slides p.35

MLE of σ² · Lecture 6 · p.35 \[\ell(\boldsymbol\beta,\sigma^2\mid\boldsymbol{y})=-\frac n2\log(2\pi)-\frac n2\log\sigma^2-\frac{1}{2\sigma^2}(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\] \[\frac{\partial\ell(\boldsymbol\beta,\sigma^2\mid\boldsymbol{y})}{\partial\sigma^2}=-\frac{n}{2\sigma^2}+\frac{1}{2(\sigma^2)^2}(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)=0\] \[(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)=n\sigma^2\] \[\Longrightarrow\ \hat\sigma^2_{MLE}=\frac1n(\boldsymbol{y}-\boldsymbol{X}\hat{\boldsymbol\beta})^T(\boldsymbol{y}-\boldsymbol{X}\hat{\boldsymbol\beta})\]

\(\boldsymbol{y}-\boldsymbol{X}\hat{\boldsymbol\beta}=\boldsymbol{e}\), and \(\hat\sigma^2_{MLE}=\frac1n\boldsymbol{e}^T\boldsymbol{e}\): the mean of the squared residuals.

\(\partial\ell/\partial\sigma^2\) holds \(\boldsymbol\beta\) constant. Slides p.34 show the same page without the derivative.

**How** Added

Calculate \(\hat\sigma^2_{MLE}\)

- Calculate the fitted values \(\hat{\boldsymbol{y}}=\boldsymbol{X}\hat{\boldsymbol\beta}\).
- Calculate the residuals: \(e_i=y_i-\hat y_i\).
- Add the squared residuals to get \(\boldsymbol{e}^T\boldsymbol{e}\).
- Divide by \(n\).

**Self-check:** \(\boldsymbol{e}^T\boldsymbol{e}\ge0\) and \(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\) (Slides p.32). If not, \(\hat{\boldsymbol\beta}\) is wrong.

**Example** Added

Use \(\hat y=2.2+0.6x\) from Section 05.3.

1

Fitted values How step 1

\[\hat y_1=2.2+0.6(1)=2.8,\quad \hat y_2=2.2+0.6(2)=3.4,\quad \hat y_3=2.2+0.6(3)=4.0\]

\[\hat y_4=2.2+0.6(4)=4.6,\quad \hat y_5=2.2+0.6(5)=5.2\]

2

Residuals How step 2

\[e_1=2-2.8=-0.8,\quad e_2=4-3.4=0.6,\quad e_3=5-4.0=1.0\]

\[e_4=4-4.6=-0.6,\quad e_5=5-5.2=-0.2\]

3

Residual sum of squares How step 3

\[\boldsymbol{e}^T\boldsymbol{e}=(-0.8)^2+0.6^2+1.0^2+(-0.6)^2+(-0.2)^2\]

\[\boldsymbol{e}^T\boldsymbol{e}=0.64+0.36+1.00+0.36+0.04=2.4\]

4

Divide by \(n\) How step 4

\[\hat\sigma^2_{MLE}=\frac{2.4}{5}=0.48\]

Check: \(\sum e_i=-0.8+0.6+1.0-0.6-0.2=0\), \(\sum x_ie_i=-0.8+1.2+3.0-2.4-1.0=0\).

[figure]
Figure 5-1. Data and fitted line \(\hat y=2.2+0.6x\) (green). Each vertical segment is a residual \(e_i\). The squared lengths add to \(\boldsymbol{e}^T\boldsymbol{e}=2.4\). Purple circle: \((\bar x,\bar y)\).

**Why** Slides p.35

Let \(Q=(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\). \(Q\) does not contain \(\sigma^2\).

1

\[\ell=-\frac n2\log(2\pi)-\frac n2\log\sigma^2-\frac{1}{2\sigma^2}Q\]

Line 1 of p.35.

2

\[\ell=-\frac n2\log(2\pi)-\frac n2\log\sigma^2-\frac{Q}{2}(\sigma^2)^{-1}\]

3

\[\frac{\partial\ell}{\partial\sigma^2}=0-\frac n2\cdot\frac{1}{\sigma^2}-\frac Q2\cdot\left(-(\sigma^2)^{-2}\right)\]

With \(u=\sigma^2\): \(\frac{d}{du}\log u=\frac1u\), \(\frac{d}{du}u^{-1}=-u^{-2}\).

4

\[\frac{\partial\ell}{\partial\sigma^2}=-\frac{n}{2\sigma^2}+\frac{Q}{2(\sigma^2)^2}\]

Line 2 of p.35.

5

\[-\frac{n}{2\sigma^2}+\frac{Q}{2(\sigma^2)^2}=0\]

6

\[-n\sigma^2+Q=0\]

Multiply by \(2(\sigma^2)^2\).

7

\[Q=n\sigma^2\]

Line 3 of p.35.

8

\[\sigma^2=\frac1n Q=\frac1n(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\]

9

\[\hat\sigma^2_{MLE}=\frac1n(\boldsymbol{y}-\boldsymbol{X}\hat{\boldsymbol\beta})^T(\boldsymbol{y}-\boldsymbol{X}\hat{\boldsymbol\beta})=\frac1n\boldsymbol{e}^T\boldsymbol{e}\]

\(\hat{\boldsymbol\beta}\) minimizes \(Q\) for every \(\sigma^2\). ∎

### 05.2 Unbiased estimate of \(\sigma^2\) Slides p.36

**What** Slides p.36

The bias of an estimator \(\hat\theta\) is \(E[\hat\theta]-\theta\).

Unbiased estimate of σ² · Lecture 6 · p.36 The MLE of \(\sigma^2\) is \(\frac1n\boldsymbol{e}^T\boldsymbol{e}\), where \(\boldsymbol{e}=\boldsymbol{y}-\boldsymbol{X}\hat{\boldsymbol\beta}\).
Instead we usually use \(\hat\sigma^2=\frac{1}{n-(p+1)}\boldsymbol{e}^T\boldsymbol{e}\). Why?

Only the divisor changes. \(n-(p+1)=n-p-1\) is the residual degrees of freedom: the number of residuals that can change freely. On this page, \(\hat\sigma^2\) is this unbiased estimate.

**How** Added

Calculate \(\hat\sigma^2\)

- Calculate \(\boldsymbol{e}^T\boldsymbol{e}\) (Section 05.1, steps 1–3).
- Count the coefficients: \(p+1\), with the intercept.
- Calculate the degrees of freedom: \(n-p-1\).
- Divide: \(\hat\sigma^2=\boldsymbol{e}^T\boldsymbol{e}/(n-p-1)\).

**Self-check:** \(\hat\sigma^2/\hat\sigma^2_{MLE}=n/(n-p-1)>1\).

**Example** Added

1

Residual sum of squares How step 1

\[\boldsymbol{e}^T\boldsymbol{e}=2.4\]

Section 05.1, step 3.

2

Count the coefficients How step 2

\[p=1,\qquad p+1=2\]

3

Degrees of freedom How step 3

\[n-p-1=5-1-1=3\]

4

Divide How step 4

\[\hat\sigma^2=\frac{2.4}{3}=0.8\]

Check: \(0.8/0.48=5/3=n/(n-p-1)\). \(\hat\sigma=\sqrt{0.8}=0.8944\).

**Why** Added

Slides p.36 give no proof.

1

\[\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\]

p.32. \(\boldsymbol{X}^T\) has \(p+1\) rows.

2

\[\sum_{i=1}^n x_{ij}e_i=0,\qquad j=0,1,\dots,p\]

\(p+1\) linear constraints on \(e_1,\dots,e_n\).

3

\[\text{number of free residuals}=n-(p+1)\]

The constraints fix the other \(p+1\) residuals.

4

\[\hat\sigma^2=\frac{\boldsymbol{e}^T\boldsymbol{e}}{n-(p+1)}\]

Gives \(E[\hat\sigma^2]=\sigma^2\) (proof below). ∎

In the example, \(\sum e_i=0\) and \(\sum x_ie_i=0\) fix \(e_4\) and \(e_5\) from \(e_1,e_2,e_3\). Only \(5-2=3\) residuals are free.

Optional — not on the slides · Proof that \(E[\boldsymbol{e}^T\boldsymbol{e}]=(n-p-1)\sigma^2\)

The trace \(\mathrm{tr}(\boldsymbol{A})\) is the sum of the diagonal entries of a square matrix. \(\mathrm{tr}(\boldsymbol{AB})=\mathrm{tr}(\boldsymbol{BA})\). Use \(\boldsymbol{H}=\boldsymbol{X}(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\) (p.30) and \(\boldsymbol{e}=(\boldsymbol{I}-\boldsymbol{H})\boldsymbol{y}\) (p.31). \(\boldsymbol{I}-\boldsymbol{H}\) is symmetric and idempotent: it times itself gives itself.

1

\[\boldsymbol{e}=(\boldsymbol{I}-\boldsymbol{H})\boldsymbol{y}=(\boldsymbol{I}-\boldsymbol{H})(\boldsymbol{X}\boldsymbol\beta+\boldsymbol\epsilon)\]

2

\[\boldsymbol{e}=(\boldsymbol{I}-\boldsymbol{H})\boldsymbol\epsilon\]

\(\boldsymbol{H}\boldsymbol{X}=\boldsymbol{X}\) gives \((\boldsymbol{I}-\boldsymbol{H})\boldsymbol{X}=\boldsymbol{0}\).

3

\[\boldsymbol{e}^T\boldsymbol{e}=\boldsymbol\epsilon^T(\boldsymbol{I}-\boldsymbol{H})^T(\boldsymbol{I}-\boldsymbol{H})\boldsymbol\epsilon=\boldsymbol\epsilon^T(\boldsymbol{I}-\boldsymbol{H})\boldsymbol\epsilon\]

Symmetric and idempotent.

4

\[\boldsymbol{e}^T\boldsymbol{e}=\mathrm{tr}\!\left(\boldsymbol\epsilon^T(\boldsymbol{I}-\boldsymbol{H})\boldsymbol\epsilon\right)=\mathrm{tr}\!\left((\boldsymbol{I}-\boldsymbol{H})\boldsymbol\epsilon\boldsymbol\epsilon^T\right)\]

A number is its own trace. Then \(\mathrm{tr}(\boldsymbol{AB})=\mathrm{tr}(\boldsymbol{BA})\).

5

\[E[\boldsymbol{e}^T\boldsymbol{e}]=\mathrm{tr}\!\left((\boldsymbol{I}-\boldsymbol{H})E[\boldsymbol\epsilon\boldsymbol\epsilon^T]\right)=\mathrm{tr}\!\left((\boldsymbol{I}-\boldsymbol{H})\sigma^2\boldsymbol{I}\right)=\sigma^2\,\mathrm{tr}(\boldsymbol{I}-\boldsymbol{H})\]

\(E[\boldsymbol\epsilon\boldsymbol\epsilon^T]=\mathrm{Var}[\boldsymbol\epsilon]=\sigma^2\boldsymbol{I}\).

6

\[\mathrm{tr}(\boldsymbol{H})=\mathrm{tr}\!\left(\boldsymbol{X}(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\right)=\mathrm{tr}\!\left((\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{X}\right)=\mathrm{tr}(\boldsymbol{I}_{p+1})=p+1\]

7

\[E[\boldsymbol{e}^T\boldsymbol{e}]=\sigma^2(n-(p+1))\quad\Longrightarrow\quad E\!\left[\tfrac{1}{n-(p+1)}\boldsymbol{e}^T\boldsymbol{e}\right]=\sigma^2\]

\(E[\hat\sigma^2_{MLE}]=\frac{n-p-1}{n}\sigma^2\): too small. ∎

### 05.3 Calculating \(\hat{\boldsymbol\beta}\) as a system of equations Slides p.37

**What** Slides p.37

The code on Slides p.37 does these steps:

It makes \(\boldsymbol{X}\): a column of ones, then one column for each covariate.

It calculates \(\boldsymbol{X}^T\boldsymbol{X}\) and \(\boldsymbol{X}^T\boldsymbol{y}\).

It solves the system \((\boldsymbol{X}^T\boldsymbol{X})\hat{\boldsymbol\beta}=\boldsymbol{X}^T\boldsymbol{y}\) for \(\hat{\boldsymbol\beta}\).

The slide marks as worse: calculate \((\boldsymbol{X}^T\boldsymbol{X})^{-1}\), then multiply by \(\boldsymbol{X}^T\boldsymbol{y}\). Both give the same \(\hat{\boldsymbol\beta}\).

In a system of linear equations, each unknown has only the first power.

**How** Added

Calculate \(\hat{\boldsymbol\beta}\) from the system \((\boldsymbol{X}^T\boldsymbol{X})\hat{\boldsymbol\beta}=\boldsymbol{X}^T\boldsymbol{y}\)

- Make \(\boldsymbol{X}\) and \(\boldsymbol{y}\).
- Calculate \(\boldsymbol{X}^T\boldsymbol{X}\). Entry \((j,k)\) is \(\sum_i\) (column \(j\) entry)(column \(k\) entry).
- Calculate \(\boldsymbol{X}^T\boldsymbol{y}\). Entry \(j\) is \(\sum_i\) (column \(j\) entry)\(y_i\).
- Write the \(p+1\) equations.
- Solve by elimination.

**Self-check:** \(\boldsymbol{X}^T\boldsymbol{X}\) is symmetric, \((p+1)\times(p+1)\), with top-left entry \(n\). \(\hat{\boldsymbol\beta}\) satisfies each equation.

**Example** Added

1

Sums for \(\boldsymbol{X}^T\boldsymbol{X}\) How step 2

\[n=5,\quad \sum x_i=1+2+3+4+5=15,\quad \sum x_i^2=1+4+9+16+25=55\]

\[\boldsymbol{X}^T\boldsymbol{X}=\left[\begin{array}{cc}5&15\\15&55\end{array}\right]\]

2

Sums for \(\boldsymbol{X}^T\boldsymbol{y}\) How step 3

\[\sum y_i=2+4+5+4+5=20,\quad \sum x_iy_i=2+8+15+16+25=66\]

\[\boldsymbol{X}^T\boldsymbol{y}=\left[\begin{array}{c}20\\66\end{array}\right]\]

3

The system How step 4

\[5\hat\beta_0+15\hat\beta_1=20\]

\[15\hat\beta_0+55\hat\beta_1=66\]

4

Elimination How step 5

\[15\hat\beta_0+45\hat\beta_1=60\]

First equation times 3.

5

\[(55-45)\hat\beta_1=66-60\]

Second equation minus step 4.

6

\[10\hat\beta_1=6\quad\Longrightarrow\quad \hat\beta_1=0.6\]

7

\[5\hat\beta_0+15(0.6)=20\quad\Longrightarrow\quad 5\hat\beta_0=20-9=11\quad\Longrightarrow\quad\hat\beta_0=2.2\]

8

Self-check

\[15(2.2)+55(0.6)=33+33=66\]

\(\hat{\boldsymbol\beta}=(2.2,\,0.6)^T\). ▲

**Why** Added

1

\[\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\]

Slides p.20.

2

\[(\boldsymbol{X}^T\boldsymbol{X})\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\]

3

\[(\boldsymbol{X}^T\boldsymbol{X})\hat{\boldsymbol\beta}=\boldsymbol{X}^T\boldsymbol{y}\]

A system \(\boldsymbol{A}\boldsymbol{b}=\boldsymbol{c}\). ∎

### 05.4 Calculating \(\hat\sigma^2\) and the standard errors Slides p.38

**What** Slides p.38

The code on Slides p.38 does these steps:

\(n\) = number of rows of \(\boldsymbol{X}\). \(p\) = number of columns minus 1.

It calculates \(\hat{\boldsymbol{y}}=\boldsymbol{X}\hat{\boldsymbol\beta}\) and \(\boldsymbol{e}=\boldsymbol{y}-\hat{\boldsymbol{y}}\).

It calculates \(\hat\sigma^2=\sum e_i^2/(n-p-1)\).

It calculates \(\boldsymbol{V}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\) and the standard errors \(\hat\sigma\sqrt{V_{jj}}\).

The standard error (SE) of an estimator estimates its standard deviation, with \(\hat\sigma\) in place of \(\sigma\). Slides p.27–29: \(\hat{\boldsymbol\beta}\sim N(\boldsymbol\beta,\sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1})\) and \(\hat\beta_j\sim N(\beta_j,\sigma^2V_{jj})\), \(j=0,1,\dots,p\).

**How** Added

Calculate \(\mathrm{SE}(\hat\beta_j)\)

- Calculate \(\hat\sigma^2\) (Section 05.2).
- Calculate \(\boldsymbol{V}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\). Read \(V_{jj}\).
- Multiply: \(\hat\sigma^2V_{jj}\) estimates \(\mathrm{Var}[\hat\beta_j]\).
- Take the square root: \(\mathrm{SE}(\hat\beta_j)=\hat\sigma\sqrt{V_{jj}}\).

**Self-check:** Each \(V_{jj}>0\). \(\boldsymbol{V}\boldsymbol{X}^T\boldsymbol{X}=\boldsymbol{I}\).

**Example** Added

Use \(\boldsymbol{X}^T\boldsymbol{X}=\left[\begin{array}{cc}5&15\\15&55\end{array}\right]\) (Section 5.3) and the \(2\times2\) inverse:
\[\left[\begin{array}{cc}a&b\\c&d\end{array}\right]^{-1}=\frac{1}{ad-bc}\left[\begin{array}{cc}d&-b\\-c&a\end{array}\right]\]

1

\(\hat\sigma^2\) How step 1

\[\hat\sigma^2=\frac{2.4}{5-1-1}=\frac{2.4}{3}=0.8\]

2

Determinant How step 2

\[ad-bc=5(55)-15(15)=275-225=50\]

3

\(\boldsymbol{V}\) How step 2

\[\boldsymbol{V}=\frac{1}{50}\left[\begin{array}{cc}55&-15\\-15&5\end{array}\right]=\left[\begin{array}{cc}1.1&-0.3\\-0.3&0.1\end{array}\right]\]

Check: \(1.1(5)-0.3(15)=5.5-4.5=1\).

4

Multiply How step 3

\[\hat\sigma^2V_{00}=0.8(1.1)=0.88,\qquad \hat\sigma^2V_{11}=0.8(0.1)=0.08\]

5

Square root How step 4

\[\mathrm{SE}(\hat\beta_0)=\sqrt{0.88}=0.9381,\qquad \mathrm{SE}(\hat\beta_1)=\sqrt{0.08}=0.2828\]

3 degrees of freedom. Lecture 7 uses these. ▲

**Why** Added

1

\[\mathrm{Var}[\hat{\boldsymbol\beta}]=\sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1}=\sigma^2\boldsymbol{V}\]

p.27.

2

\[\mathrm{Var}[\hat\beta_j]=\sigma^2V_{jj}\]

Diagonal entry \(j\) (p.29).

3

\[\mathrm{sd}(\hat\beta_j)=\sqrt{\sigma^2V_{jj}}\]

4

\[\mathrm{SE}(\hat\beta_j)=\sqrt{\hat\sigma^2V_{jj}}\]

Put in \(\hat\sigma^2\) for unknown \(\sigma^2\). ∎

### 05.5 Practice Slides p.39–41

All questions use \(p=1\): simple linear regression (SLR). Lecture 2 notation: \(\bar x=\frac1n\sum x_i\), \(\bar y=\frac1n\sum y_i\), \(S_{xx}=\sum_{i=1}^n(x_i-\bar x)^2\), \(S_{xy}=\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y)\).

Least squares estimates · Lecture 2 \[\hat\beta_1=\frac{S_{xy}}{S_{xx}},\qquad \hat\beta_0=\bar y-\hat\beta_1\bar x.\]
\[\boldsymbol{X}=\left[\begin{array}{cc}1&x_1\\1&x_2\\\vdots&\vdots\\1&x_n\end{array}\right],\qquad \boldsymbol{X}^T\boldsymbol{X}=\left[\begin{array}{cc}n&\sum x_i\\\sum x_i&\sum x_i^2\end{array}\right],\qquad \boldsymbol{X}^T\boldsymbol{y}=\left[\begin{array}{c}\sum y_i\\\sum x_iy_i\end{array}\right].\]
Five-point data: \(\bar x=15/5=3\), \(\bar y=20/5=4\).

\(S_{xx}=(-2)^2+(-1)^2+0^2+1^2+2^2=4+1+0+1+4=10\).

\(S_{xy}=(-2)(-2)+(-1)(0)+(0)(1)+(1)(0)+(2)(1)=4+0+0+0+2=6\).

**Q1** Slides p.40

Practice Q1 · Lecture 6 · p.40 In the case of \(p=1\) covariate, show that the matrix formula for \(\hat{\boldsymbol\beta}\) derived for multiple linear regression yields the familiar \(\hat\beta_0\) and \(\hat\beta_1\) from simple linear regression.

Answer Q1

Plan: invert \(\boldsymbol{X}^T\boldsymbol{X}\), multiply by \(\boldsymbol{X}^T\boldsymbol{y}\), write the sums with \(S_{xx}\) and \(S_{xy}\). First, two identities:

a

\[S_{xx}=\sum(x_i-\bar x)^2=\sum x_i^2-2\bar x\sum x_i+n\bar x^2=\sum x_i^2-2n\bar x^2+n\bar x^2=\sum x_i^2-n\bar x^2\]

\(\sum x_i=n\bar x\).

b

\[S_{xy}=\sum(x_i-\bar x)(y_i-\bar y)=\sum x_iy_i-\bar y\sum x_i-\bar x\sum y_i+n\bar x\bar y=\sum x_iy_i-n\bar x\bar y\]

Use the \(2\times2\) inverse rule of Section 05.4.

1

\[\det(\boldsymbol{X}^T\boldsymbol{X})=n\sum x_i^2-\left(\sum x_i\right)^2=n\sum x_i^2-n^2\bar x^2=n\left(\sum x_i^2-n\bar x^2\right)=nS_{xx}\]

Identity a.

2

\[(\boldsymbol{X}^T\boldsymbol{X})^{-1}=\frac{1}{nS_{xx}}\left[\begin{array}{cc}\sum x_i^2&-\sum x_i\\-\sum x_i&n\end{array}\right]\]

3

\[\hat{\boldsymbol\beta}=\frac{1}{nS_{xx}}\left[\begin{array}{cc}\sum x_i^2&-\sum x_i\\-\sum x_i&n\end{array}\right]\left[\begin{array}{c}\sum y_i\\\sum x_iy_i\end{array}\right]\]

4

\[\hat{\boldsymbol\beta}=\frac{1}{nS_{xx}}\left[\begin{array}{c}\sum x_i^2\sum y_i-\sum x_i\sum x_iy_i\\-\sum x_i\sum y_i+n\sum x_iy_i\end{array}\right]\]

5

Row 2: \(\hat\beta_1\)

\[\hat\beta_1=\frac{n\sum x_iy_i-n\bar x\cdot n\bar y}{nS_{xx}}=\frac{\sum x_iy_i-n\bar x\bar y}{S_{xx}}=\frac{S_{xy}}{S_{xx}}\]

\(\sum x_i=n\bar x\), \(\sum y_i=n\bar y\), then identity b.

6

Row 1: \(\hat\beta_0\)

\[\hat\beta_0=\frac{n\bar y\sum x_i^2-n\bar x\sum x_iy_i}{nS_{xx}}=\frac{\bar y\sum x_i^2-\bar x\sum x_iy_i}{S_{xx}}\]

7

\[\hat\beta_0=\frac{\bar y\left(S_{xx}+n\bar x^2\right)-\bar x\left(S_{xy}+n\bar x\bar y\right)}{S_{xx}}\]

Identities a and b in reverse.

8

\[\hat\beta_0=\frac{\bar yS_{xx}+n\bar x^2\bar y-\bar xS_{xy}-n\bar x^2\bar y}{S_{xx}}=\frac{\bar yS_{xx}-\bar xS_{xy}}{S_{xx}}\]

9

\[\hat\beta_0=\bar y-\frac{S_{xy}}{S_{xx}}\bar x=\bar y-\hat\beta_1\bar x\]

The Lecture 2 formula. ∎

**Numerical check (five-point data).** \(n=5\), \(\sum x_i=15\), \(\sum x_i^2=55\), \(\sum y_i=20\), \(\sum x_iy_i=66\).

Determinant: \(5(55)-15^2=275-225=50=nS_{xx}=5(10)\).

Row 2: \(\hat\beta_1=\frac{5(66)-15(20)}{50}=\frac{330-300}{50}=\frac{30}{50}=0.6\).

Row 1: \(\hat\beta_0=\frac{55(20)-15(66)}{50}=\frac{1100-990}{50}=\frac{110}{50}=2.2\).

SLR: \(\hat\beta_1=6/10=0.6\), \(\hat\beta_0=4-0.6(3)=4-1.8=2.2\).

Elimination in Section 5.3 gave the same \(\hat{\boldsymbol\beta}=(2.2,\,0.6)^T\). ▲

**Q2** Slides p.41

Practice Q2 · Lecture 6 · p.41 In the case of \(p=1\) covariate, find the covariance between \(\hat\beta_0\) and \(\hat\beta_1\) using the above variance covariance matrix for \(\hat{\boldsymbol\beta}\).

Answer Q2

\(\mathrm{cov}(U,W)=E[(U-E[U])(W-E[W])]\). The "above" matrix is \(\mathrm{Var}[\hat{\boldsymbol\beta}]=\sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1}\) (p.27). Its off-diagonal entry is \(\mathrm{cov}(\hat\beta_0,\hat\beta_1)\).

1

\[\mathrm{Var}[\hat{\boldsymbol\beta}]=\left[\begin{array}{cc}\mathrm{Var}(\hat\beta_0)&\mathrm{cov}(\hat\beta_0,\hat\beta_1)\\\mathrm{cov}(\hat\beta_1,\hat\beta_0)&\mathrm{Var}(\hat\beta_1)\end{array}\right]=\sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1}\]

2

\[\sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1}=\frac{\sigma^2}{nS_{xx}}\left[\begin{array}{cc}\sum x_i^2&-\sum x_i\\-\sum x_i&n\end{array}\right]\]

Q1, step 2.

3

\[\mathrm{cov}(\hat\beta_0,\hat\beta_1)=\frac{\sigma^2}{nS_{xx}}\left(-\sum x_i\right)\]

Row 1, column 2.

4

\[\mathrm{cov}(\hat\beta_0,\hat\beta_1)=\frac{\sigma^2}{nS_{xx}}\left(-n\bar x\right)\]

5

\[\mathrm{cov}(\hat\beta_0,\hat\beta_1)=-\frac{\sigma^2\bar x}{S_{xx}}\]

Negative when \(\bar x>0\). ∎

The fitted line goes through \((\bar x,\bar y)\) (Figure 5-1). A larger \(\hat\beta_1\) gives a smaller \(\hat\beta_0=\bar y-\hat\beta_1\bar x\).

**Numerical check (five-point data).** Use \(\hat\sigma^2=0.8\) for \(\sigma^2\).

Formula: \(-\frac{0.8(3)}{10}=-\frac{2.4}{10}=-0.24\).

Matrix: \(V_{01}=-0.3\) (Section 05.4), \(\hat\sigma^2V_{01}=0.8(-0.3)=-0.24\). ▲

**Q3** Added

Data: \(n=4\), \(x=(0,1,2,3)\), \(y=(1,3,2,6)\). Fitted line: \(\hat y=0.9+1.4x\). (a) Calculate \(\boldsymbol{e}^T\boldsymbol{e}\), \(\hat\sigma^2_{MLE}\), and \(\hat\sigma^2\). (b) Calculate \(S_{xx}\) and \(\mathrm{SE}(\hat\beta_1)=\sqrt{\hat\sigma^2V_{11}}\). (c) Calculate \(\mathrm{cov}(\hat\beta_0,\hat\beta_1)\) with \(\hat\sigma^2\) for \(\sigma^2\).

Answer Q3

1

(a) Fitted values 05.1 How step 1

\[\hat y_1=0.9,\quad \hat y_2=0.9+1.4=2.3,\quad \hat y_3=0.9+2.8=3.7,\quad \hat y_4=0.9+4.2=5.1\]

2

(a) Residuals 05.1 How step 2

\[e_1=1-0.9=0.1,\quad e_2=3-2.3=0.7,\quad e_3=2-3.7=-1.7,\quad e_4=6-5.1=0.9\]

Check: \(\sum e_i=0.1+0.7-1.7+0.9=0\), \(\sum x_ie_i=0+0.7-3.4+2.7=0\).

3

(a) Residual sum of squares 05.1 How step 3

\[\boldsymbol{e}^T\boldsymbol{e}=0.01+0.49+2.89+0.81=4.2\]

4

(a) MLE 05.1 How step 4

\[\hat\sigma^2_{MLE}=\frac{4.2}{4}=1.05\]

5

(a) Unbiased estimate 05.2 How

\[n-p-1=4-1-1=2,\qquad \hat\sigma^2=\frac{4.2}{2}=2.1\]

Check: \(2.1/1.05=2=4/2=n/(n-p-1)\).

6

(b) \(S_{xx}\) and \(V_{11}\) Q1 step 2

\[\bar x=\frac{6}{4}=1.5,\qquad S_{xx}=2.25+0.25+0.25+2.25=5\]

\[V_{11}=\frac{n}{nS_{xx}}=\frac{1}{S_{xx}}=\frac15=0.2\]

Bottom-right entry of the Q1 inverse.

7

(b) SE 05.4 How steps 3–4

\[\hat\sigma^2V_{11}=2.1(0.2)=0.42,\qquad \mathrm{SE}(\hat\beta_1)=\sqrt{0.42}=0.6481\]

SLR form: \(\hat\sigma/\sqrt{S_{xx}}=\sqrt{2.1}/\sqrt{5}=1.4491/2.2361=0.6481\).

8

(c) Covariance Q2 step 5

\[\mathrm{cov}(\hat\beta_0,\hat\beta_1)=-\frac{\hat\sigma^2\bar x}{S_{xx}}=-\frac{2.1(1.5)}{5}=-\frac{3.15}{5}=-0.63\]

Negative because \(\bar x=1.5>0\). ▲


---

<!-- L07 -->

STAT 331 · Lecture 7 · Multiple Linear Regression: Estimation and Inference I

# Lecture 7: Multiple Linear Regression: Estimation and Inference I

This lecture finds the distributions of \(\hat{\boldsymbol\beta}\), \(\boldsymbol e\), and \(\hat\sigma^2\) and uses them for t tests and confidence intervals for each \(\beta_j\) (Lecture 7 · p.1–55).

Contents
01 · Recap, fitted values, residuals, and the hat matrix 02 · Estimating \(\sigma^2\) and the joint distribution of \(\hat{\boldsymbol\beta}\) and \(\boldsymbol e\) 03 · The t statistic in MLR and property (3): independence 04 · Property (2): \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{n-(p+1)}\) 05 · t tests and confidence intervals for each \(\beta_j\) 06 · Practice questions Q1–Q3

## 01 · Recap, fitted values, residuals, and the hat matrix

All examples use data set 1 (\(n=5\)), small enough to do by hand.

Plan · Slides p.1–9

Step 1: Model, scalar and matrix form (Slides p.1–3).

Step 2: Least squares estimate \(\hat{\boldsymbol\beta}\) (Slides p.4).

Step 3: Distribution of \(\hat{\boldsymbol\beta}\) (Slides p.5).

Step 4: Fitted values and the hat matrix \(\boldsymbol{H}\) (Slides p.6–7).

Step 5: Residuals and \(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\) (Slides p.8–9).

### 01.1 Recap: the model Slides p.1–3

p.1: title page, "Multiple Linear Regression—Estimation and Inference I". p.2: section page "Recap". p.3–5 repeat Lecture 6.

**What** Slides p.3

Recap: Multiple Linear Regression · Lecture 7 · p.3 \[y_i=\beta_0+\beta_1x_{i1}+\cdots+\beta_px_{ip}+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] We can write this: \[\left[\begin{array}{c}y_1\\y_2\\\vdots\\y_n\end{array}\right]=\left[\begin{array}{ccccc}1&x_{11}&x_{12}&\cdots&x_{1p}\\1&x_{21}&x_{22}&\cdots&x_{2p}\\\vdots&\vdots&\vdots&&\vdots\\1&x_{n1}&x_{n2}&\cdots&x_{np}\end{array}\right]\left[\begin{array}{c}\beta_0\\\beta_1\\\vdots\\\beta_p\end{array}\right]+\left[\begin{array}{c}\epsilon_1\\\epsilon_2\\\vdots\\\epsilon_n\end{array}\right]\] Or more simply: \[\boldsymbol{y}=\boldsymbol{X}\boldsymbol\beta+\boldsymbol\epsilon,\quad \boldsymbol\epsilon\sim MVN(\boldsymbol{0},\sigma^2\boldsymbol{I})\iff \boldsymbol{y}\sim MVN(\boldsymbol{X}\boldsymbol\beta,\sigma^2\boldsymbol{I})\]

Multiple linear regression: a linear model that uses \(p\) explanatory variables to describe one response.

Response \(y_i\): the value we explain in observation \(i\), \(i=1,\dots,n\). Sample size \(n\): the number of observations.

Covariate \(x_{ij}\): the value of explanatory variable \(j\) in observation \(i\), \(j=1,\dots,p\).

Regression coefficients \(\beta_0,\dots,\beta_p\): unknown constants. \(\beta_0\) is the intercept.

\(\beta_j\): the change in the mean of \(y_i\) when \(x_{ij}\) increases by 1 and other covariates stay the same.

Error \(\epsilon_i\): the random part of \(y_i\) that the covariates do not explain.

\(\overset{iid}{\sim}\): independent and identically distributed (the errors do not affect each other and have one distribution).

Normal distribution \(N(\mu,\sigma^2)\): the bell-shaped distribution with mean \(\mu\) and variance \(\sigma^2\).

Expectation (mean) \(E[Z]\): the theoretical average of \(Z\). Variance \(\mathrm{Var}(Z)=E[(Z-E[Z])^2]\): the spread of \(Z\).

Bold letters are vectors or matrices.

\(\boldsymbol{y}\): the \(n\times1\) response vector.

\(\boldsymbol{X}\): the \(n\times(p+1)\) design matrix. Column 1 is all 1s (intercept). Column \(j+1\) is covariate \(j\). Row \(i\) is observation \(i\).

\(\boldsymbol\beta=(\beta_0,\beta_1,\dots,\beta_p)^T\): the coefficient vector. Transpose \(T\): rows become columns.

\(\boldsymbol\epsilon\): the \(n\times1\) error vector.

\(MVN(\boldsymbol\mu,\boldsymbol\Sigma)\): multivariate normal with mean vector \(\boldsymbol\mu\) and variance matrix \(\boldsymbol\Sigma\).

Variance matrix: variances on the diagonal, covariances elsewhere. Covariance: how two random variables change together.

\(\boldsymbol{I}\): the \(n\times n\) identity matrix (1s on the diagonal, 0s elsewhere).

\(\sigma^2\boldsymbol{I}\): each \(\epsilon_i\) has variance \(\sigma^2\); each pair has covariance 0.

The matrix form puts the \(n\) equations into one. All derivations use it.

**How** Added

Write \(\boldsymbol{y}\) and \(\boldsymbol{X}\) from a data table

- Put the response column in \(\boldsymbol{y}\).
- Count the covariates: \(p\).
- Write a column of 1s.
- Put the \(p\) covariate columns to its right. The result is \(\boldsymbol{X}\).

**Self-check:** \(\boldsymbol{X}\) is \(n\times(p+1)\). \(\boldsymbol{y}\) has \(n\) rows.

**Self-check:** Column 1 of \(\boldsymbol{X}\) is all 1s.

**Example · Data set 1** Added

A made-up data set: \(n=5\), \(p=2\).

\[\begin{array}{c|ccccc} i&1&2&3&4&5\\\hline x_{i1}&-2&-1&0&1&2\\ x_{i2}&1&-1&0&-1&1\\ y_i&3&5&6&8&13\end{array}\]

1

Write the model How step 2

\[y_i=\beta_0+\beta_1x_{i1}+\beta_2x_{i2}+\epsilon_i,\qquad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2),\qquad i=1,\dots,5\]

2 covariates: \(p=2\).

2

Write \(\boldsymbol{y}\) and \(\boldsymbol{X}\) How steps 1, 3, 4

\[\underbrace{\left[\begin{array}{c}3\\5\\6\\8\\13\end{array}\right]}_{\boldsymbol{y}:\ 5\times1}=\underbrace{\left[\begin{array}{ccc}1&-2&1\\1&-1&-1\\1&0&0\\1&1&-1\\1&2&1\end{array}\right]}_{\boldsymbol{X}:\ 5\times3}\left[\begin{array}{c}\beta_0\\\beta_1\\\beta_2\end{array}\right]+\left[\begin{array}{c}\epsilon_1\\\epsilon_2\\\epsilon_3\\\epsilon_4\\\epsilon_5\end{array}\right]\]

Self-check: \(5\times3=5\times(2+1)\); column 1 all 1s. ▲

**Why · Row \(i\) of the matrix form is the scalar model** Added

Entry \(i\) of \(\boldsymbol{X}\boldsymbol\beta\) is row \(i\) of \(\boldsymbol{X}\) times \(\boldsymbol\beta\): multiply entry by entry, then add.

1

\[(\boldsymbol{y})_i=(\boldsymbol{X}\boldsymbol\beta)_i+(\boldsymbol\epsilon)_i\]

2

\[y_i=\left[\begin{array}{ccccc}1&x_{i1}&x_{i2}&\cdots&x_{ip}\end{array}\right]\left[\begin{array}{c}\beta_0\\\beta_1\\\vdots\\\beta_p\end{array}\right]+\epsilon_i\]

Row \(i\) of \(\boldsymbol{X}\).

3

\[y_i=1\cdot\beta_0+x_{i1}\beta_1+\cdots+x_{ip}\beta_p+\epsilon_i\]

The scalar model on p.3. ∎

Adding the constant \(\boldsymbol{X}\boldsymbol\beta\) to \(\boldsymbol\epsilon\sim MVN(\boldsymbol{0},\sigma^2\boldsymbol{I})\) moves the mean and keeps the variance. This gives \(\boldsymbol{y}\sim MVN(\boldsymbol{X}\boldsymbol\beta,\sigma^2\boldsymbol{I})\).

### 01.2 Recap: least squares estimation Slides p.4

Estimate: a value calculated from the data to approximate an unknown parameter. A hat marks an estimate.

**What** Slides p.4

Least Squares Estimation · Lecture 7 · p.4 Want to minimize the sum of squares, i.e.: \[S(\boldsymbol\beta)=(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)=\boldsymbol{y}^T\boldsymbol{y}-\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta-\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{y}+\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta=\boldsymbol{y}^T\boldsymbol{y}-2\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta+\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta\] \[\frac{\partial S(\boldsymbol\beta)}{\partial\boldsymbol\beta}=-2\boldsymbol{X}^T\boldsymbol{y}+2\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta=0\ \Rightarrow\ (\boldsymbol{X}^T\boldsymbol{X})\boldsymbol\beta=\boldsymbol{X}^T\boldsymbol{y}\ \Rightarrow\ \hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\] assuming the columns of \(\boldsymbol{X}\) are linearly independent

Least squares: select \(\boldsymbol\beta\) to make the sum of squared differences between \(\boldsymbol{y}\) and \(\boldsymbol{X}\boldsymbol\beta\) smallest.

Sum of squares, scalar form: \(S(\boldsymbol\beta)=\sum_{i=1}^n(y_i-\beta_0-\beta_1x_{i1}-\cdots-\beta_px_{ip})^2\).

Gradient \(\partial S/\partial\boldsymbol\beta\): the column of partial derivatives of \(S\) for \(\beta_0,\dots,\beta_p\).

At the minimum the gradient is \(\boldsymbol{0}\). This gives the normal equations \((\boldsymbol{X}^T\boldsymbol{X})\boldsymbol\beta=\boldsymbol{X}^T\boldsymbol{y}\): \(p+1\) equations, \(p+1\) unknowns.

Inverse \((\boldsymbol{X}^T\boldsymbol{X})^{-1}\): the matrix with \((\boldsymbol{X}^T\boldsymbol{X})^{-1}(\boldsymbol{X}^T\boldsymbol{X})=\boldsymbol{I}\).

Linearly independent columns: no column is a linear combination of the others. Then \(\boldsymbol{X}^T\boldsymbol{X}\) is invertible.

**How** Added

Calculate \(\hat{\boldsymbol\beta}\)

- Calculate \(\boldsymbol{X}^T\boldsymbol{X}\). Entry \((j,k)\): multiply columns \(j\) and \(k\) of \(\boldsymbol{X}\) entry by entry, then add.
- Calculate \(\boldsymbol{X}^T\boldsymbol{y}\). Entry \(j\): multiply column \(j\) and \(\boldsymbol{y}\) entry by entry, then add.
- Calculate \((\boldsymbol{X}^T\boldsymbol{X})^{-1}\).
- Multiply: \(\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\).

**Self-check:** \(\boldsymbol{X}^T\boldsymbol{X}\) is \((p+1)\times(p+1)\), symmetric (equal to its transpose), top-left entry \(n\).

**Self-check:** \((\boldsymbol{X}^T\boldsymbol{X})\hat{\boldsymbol\beta}=\boldsymbol{X}^T\boldsymbol{y}\).

**Example · Data set 1** Added

1

Diagonal of \(\boldsymbol{X}^T\boldsymbol{X}\) How step 1

\[\sum 1\cdot1=5,\qquad \sum x_{i1}^2=4+1+0+1+4=10,\qquad \sum x_{i2}^2=1+1+0+1+1=4\]

2

Other entries How step 1

\[\sum x_{i1}=-2-1+0+1+2=0,\qquad \sum x_{i2}=1-1+0-1+1=0\]

\[\sum x_{i1}x_{i2}=(-2)(1)+(-1)(-1)+(0)(0)+(1)(-1)+(2)(1)=-2+1+0-1+2=0\]

3

\[\boldsymbol{X}^T\boldsymbol{X}=\left[\begin{array}{ccc}5&0&0\\0&10&0\\0&0&4\end{array}\right]\]

Self-check: \(3\times3\), symmetric, top-left \(5=n\).

4

\(\boldsymbol{X}^T\boldsymbol{y}\) How step 2

\[\sum y_i=3+5+6+8+13=35\]

\[\sum x_{i1}y_i=(-2)(3)+(-1)(5)+(0)(6)+(1)(8)+(2)(13)=-6-5+0+8+26=23\]

\[\sum x_{i2}y_i=(1)(3)+(-1)(5)+(0)(6)+(-1)(8)+(1)(13)=3-5+0-8+13=3\]

5

\[\boldsymbol{X}^T\boldsymbol{y}=\left[\begin{array}{c}35\\23\\3\end{array}\right]\]

6

Inverse How step 3

\[(\boldsymbol{X}^T\boldsymbol{X})^{-1}=\left[\begin{array}{ccc}1/5&0&0\\0&1/10&0\\0&0&1/4\end{array}\right]=\left[\begin{array}{ccc}0.2&0&0\\0&0.1&0\\0&0&0.25\end{array}\right]\]

Diagonal matrix: invert each diagonal entry.

7

Multiply How step 4

\[\hat{\boldsymbol\beta}=\left[\begin{array}{c}0.2\times35\\0.1\times23\\0.25\times3\end{array}\right]\]

8

\[\hat{\boldsymbol\beta}=\left[\begin{array}{c}\hat\beta_0\\\hat\beta_1\\\hat\beta_2\end{array}\right]=\left[\begin{array}{c}7\\2.3\\0.75\end{array}\right]\]

Self-check: \(5\times7=35\), \(10\times2.3=23\), \(4\times0.75=3\). ▲

Fitted model: \(\hat y=7+2.3x_1+0.75x_2\). \(\boldsymbol{X}^T\boldsymbol{X}\) is diagonal because the columns of \(\boldsymbol{X}\) are orthogonal.

Inner product of two vectors: the sum of the products of their entries. Orthogonal: inner product 0.

**Why · The formula for \(\hat{\boldsymbol\beta}\)** Slides p.4

Rule A: \((\boldsymbol{A}\boldsymbol{B})^T=\boldsymbol{B}^T\boldsymbol{A}^T\).

Rule B: A \(1\times1\) matrix is a number and equals its transpose.

Rule C: \(\partial(\boldsymbol{a}^T\boldsymbol\beta)/\partial\boldsymbol\beta=\boldsymbol{a}\). For symmetric \(\boldsymbol{A}\), \(\partial(\boldsymbol\beta^T\boldsymbol{A}\boldsymbol\beta)/\partial\boldsymbol\beta=2\boldsymbol{A}\boldsymbol\beta\).

1

\[S(\boldsymbol\beta)=(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)^T(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\]

2

\[S(\boldsymbol\beta)=(\boldsymbol{y}^T-\boldsymbol\beta^T\boldsymbol{X}^T)(\boldsymbol{y}-\boldsymbol{X}\boldsymbol\beta)\]

Rule A.

3

\[S(\boldsymbol\beta)=\boldsymbol{y}^T\boldsymbol{y}-\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta-\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{y}+\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta\]

4

\[S(\boldsymbol\beta)=\boldsymbol{y}^T\boldsymbol{y}-2\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta+\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta\]

Rule B: \(\boldsymbol\beta^T\boldsymbol{X}^T\boldsymbol{y}=\boldsymbol{y}^T\boldsymbol{X}\boldsymbol\beta\).

5

\[\frac{\partial S(\boldsymbol\beta)}{\partial\boldsymbol\beta}=-2\boldsymbol{X}^T\boldsymbol{y}+2\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta\]

Rule C, \(\boldsymbol{a}=\boldsymbol{X}^T\boldsymbol{y}\), \(\boldsymbol{A}=\boldsymbol{X}^T\boldsymbol{X}\).

6

\[-2\boldsymbol{X}^T\boldsymbol{y}+2\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta=\boldsymbol{0}\]

7

\[(\boldsymbol{X}^T\boldsymbol{X})\boldsymbol\beta=\boldsymbol{X}^T\boldsymbol{y}\]

8

\[\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\]

Independent columns: the inverse exists. ∎

### 01.3 Recap: properties of \(\hat{\boldsymbol\beta}\) Slides p.5

Sampling distribution: the distribution of \(\hat{\boldsymbol\beta}\) over many new data sets with the same \(\boldsymbol{X}\).

**What** Slides p.5

Properties of \(\hat{\boldsymbol\beta}\) · Lecture 7 · p.5 \[\hat{\boldsymbol\beta}\sim N(\boldsymbol\beta,\ \sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1})\ \Longrightarrow\ \hat\beta_j\sim N(\beta_j,\sigma^2V_{jj})\] where \(V_{jj}\) is the corresponding diagonal of \(\boldsymbol{V}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\).
Note: the notation here is a little funky due to 0-indexing \(\boldsymbol\beta\): \[\mathrm{Var}(\hat{\boldsymbol\beta})=\mathrm{Var}\left(\left[\begin{array}{c}\hat\beta_0\\\hat\beta_1\\\vdots\\\hat\beta_p\end{array}\right]\right)=\sigma^2\left[\begin{array}{cccc}V_{00}&V_{01}&\cdots&V_{0p}\\V_{10}&V_{11}&\cdots&V_{1p}\\\vdots&&&\vdots\\V_{p0}&V_{p1}&\cdots&V_{pp}\end{array}\right]\]

\(E[\hat{\boldsymbol\beta}]=\boldsymbol\beta\): \(\hat{\boldsymbol\beta}\) is unbiased. Unbiased: the mean of the estimator equals the parameter.

\(\mathrm{Var}(\hat\beta_j)=\sigma^2V_{jj}\), with \(V_{jj}\) a diagonal entry of \(\boldsymbol{V}\).

0-indexing: row and column numbers of \(\boldsymbol{V}\) start at 0. \(V_{jj}\) is in row \(j+1\), column \(j+1\).

**How** Added

Find \(\mathrm{Var}(\hat\beta_j)\)

- Calculate \(\boldsymbol{V}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\).
- Find \(V_{jj}\) in row \(j+1\), column \(j+1\).
- Write \(\mathrm{Var}(\hat\beta_j)=\sigma^2V_{jj}\) and \(\hat\beta_j\sim N(\beta_j,\sigma^2V_{jj})\).

**Self-check:** \(V_{jj}>0\), because a variance cannot be negative.

**Self-check:** Row number \(=j+1\).

**Example · Data set 1** Added

1

\(\boldsymbol{V}\) How step 1

\[\boldsymbol{V}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}=\left[\begin{array}{ccc}0.2&0&0\\0&0.1&0\\0&0&0.25\end{array}\right]\]

Section 01.2, step 6.

2

Diagonal entries How step 2

\[V_{00}=0.2\ (\text{row }1),\qquad V_{11}=0.1\ (\text{row }2),\qquad V_{22}=0.25\ (\text{row }3)\]

3

Distributions How step 3

\[\hat\beta_0\sim N(\beta_0,\,0.2\,\sigma^2),\qquad \hat\beta_1\sim N(\beta_1,\,0.1\,\sigma^2),\qquad \hat\beta_2\sim N(\beta_2,\,0.25\,\sigma^2)\]

Self-check: all positive. ▲

\(\sigma^2\) is unknown. Unit 02 estimates it from the residuals.

**Why · The distribution of \(\hat{\boldsymbol\beta}\)** Added

If \(\boldsymbol{y}\sim MVN(\boldsymbol\mu,\boldsymbol\Sigma)\) and \(\boldsymbol{A}\) is constant, then \(\boldsymbol{A}\boldsymbol{y}\sim MVN(\boldsymbol{A}\boldsymbol\mu,\boldsymbol{A}\boldsymbol\Sigma\boldsymbol{A}^T)\). Let \(\boldsymbol{A}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\), so \(\hat{\boldsymbol\beta}=\boldsymbol{A}\boldsymbol{y}\).

1

Mean

\[E[\hat{\boldsymbol\beta}]=\boldsymbol{A}\boldsymbol{X}\boldsymbol\beta=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{X}\boldsymbol\beta\]

Substitute \(\boldsymbol\mu=\boldsymbol{X}\boldsymbol\beta\).

2

\[E[\hat{\boldsymbol\beta}]=\boldsymbol{I}\boldsymbol\beta=\boldsymbol\beta\]

3

Variance

\[\mathrm{Var}(\hat{\boldsymbol\beta})=\boldsymbol{A}(\sigma^2\boldsymbol{I})\boldsymbol{A}^T=\sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{X}\left[(\boldsymbol{X}^T\boldsymbol{X})^{-1}\right]^T\]

\(\boldsymbol\Sigma=\sigma^2\boldsymbol{I}\); Rule A for \(\boldsymbol{A}^T\).

4

\[\mathrm{Var}(\hat{\boldsymbol\beta})=\sigma^2\boldsymbol{I}\left[(\boldsymbol{X}^T\boldsymbol{X})^{-1}\right]^T\]

5

\[\mathrm{Var}(\hat{\boldsymbol\beta})=\sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1}\]

Inverse of a symmetric matrix is symmetric. ∎

### 01.4 Fitted values and the hat matrix Slides p.6–7

p.6 repeats the title page. New material starts here.

**What** Slides p.7

Fitted value: \(\hat y_i=\hat\beta_0+\hat\beta_1x_{i1}+\cdots+\hat\beta_px_{ip}\), the value the estimated model gives for observation \(i\).

Fitted values · Lecture 7 · p.7 \[\hat{\boldsymbol{y}}=\boldsymbol{X}\hat{\boldsymbol\beta}=\boldsymbol{X}\left[(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\right]=\left[\boldsymbol{X}(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\right]\boldsymbol{y}=\boldsymbol{H}\boldsymbol{y}\] where \(\boldsymbol{H}=\boldsymbol{X}(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\) is called the Hat matrix.

Hat matrix \(\boldsymbol{H}\): the \(n\times n\) matrix that "puts the hat on" \(\boldsymbol{y}\).

\(\boldsymbol{H}\) depends only on \(\boldsymbol{X}\), not on \(\boldsymbol{y}\).

Each \(\hat y_i\) is a linear combination of \(y_1,\dots,y_n\), with weights from row \(i\) of \(\boldsymbol{H}\).

**How** Added

Calculate \(\hat{\boldsymbol{y}}\) and \(\boldsymbol{H}\)

- Calculate \(\hat{\boldsymbol\beta}\) (Section 01.2).
- For each \(i\), multiply row \(i\) of \(\boldsymbol{X}\) by \(\hat{\boldsymbol\beta}\) entry by entry, then add. The result is \(\hat y_i\).
- For \(\boldsymbol{H}\), entry \((i,k)\) is row \(i\) of \(\boldsymbol{X}\), times \(\boldsymbol{V}\), times row \(k\) transposed.

**Self-check:** \(\boldsymbol{H}\) is \(n\times n\) and symmetric.

**Self-check:** Row \(i\) of \(\boldsymbol{H}\) times \(\boldsymbol{y}\) equals \(\hat y_i\) from step 2.

**Example · Data set 1** Added

1

Fitted value of observation 2 How step 2

\[\hat y_2=7+2.3\times(-1)+0.75\times(-1)\]

Row 2 of \(\boldsymbol{X}\): \((1,\,-1,\,-1)\).

2

\[\hat y_2=7-2.3-0.75=3.95\]

3

All fitted values How step 2

\[\hat y_1=7+2.3(-2)+0.75(1)=7-4.6+0.75=3.15\]

\[\hat y_3=7+2.3(0)+0.75(0)=7\]

\[\hat y_4=7+2.3(1)+0.75(-1)=7+2.3-0.75=8.55\]

\[\hat y_5=7+2.3(2)+0.75(1)=7+4.6+0.75=12.35\]

4

\[\hat{\boldsymbol{y}}=(3.15,\ 3.95,\ 7,\ 8.55,\ 12.35)^T\]

5

Entries of \(\boldsymbol{H}\) How step 3

\(\boldsymbol{V}\) is diagonal: three terms.

\[H_{ik}=\frac{1}{5}+\frac{x_{i1}x_{k1}}{10}+\frac{x_{i2}x_{k2}}{4}\]

6

\[H_{11}=0.2+\frac{(-2)(-2)}{10}+\frac{(1)(1)}{4}=0.2+0.4+0.25=0.85\]

\[H_{12}=0.2+\frac{(-2)(-1)}{10}+\frac{(1)(-1)}{4}=0.2+0.2-0.25=0.15\]

7

\[\boldsymbol{H}=\left[\begin{array}{ccccc}0.85&0.15&0.2&-0.25&0.05\\0.15&0.55&0.2&0.35&-0.25\\0.2&0.2&0.2&0.2&0.2\\-0.25&0.35&0.2&0.55&0.15\\0.05&-0.25&0.2&0.15&0.85\end{array}\right]\]

Self-check: \(5\times5\), symmetric.

8

Check row 1 of \(\boldsymbol{H}\boldsymbol{y}\) How self-check

\[0.85(3)+0.15(5)+0.2(6)-0.25(8)+0.05(13)=2.55+0.75+1.2-2+0.65=3.15\]

Equals \(\hat y_1\) from step 3. ▲

**Why · \(\hat{\boldsymbol{y}}=\boldsymbol{H}\boldsymbol{y}\)** Slides p.7

1

\[\hat{\boldsymbol{y}}=\boldsymbol{X}\hat{\boldsymbol\beta}\]

2

\[\hat{\boldsymbol{y}}=\boldsymbol{X}\left[(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\right]\]

Substitute \(\hat{\boldsymbol\beta}\).

3

\[\hat{\boldsymbol{y}}=\left[\boldsymbol{X}(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\right]\boldsymbol{y}\]

Matrix multiplication is associative.

4

\[\hat{\boldsymbol{y}}=\boldsymbol{H}\boldsymbol{y}\]

Size: \((n\times(p+1))((p+1)\times(p+1))((p+1)\times n)=n\times n\). ∎

### 01.5 Residuals and \(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\) Slides p.8–9

**What** Slides p.8–9

Residual \(e_i=y_i-\hat y_i\): the part of \(y_i\) that the estimated model does not fit.

Residuals · Lecture 7 · p.8–9 \[\boldsymbol{e}=\boldsymbol{y}-\hat{\boldsymbol{y}}=\boldsymbol{y}-\boldsymbol{X}\hat{\boldsymbol\beta}=\boldsymbol{y}-\boldsymbol{H}\boldsymbol{y}=(\boldsymbol{I}-\boldsymbol{H})\boldsymbol{y}.\] Note: \(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\). Why? \[\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{X}^T(\boldsymbol{y}-\boldsymbol{H}\boldsymbol{y})=\boldsymbol{X}^T\boldsymbol{y}-\boldsymbol{X}^T\boldsymbol{X}(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}=\boldsymbol{X}^T\boldsymbol{y}-\boldsymbol{X}^T\boldsymbol{y}=\boldsymbol{0}\]

The error \(\epsilon_i=y_i-\boldsymbol{x}_i^T\boldsymbol\beta\) uses the true \(\boldsymbol\beta\). We cannot see it.

The residual \(e_i=y_i-\boldsymbol{x}_i^T\hat{\boldsymbol\beta}\) uses \(\hat{\boldsymbol\beta}\). We can calculate it. \(\boldsymbol{x}_i^T\) is row \(i\) of \(\boldsymbol{X}\).

\(\boldsymbol{e}=(\boldsymbol{I}-\boldsymbol{H})\boldsymbol{y}\): a matrix that depends only on \(\boldsymbol{X}\), times \(\boldsymbol{y}\).

\(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\): each column of \(\boldsymbol{X}\) is orthogonal to \(\boldsymbol{e}\) (\(p+1\) equations).

Column 1 is all 1s, which gives \(\sum_{i=1}^ne_i=0\).

**How** Added

Calculate \(\boldsymbol{e}\) and check \(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\)

- Calculate \(\hat{\boldsymbol{y}}\) (Section 01.4).
- For each \(i\), calculate \(e_i=y_i-\hat y_i\).
- For each column of \(\boldsymbol{X}\), multiply it by \(\boldsymbol{e}\) entry by entry, then add.

**Self-check:** All \(p+1\) sums are 0. If not, \(\hat{\boldsymbol\beta}\) has an error.

**Example · Data set 1** Added

1

Residual of observation 2 How step 2

\[e_2=y_2-\hat y_2=5-3.95=1.05\]

\(\hat y_2\) from Section 01.4, step 2.

2

All residuals How step 2

\[e_1=3-3.15=-0.15,\quad e_3=6-7=-1,\quad e_4=8-8.55=-0.55,\quad e_5=13-12.35=0.65\]

\[\boldsymbol{e}=(-0.15,\ 1.05,\ -1,\ -0.55,\ 0.65)^T\]

3

Column 1 times \(\boldsymbol{e}\) How step 3

\[\sum e_i=-0.15+1.05-1-0.55+0.65=0\]

4

Column 2 times \(\boldsymbol{e}\) How step 3

\[\sum x_{i1}e_i=(-2)(-0.15)+(-1)(1.05)+(0)(-1)+(1)(-0.55)+(2)(0.65)\]

\[\sum x_{i1}e_i=0.3-1.05+0-0.55+1.3=0\]

5

Column 3 times \(\boldsymbol{e}\) How step 3

\[\sum x_{i2}e_i=(1)(-0.15)+(-1)(1.05)+(0)(-1)+(-1)(-0.55)+(1)(0.65)\]

\[\sum x_{i2}e_i=-0.15-1.05+0+0.55+0.65=0\]

All sums 0: \(\hat{\boldsymbol\beta}\) is correct. ▲

[figure]
Figure 01.1 · Data set 1: observed \(y_i\) against fitted \(\hat y_i\). Grey line: \(y=\hat y\). Each vertical segment is a residual. Blue: \(e_i>0\). Orange: \(e_i<0\). Purple circle: observation 2. Equal axis scales.

Blue and orange segments have equal total length, \(1.05+0.65=1.7=0.15+1+0.55\). This is \(\sum e_i=0\).

**Why · \(\boldsymbol{e}=(\boldsymbol{I}-\boldsymbol{H})\boldsymbol{y}\) and \(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\)** Slides p.8–9

1

\[\boldsymbol{e}=\boldsymbol{y}-\hat{\boldsymbol{y}}\]

2

\[\boldsymbol{e}=\boldsymbol{y}-\boldsymbol{X}\hat{\boldsymbol\beta}\]

Substitute \(\hat{\boldsymbol{y}}=\boldsymbol{X}\hat{\boldsymbol\beta}\).

3

\[\boldsymbol{e}=\boldsymbol{y}-\boldsymbol{H}\boldsymbol{y}\]

Substitute \(\boldsymbol{X}\hat{\boldsymbol\beta}=\boldsymbol{H}\boldsymbol{y}\).

4

\[\boldsymbol{e}=\boldsymbol{I}\boldsymbol{y}-\boldsymbol{H}\boldsymbol{y}\]

5

\[\boldsymbol{e}=(\boldsymbol{I}-\boldsymbol{H})\boldsymbol{y}\]

∎

1

\[\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{X}^T(\boldsymbol{y}-\boldsymbol{H}\boldsymbol{y})\]

Line 3 above.

2

\[\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{X}^T\boldsymbol{y}-\boldsymbol{X}^T\boldsymbol{H}\boldsymbol{y}\]

3

\[\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{X}^T\boldsymbol{y}-\boldsymbol{X}^T\boldsymbol{X}(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\]

Substitute \(\boldsymbol{H}\).

4

\[\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{X}^T\boldsymbol{y}-\boldsymbol{I}\,\boldsymbol{X}^T\boldsymbol{y}\]

\(\boldsymbol{X}^T\boldsymbol{X}(\boldsymbol{X}^T\boldsymbol{X})^{-1}=\boldsymbol{I}\).

5

\[\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{X}^T\boldsymbol{y}-\boldsymbol{X}^T\boldsymbol{y}\]

6

\[\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\]

∎

### 01.6 Practice Added

**Q1.** In simple linear regression, \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), write \(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\) as two scalar equations.

Answer

1

\[\boldsymbol{X}^T\boldsymbol{e}=\left[\begin{array}{cccc}1&1&\cdots&1\\x_1&x_2&\cdots&x_n\end{array}\right]\left[\begin{array}{c}e_1\\e_2\\\vdots\\e_n\end{array}\right]\]

Rows of \(\boldsymbol{X}^T\) are columns of \(\boldsymbol{X}\).

2

\[\boldsymbol{X}^T\boldsymbol{e}=\left[\begin{array}{c}\sum_{i=1}^ne_i\\\sum_{i=1}^nx_ie_i\end{array}\right]\]

3

\[\sum_{i=1}^ne_i=0,\qquad \sum_{i=1}^nx_ie_i=0\]

▲

**Q2.** Data: \(n=3\), \(x=(0,1,2)\), \(y=(1,3,2)\). Model: \(y_i=\beta_0+\beta_1x_i+\epsilon_i\). Calculate \(\hat{\boldsymbol\beta}\), \(\hat{\boldsymbol{y}}\), \(\boldsymbol{e}\). Check \(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\).

Answer

1

\(\boldsymbol{X}\) and \(\boldsymbol{X}^T\boldsymbol{X}\) Section 01.2, How step 1

\[\boldsymbol{X}=\left[\begin{array}{cc}1&0\\1&1\\1&2\end{array}\right],\qquad \boldsymbol{X}^T\boldsymbol{X}=\left[\begin{array}{cc}3&0+1+2\\0+1+2&0+1+4\end{array}\right]=\left[\begin{array}{cc}3&3\\3&5\end{array}\right]\]

2

\(\boldsymbol{X}^T\boldsymbol{y}\) Section 01.2, How step 2

\[\boldsymbol{X}^T\boldsymbol{y}=\left[\begin{array}{c}1+3+2\\0(1)+1(3)+2(2)\end{array}\right]=\left[\begin{array}{c}6\\7\end{array}\right]\]

3

Inverse Section 01.2, How step 3

Rows \((a,b),(c,d)\): inverse \(\frac{1}{ad-bc}\) times rows \((d,-b),(-c,a)\).

\[ad-bc=3\times5-3\times3=15-9=6\]

\[(\boldsymbol{X}^T\boldsymbol{X})^{-1}=\frac{1}{6}\left[\begin{array}{cc}5&-3\\-3&3\end{array}\right]\]

4

\(\hat{\boldsymbol\beta}\) Section 01.2, How step 4

\[\hat{\boldsymbol\beta}=\frac{1}{6}\left[\begin{array}{c}5(6)-3(7)\\-3(6)+3(7)\end{array}\right]=\frac{1}{6}\left[\begin{array}{c}30-21\\-18+21\end{array}\right]=\frac{1}{6}\left[\begin{array}{c}9\\3\end{array}\right]=\left[\begin{array}{c}1.5\\0.5\end{array}\right]\]

5

\(\hat{\boldsymbol{y}}\) Section 01.4, How step 2

\[\hat y_1=1.5+0.5(0)=1.5,\quad \hat y_2=1.5+0.5(1)=2,\quad \hat y_3=1.5+0.5(2)=2.5\]

6

\(\boldsymbol{e}\) Section 01.5, How step 2

\[e_1=1-1.5=-0.5,\quad e_2=3-2=1,\quad e_3=2-2.5=-0.5\]

7

Check Section 01.5, How step 3

\[\sum e_i=-0.5+1-0.5=0,\qquad \sum x_ie_i=0(-0.5)+1(1)+2(-0.5)=0+1-1=0\]

▲

**Q3.** Use \(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\) to show \(\boldsymbol{X}^T\hat{\boldsymbol{y}}=\boldsymbol{X}^T\boldsymbol{y}\). Check it for data set 1.

Answer

1

\[\boldsymbol{X}^T\hat{\boldsymbol{y}}=\boldsymbol{X}^T(\boldsymbol{y}-\boldsymbol{e})\]

\(\hat{\boldsymbol{y}}=\boldsymbol{y}-\boldsymbol{e}\).

2

\[\boldsymbol{X}^T\hat{\boldsymbol{y}}=\boldsymbol{X}^T\boldsymbol{y}-\boldsymbol{X}^T\boldsymbol{e}\]

3

\[\boldsymbol{X}^T\hat{\boldsymbol{y}}=\boldsymbol{X}^T\boldsymbol{y}-\boldsymbol{0}\]

\(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\) (Slides p.9).

4

\[\boldsymbol{X}^T\hat{\boldsymbol{y}}=\boldsymbol{X}^T\boldsymbol{y}\]

5

Check with \(\hat{\boldsymbol{y}}=(3.15,\,3.95,\,7,\,8.55,\,12.35)^T\)

\[\sum\hat y_i=3.15+3.95+7+8.55+12.35=35\]

\[\sum x_{i1}\hat y_i=-6.3-3.95+0+8.55+24.7=23\]

\[\sum x_{i2}\hat y_i=3.15-3.95+0-8.55+12.35=3\]

6

\[\boldsymbol{X}^T\hat{\boldsymbol{y}}=(35,\,23,\,3)^T=\boldsymbol{X}^T\boldsymbol{y}\]

Section 01.2, step 5. ∎

## 02 · Estimating \(\sigma^2\) and the joint distribution of \(\hat{\boldsymbol\beta}\) and \(\boldsymbol e\)

Plan · Slides p.10–25

Step 1: Maximum likelihood estimator \(\hat\sigma^2_{MLE}\) (Slides p.10–12).

Step 2: The course estimator \(\hat\sigma^2=\frac{1}{n-(p+1)}\boldsymbol e^T\boldsymbol e\) (Slides p.13).

Step 3: Stack \(\hat{\boldsymbol\beta}\) and \(\boldsymbol e\); show the stack is MVN (Slides p.14).

Step 4: Mean of the stack (Slides p.15–16).

Step 5: Variance matrix of the stack, block by block (Slides p.17–22).

Step 6: Distributions of \(\hat{\boldsymbol\beta}\) and \(\boldsymbol e\), and their independence (Slides p.23–25).

Error variance \(\sigma^2\): the unknown variance of each \(\epsilon_i\).

Units 02, 04, and 06 use data set 2. Added

Data set 2 · Added

\(n=4\), \(p=1\), \(x=(0,1,2,3)\), \(\boldsymbol y=(1,3,2,5)^T\).
\[\boldsymbol X=\left[\begin{array}{cc}1&0\\1&1\\1&2\\1&3\end{array}\right],\qquad \boldsymbol y=\left[\begin{array}{c}1\\3\\2\\5\end{array}\right]\]

1

\[\boldsymbol X^T\boldsymbol X=\left[\begin{array}{cc}1+1+1+1&0+1+2+3\\0+1+2+3&0+1+4+9\end{array}\right]=\left[\begin{array}{cc}4&6\\6&14\end{array}\right]\]

2

\[\det(\boldsymbol X^T\boldsymbol X)=4\times14-6\times6=56-36=20\]

3

\[\boldsymbol V=(\boldsymbol X^T\boldsymbol X)^{-1}=\frac{1}{20}\left[\begin{array}{cc}14&-6\\-6&4\end{array}\right]=\left[\begin{array}{cc}0.7&-0.3\\-0.3&0.2\end{array}\right]\]

2×2 inverse: swap diagonal, negate others, divide by determinant.

4

\[\boldsymbol X^T\boldsymbol y=\left[\begin{array}{c}1+3+2+5\\0+3+4+15\end{array}\right]=\left[\begin{array}{c}11\\22\end{array}\right]\]

5

\[\hat{\boldsymbol\beta}=\boldsymbol V\boldsymbol X^T\boldsymbol y=\left[\begin{array}{c}0.7(11)-0.3(22)\\-0.3(11)+0.2(22)\end{array}\right]=\left[\begin{array}{c}7.7-6.6\\-3.3+4.4\end{array}\right]=\left[\begin{array}{c}1.1\\1.1\end{array}\right]\]

6

\[\boldsymbol X\hat{\boldsymbol\beta}=\left[\begin{array}{c}1.1+0(1.1)\\1.1+1(1.1)\\1.1+2(1.1)\\1.1+3(1.1)\end{array}\right]=\left[\begin{array}{c}1.1\\2.2\\3.3\\4.4\end{array}\right]\]

7

\[\boldsymbol e=\boldsymbol y-\boldsymbol X\hat{\boldsymbol\beta}=\left[\begin{array}{c}1-1.1\\3-2.2\\2-3.3\\5-4.4\end{array}\right]=\left[\begin{array}{c}-0.1\\0.8\\-1.3\\0.6\end{array}\right]\]

Entries of \(\boldsymbol H\): \(h_{ij}=\left[\begin{array}{cc}1&x_i\end{array}\right]\boldsymbol V\left[\begin{array}{c}1\\x_j\end{array}\right]=0.7-0.3(x_i+x_j)+0.2x_ix_j\). For example, \(h_{12}=0.7-0.3(0+1)+0.2(0)(1)=0.4\).
\[\boldsymbol H=\left[\begin{array}{cccc}0.7&0.4&0.1&-0.2\\0.4&0.3&0.2&0.1\\0.1&0.2&0.3&0.4\\-0.2&0.1&0.4&0.7\end{array}\right],\qquad \boldsymbol I-\boldsymbol H=\left[\begin{array}{cccc}0.3&-0.4&-0.1&0.2\\-0.4&0.7&-0.2&-0.1\\-0.1&-0.2&0.7&-0.4\\0.2&-0.1&-0.4&0.3\end{array}\right]\]
Self-check: row 1 of \((\boldsymbol I-\boldsymbol H)\boldsymbol y\) is \(0.3(1)-0.4(3)-0.1(2)+0.2(5)=0.3-1.2-0.2+1.0=-0.1=e_1\).

### 02.1 The MLE of \(\sigma^2\) Slides p.10–12

p.10: section page "Estimating \(\sigma^2\)". \(\mathrm{Var}(\hat{\boldsymbol\beta})\) contains \(\sigma^2\). Estimate \(\sigma^2\) before you calculate standard errors and confidence intervals.

**What** Slides p.11–12

Likelihood: the joint density of the observed \(\boldsymbol y\), as a function of \((\boldsymbol\beta,\sigma^2)\).

Log-likelihood \(\ell(\boldsymbol\beta,\sigma^2|\boldsymbol y)\): the natural log of the likelihood. Both have their maximum at the same point.

Maximum likelihood estimate (MLE): the parameter value that makes \(\ell\) largest.

Lecture 7 · p.11–12 \[\ell(\boldsymbol\beta,\sigma^2|\boldsymbol y)=-\frac{n}{2}\log(2\pi)-\frac{n}{2}\log\sigma^2-\frac{1}{2\sigma^2}(\boldsymbol y-\boldsymbol X\boldsymbol\beta)^T(\boldsymbol y-\boldsymbol X\boldsymbol\beta)\] \[\frac{\partial\ell(\boldsymbol\beta,\sigma^2|\boldsymbol y)}{\partial\sigma^2}=-\frac{n}{2\sigma^2}+\frac{1}{2(\sigma^2)^2}(\boldsymbol y-\boldsymbol X\boldsymbol\beta)^T(\boldsymbol y-\boldsymbol X\boldsymbol\beta)=0\] \[(\boldsymbol y-\boldsymbol X\boldsymbol\beta)^T(\boldsymbol y-\boldsymbol X\boldsymbol\beta)=n\sigma^2\] \[\Longrightarrow\ \hat\sigma^2_{MLE}=\frac{1}{n}(\boldsymbol y-\boldsymbol X\hat{\boldsymbol\beta})^T(\boldsymbol y-\boldsymbol X\hat{\boldsymbol\beta})\]

Line 1 is the log density of \(\boldsymbol y\sim MVN(\boldsymbol X\boldsymbol\beta,\sigma^2\boldsymbol I)\). Line 2 sets the partial derivative for \(\sigma^2\) to 0. The MLE of \(\boldsymbol\beta\) is \(\hat{\boldsymbol\beta}\).

\((\boldsymbol y-\boldsymbol X\hat{\boldsymbol\beta})^T(\boldsymbol y-\boldsymbol X\hat{\boldsymbol\beta})=\boldsymbol e^T\boldsymbol e=\sum_{i=1}^n e_i^2\), the sum of squared residuals. \(\hat\sigma^2_{MLE}\) is their mean.

**How** Added

Calculate \(\hat\sigma^2_{MLE}\)

- Calculate \(\hat{\boldsymbol\beta}\) and \(\boldsymbol e=\boldsymbol y-\boldsymbol X\hat{\boldsymbol\beta}\).
- Square each residual.
- Add the squares: \(\boldsymbol e^T\boldsymbol e\).
- Divide by \(n\).

**Self-check:** After step 1, the residuals add to 0 (model with intercept).

**Self-check:** In \(\ell\), the last term equals \(-n/2\).

**Example · Data set 2** Added

1

Residuals How step 1

\[\boldsymbol e=(-0.1,\ 0.8,\ -1.3,\ 0.6)^T\]

Self-check: \(-0.1+0.8-1.3+0.6=0\).

2

Squares How step 2

\[e_i^2=0.01,\ 0.64,\ 1.69,\ 0.36\]

3

Sum How step 3

\[\boldsymbol e^T\boldsymbol e=0.01+0.64+1.69+0.36=2.70\]

4

Divide by \(n\) How step 4

\[\hat\sigma^2_{MLE}=\frac{2.70}{4}=0.675\]

▲

Self-check (\(n=4\)): the last term is \(-\frac{2.70}{2(0.675)}=-2=-n/2\). Then \(\ell=-2(1.837877)-2(-0.393043)-2=-3.675754+0.786085-2=-4.8897\).

[figure]
Figure 02.1 · \(\ell(\hat{\boldsymbol\beta},\sigma^2|\boldsymbol y)\) for data set 2. Orange: maximum at \(\hat\sigma^2_{MLE}=0.675\). Green: \(\hat\sigma^2=1.35\) (Section 02.2).

**Why** Slides p.11–12

Let \(Q=(\boldsymbol y-\boldsymbol X\boldsymbol\beta)^T(\boldsymbol y-\boldsymbol X\boldsymbol\beta)\). \(Q\) does not contain \(\sigma^2\).

1

\[f(\boldsymbol y)=\frac{1}{(2\pi)^{n/2}|\sigma^2\boldsymbol I|^{1/2}}\exp\left(-\frac{1}{2}(\boldsymbol y-\boldsymbol X\boldsymbol\beta)^T(\sigma^2\boldsymbol I)^{-1}(\boldsymbol y-\boldsymbol X\boldsymbol\beta)\right)\]

MVN density (Lecture 5).

2

\[=\frac{1}{(2\pi)^{n/2}(\sigma^2)^{n/2}}\exp\left(-\frac{1}{2\sigma^2}Q\right)\]

\(|\sigma^2\boldsymbol I|=(\sigma^2)^n\), \((\sigma^2\boldsymbol I)^{-1}=\frac{1}{\sigma^2}\boldsymbol I\).

3

\[\ell(\boldsymbol\beta,\sigma^2|\boldsymbol y)=\log f(\boldsymbol y)=-\frac{n}{2}\log(2\pi)-\frac{n}{2}\log\sigma^2-\frac{1}{2\sigma^2}Q\]

Take the log. Line 1 of p.11.

4

\[\frac{\partial\ell}{\partial\sigma^2}=0-\frac{n}{2}\cdot\frac{1}{\sigma^2}-\frac{Q}{2}\cdot\left(-\frac{1}{(\sigma^2)^2}\right)\]

With \(t=\sigma^2\): \(\frac{d}{dt}\log t=\frac1t\), \(\frac{d}{dt}\frac1t=-\frac{1}{t^2}\).

5

\[=-\frac{n}{2\sigma^2}+\frac{1}{2(\sigma^2)^2}Q\]

6

\[-\frac{n}{2\sigma^2}+\frac{1}{2(\sigma^2)^2}Q=0\]

Derivative is 0 at the maximum.

7

\[\frac{1}{2(\sigma^2)^2}Q=\frac{n}{2\sigma^2}\]

8

\[Q=n\sigma^2\]

Line 3 of p.12.

9

\[\sigma^2=\frac{1}{n}(\boldsymbol y-\boldsymbol X\boldsymbol\beta)^T(\boldsymbol y-\boldsymbol X\boldsymbol\beta)\]

10

\[\hat\sigma^2_{MLE}=\frac{1}{n}(\boldsymbol y-\boldsymbol X\hat{\boldsymbol\beta})^T(\boldsymbol y-\boldsymbol X\hat{\boldsymbol\beta})=\frac1n\boldsymbol e^T\boldsymbol e\]

MLE of \(\boldsymbol\beta\) is \(\hat{\boldsymbol\beta}\) (Lecture 6). ∎

### 02.2 The unbiased estimate of \(\sigma^2\) Slides p.13

**What** Slides p.13

Estimator: a rule that calculates an estimate from the data. It changes with the data, so it is a random variable.

Lecture 7 · p.13
The MLE of \(\sigma^2\) is \(\frac{1}{n}\boldsymbol e^T\boldsymbol e\), where \(\boldsymbol e=\boldsymbol y-\boldsymbol X\hat{\boldsymbol\beta}\).

Instead we usually use \(\hat\sigma^2=\frac{1}{n-(p+1)}\boldsymbol e^T\boldsymbol e\). Why?

Both estimators use \(\boldsymbol e^T\boldsymbol e\). Only the denominator differs.

\(p+1\) is the number of entries in \(\boldsymbol\beta\). Residual degrees of freedom \(n-(p+1)\): observations minus estimated coefficients. The slide title says \(\hat\sigma^2\) is unbiased.

p.13 only asks "Why?". Unit 04 answers it with \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{n-(p+1)}\). Slides p.14–25 prepare that proof.

**How** Added

Calculate \(\hat\sigma^2\) and \(\hat\sigma\)

- Calculate \(\boldsymbol e^T\boldsymbol e\) (Section 02.1, How steps 1–3).
- Count the coefficients \(p+1\), the columns of \(\boldsymbol X\).
- Calculate \(n-(p+1)\).
- Divide \(\boldsymbol e^T\boldsymbol e\) by \(n-(p+1)\) to get \(\hat\sigma^2\).
- Take the square root to get \(\hat\sigma\).

**Self-check:** \(\hat\sigma^2>\hat\sigma^2_{MLE}\), and \(\hat\sigma^2/\hat\sigma^2_{MLE}=n/(n-(p+1))\).

**Example · Data set 2** Added

1

Sum of squared residuals How step 1

\[\boldsymbol e^T\boldsymbol e=2.70\]

Section 02.1, Example, step 3.

2

Count the coefficients How step 2

\[p+1=1+1=2\]

Columns: intercept and \(x\).

3

Degrees of freedom How step 3

\[n-(p+1)=4-2=2\]

4

Divide How step 4

\[\hat\sigma^2=\frac{2.70}{2}=1.35\]

5

Square root How step 5

\[\hat\sigma=\sqrt{1.35}=1.1619\]

▲

Self-check: \(1.35/0.675=2=4/2\).

### 02.3 Stack \(\hat{\boldsymbol\beta}\) and \(\boldsymbol e\) into one vector Slides p.14

Joint distribution: the distribution of several random quantities together.

**What** Slides p.14

Lecture 7 · p.14
Recall \(\hat{\boldsymbol\beta}=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol y\) and \(\boldsymbol e=(\boldsymbol I-\boldsymbol H)\boldsymbol y\).

Let's consider the vector \(\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]\), which is a linear combination of \(\boldsymbol y\):
\[\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]=\left[\begin{array}{c}(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\\ \boldsymbol I-\boldsymbol H\end{array}\right]\boldsymbol y\]
And since \(\boldsymbol y\sim N(\boldsymbol X\boldsymbol\beta,\sigma^2\boldsymbol I)\), then \(\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]\) is MVN-distributed.

The stack is \((p+1+n)\times1\). The matrix is \((p+1+n)\times n\). Linear combination of \(\boldsymbol y\): a sum of \(y_1,\dots,y_n\), each times a constant.

**How** Added

Show that a vector is MVN

- Write the vector as \(\boldsymbol M\boldsymbol y+\boldsymbol d\), with \(\boldsymbol M\) and \(\boldsymbol d\) free of \(\boldsymbol y\).
- Confirm \(\boldsymbol y\sim MVN(\boldsymbol X\boldsymbol\beta,\sigma^2\boldsymbol I)\).
- Use MVN linearity (Lecture 5): \(\boldsymbol M\boldsymbol y+\boldsymbol d\) is MVN.

**Self-check:** \(\boldsymbol M\) has \(n\) columns.

**Self-check:** The first \(p+1\) entries of \(\boldsymbol M\boldsymbol y\) are \(\hat{\boldsymbol\beta}\); the rest are \(\boldsymbol e\).

Here \(\boldsymbol M=\left[\begin{array}{c}(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\\ \boldsymbol I-\boldsymbol H\end{array}\right]\), \(\boldsymbol d=\boldsymbol 0\). The slides use \(\boldsymbol C\) for a block in Section 02.5, so this page uses \(\boldsymbol M\).

**Example · Data set 2** Added

1

Top block How step 1

\[(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T=\left[\begin{array}{cc}0.7&-0.3\\-0.3&0.2\end{array}\right]\left[\begin{array}{cccc}1&1&1&1\\0&1&2&3\end{array}\right]=\left[\begin{array}{cccc}0.7&0.4&0.1&-0.2\\-0.3&-0.1&0.1&0.3\end{array}\right]\]

Row 1: \(0.7-0.3x_j\). Row 2: \(-0.3+0.2x_j\).

2

Stack the two blocks How step 1

\[\boldsymbol M=\left[\begin{array}{cccc}0.7&0.4&0.1&-0.2\\-0.3&-0.1&0.1&0.3\\ \hline 0.3&-0.4&-0.1&0.2\\-0.4&0.7&-0.2&-0.1\\-0.1&-0.2&0.7&-0.4\\0.2&-0.1&-0.4&0.3\end{array}\right]\]

\(6\times4\): \(p+1+n=6\), \(n=4\). Self-check 1 passes.

3

Row 1 times \(\boldsymbol y\)

\[0.7(1)+0.4(3)+0.1(2)-0.2(5)=0.7+1.2+0.2-1.0=1.1\]

4

Row 2 times \(\boldsymbol y\)

\[-0.3(1)-0.1(3)+0.1(2)+0.3(5)=-0.3-0.3+0.2+1.5=1.1\]

5

Rows 3 to 6 times \(\boldsymbol y\)

\[(\boldsymbol I-\boldsymbol H)\boldsymbol y=(-0.1,\ 0.8,\ -1.3,\ 0.6)^T\]

Row 3: \(0.3-1.2-0.2+1.0=-0.1\). Row 4: \(-0.4+2.1-0.4-0.5=0.8\). Row 5: \(-0.1-0.6+1.4-2.0=-1.3\). Row 6: \(0.2-0.3-0.8+1.5=0.6\).

6

\[\boldsymbol M\boldsymbol y=(1.1,\ 1.1,\ -0.1,\ 0.8,\ -1.3,\ 0.6)^T\]

\(\hat\beta_0=1.1\), \(\hat\beta_1=1.1\), then \(\boldsymbol e\). Self-check 2 passes. ▲

A mean vector and a variance matrix fully specify an MVN.

### 02.4 The mean of the stacked vector Slides p.15–16

\(E[\hat{\boldsymbol\beta}]=\boldsymbol\beta\) is known. Only \(E[\boldsymbol e]\) is new.

**What** Slides p.15–16

Lecture 7 · p.16
Recall \(E[\hat{\boldsymbol\beta}]=\boldsymbol\beta\). Now,
\[\begin{array}{rl}E[\boldsymbol e]&=E[(\boldsymbol I-\boldsymbol H)\boldsymbol y]\\&=(\boldsymbol I-\boldsymbol H)E[\boldsymbol y]\\&=(\boldsymbol I-\boldsymbol H)\boldsymbol X\boldsymbol\beta\\&=\boldsymbol X\boldsymbol\beta-\boldsymbol H\boldsymbol X\boldsymbol\beta\\&=\boldsymbol X\boldsymbol\beta-\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X\boldsymbol\beta\\&=\boldsymbol X\boldsymbol\beta-\boldsymbol X\boldsymbol\beta=\boldsymbol 0\end{array}\]
So \(E\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]=\left[\begin{array}{c}\boldsymbol\beta\\ \boldsymbol 0\end{array}\right]\).

On average, a residual is 0. The key step is \(\boldsymbol H\boldsymbol X=\boldsymbol X\), which gives \((\boldsymbol I-\boldsymbol H)\boldsymbol X=\boldsymbol 0\).

**How** Added

Find the expected value of a constant matrix times \(\boldsymbol y\)

- Move the constant matrix out: \(E[\boldsymbol M\boldsymbol y]=\boldsymbol M E[\boldsymbol y]\).
- Substitute \(E[\boldsymbol y]=\boldsymbol X\boldsymbol\beta\) to get \(\boldsymbol M\boldsymbol X\boldsymbol\beta\).
- Calculate \(\boldsymbol M\boldsymbol X\). For \(\boldsymbol M=\boldsymbol I-\boldsymbol H\), the result is \(\boldsymbol 0\).

**Self-check:** \(\boldsymbol M\boldsymbol X\) uses only \(\boldsymbol X\). For \(\boldsymbol M=\boldsymbol I-\boldsymbol H\), each entry is 0.

**Example · Data set 2** Added

One sample cannot give \(E[\boldsymbol e]\). How step 3 uses only \(\boldsymbol X\), so you can check it.

1

Column 1 of \(\boldsymbol X\) is \((1,1,1,1)^T\) How step 3

\[(\boldsymbol I-\boldsymbol H)\left[\begin{array}{c}1\\1\\1\\1\end{array}\right]=\left[\begin{array}{c}0.3-0.4-0.1+0.2\\-0.4+0.7-0.2-0.1\\-0.1-0.2+0.7-0.4\\0.2-0.1-0.4+0.3\end{array}\right]=\left[\begin{array}{c}0\\0\\0\\0\end{array}\right]\]

2

Column 2 of \(\boldsymbol X\) is \((0,1,2,3)^T\) How step 3

\[(\boldsymbol I-\boldsymbol H)\left[\begin{array}{c}0\\1\\2\\3\end{array}\right]=\left[\begin{array}{c}0-0.4-0.2+0.6\\0+0.7-0.4-0.3\\0-0.2+1.4-1.2\\0-0.1-0.8+0.9\end{array}\right]=\left[\begin{array}{c}0\\0\\0\\0\end{array}\right]\]

3

\[E[\boldsymbol e]=(\boldsymbol I-\boldsymbol H)\boldsymbol X\boldsymbol\beta=\boldsymbol 0\,\boldsymbol\beta=\boldsymbol 0\]

True for each \(\boldsymbol\beta\). ▲

**Why** Slides p.15–16

1

\[E[\boldsymbol e]=E[(\boldsymbol I-\boldsymbol H)\boldsymbol y]\]

Substitute \(\boldsymbol e\).

2

\[=(\boldsymbol I-\boldsymbol H)E[\boldsymbol y]\]

\(\boldsymbol I-\boldsymbol H\) is constant (Lecture 5).

3

\[=(\boldsymbol I-\boldsymbol H)\boldsymbol X\boldsymbol\beta\]

\(E[\boldsymbol y]=\boldsymbol X\boldsymbol\beta\).

4

\[=\boldsymbol X\boldsymbol\beta-\boldsymbol H\boldsymbol X\boldsymbol\beta\]

5

\[=\boldsymbol X\boldsymbol\beta-\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X\boldsymbol\beta\]

Substitute \(\boldsymbol H\).

6

\[=\boldsymbol X\boldsymbol\beta-\boldsymbol X\boldsymbol I\boldsymbol\beta\]

\((\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X=\boldsymbol I\).

7

\[=\boldsymbol X\boldsymbol\beta-\boldsymbol X\boldsymbol\beta\]

8

\[=\boldsymbol 0\]

With \(E[\hat{\boldsymbol\beta}]=\boldsymbol\beta\): \(E\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]=\left[\begin{array}{c}\boldsymbol\beta\\ \boldsymbol 0\end{array}\right]\). ∎

### 02.5 The variance matrix of the stacked vector Slides p.17–18

**What** Slides p.17–18

Lecture 7 · p.18 \[\begin{array}{rl}\mathrm{Var}\left(\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]\right)&=\mathrm{Var}\left(\left[\begin{array}{c}(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\\ (\boldsymbol I-\boldsymbol H)\end{array}\right]\boldsymbol y\right)\\ &=\left[\begin{array}{c}(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\\ (\boldsymbol I-\boldsymbol H)\end{array}\right]\mathrm{Var}(\boldsymbol y)\left[\begin{array}{c}(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\\ (\boldsymbol I-\boldsymbol H)\end{array}\right]^T\\ &=\left[\begin{array}{c}(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\\ (\boldsymbol I-\boldsymbol H)\end{array}\right](\sigma^2\boldsymbol I)\left[((\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T)^T,\ (\boldsymbol I-\boldsymbol H)^T\right]\\ &=\sigma^2\left[\begin{array}{c}(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\\ (\boldsymbol I-\boldsymbol H)\end{array}\right]\left[\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1},\ (\boldsymbol I-\boldsymbol H)\right]\\ &=\sigma^2\left[\begin{array}{cc}(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1} & (\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T(\boldsymbol I-\boldsymbol H)\\ (\boldsymbol I-\boldsymbol H)\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1} & (\boldsymbol I-\boldsymbol H)(\boldsymbol I-\boldsymbol H)\end{array}\right]\\ &=\sigma^2\left[\begin{array}{cc}\boldsymbol A & \boldsymbol B\\ \boldsymbol C & \boldsymbol D\end{array}\right]\end{array}\]

\(\sigma^2\boldsymbol A\): \(\mathrm{Var}(\hat{\boldsymbol\beta})\). Size \((p+1)\times(p+1)\); example \(2\times2\).

\(\sigma^2\boldsymbol B\): covariances of \(\hat{\boldsymbol\beta}\) with \(\boldsymbol e\). Size \((p+1)\times n\); example \(2\times4\).

\(\sigma^2\boldsymbol C\): covariances of \(\boldsymbol e\) with \(\hat{\boldsymbol\beta}\). Size \(n\times(p+1)\); example \(4\times2\).

\(\sigma^2\boldsymbol D\): \(\mathrm{Var}(\boldsymbol e)\). Size \(n\times n\); example \(4\times4\).

**How** Added

Find \(\mathrm{Var}(\boldsymbol M\boldsymbol y)\) and split it into blocks

- Use linearity (Lecture 5): \(\mathrm{Var}(\boldsymbol M\boldsymbol y)=\boldsymbol M\,\mathrm{Var}(\boldsymbol y)\,\boldsymbol M^T\).
- Substitute \(\mathrm{Var}(\boldsymbol y)=\sigma^2\boldsymbol I\) to get \(\sigma^2\boldsymbol M\boldsymbol M^T\).
- Split \(\boldsymbol M\) into top and bottom blocks. \(\boldsymbol M^T\) then has left and right blocks.
- Multiply each row block by each column block to get \(\boldsymbol A\), \(\boldsymbol B\), \(\boldsymbol C\), \(\boldsymbol D\).

**Self-check:** \(\boldsymbol A\) is \((p+1)\times(p+1)\). \(\boldsymbol D\) is \(n\times n\).

**Example · Data set 2** Added

One entry of each block of \(\boldsymbol M\boldsymbol M^T\), with \(\boldsymbol M\) from Section 02.3.

1

Block \(\boldsymbol A\), entry (2,2): row 2 of \(\boldsymbol M\) times row 2 How step 4

\[(-0.3)^2+(-0.1)^2+0.1^2+0.3^2=0.09+0.01+0.01+0.09=0.2\]

Equals \(V_{11}=0.2\).

2

Block \(\boldsymbol B\), entry (1,1): row 1 of \(\boldsymbol M\) times row 3 How step 4

\[0.7(0.3)+0.4(-0.4)+0.1(-0.1)+(-0.2)(0.2)=0.21-0.16-0.01-0.04=0\]

3

Block \(\boldsymbol C\), entry (1,2): row 3 of \(\boldsymbol M\) times row 2 How step 4

\[0.3(-0.3)+(-0.4)(-0.1)+(-0.1)(0.1)+0.2(0.3)=-0.09+0.04-0.01+0.06=0\]

4

Block \(\boldsymbol D\), entry (1,1): row 3 of \(\boldsymbol M\) times row 3 How step 4

\[0.3^2+(-0.4)^2+(-0.1)^2+0.2^2=0.09+0.16+0.01+0.04=0.3\]

Equals entry (1,1) of \(\boldsymbol I-\boldsymbol H\). ▲

**Why** Slides p.17–18

Let \(\boldsymbol L=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\).

1

\[\mathrm{Var}\left(\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]\right)=\mathrm{Var}\left(\left[\begin{array}{c}\boldsymbol L\\ (\boldsymbol I-\boldsymbol H)\end{array}\right]\boldsymbol y\right)\]

Stacked form of p.14.

2

\[=\left[\begin{array}{c}\boldsymbol L\\ (\boldsymbol I-\boldsymbol H)\end{array}\right]\mathrm{Var}(\boldsymbol y)\left[\begin{array}{c}\boldsymbol L\\ (\boldsymbol I-\boldsymbol H)\end{array}\right]^T\]

Linearity (Lecture 5).

3

\[=\left[\begin{array}{c}\boldsymbol L\\ (\boldsymbol I-\boldsymbol H)\end{array}\right](\sigma^2\boldsymbol I)\left[\boldsymbol L^T,\ (\boldsymbol I-\boldsymbol H)^T\right]\]

\(\mathrm{Var}(\boldsymbol y)=\sigma^2\boldsymbol I\); transpose turns a stack into a pair.

4

\[=\sigma^2\left[\begin{array}{c}\boldsymbol L\\ (\boldsymbol I-\boldsymbol H)\end{array}\right]\left[\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1},\ (\boldsymbol I-\boldsymbol H)^T\right]\]

\(\boldsymbol L^T=\boldsymbol X((\boldsymbol X^T\boldsymbol X)^{-1})^T=\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\).

5

\[=\sigma^2\left[\begin{array}{cc}\boldsymbol L\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1} & \boldsymbol L(\boldsymbol I-\boldsymbol H)^T\\ (\boldsymbol I-\boldsymbol H)\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1} & (\boldsymbol I-\boldsymbol H)(\boldsymbol I-\boldsymbol H)^T\end{array}\right]\]

Block multiplication.

6

\[=\sigma^2\left[\begin{array}{cc}\boldsymbol A & \boldsymbol B\\ \boldsymbol C & \boldsymbol D\end{array}\right]\]

p.18 writes \(\boldsymbol B=\boldsymbol L(\boldsymbol I-\boldsymbol H)\); \((\boldsymbol I-\boldsymbol H)^T=\boldsymbol I-\boldsymbol H\) (Section 02.6). ∎

### 02.6 Simplify the blocks \(\boldsymbol A\), \(\boldsymbol B\), \(\boldsymbol D\), and the Aside Slides p.19–22

**What** Slides p.19–22

Lecture 7 · p.22 \[\boldsymbol A=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}=(\boldsymbol X^T\boldsymbol X)^{-1}\] \[\begin{array}{rl}\boldsymbol B&=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T(\boldsymbol I-\boldsymbol H)\\&=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T-(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T(\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T)\\&=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T-(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\\&=\boldsymbol 0\end{array}\]
Aside:
\[\begin{array}{rl}\boldsymbol H\boldsymbol H^T&=[\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T][\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T]^T\\&=[\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T][\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T]\\&=\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T=\boldsymbol H\end{array}\] \[\begin{array}{rl}\boldsymbol D&=(\boldsymbol I-\boldsymbol H)(\boldsymbol I-\boldsymbol H)^T\\&=(\boldsymbol I\boldsymbol I^T-\boldsymbol I\boldsymbol H^T-\boldsymbol H\boldsymbol I^T+\boldsymbol H\boldsymbol H^T)\\&=(\boldsymbol I-2\boldsymbol H+\boldsymbol H)\\&=(\boldsymbol I-\boldsymbol H)\end{array}\]

\(\boldsymbol A=(\boldsymbol X^T\boldsymbol X)^{-1}\): \(\mathrm{Var}(\hat{\boldsymbol\beta})=\sigma^2(\boldsymbol X^T\boldsymbol X)^{-1}\), as in Lecture 6.

\(\boldsymbol B=\boldsymbol 0\): each entry of \(\hat{\boldsymbol\beta}\) has covariance 0 with each entry of \(\boldsymbol e\).

Aside: \(\boldsymbol H\boldsymbol H^T=\boldsymbol H\). The derivation also shows \(\boldsymbol H^T=\boldsymbol H\), so \(\boldsymbol H\boldsymbol H=\boldsymbol H\).

\(\boldsymbol D=\boldsymbol I-\boldsymbol H\): \(\mathrm{Var}(\boldsymbol e)=\sigma^2(\boldsymbol I-\boldsymbol H)\).

\(\boldsymbol C\): not on the slides. A variance matrix is symmetric, so \(\boldsymbol C=\boldsymbol B^T=\boldsymbol 0\). Added

**How** Added

Simplify a product that contains \(\boldsymbol H\)

- Write each \(\boldsymbol H\) as \(\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\).
- Find each adjacent pair \((\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X\) or \(\boldsymbol X^T\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\).
- Replace each pair with \(\boldsymbol I\).
- Use \(\boldsymbol H^T=\boldsymbol H\) and \(\boldsymbol I^T=\boldsymbol I\).
- Replace \(\boldsymbol H\boldsymbol H\) or \(\boldsymbol H\boldsymbol H^T\) with \(\boldsymbol H\) (Aside).

**Self-check:** One entry of the product is the same before and after.

**Example · Data set 2** Added

1

Block \(\boldsymbol A\): first find \(\boldsymbol L\boldsymbol X\)

\[\boldsymbol L\boldsymbol X=\left[\begin{array}{cc}0.7+0.4+0.1-0.2&0+0.4+0.2-0.6\\-0.3-0.1+0.1+0.3&0-0.1+0.2+0.9\end{array}\right]=\left[\begin{array}{cc}1&0\\0&1\end{array}\right]\]

\(\boldsymbol A=\boldsymbol I\boldsymbol V=\boldsymbol V=\left[\begin{array}{cc}0.7&-0.3\\-0.3&0.2\end{array}\right]\).

2

Block \(\boldsymbol B=\boldsymbol L(\boldsymbol I-\boldsymbol H)\): row 2 of \(\boldsymbol L\) times column 2 of \(\boldsymbol I-\boldsymbol H\)

\[-0.3(-0.4)+(-0.1)(0.7)+0.1(-0.2)+0.3(-0.1)=0.12-0.07-0.02-0.03=0\]

The other 7 entries are also 0.

3

Aside: entry (1,2) of \(\boldsymbol H\boldsymbol H^T\), row 1 of \(\boldsymbol H\) times row 2

\[0.7(0.4)+0.4(0.3)+0.1(0.2)+(-0.2)(0.1)=0.28+0.12+0.02-0.02=0.4\]

Equals \(h_{12}=0.4\).

4

Block \(\boldsymbol D\): entry (1,2), row 1 of \(\boldsymbol I-\boldsymbol H\) times row 2

\[0.3(-0.4)+(-0.4)(0.7)+(-0.1)(-0.2)+0.2(-0.1)=-0.12-0.28+0.02-0.02=-0.4\]

Equals entry (1,2) of \(\boldsymbol I-\boldsymbol H\). ▲

**Why** Slides p.19–22

Block \(\boldsymbol A\):

1

\[\boldsymbol A=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\]

2

\[=\boldsymbol I(\boldsymbol X^T\boldsymbol X)^{-1}\]

\((\boldsymbol X^T\boldsymbol X)^{-1}(\boldsymbol X^T\boldsymbol X)=\boldsymbol I\).

3

\[=(\boldsymbol X^T\boldsymbol X)^{-1}\]

∎

Block \(\boldsymbol B\):

1

\[\boldsymbol B=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T(\boldsymbol I-\boldsymbol H)\]

2

\[=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T-(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol H\]

3

\[=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T-(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T(\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T)\]

Substitute \(\boldsymbol H\).

4

\[=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T-\boldsymbol I(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\]

\((\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X=\boldsymbol I\).

5

\[=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T-(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\]

6

\[=\boldsymbol 0\]

∎

Aside \(\boldsymbol H\boldsymbol H^T=\boldsymbol H\). Rule: \((\boldsymbol P\boldsymbol Q\boldsymbol S)^T=\boldsymbol S^T\boldsymbol Q^T\boldsymbol P^T\).

1

\[\boldsymbol H\boldsymbol H^T=[\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T][\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T]^T\]

2

\[=[\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T][(\boldsymbol X^T)^T((\boldsymbol X^T\boldsymbol X)^{-1})^T\boldsymbol X^T]\]

Transpose of a product: reverse the order.

3

\[=[\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T][\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T]\]

Inverse of symmetric \(\boldsymbol X^T\boldsymbol X\) is symmetric. Shows \(\boldsymbol H^T=\boldsymbol H\).

4

\[=\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}(\boldsymbol X^T\boldsymbol X)(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\]

Associative.

5

\[=\boldsymbol X\boldsymbol I(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\]

6

\[=\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T=\boldsymbol H\]

∎

Block \(\boldsymbol D\):

1

\[\boldsymbol D=(\boldsymbol I-\boldsymbol H)(\boldsymbol I-\boldsymbol H)^T\]

2

\[=(\boldsymbol I-\boldsymbol H)(\boldsymbol I^T-\boldsymbol H^T)\]

Transpose each term.

3

\[=\boldsymbol I\boldsymbol I^T-\boldsymbol I\boldsymbol H^T-\boldsymbol H\boldsymbol I^T+\boldsymbol H\boldsymbol H^T\]

4

\[=\boldsymbol I-\boldsymbol H-\boldsymbol H+\boldsymbol H\boldsymbol H^T\]

\(\boldsymbol I^T=\boldsymbol I\), \(\boldsymbol H^T=\boldsymbol H\).

5

\[=\boldsymbol I-2\boldsymbol H+\boldsymbol H\]

Aside: \(\boldsymbol H\boldsymbol H^T=\boldsymbol H\).

6

\[=\boldsymbol I-\boldsymbol H\]

∎

### 02.7 Implications Slides p.23–25

**What** Slides p.23–25

Lecture 7 · p.25 \[\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]\sim N\left(\left[\begin{array}{c}\boldsymbol\beta\\ \boldsymbol 0\end{array}\right],\ \sigma^2\left[\begin{array}{cc}(\boldsymbol X^T\boldsymbol X)^{-1} & \boldsymbol 0\\ \boldsymbol 0 & (\boldsymbol I-\boldsymbol H)\end{array}\right]\right)\]

- \(\hat{\boldsymbol\beta}\sim N(\boldsymbol\beta,\sigma^2(\boldsymbol X^T\boldsymbol X)^{-1})\)
- \(\boldsymbol e\sim N(\boldsymbol 0,\sigma^2(\boldsymbol I-\boldsymbol H))\)
- \(\hat{\boldsymbol\beta}\) and \(\boldsymbol e\) are independent

[figure]
Figure 02.2 · Variance matrix of \(\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]\) for data set 2, without \(\sigma^2\). Top-left: \((\boldsymbol X^T\boldsymbol X)^{-1}\). Bottom-right: \(\boldsymbol I-\boldsymbol H\). Grey blocks: zeros.

Each result uses one MVN property (Lecture 5).

Marginal distribution property: a part of an MVN vector is MVN. The top part gives \(\hat{\boldsymbol\beta}\), with variance \(\sigma^2(\boldsymbol X^T\boldsymbol X)^{-1}\).

The bottom part gives \(\boldsymbol e\), with variance \(\sigma^2(\boldsymbol I-\boldsymbol H)\). \(\mathrm{Var}(e_i)=\sigma^2(1-h_{ii})\); \(h_{ii}\) is diagonal entry \(i\) of \(\boldsymbol H\).

Independent: one value does not change the distribution of the other. MVN parts with zero covariance are independent.

**How** Added

Estimate \(\mathrm{Var}(\hat{\boldsymbol\beta})\) and \(\mathrm{Var}(e_i)\)

- Calculate \(\hat\sigma^2=\boldsymbol e^T\boldsymbol e/(n-(p+1))\) (Section 02.2).
- Calculate \(\boldsymbol V=(\boldsymbol X^T\boldsymbol X)^{-1}\).
- Estimate \(\mathrm{Var}(\hat\beta_j)\) as \(\hat\sigma^2V_{jj}\).
- Take its square root: the standard error of \(\hat\beta_j\).
- Estimate \(\mathrm{Var}(e_i)\) as \(\hat\sigma^2(1-h_{ii})\).

**Self-check:** Each variance is positive. Each \(1-h_{ii}\) is between 0 and 1.

**Example · Data set 2** Added

1

Estimate \(\sigma^2\) How step 1

\[\hat\sigma^2=1.35\]

Section 02.2.

2

Read \(V_{11}\) How step 2

\[V_{11}=0.2\]

Second diagonal entry (0-indexing).

3

Variance of \(\hat\beta_1\) How step 3

\[\widehat{\mathrm{Var}}(\hat\beta_1)=\hat\sigma^2V_{11}=1.35\times0.2=0.27\]

4

Standard error How step 4

\[\mathrm{SE}(\hat\beta_1)=\sqrt{0.27}=0.5196\]

5

Variances of \(e_1\) and \(e_2\) How step 5

\[\widehat{\mathrm{Var}}(e_1)=1.35(1-0.7)=1.35\times0.3=0.405,\qquad \widehat{\mathrm{Var}}(e_2)=1.35(1-0.3)=1.35\times0.7=0.945\]

▲

The end points \(x=0\) and \(x=3\) have larger \(h_{ii}\), so their residuals have smaller variance.

**Why** Slides p.23–25

1

\[\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]\ \text{is MVN}\]

Section 02.3 (p.14).

2

\[E\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]=\left[\begin{array}{c}\boldsymbol\beta\\ \boldsymbol 0\end{array}\right]\]

Section 02.4 (p.16).

3

\[\mathrm{Var}\left(\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]\right)=\sigma^2\left[\begin{array}{cc}\boldsymbol A & \boldsymbol B\\ \boldsymbol C & \boldsymbol D\end{array}\right]\]

Section 02.5 (p.18).

4

\[=\sigma^2\left[\begin{array}{cc}(\boldsymbol X^T\boldsymbol X)^{-1} & \boldsymbol 0\\ \boldsymbol 0 & (\boldsymbol I-\boldsymbol H)\end{array}\right]\]

Section 02.6 (p.19–22).

5

\[\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]\sim N\left(\left[\begin{array}{c}\boldsymbol\beta\\ \boldsymbol 0\end{array}\right],\ \sigma^2\left[\begin{array}{cc}(\boldsymbol X^T\boldsymbol X)^{-1} & \boldsymbol 0\\ \boldsymbol 0 & (\boldsymbol I-\boldsymbol H)\end{array}\right]\right)\]

Mean and variance specify an MVN.

6

\[\hat{\boldsymbol\beta}\sim N(\boldsymbol\beta,\sigma^2(\boldsymbol X^T\boldsymbol X)^{-1}),\qquad \boldsymbol e\sim N(\boldsymbol 0,\sigma^2(\boldsymbol I-\boldsymbol H))\]

Marginal distribution property.

7

\[\hat{\boldsymbol\beta}\ \text{and}\ \boldsymbol e\ \text{are independent}\]

Zero covariance gives independence. ∎

\(\hat\sigma^2\) uses only \(\boldsymbol e\), so \(\hat\sigma^2\) is also independent of \(\hat{\boldsymbol\beta}\). Unit 03 uses this for the t statistic.

### 02.8 Practice Added

**Q1.** A regression has \(n=12\), \(p=2\), and \(\boldsymbol e^T\boldsymbol e=45\). Calculate \(\hat\sigma^2_{MLE}\), \(\hat\sigma^2\), and \(\hat\sigma\).

Answer

\(\hat\sigma^2_{MLE}=\frac{1}{n}\boldsymbol e^T\boldsymbol e=\frac{45}{12}=3.75\).

\(n-(p+1)=12-(2+1)=9\), so \(\hat\sigma^2=\frac{45}{9}=5\).

\(\hat\sigma=\sqrt{5}=2.2361\).

Self-check: \(5/3.75=1.3333=12/9\).

**Q2.** Show that the lower-left block \(\boldsymbol C=(\boldsymbol I-\boldsymbol H)\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\) of \(\mathrm{Var}\left(\left[\begin{array}{c}\hat{\boldsymbol\beta}\\ \boldsymbol e\end{array}\right]\right)/\sigma^2\) is \(\boldsymbol 0\).

Answer

1

\[\boldsymbol C=(\boldsymbol I-\boldsymbol H)\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\]

2

\[=\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}-\boldsymbol H\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\]

3

\[=\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}-\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\]

Substitute \(\boldsymbol H\).

4

\[=\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}-\boldsymbol X\boldsymbol I(\boldsymbol X^T\boldsymbol X)^{-1}\]

\((\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X=\boldsymbol I\).

5

\[=\boldsymbol 0\]

∎ Or: \(\boldsymbol C=\boldsymbol B^T=\boldsymbol 0^T=\boldsymbol 0\).

**Q3.** Data set 2: \(h_{33}=0.3\), \(\hat\sigma^2=1.35\). Give the distribution of \(e_3\). Estimate \(\mathrm{Var}(e_3)\). Is \(e_3\) independent of \(\hat\beta_1\)?

Answer

Entry 3 of \(\boldsymbol e\sim N(\boldsymbol 0,\sigma^2(\boldsymbol I-\boldsymbol H))\): \(e_3\sim N(0,\ \sigma^2(1-h_{33}))=N(0,\ 0.7\,\sigma^2)\).

\(\widehat{\mathrm{Var}}(e_3)=1.35\times0.7=0.945\).

Yes. Their covariance is an entry of \(\sigma^2\boldsymbol B=\boldsymbol 0\), and the joint distribution is MVN.

## 03 · The t statistic in MLR and property (3): independence

Plan · Slides p.26–28

Step 1: Symbols and distributions (Added).

Step 2: The SLR t statistic: three facts and one combination rule (Slides p.26).

Step 3: The same plan in MLR, and the properties still to prove (Slides p.27).

Step 4: Prove property (3) (Slides p.28). Unit 04 proves property (2).

### 03.1 Symbols and distributions Added

Random variable: a number whose value comes from a random experiment, for example \(\hat\beta_1\), \(\hat\sigma^2\), \(e_i\).

Standard normal \(N(0,1)\): mean 0, variance 1. If \(W\sim N(\mu,\sigma^2)\), the standardized value \((W-\mu)/\sigma\sim N(0,1)\).

Chi-squared \(\chi^2_\nu\): the distribution of a sum of \(\nu\) squared independent \(N(0,1)\) variables. \(\nu\) is the degrees of freedom (Slides p.29).

t distribution \(t_\nu\): bell-shaped and symmetric about 0, with thicker tails than \(N(0,1)\). Slides p.26 defines it as \(Z/\sqrt{V/\nu}\).

SLR (simple linear regression) model: \(y_i=\beta_0+\beta_1x_i+\epsilon_i\), \(\epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\). \(S_{xx}=\sum_{i=1}^n(x_i-\bar x)^2\).

Plain \(V\): the chi-squared quantity \(\frac{1}{\sigma^2}\sum e_i^2\) of Slides p.26. Bold \(\boldsymbol V\): the matrix \((\boldsymbol X^T\boldsymbol X)^{-1}\).

Standard error (SE): the standard deviation of an estimator, with \(\hat\sigma\) for \(\sigma\). SLR: \(\mathrm{SE}(\hat\beta_1)=\hat\sigma/\sqrt{S_{xx}}\). MLR: \(\mathrm{SE}(\hat\beta_j)=\sqrt{\hat\sigma^2V_{jj}}\).

### 03.2 Recall: the t statistic in SLR Slides p.26

**What** Slides p.26

Recall: OLS in Simple Linear Regression · Lecture 7 · p.26 \[\frac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}\sim N(0,1)\] But \(\sigma\) is unknown in practice, so we actually need the distribution when we replace \(\sigma\) by \(\hat\sigma\).
And we used the following: (we showed 1 but only claimed 2 & 3)
1. \(Z=\dfrac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}\sim N(0,1)\)
2. \(V=\dfrac{1}{\sigma^2}\sum_{i=1}^ne_i^2\sim\chi^2_{(n-2)}\)
3. \(Z\) and \(V\) are independent
Then if (1) \(Z\sim N(0,1)\), (2) \(V\sim\chi^2_\nu\) and (3) \(V\) independent of \(Z\): \(\Longrightarrow\dfrac{Z}{\sqrt{V/\nu}}\sim t_\nu\) \[\Longrightarrow\frac{Z}{\sqrt{V/\nu}}=\frac{\dfrac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}}{\sqrt{\dfrac{1}{\sigma^2}\sum_{i=1}^ne_i^2/(n-2)}}\sim t_{n-2}\] \[\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{n-2}\]

With \(\hat\sigma\) for the unknown \(\sigma\), the denominator is random and the distribution is not \(N(0,1)\).

\(Z\) uses only \(\hat\beta_1\). It contains the true \(\sigma\), so it is used only in the proof.

\(V\) uses only the residuals. It has \(n-2\) degrees of freedom because SLR estimates 2 coefficients.

Combination rule: an \(N(0,1)\) divided by an independent \(\sqrt{\chi^2_\nu/\nu}\) has the \(t_\nu\) distribution.

Lecture 3 proved fact 1 only. This lecture proves facts 2 and 3 for MLR. SLR is the case \(p=1\).

[figure]
Figure 03.1 · Added. Densities of \(N(0,1)\) (blue) and \(t_3\) (purple, dashed). At 0: 0.399 and 0.368. At 3: 0.0044 and 0.0230.

The random \(\hat\sigma\) adds variation, so large values of the statistic occur more often.

**How** Added

Get a t statistic from the three facts and the combination rule

- Write \(Z\): (estimator − parameter) / standard deviation with the true \(\sigma\). Confirm \(Z\sim N(0,1)\).
- Write \(V\): residual sum of squares / \(\sigma^2\). Confirm \(V\sim\chi^2_\nu\). Record \(\nu\).
- Confirm that \(Z\) and \(V\) are independent.
- Put them into \(Z/\sqrt{V/\nu}\). Cancel \(\sigma\). Write \(\sum e_i^2/\nu\) as \(\hat\sigma^2\). The result is \(t_\nu\).

**Self-check:** (1) The result has \(\hat\sigma\), not \(\sigma\). (2) The t degrees of freedom equal those of \(V\). (3) The denominator is \(\mathrm{SE}(\hat\beta_1)=\hat\sigma/\sqrt{S_{xx}}\).

**Example · Brain and head data** Numbers from Lecture 3 · p.45

\(y\): brain weight. \(x\): head size. Lecture 3 p.45 prints:

\(\hat\beta_1=0.26082\) and \(\mathrm{SE}(\hat\beta_1)=0.01307\).

\(\hat\sigma=72.35\), with 234 degrees of freedom.

1

Find \(n\) from the degrees of freedom How step 2

\[n-2=234\]

\[n=236\]

2

Find \(\sqrt{S_{xx}}\) from the SE How step 4

\[\mathrm{SE}(\hat\beta_1)=\frac{\hat\sigma}{\sqrt{S_{xx}}}\]

\[\sqrt{S_{xx}}=\frac{\hat\sigma}{\mathrm{SE}(\hat\beta_1)}=\frac{72.35}{0.01307}=5535.58\]

Approximate: the printed values are rounded.

3

Write the statistic and its distribution How step 4

\[\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}=\frac{0.26082-\beta_1}{0.01307}\sim t_{234}\]

4

Substitute \(\beta_1=0\)

\[\frac{0.26082-0}{0.01307}=19.956\]

**Self-check:** Lecture 3 p.44–45 prints 19.957. The difference comes from rounded inputs.

**Why** Slides p.26

1

\[\frac{Z}{\sqrt{V/(n-2)}}=\frac{\dfrac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}}{\sqrt{\dfrac{1}{\sigma^2}\sum_{i=1}^ne_i^2/(n-2)}}\]

substitute \(Z\) and \(V\), \(\nu=n-2\)

2

\[=\frac{\dfrac{\hat\beta_1-\beta_1}{\sigma/\sqrt{S_{xx}}}}{\dfrac{1}{\sigma}\sqrt{\sum_{i=1}^ne_i^2/(n-2)}}\]

3

\[=\frac{\dfrac{\hat\beta_1-\beta_1}{1/\sqrt{S_{xx}}}}{\sqrt{\sum_{i=1}^ne_i^2/(n-2)}}\]

4

\[=\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\]

\(\hat\sigma=\sqrt{\sum_{i=1}^ne_i^2/(n-2)}\)

5

\[\frac{\hat\beta_1-\beta_1}{\hat\sigma/\sqrt{S_{xx}}}\sim t_{n-2}\]

combination rule; needs facts 1, 2, 3 ∎

### 03.3 The matching result in MLR Slides p.27

**What** Slides p.27

In Multiple Linear Regression · Lecture 7 · p.27 Similarly, \(\hat{\boldsymbol\beta}\sim N(\boldsymbol\beta,\sigma^2(\boldsymbol X^T\boldsymbol X)^{-1})\Longrightarrow\hat\beta_j\sim N(\beta_j,\sigma^2V_{jj})\Longrightarrow\dfrac{\hat\beta_j-\beta_j}{\sqrt{\sigma^2V_{jj}}}\sim N(0,1)\)
but \(\sigma\) is unknown in practice, so we need the distribution where we've replaced \(\sigma\) by \(\hat\sigma\).
We have shown:
1. \(\dfrac{\hat\beta_1-\beta_1}{\sqrt{\sigma^2V_{jj}}}\sim N(0,1)\)
If we can further show:
2. \(\dfrac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{n-(p+1)}\)
3. \(\hat{\boldsymbol\beta}\) and \(\hat{\boldsymbol e}\) are independent
Then by the same argument we have: \[\frac{\dfrac{\hat\beta_j-\beta_j}{\sqrt{\sigma^2V_{jj}}}}{\sqrt{\left(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\right)/(n-(p+1))}}\sim t_{n-(p+1)}\] \[\frac{\hat\beta_j-\beta_j}{\sqrt{\hat\sigma^2V_{jj}}}\sim t_{n-(p+1)}\] Let's (finally) prove properties (2) & (3)!

Note · slide notation

Item 1 prints \(\hat\beta_1-\beta_1\); it means \(\hat\beta_j-\beta_j\). In item 3, \(\hat{\boldsymbol e}\) is \(\boldsymbol e\).

Property (1) matches SLR fact 1

\(Z=\dfrac{\hat\beta_j-\beta_j}{\sqrt{\sigma^2V_{jj}}}\sim N(0,1)\) (Slides p.5). Element \(j\) of an MVN vector is normal.

Property (2) matches SLR fact 2

\(V=\dfrac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{n-(p+1)}\): MLR estimates \(p+1\) coefficients. Proof in Unit 04 (Slides p.29–43).

Property (3) matches SLR fact 3

\(\hat{\boldsymbol\beta}\) and \(\boldsymbol e\) are independent. \(Z\) uses only \(\hat{\boldsymbol\beta}\); \(V\) uses only \(\boldsymbol e\). Proof in Section 03.4 (Slides p.28).

For \(p=1\): \(n-(p+1)=n-2\) and \(\sqrt{\sigma^2V_{11}}=\sigma/\sqrt{S_{xx}}\), the SLR result.

**How** Added

Calculate the t statistic for \(\hat\beta_j\) in MLR

- Write \(\boldsymbol X\). Calculate \(\boldsymbol X^T\boldsymbol X\) and \(\boldsymbol X^T\boldsymbol y\).
- Calculate \(\boldsymbol V=(\boldsymbol X^T\boldsymbol X)^{-1}\). Find \(V_{jj}\).
- Calculate \(\hat{\boldsymbol\beta}=\boldsymbol V\boldsymbol X^T\boldsymbol y\).
- Calculate \(\hat{\boldsymbol y}=\boldsymbol X\hat{\boldsymbol\beta}\) and \(\boldsymbol e=\boldsymbol y-\hat{\boldsymbol y}\).
- Calculate \(\boldsymbol e^T\boldsymbol e\) and \(\hat\sigma^2=\boldsymbol e^T\boldsymbol e/(n-(p+1))\).
- Calculate \(\mathrm{SE}(\hat\beta_j)=\sqrt{\hat\sigma^2V_{jj}}\) and \(\dfrac{\hat\beta_j-\beta_j}{\mathrm{SE}(\hat\beta_j)}\).
- Use the \(t_{n-(p+1)}\) distribution.

**Self-check:** (1) \(\boldsymbol X^T\boldsymbol e=\boldsymbol 0\). (2) \(V_{jj}>0\). (3) Degrees of freedom: \(n\) minus the columns of \(\boldsymbol X\).

**Example · Data set 3** Added

\(n=6\), \(p=2\). Part 1 does the How steps. Part 2 assumes true values and shows \(Z/\sqrt{V/\nu}\) equals the t statistic.

\(x_1=(-1,-1,0,0,1,1)\), \(x_2=(-1,1,-1,1,-1,1)\), \(\boldsymbol y=(1,3,6,8,5,7)^T\).

**Part 1: the t statistic for \(\hat\beta_1\).**

1

Write \(\boldsymbol X\), \(\boldsymbol X^T\boldsymbol X\), and \(\boldsymbol X^T\boldsymbol y\) How step 1

\[\boldsymbol X=\left[\begin{array}{ccc}1&-1&-1\\1&-1&1\\1&0&-1\\1&0&1\\1&1&-1\\1&1&1\end{array}\right]\]

\[\boldsymbol X^T\boldsymbol X=\left[\begin{array}{ccc}6&0&0\\0&4&0\\0&0&6\end{array}\right]\]

Diagonal: \(1\cdot6=6\); \(1+1+0+0+1+1=4\); \(6\times1=6\). Off-diagonal: \(\sum x_{i1}=0\), \(\sum x_{i2}=0\), \(\sum x_{i1}x_{i2}=1-1+0+0-1+1=0\).

\[\boldsymbol X^T\boldsymbol y=\left[\begin{array}{c}1+3+6+8+5+7\\-1-3+0+0+5+7\\-1+3-6+8-5+7\end{array}\right]=\left[\begin{array}{c}30\\8\\6\end{array}\right]\]

2

Calculate \(\boldsymbol V\) and \(V_{11}\) How step 2

\[\boldsymbol V=(\boldsymbol X^T\boldsymbol X)^{-1}=\left[\begin{array}{ccc}1/6&0&0\\0&1/4&0\\0&0&1/6\end{array}\right]\]

\[V_{11}=\frac14=0.25\]

Diagonal matrix: invert each diagonal entry.

3

Calculate \(\hat{\boldsymbol\beta}\) How step 3

\[\hat{\boldsymbol\beta}=\boldsymbol V\boldsymbol X^T\boldsymbol y=\left[\begin{array}{c}30/6\\8/4\\6/6\end{array}\right]=\left[\begin{array}{c}5\\2\\1\end{array}\right]\]

4

Fitted values and residuals How step 4

\[\hat y_i=5+2x_{i1}+1x_{i2}\]

\[\hat{\boldsymbol y}=(5-2-1,\ 5-2+1,\ 5+0-1,\ 5+0+1,\ 5+2-1,\ 5+2+1)^T=(2,4,4,6,6,8)^T\]

\[\boldsymbol e=\boldsymbol y-\hat{\boldsymbol y}=(1-2,\ 3-4,\ 6-4,\ 8-6,\ 5-6,\ 7-8)^T=(-1,-1,2,2,-1,-1)^T\]

5

Calculate \(\boldsymbol e^T\boldsymbol e\) and \(\hat\sigma^2\) How step 5

\[\boldsymbol e^T\boldsymbol e=1+1+4+4+1+1=12\]

\[\hat\sigma^2=\frac{\boldsymbol e^T\boldsymbol e}{n-(p+1)}=\frac{12}{6-3}=\frac{12}{3}=4\]

6

SE and the statistic for a stated \(\beta_1=1\) How step 6

\[\mathrm{SE}(\hat\beta_1)=\sqrt{\hat\sigma^2V_{11}}=\sqrt{4\times0.25}=\sqrt1=1\]

\[\frac{\hat\beta_1-\beta_1}{\sqrt{\hat\sigma^2V_{11}}}=\frac{2-1}{1}=1\]

7

State the distribution How step 7

\[\frac{\hat\beta_1-\beta_1}{\sqrt{\hat\sigma^2V_{11}}}\sim t_{n-(p+1)}=t_{6-3}=t_3\]

**Self-check:** \(\boldsymbol X^T\boldsymbol e=(-1-1+2+2-1-1,\ 1+1+0+0-1-1,\ 1-1-2+2+1-1)^T=(0,0,0)^T\).

**Part 2: the same statistic as \(Z/\sqrt{V/\nu}\).** Assume the true values \(\beta_1=1\) and \(\sigma=1\).

1

\(Z\) with the true \(\sigma=1\) Slides p.27, property (1)

\[Z=\frac{\hat\beta_1-\beta_1}{\sqrt{\sigma^2V_{11}}}=\frac{2-1}{\sqrt{1\times0.25}}=\frac{1}{0.5}=2\]

2

\(V\) with the true \(\sigma=1\) Slides p.27, property (2)

\[V=\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e=\frac{12}{1}=12\]

3

Combine with \(\nu=3\) Slides p.27, combination rule

\[\frac{Z}{\sqrt{V/3}}=\frac{2}{\sqrt{12/3}}=\frac{2}{\sqrt4}=\frac22=1\]

**Self-check:** 1, as in Part 1, step 6, but Part 1 needs no true \(\sigma\).

\(Z=2\) uses the true \(\sigma=1\). The t statistic uses \(\hat\sigma=2\).

**Why** Slides p.27

1

\[\hat{\boldsymbol\beta}\sim N\big(\boldsymbol\beta,\sigma^2(\boldsymbol X^T\boldsymbol X)^{-1}\big)\]

Slides p.5

2

\[\hat\beta_j\sim N\big(\beta_j,\sigma^2V_{jj}\big)\]

one element of an MVN vector; variance is the diagonal element

3

\[Z=\frac{\hat\beta_j-\beta_j}{\sqrt{\sigma^2V_{jj}}}\sim N(0,1)\]

standardize

4

\[\frac{Z}{\sqrt{V/(n-(p+1))}}=\frac{\dfrac{\hat\beta_j-\beta_j}{\sqrt{\sigma^2V_{jj}}}}{\sqrt{\left(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\right)/(n-(p+1))}}\]

substitute \(V\), \(\nu=n-(p+1)\)

5

\[=\frac{\dfrac{\hat\beta_j-\beta_j}{\sigma\sqrt{V_{jj}}}}{\dfrac{1}{\sigma}\sqrt{\boldsymbol e^T\boldsymbol e/(n-(p+1))}}\]

6

\[=\frac{\hat\beta_j-\beta_j}{\sqrt{V_{jj}}\sqrt{\boldsymbol e^T\boldsymbol e/(n-(p+1))}}\]

7

\[=\frac{\hat\beta_j-\beta_j}{\sqrt{V_{jj}}\sqrt{\hat\sigma^2}}\]

\(\hat\sigma^2=\frac{1}{n-(p+1)}\boldsymbol e^T\boldsymbol e\) (Slides p.13)

8

\[=\frac{\hat\beta_j-\beta_j}{\sqrt{\hat\sigma^2V_{jj}}}\]

9

\[\frac{\hat\beta_j-\beta_j}{\sqrt{\hat\sigma^2V_{jj}}}\sim t_{n-(p+1)}\]

combination rule; needs properties (1), (2), (3) ∎

### 03.4 Property (3): \(\hat{\boldsymbol\beta}\) and \(\boldsymbol e\) are independent Slides p.28

**What** Slides p.28

\(\hat\sigma^2\): (3) Independence · Lecture 7 · p.28 Recall: \[\left[\begin{array}{c}\hat{\boldsymbol\beta}\\\boldsymbol e\end{array}\right]\sim N\left(\left[\begin{array}{c}\boldsymbol\beta\\\boldsymbol 0\end{array}\right],\ \sigma^2\left[\begin{array}{cc}(\boldsymbol X^T\boldsymbol X)^{-1}&\boldsymbol 0\\\boldsymbol 0&(\boldsymbol I-\boldsymbol H)\end{array}\right]\right)\] \[\Longrightarrow \boldsymbol e\text{ is independent of }\hat{\boldsymbol\beta}\] \[\Longrightarrow\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\text{ is independent of }\hat{\boldsymbol\beta}\]

Top-left block \(\sigma^2(\boldsymbol X^T\boldsymbol X)^{-1}\): \(\mathrm{Var}(\hat{\boldsymbol\beta})\).

Bottom-right block \(\sigma^2(\boldsymbol I-\boldsymbol H)\): \(\mathrm{Var}(\boldsymbol e)\).

Off-diagonal blocks \(\boldsymbol 0\): \(\mathrm{Cov}(\hat{\boldsymbol\beta},\boldsymbol e)\), all 0.

[figure]
Figure 03.2 · Blocks of the variance matrix of \((\hat{\boldsymbol\beta},\boldsymbol e)\) for \(p+1=3\), \(n=6\) (data set 3). Green blocks: covariances between \(\hat{\boldsymbol\beta}\) and \(\boldsymbol e\), all 0.

**How** Added

Use joint normality to show that two random vectors are independent

- Confirm the two vectors together are MVN. Here both are linear functions of \(\boldsymbol y\) (Slides p.14).
- Write the variance matrix. Find the block \(\mathrm{Cov}(\hat{\boldsymbol\beta},\boldsymbol e)\).
- Confirm this block is 0. Here it is \(\sigma^2\boldsymbol B\), \(\boldsymbol B=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T(\boldsymbol I-\boldsymbol H)=\boldsymbol 0\) (Slides p.21).
- Write that the two vectors are independent (Lecture 5 · p.40).
- Apply this to each function of \(\boldsymbol e\) only, for example \(\boldsymbol e^T\boldsymbol e\) and \(\hat\sigma^2\).

**Self-check:** (1) Zero covariance gives independence only for jointly normal vectors. (2) \(\boldsymbol B\boldsymbol y=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol e\), so \(\boldsymbol X^T\boldsymbol e=\boldsymbol 0\).

**Example · Data set 3** Added

How step 3 with \(\boldsymbol e=(-1,-1,2,2,-1,-1)^T\) from Section 03.3.

1

Calculate \(\boldsymbol X^T\boldsymbol e\) How step 3

\[\boldsymbol X^T\boldsymbol e=\left[\begin{array}{c}-1-1+2+2-1-1\\(-1)(-1)+(-1)(-1)+0+0+(1)(-1)+(1)(-1)\\(-1)(-1)+(1)(-1)+(-1)(2)+(1)(2)+(-1)(-1)+(1)(-1)\end{array}\right]\]

\[=\left[\begin{array}{c}0\\1+1+0+0-1-1\\1-1-2+2+1-1\end{array}\right]=\left[\begin{array}{c}0\\0\\0\end{array}\right]\]

2

Calculate \(\boldsymbol B\boldsymbol y\) Slides p.21

\[\boldsymbol B\boldsymbol y=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T(\boldsymbol I-\boldsymbol H)\boldsymbol y=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol e\]

\[=\left[\begin{array}{ccc}1/6&0&0\\0&1/4&0\\0&0&1/6\end{array}\right]\left[\begin{array}{c}0\\0\\0\end{array}\right]=\left[\begin{array}{c}0\\0\\0\end{array}\right]\]

3

Functions of \(\boldsymbol e\) only How step 5

\[\boldsymbol e^T\boldsymbol e=12,\qquad\hat\sigma^2=\frac{12}{3}=4\]

Independent of \(\hat{\boldsymbol\beta}=(5,2,1)^T\) by property (3).

One data set cannot show independence; it is a property of the distribution. The proof shows it in general.

**Why** Slides p.28

1

\[\left[\begin{array}{c}\hat{\boldsymbol\beta}\\\boldsymbol e\end{array}\right]=\left[\begin{array}{c}(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\\\boldsymbol I-\boldsymbol H\end{array}\right]\boldsymbol y\]

Slides p.14

2

\[\left[\begin{array}{c}\hat{\boldsymbol\beta}\\\boldsymbol e\end{array}\right]\text{ is MVN}\]

linear function of MVN \(\boldsymbol y\) (Lecture 5 · p.40, Linearity)

3

\[\mathrm{Var}\left(\left[\begin{array}{c}\hat{\boldsymbol\beta}\\\boldsymbol e\end{array}\right]\right)=\sigma^2\left[\begin{array}{cc}(\boldsymbol X^T\boldsymbol X)^{-1}&\boldsymbol 0\\\boldsymbol 0&(\boldsymbol I-\boldsymbol H)\end{array}\right]\]

\(\boldsymbol A=(\boldsymbol X^T\boldsymbol X)^{-1}\), \(\boldsymbol B=\boldsymbol 0\), \(\boldsymbol D=\boldsymbol I-\boldsymbol H\) (Slides p.21–22)

4

\[\mathrm{Cov}(\hat{\boldsymbol\beta},\boldsymbol e)=\sigma^2\cdot\boldsymbol 0=\boldsymbol 0\]

top-right block

5

\[\boldsymbol e\text{ is independent of }\hat{\boldsymbol\beta}\]

jointly MVN, zero covariance (Lecture 5 · p.40, Independence)

6

\[\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\text{ is independent of }\hat{\boldsymbol\beta}\]

function of \(\boldsymbol e\) only

7

\[V=\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\ \text{ is independent of }\ Z=\frac{\hat\beta_j-\beta_j}{\sqrt{\sigma^2V_{jj}}}\]

\(Z\) is a function of \(\hat{\boldsymbol\beta}\) only ∎

### 03.5 Practice Added

**Q1.** MLR with \(n=6\), \(p=2\). One data set gives \(\hat\beta_1=2\), \(V_{11}=0.25\), \(\boldsymbol e^T\boldsymbol e=6\). The true value is \(\beta_1=1.5\).

(a) Calculate \(\hat\sigma^2\). (b) Calculate \(\dfrac{\hat\beta_1-\beta_1}{\sqrt{\hat\sigma^2V_{11}}}\). (c) State its distribution.

Answer

a

\[\hat\sigma^2=\frac{\boldsymbol e^T\boldsymbol e}{n-(p+1)}=\frac{6}{6-3}=\frac{6}{3}=2\]

b

\[\sqrt{\hat\sigma^2V_{11}}=\sqrt{2\times0.25}=\sqrt{0.5}=0.7071\]

\[\frac{\hat\beta_1-\beta_1}{\sqrt{\hat\sigma^2V_{11}}}=\frac{2-1.5}{0.7071}=\frac{0.5}{0.7071}=0.7071\]

c

\[\frac{\hat\beta_1-\beta_1}{\sqrt{\hat\sigma^2V_{11}}}\sim t_{n-(p+1)}=t_{3}\]

Source: the Section 03.3 design with \(\boldsymbol y=(1,4,3,9,5,8)^T\): \(\hat{\boldsymbol\beta}=(5,2,2)^T\), \(\boldsymbol e=(0,-1,0,2,0,-1)^T\).

**Q2.** List the three properties that give \(\dfrac{\hat\beta_j-\beta_j}{\sqrt{\hat\sigma^2V_{jj}}}\sim t_{n-(p+1)}\). Why does \(\sigma\) not appear? Why does the \(t\) result need all three?

Answer

(1) \(Z=\dfrac{\hat\beta_j-\beta_j}{\sqrt{\sigma^2V_{jj}}}\sim N(0,1)\).

(2) \(V=\dfrac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{n-(p+1)}\).

(3) \(\hat{\boldsymbol\beta}\) and \(\boldsymbol e\) are independent, so \(Z\) and \(V\) are independent.

\(Z\) has \(\sigma\) in its denominator; \(\sqrt{V/\nu}\) has \(1/\sigma\). They cancel, and \(\sqrt{\boldsymbol e^T\boldsymbol e/(n-(p+1))}=\hat\sigma\) stays. The t definition needs an \(N(0,1)\) numerator, a \(\chi^2_\nu\) denominator, and their independence.

**Q3.** Use the joint distribution \[\left[\begin{array}{c}\hat{\boldsymbol\beta}\\\boldsymbol e\end{array}\right]\sim N\left(\left[\begin{array}{c}\boldsymbol\beta\\\boldsymbol 0\end{array}\right],\ \sigma^2\left[\begin{array}{cc}(\boldsymbol X^T\boldsymbol X)^{-1}&\boldsymbol 0\\\boldsymbol 0&(\boldsymbol I-\boldsymbol H)\end{array}\right]\right),\] to show that \(\hat\sigma^2=\frac{1}{n-(p+1)}\boldsymbol e^T\boldsymbol e\) is independent of \(\hat{\boldsymbol\beta}\).

Answer

1

\[\mathrm{Cov}(\hat{\boldsymbol\beta},\boldsymbol e)=\sigma^2\cdot\boldsymbol 0=\boldsymbol 0\]

top-right block

2

\[\boldsymbol e\text{ is independent of }\hat{\boldsymbol\beta}\]

jointly MVN, zero covariance

3

\[\hat\sigma^2=\frac{1}{n-(p+1)}\boldsymbol e^T\boldsymbol e\text{ is independent of }\hat{\boldsymbol\beta}\]

function of \(\boldsymbol e\) only ∎

## 04 · Property (2): \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{n-(p+1)}\)

Plan · Slides p.29–43

Step 1: Goal and problem: the \(e_i\) are not independent (Slides p.29–30).

Step 2: Eigen decomposition turns \(\boldsymbol e\) into \(\tilde{\boldsymbol e}\) with independent entries (Slides p.31–36).

Step 3: \(\tilde{\boldsymbol e}^T\tilde{\boldsymbol e}=\boldsymbol e^T\boldsymbol e\) (Slides p.37–38).

Step 4: Each \(\lambda_i\) is 0 or 1 (Slides p.39–40).

Step 5: \(\sum\lambda_i=n-(p+1)\) (Slides p.41–42).

Step 6: Combine (Slides p.43).

Results used: \(\boldsymbol e\sim N(\boldsymbol 0,\sigma^2(\boldsymbol I-\boldsymbol H))\) (Section 02.7). \(\boldsymbol I-\boldsymbol H\) is symmetric and \((\boldsymbol I-\boldsymbol H)(\boldsymbol I-\boldsymbol H)=\boldsymbol I-\boldsymbol H\) (Section 02.6).

Data set 2 · Added

From Unit 02: \(\boldsymbol x=(0,1,2,3)^T\), \(\boldsymbol y=(1,3,2,5)^T\), \(n=4\), \(p=1\).

\(\boldsymbol X^T\boldsymbol X=\left[\begin{array}{cc}4&6\\6&14\end{array}\right]\), \((\boldsymbol X^T\boldsymbol X)^{-1}=\frac{1}{20}\left[\begin{array}{cc}14&-6\\-6&4\end{array}\right]\).

\(\hat{\boldsymbol\beta}=(1.1,\ 1.1)^T\), \(\boldsymbol e=(-0.1,\ 0.8,\ -1.3,\ 0.6)^T\), \(\boldsymbol e^T\boldsymbol e=2.70\).

\(h_{11}=0.7\), \(h_{22}=0.3\), \(h_{33}=0.3\), \(h_{44}=0.7\).
\[\boldsymbol I-\boldsymbol H=\left[\begin{array}{cccc}0.3&-0.4&-0.1&0.2\\-0.4&0.7&-0.2&-0.1\\-0.1&-0.2&0.7&-0.4\\0.2&-0.1&-0.4&0.3\end{array}\right]\]

### 04.1 The plan of the proof Slides p.29–30

**What** Slides p.29–30

Lecture 7 · p.29–30 We want to show that \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{n-(p+1)}\). Recall for \(Z_i\overset{iid}{\sim}N(0,1)\): \[\sum_{i=1}^{\nu}Z_i^2\sim\chi^2_\nu\] So we want to write \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\) as a sum of squared independent standard normal r.v.s. We could write: \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e=\sum_{i=1}^n\left(\frac{e_i}{\sigma}\right)^2\) ... Problem: the \(e_i\) are not independent! (why?) Solution: let's rewrite \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\) as a sum of squared independent normal r.v.s

r.v.: random variable.

The chi-squared definition needs terms that are \(N(0,1)\) and independent. Each \(e_i/\sigma\) is normal, but the terms are not independent. The proof finds independent variables with the same sum of squares.

**How** Added

Find if a sum of squares has a chi-squared distribution

- Write the sum as \(\sum_i Z_i^2\). Identify each \(Z_i\).
- Confirm each \(Z_i\) is normal with mean 0 and variance 1.
- Confirm the \(Z_i\) are independent. For an MVN vector, all off-diagonal variance entries are 0.
- Count the terms: \(\nu\).

**Self-check:** If an off-diagonal entry is not 0, change the variables first.

**Example** Added

Data set 2: test \(e_1/\sigma\) and \(e_2/\sigma\) against steps 2 and 3.

1

\[\mathrm{Var}[e_1]=\sigma^2(\boldsymbol I-\boldsymbol H)_{11}=0.3\,\sigma^2\]

Entry \((1,1)\) of \(\mathrm{Var}[\boldsymbol e]\).

2

\[\mathrm{Var}\left[\frac{e_1}{\sigma}\right]=\frac{0.3\,\sigma^2}{\sigma^2}=0.3\neq1\]

3

\[\mathrm{Cov}(e_1,e_2)=\sigma^2(\boldsymbol I-\boldsymbol H)_{12}=-0.4\,\sigma^2\neq0\]

Entry \((1,2)\) of \(\mathrm{Var}[\boldsymbol e]\).

Steps 2 and 3 fail. \(\sum_i(e_i/\sigma)^2\) is not directly a chi-squared sum. ▲

**Why** Slides p.29–30

All \(e_i\) come from one \(\boldsymbol y\) through \(\boldsymbol e=(\boldsymbol I-\boldsymbol H)\boldsymbol y\). The off-diagonal covariances \(\sigma^2(\boldsymbol I-\boldsymbol H)_{ij}\) are usually not 0.

Also \(\boldsymbol X^T\boldsymbol e=\boldsymbol 0\). In data set 2, \(-0.1+0.8-1.3+0.6=0\): three residuals fix the fourth. ∎

### 04.2 Eigen decomposition and the distribution of \(\tilde{\boldsymbol e}=\boldsymbol\Gamma\boldsymbol e\) Slides p.31–36

**What** Slides p.31–36

Lecture 7 · p.31–36 We have \(\boldsymbol e=(\boldsymbol I-\boldsymbol H)\boldsymbol y\), and we consider the eigen decomposition \(\boldsymbol I-\boldsymbol H=\boldsymbol\Gamma^T\boldsymbol D\boldsymbol\Gamma\) where \[\boldsymbol\Gamma^{-1}=\boldsymbol\Gamma^T\quad\text{and}\quad\boldsymbol D=\left[\begin{array}{ccc}\lambda_1&&\\&\ddots&\\&&\lambda_n\end{array}\right]\] Define \(\tilde{\boldsymbol e}=\boldsymbol\Gamma\boldsymbol e\). Now, what is the distribution of \(\tilde{\boldsymbol e}\)? \[E[\tilde{\boldsymbol e}]=E[\boldsymbol\Gamma\boldsymbol e]=\boldsymbol\Gamma E[\boldsymbol e]=\boldsymbol 0\] \[\mathrm{Var}[\tilde{\boldsymbol e}]=\mathrm{Var}[\boldsymbol\Gamma\boldsymbol e]=\boldsymbol\Gamma \mathrm{Var}[\boldsymbol e]\boldsymbol\Gamma^T=\sigma^2\boldsymbol\Gamma(\boldsymbol I-\boldsymbol H)\boldsymbol\Gamma^T=\sigma^2\boldsymbol\Gamma(\boldsymbol\Gamma^T\boldsymbol D\boldsymbol\Gamma)\boldsymbol\Gamma^T=\sigma^2\boldsymbol D\] and \(\tilde{\boldsymbol e}\sim N(\boldsymbol 0,\sigma^2\boldsymbol D)\) (why?) \[\Longrightarrow\ \tilde e_i\overset{indep}{\sim}N(0,\sigma^2\lambda_i)\]

Eigenvector of \(\boldsymbol A\): a nonzero \(\boldsymbol v_i\) with \(\boldsymbol A\boldsymbol v_i=\lambda_i\boldsymbol v_i\). The number \(\lambda_i\) is its eigenvalue.

Diagonal matrix: a square matrix with all off-diagonal entries 0.

Orthogonal matrix: \(\boldsymbol\Gamma^{-1}=\boldsymbol\Gamma^T\), so \(\boldsymbol\Gamma\boldsymbol\Gamma^T=\boldsymbol\Gamma^T\boldsymbol\Gamma=\boldsymbol I\). It does not change vector lengths.

Eigen decomposition: a symmetric matrix written as \(\boldsymbol\Gamma^T\boldsymbol D\boldsymbol\Gamma\). Row \(i\) of \(\boldsymbol\Gamma\) is a length-1 eigenvector for \(\lambda_i\).

\(\overset{indep}{\sim}\): independent, entry \(i\) with the stated distribution.

\(\mathrm{Var}[\boldsymbol e]\) is not diagonal. \(\mathrm{Var}[\tilde{\boldsymbol e}]=\sigma^2\boldsymbol D\) is diagonal, so the \(\tilde e_i\) are independent.

**How** Added

Find \(\boldsymbol\Gamma\), \(\boldsymbol D\) and \(\tilde{\boldsymbol e}\) by hand

- Calculate \(\boldsymbol I-\boldsymbol H\).
- Find \(n\) mutually orthogonal eigenvectors. Read each \(\lambda\) from \((\boldsymbol I-\boldsymbol H)\boldsymbol v=\lambda\boldsymbol v\).
- Divide each eigenvector by its length \(\sqrt{\boldsymbol v^T\boldsymbol v}\).
- Put them in the rows of \(\boldsymbol\Gamma\). Put their eigenvalues on the diagonal of \(\boldsymbol D\), same order.
- Calculate \(\tilde{\boldsymbol e}=\boldsymbol\Gamma\boldsymbol e\).

**Self-check:** (1) \(\boldsymbol\Gamma\boldsymbol\Gamma^T=\boldsymbol I\). (2) Each row satisfies \((\boldsymbol I-\boldsymbol H)\boldsymbol v=\lambda\boldsymbol v\).

**Example** Added

Step 2 How step 2: try \(\boldsymbol v_1=(1,-1,-1,1)^T\), \(\boldsymbol v_2=(1,-3,3,-1)^T\), \(\boldsymbol v_3=(1,1,1,1)^T\), \(\boldsymbol v_4=(-3,-1,1,3)^T\).

Basis: \((\boldsymbol I-\boldsymbol H)\boldsymbol v=\lambda\boldsymbol v\). Each line multiplies the rows of \(\boldsymbol I-\boldsymbol H\) by \(\boldsymbol v\).

1

\[(\boldsymbol I-\boldsymbol H)\boldsymbol v_1=\left[\begin{array}{c}0.3+0.4+0.1+0.2\\-0.4-0.7+0.2-0.1\\-0.1+0.2-0.7-0.4\\0.2+0.1+0.4+0.3\end{array}\right]=\left[\begin{array}{c}1\\-1\\-1\\1\end{array}\right]=1\cdot\boldsymbol v_1\]

2

\[(\boldsymbol I-\boldsymbol H)\boldsymbol v_2=\left[\begin{array}{c}0.3+1.2-0.3-0.2\\-0.4-2.1-0.6+0.1\\-0.1+0.6+2.1+0.4\\0.2+0.3-1.2-0.3\end{array}\right]=\left[\begin{array}{c}1\\-3\\3\\-1\end{array}\right]=1\cdot\boldsymbol v_2\]

3

\[(\boldsymbol I-\boldsymbol H)\boldsymbol v_3=\left[\begin{array}{c}0.3-0.4-0.1+0.2\\-0.4+0.7-0.2-0.1\\-0.1-0.2+0.7-0.4\\0.2-0.1-0.4+0.3\end{array}\right]=\left[\begin{array}{c}0\\0\\0\\0\end{array}\right]=0\cdot\boldsymbol v_3\]

4

\[(\boldsymbol I-\boldsymbol H)\boldsymbol v_4=\left[\begin{array}{c}-0.9+0.4-0.1+0.6\\1.2-0.7-0.2-0.3\\0.3+0.2+0.7-1.2\\-0.6+0.1-0.4+0.9\end{array}\right]=\left[\begin{array}{c}0\\0\\0\\0\end{array}\right]=0\cdot\boldsymbol v_4\]

\(\lambda_1=\lambda_2=1\), \(\lambda_3=\lambda_4=0\).

Step 3 How step 3: \(\boldsymbol v_1^T\boldsymbol v_1=1+1+1+1=4\), \(\boldsymbol v_2^T\boldsymbol v_2=1+9+9+1=20\), \(\boldsymbol v_3^T\boldsymbol v_3=4\), \(\boldsymbol v_4^T\boldsymbol v_4=9+1+1+9=20\). Divide by \(\sqrt4=2\) or \(\sqrt{20}\).

Step 4 How step 4:

\[\boldsymbol\Gamma=\left[\begin{array}{cccc}\frac12&-\frac12&-\frac12&\frac12\\\frac{1}{\sqrt{20}}&\frac{-3}{\sqrt{20}}&\frac{3}{\sqrt{20}}&\frac{-1}{\sqrt{20}}\\\frac12&\frac12&\frac12&\frac12\\\frac{-3}{\sqrt{20}}&\frac{-1}{\sqrt{20}}&\frac{1}{\sqrt{20}}&\frac{3}{\sqrt{20}}\end{array}\right],\qquad\boldsymbol D=\left[\begin{array}{cccc}1&0&0&0\\0&1&0&0\\0&0&0&0\\0&0&0&0\end{array}\right]\]

Step 5 How step 5: rows of \(\boldsymbol\Gamma\) times \(\boldsymbol e=(-0.1,0.8,-1.3,0.6)^T\).

1

\[\tilde e_1=\tfrac12(-0.1-0.8+1.3+0.6)=\tfrac12(1.0)=0.5\]

2

\[\tilde e_2=\tfrac{1}{\sqrt{20}}(-0.1-2.4-3.9-0.6)=\tfrac{-7}{\sqrt{20}}\approx-1.5652\]

3

\[\tilde e_3=\tfrac12(-0.1+0.8-1.3+0.6)=\tfrac12(0)=0\]

4

\[\tilde e_4=\tfrac{1}{\sqrt{20}}(0.3-0.8-1.3+1.8)=\tfrac{1}{\sqrt{20}}(0)=0\]

Self-check (1): each row has length 1; distinct rows have inner product 0, for example rows 1 and 3: \(\frac14(1-1-1+1)=0\). \(\tilde e_3=\tilde e_4=0\) because \(\lambda_i=0\) gives variance 0. ▲

**Why** Slides p.31–36

1

\[E[\tilde{\boldsymbol e}]=E[\boldsymbol\Gamma\boldsymbol e]\]

Definition of \(\tilde{\boldsymbol e}\).

2

\[=\boldsymbol\Gamma E[\boldsymbol e]\]

\(\boldsymbol\Gamma\) is constant.

3

\[=\boldsymbol 0\]

Slides p.25.

1

\[\mathrm{Var}[\tilde{\boldsymbol e}]=\mathrm{Var}[\boldsymbol\Gamma\boldsymbol e]\]

2

\[=\boldsymbol\Gamma\,\mathrm{Var}[\boldsymbol e]\,\boldsymbol\Gamma^T\]

Lecture 5 · p.40, Linearity.

3

\[=\sigma^2\boldsymbol\Gamma(\boldsymbol I-\boldsymbol H)\boldsymbol\Gamma^T\]

Slides p.25.

4

\[=\sigma^2\boldsymbol\Gamma(\boldsymbol\Gamma^T\boldsymbol D\boldsymbol\Gamma)\boldsymbol\Gamma^T\]

Eigen decomposition.

5

\[=\sigma^2(\boldsymbol\Gamma\boldsymbol\Gamma^T)\boldsymbol D(\boldsymbol\Gamma\boldsymbol\Gamma^T)\]

6

\[=\sigma^2\boldsymbol D\]

\(\boldsymbol\Gamma\boldsymbol\Gamma^T=\boldsymbol I\).

The slide asks why \(\tilde{\boldsymbol e}\) is normal. It is a linear transformation of the MVN \(\boldsymbol e\), so it is MVN (Lecture 5 · p.40, Linearity). \(\sigma^2\boldsymbol D\) has zero off-diagonal entries, so the \(\tilde e_i\) are independent (Lecture 5 · p.40, Independence), with variances \(\sigma^2\lambda_i\). ∎

### 04.3 Why \(\tilde{\boldsymbol e}\) is useful: \(\tilde{\boldsymbol e}^T\tilde{\boldsymbol e}=\boldsymbol e^T\boldsymbol e\) Slides p.37–38

**What** Slides p.37–38

Lecture 7 · p.37–38 And we defined \(\tilde{\boldsymbol e}=\boldsymbol\Gamma\boldsymbol e\) such that \(\tilde e_i\overset{indep}{\sim}N(0,\sigma^2\lambda_i)\). Why is this useful? \[\tilde{\boldsymbol e}^T\tilde{\boldsymbol e}=(\boldsymbol\Gamma\boldsymbol e)^T(\boldsymbol\Gamma\boldsymbol e)=\boldsymbol e^T\boldsymbol\Gamma^T\boldsymbol\Gamma\boldsymbol e=\boldsymbol e^T\boldsymbol e,\] so we can write: \[\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e=\frac{1}{\sigma^2}\tilde{\boldsymbol e}^T\tilde{\boldsymbol e}=\sum_{i=1}^n\left(\frac{\tilde e_i}{\sigma}\right)^2=\sum_{i=1}^n Z_i^2\] where \(Z_i\overset{indep}{\sim}N(0,\lambda_i)\).

\(\boldsymbol e^T\boldsymbol e\) is the squared length of \(\boldsymbol e\), and \(\boldsymbol\Gamma\) keeps lengths. \(Z_i=\tilde e_i/\sigma\) has variance \(\lambda_i\).

**How** Added

Check that \(\tilde{\boldsymbol e}^T\tilde{\boldsymbol e}=\boldsymbol e^T\boldsymbol e\)

- Get \(\boldsymbol e\) and \(\tilde{\boldsymbol e}=\boldsymbol\Gamma\boldsymbol e\) (Section 04.2).
- Add the squares of the entries of \(\boldsymbol e\).
- Add the squares of the entries of \(\tilde{\boldsymbol e}\).
- Compare the two sums.

**Self-check:** Both sums equal \(\boldsymbol e^T\boldsymbol e\).

**Example** Added

1

\[\boldsymbol e^T\boldsymbol e=(-0.1)^2+0.8^2+(-1.3)^2+0.6^2=0.01+0.64+1.69+0.36=2.70\]

How step 2.

2

\[\tilde{\boldsymbol e}^T\tilde{\boldsymbol e}=0.5^2+\left(\tfrac{-7}{\sqrt{20}}\right)^2+0^2+0^2=0.25+\tfrac{49}{20}+0+0\]

How step 3.

3

\[=0.25+2.45=2.70\]

\(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e=\frac{2.70}{\sigma^2}=Z_1^2+Z_2^2+Z_3^2+Z_4^2\), with observed \(Z_3=Z_4=0\). ▲

**Why** Slides p.37–38

1

\[\tilde{\boldsymbol e}^T\tilde{\boldsymbol e}=(\boldsymbol\Gamma\boldsymbol e)^T(\boldsymbol\Gamma\boldsymbol e)\]

Definition of \(\tilde{\boldsymbol e}\).

2

\[=\boldsymbol e^T\boldsymbol\Gamma^T\boldsymbol\Gamma\boldsymbol e\]

\((\boldsymbol A\boldsymbol B)^T=\boldsymbol B^T\boldsymbol A^T\).

3

\[=\boldsymbol e^T\boldsymbol e\]

\(\boldsymbol\Gamma^T\boldsymbol\Gamma=\boldsymbol I\).

4

\[\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e=\frac{1}{\sigma^2}\tilde{\boldsymbol e}^T\tilde{\boldsymbol e}\]

5

\[=\frac{1}{\sigma^2}\sum_{i=1}^n\tilde e_i^2\]

6

\[=\sum_{i=1}^n\left(\frac{\tilde e_i}{\sigma}\right)^2\]

7

\[=\sum_{i=1}^n Z_i^2\]

\(Z_i=\tilde e_i/\sigma\overset{indep}{\sim}N(0,\lambda_i)\). ∎

Two conditions remain: each variance is 1, and there are \(n-(p+1)\) terms.

### 04.4 Each \(\lambda_i\) is 0 or 1 Slides p.39–40

**What** Slides p.39–40

Lecture 7 · p.39–40 So \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\) is a sum of squared independent normally distributed r.v.'s.
• Recall: need a sum of independent standard normally distributed r.v.'s (var=1)
• And: we need to sum up exactly \(n-(p+1)\) of these r.v.s
So: to show \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{(n-(p+1))}\), we will show that \(n-(p+1)\) of the \(\lambda_i\)'s are equal to 1, and the remainder are all 0.
Let's first show that all of the \(\lambda_i\)'s are equal to either 0 or 1:
• We know that \((\boldsymbol I-\boldsymbol H)(\boldsymbol I-\boldsymbol H)=(\boldsymbol I-\boldsymbol H)\); i.e. \((\boldsymbol I-\boldsymbol H)\) is idempotent.
• The eigenvalues (elements \(\lambda_i\) of \(\boldsymbol D\)) of an idempotent matrix are equal to 0 or 1.
• Why? By definition of eigenvalue \(\lambda_i\) and corresponding eigenvector \(\boldsymbol v_i\), we know: \(\lambda_i\boldsymbol v_i=(\boldsymbol I-\boldsymbol H)\boldsymbol v_i\)
Thus all \(\lambda_i\) are either 0 or 1.

Idempotent matrix: a square \(\boldsymbol A\) with \(\boldsymbol A\boldsymbol A=\boldsymbol A\).

Degenerate random variable: variance 0, so it always has one value. \(N(0,0)\) is always 0.

\(\lambda_i=1\) gives \(Z_i\sim N(0,1)\). \(\lambda_i=0\) gives \(Z_i=0\), which adds 0 to the sum.

**How** Added

Show that a matrix is idempotent and find its possible eigenvalues

- Calculate \(\boldsymbol A\boldsymbol A\): entry \((i,j)\) is row \(i\) times column \(j\).
- Compare \(\boldsymbol A\boldsymbol A\) with \(\boldsymbol A\), entry by entry.
- If all are equal, \(\boldsymbol A\) is idempotent, and each eigenvalue is 0 or 1.

**Self-check:** For each known eigenvector, \(\boldsymbol A\boldsymbol v\) is \(\boldsymbol v\) or \(\boldsymbol 0\).

**Example** Added

Data set 2. Row 1 of \(\boldsymbol I-\boldsymbol H\) is \((0.3,-0.4,-0.1,0.2)\).

1

\[\text{entry }(1,1)=0.3\cdot0.3+(-0.4)(-0.4)+(-0.1)(-0.1)+0.2\cdot0.2=0.09+0.16+0.01+0.04=0.30\]

Entry \((1,1)\) of \(\boldsymbol I-\boldsymbol H\) is 0.3.

2

\[\text{entry }(1,2)=0.3(-0.4)+(-0.4)(0.7)+(-0.1)(-0.2)+0.2(-0.1)=-0.12-0.28+0.02-0.02=-0.40\]

Entry \((1,2)\) of \(\boldsymbol I-\boldsymbol H\) is \(-0.4\).

The other 14 entries also agree. This matches \(\lambda=1,1,0,0\) from Section 04.2. ▲

Satisfaction data of the slides: \(n=46\) patients, \(p=3\) (Lecture 6 · p.9). Sections 04.4–04.5 give 42 eigenvalues of 1 and 4 of 0.

[figure]
Figure 04.1 · The 46 eigenvalues of \(\boldsymbol I-\boldsymbol H\) for the satisfaction data (\(n=46\), \(p=3\)), largest first: 42 blue bars at 1, 4 orange dots at 0.

**Why** Slides p.39–40

1

\[\lambda_i\boldsymbol v_i=(\boldsymbol I-\boldsymbol H)\boldsymbol v_i\]

Definition of eigenvalue.

2

\[=(\boldsymbol I-\boldsymbol H)(\boldsymbol I-\boldsymbol H)\boldsymbol v_i\]

Idempotent.

3

\[=(\boldsymbol I-\boldsymbol H)[\lambda_i\boldsymbol v_i]\]

Definition again.

4

\[=\lambda_i(\boldsymbol I-\boldsymbol H)\boldsymbol v_i\]

\(\lambda_i\) is a number.

5

\[=\lambda_i^2\boldsymbol v_i\]

Definition again.

6

\[\lambda_i\boldsymbol v_i-\lambda_i^2\boldsymbol v_i=\boldsymbol 0\]

7

\[\lambda_i(1-\lambda_i)\boldsymbol v_i=\boldsymbol 0\]

8

\[\lambda_i\in\{0,1\}\]

\(\boldsymbol v_i\neq\boldsymbol 0\), so \(\lambda_i(1-\lambda_i)=0\). ∎

### 04.5 \(\sum_i\lambda_i=n-(p+1)\): count the 1s with the trace Slides p.41–42

Each \(\lambda_i\) is 0 or 1, so their sum counts the 1s.

**What** Slides p.41–42

Lecture 7 · p.41–42 Now, if all the \(\lambda_i\) are 0 or 1, then we can show that exactly \(n-(p+1)\) of them are equal to 1 by showing that \(\sum_i\lambda_i=n-(p+1)\): \[\sum_i\lambda_i=\mathrm{tr}(\boldsymbol D)=\mathrm{tr}(\boldsymbol D\boldsymbol\Gamma\boldsymbol\Gamma^T)=\mathrm{tr}(\boldsymbol\Gamma^T\boldsymbol D\boldsymbol\Gamma)=\mathrm{tr}(\boldsymbol I-\boldsymbol H)\] and \[\mathrm{tr}(\boldsymbol I-\boldsymbol H)=\mathrm{tr}(\boldsymbol I)-\mathrm{tr}(\boldsymbol H)=n-\mathrm{tr}(\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T)=n-\mathrm{tr}((\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X)=n-(p+1)\] and we are done.

Trace \(\mathrm{tr}(\boldsymbol A)\): the sum of the diagonal entries of a square matrix.

Trace rules: \(\mathrm{tr}(\boldsymbol A-\boldsymbol B)=\mathrm{tr}(\boldsymbol A)-\mathrm{tr}(\boldsymbol B)\); \(\mathrm{tr}(\boldsymbol A\boldsymbol B)=\mathrm{tr}(\boldsymbol B\boldsymbol A)\) when both products are square.

The second rule turns \(\mathrm{tr}(\boldsymbol H)\) into the trace of the \((p+1)\times(p+1)\) identity, which is \(p+1\).

**How** Added

Find the number of \(\lambda_i\) equal to 1

- Find \(n\).
- Find \(p\). Do not count the intercept.
- Calculate \(n-(p+1)\): the number of \(\lambda_i=1\).
- Calculate \(p+1\): the number of \(\lambda_i=0\).

**Self-check:** The counts add to \(n\). By hand, \(\mathrm{tr}(\boldsymbol H)=p+1\) and \(\mathrm{tr}(\boldsymbol I-\boldsymbol H)=n-(p+1)\).

**Example** Added

Data set 2 (\(n=4\), \(p=1\)).

1

\[\sum_i\lambda_i=n-(p+1)=4-(1+1)=2\]

How steps 1–3.

2

\[\mathrm{tr}(\boldsymbol H)=h_{11}+h_{22}+h_{33}+h_{44}=0.7+0.3+0.3+0.7=2=p+1\]

3

\[\mathrm{tr}(\boldsymbol I-\boldsymbol H)=0.3+0.7+0.7+0.3=2\]

4

\[(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X=\frac{1}{20}\left[\begin{array}{cc}14\cdot4-6\cdot6&14\cdot6-6\cdot14\\-6\cdot4+4\cdot6&-6\cdot6+4\cdot14\end{array}\right]=\frac{1}{20}\left[\begin{array}{cc}20&0\\0&20\end{array}\right]=\boldsymbol I_2\]

Trace \(1+1=2=p+1\).

Two eigenvalues are 1, two are 0, as in Section 04.2. Satisfaction data: \(46-(3+1)=42\) ones and \(3+1=4\) zeros (Figure 04.1). ▲

**Why** Slides p.41–42

1

\[\sum_i\lambda_i=\mathrm{tr}(\boldsymbol D)\]

Diagonal of \(\boldsymbol D\) is \(\lambda_1,\dots,\lambda_n\).

2

\[=\mathrm{tr}(\boldsymbol D\boldsymbol\Gamma\boldsymbol\Gamma^T)\]

\(\boldsymbol\Gamma\boldsymbol\Gamma^T=\boldsymbol I\).

3

\[=\mathrm{tr}(\boldsymbol\Gamma^T\boldsymbol D\boldsymbol\Gamma)\]

\(\mathrm{tr}(\boldsymbol A\boldsymbol B)=\mathrm{tr}(\boldsymbol B\boldsymbol A)\), \(\boldsymbol A=\boldsymbol D\boldsymbol\Gamma\), \(\boldsymbol B=\boldsymbol\Gamma^T\).

4

\[=\mathrm{tr}(\boldsymbol I-\boldsymbol H)\]

Eigen decomposition.

1

\[\mathrm{tr}(\boldsymbol I-\boldsymbol H)=\mathrm{tr}(\boldsymbol I)-\mathrm{tr}(\boldsymbol H)\]

2

\[=n-\mathrm{tr}(\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T)\]

\(\mathrm{tr}(\boldsymbol I_n)=n\); definition of \(\boldsymbol H\).

3

\[=n-\mathrm{tr}((\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X)\]

\(\mathrm{tr}(\boldsymbol A\boldsymbol B)=\mathrm{tr}(\boldsymbol B\boldsymbol A)\), \(\boldsymbol A=\boldsymbol X\).

4

\[=n-\mathrm{tr}(\boldsymbol I_{p+1})\]

\((p+1)\times(p+1)\) identity.

5

\[=n-(p+1)\]

∎

### 04.6 Recap: \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{n-(p+1)}\) Slides p.43

**What** Slides p.43

Lecture 7 · p.43 We showed:
1. \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e=\sum_{i=1}^nZ_i^2\) where \(Z_i\overset{indep}{\sim}N(0,\lambda_i)\).
• i.e., a sum of \(n\) squared independent normally distributed r.v.'s
2. \(var(Z_i)=\lambda_i\in\{0,1\}\)
• hence are either standard normally distributed or degenerate (0)
3. \(\sum_{i=1}^n\lambda_i=n-(p+1)\)
• hence exactly \(n-(p+1)\) of the \(Z_i\) are \(N(0,1)\) r.v.s
\(\Longrightarrow\ \frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\) is a sum of \(n-(p+1)\) squared standard normal r.v.s \[\Longrightarrow\ \frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{n-(p+1)}\]

Drop the terms that are always 0. The rest fits the chi-squared definition.

With \(\hat\sigma^2=\frac{1}{n-(p+1)}\boldsymbol e^T\boldsymbol e\), the result is also \(\frac{(n-(p+1))\hat\sigma^2}{\sigma^2}\sim\chi^2_{n-(p+1)}\).

**How** Added

State the distribution of \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\) for a data set

- Find \(n\) and \(p\).
- Calculate \(n-(p+1)\).
- Write \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{n-(p+1)}\).
- For \(\hat\sigma^2\), divide \(\boldsymbol e^T\boldsymbol e\) by \(n-(p+1)\).

**Self-check:** The chi-squared degrees of freedom equal the divisor in \(\hat\sigma^2\).

**Example** Added

1

\[n-(p+1)=4-(1+1)=2\]

How steps 1–2.

2

\[\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{2}\]

How step 3.

3

\[\hat\sigma^2=\frac{2.70}{2}=1.35\]

How step 4.

Section 04.3: \(\frac{2.70}{\sigma^2}=Z_1^2+Z_2^2+0^2+0^2\), two standard normal terms, as \(\chi^2_2\) requires. ▲

**Why** Slides p.43

Item 1: Section 04.3. Item 2: Section 04.4. Item 3: Section 04.5. ∎

### 04.7 Practice Added

**Q1.** A regression has \(n=20\), \(p=3\). How many eigenvalues of \(\boldsymbol I-\boldsymbol H\) are 1, and how many are 0? Give the distribution of \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\).

Answer

1

\[\sum_i\lambda_i=n-(p+1)=20-(3+1)=16\]

Slides p.42.

2

\[n-16=20-16=4=p+1\]

Each \(\lambda_i\) is 0 or 1 (Slides p.40): 16 ones, 4 zeros. Slides p.43: \(\frac{1}{\sigma^2}\boldsymbol e^T\boldsymbol e\sim\chi^2_{16}\).

**Q2.** Show that \(\boldsymbol H\) is idempotent and that its eigenvalues are 0 or 1. For the satisfaction data (\(n=46\), \(p=3\)), how many eigenvalues of \(\boldsymbol H\) are 1?

Answer

1

\[\boldsymbol H\boldsymbol H=\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\]

2

\[=\boldsymbol X\boldsymbol I(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\]

\((\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol X=\boldsymbol I\).

3

\[=\boldsymbol H\]

The proof of Slides p.40 with \(\boldsymbol H\): \(\lambda\boldsymbol v=\boldsymbol H\boldsymbol v=\boldsymbol H\boldsymbol H\boldsymbol v=\lambda^2\boldsymbol v\), so \(\lambda\in\{0,1\}\). The count of 1s is \(\mathrm{tr}(\boldsymbol H)=p+1=3+1=4\) (Slides p.42, line 3).

**Q3.** Use \(\boldsymbol x=(0,1,2,3)^T\), \(\boldsymbol y=(2,1,4,5)^T\), and \(y_i=\beta_0+\beta_1x_i+\epsilon_i\). Calculate \(\boldsymbol e\), \(\boldsymbol e^T\boldsymbol e\), \(\hat\sigma^2\). Give the distribution of \(\frac{2\hat\sigma^2}{\sigma^2}\).

Answer

\(\boldsymbol x\) is the same as in data set 2, so \((\boldsymbol X^T\boldsymbol X)^{-1}\) is the same.

1

\[\boldsymbol X^T\boldsymbol y=\left[\begin{array}{c}2+1+4+5\\0\cdot2+1\cdot1+2\cdot4+3\cdot5\end{array}\right]=\left[\begin{array}{c}12\\24\end{array}\right]\]

2

\[\hat{\boldsymbol\beta}=\frac{1}{20}\left[\begin{array}{c}14\cdot12-6\cdot24\\-6\cdot12+4\cdot24\end{array}\right]=\frac{1}{20}\left[\begin{array}{c}168-144\\-72+96\end{array}\right]=\left[\begin{array}{c}1.2\\1.2\end{array}\right]\]

3

\[\hat{\boldsymbol y}=(1.2,\ 2.4,\ 3.6,\ 4.8)^T\]

4

\[\boldsymbol e=(2-1.2,\ 1-2.4,\ 4-3.6,\ 5-4.8)^T=(0.8,\ -1.4,\ 0.4,\ 0.2)^T\]

5

\[\boldsymbol e^T\boldsymbol e=0.64+1.96+0.16+0.04=2.80\]

6

\[\hat\sigma^2=\frac{2.80}{4-(1+1)}=\frac{2.80}{2}=1.40\]

Check with \(\boldsymbol\Gamma\) (Section 04.2): \(\tilde e_1=\frac12(0.8+1.4-0.4+0.2)=1.0\), \(\tilde e_2=\frac{1}{\sqrt{20}}(0.8+4.2+1.2-0.2)=\frac{6}{\sqrt{20}}\). \(1.0^2+\frac{36}{20}=1.0+1.8=2.80\).

\(2\hat\sigma^2=\boldsymbol e^T\boldsymbol e\), so \(\frac{2\hat\sigma^2}{\sigma^2}\sim\chi^2_{2}\) (Slides p.43).

## 05 · t tests and confidence intervals for each \(\beta_j\)

Plan · Slides p.44–51

Step 1: The t distribution of the standardized \(\hat\beta_j\) (Slides p.44).

Step 2: \(\hat{\boldsymbol\beta}\) from the normal equations (Slides p.45).

Step 3: \(\hat\sigma^2\) and each standard error (Slides p.46).

Step 4: Rules for the test and the confidence interval (Slides p.47–49).

Step 5: p-value for \(H_0:\beta_j=0\), each \(j\) (Slides p.50).

Step 6: 95% confidence interval for each \(\beta_j\) (Slides p.51).

\(V_{00}\) belongs to the intercept \(\beta_0\).

The satisfaction data (Lecture 6 · p.9)

\(n=46\) hospital patients. Response: Satisfaction. \(p=3\) covariates: Age (\(\beta_1\)), Severity (\(\beta_2\)), Stress (\(\beta_3\)).

Model: \(\text{Satisfaction}_i=\beta_0+\beta_1\text{Age}_i+\beta_2\text{Severity}_i+\beta_3\text{Stress}_i+\epsilon_i\) (Lecture 7 · p.53).

Data set 4 Added

\(n=5\), \(p=1\). Row \(i\) of \(\boldsymbol X\) is \((1,\ x_i)\).
\[x=(1,\ 2,\ 3,\ 4,\ 5),\qquad \boldsymbol y=(1,\ 3,\ 2,\ 5,\ 4)^T,\qquad \boldsymbol X=\left[\begin{array}{cc}1&1\\1&2\\1&3\\1&4\\1&5\end{array}\right]\]

### 05.1 The t distribution of the standardized \(\hat\beta_j\) Slides p.44

**What** Slides p.44

In multiple linear regression · Lecture 7 · p.44 So we have \[\hat{\boldsymbol\beta}\sim N(\boldsymbol\beta,\sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1})\implies\hat\beta_j\sim N(\beta_j,\sigma^2V_{jj})\implies\frac{\hat\beta_j-\beta_j}{\sqrt{\sigma^2V_{jj}}}\sim N(0,1)\] and when we estimate the variance with \(\hat\sigma^2=\frac{1}{n-(p+1)}\boldsymbol{e}^T\boldsymbol{e}\), we have: \[\frac{\hat\beta_j-\beta_j}{\sqrt{\hat\sigma^2V_{jj}}}\sim t_{n-(p+1)}\]

Line 1: subtract the mean and divide by the standard deviation (square root of the variance) to get \(N(0,1)\).

Line 2: with \(\hat\sigma^2\) for the unknown \(\sigma^2\), the distribution is \(t_{n-(p+1)}\). d.o.f.: degrees of freedom.

**How** Added

Write the t statistic for one coefficient \(\beta_j\)

- Find \(\hat\beta_j\), entry \(j\) of \(\hat{\boldsymbol\beta}\) (counted from 0).
- Find \(V_{jj}\), diagonal entry \(j\) of \((\boldsymbol X^T\boldsymbol X)^{-1}\).
- Calculate \(\hat\sigma^2=\boldsymbol e^T\boldsymbol e/(n-(p+1))\).
- Divide \(\hat\beta_j-\beta_j\) by \(\sqrt{\hat\sigma^2V_{jj}}\).
- Use \(n-(p+1)\) degrees of freedom.

**Self-check:** \(V_{jj}>0\) and \(\hat\sigma^2\ge0\), so the denominator is positive.

**Self-check:** The degrees of freedom are a positive whole number.

**Example** Added

How step 5. Sections 05.2–05.3 calculate the other inputs.

1

The satisfaction data How step 5

\[n-(p+1)=46-(3+1)=46-4=42\]

\(t_{42}\) for each \(j=0,1,2,3\).

2

Data set 4 How step 5

\[n-(p+1)=5-(1+1)=5-2=3\]

\(t_{3}\) for each \(j=0,1\). ▲

**Why** Slides p.26–43

Section 03.3 gives the plan and the chain. Section 03.4 proves property (3). Unit 04 proves property (2).

### 05.2 Calculate \(\hat{\boldsymbol\beta}\) from the normal equations Slides p.45

**What** Slides p.45

Estimation · Lecture 7 · p.45 (statistical content of the comments) \[\hat{\boldsymbol\beta}=(\boldsymbol X^T\boldsymbol X)^{-1}\boldsymbol X^T\boldsymbol y\] \[(\boldsymbol X^T\boldsymbol X)\hat{\boldsymbol\beta}=\boldsymbol X^T\boldsymbol y\quad\text{(more like solving system of equations)}\]

Slide p.45 shows only code; this is its statistical content. Solve the \(p+1\) normal equations directly.

The slide says "NEVER" for the other method: invert \(\boldsymbol X^T\boldsymbol X\) first, then multiply by \(\boldsymbol X^T\boldsymbol y\).

**How** Added

Calculate \(\hat{\boldsymbol\beta}\)

- Make \(\boldsymbol X\): a column of 1s, then the covariates in model order.
- Calculate \(\boldsymbol X^T\boldsymbol X\). Entry \((j,k)\): sum of column \(j\) times column \(k\), term by term.
- Calculate \(\boldsymbol X^T\boldsymbol y\). Entry \(j\): sum of column \(j\) times \(\boldsymbol y\), term by term.
- Write \((\boldsymbol X^T\boldsymbol X)\hat{\boldsymbol\beta}=\boldsymbol X^T\boldsymbol y\).
- Solve by elimination, one unknown at a time.

**Self-check:** \(\boldsymbol X^T\boldsymbol X\) is symmetric, \((p+1)\times(p+1)\), top-left entry \(n\).

**Self-check:** \(\hat{\boldsymbol\beta}\) satisfies each normal equation.

**Example** Added

Data set 4.

1

\(\boldsymbol X^T\boldsymbol X\) How step 2

\[\boldsymbol X^T\boldsymbol X=\left[\begin{array}{cc}1+1+1+1+1&1+2+3+4+5\\1+2+3+4+5&1+4+9+16+25\end{array}\right]=\left[\begin{array}{cc}5&15\\15&55\end{array}\right]\]

2

\(\boldsymbol X^T\boldsymbol y\) How step 3

\[\boldsymbol X^T\boldsymbol y=\left[\begin{array}{c}1+3+2+5+4\\1\cdot1+2\cdot3+3\cdot2+4\cdot5+5\cdot4\end{array}\right]=\left[\begin{array}{c}15\\1+6+6+20+20\end{array}\right]=\left[\begin{array}{c}15\\53\end{array}\right]\]

3

Normal equations How step 4

\[5\hat\beta_0+15\hat\beta_1=15\]

\[15\hat\beta_0+55\hat\beta_1=53\]

4

Elimination How step 5

\[15\hat\beta_0+45\hat\beta_1=45\]

First equation times 3.

5

\[(55-45)\hat\beta_1=53-45\]

Second equation minus line 4.

6

\[10\hat\beta_1=8\]

7

\[\hat\beta_1=0.8\]

8

\[5\hat\beta_0+15(0.8)=15\]

Substitute \(\hat\beta_1=0.8\).

9

\[5\hat\beta_0=15-12=3\]

10

\[\hat\beta_0=0.6\]

Self-check: \(15(0.6)+55(0.8)=9+44=53\). ▲

The slides do not print \(\hat{\boldsymbol\beta}\) for the satisfaction data. Section 05.6 gets it from the interval endpoints on p.51.

**Why** Added

1

\[\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\]

2

\[(\boldsymbol{X}^T\boldsymbol{X})\hat{\boldsymbol\beta}=(\boldsymbol{X}^T\boldsymbol{X})(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}\]

3

\[(\boldsymbol{X}^T\boldsymbol{X})\hat{\boldsymbol\beta}=\boldsymbol{X}^T\boldsymbol{y}\]

Form \(\boldsymbol A\boldsymbol x=\boldsymbol b\). ∎

### 05.3 Calculate \(\hat\sigma^2\) and the standard errors Slides p.46

**What** Slides p.46

Inference · Lecture 7 · p.46 (statistical content of the comments) \[\hat{\boldsymbol y}=\boldsymbol X\hat{\boldsymbol\beta},\qquad \boldsymbol e=\boldsymbol y-\hat{\boldsymbol y},\qquad \hat\sigma^2=\frac{\sum_i e_i^2}{n-(p+1)}\ \text{(unbiased estimator)}\] \[\text{standard errors: }\ \hat\sigma\sqrt{V_{00}},\ \dots,\ \hat\sigma\sqrt{V_{pp}}\]

Slide p.46 shows only code; this is its statistical content.

\(\hat\sigma^2=\dfrac{\sum_i e_i^2}{n-(p+1)}=\dfrac{\boldsymbol e^T\boldsymbol e}{n-(p+1)}\).

\(\mathrm{SE}(\hat\beta_j)=\hat\sigma\sqrt{V_{jj}}=\sqrt{\hat\sigma^2V_{jj}}\), \(j=0,1,\dots,p\).

\(p\) is the number of columns of \(\boldsymbol X\) minus 1 (the intercept column).

**How** Added

Calculate \(\mathrm{SE}(\hat\beta_j)\)

- Find \(n\) (rows of \(\boldsymbol X\)) and \(p\) (columns of \(\boldsymbol X\) minus 1).
- Calculate \(\hat y_i=\hat\beta_0+\hat\beta_1x_i+\dots\) and \(e_i=y_i-\hat y_i\).
- Calculate \(\hat\sigma^2=\sum_i e_i^2/(n-(p+1))\).
- Calculate \(\boldsymbol V=(\boldsymbol X^T\boldsymbol X)^{-1}\). Read \(V_{00},\dots,V_{pp}\).
- Calculate \(\mathrm{SE}(\hat\beta_j)=\sqrt{\hat\sigma^2V_{jj}}\).

**Self-check:** The residuals add to 0 (model with intercept).

**Self-check:** \(\boldsymbol V\boldsymbol X^T\boldsymbol X=\boldsymbol I\).

**Example** Added

Data set 4, \(\hat\beta_0=0.6\), \(\hat\beta_1=0.8\).

1

\(n\) and \(p\) How step 1

\[n=5,\qquad p=2-1=1,\qquad n-(p+1)=3\]

2

Fitted values How step 2

\[\hat y_i=0.6+0.8x_i:\quad 0.6+0.8=1.4,\ \ 0.6+1.6=2.2,\ \ 0.6+2.4=3.0,\ \ 0.6+3.2=3.8,\ \ 0.6+4.0=4.6\]

3

Residuals How step 2

\[e_i=y_i-\hat y_i:\quad 1-1.4=-0.4,\ \ 3-2.2=0.8,\ \ 2-3.0=-1.0,\ \ 5-3.8=1.2,\ \ 4-4.6=-0.6\]

Self-check: \(-0.4+0.8-1.0+1.2-0.6=0\).

4

\(\boldsymbol e^T\boldsymbol e\) How step 3

\[\boldsymbol e^T\boldsymbol e=0.16+0.64+1.00+1.44+0.36=3.6\]

5

\(\hat\sigma^2\) How step 3

\[\hat\sigma^2=\frac{3.6}{3}=1.2\]

6

Determinant How step 4

\[\det(\boldsymbol X^T\boldsymbol X)=5\cdot55-15\cdot15=275-225=50\]

7

\(\boldsymbol V\) How step 4

\[\boldsymbol V=\frac{1}{50}\left[\begin{array}{cc}55&-15\\-15&5\end{array}\right]=\left[\begin{array}{cc}1.1&-0.3\\-0.3&0.1\end{array}\right]\]

2×2 inverse: swap diagonal, negate others, divide by determinant.

8

\(\mathrm{SE}(\hat\beta_0)\) How step 5

\[\mathrm{SE}(\hat\beta_0)=\sqrt{1.2\times1.1}=\sqrt{1.32}=1.148913\]

9

\(\mathrm{SE}(\hat\beta_1)\) How step 5

\[\mathrm{SE}(\hat\beta_1)=\sqrt{1.2\times0.1}=\sqrt{0.12}=0.3464102\]

Check \(\boldsymbol V\): \(-0.3\cdot15+0.1\cdot55=-4.5+5.5=1\). ▲

**Why** Added

1

\[\mathrm{Var}[\hat\beta_j]=\sigma^2V_{jj}\]

p.44 (Section 05.1).

2

\[\widehat{\mathrm{Var}}[\hat\beta_j]=\hat\sigma^2V_{jj}=\big[\hat\sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1}\big]_{jj}\]

\(\hat\sigma^2\) for the unknown \(\sigma^2\).

3

\[\mathrm{SE}(\hat\beta_j)=\sqrt{\hat\sigma^2V_{jj}}\]

Square root of a variance. ∎

### 05.4 Inference rules for \(\beta_j\): test and confidence interval Slides p.47–49

**What** Slides p.47–49

Hypothesis test: a decision, from data, if a statement about a parameter agrees with the data.

Null hypothesis \(H_0:\beta_j=\theta_0\): the statement under test; \(\theta_0\) is a given number.

\(t^{obs}\): the t statistic calculated from the observed data.

Confidence interval (CI): an interval from the data that contains the true \(\beta_j\) with probability \(1-\alpha\).

Inference for \(\beta_j\) · Lecture 7 · p.47–49 We showed \(\dfrac{\hat\beta_j-\beta_j}{\sqrt{\hat\sigma^2V_{jj}}}\sim t_{n-(p+1)}\).
This is identical to the result for SLR except with updated

- Standard errors: \(SE(\hat\beta_j)=\sqrt{\hat\sigma^2V_{jj}}\)
- And the d.o.f. of the t distribution is \(n-(p+1)\)

- Note: In SLR, we had \(n-2\), equivalent to \(p=1\) covariate

1. Hypothesis tests:

- Compare \(t^{obs}\) (i.e., realization of \(\frac{\hat\beta_j-\theta_0}{SE(\hat\beta_j)}\)) to null distribution (\(t_{n-(p+1)}\))
2. Confidence intervals:

- \(\hat\beta_j\pm t_{1-\alpha/2,\,n-(p+1)}\,SE(\hat\beta_j)\)

Note on the slide text

Slides p.47–49 print \(SE(\hat\beta_j)=\hat\sigma^2V_{jj}\) (no square root) and \(t_{n-p+1}\) (no brackets). This page writes \(\sqrt{\hat\sigma^2V_{jj}}\) and \(t_{n-(p+1)}\), as on p.44 and p.46.

Quantile \(t_{1-\alpha/2,\,n-(p+1)}\): the point with area \(1-\alpha/2\) to its left under the \(t_{n-(p+1)}\) curve.

Significance level \(\alpha\): the largest accepted probability of a wrong rejection. Usual: \(\alpha=0.05\), giving \(t_{0.975,\,n-(p+1)}\).

Null distribution: the distribution of the statistic when \(H_0\) is true.

p-value: the probability, under \(H_0\), of a value as far from 0 as \(t^{obs}\) or farther. Small values are evidence against \(H_0\).

**How** Added

Test \(H_0:\beta_j=\theta_0\)

- Write \(H_0:\beta_j=\theta_0\). Usually \(\theta_0=0\).
- Calculate \(t^{obs}=(\hat\beta_j-\theta_0)/\mathrm{SE}(\hat\beta_j)\).
- Use the null distribution \(T\sim t_{n-(p+1)}\).
- Calculate the p-value \(=2P(T>|t^{obs}|)\).
- Reject \(H_0\) if the p-value is less than \(\alpha\), or equivalently if \(|t^{obs}|>t_{1-\alpha/2,\,n-(p+1)}\).

**Self-check:** \(t^{obs}\) has the sign of \(\hat\beta_j-\theta_0\). The p-value is between 0 and 1.

\(\theta_0=0\): covariate \(j\) has no linear relation with the mean response when the other covariates stay the same.

Calculate the \(100(1-\alpha)\%\) confidence interval for \(\beta_j\)

- Find \(t_{1-\alpha/2,\,n-(p+1)}\) in a t table.
- Calculate the half-width \(t_{1-\alpha/2,\,n-(p+1)}\times\mathrm{SE}(\hat\beta_j)\).
- Write \(\hat\beta_j\pm\) half-width.

**Self-check:** The midpoint is \(\hat\beta_j\). At the same \(\alpha\), the CI excludes \(\theta_0\) exactly when the test rejects \(H_0:\beta_j=\theta_0\).

**Example** Added

Data set 4: test \(H_0:\beta_1=0\) and find the 95% CI for \(\beta_1\) (\(\alpha=0.05\)).

1

Write \(H_0\) Test step 1

\[H_0:\beta_1=0,\qquad\theta_0=0\]

2

\(t^{obs}\) Test step 2

\[t^{obs}=\frac{0.8-0}{0.3464102}=2.309401\]

Inputs from Sections 05.2 and 05.3.

3

Null distribution Test step 3

\[T\sim t_{5-(1+1)}=t_3\]

4

p-value Test step 4

\[2P(T>2.309401)=2\times0.052044=0.104088\]

5

Decision Test step 5

\[0.104>0.05\ \Rightarrow\ \text{do not reject }H_0\]

Also: \(|t^{obs}|=2.309<t_{0.975,3}=3.182446\).

6

Quantile CI step 1

\[t_{0.975,\,3}=3.182446\]

7

Half-width CI step 2

\[3.182446\times0.3464102=1.102432\]

8

Interval CI step 3

\[0.8\pm1.102432=(0.8-1.102432,\ 0.8+1.102432)=(-0.302432,\ 1.902432)\]

Contains 0, as line 5 requires. ▲

**Why** Added

Let \(q=t_{1-\alpha/2,\,n-(p+1)}\). The t distribution is symmetric about 0, so \(P(-q\le T\le q)=1-\alpha\).

1

\[P\left(-q\le\frac{\hat\beta_j-\beta_j}{\mathrm{SE}(\hat\beta_j)}\le q\right)=1-\alpha\]

Section 05.1.

2

\[P\left(-q\,\mathrm{SE}(\hat\beta_j)\le\hat\beta_j-\beta_j\le q\,\mathrm{SE}(\hat\beta_j)\right)=1-\alpha\]

3

\[P\left(-\hat\beta_j-q\,\mathrm{SE}(\hat\beta_j)\le-\beta_j\le-\hat\beta_j+q\,\mathrm{SE}(\hat\beta_j)\right)=1-\alpha\]

4

\[P\left(\hat\beta_j-q\,\mathrm{SE}(\hat\beta_j)\le\beta_j\le\hat\beta_j+q\,\mathrm{SE}(\hat\beta_j)\right)=1-\alpha\]

Multiply by \(-1\); inequalities reverse. ∎

For the test, \(H_0\) gives \(\beta_j=\theta_0\), so \(T=(\hat\beta_j-\theta_0)/\mathrm{SE}(\hat\beta_j)\sim t_{n-(p+1)}\).

### 05.5 The p-value for each coefficient Slides p.50

**What** Slides p.50

Inference: p-values · Lecture 7 · p.50 (statistical content of the comments) \(H_0:\beta_j=0\), for each \(j=0,\dots,p\).
Numerators of the test statistics: \(\hat\beta_j\). Denominators of the test statistics: \(\mathrm{SE}(\hat\beta_j)\).
p-value: want \(P(|T|>|t^{obs}|)\).

Slide p.50 shows only code; this is its statistical content. With \(\theta_0=0\), \(t^{obs}=\hat\beta_j/\mathrm{SE}(\hat\beta_j)\) and \(T\sim t_{n-(p+1)}\).

The slide gives two equal forms: \(2P(T<-|t^{obs}|)\) (left tail) and \(2P(T>|t^{obs}|)\) (right tail).

**How** Added

Calculate the p-values for \(H_0:\beta_j=0\), \(j=0,\dots,p\)

- Write \(\hat\beta_0,\dots,\hat\beta_p\) (Section 05.2).
- Write \(\mathrm{SE}(\hat\beta_0),\dots,\mathrm{SE}(\hat\beta_p)\) (Section 05.3).
- Calculate \(t^{obs}_j=\hat\beta_j/\mathrm{SE}(\hat\beta_j)\).
- Calculate each p-value \(=2P(T<-|t^{obs}_j|)\), \(T\sim t_{n-(p+1)}\).
- Compare each p-value with \(\alpha\).

**Self-check:** Larger \(|t^{obs}_j|\) gives a smaller p-value.

**Self-check:** Each p-value is between 0 and 1.

**Example** Added

Data set 4 (\(T\sim t_3\), \(\alpha=0.05\)).

1

Numerators and denominators How steps 1–2

\[\hat\beta_0=0.6,\ \ \hat\beta_1=0.8,\qquad \mathrm{SE}(\hat\beta_0)=1.148913,\ \ \mathrm{SE}(\hat\beta_1)=0.3464102\]

2

\(t^{obs}_0\) How step 3

\[t^{obs}_0=\frac{0.6}{1.148913}=0.522233\]

3

\(t^{obs}_1\) How step 3

\[t^{obs}_1=\frac{0.8}{0.3464102}=2.309401\]

4

p-value for \(\beta_0\) How step 4

\[2P(T<-0.522233)=2\times0.318809=0.637618\]

5

p-value for \(\beta_1\) How step 4

\[2P(T<-2.309401)=2\times0.052044=0.104088\]

6

Decisions How step 5

\[0.638>0.05\ \text{and}\ 0.104>0.05\ \Rightarrow\ \text{do not reject }H_0:\beta_0=0\ \text{or}\ H_0:\beta_1=0\]

Self-check: larger \(|t^{obs}_1|\), smaller p-value. ▲

The area under a density curve over an interval is the probability of that interval.

[figure]
Figure 05.1 · Test of \(H_0:\beta_1=0\), data set 4. Blue: \(t_3\) density. Purple dashed: \(\pm|t^{obs}_1|=\pm2.309\). Each orange tail: area 0.052044 (including the part past \(\pm4\)). Sum: p-value 0.104088.

**Why** Added

1

\[P(|T|>|t^{obs}|)=P(T<-|t^{obs}|)+P(T>|t^{obs}|)\]

The tails do not overlap.

2

\[=P(T<-|t^{obs}|)+P(T<-|t^{obs}|)\]

Symmetry about 0.

3

\[=2P(T<-|t^{obs}|)\]

First form on p.50; symmetry gives the second. ∎

### 05.6 The 95% confidence interval for each coefficient Slides p.51

**What** Slides p.51

Slide p.51 calculates \(\hat\beta_j\pm t_{0.975,\,n-(p+1)}\,\mathrm{SE}(\hat\beta_j)\) by two methods with equal results. It prints, for the satisfaction data (\(n=46\), \(p=3\)):

Inference · Lecture 7 · p.51 (printed endpoints)
(Intercept) \(\beta_0\): \((121.911727,\ 195.0707761)\)

Age \(\beta_1\): \((-1.575093,\ -0.7081303)\)

Severity \(\beta_2\): \((-1.434831,\ 0.5508228)\)

Stress \(\beta_3\): \((-27.797859,\ 0.8575324)\)

\((L,\ U)\): lower and upper endpoints. Each uses \(\alpha=0.05\) and \(n-(p+1)=42\).

**How** Added

Get \(\hat\beta_j\) and \(\mathrm{SE}(\hat\beta_j)\) from a printed CI \((L,\ U)\)

- Midpoint \((L+U)/2\) is \(\hat\beta_j\).
- Calculate the half-width \((U-L)/2\).
- Find \(t_{0.975,\,n-(p+1)}\).
- Divide the half-width by the quantile to get \(\mathrm{SE}(\hat\beta_j)\).
- If the CI excludes 0, reject \(H_0:\beta_j=0\) at \(\alpha=0.05\).

**Self-check:** \(L<\hat\beta_j<U\) and \(\mathrm{SE}(\hat\beta_j)>0\).

**Example** Added

Age coefficient \(\beta_1\).

1

Midpoint How step 1

\[\hat\beta_1=\frac{-1.575093+(-0.7081303)}{2}=\frac{-2.2832233}{2}=-1.141612\]

2

Half-width How step 2

\[\frac{-0.7081303-(-1.575093)}{2}=\frac{0.8669627}{2}=0.4334814\]

3

Quantile How step 3

\[t_{0.975,\,42}=2.0180817\]

4

Standard error How step 4

\[\mathrm{SE}(\hat\beta_1)=\frac{0.4334814}{2.0180817}=0.214799\]

5

Test result How step 5

\[0\notin(-1.575093,\ -0.7081303)\ \Rightarrow\ \text{reject }H_0:\beta_1=0\ \text{at}\ \alpha=0.05\]

Check: \(t^{obs}=-1.141612/0.214799=-5.315\), p-value \(3.81\times10^{-6}<0.05\). ▲

Other coefficients, with \(t_{0.975,42}=2.0180817\):

Intercept \(\beta_0\)

\(\hat\beta_0=(121.911727+195.0707761)/2=316.9825031/2=158.491252\).

Half-width \(=(195.0707761-121.911727)/2=73.1590491/2=36.579525\). \(\mathrm{SE}(\hat\beta_0)=36.579525/2.0180817=18.125889\).

Excludes 0. Reject \(H_0:\beta_0=0\).

Severity \(\beta_2\)

\(\hat\beta_2=(-1.434831+0.5508228)/2=-0.8840082/2=-0.442004\).

Half-width \(=(0.5508228-(-1.434831))/2=1.9856538/2=0.992827\). \(\mathrm{SE}(\hat\beta_2)=0.992827/2.0180817=0.491966\).

Contains 0. Do not reject \(H_0:\beta_2=0\).

Stress \(\beta_3\)

\(\hat\beta_3=(-27.797859+0.8575324)/2=-26.9403266/2=-13.470163\).

Half-width \(=(0.8575324-(-27.797859))/2=28.6553914/2=14.327696\). \(\mathrm{SE}(\hat\beta_3)=14.327696/2.0180817=7.099661\).

Contains 0. Do not reject \(H_0:\beta_3=0\).

[figure]
Figure 05.2 · 95% CI for Age \(\beta_1\) (blue). Green: \(\hat\beta_1=-1.1416\). Half-width 0.4335. Purple dashed: 0. The interval lies left of 0: reject \(H_0:\beta_1=0\).

**Why** Added

Let \(q=t_{0.975,\,n-(p+1)}\).

1

\[L=\hat\beta_j-q\,\mathrm{SE}(\hat\beta_j),\qquad U=\hat\beta_j+q\,\mathrm{SE}(\hat\beta_j)\]

CI rule, Section 05.4.

2

\[L+U=2\hat\beta_j,\qquad U-L=2q\,\mathrm{SE}(\hat\beta_j)\]

3

\[\hat\beta_j=\frac{L+U}{2},\qquad \mathrm{SE}(\hat\beta_j)=\frac{(U-L)/2}{q}\]

∎

### 05.7 Practice Added

Satisfaction data: \(n=46\), \(p=3\), \(T\sim t_{42}\). From Section 05.6: \(\hat\beta_1=-1.141612\), \(\mathrm{SE}(\hat\beta_1)=0.214799\), \(\hat\beta_3=-13.470163\), \(\mathrm{SE}(\hat\beta_3)=7.099661\).

**Q1.** Test \(H_0:\beta_3=0\) (Stress) against \(H_1:\beta_3\neq0\) at \(\alpha=0.05\). Give \(t^{obs}\), the null distribution, the p-value, and the decision. Does it agree with the 95% CI on Slides p.51?

Answer Q1

1

\(t^{obs}\) Section 05.4 · Test step 2

\[t^{obs}=\frac{-13.470163-0}{7.099661}=-1.897297\]

2

Null distribution Section 05.4 · Test step 3

\[t_{46-(3+1)}=t_{42}\]

3

p-value Section 05.4 · Test step 4

\[2P(T<-1.897297)=2\times0.032339=0.064678\]

4

Decision Section 05.4 · Test step 5

\[0.0647>0.05\ \Rightarrow\ \text{do not reject }H_0\]

The 95% CI \((-27.797859,\ 0.8575324)\) contains 0. They agree. ▲

**Q2.** Calculate the 90% CI for \(\beta_3\) (Stress) with \(t_{0.95,42}=1.681952\). At \(\alpha=0.10\), do you reject \(H_0:\beta_3=0\)?

Answer Q2

1

Quantile Section 05.4 · CI step 1

\[\alpha=0.10,\quad 1-\alpha/2=0.95,\quad t_{0.95,42}=1.681952\]

2

Half-width Section 05.4 · CI step 2

\[1.681952\times7.099661=11.941289\]

3

Interval Section 05.4 · CI step 3

\[-13.470163\pm11.941289=(-25.411452,\ -1.528874)\]

Excludes 0: reject at \(\alpha=0.10\). Q1 p-value \(0.0647<0.10\) agrees. ▲

**Q3.** Test \(H_0:\beta_1=-1\) (Age) against \(H_1:\beta_1\neq-1\) at \(\alpha=0.05\).

Answer Q3

1

\(t^{obs}\) with \(\theta_0=-1\) Section 05.4 · Test step 2

\[t^{obs}=\frac{-1.141612-(-1)}{0.214799}=\frac{-0.141612}{0.214799}=-0.659276\]

2

p-value with \(T\sim t_{42}\) Section 05.4 · Test step 4

\[2P(T<-0.659276)=0.513317\]

3

Decision Section 05.4 · Test step 5

\[0.513>0.05\ \Rightarrow\ \text{do not reject }H_0:\beta_1=-1\]

The 95% CI \((-1.575093,\ -0.7081303)\) contains \(-1\). They agree. ▲

## 06 · Practice questions Q1–Q3

p.52: section title "Practice". p.53 (Q1): estimates and SEs of \(2\beta_3\) and \(\beta_2+\beta_3\). p.54 (Q2): \(\hat{\boldsymbol\beta}\) and \(\mathrm{SE}(\hat\beta_1)\) from part of \((\boldsymbol{X}'\boldsymbol{X})^{-1}\). p.55 (Q3): three proofs with \(\boldsymbol{X}'\boldsymbol{e}=\boldsymbol{0}\).

Notation

Slides p.54–55 write the transpose with a prime: \(\boldsymbol{X}'=\boldsymbol{X}^T\). Q2 and Q3 use the prime.

### 06.1 Q1: a linear combination of coefficients and its SE Slides p.52–53

**What** Slides p.52–53

Lecture 7 · p.53 · Practice Q1 Fit the following model: \[\text{Satisfaction}_i=\beta_0+\beta_1\text{Age}_i+\beta_2\text{Severity}_i+\beta_3\text{Stress}_i+\epsilon_i,\quad \epsilon_i\overset{iid}{\sim}N(0,\sigma^2)\] (a) Estimate \(2\beta_3\)
(b) Compute a corresponding SE
(c) Interpret your estimate of \(2\beta_3\)
(d) Repeat (a)–(c) for \(\beta_2+\beta_3\)

Data: the satisfaction data (Unit 05), \(n=46\), \(p=3\). \(\boldsymbol\beta=(\beta_0,\beta_1,\beta_2,\beta_3)^T\). Added

\(\boldsymbol{a}^T\boldsymbol\beta=a_0\beta_0+a_1\beta_1+a_2\beta_2+a_3\beta_3\). For \(2\beta_3\), \(\boldsymbol{a}=(0,0,0,2)^T\). For \(\beta_2+\beta_3\), \(\boldsymbol{a}=(0,0,1,1)^T\).

The estimate of \(\boldsymbol{a}^T\boldsymbol\beta\) is \(\boldsymbol{a}^T\hat{\boldsymbol\beta}\).

\(\mathrm{Var}(\hat{\boldsymbol\beta})\) holds \(\mathrm{Var}(\hat\beta_j)\) at diagonal position \(j\) and \(\mathrm{Cov}(\hat\beta_j,\hat\beta_k)\) at \((j,k)\), numbered 0 to \(p\).

Lecture 5 · p.29 Consider a random vector \(\boldsymbol{y}\) and constant vector \(\boldsymbol{a}\):
\(E[\boldsymbol{a}^T\boldsymbol{y}+b]=\boldsymbol{a}^TE[\boldsymbol{y}]+b\)
\(\mathrm{Var}(\boldsymbol{a}^T\boldsymbol{y})=\boldsymbol{a}^T\mathrm{Var}(\boldsymbol{y})\boldsymbol{a}\)

Lecture 7 · p.44 \[\hat{\boldsymbol\beta}\sim N(\boldsymbol\beta,\sigma^2(\boldsymbol{X}^T\boldsymbol{X})^{-1})\] and we estimate the variance with \(\hat\sigma^2=\frac{1}{n-(p+1)}\boldsymbol{e}^T\boldsymbol{e}\).

With \(\boldsymbol{V}=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\): \(\widehat{\mathrm{Var}}(\hat{\boldsymbol\beta})=\hat\sigma^2\boldsymbol{V}\). \(\mathrm{SE}(\hat\beta_j)\) is the square root of its diagonal entry \(j\).

**How** Added

Estimate \(\boldsymbol{a}^T\boldsymbol\beta\) and find its SE

- **Write \(\boldsymbol{a}\).** Write the target as \(a_0\beta_0+\cdots+a_p\beta_p\), with 0 for absent coefficients.
- **Estimate.** Calculate \(\boldsymbol{a}^T\hat{\boldsymbol\beta}\).
- **Estimate the variance.** Calculate \(\boldsymbol{a}^T\widehat{\mathrm{Var}}(\hat{\boldsymbol\beta})\boldsymbol{a}=\hat\sigma^2\,\boldsymbol{a}^T\boldsymbol{V}\boldsymbol{a}\).
- **Take the square root.** \(\mathrm{SE}(\boldsymbol{a}^T\hat{\boldsymbol\beta})=\sqrt{\hat\sigma^2\,\boldsymbol{a}^T\boldsymbol{V}\boldsymbol{a}}\).
- **Interpret.** Lecture 6 · p.14: "To interpret a parameter, isolate it." Write two conditional means whose difference is \(\boldsymbol{a}^T\boldsymbol\beta\).
- **State the result.** In one sentence, say which covariates change, by how much, and which stay fixed.

**Self-check:** \(\boldsymbol{a}\) has 4 entries: intercept, Age, Severity, Stress.

**Self-check:** One nonzero entry \(c\) at position \(j\) gives SE \(=|c|\,\mathrm{SE}(\hat\beta_j)\).

**Self-check:** \(\boldsymbol{a}^T\boldsymbol{V}\boldsymbol{a}\ge0\).

**Example · The satisfaction data** Added

Values from Section 05.6 (Slides p.51 intervals, \(t_{0.975,\,42}=2.0180817\)), 7 decimals. Slides p.51

Severity: \(\hat\beta_2=-0.4420041\), \(\mathrm{SE}(\hat\beta_2)=0.4919657\).

Stress: \(\hat\beta_3=-13.4701633\), \(\mathrm{SE}(\hat\beta_3)=7.0996609\).

Part (d) needs \(\widehat{\mathrm{Cov}}(\hat\beta_2,\hat\beta_3)\), which the slides do not print. These entries of \(\hat\sigma^2\boldsymbol{V}\) come from the course file satisfaction.csv (Lecture 6 · p.9), \(\hat\sigma^2=101.1628734\). Added · not on the slides

\(\hat\sigma^2V_{22}=0.2420303\), \(\hat\sigma^2V_{33}=50.4051837\), \(\hat\sigma^2V_{23}=-1.7916031\).

Check: \(0.4919657^2=0.2420302\), \(7.0996609^2=50.4051849\). The differences come from rounding.

1

(a) Write \(\boldsymbol{a}\) and estimate How steps 1–2

\[2\beta_3=\boldsymbol{a}^T\boldsymbol\beta,\quad \boldsymbol{a}=(0,0,0,2)^T\]

2

\[\boldsymbol{a}^T\hat{\boldsymbol\beta}=0\,\hat\beta_0+0\,\hat\beta_1+0\,\hat\beta_2+2\,\hat\beta_3=2(-13.4701633)\]

3

\[2\hat\beta_3=-26.9403266\]

4

(b) Estimate the variance How step 3

\[\boldsymbol{a}^T\widehat{\mathrm{Var}}(\hat{\boldsymbol\beta})\boldsymbol{a}=2^2\,\hat\sigma^2V_{33}\]

Only \(a_3\) is nonzero.

5

Take the square root How step 4

\[\mathrm{SE}(2\hat\beta_3)=\sqrt{2^2\,\hat\sigma^2V_{33}}=2\sqrt{\hat\sigma^2V_{33}}=2\,\mathrm{SE}(\hat\beta_3)\]

6

\[\mathrm{SE}(2\hat\beta_3)=2(7.0996609)=14.1993218\]

**(c) Interpret \(2\hat\beta_3\).** How step 5.

1

\[E[y_i\mid \text{Age}=x_1,\text{Severity}=x_2,\text{Stress}=x_3]=\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_3\]

2

\[E[y_i\mid \text{Age}=x_1,\text{Severity}=x_2,\text{Stress}=x_3+2]=\beta_0+\beta_1x_1+\beta_2x_2+\beta_3(x_3+2)\]

3

\[\text{line 2}-\text{line 1}=2\beta_3\]

Stress +2; Age and Severity fixed.

Interpretation: with age and severity fixed, we estimate that a 2-unit increase in stress is associated with a 26.94-unit decrease in mean satisfaction (SE = 14.20).

**(d) Repeat (a)–(c) for \(\beta_2+\beta_3\).** Two nonzero entries, so a covariance term enters.

1

Write \(\boldsymbol{a}\) and estimate How steps 1–2

\[\beta_2+\beta_3=\boldsymbol{a}^T\boldsymbol\beta,\quad \boldsymbol{a}=(0,0,1,1)^T\]

2

\[\hat\beta_2+\hat\beta_3=-0.4420041+(-13.4701633)\]

3

\[\hat\beta_2+\hat\beta_3=-13.9121674\]

4

Estimate the variance How step 3

\[\boldsymbol{a}^T\widehat{\mathrm{Var}}(\hat{\boldsymbol\beta})\boldsymbol{a}=\hat\sigma^2V_{22}+\hat\sigma^2V_{33}+2\hat\sigma^2V_{23}\]

Derived under Why.

5

\[\boldsymbol{a}^T\widehat{\mathrm{Var}}(\hat{\boldsymbol\beta})\boldsymbol{a}=0.2420303+50.4051837+2(-1.7916031)\]

6

\[\boldsymbol{a}^T\widehat{\mathrm{Var}}(\hat{\boldsymbol\beta})\boldsymbol{a}=50.6472140-3.5832062=47.0640078\]

7

Take the square root How step 4

\[\mathrm{SE}(\hat\beta_2+\hat\beta_3)=\sqrt{47.0640078}=6.8603213\]

Negative covariance lowers 50.65 to 47.06.

1

\[E[y_i\mid \text{Age}=x_1,\text{Severity}=x_2,\text{Stress}=x_3]=\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_3\]

2

\[E[y_i\mid \text{Age}=x_1,\text{Severity}=x_2+1,\text{Stress}=x_3+1]=\beta_0+\beta_1x_1+\beta_2(x_2+1)+\beta_3(x_3+1)\]

3

\[\text{line 2}-\text{line 1}=\beta_2+\beta_3\]

Severity +1, Stress +1; Age fixed.

Interpretation: with age fixed, we estimate that a 1-unit increase in both severity and stress is associated with a 13.91-unit decrease in mean satisfaction (SE = 6.86).

**Why** Added

1

\[\mathrm{Var}(\boldsymbol{a}^T\hat{\boldsymbol\beta})=\boldsymbol{a}^T\mathrm{Var}(\hat{\boldsymbol\beta})\boldsymbol{a}\]

Lecture 5 · p.29, \(\hat{\boldsymbol\beta}\) for \(\boldsymbol{y}\).

2

\[\mathrm{Var}(\boldsymbol{a}^T\hat{\boldsymbol\beta})=\boldsymbol{a}^T\sigma^2\boldsymbol{V}\boldsymbol{a}\]

Slide p.44.

3

\[\mathrm{Var}(\boldsymbol{a}^T\hat{\boldsymbol\beta})=\sigma^2\sum_{j=0}^{p}\sum_{k=0}^{p}a_ja_kV_{jk}\]

Expand entry by entry.

4

\[\mathrm{Var}(\hat\beta_2+\hat\beta_3)=\sigma^2(1\cdot1\cdot V_{22}+1\cdot1\cdot V_{23}+1\cdot1\cdot V_{32}+1\cdot1\cdot V_{33})\]

\(a_2=a_3=1\); other \(a_j=0\).

5

\[\mathrm{Var}(\hat\beta_2+\hat\beta_3)=\sigma^2(V_{22}+V_{33}+2V_{23})\]

Symmetry: \(V_{32}=V_{23}\).

6

\[\mathrm{SE}(\hat\beta_2+\hat\beta_3)=\sqrt{\hat\sigma^2(V_{22}+V_{33}+2V_{23})}\]

\(\hat\sigma^2\) for \(\sigma^2\); square root. ∎

For a sum of two or more coefficients, covariance terms enter the SE.

### 06.2 Q2: find \(\hat{\boldsymbol\beta}\) and an SE from an incomplete \((\boldsymbol{X}'\boldsymbol{X})^{-1}\) Slides p.54

**What** Slides p.54

Lecture 7 · p.54 · Practice Q2 Consider the usual multiple linear regression model.
(a) Suppose that \(n=50\) and \[(\boldsymbol{X}'\boldsymbol{X})^{-1}=\left[\begin{array}{ccc}1&.25&.25\\?&.5&-.25\\?&?&2\end{array}\right],\quad \boldsymbol{X}'\boldsymbol{y}=\left[\begin{array}{c}2\\1.2\\-3\end{array}\right],\] but unfortunately the values of the elements in the lower corner of \((\boldsymbol{X}'\boldsymbol{X})^{-1}\) have been lost. Can you still find \(\hat{\boldsymbol\beta}\)? If so, please calculate it. Otherwise, explain why not.
(b) In addition to the data above, suppose that \(\sum_{i=1}^n(y_i-\boldsymbol{x}_i'\hat{\boldsymbol\beta})^2=2.5\). What is the standard error of \(\hat\beta_1\)?

"The usual model": \(\boldsymbol{y}=\boldsymbol{X}\boldsymbol\beta+\boldsymbol\epsilon\), \(\boldsymbol\epsilon\sim MVN(\boldsymbol{0},\sigma^2\boldsymbol{I})\), \(\boldsymbol{X}\) is \(n\times(p+1)\) with a first column of 1s. Added

\(\boldsymbol{x}_i'\) is row \(i\) of \(\boldsymbol{X}\), so \(\boldsymbol{x}_i'\hat{\boldsymbol\beta}=\hat y_i\). The sum in (b) is \(\boldsymbol{e}'\boldsymbol{e}\).

\((\boldsymbol{X}'\boldsymbol{X})^{-1}\) is symmetric, so \(A_{jk}=A_{kj}\) recovers each lost entry.

**How** Added

Find \(\hat{\boldsymbol\beta}\) and \(\mathrm{SE}(\hat\beta_j)\) from matrices only

- **Complete \(\boldsymbol{V}=(\boldsymbol{X}'\boldsymbol{X})^{-1}\).** Copy each upper entry to its mirror below the diagonal.
- **Calculate \(\hat{\boldsymbol\beta}=(\boldsymbol{X}'\boldsymbol{X})^{-1}\boldsymbol{X}'\boldsymbol{y}\).** Entry \(j\): row \(j\) of \(\boldsymbol{V}\) times \(\boldsymbol{X}'\boldsymbol{y}\), entry by entry, then add.
- **Find \(p\) and the degrees of freedom.** \(\boldsymbol{V}\) is \((p+1)\times(p+1)\). Calculate \(\hat\sigma^2=\boldsymbol{e}'\boldsymbol{e}/(n-(p+1))\).
- **Calculate the SE.** \(\mathrm{SE}(\hat\beta_j)=\sqrt{\hat\sigma^2V_{jj}}\). \(V_{11}\) is in row 2, column 2.

**Self-check:** \(\boldsymbol{V}'=\boldsymbol{V}\). Each diagonal entry is positive.

**Self-check:** \(\hat{\boldsymbol\beta}\) has length \(p+1\), as \(\boldsymbol{X}'\boldsymbol{y}\).

**Example · Q2** Added

1

Complete \(\boldsymbol{V}\) How step 1

\[V_{10}=V_{01}=.25,\quad V_{20}=V_{02}=.25,\quad V_{21}=V_{12}=-.25\]

2

\[(\boldsymbol{X}'\boldsymbol{X})^{-1}=\left[\begin{array}{ccc}1&.25&.25\\.25&.5&-.25\\.25&-.25&2\end{array}\right]\]

(a): yes. Why proves the symmetry.

3

Calculate \(\hat{\boldsymbol\beta}\) How step 2

\[\hat{\boldsymbol\beta}=\left[\begin{array}{ccc}1&.25&.25\\.25&.5&-.25\\.25&-.25&2\end{array}\right]\left[\begin{array}{c}2\\1.2\\-3\end{array}\right]\]

4

\[\hat{\boldsymbol\beta}=\left[\begin{array}{c}1(2)+.25(1.2)+.25(-3)\\.25(2)+.5(1.2)+(-.25)(-3)\\.25(2)+(-.25)(1.2)+2(-3)\end{array}\right]\]

5

\[\hat{\boldsymbol\beta}=\left[\begin{array}{c}2+0.3-0.75\\0.5+0.6+0.75\\0.5-0.3-6\end{array}\right]\]

6

\[\hat{\boldsymbol\beta}=\left[\begin{array}{c}1.55\\1.85\\-5.80\end{array}\right]\]

7

Find \(p\) and \(\hat\sigma^2\) How step 3

\[p+1=3\ \Rightarrow\ p=2,\qquad n-(p+1)=50-3=47\]

8

\[\hat\sigma^2=\frac{\sum_{i=1}^n(y_i-\boldsymbol{x}_i'\hat{\boldsymbol\beta})^2}{n-(p+1)}=\frac{2.5}{47}=0.05319149\]

9

Calculate the SE How step 4

\[\mathrm{SE}(\hat\beta_1)=\sqrt{\hat\sigma^2V_{11}}=\sqrt{\frac{2.5}{47}\times0.5}\]

\(V_{11}=.5\) (row 2, column 2).

10

\[\mathrm{SE}(\hat\beta_1)=\sqrt{0.02659574}\]

11

\[\mathrm{SE}(\hat\beta_1)=0.1630820\]

**Why** Added

Rules: \((\boldsymbol{A}\boldsymbol{B})'=\boldsymbol{B}'\boldsymbol{A}'\); \((\boldsymbol{A}^{-1})'=(\boldsymbol{A}')^{-1}\) for invertible \(\boldsymbol{A}\).

1

\[(\boldsymbol{X}'\boldsymbol{X})'=\boldsymbol{X}'(\boldsymbol{X}')'\]

First rule, \(\boldsymbol{A}=\boldsymbol{X}'\), \(\boldsymbol{B}=\boldsymbol{X}\).

2

\[(\boldsymbol{X}'\boldsymbol{X})'=\boldsymbol{X}'\boldsymbol{X}\]

\((\boldsymbol{X}')'=\boldsymbol{X}\): \(\boldsymbol{X}'\boldsymbol{X}\) is symmetric.

3

\[\big((\boldsymbol{X}'\boldsymbol{X})^{-1}\big)'=\big((\boldsymbol{X}'\boldsymbol{X})'\big)^{-1}\]

Second rule.

4

\[\big((\boldsymbol{X}'\boldsymbol{X})^{-1}\big)'=(\boldsymbol{X}'\boldsymbol{X})^{-1}\]

Line 2. ∎

### 06.3 Q3: three equations about residuals Slides p.55

Tools: \(\hat{\boldsymbol{y}}=\boldsymbol{X}\hat{\boldsymbol\beta}\), \(\boldsymbol{e}=\boldsymbol{y}-\hat{\boldsymbol{y}}\), and \(\boldsymbol{X}'\boldsymbol{e}=\boldsymbol{0}\) (slide p.9).

**What** Slides p.55

Lecture 7 · p.55 · Practice Q3 Consider the usual multiple linear regression model.
(a) Let \(\hat{\boldsymbol{y}}=\boldsymbol{X}\hat{\boldsymbol\beta}\) and \(\boldsymbol{e}=\boldsymbol{y}-\hat{\boldsymbol{y}}\). Show that \(\sum_{i=1}^n\hat y_ie_i=\hat{\boldsymbol{y}}'\boldsymbol{e}=0\).
(b) Show that \(\boldsymbol{e}'\boldsymbol{e}=\boldsymbol{y}'\boldsymbol{y}-\hat{\boldsymbol\beta}'\boldsymbol{X}'\boldsymbol{X}\hat{\boldsymbol\beta}\).
(c) Show that for any vector \(\boldsymbol{a}=(a_1,\dots,a_p)\), \(\boldsymbol{a}'\boldsymbol{X}'\boldsymbol{e}=0\).

Lecture 7 · p.9 Note: \(\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{0}\). Why? \[\boldsymbol{X}^T\boldsymbol{e}=\boldsymbol{X}^T(\boldsymbol{y}-\boldsymbol{H}\boldsymbol{y})=\boldsymbol{X}^T\boldsymbol{y}-\boldsymbol{X}^T\boldsymbol{X}(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T\boldsymbol{y}=\boldsymbol{X}^T\boldsymbol{y}-\boldsymbol{X}^T\boldsymbol{y}=\boldsymbol{0}\]

\(\boldsymbol{u}'\boldsymbol{v}=\sum_iu_iv_i\) is one number, so \(\sum_{i=1}^n\hat y_ie_i=\hat{\boldsymbol{y}}'\boldsymbol{e}\). Added

\(\boldsymbol{X}'\boldsymbol{e}=\boldsymbol{0}\): \(\boldsymbol{e}\) has inner product 0 with each column of \(\boldsymbol{X}\).

In (c), \(\boldsymbol{a}'\boldsymbol{X}'\boldsymbol{e}\) needs \(\boldsymbol{a}\) with \(p+1\) entries; the slide writes \((a_1,\dots,a_p)\). The proof holds for any \(\boldsymbol{a}\) of the correct length.

**How** Added

Prove a residual equation with \(\boldsymbol{X}'\boldsymbol{e}=\boldsymbol{0}\)

- **Substitute a definition.** Replace \(\hat{\boldsymbol{y}}\) with \(\boldsymbol{X}\hat{\boldsymbol\beta}\), or \(\boldsymbol{e}\) with \(\boldsymbol{y}-\hat{\boldsymbol{y}}\).
- **Expand the transpose.** Use \((\boldsymbol{A}\boldsymbol{B})'=\boldsymbol{B}'\boldsymbol{A}'\) to get a term with \(\boldsymbol{X}'\boldsymbol{e}\).
- **Substitute \(\boldsymbol{X}'\boldsymbol{e}=\boldsymbol{0}\).**
- **Simplify.** Use \(c'=c\) for each \(1\times1\) number \(c\).

**Self-check:** \(\hat{\boldsymbol{y}}'\boldsymbol{e}\), \(\boldsymbol{e}'\boldsymbol{e}\), and \(\boldsymbol{a}'\boldsymbol{X}'\boldsymbol{e}\) are all \(1\times1\).

**Example · Data set 2** Added

Data set 2 (Unit 02): \(n=4\), \(p=1\), \(x=(0,1,2,3)\), \(y=(1,3,2,5)\), \(\boldsymbol{X}'\boldsymbol{X}=\left[\begin{array}{cc}4&6\\6&14\end{array}\right]\), \(\hat{\boldsymbol\beta}=(1.1,\ 1.1)'\).

\(\hat{\boldsymbol{y}}=(1.1,\ 2.2,\ 3.3,\ 4.4)'\), \(\boldsymbol{e}=(-0.1,\ 0.8,\ -1.3,\ 0.6)'\).

1

Check \(\boldsymbol{X}'\boldsymbol{e}=\boldsymbol{0}\)

\[\sum e_i=-0.1+0.8-1.3+0.6=0,\qquad \sum x_ie_i=0+0.8-2.6+1.8=0\]

2

(a) \(\hat{\boldsymbol{y}}'\boldsymbol{e}\)

\[\hat{\boldsymbol{y}}'\boldsymbol{e}=1.1(-0.1)+2.2(0.8)+3.3(-1.3)+4.4(0.6)=-0.11+1.76-4.29+2.64=0\]

3

(b) \(\boldsymbol{e}'\boldsymbol{e}\) and \(\boldsymbol{y}'\boldsymbol{y}-\hat{\boldsymbol\beta}'\boldsymbol{X}'\boldsymbol{X}\hat{\boldsymbol\beta}\)

\[\boldsymbol{e}'\boldsymbol{e}=0.01+0.64+1.69+0.36=2.70,\qquad \boldsymbol{y}'\boldsymbol{y}=1+9+4+25=39\]

4

\[\boldsymbol{X}'\boldsymbol{X}\hat{\boldsymbol\beta}=\left[\begin{array}{c}4(1.1)+6(1.1)\\6(1.1)+14(1.1)\end{array}\right]=\left[\begin{array}{c}11\\22\end{array}\right],\qquad \hat{\boldsymbol\beta}'\boldsymbol{X}'\boldsymbol{X}\hat{\boldsymbol\beta}=1.1(11)+1.1(22)=36.3\]

5

\[\boldsymbol{y}'\boldsymbol{y}-\hat{\boldsymbol\beta}'\boldsymbol{X}'\boldsymbol{X}\hat{\boldsymbol\beta}=39-36.3=2.7=\boldsymbol{e}'\boldsymbol{e}\]

6

(c) Take \(\boldsymbol{a}=(2,-1)'\)

\[\boldsymbol{a}'\boldsymbol{X}'\boldsymbol{e}=2(0)+(-1)(0)=0\]

\(\boldsymbol{X}'\boldsymbol{e}=(0,0)'\), so any \(\boldsymbol{a}\) gives 0.

Figure 06.1 shows (a) for the Q1 model (46 patients). Each point is \((\hat y_i,e_i)\). All \(\hat y_i>0\), so green points (\(e_i>0\)) give positive \(\hat y_ie_i\). Added

[figure]
Figure 06.1 · Residuals against fitted values, Q1 model. 25 green points: \(\sum\hat y_ie_i=11755.906\). 21 orange points (\(e_i<0\)): −11755.906. They cancel: \(\hat{\boldsymbol{y}}'\boldsymbol{e}=0\).

Write each proof with the How steps before you open the answer.

**Why** Added

Answer Q3(a): \(\hat{\boldsymbol{y}}'\boldsymbol{e}=0\)

1

\[\sum_{i=1}^n\hat y_ie_i=\hat{\boldsymbol{y}}'\boldsymbol{e}\]

Inner product.

2

\[\hat{\boldsymbol{y}}'\boldsymbol{e}=(\boldsymbol{X}\hat{\boldsymbol\beta})'\boldsymbol{e}\]

\(\hat{\boldsymbol{y}}=\boldsymbol{X}\hat{\boldsymbol\beta}\).

3

\[\hat{\boldsymbol{y}}'\boldsymbol{e}=\hat{\boldsymbol\beta}'\boldsymbol{X}'\boldsymbol{e}\]

\((\boldsymbol{A}\boldsymbol{B})'=\boldsymbol{B}'\boldsymbol{A}'\).

4

\[\hat{\boldsymbol{y}}'\boldsymbol{e}=\hat{\boldsymbol\beta}'\boldsymbol{0}\]

Slide p.9.

5

\[\hat{\boldsymbol{y}}'\boldsymbol{e}=0\]

∎

Answer Q3(b): \(\boldsymbol{e}'\boldsymbol{e}=\boldsymbol{y}'\boldsymbol{y}-\hat{\boldsymbol\beta}'\boldsymbol{X}'\boldsymbol{X}\hat{\boldsymbol\beta}\)

Plan: write the first \(\boldsymbol{e}\) as \(\boldsymbol{y}-\hat{\boldsymbol{y}}\), remove \(\hat{\boldsymbol{y}}'\boldsymbol{e}\) by (a), then use the normal equations \(\boldsymbol{X}'\boldsymbol{X}\hat{\boldsymbol\beta}=\boldsymbol{X}'\boldsymbol{y}\) (slide p.4).

1

\[\boldsymbol{e}'\boldsymbol{e}=(\boldsymbol{y}-\hat{\boldsymbol{y}})'\boldsymbol{e}\]

First factor only.

2

\[\boldsymbol{e}'\boldsymbol{e}=\boldsymbol{y}'\boldsymbol{e}-\hat{\boldsymbol{y}}'\boldsymbol{e}\]

3

\[\boldsymbol{e}'\boldsymbol{e}=\boldsymbol{y}'\boldsymbol{e}\]

Part (a).

4

\[\boldsymbol{e}'\boldsymbol{e}=\boldsymbol{y}'(\boldsymbol{y}-\boldsymbol{X}\hat{\boldsymbol\beta})\]

\(\boldsymbol{e}=\boldsymbol{y}-\boldsymbol{X}\hat{\boldsymbol\beta}\).

5

\[\boldsymbol{e}'\boldsymbol{e}=\boldsymbol{y}'\boldsymbol{y}-\boldsymbol{y}'\boldsymbol{X}\hat{\boldsymbol\beta}\]

6

\[\boldsymbol{e}'\boldsymbol{e}=\boldsymbol{y}'\boldsymbol{y}-(\boldsymbol{X}'\boldsymbol{y})'\hat{\boldsymbol\beta}\]

\(\boldsymbol{y}'\boldsymbol{X}=(\boldsymbol{X}'\boldsymbol{y})'\).

7

\[\boldsymbol{e}'\boldsymbol{e}=\boldsymbol{y}'\boldsymbol{y}-(\boldsymbol{X}'\boldsymbol{X}\hat{\boldsymbol\beta})'\hat{\boldsymbol\beta}\]

Normal equations.

8

\[\boldsymbol{e}'\boldsymbol{e}=\boldsymbol{y}'\boldsymbol{y}-\hat{\boldsymbol\beta}'(\boldsymbol{X}'\boldsymbol{X})'\hat{\boldsymbol\beta}\]

\((\boldsymbol{A}\boldsymbol{B})'=\boldsymbol{B}'\boldsymbol{A}'\).

9

\[\boldsymbol{e}'\boldsymbol{e}=\boldsymbol{y}'\boldsymbol{y}-\hat{\boldsymbol\beta}'\boldsymbol{X}'\boldsymbol{X}\hat{\boldsymbol\beta}\]

\(\boldsymbol{X}'\boldsymbol{X}\) is symmetric (Section 06.2). ∎

Answer Q3(c): \(\boldsymbol{a}'\boldsymbol{X}'\boldsymbol{e}=0\)

1

\[\boldsymbol{a}'\boldsymbol{X}'\boldsymbol{e}=\boldsymbol{a}'(\boldsymbol{X}'\boldsymbol{e})\]

Associative.

2

\[\boldsymbol{a}'\boldsymbol{X}'\boldsymbol{e}=\boldsymbol{a}'\boldsymbol{0}\]

Slide p.9.

3

\[\boldsymbol{a}'\boldsymbol{X}'\boldsymbol{e}=0\]

True for all \(\boldsymbol{a}\). Part (a) is \(\boldsymbol{a}=\hat{\boldsymbol\beta}\). ∎

### 06.4 Practice Added

**P1.** For the Q1 model, estimate \(\beta_1-\beta_2\), give its SE, and interpret it. Use \(\hat\beta_1=-1.1416117\) (midpoint of the Age interval, slide p.51), \(\hat\sigma^2V_{11}=0.0461385\), and \(\hat\sigma^2V_{12}=-0.0322300\). The last two come from satisfaction.csv, not the slides.

Answer P1

1

Write \(\boldsymbol{a}\) and estimate Section 06.1, How steps 1–2

\[\boldsymbol{a}=(0,1,-1,0)^T,\quad \hat\beta_1-\hat\beta_2=-1.1416117-(-0.4420041)=-0.6996076\]

2

Estimate the variance Section 06.1, How step 3

\[\boldsymbol{a}^T\widehat{\mathrm{Var}}(\hat{\boldsymbol\beta})\boldsymbol{a}=\hat\sigma^2V_{11}+\hat\sigma^2V_{22}-2\hat\sigma^2V_{12}\]

\(a_1=1\), \(a_2=-1\): the cross term is negative.

3

\[\boldsymbol{a}^T\widehat{\mathrm{Var}}(\hat{\boldsymbol\beta})\boldsymbol{a}=0.0461385+0.2420303-2(-0.0322300)=0.2881688+0.0644600=0.3526288\]

4

Take the square root Section 06.1, How step 4

\[\mathrm{SE}(\hat\beta_1-\hat\beta_2)=\sqrt{0.3526288}=0.5938256\]

5

Interpret Section 06.1, How steps 5–6

\[E[y_i\mid x_1+1,x_2,x_3]-E[y_i\mid x_1,x_2+1,x_3]=\beta_1-\beta_2\]

Group 1: Age +1. Group 2: Severity +1. Stress equal. Group 1 mean satisfaction: 0.70 lower (SE = 0.59).

**P2.** From Q1(d), construct a 95% confidence interval for \(\beta_2+\beta_3\). Use \(t_{0.975,\,42}=2.0180817\).

Answer P2

Form of slide p.49: estimate \(\pm\ t_{1-\alpha/2,\,n-(p+1)}\times\mathrm{SE}\), with \(n-(p+1)=46-4=42\).

1

\[(\hat\beta_2+\hat\beta_3)\pm t_{0.975,\,42}\,\mathrm{SE}(\hat\beta_2+\hat\beta_3)\]

2

\[-13.9121674\pm2.0180817\times6.8603213\]

From Q1(d).

3

\[-13.9121674\pm13.8446889\]

4

\[(-27.7568563,\ -0.0674785)\]

Excludes 0.

**P3.** Q2 setup. Calculate \(\mathrm{SE}(\hat\beta_2)\) and \(t^{obs}\) for \(H_0:\beta_2=0\). Test at \(\alpha=0.05\) with \(t_{0.975,\,47}=2.0117405\).

Answer P3

1

Calculate the SE Section 06.2, How step 4

\[\mathrm{SE}(\hat\beta_2)=\sqrt{\hat\sigma^2V_{22}}=\sqrt{\frac{2.5}{47}\times2}=\sqrt{0.10638298}\]

\(V_{22}=2\) (row 3, column 3).

2

\[\mathrm{SE}(\hat\beta_2)=0.3261640\]

3

Test statistic Slides p.48

\[t^{obs}=\frac{\hat\beta_2-0}{\mathrm{SE}(\hat\beta_2)}=\frac{-5.80}{0.3261640}=-17.7825\]

4

Compare with the null distribution \(t_{47}\)

\[|t^{obs}|=17.7825>2.0117405=t_{0.975,\,47}\]

Reject \(H_0:\beta_2=0\) at \(\alpha=0.05\).
