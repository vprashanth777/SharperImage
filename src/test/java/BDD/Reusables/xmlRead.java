package BDD.Reusables;

import org.junit.Test;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.XMLReader;
import org.xml.sax.helpers.XMLReaderFactory;
import org.w3c.dom.Node;
import org.w3c.dom.Element;
import java.io.File;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class xmlRead {
	

	@Test
	public List<String> readxml(String URL)
	{
		NodeList nList = null;
		List<String> List=new ArrayList<String>();
		 try {
			 
			 XMLReader myReader = XMLReaderFactory.createXMLReader();
			 //myReader.setContentHandler(handler);
			 myReader.parse(new InputSource(new URL("https://www.sharperimage.com/si/productSitemap.xml").openStream()));

			 // or if you prefer DOM:
			 DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
			 DocumentBuilder db = dbf.newDocumentBuilder();
			 Document doc = db.parse(new URL("https://www.sharperimage.com/si/productSitemap.xml").openStream());

			/*	File fXmlFile = new File("https://www.sharperimage.com/si/productSitemap.xml");
				DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
				DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
				Document doc = dBuilder.parse(fXmlFile);
           */
				//optional, but recommended
				//read this - http://stackoverflow.com/questions/13786607/normalization-in-dom-parsing-with-java-how-does-it-work
				doc.getDocumentElement().normalize();

				System.out.println("Root element :" + doc.getDocumentElement().getNodeName());

				 nList = doc.getElementsByTagName("url");
                 
				
		 
				
				System.out.println("----------------------------");

				for (int temp = 0; temp < nList.getLength(); temp++) {

					Node nNode = nList.item(temp);

					//System.out.println("\nCurrent Element :" + nNode.getNodeName());

					if (nNode.getNodeType() == Node.ELEMENT_NODE) {

						Element eElement = (Element) nNode;

						List.add(eElement.getElementsByTagName("loc").item(0).getTextContent());
						//System.out.println("First Name : " + eElement.getElementsByTagName("loc").item(0).getTextContent());
						

					}
				}
			    }
			    
			    
			     
				catch (Exception e) {
				e.printStackTrace();
			    }
		 
		 return List;
	
	}
	

}
