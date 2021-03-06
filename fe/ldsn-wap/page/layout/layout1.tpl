{%extends file="common/page/base.tpl"%}
<head>

{%block name="head"%}
{%/block%}
</head>
{%block name="body"%}
<section node-type="ldsn-frame" class="ldsn-frame">
	<section node-type="ldsn-box" class="ldsn-box" style="">
		<menu node-type="ldsn-menu" class="ldsn-menu">
			{%block name="ldsn-menu"%}{%/block%}
		</menu>

		<section node-type="ldsn-main" class="ldsn-main">
			<section node-type="ldsn-main-frame" class="ldsn-main-frame"></section>
			<header node-type="ldsn-header" class="ldsn-header">
				{%block name="ldsn-header"%}{%/block%}
			</header>
			<section node-type="ldsn-content" class="ldsn-content">
				{%block name="ldsn-content"%}{%/block%}
			</section>
			<section node-type="ldsn-share" class="ldsn-share">
				{%block name="ldsn-share"%}{%/block%}
			</section>
			<section node-type="ldsn-edit-article" class="ldsn-edit-article">
				{%block name="ldsn-edit-article"%}{%/block%}
			</section>
			{%block name="ldsn-absolute"%}{%/block%}
			{%/block%}
		</section>
	</section>
</section>
{%block name="else"%}
{%/block%}