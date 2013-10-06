function delTabElement(oldTab, element)
{
	var newTab = new array();
	var j=0;	

	for (i =0;i<newTab.length; ++i)
	{
		if (oldTab[i] != element)
		{
			newTab[j++]=oldTab[i];
		}
	}	

	return newTab;

} 
